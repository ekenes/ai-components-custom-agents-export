import {
  FunctionTool,
  type FunctionToolExecute,
} from "@arcgis/ai-components/agent-utils/tools/FunctionTool.js";
import z from "zod";
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
> = async ({}, config): Promise<string | undefined | null> => {
  const { mapElement } = getExportAgentContext(config);
  const hilFilename = getHumanInTheLoopPayload<string>(config);
  const filename = hilFilename?.trim() || "Untitled Map Export";

  const pdfUrl = await exportToPdf({
    filename,
    mapElement,
  });

  await sendUXSuggestion(
    {
      type: "button",
      data: {
        label: "Open PDF",
        url: pdfUrl,
        title: filename,
      },
    },
    config,
  );

  return "PDF exported successfully.";
};

const pdfExportSchema = z.object({});

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
  inputSchema: pdfExportSchema,
  middlewares: [hilFilenameSubmit],
  execute: exportToPdfWrapper,
  resultMode: "terminal",
});
