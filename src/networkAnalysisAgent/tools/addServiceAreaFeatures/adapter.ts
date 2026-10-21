import {
  FunctionTool,
  type FunctionToolExecute,
} from "@arcgis/ai-components/agent-utils/tools/FunctionTool.js";
import z from "zod";
import { getNetworkAnalysisContext } from "../../context";
import { addServiceAreaFeatures } from "./core";

type AddServiceAreaFeaturesInput = {
  calculationId: string;
};

const addServiceAreaFeaturesWrapper: FunctionToolExecute<
  AddServiceAreaFeaturesInput,
  string
> = async ({ calculationId }, config) => {
  const { mapElement } = getNetworkAnalysisContext(config);
  return addServiceAreaFeatures(calculationId, mapElement);
};

export const addServiceAreaFeaturesTool = new FunctionTool<
  AddServiceAreaFeaturesInput,
  string
>({
  name: "addServiceAreaFeatures",
  description:
    "Adds a previously calculated service area's polygons and facilities to the map, then zooms to them.",
  inputSchema: z.object({
    calculationId: z
      .string()
      .describe("The calculationId returned by findServiceAreas."),
  }),
  execute: addServiceAreaFeaturesWrapper,
});
