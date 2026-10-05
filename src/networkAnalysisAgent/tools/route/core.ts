import RouteLayer from "@arcgis/core/layers/RouteLayer";
import Portal from "@arcgis/core/portal/Portal";
import { fetchServiceDescription } from "@arcgis/core/rest/networkService";
import RouteParameters from "@arcgis/core/rest/support/RouteParameters";
import Stop from "@arcgis/core/rest/support/Stop";
import type { ArcgisMap } from "@arcgis/map-components/components/arcgis-map";
import type { FindServiceAreasOptions } from "../../types/types";
import type { SharedPointResource } from "../shared/pointResources";

export async function solveRoute(
  stops: readonly SharedPointResource[],
  travelModeName: FindServiceAreasOptions["travelModeName"],
  mapElement: ArcgisMap,
  signal?: AbortSignal,
) {
  if (stops.length < 2) {
    throw new Error("A route requires at least two shared point resources.");
  }
  const map = mapElement.map;
  if (!map) {
    throw new Error("A map is required to display the route.");
  }

  const portal = Portal.getDefault();
  await portal.load();
  const helperServices = portal.helperServices as {
    route?: { url?: string };
  };
  const url = helperServices?.route?.url;
  if (!url) {
    throw new Error("Route service not found in portal helperServices.");
  }

  const serviceDescription = await fetchServiceDescription(url);
  const travelMode = serviceDescription.supportedTravelModes?.find(
    (mode) => mode.name === travelModeName,
  );
  if (!travelMode) {
    throw new Error(`The route service does not support ${travelModeName}.`);
  }

  const title = `Route: ${stops.map((stop) => stop.description).join(" → ")}`;
  const routeLayer = new RouteLayer({
    url,
    title,
    stops: stops.map(
      (stop, index) =>
        new Stop({
          name: stop.description,
          sequence: index + 1,
          geometry: {
            ...stop.payload,
            spatialReference: stop.payload.spatialReference ?? { wkid: 4326 },
          },
        }),
    ),
  });

  if (/walking/i.test(travelModeName)) {
    // remove to avoid solid line filling in gaps or for dashes to fill in gaps in directionLines
    routeLayer.defaultSymbols.routeInfo = null;
    const symbol = routeLayer.defaultSymbols.directionLines;
    if (symbol?.type === "simple-line") {
      symbol.style = "short-dot";
    }
  }

  const result = await routeLayer.solve(
    new RouteParameters({
      travelMode,
      findBestSequence: false,
      ignoreInvalidLocations: false,
      outSpatialReference: mapElement.spatialReference,
    }),
    { signal },
  );
  routeLayer.update(result);

  const geometry = routeLayer.routeInfo?.geometry;
  if (!geometry) {
    throw new Error("The route service returned no route geometry.");
  }

  map.add(routeLayer);
  mapElement.goTo(routeLayer.routeInfo.geometry!);

  const distancesByPointId = new Map<number, number>();
  for (const line of routeLayer.directionLines?.toArray() ?? []) {
    const pointId: unknown = line.toGraphic().attributes?.DirectionPointID;
    const distance = line.distance;
    if (
      typeof pointId === "number" &&
      typeof distance === "number" &&
      Number.isFinite(distance) &&
      distance >= 0
    ) {
      distancesByPointId.set(
        pointId,
        (distancesByPointId.get(pointId) ?? 0) + distance,
      );
    }
  }

  const directions = (routeLayer.directionPoints?.toArray() ?? [])
    .map((point, index) => {
      const pointId: unknown = point.toGraphic().attributes?.ObjectID;
      return {
        sequence: point.sequence ?? index + 1,
        text: point.displayText?.trim() ?? "",
        distanceMeters:
          typeof pointId === "number"
            ? (distancesByPointId.get(pointId) ?? null)
            : null,
      };
    })
    .filter((direction) => direction.text.length > 0)
    .sort((a, b) => a.sequence - b.sequence);

  return {
    layerId: routeLayer.id,
    description: `${travelModeName} route: ${stops.map((stop) => stop.description).join(" → ")}`,
    geometry: geometry.toJSON(),
    totalDistanceMeters: routeLayer.routeInfo?.totalDistance ?? null,
    totalDurationMinutes: routeLayer.routeInfo?.totalDuration ?? null,
    directions,
  };
}
