import type RouteLayer from "@arcgis/core/layers/RouteLayer";
import type { ExportScreenshotOptions } from "../../types/types";

/** Read solved, visible routes without making another routing request. */
export function getRouteDirectionText(
  mapElement: ExportScreenshotOptions["mapElement"],
): string[] {
  const text: string[] = [];
  for (const layer of mapElement.map?.allLayers.toArray() ?? []) {
    if (layer.type !== "route" || !layer.visible) continue;
    let parent = layer.parent;
    let visible = true;
    while (parent && "visible" in parent) {
      if (!parent.visible) visible = false;
      parent = parent.parent;
    }
    if (!visible) continue;
    const route = layer as RouteLayer;
    const points = (route.directionPoints?.toArray() ?? [])
      .filter((point) => point.displayText?.trim())
      .sort((a, b) => (a.sequence ?? 0) - (b.sequence ?? 0));
    if (!points.length) continue;

    const distances = new Map<number, number>();
    for (const line of route.directionLines?.toArray() ?? []) {
      const id: unknown = line.toGraphic().attributes?.DirectionPointID;
      if (
        typeof id === "number" &&
        typeof line.distance === "number" &&
        Number.isFinite(line.distance) &&
        line.distance >= 0
      ) {
        distances.set(id, (distances.get(id) ?? 0) + line.distance);
      }
    }
    text.push("", route.title || "Route directions");
    const totals: string[] = [];
    const distance = route.routeInfo?.totalDistance;
    const duration = route.routeInfo?.totalDuration;
    if (typeof distance === "number" && Number.isFinite(distance)) {
      totals.push(`${Math.round(distance)} m`);
    }
    if (typeof duration === "number" && Number.isFinite(duration)) {
      totals.push(`${Math.round(duration * 10) / 10} minutes`);
    }
    if (totals.length) text.push(totals.join(" • "));
    points.forEach((point, index) => {
      const id: unknown = point.toGraphic().attributes?.ObjectID;
      const meters = typeof id === "number" ? distances.get(id) : undefined;
      text.push(
        `${index + 1}. ${point.displayText?.trim()}${meters === undefined ? "" : ` (${Math.round(meters)} m)`}`,
      );
    });
  }
  return text;
}

/** Append a readable, wrapped directions panel beneath the original map image. */
export async function appendDirectionsToScreenshot(
  dataUrl: string,
  directions: readonly string[],
): Promise<string> {
  if (!directions.length) return dataUrl;
  const image = new Image();
  image.src = dataUrl;
  await image.decode();
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(image.naturalWidth, 480);
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Unable to render screenshot directions.");
  const font = "16px sans-serif";
  context.font = font;
  const padding = 24;
  const lineHeight = 26;
  const maxWidth = canvas.width - padding * 2;
  const lines = ["Directions"];
  for (const text of directions) {
    let line = "";
    // Character-based wrapping also handles very long names without spaces.
    for (const character of text.replace(/\s+/g, " ")) {
      if (line && context.measureText(line + character).width > maxWidth) {
        lines.push(line.trim());
        line = "";
      }
      line += character;
    }
    lines.push(line.trim());
  }
  canvas.height = image.naturalHeight + padding * 2 + lines.length * lineHeight;
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, 0, 0);
  // Resizing a canvas resets its drawing state.
  context.font = font;
  context.fillStyle = "#1f2937";
  context.textBaseline = "top";
  lines.forEach((line, index) => {
    context.fillText(
      line,
      padding,
      image.naturalHeight + padding + index * lineHeight,
    );
  });
  const result = canvas.toDataURL("image/png");
  if (result === "data:,")
    throw new Error("Screenshot with directions exceeds the image size limit.");
  return result;
}
