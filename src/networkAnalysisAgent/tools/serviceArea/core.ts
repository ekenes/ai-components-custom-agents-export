// This file defines the tool for finding service areas (drive time polygons) using ArcGIS services.

import * as serviceArea from "@arcgis/core/rest/serviceArea";
import ServiceAreaParameters from "@arcgis/core/rest/support/ServiceAreaParameters";
import FeatureSet from "@arcgis/core/rest/support/FeatureSet";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import type { FindServiceAreasOptions } from "../../types/types";
import { fetchServiceDescription } from "@arcgis/core/rest/networkService.js";
import type { ArcgisMap } from "@arcgis/map-components/components/arcgis-map";
import Portal from "@arcgis/core/portal/Portal";

export type ServiceAreaCalculation = {
  driveTimeCutoffs: number[];
  facilities: Graphic[];
  polygons: Graphic[];
  travelDirection: FindServiceAreasOptions["travelDirection"];
  travelModeName: FindServiceAreasOptions["travelModeName"];
};

export type ServiceAreaCalculationResult = {
  calculationId: string;
  message: string;
  polygons: Graphic[];
};

const calculations = new Map<string, ServiceAreaCalculation>();

export const getServiceAreaCalculation = (calculationId: string) =>
  calculations.get(calculationId);

/**
 * Calculates service areas using the ArcGIS SDK without changing the map.
 */
export const findServiceAreas = async (
  options: FindServiceAreasOptions,
  mapElement: ArcgisMap,
): Promise<ServiceAreaCalculationResult> => {
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

  const facilityGraphics = facilities.map(
    (facility) =>
      new Graphic({
        geometry: new Point({
          x: facility.x,
          y: facility.y,
          spatialReference: { wkid: 4326 },
        }),
        attributes: { source: "network-analysis-service-area" },
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

  const result = await serviceArea.solve(serviceAreaUrl, serviceAreaParams, {});
  const polygons = result.serviceAreaPolygons?.features ?? [];
  const calculationId = crypto.randomUUID();

  calculations.set(calculationId, {
    driveTimeCutoffs,
    facilities: facilityGraphics,
    polygons,
    travelDirection,
    travelModeName,
  });

  return {
    calculationId,
    polygons,
    message: `Calculated ${polygons.length} service area polygon(s). Add the features to the map next using calculationId ${calculationId}.`,
  };
};
