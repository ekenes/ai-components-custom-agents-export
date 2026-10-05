import {
  FunctionTool,
  type FunctionToolExecute,
} from "@arcgis/ai-components/agent-utils/tools/FunctionTool.js";
import { exportScreenshot } from "./core";
import { getExportAgentContext } from "../../context";
import {
  createHumanInTheLoopToolMiddleware,
  getHumanInTheLoopPayload,
} from "@arcgis/ai-components/agent-utils/middlewares/humanInTheLoop.js";
import { sendUXSuggestion } from "@arcgis/ai-components/utils/index.js";

type ExportScreenshotInput = Record<string, never>;

export const exportScreenshotWrapper: FunctionToolExecute<
  ExportScreenshotInput,
  string | null | undefined
> = async (_, config): Promise<string | undefined | null> => {
  const { mapElement } = getExportAgentContext(config);
  const hilFilename = getHumanInTheLoopPayload<string>(config);
  const filename = hilFilename?.trim() || "Untitled Map Screenshot";

  const screenshotUrl = await exportScreenshot({
    filename,
    mapElement,
  });

  await sendUXSuggestion(
    {
      type: "button",
      data: {
        label: "Open Screenshot",
        url: screenshotUrl,
        title: filename,
        filename,
        thumbnailUrl: screenshotUrl,
      },
    },
    config,
  );

  return `${filename} successfully exported.`;
};

const hilFilenameSubmit = createHumanInTheLoopToolMiddleware<
  ExportScreenshotInput,
  string | null | undefined
>({
  interrupt: () => ({
    kind: "textInput",
    message: "Provide a filename for the exported screenshot",
  }),
});

export const exportScreenshotTool = new FunctionTool<
  ExportScreenshotInput,
  string | null | undefined
>({
  name: "exportScreenshot",
  description:
    "Captures the current state of the map as a PNG screenshot. Appends written directions and available distances for visible solved routes to the same downloadable image.",
  middlewares: [hilFilenameSubmit],
  execute: exportScreenshotWrapper,
  resultMode: "continue",
});
