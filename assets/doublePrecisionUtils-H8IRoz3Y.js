import{r as d,bD as v}from"./index-B05090t7.js";const g=()=>v.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class l{constructor(){this._includedModules=new Map}include(e,n){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,n),e(this.builder,n))}}class x extends l{constructor(){super(...arguments),this.vertex=new f,this.fragment=new f,this.attributes=new F,this.varyings=new D,this.outputs=new p}get attributeNames(){return this.attributes.names}get builder(){return this}generate(e,n=!1){const t=this.attributes.generateSource(e),s=this.varyings.generateSource(e),i=e==="vertex"?this.vertex:this.fragment,o=i.uniforms.generateSource(),u=i.code.generateSource(),m=i.main.generateSource(n),b=this.debugName?`// ${this.debugName}
`:"",$=e==="vertex"?I:E,S=i.constants.generateSource(),_=this.outputs.generateSource(e);return`#version 300 es
${b}
${$}
${S.join(`
`)}
${o.join(`
`)}
${t.join(`
`)}
${s.join(`
`)}
${_.join(`
`)}
${u.join(`
`)}
${m.join(`
`)}`}generateBind(e){const n=new Map;this.vertex.uniforms.entries.forEach(i=>{const o=i.bind[0];o&&n.set(i.name,o)}),this.fragment.uniforms.entries.forEach(i=>{const o=i.bind[0];o&&n.set(i.name,o)});const t=Array.from(n.values()),s=t.length;return i=>{for(let o=0;o<s;++o)t[o](e,i)}}generateBindPass(e){const n=new Map;this.vertex.uniforms.entries.forEach(i=>{const o=i.bind[1];o&&n.set(i.name,o)}),this.fragment.uniforms.entries.forEach(i=>{const o=i.bind[1];o&&n.set(i.name,o)});const t=Array.from(n.values()),s=t.length;return(i,o)=>{for(let u=0;u<s;++u)t[u](e,o,i)}}generateBindDraw(e){const n=new Map;this.vertex.uniforms.entries.forEach(i=>{const o=i.bind[2];o&&n.set(i.name,o)}),this.fragment.uniforms.entries.forEach(i=>{const o=i.bind[2];o&&n.set(i.name,o)});const t=Array.from(n.values()),s=t.length;return(i,o,u)=>{for(let m=0;m<s;++m)t[m](e,u,i,o)}}}class T{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const n of e)this._add(n);return this._stage}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new d("shaderbuilder:duplicate-uniform",`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else g().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(({name:e,arraySize:n,type:t})=>n!=null?`uniform ${t} ${e}[${n}];`:`uniform ${t} ${e};`)}get entries(){return Array.from(this._entries.values())}}let w=class{constructor(){this._entries=new Map}add(e,n){if(this._entries.has(e))throw new d("shaderbuilder:duplicate-input",`Duplicate input for ${e}`);this._entries.set(e,n)}get(e){const n=this._entries.get(e);if(n==null)throw new d("shaderbuilder:input-resolver-error",`No resolver for input ${e} found.`);return n()}};class y{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(e){if(this._bodies.length>0){const n=[];for(const t of this._bodies)typeof t=="string"?n.push(t):n.push(...t());return[`void main() {
 ${n.join(`
`)||""} 
}`]}if(e)throw new d("shaderbuilder:missing-main","Shader does not contain main function body.");return[]}}class A{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){const e=[];for(const n of this._entries)typeof n=="string"?e.push(n):e.push(...n());return e}}class f extends l{constructor(){super(...arguments),this.uniforms=new T(this),this.main=new y(this),this.code=new A(this),this.constants=new r(this),this.inputs=new w}get builder(){return this}}class F{constructor(){this._entries=new Array}add(e,n){this._entries.push([e,n])}generateSource(e){return e==="fragment"?[]:this._entries.map(n=>`in ${n[1]} ${n[0]};`)}get names(){return this._entries.map(([e])=>e)}}class D{constructor(){this._entries=new Map}add(e,n,t){this._entries.has(e)?g().warn(`Ignoring duplicate varying ${n} ${e}`):this._entries.set(e,{type:n,invariant:t?.invariant??!1})}generateSource(e){const n=new Array;return this._entries.forEach((t,s)=>n.push((t.invariant&&e==="vertex"?"invariant ":"")+(t.type==="int"?"flat ":"")+(e==="vertex"?"out":"in")+` ${t.type} ${s};`)),n}}const h=class h{constructor(){this._entries=new Map}add(e,n,t=0){const s=this._entries.get(t);s?.name!==e||s?.type!==n?this._entries.set(t,{name:e,type:n}):g().warn(`Fragment shader output location ${t} occupied`)}generateSource(e){if(e==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:h.DEFAULT_NAME,type:h.DEFAULT_TYPE});const n=new Array;return this._entries.forEach((t,s)=>n.push(`layout(location = ${s}) out ${t.type} ${t.name};`)),n}};h.DEFAULT_TYPE="vec4",h.DEFAULT_NAME="fragColor";let p=h;class r{constructor(e){this._stage=e,this._entries=new Set}add(e,n,t){let s="ERROR_CONSTRUCTOR_STRING";switch(n){case"float":s=r._numberToFloatStr(t);break;case"int":s=r._numberToIntStr(t);break;case"uint":s=r._numberToUintStr(t);break;case"bool":s=t.toString();break;case"vec2":s=`vec2(${r._numberToFloatStr(t[0])},                            ${r._numberToFloatStr(t[1])})`;break;case"vec3":s=`vec3(${r._numberToFloatStr(t[0])},                            ${r._numberToFloatStr(t[1])},                            ${r._numberToFloatStr(t[2])})`;break;case"vec4":s=`vec4(${r._numberToFloatStr(t[0])},                            ${r._numberToFloatStr(t[1])},                            ${r._numberToFloatStr(t[2])},                            ${r._numberToFloatStr(t[3])})`;break;case"ivec2":s=`ivec2(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])})`;break;case"ivec3":s=`ivec3(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])},                             ${r._numberToIntStr(t[2])})`;break;case"ivec4":s=`ivec4(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])},                             ${r._numberToIntStr(t[2])},                             ${r._numberToIntStr(t[3])})`;break;case"uvec2":s=`uvec2(${r._numberToUintStr(t[0])},                             ${r._numberToUintStr(t[1])})`;break;case"uvec3":s=`uvec3(${r._numberToUintStr(t[0])},                             ${r._numberToUintStr(t[1])},                             ${r._numberToUintStr(t[2])})`;break;case"uvec4":s=`uvec4(${r._numberToUintStr(t[0])},                             ${r._numberToUintStr(t[1])},                             ${r._numberToUintStr(t[2])},                             ${r._numberToUintStr(t[3])})`;break;case"mat2":case"mat3":case"mat4":s=`${n}(${Array.prototype.map.call(t,i=>r._numberToFloatStr(i)).join(", ")})`}return this._entries.add(`const ${n} ${e} = ${s};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToUintStr(e){return`${e.toFixed(0)}u`}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const E=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp int;
  precision highp sampler2D;
  precision highp usampler2D;
  precision highp sampler2DArray;
  precision highp sampler2DShadow;
#else
  precision mediump float;
  precision mediump int;
  precision mediump sampler2D;
  precision mediump usampler2D;
  precision mediump sampler2DArray;
  precision mediump sampler2DShadow;
#endif`,I=`precision highp float;
 precision highp int;
 precision highp sampler2D;
 precision highp usampler2D;
 precision highp sampler2DArray;
 precision highp sampler2DShadow;


 invariant gl_Position;
 `;function k(a,e,n){for(let t=0;t<n;++t)e[2*t]=a[t],e[2*t+1]=a[t]-e[2*t]}function N(a,e){const n=a.length;for(let t=0;t<n;++t)c[0]=a[t],e[t]=c[0];return e}function j(a,e){const n=a.length;for(let t=0;t<n;++t)c[0]=a[t],c[1]=a[t]-c[0],e[t]=c[1];return e}const c=new Float32Array(2);export{N as o,j as r,x as s,k as t,A as u};
//# sourceMappingURL=doublePrecisionUtils-H8IRoz3Y.js.map
