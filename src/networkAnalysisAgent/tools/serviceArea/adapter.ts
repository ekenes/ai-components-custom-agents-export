// This file defines the adapter function and tool for finding service areas (drive time polygons)
// using ArcGIS services.
// The tool takes input parameters such as facility locations,
// drive time cutoffs, travel mode, and travel direction,
// and returns an identifier for the calculated service area.

import type { AgentToolResponse } from "@arcgis/ai-components/agents/tools/shared/types.js";
import {
  FunctionTool,
  type FunctionToolExecute,
} from "@arcgis/ai-components/agent-utils/tools/FunctionTool.js";
import z from "zod";
import { findServiceAreas } from "./core";
import { getNetworkAnalysisContext } from "../../context/";
import {
  getSharedPointResources,
  resolveSharedPointResource,
} from "../shared/pointResources";

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

export const findServiceAreasWrapper: FunctionToolExecute<
  FindServiceAreasInput,
  AgentToolResponse<{ calculationId: string }>
> = async (
  { sharedResourceId, driveTimeCutoffs, travelModeName, travelDirection },
  config,
) => {
  const { mapElement } = getNetworkAnalysisContext(config);
  const pointResource = resolveSharedPointResource(
    sharedResourceId,
    getSharedPointResources(config),
  );

  const result = await findServiceAreas(
    {
      facilities: [pointResource.payload],
      driveTimeCutoffs,
      travelModeName,
      travelDirection,
    },
    mapElement,
  );

  return [
    result.message,
    {
      value: { calculationId: result.calculationId }, // may not be needed
      sharedResourceAdditions: result.polygons.flatMap((graphic, index) => {
        if (!graphic.geometry) {
          return [];
        }

        const cutoff = driveTimeCutoffs[index % driveTimeCutoffs.length];
        return [
          {
            kind: "polygon" as const,
            description: `${cutoff ?? "Calculated"} minute ${travelModeName.toLowerCase()} service area from ${pointResource.description}`,
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

export const findServiceAreasTool = new FunctionTool({
  name: "findServiceAreas",
  description:
    "Calculates service areas from a point shared resource without changing the map. Returns a calculationId for addServiceAreaFeatures and publishes the resulting polygons as shared resources.",
  execute: findServiceAreasWrapper,
  inputSchema: findServiceAreasSchema,
  responseFormat: "content-and-artifact",
  resultMode: "continue",
});
