import { createSkillAgent } from "@arcgis/ai-components/agents/runtime/skill/createSkillAgent.js";

const exportSkill = String.raw`---
name: map-export
description: Exports the current map as a web map, PDF, or screenshot.
allowed-tools: saveAsWebMap exportToPdf exportScreenshot
---

# Map Export

- Use saveAsWebMap to save the current map state as an ArcGIS Online web map.
- Use exportToPdf to export the current map state as a PDF.
- Use exportScreenshot to export the current map state as a PNG or JPEG image.
- Use exactly the tool that matches the requested export format.
`;

const description = `You are an agent that exports the state of the user's map in one of the following ways: Save a Web Map, Export to PDF, or Export screenshot. You will use the appropriate tool based on the user's request and provide clear instructions for any required input.`;

export const MapExportAgent = createSkillAgent({
  id: "mapExport",
  name: "Map Export Agent",
  description,
  skillLoaders: [async () => exportSkill],
  toolLoaders: {
    saveAsWebMap: async () =>
      (await import("./tools/saveAsWebMap")).saveAsWebMapTool.getTool(),
    exportToPdf: async () =>
      (await import("./tools/exportToPdf/adapter")).exportToPdfTool.getTool(),
    exportScreenshot: async () =>
      (
        await import("./tools/exportScreenshot/adapter")
      ).exportScreenshotTool.getTool(),
  },
  modelTier: "fast",
  systemPrompt: "You are an ArcGIS map export agent.",
});
