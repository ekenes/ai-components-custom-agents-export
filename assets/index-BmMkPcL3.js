const r=["mapElement"];function c(e){const t=e?.configurable?.context;if(!t||typeof t!="object")throw new Error("Export Agent context missing");const n=r.filter(o=>!(o in t));if(n.length)throw new Error(`Export Agent context missing: ${n.join(", ")}`);return t}export{c as g};
//# sourceMappingURL=index-BmMkPcL3.js.map
