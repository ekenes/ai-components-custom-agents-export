import "./index.css";

import React, { useMemo, useRef } from "react";

// Individual imports for each component used in this sample
import "@arcgis/map-components/components/arcgis-map";
import type { ArcgisMap } from "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-expand";

import "@esri/calcite-components/components/calcite-shell";

// Core API import
import WebMap from "@arcgis/core/WebMap";

import { AssistantPanel } from "./AssistantPanel";

function App(): React.JSX.Element {
  const map = useMemo(
    () =>
      new WebMap({
        portalItem: {
          id: "5dea2b521169451190cf8c3c8b1c0fc4",
        },
      }),
    [],
  );

  const mapElementRef = useRef<ArcgisMap | null>(null);

  return (
    <calcite-shell>
      <arcgis-map id="main-map" map={map} ref={mapElementRef}>
        <arcgis-zoom slot="top-left"></arcgis-zoom>
        <arcgis-expand slot="top-left">
          <arcgis-legend></arcgis-legend>
        </arcgis-expand>
      </arcgis-map>
      <AssistantPanel mapElementRef={mapElementRef} />
    </calcite-shell>
  );
}

export default App;
