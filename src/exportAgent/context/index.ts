import type { ArcgisMap } from "@arcgis/map-components/components/arcgis-map";

/**
 * Context required by the Export Agent.
 * Supplied by the application via an agent `getContext()` provider.
 */
export type ExportAgentContext = {
  mapElement: ArcgisMap;
};

export const exportAgentContextRequiredKeys = ["mapElement"] as const;

type AgentExecutionConfigLike = {
  configurable?: Record<string, unknown>;
};

export function getExportAgentContext(
  config?: AgentExecutionConfigLike,
): ExportAgentContext {
  const configurable = config?.configurable;
  const context = configurable?.context;

  if (!context || typeof context !== "object") {
    throw new Error("Export Agent context missing");
  }

  const missing = exportAgentContextRequiredKeys.filter(
    (key) => !(key in context),
  );
  if (missing.length) {
    throw new Error(`Export Agent context missing: ${missing.join(", ")}`);
  }

  return context as ExportAgentContext;
}
