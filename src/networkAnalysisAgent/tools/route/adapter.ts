import { sendUXSuggestion } from "@arcgis/ai-components/utils/index.js";
import type { AgentToolResponse } from "@arcgis/ai-components/agents/tools/shared/types.js";
import { tool, type ToolRuntime } from "@langchain/core/tools";
import z from "zod";
import { getNetworkAnalysisContext } from "../../context";
import {
  resolveSharedPointResource,
  type SharedResourcesToolState,
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

export async function solveRouteWrapper(
  { sharedResourceIds, travelModeName }: z.infer<typeof solveRouteSchema>,
  runtime: ToolRuntime<SharedResourcesToolState>,
): Promise<AgentToolResponse<{ layerId: string }>> {
  const { mapElement } = getNetworkAnalysisContext(runtime);
  const resources = runtime.state?.agentExecutionContext?.sharedResources;
  const stops = sharedResourceIds.map((id) =>
    resolveSharedPointResource(id, resources),
  );
  const result = await solveRoute(
    stops,
    travelModeName,
    mapElement,
    runtime.signal,
  );

  await sendUXSuggestion(
    { type: "directions", data: { layerId: result.layerId } },
    runtime,
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
}

export const solveRouteTool = tool(solveRouteWrapper, {
  name: "solveRoute",
  description:
    "Solves a route between shared point resources in the supplied order, updates and adds a RouteLayer to the map, displays interactive directions in chat, and publishes route geometry as a shared polyline. Do not repeat turn-by-turn steps in text.",
  schema: solveRouteSchema,
  responseFormat: "content_and_artifact",
});
