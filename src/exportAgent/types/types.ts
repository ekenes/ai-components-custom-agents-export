import type { ArcgisMap } from "@arcgis/map-components/components/arcgis-map";

export interface SaveWebMapOptions {
  mapElement: ArcgisMap;
  title: string;
}

export interface ExportToPdfOptions {
  mapElement: ArcgisMap;
  filename: string;
}

export interface ExportScreenshotOptions {
  mapElement: ArcgisMap;
  filename: string;
}
