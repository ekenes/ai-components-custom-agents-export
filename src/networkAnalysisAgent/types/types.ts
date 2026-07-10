import type SpatialReference from "@arcgis/core/geometry/SpatialReference";

export interface FacilityPoint {
  x: number;
  y: number;
}

export interface FindServiceAreasOptions {
  facilities: FacilityPoint[];
  driveTimeCutoffs: number[];
  travelModeName:
    | "Walking Time"
    | "Walking Distance"
    | "Driving Time"
    | "Driving Distance"
    | "Trucking Time"
    | "Trucking Distance";
  travelDirection: "from-facility" | "to-facility";
  outSpatialReference?: SpatialReference;
  serviceAreaUrl?: string;
}

/** Service area polygon geometry */
export interface ServiceAreaPolygonGeometry {
  rings: number[][][];
  spatialReference: { wkid: number };
}

/** Service area polygon result */
export interface ServiceAreaPolygon {
  geometry: ServiceAreaPolygonGeometry;
  attributes: {
    FromBreak: number;
    ToBreak: number;
    FacilityID?: number;
  };
}
