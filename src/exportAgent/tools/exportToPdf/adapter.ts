import {
  FunctionTool,
  type FunctionToolExecute,
} from "@arcgis/ai-components/agent-utils/tools/FunctionTool.js";
import { exportToPdf } from "./core";
import { getExportAgentContext } from "../../context";
import {
  createHumanInTheLoopToolMiddleware,
  getHumanInTheLoopPayload,
} from "@arcgis/ai-components/agent-utils/middlewares/humanInTheLoop.js";
import { sendUXSuggestion } from "@arcgis/ai-components/agent-utils/index.js";

type ExportToPdfInput = Record<string, never>;

export const exportToPdfWrapper: FunctionToolExecute<
  ExportToPdfInput,
  string | null | undefined
> = async (_, config): Promise<string | undefined | null> => {
  const { mapElement } = getExportAgentContext(config);
  const hilFilename = getHumanInTheLoopPayload<string>(config);
  const filename = hilFilename?.trim() || "Untitled Map Export";

  const pdfUrl = await exportToPdf({
    filename,
    mapElement,
  });

  // A preview is optional: its failure must not hide a successful PDF export.
  let thumbnailUrl: string | undefined;
  try {
    thumbnailUrl = (await mapElement.takeScreenshot())?.dataUrl;
  } catch (error) {
    console.warn("Unable to capture PDF map preview:", error);
  }

  await sendUXSuggestion(
    {
      type: "button",
      data: {
        label: "Open PDF",
        url: pdfUrl,
        title: filename,
        thumbnailUrl,
      },
    },
    config,
  );

  return "PDF exported successfully.";
};

const hilFilenameSubmit = createHumanInTheLoopToolMiddleware<
  ExportToPdfInput,
  string | null | undefined
>({
  interrupt: () => ({
    kind: "textInput",
    message: "Provide a filename for the exported PDF",
  }),
});

export const exportToPdfTool = new FunctionTool<
  ExportToPdfInput,
  string | null | undefined
>({
  name: "exportToPdf",
  description: "Exports the current state of the map to a PDF file.",
  middlewares: [hilFilenameSubmit],
  execute: exportToPdfWrapper,
  resultMode: "continue",
});
