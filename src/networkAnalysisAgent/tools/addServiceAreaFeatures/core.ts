import MapNotesLayer from "@arcgis/core/layers/MapNotesLayer";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import type { ArcgisMap } from "@arcgis/map-components/components/arcgis-map";
import { getServiceAreaCalculation } from "../serviceArea/core";

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
  const alpha = normalized.length === 8 ? normalized.slice(6, 8) : "ff";
  return [
    Number.parseInt(normalized.slice(0, 2), 16),
    Number.parseInt(normalized.slice(2, 4), 16),
    Number.parseInt(normalized.slice(4, 6), 16),
    Number.parseInt(alpha, 16),
  ];
};

const interpolateChannel = (start: number, end: number, ratio: number) =>
  Math.round(start + (end - start) * ratio);

const getWalkTimeColor = (minutes: number): Rgba => {
  if (minutes <= 5) return hexToRgba(WALK_TIME_COLORS[0]);
  if (minutes > 30) {
    return hexToRgba(WALK_TIME_COLORS[WALK_TIME_COLORS.length - 1]);
  }

  const step = (30 - 5) / (WALK_TIME_COLORS.length - 1);
  const segmentIndex = Math.min(
    WALK_TIME_COLORS.length - 2,
    Math.max(0, Math.floor((minutes - 5) / step)),
  );
  const ratio = (minutes - (5 + segmentIndex * step)) / step;
  const start = hexToRgba(WALK_TIME_COLORS[segmentIndex]);
  const end = hexToRgba(WALK_TIME_COLORS[segmentIndex + 1]);

  return [
    interpolateChannel(start[0], end[0], ratio),
    interpolateChannel(start[1], end[1], ratio),
    interpolateChannel(start[2], end[2], ratio),
    interpolateChannel(start[3], end[3], ratio),
  ];
};

const getBreakMinutes = (
  attributes: Record<string, unknown> | null | undefined,
): number | null => {
  if (!attributes) return null;

  for (const key of ["ToBreak", "toBreak", "Break", "break", "ToBreakValue"]) {
    const value = attributes[key];
    const parsed =
      typeof value === "number" ? value : Number.parseFloat(String(value));
    if (Number.isFinite(parsed)) return parsed;
  }

  const parsedName = Number.parseFloat(
    String(attributes.Name ?? attributes.name),
  );
  return Number.isFinite(parsedName) ? parsedName : null;
};

export const addServiceAreaFeatures = async (
  calculationId: string,
  mapElement: ArcgisMap,
): Promise<string> => {
  const calculation = getServiceAreaCalculation(calculationId);
  if (!calculation) {
    throw new Error(
      "Service area calculation not found. Calculate it again before adding features.",
    );
  }

  const serviceAreasLayer = mapElement.map?.allLayers.find(
    (layer) => layer.title === "Service Area",
  ) as MapNotesLayer | undefined;
  if (!serviceAreasLayer?.polygonLayer) {
    throw new Error(
      'The map does not contain a "Service Area" map notes layer.',
    );
  }

  serviceAreasLayer.polygonLayer.removeAll();
  mapElement.graphics.removeAll();
  const sortedCutoffs = [...calculation.driveTimeCutoffs].sort((a, b) => a - b);

  calculation.polygons.forEach((graphic, index) => {
    const breakMinutes =
      getBreakMinutes(
        graphic.attributes as Record<string, unknown> | undefined,
      ) ??
      sortedCutoffs[index % sortedCutoffs.length] ??
      5;
    const color = getWalkTimeColor(breakMinutes);
    graphic.symbol = new SimpleFillSymbol({
      style: "solid",
      color,
      outline: { color, width: 3 },
    });
    serviceAreasLayer.polygonLayer?.graphics.add(graphic);
  });
  serviceAreasLayer.visible = true;

  calculation.facilities.forEach((graphic) => {
    graphic.symbol = new SimpleMarkerSymbol({ color: "white", size: 8 });
    mapElement.graphics.add(graphic);
  });

  const lastPolygon = calculation.polygons.at(-1);
  if (lastPolygon?.geometry?.extent) {
    await mapElement.goTo(lastPolygon.geometry.extent.expand(1.2));
  }

  const direction =
    calculation.travelDirection === "to-facility" ? "to" : "from";
  return `Added ${calculation.polygons.length} service area polygon(s) for ${calculation.facilities.length} facility(ies) with ${calculation.driveTimeCutoffs.join(", ")} minute ${calculation.travelModeName.toLowerCase()} cutoffs ${direction} facilities.`;
};
