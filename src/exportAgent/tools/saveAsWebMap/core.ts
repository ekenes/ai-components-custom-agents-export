import type { SaveWebMapOptions } from "../../types/types";
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import type WebMap from "@arcgis/core/WebMap";
import type FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import type MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import type PortalItem from "@arcgis/core/portal/PortalItem";

export const saveAsWebMap = async (
  options: SaveWebMapOptions,
): Promise<PortalItem | null | undefined> => {
  const { title, mapElement } = options;

  const webMap = (mapElement.map as WebMap)!;

  await webMap.when();

  await webMap.updateFrom(mapElement.view);

  webMap.layers
    .flatten((layer) => {
      if (layer.type === "group" || layer.type === "map-image") {
        return (
          (layer as GroupLayer).layers ||
          (layer as MapImageLayer).sublayers ||
          []
        );
      }
      return [];
    })
    .forEach((layer) => {
      if (layer.type === "feature") {
        const featureLayer = layer as FeatureLayer;
        if (featureLayer.featureEffect) {
          featureLayer.featureEffect.excludedLabelsVisible = true;
        }
      }
    });

  return webMap
    .saveAs({
      title,
    })
    .catch((error) => {
      console.error("Error exporting web map:", error);
      throw new Error("Failed to export web map. Please try again.");
    })
    .then((savedWebMap) => {
      console.log("Web map exported successfully:", savedWebMap);
      return savedWebMap;
    });
};
