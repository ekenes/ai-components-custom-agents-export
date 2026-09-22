import { createSkillAgent } from "@arcgis/ai-components/agents/runtime/skill/createSkillAgent.js";

const serviceAreaSkill = String.raw`---
name: service-area
description: Calculates areas reachable by driving or walking from known facilities or destinations.
allowed-tools: findServiceAreas addServiceAreaFeatures
---

# Service Area

- Use findServiceAreas to calculate the area reachable by driving or walking based on time or distance.
- After findServiceAreas succeeds, use its calculationId with addServiceAreaFeatures to add the calculated polygons and facilities to the map.
- Always complete both steps for a service area request. Do not claim the features were added until addServiceAreaFeatures succeeds.
- Use the facility coordinates from the runtime context.
- Do not ask about output format.
- Do not invent facility locations or coordinates. If coordinates are unavailable, ask the user to navigate to the location first.
`;

const description = `You are a network analysis assistant that helps users perform geospatial network operations, such as calculating service areas, routes, and geocoding locations.`;

type SharedState = Record<
  string,
  { value?: { location?: { x?: number; y?: number } } }
>;

export const NetworkAnalysisAgent = createSkillAgent({
  id: "networkAnalysis",
  name: "Network Analysis",
  description,
  skillLoaders: [async () => serviceAreaSkill],
  toolLoaders: {
    findServiceAreas: async () =>
      (await import("./tools/serviceArea")).findServiceAreasTool.getTool(),
    addServiceAreaFeatures: async () =>
      (
        await import("./tools/addServiceAreaFeatures")
      ).addServiceAreaFeaturesTool.getTool(),
  },
  modelTier: "fast",
  systemPrompt: "You are an ArcGIS network analysis agent.",
  runtimeContextLoader: ({ config }) => {
    const sharedState = config?.configurable?.agentExecutionContext
      ?.sharedState as SharedState | undefined;
    const location = sharedState?.lastResolvedLocation?.value?.location;

    return JSON.stringify({
      facilityCoordinates: {
        x: location?.x,
        y: location?.y,
      },
    });
  },
});
