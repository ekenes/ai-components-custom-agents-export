import React, { useState } from "react";

import "@esri/calcite-components/components/calcite-panel";
import "@esri/calcite-components/components/calcite-shell-panel";
import "@esri/calcite-components/components/calcite-card";

import "@arcgis/ai-components/components/arcgis-assistant";
import "@arcgis/ai-components/components/arcgis-assistant-agent";
import "@arcgis/ai-components/components/arcgis-assistant-navigation-agent";
import "@arcgis/ai-components/components/arcgis-assistant-help-agent";

import type { ArcgisMap } from "@arcgis/map-components/components/arcgis-map";
import type { UXSuggestion } from "@arcgis/ai-components/utils/index.js";
import { NetworkAnalysisAgent } from "./networkAnalysisAgent";
import { MapExportAgent } from "./exportAgent";

type ExportWebMapButtonData = {
  label?: string;
  url: string;
  title: string;
  filename?: string;
  thumbnailUrl?: string;
};

/**
 * Data emitted with an assistant slottable request.
 */
type AssistantSlottableRequestData = {
  /** The assistant message associated with the slot request. */
  message: any;
  /** The block associated with the slot request, when requesting block content. */
  block?: UXSuggestion;
  /** Zero-based index of the block associated with the slot request. */
  index?: number;
};

/**
 * Supported assistant slottable request names.
 */
type AssistantSlottableRequestName = "block" | "message";

type AssistantSlottableRequestDetail = {
  /** The request name describing the slot being requested. */
  name: AssistantSlottableRequestName;
  /** The slot name consumers should target when appending light DOM content. */
  slotName: string;
  /** Data describing the current slot request. */
  data: AssistantSlottableRequestData | undefined;
};

type AssistantPanelProps = {
  mapElementRef: React.RefObject<ArcgisMap | null>;
};

export function AssistantPanel({
  mapElementRef,
}: AssistantPanelProps): React.JSX.Element {
  const [slottableRequests, setSlottableRequests] = useState<
    AssistantSlottableRequestDetail[]
  >([]);

  const openScreenshotPreview = async (url: string, title?: string) => {
    const screenshotTab = window.open("about:blank", "_blank");
    if (!screenshotTab) {
      return;
    }

    screenshotTab.document.title = title || "Map Screenshot";
    screenshotTab.document.body.style.margin = "0";
    screenshotTab.document.body.style.display = "grid";
    screenshotTab.document.body.style.placeItems = "center";
    screenshotTab.document.body.style.background = "#0b0f14";
    screenshotTab.document.body.style.color = "#fff";
    screenshotTab.document.body.textContent = "Loading screenshot...";

    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      screenshotTab.location.replace(blobUrl);

      // Revoke later to avoid leaking object URLs while still allowing navigation to complete.
      setTimeout(() => {
        URL.revokeObjectURL(blobUrl);
      }, 60_000);
      return;
    } catch (error) {
      console.warn("Falling back to inline screenshot rendering:", error);
    }

    screenshotTab.document.body.textContent = "";
    const image = screenshotTab.document.createElement("img");
    image.src = url;
    image.alt = title || "Map Screenshot";
    image.style.maxWidth = "100vw";
    image.style.maxHeight = "100vh";
    screenshotTab.document.body.appendChild(image);
  };

  const renderSummaryCard = (request: AssistantSlottableRequestDetail) => {
    if (!request.data || request.name !== "block") {
      return;
    }
    const block = request.data.block;

    const blockData = block?.data as ExportWebMapButtonData;
    const { label, url, title, filename, thumbnailUrl } = blockData ?? {};

    if (block?.type !== "button" || !blockData) {
      return;
    }

    const isPdfExport =
      typeof label === "string" && label.toLowerCase().includes("pdf");
    const isWebMapExport =
      typeof label === "string" && label.toLowerCase().includes("web map");
    const isScreenshotExport =
      typeof label === "string" && label.toLowerCase().includes("screenshot");

    const suggestedFileName =
      filename && filename.trim()
        ? filename
        : title && title.trim()
          ? title
          : "map-screenshot";
    const screenshotFileName = suggestedFileName.toLowerCase().endsWith(".png")
      ? suggestedFileName
      : `${suggestedFileName}.png`;

    const highResThumbnailUrl = thumbnailUrl
      ? `${thumbnailUrl}${thumbnailUrl.includes("?") ? "&" : "?"}w=1200`
      : undefined;

    if (isWebMapExport) {
      return (
        <div slot={request.slotName}>
          <calcite-card>
            {highResThumbnailUrl ? (
              <img
                slot="thumbnail"
                src={highResThumbnailUrl}
                alt={title ? `${title} thumbnail` : "Web map thumbnail"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : null}
            <span slot="heading">{title || "Saved Web Map"}</span>
            <span slot="description">Your web map has been saved.</span>
            <div slot="footer-end" style={{ display: "flex", gap: "0.5rem" }}>
              <calcite-button
                icon-end="launch"
                scale="s"
                appearance="solid"
                onClick={() => {
                  window.open(url, "_blank");
                }}
              >
                Open map
              </calcite-button>
              <calcite-button
                icon-end="link"
                scale="s"
                appearance="outline"
                onClick={() => {
                  navigator.clipboard.writeText(url);
                }}
              >
                Copy link
              </calcite-button>
            </div>
          </calcite-card>
        </div>
      );
    }

    return (
      <div slot={request.slotName}>
        <calcite-button
          icon-end={
            isScreenshotExport ? "image" : isPdfExport ? "file-pdf" : "launch"
          }
          width="half"
          scale="m"
          appearance="solid"
          onClick={() => {
            console.log(
              isScreenshotExport
                ? "Open screenshot"
                : isPdfExport
                  ? "Open PDF"
                  : "Open web map",
            );
            if (isScreenshotExport) {
              void openScreenshotPreview(url, title);
              return;
            }

            window.open(url, "_blank");
          }}
        >
          {isScreenshotExport
            ? "Open screenshot: " + title
            : isPdfExport
              ? "Open PDF: " + title
              : "Open map: " + title}
        </calcite-button>
        <calcite-button
          icon-end={isScreenshotExport ? "download-to" : "link"}
          width="half"
          scale="m"
          appearance="outline"
          onClick={() => {
            if (isScreenshotExport) {
              const link = document.createElement("a");
              link.href = url;
              link.download = screenshotFileName;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              return;
            }
            navigator.clipboard.writeText(url);
          }}
        >
          {isScreenshotExport
            ? "Download screenshot"
            : isPdfExport
              ? "Copy PDF link"
              : "Copy map link"}
        </calcite-button>
      </div>
    );
  };

  return (
    <calcite-shell-panel slot="panel-end" width="l" id="assistant-panel">
      <calcite-panel>
        <arcgis-assistant
          reference-element="#main-map"
          heading="Walk and drive times"
          description="Use the chat below to calculate drive times and walking distances to understand the accessibility of different locations."
          entryMessage="You must first navigate to a location on the map using the navigation agent before asking about drive times or walking distances."
          suggestedPrompts={[
            "Go to the Palm Springs convention center",
            "How far can I get in 10 minutes walking from the convention center?",
          ]}
          log-enabled
          keep-suggested-prompts
          onarcgisSlottableRequest={(event) => {
            const nextRequest = event.detail;
            setSlottableRequests((currentRequests: any) => {
              const remainingRequests = currentRequests.filter(
                (request: any) => request.slotName !== nextRequest.slotName,
              );
              return !nextRequest.data
                ? remainingRequests
                : [...remainingRequests, nextRequest];
            });
          }}
        >
          <arcgis-assistant-navigation-agent></arcgis-assistant-navigation-agent>
          <arcgis-assistant-help-agent></arcgis-assistant-help-agent>
          <arcgis-assistant-agent
            agent={NetworkAnalysisAgent}
            context={async () => {
              const mapElement = mapElementRef.current!;
              await mapElement.componentOnReady();
              await mapElement.viewOnReady();
              return {
                mapElement,
              };
            }}
          ></arcgis-assistant-agent>
          <arcgis-assistant-agent
            agent={MapExportAgent}
            context={async () => {
              const mapElement = mapElementRef.current!;
              await mapElement.componentOnReady();
              await mapElement.viewOnReady();
              return {
                mapElement,
              };
            }}
          ></arcgis-assistant-agent>
          {slottableRequests.map(renderSummaryCard)}
        </arcgis-assistant>
      </calcite-panel>
    </calcite-shell-panel>
  );
}
