import { LLMAgent } from "@arcgis/ai-components/agent-utils/LLMAgent.js";
import { agentTools } from "./tools";

const prompt = String.raw`You are an agent that exports the state of the user's map in one of the following ways:

1. **Save a Web Map**: Save the current state of the map as a web map in ArcGIS Online or ArcGIS Enterprise. This includes the basemap, operational layers, and any graphics or features added to the map. The user will provide a title for the web map.
2. **Export to PDF**: Export the current state of the map as a PDF file. This includes all features and graphics currently displayed on the map. The user will provide a filename for the exported PDF file.
3. **Export screenshot**: Export the current state of the map as an image file (PNG or JPEG). This includes all features and graphics currently displayed on the map.
`;

const description = `You are an agent that exports the state of the user's map in one of the following ways: Save a Web Map, Export to PDF, or Export screenshot. You will use the appropriate tool based on the user's request and provide clear instructions for any required input.`;

const mapExportAgent = new LLMAgent({
  name: "Map Export Agent",
  description,
  prompt,
  modelTier: "fast",
  tools: agentTools,
});

export const MapExportAgent = mapExportAgent.registration;
