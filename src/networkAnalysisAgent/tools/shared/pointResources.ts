import z from "zod";

export type SharedResourcesToolState = {
  agentExecutionContext?: {
    sharedResources?: readonly unknown[];
  };
};

const pointResourceSchema = z.object({
  id: z.string(),
  kind: z.literal("point"),
  description: z.string(),
  payload: z.object({
    x: z.number().finite(),
    y: z.number().finite(),
    spatialReference: z
      .object({
        wkid: z.number().optional(),
        latestWkid: z.number().optional(),
        wkt: z.string().optional(),
      })
      .optional(),
  }),
});

export type SharedPointResource = z.infer<typeof pointResourceSchema>;

export function resolveSharedPointResource(
  id: string,
  resources?: readonly unknown[],
): SharedPointResource {
  const resource = resources?.find(
    (candidate) =>
      typeof candidate === "object" &&
      candidate !== null &&
      "id" in candidate &&
      candidate.id === id,
  );
  if (!resource) {
    throw new Error(`Shared resource not found: ${id}`);
  }

  const parsed = pointResourceSchema.safeParse(resource);
  if (!parsed.success) {
    throw new Error(`Shared resource ${id} does not contain valid point geometry.`);
  }

  return parsed.data;
}