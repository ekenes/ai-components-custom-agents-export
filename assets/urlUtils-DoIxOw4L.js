import{f as a}from"./index-sBTGSh23.js";const r=/\.(\w+)$/;function s(e){let t=new URL(e).pathname.match(r);return!t||t.length<2?null:t[1].toUpperCase()}const l=async(e,t)=>{let n=(await a(e,{...t,method:"head"}))?.getHeader?.("Content-Type");return n?n.split("/")[1]:null};export{l as getDatasetFormat,s as guessExtensionFromURI};
//# sourceMappingURL=urlUtils-DoIxOw4L.js.map
