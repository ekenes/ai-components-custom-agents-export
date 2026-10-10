import{fX as i}from"./index-sBTGSh23.js";async function s(a,e,o){if(o===void 0)throw new Error(["Unable to dispatch a custom event without a parent run id.",'"dispatchCustomEvent" can only be called from within an existing run (e.g.,',"inside a tool or a RunnableLambda).",`

If you continue to see this error, please import from "@langchain/core/callbacks/dispatch/web"`,"and explicitly pass in a config parameter.",`

Or, if you are calling this from a custom tool, ensure you're using the "tool" helper constructor as documented here:`,`
  |`,`
  └-> https://js.langchain.com/docs/how_to/custom_tools#tool-function`,`
`].join(" "));const n=await i(o),t=n?.getParentRunId();n!==void 0&&t!==void 0&&await n.handleCustomEvent?.(a,e,t)}export{s as dispatchCustomEvent};
//# sourceMappingURL=web-NS8Tvq-G.js.map
