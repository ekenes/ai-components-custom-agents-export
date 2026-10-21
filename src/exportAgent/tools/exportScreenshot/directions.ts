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

/** Add a map title above the image and optional directions beneath it. */
export async function appendDirectionsToScreenshot(
  dataUrl: string,
  directions: readonly string[],
  title?: string,
): Promise<string> {
  const mapTitle = title?.trim();
  const image = new Image();
  image.src = dataUrl;
  await image.decode();
  const canvas = document.createElement("canvas");
  // Canvas PNG exports use 96 dpi: 0.25 inches equals 24 pixels.
  const margin = 0.25 * 96;
  const contentWidth = Math.max(image.naturalWidth, 480);
  canvas.width = contentWidth + margin * 2;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Unable to render screenshot directions.");
  const font = "16px sans-serif";
  context.font = font;
  const padding = 24;
  const lineHeight = 26;
  const maxWidth = contentWidth - padding * 2;
  const wrapText = (texts: readonly string[]) => {
    const wrapped: string[] = [];
    for (const text of texts) {
      let line = "";
      // Character-based wrapping also handles very long names without spaces.
      for (const character of text.replace(/\s+/g, " ")) {
        if (line && context.measureText(line + character).width > maxWidth) {
          wrapped.push(line.trim());
          line = "";
        }
        line += character;
      }
      wrapped.push(line.trim());
    }
    return wrapped;
  };
  context.font = "bold 24px sans-serif";
  const titleLines = mapTitle ? wrapText([mapTitle]) : [];
  const titleLineHeight = 34;
  const titleHeight = titleLines.length
    ? padding * 2 + titleLines.length * titleLineHeight
    : 0;
  context.font = font;
  const lines = directions.length
    ? wrapText(["Directions", ...directions])
    : [];
  const directionsHeight = lines.length
    ? padding * 2 + lines.length * lineHeight
    : 0;
  canvas.height =
    margin * 2 + titleHeight + image.naturalHeight + directionsHeight;
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, margin, margin + titleHeight);
  // Resizing a canvas resets its drawing state.
  context.fillStyle = "#1f2937";
  context.textBaseline = "top";
  context.font = "bold 24px sans-serif";
  titleLines.forEach((line, index) => {
    context.fillText(
      line,
      margin + padding,
      margin + padding + index * titleLineHeight,
    );
  });
  context.font = font;
  lines.forEach((line, index) => {
    context.fillText(
      line,
      margin + padding,
      margin + titleHeight + image.naturalHeight + padding + index * lineHeight,
    );
  });
  const result = canvas.toDataURL("image/png");
  if (result === "data:,")
    throw new Error("Screenshot with directions exceeds the image size limit.");
  return result;
}
