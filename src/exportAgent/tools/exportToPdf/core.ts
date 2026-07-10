import * as print from "@arcgis/core/rest/print";
import PrintParameters from "@arcgis/core/rest/support/PrintParameters";
import PrintTemplate from "@arcgis/core/rest/support/PrintTemplate";
import Portal from "@arcgis/core/portal/Portal";
import type { ExportToPdfOptions } from "../../types/types";

export const exportToPdf = async (
  options: ExportToPdfOptions,
): Promise<string> => {
  const { mapElement, filename } = options;
  const view = mapElement.view;

  const portal = Portal.getDefault();
  const helperServices = portal.helperServices as {
    printTask?: { url?: string };
  };
  const printServiceUrl = helperServices?.printTask?.url;

  if (!printServiceUrl) {
    throw new Error("Print service not found in helperServices.");
  }

  const template = new PrintTemplate({
    format: "pdf",
    layout: "letter-ansi-a-landscape",
    // Fit the current visible extent into the layout frame instead of clipping to current scale.
    scalePreserved: false,
    layoutOptions: {
      titleText: filename,
    },
  });

  const params = new PrintParameters({
    view,
    template,
  });

  return print
    .execute(printServiceUrl, params, {})
    .then((result) => {
      if (!result?.url) {
        throw new Error("Print task completed without a PDF URL.");
      }
      console.log("PDF exported successfully:", result.url);
      return result.url;
    })
    .catch((error) => {
      console.error("Error exporting PDF:", error);
      throw new Error("Failed to export PDF. Please try again.");
    });
};
