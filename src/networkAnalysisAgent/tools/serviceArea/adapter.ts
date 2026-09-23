// This file defines the adapter function and tool for finding service areas (drive time polygons)
// using ArcGIS services.
// The tool takes input parameters such as facility locations,
// drive time cutoffs, travel mode, and travel direction,
// and returns an identifier for the calculated service area.

import type { AgentToolResponse } from "@arcgis/ai-components/agents/tools/shared/types.js";
import { tool, type ToolRuntime } from "@langchain/core/tools";
import z from "zod";
import { findServiceAreas } from "./core";
import { getNetworkAnalysisContext } from "../../context/";

type FindServiceAreasInput = {
  sharedResourceId: string;
  driveTimeCutoffs: number[];
  travelModeName:
    | "Walking Time"
    | "Walking Distance"
    | "Driving Time"
    | "Driving Distance"
    | "Trucking Time"
    | "Trucking Distance";
  travelDirection: "from-facility" | "to-facility";
};

type SharedResource = {
  id?: unknown;
  kind?: unknown;
  description?: unknown;
  payload?: unknown;
};

type ServiceAreaToolState = {
  agentExecutionContext?: {
    sharedResources?: readonly SharedResource[];
  };
};

const pointResourceSchema = z.object({
  id: z.string(),
  kind: z.literal("point"),
  description: z.string(),
  payload: z.object({
    x: z.number(),
    y: z.number(),
  }),
});

export const findServiceAreasWrapper = async (
  {
    sharedResourceId,
    driveTimeCutoffs,
    travelModeName,
    travelDirection,
  }: FindServiceAreasInput,
  runtime: ToolRuntime<ServiceAreaToolState>,
): Promise<AgentToolResponse<{ calculationId: string }>> => {
  const { mapElement } = getNetworkAnalysisContext(runtime);
  const resource = runtime.state?.agentExecutionContext?.sharedResources?.find(
    (candidate) => candidate.id === sharedResourceId,
  );
  if (!resource) {
    throw new Error(`Shared resource not found: ${sharedResourceId}`);
  }

  const pointResource = pointResourceSchema.safeParse(resource);
  if (!pointResource.success) {
    throw new Error(
      `Shared resource ${sharedResourceId} does not contain valid point geometry.`,
    );
  }

  const result = await findServiceAreas(
    {
      facilities: [pointResource.data.payload],
      driveTimeCutoffs,
      travelModeName,
      travelDirection,
    },
    mapElement,
  );

  return [
    result.message,
    {
      value: { calculationId: result.calculationId },
      sharedResourceAdditions: result.polygons.flatMap((graphic, index) => {
        if (!graphic.geometry) {
          return [];
        }

        const cutoff = driveTimeCutoffs[index % driveTimeCutoffs.length];
        return [
          {
            kind: "polygon" as const,
            description: `${cutoff ?? "Calculated"} minute ${travelModeName.toLowerCase()} service area from ${pointResource.data.description}`,
            payload: graphic.geometry.toJSON(),
          },
        ];
      }),
    },
  ];
};

export const findServiceAreasSchema = z.object({
  sharedResourceId: z
    .string()
    .describe(
      "Exact ID of a point returned by listSharedResources. Never invent an ID.",
    ),
  driveTimeCutoffs: z
    .array(z.number())
    .describe(
      "Array of drive time cutoffs in minutes. Each number generates a service area polygon based on the travel time from/to the facilities. Example: [5, 10, 15] for 5, 10, and 15 minute service areas.",
    ),
  travelModeName: z
    .enum([
      "Walking Time",
      "Walking Distance",
      "Driving Time",
      "Driving Distance",
      "Trucking Time",
      "Trucking Distance",
    ])
    .describe(
      "Mode of travel. Use 'Walking Time' or 'Walking Distance' for pedestrian/walking, 'Driving Time' or 'Driving Distance' for car/driving, 'Trucking Time' or 'Trucking Distance' for freight/delivery vehicles.",
    ),
  travelDirection: z
    .enum(["from-facility", "to-facility"])
    .describe(
      "Direction of travel analysis. Use 'from-facility' to calculate areas reachable FROM the locations (default). Use 'to-facility' to calculate areas that can reach TO the locations.",
    ),
});

export const findServiceAreasTool = tool(findServiceAreasWrapper, {
  name: "findServiceAreas",
  description:
    "Calculates service areas from a point shared resource without changing the map. Returns a calculationId for addServiceAreaFeatures and publishes the resulting polygons as shared resources.",
  schema: findServiceAreasSchema,
  responseFormat: "content_and_artifact",
});
