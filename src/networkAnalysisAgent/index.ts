import { createSkillAgent } from "@arcgis/ai-components/agents/runtime/skill/createSkillAgent.js";

const skillLoaders = [
  async (): Promise<string> =>
    (await import("./skills/networkAnalysis/SKILL.md?raw")).default,
] as const;

const description =
  "Calculates service areas and solves routes between shared locations, displays results on the map, and publishes reusable geometry.";

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
    solveRoute: async () => (await import("./tools/route")).solveRouteTool,
  },
  modelTier: "fast",
  systemPrompt: "You are an ArcGIS network analysis agent.",
  instructions:
    "Use shared resources from earlier agents for spatial inputs and publish reusable geometry through tool artifacts.",
});

// instructions needed for 2 or more skills
