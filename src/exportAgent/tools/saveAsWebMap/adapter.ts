import {
  FunctionTool,
  type FunctionToolExecute,
} from "@arcgis/ai-components/agent-utils/tools/FunctionTool.js";
import z from "zod";
import { saveAsWebMap } from "./core";
import { getExportAgentContext } from "../../context";
import {
  createHumanInTheLoopToolMiddleware,
  getHumanInTheLoopPayload,
} from "@arcgis/ai-components/agent-utils/middlewares/humanInTheLoop.js";
import { sendUXSuggestion } from "@arcgis/ai-components/agent-utils/index.js";

type SaveWebMapInput = Record<string, never>;

export const saveAsWebMapWrapper: FunctionToolExecute<
  SaveWebMapInput,
  string | null | undefined
> = async ({}, config): Promise<string | undefined | null> => {
  const { mapElement } = getExportAgentContext(config);
  const hilTitle = getHumanInTheLoopPayload<string>(config);
  const webMapTitle = hilTitle?.trim() || "Untitled Web Map";

  const savedWebMapItem = await saveAsWebMap({
    title: webMapTitle,
    mapElement,
  });

  const { id, title } = savedWebMapItem!;
  const portalUrl = savedWebMapItem?.portal?.url;
  console.log("Saved web map item:", savedWebMapItem);
  const { center, scale } = mapElement;
  const { longitude, latitude } = center;

  const url = `${portalUrl}/apps/mapviewer/index.html?configurableview=true&webmap=${id}&theme=light&heading=true&legend=true&information=true&center=${longitude},${latitude}&scale=${scale}`;

  await sendUXSuggestion(
    {
      type: "button",
      data: {
        label: "Open Web Map",
        url,
        title,
        thumbnailUrl: savedWebMapItem?.thumbnailUrl,
      },
    },
    config,
  );

  return `Web map exported successfully.`;
};

const webmapSchema = z.object({});

const hilTitleSubmit = createHumanInTheLoopToolMiddleware<
  SaveWebMapInput,
  string | null | undefined
>({
  interrupt: () => ({
    kind: "textInput",
    message: "Provide a title for the exported web map",
  }),
});

export const saveAsWebMapTool = new FunctionTool<
  SaveWebMapInput,
  string | null | undefined
>({
  name: "saveAsWebMap",
  description:
    "Saves the current state of the map as a new web map. Don't ask for a title.",
  inputSchema: webmapSchema,
  middlewares: [hilTitleSubmit],
  execute: saveAsWebMapWrapper,
  resultMode: "terminal",
});
