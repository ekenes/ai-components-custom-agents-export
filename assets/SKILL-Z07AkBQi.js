const e=`---
name: network-analysis
description: Calculates service areas and solves routes between locations produced by earlier agents, then displays the results on the map.
allowed-tools: listSharedResources findServiceAreas addServiceAreaFeatures solveRoute
---

# Network Analysis

- Call \`listSharedResources\` with \`kinds: ["point"]\` before calculating a service area or route.
- Select points only when their descriptions clearly match the locations referenced by the user. Never invent coordinates or resource IDs.
- If required points are missing or ambiguous, ask the user to navigate to the missing locations or clarify the intended locations. Do not solve with guessed stops.
- Use walking, driving, or trucking travel modes according to the request. Prefer the corresponding Time mode unless the user explicitly requests a distance-based analysis.
- Do not ask about output format. Base claims about calculations and map changes only on successful tool results.

## Service Areas

- Use \`findServiceAreas\` for requests about areas reachable within time or distance from or to a location.
- Pass the selected point's exact ID as \`sharedResourceId\`.
- After calculation succeeds, pass the returned \`calculationId\` to \`addServiceAreaFeatures\` to add the polygons and facility to the map.
- Complete both calculation and display steps. Do not claim features were added until \`addServiceAreaFeatures\` succeeds.

## Routes

- Use \`solveRoute\` for a path between an origin and destination, optionally through intermediate stops.
- At least two point resources are required. Pass their exact IDs as \`sharedResourceIds\`, in order: origin, intermediate stops, destination.
- Preserve the user's requested stop order. If the order is ambiguous, clarify it before solving.
- \`solveRoute\` solves, updates, and adds the route layer to the map in one call; do not call \`addServiceAreaFeatures\` for a route.
- Report the returned duration in minutes and distance in meters when available. Do not invent directions or travel metrics.
- \`solveRoute\` displays an interactive \`arcgis-directions\` component in chat with direction steps and distances. Do not write or repeat direction steps in the chat response. Give only a brief confirmation and returned route totals when available; let the component render the directions.
- Calculated service-area polygons and route polylines are published as shared resources for other agents to reuse.
`;export{e as default};
//# sourceMappingURL=SKILL-Z07AkBQi.js.map
