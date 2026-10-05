import type { ExportScreenshotOptions } from "../../types/types";
import {
  appendDirectionsToScreenshot,
  getRouteDirectionText,
} from "./directions";

export const exportScreenshot = async (
  options: ExportScreenshotOptions,
): Promise<string> => {
  const { mapElement } = options;

  return mapElement
    .takeScreenshot()
    .then(async (screenshot) => {
      const dataUrl = screenshot?.dataUrl;
      if (!dataUrl) {
        throw new Error("Screenshot capture completed without an image URL.");
      }
      console.log("Screenshot captured successfully.");
      return appendDirectionsToScreenshot(
        dataUrl,
        getRouteDirectionText(mapElement),
      );
    })
    .catch((error) => {
      console.error("Error capturing screenshot:", error);
      throw new Error("Failed to capture screenshot. Please try again.");
    });
};
