---
name: service-area
description: Calculates areas reachable by driving or walking from a point produced by an earlier agent.
allowed-tools: findServiceAreas addServiceAreaFeatures
---

# Service Area

- Call listSharedResources with point as the requested kind before calculating a service area.
- Select a point only when its description clearly matches the location referenced by the user. Never invent or guess a resource ID.
- Pass the selected point's exact ID as sharedResourceId to findServiceAreas.
- After findServiceAreas succeeds, pass its calculationId to addServiceAreaFeatures to add the calculated polygons and facility to the map.
- Always complete both calculation and display steps. Do not claim features were added until addServiceAreaFeatures succeeds.
- Do not ask about output format.
- If no matching point resource is available, ask the user to navigate to the location first.
