import{a as c}from"./VertexArrayObject-D7ioFCDt.js";import{l as x,d as y,s as g,u as j}from"./VertexArrayObject-D7ioFCDt.js";import{s as F}from"./ProgramCache-CUeMWHwn.js";import{j2 as O}from"./index-B05090t7.js";import"./VertexAttributeLocations-bj14KPgt.js";function p(t){const{options:e,value:o}=t;return typeof e[o]=="number"}function m(t){let e="";for(const o in t){const n=t[o];if(typeof n=="boolean")n&&(e+=`#define ${o}
`);else if(typeof n=="number")e+=`#define ${o} ${n.toFixed()}
`;else if(typeof n=="object")if(p(n)){const{value:r,options:f,namespace:s}=n,a=s?`${s}_`:"";for(const i in f)e+=`#define ${a}${i} ${f[i].toFixed()}
`;e+=`#define ${o} ${a}${r}
`}else{const r=n.options;let f=0;for(const s in r)e+=`#define ${r[s]} ${(f++).toFixed()}
`;e+=`#define ${o} ${r[n.value]}
`}}return e}function d(t,e,o,n=""){return new c(t,n+e.vertexShader,n+e.fragmentShader,o)}export{x as BufferObject,c as DisposableProgram,y as FramebufferObject,F as ProgramCache,g as Renderbuffer,O as Texture,j as VertexArrayObject,d as createProgram,m as glslifyDefineMap};
//# sourceMappingURL=webglDeps-0vr_OQ1l.js.map
