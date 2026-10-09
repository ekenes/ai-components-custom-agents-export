import { sendUXSuggestion } from "@arcgis/ai-components/utils/index.js";
import type { AgentToolResponse } from "@arcgis/ai-components/agents/tools/shared/types.js";
import {
  FunctionTool,
  type FunctionToolExecute,
} from "@arcgis/ai-components/agent-utils/tools/FunctionTool.js";
import z from "zod";
import { getNetworkAnalysisContext } from "../../context";
import {
  getSharedPointResources,
  resolveSharedPointResource,
} from "../shared/pointResources";
import { solveRoute } from "./core";

export const solveRouteSchema = z.object({
  sharedResourceIds: z
    .array(z.string())
    .min(2)
    .describe(
      "Exact point resource IDs from listSharedResources, ordered from origin through any waypoints to destination.",
    ),
  travelModeName: z.enum([
    "Walking Time",
    "Walking Distance",
    "Driving Time",
    "Driving Distance",
    "Trucking Time",
    "Trucking Distance",
  ]),
});

export const solveRouteWrapper: FunctionToolExecute<
  z.infer<typeof solveRouteSchema>,
  AgentToolResponse<{ layerId: string }>
> = async ({ sharedResourceIds, travelModeName }, config) => {
  const { mapElement } = getNetworkAnalysisContext(config);
  const resources = getSharedPointResources(config);
  const stops = sharedResourceIds.map((id) =>
    resolveSharedPointResource(id, resources),
  );
  const result = await solveRoute(
    stops,
    travelModeName,
    mapElement,
    config?.signal,
  );

  await sendUXSuggestion(
    { type: "directions", data: { layerId: result.layerId } },
    config,
  );

  return [
    JSON.stringify({
      message:
        "Route solved and added to the map. Interactive directions are displayed in chat. Do not repeat turn-by-turn steps in text.",
      layerId: result.layerId,
      totalDistanceMeters: result.totalDistanceMeters,
      totalDurationMinutes: result.totalDurationMinutes,
    }),
    {
      value: { layerId: result.layerId },
      sharedResourceAdditions: [
        {
          kind: "polyline",
          description: result.description,
          payload: result.geometry,
        },
      ],
    },
  ];
};

export const solveRouteTool = new FunctionTool({
  name: "solveRoute",
  description:
    "Solves a route between shared point resources in the supplied order, updates and adds a RouteLayer to the map, displays interactive directions in chat, and publishes route geometry as a shared polyline. Do not repeat turn-by-turn steps in text.",
  execute: solveRouteWrapper,
  inputSchema: solveRouteSchema,
  responseFormat: "content-and-artifact",
  resultMode: "continue",
});
