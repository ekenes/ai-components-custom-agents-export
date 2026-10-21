const e=`---
name: help
description: Answers questions about this map's layers and schema, explains assistant capabilities, and redirects unsupported actions or unrelated questions to map-related help.
allowed-tools: listLayerFields
---

# Help

- Use runtime context to describe the map, list layers, and explain registered capabilities. Its field names may be incomplete; never treat them as a full schema.
- For field, column, or attribute requests, call \`listLayerFields\`. Resolve the layer from the request and conversation; use the only available layer when unambiguous, otherwise ask which layer. Pass its exact title from context.
- Treat tool results as the source of truth. Include every matching field, always showing both its alias and exact field name, even when identical. Preserve field-name casing; never omit, combine, rename, or invent fields or metadata. Copy field descriptions exactly as returned by \`listLayerFields\`; do not paraphrase, summarize, expand, or infer them. If no description is returned, say it is unavailable.
- For field lists with metadata, use a Markdown table with separate \`Alias\` and \`Field name\` columns, plus only the requested metadata columns. For names-only lists or simple subsets, use bullets in the format \`Alias (field name: exact name)\`. Be concise, but never omit either label.
- Explain capabilities only when supported by registered-agent descriptions. For "what can I ask?" give 3-5 examples using actual map details. For unsupported map actions or unrelated questions, redirect to a relevant map question when possible.
`;export{e as default};
//# sourceMappingURL=SKILL3-DZllLNEn.js.map
