import { createSkillAgent } from "@arcgis/ai-components/agents/runtime/skill/createSkillAgent.js";
import type { ArcgisAssistant } from "@arcgis/ai-components/components/arcgis-assistant";
import { tool, type ToolRuntime } from "@langchain/core/tools";
import z from "zod";

const suggestionsSchema = z.object({
  prompts: z.array(z.string().trim().min(1).max(240)).max(3),
});

// Per-invocation sinks keep overlapping requests isolated.
const suggestions = new Map<string, string[]>();
const suggestFollowUps = tool(
  ({ prompts }, runtime: ToolRuntime) => {
    const id = runtime.configurable?.followUpRunId;
    if (typeof id !== "string" || !suggestions.has(id)) {
      throw new Error("Follow-up invocation context is unavailable.");
    }
    suggestions.set(id, [...new Set(prompts)]);
    return "Follow-up prompts recorded. Finish without additional actions.";
  },
  {
    name: "suggestFollowUps",
    description:
      "Records up to three grounded follow-up questions for the completed response.",
    schema: suggestionsSchema,
  },
);

export const FollowUpAgent = createSkillAgent({
  id: "followUps",
  name: "Follow-up Questions",
  description:
    "Suggests next questions based on completed responses and available agent capabilities.",
  skillLoaders: [
    async () => (await import("./skills/followUps/SKILL.md?raw")).default,
  ],
  toolLoaders: { suggestFollowUps: async () => suggestFollowUps },
  modelTier: "fast",
  systemPrompt:
    "You recommend grounded next questions; you never execute their actions.",
  runtimeContextLoader: ({ config }) =>
    JSON.stringify(config?.configurable?.followUpContext ?? {}),
});

const graph = FollowUpAgent.createGraph().compile();

export type AgentCapability = { name: string; description: string };
type ChatMessage = ReturnType<ArcgisAssistant["messages"]["toArray"]>[number];

export async function generateFollowUps(
  messages: readonly ChatMessage[],
  agents: readonly AgentCapability[],
  signal?: AbortSignal,
): Promise<string[]> {
  const id = crypto.randomUUID();
  suggestions.set(id, []);
  const conversation = messages.slice(-20).map((message) => ({
    role: message.role,
    content: message.content,
    ...(message.role === "assistant" ? { error: message.error } : {}),
  }));
  try {
    await graph.invoke(
      {
        agentExecutionContext: {
          userRequest:
            "Suggest useful next questions for the latest completed response.",
          assignedTask:
            "Review the supplied conversation and capabilities, then call suggestFollowUps.",
          messages: [],
          priorSteps: [],
          sharedState: {},
          sharedResources: [],
        },
      },
      {
        signal,
        configurable: {
          followUpRunId: id,
          followUpContext: { conversation, availableAgents: agents },
        },
      },
    );
    return suggestions.get(id) ?? [];
  } finally {
    suggestions.delete(id);
  }
}
