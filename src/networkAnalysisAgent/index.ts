import { createSkillAgent } from "@arcgis/ai-components/agents/runtime/skill/createSkillAgent.js";

const skillLoaders = [
  async (): Promise<string> =>
    (await import("./skills/serviceArea/SKILL.md?raw")).default,
] as const;

const description = `You are a network analysis assistant that helps users perform geospatial network operations, such as calculating service areas, routes, and geocoding locations.`;

export const NetworkAnalysisAgent = createSkillAgent({
  id: "networkAnalysis",
  name: "Network Analysis",
  description,
  skillLoaders,
  toolLoaders: {
    findServiceAreas: async () =>
      (await import("./tools/serviceArea")).findServiceAreasTool,
    addServiceAreaFeatures: async () =>
      (
        await import("./tools/addServiceAreaFeatures")
      ).addServiceAreaFeaturesTool.getTool(),
  },
  modelTier: "fast",
  systemPrompt: "You are an ArcGIS network analysis agent.",
  instructions:
    "Use shared resources from earlier agents for spatial inputs and publish reusable geometry through tool artifacts.",
});
