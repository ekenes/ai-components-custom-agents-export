import { createSkillAgent } from "@arcgis/ai-components/agents/runtime/skill/createSkillAgent.js";

const skillLoaders = [
  async (): Promise<string> =>
    (await import("./skills/export/SKILL.md?raw")).default,
] as const;

const description = `You are an agent that exports the state of the user's map in one of the following ways: Save a Web Map, Export to PDF, or Export screenshot. You will use the appropriate tool based on the user's request and provide clear instructions for any required input.`;

export const MapExportAgent = createSkillAgent({
  id: "mapExport",
  name: "Map Export Agent",
  description,
  skillLoaders,
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
  instructions:
    "Use only the active skill and returned tool results to complete map export requests.",
});
