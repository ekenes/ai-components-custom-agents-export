// This file defines the tool for finding service areas (drive time polygons) using ArcGIS services.

import * as serviceArea from "@arcgis/core/rest/serviceArea";
import ServiceAreaParameters from "@arcgis/core/rest/support/ServiceAreaParameters";
import FeatureSet from "@arcgis/core/rest/support/FeatureSet";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import type { FindServiceAreasOptions } from "../../types/types";
import { fetchServiceDescription } from "@arcgis/core/rest/networkService.js";
import type { ArcgisMap } from "@arcgis/map-components/components/arcgis-map";
import MapNotesLayer from "@arcgis/core/layers/MapNotesLayer";
import Portal from "@arcgis/core/portal/Portal";

const SERVICE_AREA_GRAPHIC_SOURCE = "network-analysis-service-area";
const WALK_TIME_COLORS = [
  "#6058beff",
  "#419ecbff",
  "#2cdcc6ff",
  "#6fff99ff",
  "#ffff37ff",
] as const;

type Rgba = [number, number, number, number];

const hexToRgba = (hex: string): Rgba => {
  const normalized = hex.replace("#", "");
  const hasAlpha = normalized.length === 8;

  const r = Number.parseInt(normalized.slice(0, 2), 16);
  const g = Number.parseInt(normalized.slice(2, 4), 16);
  const b = Number.parseInt(normalized.slice(4, 6), 16);
  const a = hasAlpha ? Number.parseInt(normalized.slice(6, 8), 16) : 255;

  return [r, g, b, a];
};

const interpolateChannel = (start: number, end: number, ratio: number) =>
  Math.round(start + (end - start) * ratio);

const interpolateRgba = (start: Rgba, end: Rgba, ratio: number): Rgba => [
  interpolateChannel(start[0], end[0], ratio),
  interpolateChannel(start[1], end[1], ratio),
  interpolateChannel(start[2], end[2], ratio),
  interpolateChannel(start[3], end[3], ratio),
];

const getWalkTimeColor = (minutes: number): Rgba => {
  if (minutes <= 5) {
    return hexToRgba(WALK_TIME_COLORS[0]);
  }
  if (minutes > 30) {
    return hexToRgba(WALK_TIME_COLORS[WALK_TIME_COLORS.length - 1]);
  }

  // Evenly space the provided color stops across 5..30 minutes.
  const step = (30 - 5) / (WALK_TIME_COLORS.length - 1);
  const segmentIndex = Math.min(
    WALK_TIME_COLORS.length - 2,
    Math.max(0, Math.floor((minutes - 5) / step)),
  );

  const segmentStartMinute = 5 + segmentIndex * step;
  const ratio = (minutes - segmentStartMinute) / step;

  return interpolateRgba(
    hexToRgba(WALK_TIME_COLORS[segmentIndex]),
    hexToRgba(WALK_TIME_COLORS[segmentIndex + 1]),
    ratio,
  );
};

const getBreakMinutes = (
  attributes: Record<string, unknown> | null | undefined,
): number | null => {
  if (!attributes) {
    return null;
  }

  const numericCandidateKeys = [
    "ToBreak",
    "toBreak",
    "Break",
    "break",
    "ToBreakValue",
  ];

  for (const key of numericCandidateKeys) {
    const value = attributes[key];
    if (typeof value === "number" && Number.isFinite(value)) {
      return value;
    }
    if (typeof value === "string") {
      const parsed = Number.parseFloat(value);
      if (Number.isFinite(parsed)) {
        return parsed;
      }
    }
  }

  const nameValue = attributes.Name ?? attributes.name;
  if (typeof nameValue === "string") {
    const parsed = Number.parseFloat(nameValue);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }

  return null;
};

/**
 * Finds service areas (drive time polygons) using the ArcGIS SDK
 * and adds the resulting graphics to the map.
 */
export const findServiceAreas = async (
  options: FindServiceAreasOptions,
  mapElement: ArcgisMap,
): Promise<string> => {
  const { facilities, driveTimeCutoffs, travelModeName, travelDirection } =
    options;

  const portal = Portal.getDefault();
  const helperServices = portal.helperServices as {
    serviceArea: { url: string };
  };
  const serviceAreaUrl = helperServices.serviceArea.url;

  if (!serviceAreaUrl) {
    throw new Error("Service Area service not found in helperServices.");
  }

  const networkDescription = await fetchServiceDescription(serviceAreaUrl);
  const travelMode = networkDescription.supportedTravelModes?.find(
    (travelMode) => travelMode.name === travelModeName,
  );

  const serviceAreasLayer = mapElement.map!.allLayers.find(
    (layer) => layer.title === "Service Area",
  ) as MapNotesLayer;

  serviceAreasLayer.polygonLayer?.removeAll();
  mapElement.graphics.removeAll();

  // Create graphics for each facility location
  const facilityGraphics = facilities.map(
    (facility) =>
      new Graphic({
        geometry: new Point({
          x: facility.x,
          y: facility.y,
          spatialReference: { wkid: 4326 },
        }),
        attributes: {
          source: SERVICE_AREA_GRAPHIC_SOURCE,
        },
        symbol: new SimpleMarkerSymbol({
          color: "white",
          size: 8,
        }),
      }),
  );

  // Create the FeatureSet with facility graphics
  const featureSet = new FeatureSet({
    features: facilityGraphics,
  });

  // Set up ServiceAreaParameters
  const serviceAreaParams = new ServiceAreaParameters({
    facilities: featureSet,
    defaultBreaks: driveTimeCutoffs,
    trimOuterPolygon: true,
    outSpatialReference: mapElement.spatialReference,
    travelMode,
    travelDirection:
      travelDirection === "to-facility" ? "to-facility" : "from-facility",
  });

  // Solve the service area
  return await serviceArea.solve(serviceAreaUrl, serviceAreaParams, {}).then(
    async (result) => {
      let polygonCount = 0;

      if (result.serviceAreaPolygons?.features?.length) {
        const sortedCutoffs = [...driveTimeCutoffs].sort((a, b) => a - b);

        // Draw each service area polygon
        result.serviceAreaPolygons.features.forEach((graphic, index) => {
          const breakMinutes =
            getBreakMinutes(
              graphic.attributes as Record<string, unknown> | undefined,
            ) ??
            sortedCutoffs[index % sortedCutoffs.length] ??
            5;

          const serviceAreaColor = getWalkTimeColor(breakMinutes);

          graphic.symbol = new SimpleFillSymbol({
            style: "solid",
            color: serviceAreaColor,
            outline: {
              color: serviceAreaColor,
              width: 3,
            },
          });
          serviceAreasLayer.polygonLayer?.graphics.add(graphic);
          polygonCount++;
        });
        serviceAreasLayer.visible = true;
      }

      // Add facility point graphics on top
      facilityGraphics.forEach((graphic) => {
        mapElement.graphics.add(graphic);
      });

      const directionLabel = travelDirection === "to-facility" ? "to" : "from";
      const travelModeLabel = travelModeName.toLowerCase();

      // Zoom to the service area extent (last polygon is largest for multiple cutoffs)
      if (result.serviceAreaPolygons?.features?.length) {
        const lastPolygon =
          result.serviceAreaPolygons.features[polygonCount - 1];
        if (lastPolygon?.geometry) {
          if (lastPolygon.geometry?.extent) {
            await mapElement.goTo(lastPolygon.geometry.extent.expand(1.2));
          }
        }
      }

      return `Generated ${polygonCount} service area polygon(s) for ${facilities.length} facility(ies) with ${driveTimeCutoffs.join(", ")} minute ${travelModeLabel} cutoffs ${directionLabel} facilities.`;
    },
    (error) => {
      console.error("Service area solve error:", error);
      throw error;
    },
  );
};
