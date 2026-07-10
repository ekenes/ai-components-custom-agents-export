import { saveAsWebMapTool } from "./saveAsWebMap";
import { exportToPdfTool } from "./exportToPdf/adapter";
import { exportScreenshotTool } from "./exportScreenshot/adapter";

export const agentTools = [
  saveAsWebMapTool,
  exportToPdfTool,
  exportScreenshotTool,
];
