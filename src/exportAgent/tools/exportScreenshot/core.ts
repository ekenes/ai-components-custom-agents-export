import type { ExportScreenshotOptions } from "../../types/types";
import {
  appendDirectionsToScreenshot,
  getRouteDirectionText,
} from "./directions";

export const exportScreenshot = async (
  options: ExportScreenshotOptions,
): Promise<{ screenshotUrl: string; thumbnailUrl: string }> => {
  const { mapElement, filename } = options;

  return mapElement
    .takeScreenshot()
    .then(async (screenshot) => {
      const dataUrl = screenshot?.dataUrl;
      if (!dataUrl) {
        throw new Error("Screenshot capture completed without an image URL.");
      }
      console.log("Screenshot captured successfully.");
      const screenshotUrl = await appendDirectionsToScreenshot(
        dataUrl,
        getRouteDirectionText(mapElement),
        filename,
      );
      return { screenshotUrl, thumbnailUrl: dataUrl };
    })
    .catch((error) => {
      console.error("Error capturing screenshot:", error);
      throw new Error("Failed to capture screenshot. Please try again.");
    });
};
