import{a_ as v,b8 as D,mT as nt,fa as lt,pb as ct,nb as dt,f2 as z,n1 as ut,nR as ht,f4 as mt,Fb as ye,gI as Te,a3 as n,a4 as G,a6 as ee,Fc as pt,Fd as vt,n9 as ne,m$ as ft,tE as le,ny as V,j5 as _e,j4 as ce,ip as gt,_ as we,dl as xt,fu as q,Fe as yt,fy as de,zA as Tt,Ff as _t,zB as wt,fw as bt,aY as Mt,fA as Ct,fx as ue,aV as $t,f3 as Ot,aZ as St}from"./index-B05090t7.js";import{t as s,r as J,n as p,A as M,e as _,B as be,u as Y,g as A,w as Vt,x as te,a as u,C as he}from"./getEmissions.glsl-BGlX-E8o.js";import{t as Nt,n as Ft,g as It,h as Me,j as Ce,m as $e,d as Oe,e as Se,k as Ve,b as Ne,p as Fe,v as Ie,o as Pe,q as Pt,i as zt,f as At}from"./ReceiveShadowsConfiguration-Cn-k4GbB.js";import{r as ze,aN as w,q as Ae,a4 as me,k as Dt,aO as ae,aP as De,aQ as Le,U as Lt,aR as R,e as kt,aS as Rt,_ as ke,m as Bt,c as C,o as $,u as P,h as O,a1 as Ut,f as Wt,a5 as Et,Y as Ht,aT as Re,d as B,g as Be,t as jt,v as Ue,B as Gt,C as qt,E as Qt,z as Kt,w as Jt,A as Yt,D as Zt,F as Xt,a as ea,s as ta,aJ as aa,i as ra,y as oa,au as sa}from"./OutputColorHighlightOLID.glsl-CznzbIdZ.js";import{o as We,a as ia}from"./AlphaCutoff-BFCKP4xi.js";import{e as na}from"./GlobalIlluminationUpscale.glsl-CgRIfnFS.js";import{t as Z,i as y,P as re}from"./InterleavedLayout-OsNjs_S0.js";import{v as Ee,J as U,D as pe}from"./BufferView-nhF5HNvU.js";import{r as la}from"./VertexBuffer-BTKArTA5.js";import{g as ca}from"./mathUtils-DlnLVBQL.js";import{o as da}from"./pbrUtils-CQ139RNX.js";import{m as ua,p as ha,v as ma}from"./RenderingContext-BkAXCkJm.js";import{o as pa,r as va,s as He}from"./doublePrecisionUtils-H8IRoz3Y.js";import{c as je}from"./NoParameters-DB-WZ6gy.js";function H(a,e){switch(a.fragment.code.add(s`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`),e.normalType){case 1:a.attributes.add("normalCompressed","vec2"),a.vertex.code.add(s`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:a.attributes.add("normal","vec3"),a.vertex.code.add(s`vec3 normalModel() {
return normal;
}`);break;default:e.normalType;case 2:case 3:}}function fa(a){a.uniforms.add(new ze("dpDummy",()=>1)).code.add(s`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 hiD = hiA + hiB;
vec3 loD = loA + loB;
return  dpDummy * hiD + loD;
}`)}let ga=class extends je{constructor(){super(...arguments),this.transformWorldFromViewTH=v(),this.transformWorldFromViewTL=v(),this.transformViewFromCameraRelativeRS=D()}},xa=class extends je{constructor(){super(...arguments),this.transformWorldFromModelRS=D(),this.transformWorldFromModelTH=v(),this.transformWorldFromModelTL=v(),this.transformationDrawId=0}};function Ge(a,e){const{vertex:t,varyings:r}=a;switch(e.normalType){case 0:case 1:a.include(H,e),r.add("vNormalWorld","vec3"),r.add("vNormalView","vec3"),t.uniforms.add(new w("transformNormalViewFromGlobal",o=>o.transformNormalViewFromGlobal)),t.code.add(s`void forwardNormal() {
vNormalWorld = normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case 2:a.vertex.code.add(s`void forwardNormal() {}`);break;default:e.normalType;case 3:}}let ya=class extends ga{constructor(){super(...arguments),this.transformNormalViewFromGlobal=D()}},Ta=class extends xa{constructor(){super(...arguments),this.toMapSpace=nt()}};class _a{constructor(e,t,r){this.elementSize=t.stride,this._buffer=new la(e,Z(t,1)),this.resize(r)}destroy(){this._buffer.dispose()}get capacity(){return this._capacity}get array(){return this._array}get buffer(){return this._buffer}get usedMemory(){return this._array.byteLength+this._buffer.usedMemory}copyRange(e,t,r,o=0){const i=new Uint8Array(this.array,e*this.elementSize,(t-e)*this.elementSize);new Uint8Array(r.array,o*this.elementSize).set(i)}transferAll(){this._buffer.setData(this._array)}transferRange(e,t){const r=e*this.elementSize,o=t*this.elementSize;this._buffer.setSubData(new Uint8Array(this._array),r,r,o)}resize(e){const t=e*this.elementSize,r=new ArrayBuffer(t);this._array&&(e>=this._capacity?new Uint8Array(r).set(new Uint8Array(this._array)):new Uint8Array(r).set(new Uint8Array(this._array).subarray(0,e*this.elementSize))),this._array=r,this._buffer.setSize(t),this._capacity=e}}class ve{constructor(e){this.localTransform=e.localTransform,this.globalTransform=e.globalTransform,this.modelOrigin=e.modelOrigin,this.model=e.instanceModel,this.modelNormal=e.instanceModelNormal,this.modelScaleFactors=e.modelScaleFactors,this.boundingSphere=e.boundingSphere,this.featureAttribute=e.getField("instanceFeatureAttribute",Ee),this.color=e.getField("instanceColor",U),this.olidColor=e.getField("instanceOlidColor",U),this.state=e.getField("state",pe),this.lodLevel=e.getField("lodLevel",pe)}}let I=class extends lt{constructor(e,t){super(e),this.events=new ct,this._capacity=0,this._size=0,this._next=0,this._highlightOptionsMap=new Map,this._highlightOptionsMapPrev=new Map,this._layout=Ma(t),this._capacity=W,this._buffer=this._layout.createBuffer(this._capacity),this._view=new ve(this._buffer)}get capacity(){return this._capacity}get size(){return this._size}get view(){return this._view}addInstance(){this._size+1>this._capacity&&this._grow();const e=this._findSlot();return this._view.state.set(e,1),this._size++,this.events.emit("instances-changed"),e}removeInstance(e){const t=this._view.state;y(e>=0&&e<this._capacity&&!!(1&t.get(e)),"invalid instance handle"),this._getStateFlag(e,18)?this._setStateFlags(e,32):this.freeInstance(e),this.events.emit("instances-changed")}freeInstance(e){const t=this._view.state;y(e>=0&&e<this._capacity&&!!(1&t.get(e)),"invalid instance handle"),t.set(e,0),this._size--}setLocalTransform(e,t,r=!0){this._view.localTransform.setMat(e,t),r&&this.updateModelTransform(e)}getLocalTransform(e,t){this._view.localTransform.getMat(e,t)}setGlobalTransform(e,t,r=!0){this._view.globalTransform.setMat(e,t),r&&this.updateModelTransform(e)}getGlobalTransform(e,t){this._view.globalTransform.getMat(e,t)}updateModelTransform(e){const t=this._view,r=f,o=x;t.localTransform.getMat(e,fe),t.globalTransform.getMat(e,Q);const i=dt(Q,Q,fe);z(r,i[12],i[13],i[14]),t.modelOrigin.setVec(e,r),ut(o,i),t.model.setMat(e,o);const h=ca(f,i);h.sort(),t.modelScaleFactors.set(e,0,h[1]),t.modelScaleFactors.set(e,1,h[2]),ht(o,o),mt(o,o),t.modelNormal.setMat(e,o),this._setStateFlags(e,64),this.events.emit("instance-transform-changed",{index:e})}getModelTransform(e,t){const r=this._view;r.model.getMat(e,x),r.modelOrigin.getVec(e,f),t[0]=x[0],t[1]=x[1],t[2]=x[2],t[3]=0,t[4]=x[3],t[5]=x[4],t[6]=x[5],t[7]=0,t[8]=x[6],t[9]=x[7],t[10]=x[8],t[11]=0,t[12]=f[0],t[13]=f[1],t[14]=f[2],t[15]=1}applyShaderTransformation(e,t){this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,t)}getCombinedModelTransform(e,t){return this.getModelTransform(e,t),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,t),t}getCombinedLocalTransform(e,t){this._view.localTransform.getMat(e,t),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,t)}getCombinedMaxScaleFactor(e){let t=this._view.modelScaleFactors.get(e,1);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(f,this,e),t*=Math.max(f[0],f[1],f[2])),t}getCombinedMedianScaleFactor(e){let t=this._view.modelScaleFactors.get(e,0);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(f,this,e),t*=wa(f[0],f[1],f[2])),t}getModel(e,t){this._view.model.getMat(e,t)}setFeatureAttribute(e,t){this._view.featureAttribute?.setVec(e,t)}getFeatureAttribute(e,t){this._view.featureAttribute?.getVec(e,t)}setColor(e,t){this._view.color?.setVec(e,t)}setObjectAndLayerIdColor(e,t){this._view.olidColor?.setVec(e,t)}setVisible(e,t){t!==this.getVisible(e)&&(this._setStateFlag(e,4,t),this.events.emit("instance-visibility-changed",{index:e}))}getVisible(e){return this._getStateFlag(e,4)}setHighlight(e,t){const{_highlightOptionsMap:r}=this,o=r.get(e);t?t!==o&&(r.set(e,t),this._setStateFlag(e,8,!0),this.events.emit("instance-highlight-changed")):o&&(r.delete(e),this._setStateFlag(e,8,!1),this.events.emit("instance-highlight-changed"))}get highlightOptionsMap(){return this._highlightOptionsMap}getHighlightStateFlag(e){return this._getStateFlag(e,8)}geHighlightOptionsPrev(e){const t=this._highlightOptionsMapPrev.get(e)??null;return this._highlightOptionsMapPrev.delete(e),t}getHighlightName(e){const t=this.highlightOptionsMap.get(e)??null;return t?this._highlightOptionsMapPrev.set(e,t):this._highlightOptionsMapPrev.delete(e),t}getState(e){return this._view.state.get(e)}getLodLevel(e){return this._view.lodLevel.get(e)}countFlags(e){let t=0;for(let r=0;r<this._capacity;++r)this.getState(r)&e&&++t;return t}_setStateFlags(e,t){const r=this._view.state;t=r.get(e)|t,r.set(e,t)}_clearStateFlags(e,t){const r=this._view.state;t=r.get(e)&~t,r.set(e,t)}_setStateFlag(e,t,r){r?this._setStateFlags(e,t):this._clearStateFlags(e,t)}_getStateFlag(e,t){return!!(this._view.state.get(e)&t)}_grow(){this._capacity=Math.max(W,Math.floor(this._capacity*ye)),this._buffer=this._layout.createBuffer(this._capacity).copyFrom(this._buffer),this._view=new ve(this._buffer)}_findSlot(){const e=this._view.state;let t=this._next;for(;1&e.get(t);)t=t+1===this._capacity?0:t+1;return this._next=t+1===this._capacity?0:t+1,t}};function wa(a,e,t){return Math.max(Math.min(a,e),Math.min(Math.max(a,e),t))}n([G({constructOnly:!0})],I.prototype,"shaderTransformation",void 0),n([G()],I.prototype,"_size",void 0),n([G({readOnly:!0})],I.prototype,"size",null),I=n([ee("esri.views.3d.webgl-engine.lib.lodRendering.InstanceData")],I);const ba=re().mat4f64("localTransform").mat4f64("globalTransform").vec4f64("boundingSphere").vec3f64("modelOrigin").mat3f("instanceModel").mat3f("instanceModelNormal").vec2f("modelScaleFactors");function Ma(a){return qe(ba.clone(),a).u8("state").u8("lodLevel")}function qe(a,e){return e.instancedFeatureAttribute&&a.vec4f("instanceFeatureAttribute"),e.instancedColor&&a.vec4u8("instanceColor"),Ae()&&a.vec4u8("instanceOlidColor"),a}const f=v(),x=D(),fe=Te(),Q=Te(),W=64;let Ca=class{constructor(e){this.model=e.instanceModel,this.modelNormal=e.instanceModelNormal,this.modelOriginHi=e.instanceModelOriginHi,this.modelOriginLo=e.instanceModelOriginLo,this.featureAttribute=e.getField("instanceFeatureAttribute",Ee),this.color=e.getField("instanceColor",U),this.olidColor=e.getField("instanceOlidColor",U)}},xr=class{constructor(e,t){this._rctx=e,this._layout=t,this._headIndex=0,this._tailIndex=0,this._firstIndex=null,this._captureFirstIndex=!0,this._updating=!1,this._prevHeadIndex=0,this._resized=!1,this._capacity=1}destroy(){this._buffer&&this._buffer.destroy()}get buffer(){return this._buffer.buffer}get view(){return this._view}get capacity(){return this._capacity}get size(){const e=this._headIndex,t=this._tailIndex;return e>=t?e-t:e+this._capacity-t}get isEmpty(){return this._headIndex===this._tailIndex}get isFull(){return this._tailIndex===(this._headIndex+1)%this._capacity}get headIndex(){return this._headIndex}get tailIndex(){return this._tailIndex}get firstIndex(){return this._firstIndex}get usedMemory(){return this._buffer?.usedMemory??0}reset(){this._headIndex=0,this._tailIndex=0,this._firstIndex=null}startUpdateCycle(){this._captureFirstIndex=!0}beginUpdate(){y(!this._updating,"already updating"),this._updating=!0,this._prevHeadIndex=this._headIndex}endUpdate(){y(this._updating,"not updating"),this.size<pt*this.capacity&&this._shrink(),this._resized?(this._buffer.transferAll(),this._resized=!1):this._transferRange(this._prevHeadIndex,this._headIndex),this._updating=!1}allocateHead(){y(this._updating,"not updating"),this.isFull&&this._grow();const e=this.headIndex;return this._captureFirstIndex&&(this._firstIndex=e,this._captureFirstIndex=!1),this._incrementHead(),y(this._headIndex!==this._tailIndex,"invalid pointers"),e}freeTail(){y(this._updating,"not updating"),y(this.size>0,"invalid size");const e=this._tailIndex===this._firstIndex;this._incrementTail(),e&&(this._firstIndex=this._tailIndex)}_grow(){const e=Math.max(W,Math.floor(this._capacity*ye));this._resize(e)}_shrink(){const e=Math.max(W,Math.floor(this._capacity*vt));this._resize(e)}_resize(e){if(y(this._updating,"not updating"),e===this._capacity)return;const t=new _a(this._rctx,this._layout,e);if(this._buffer){this._firstIndex&&(this._firstIndex=(this._firstIndex+this._capacity-this._tailIndex)%this._capacity);const r=this.size,o=this._compactInstances(t);y(o===r,"invalid compaction"),this._buffer.destroy(),this._tailIndex=0,this._headIndex=o,this._prevHeadIndex=0}this._resized=!0,this._capacity=e,this._buffer=t,this._view=new Ca(this._layout.createView(this._buffer.array))}_compactInstances(e){const t=this._headIndex,r=this._tailIndex;return r<t?(this._buffer.copyRange(r,t,e),t-r):r>t?(this._buffer.copyRange(r,this._capacity,e),t>0&&this._buffer.copyRange(0,t,e,this._capacity-r),t+(this._capacity-r)):0}_incrementHead(e=1){this._headIndex=(this._headIndex+e)%this._capacity}_incrementTail(e=1){this._tailIndex=(this._tailIndex+e)%this._capacity}_transferRange(e,t){e<t?this._buffer.transferRange(e,t):e>t&&(t>0&&this._buffer.transferRange(0,t),this._buffer.transferRange(e,this._capacity))}};const $a=re().vec3f("instanceModelOriginHi").vec3f("instanceModelOriginLo").mat3f("instanceModel").mat3f("instanceModelNormal");function Oa(a){return qe($a.clone(),a)}function Qe(a){a.vertex.code.add(s`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}const ge=D();function Ke(a,e){const{hasModelTransformation:t,instancedDoublePrecision:r,instanced:o,output:i,hasVertexTangents:h}=e;t&&a.vertex.uniforms.add(new Nt("model",m=>m.modelTransformation??ne),new w("normalLocalOriginFromModel",m=>(ft(ge,m.modelTransformation??ne),ge))),o&&r&&(a.attributes.add("instanceModelOriginHi","vec3"),a.attributes.add("instanceModelOriginLo","vec3"),a.attributes.add("instanceModel","mat3"),a.attributes.add("instanceModelNormal","mat3"));const d=a.vertex;r&&(d.include(fa),d.uniforms.add(new me("viewOriginHi",m=>pa(z(L,m.camera.viewInverseTransposeMatrix[3],m.camera.viewInverseTransposeMatrix[7],m.camera.viewInverseTransposeMatrix[11]),L)),new me("viewOriginLo",m=>va(z(L,m.camera.viewInverseTransposeMatrix[3],m.camera.viewInverseTransposeMatrix[7],m.camera.viewInverseTransposeMatrix[11]),L)))),d.code.add(s`
    vec3 getVertexInLocalOriginSpace() {
      return ${t?r?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":r?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${r?s`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }

    vec3 dpNormal(vec4 _normal) {
      return normalize(${t?r?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":r?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
  `),i===4&&d.uniforms.add(Dt).code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${t?r?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":r?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `),h&&d.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t?r?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":r?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const L=v();function Sa(a,e){e.instancedColor?(a.attributes.add("instanceColor","vec4"),a.vertex.include(ae),a.vertex.include(De),a.vertex.include(Le),a.vertex.code.add(s`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${"instanceColor"}));
      }
    `)):a.vertex.code.add(s`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}function Va(a,e){a.varyings.add("colorMixMode","int"),a.varyings.add("opacityMixMode","int"),a.vertex.uniforms.add(new Lt("symbolColorMixMode",t=>R[t.colorMixMode])),e.hasSymbolColors?(a.vertex.include(ae),a.vertex.include(De),a.vertex.include(Le),a.attributes.add("symbolColor","vec4"),a.vertex.code.add(s`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${"symbolColor"}));
    }
  `)):a.vertex.code.add(s`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),a.vertex.code.add(s`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${s.int(R.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${s.int(R.ignore)} : symbolColorMixMode;
    }
  `)}function oe(a,e){const{vertex:t,fragment:r,varyings:o}=a;a.include(Sa,e),a.include(Va,e),a.include(kt,e),t.include(ae),t.include(Rt),t.include(ke),t.uniforms.add(new Bt("externalColor",i=>i.externalColor,{supportsNaN:!0})),o.add("vExternalColor","vec4"),t.code.add(s`
    void forwardDefaultMaterialExternalColor() {
      forwardVertexColor();

      MaskedColor maskedColor =
        applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

      vExternalColor = maskedColor.color;
      forwardColorMixMode(maskedColor.mask);
    }

    bool shouldCullByOpacity() {
      return opacityMixMode != ${s.int(R.ignore)} && vExternalColor.a < alphaCutoff;
    }
  `),r.include(Ft),r.uniforms.add(new J("opacity",i=>i.opacity),new J("layerOpacity",i=>i.layerOpacity)),r.code.add(s`
    float getDefaultMaterialOpacity(float textureOpacity) {
      return layerOpacity * mixExternalOpacity(
        ${p(e.hasVertexColors,"vColor.a * ")} opacity,
        textureOpacity,
        vExternalColor.a,
        opacityMixMode
      );
    }
  `)}function Na(a,e){switch(e.output){case 5:case 6:case 7:case 8:a.fragment.code.add(s`void outputDepth(float _linearDepth){
const float slope_scale = 2.0;
const float bias = 20.0 * .000015259;
float m = max(abs(dFdx(_linearDepth)), abs(dFdy(_linearDepth)));
gl_FragDepth = _linearDepth + slope_scale * m + bias;
}`)}}function S(a,e){Fa(a,e,new J("textureAlphaCutoff",t=>t.textureAlphaCutoff))}function Fa(a,e,t){const r=a.fragment;switch(r.code.add("void discardOrAdjustAlpha(inout vec4 color) {"),e.alphaDiscardMode){case 1:r.code.add("color.a = 1.0;");break;case 0:e.output!==0&&(r.include(ke),r.code.add("if (color.a < alphaCutoff) discard;"));break;case 3:e.output!==0&&r.uniforms.add(t).code.add("if (color.a < textureAlphaCutoff) discard;");break;case 2:r.uniforms.add(t).code.add(`
        if (color.a < textureAlphaCutoff) discard;
        color.a = 1.0;
      `);break;case 4:break;default:e.alphaDiscardMode}r.code.add("}")}function Je(a,e){const{vertex:t,fragment:r,varyings:o}=a,{hasColorTexture:i,alphaDiscardMode:h}=e,d=i&&h!==1,{output:m,normalType:l,hasColorTextureTransform:T}=e;switch(m){case 3:C(t,e),a.include($),r.include(O,e),a.include(M,e),d&&r.uniforms.add(new _("tex",g=>g.texture)),t.main.add(s`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),a.include(S,e),r.main.add(s`
        discardBySlice(vpos);
        ${p(d,s`vec4 texColor = texture(tex, ${T?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case 5:case 6:case 7:case 8:case 11:C(t,e),a.include($),a.include(M,e),a.include(P,e),a.include(Na,e),r.include(O,e),a.include(Wt,e),o.add("depth","float",{invariant:!0}),d&&r.uniforms.add(new _("tex",g=>g.texture)),t.uniforms.add(Et).main.add(s`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),a.include(S,e),r.main.add(s`
        discardBySlice(vpos);
        ${p(d,s`vec4 texColor = texture(tex, ${T?"colorUV":"vuv0"});
               discardOrAdjustAlpha(texColor);`)}
        ${m===11?s`outputObjectAndLayerIdColor();`:s`outputDepth(depth);`}`);break;case 4:{C(t,e),a.include($),a.include(H,e),a.include(Ge,e),a.include(M,e),a.include(P,e),a.include(oe,e),d&&r.uniforms.add(new _("tex",N=>N.texture)),l===2&&o.add("vPositionView","vec3",{invariant:!0});const g=l===0||l===1;t.main.add(s`
        forwardDefaultMaterialExternalColor();

        if (shouldCullByOpacity()) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = getVertexInLocalOriginSpace();
        ${g?s`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:s`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),r.include(O,e),a.include(S,e),r.main.add(s`
        discardBySlice(vpos);
        ${p(d,s`vec4 texColor = texture(tex, ${T?"colorUV":"vuv0"});
               discardOrAdjustAlpha(texColor);`,s`vec4 texColor = vec4(1.0);`)}
        float opacity = getDefaultMaterialOpacity(texColor.a);

        ${l===2?s`vec3 normal = screenDerivativeNormal(vPositionView);`:s`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, opacity);`);break}case 10:C(t,e),a.include($),a.include(M,e),a.include(P,e),d&&r.uniforms.add(new _("tex",g=>g.texture)),t.main.add(s`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),r.include(O,e),a.include(S,e),a.include(Ut,e),r.main.add(s`
        discardBySlice(vpos);
        ${p(d,s`vec4 texColor = texture(tex, ${T?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function Ia(a,e){return Pa(a,e)}function Pa(a,e){const t=a.fragment,{hasVertexTangents:r,doubleSidedMode:o,hasNormalTexture:i,textureCoordinateType:h,bindType:d,hasNormalTextureTransform:m}=e;r?(a.attributes.add("tangent","vec4"),a.varyings.add("vTangent","vec4"),o===2?t.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):t.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):t.code.add(s`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),i&&h!==0&&(a.include(be,e),t.uniforms.add(d===1?new _("normalTexture",l=>l.textureNormal):new Y("normalTexture",l=>l.textureNormal)),m&&(t.uniforms.add(d===1?new Ht("scale",l=>l.scale??le):new It("scale",l=>l.scale??le)),t.uniforms.add(new w("normalTextureTransformMatrix",l=>l.normalTextureTransformMatrix??V))),t.code.add(s`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),m&&t.code.add(s`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),t.code.add(s`return tangentSpace * rawNormal;
}`))}function za(a,e){const t=a.fragment;switch(e.doubleSidedMode){case 0:t.code.add("vec3 shadingNormal(vec3 normalView, vec3 viewDirection) { return normalize(normalView); }");break;case 1:t.code.add(s`vec3 shadingNormal(vec3 normalView, vec3 viewDirection) {
return dot(normalView, viewDirection) > 0.0 ? normalize(-normalView) : normalize(normalView);
}`);break;case 2:t.code.add(s`vec3 shadingNormal(vec3 normalView, vec3 viewDirection) {
return gl_FrontFacing ? normalize(normalView) : normalize(-normalView);
}`);break;default:e.doubleSidedMode;case 3:}}function Ye(a,e){const t=e.pbrMode,r=a.fragment;switch(t){case 5:case 3:case 4:case 6:return void r.code.add(s`void applyPBRFactors() {}`);case 0:case 7:return void r.code.add(s`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);case 2:return void r.code.add(s`float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);case 1:{const{hasMetallicRoughnessTexture:o,hasMetallicRoughnessTextureTransform:i,hasOcclusionTexture:h,hasOcclusionTextureTransform:d,bindType:m}=e;(o||h)&&a.include(be,e),r.code.add("float occlusion;"),o&&r.uniforms.add(m===1?new _("texMetallicRoughness",l=>l.textureMetallicRoughness):new Y("texMetallicRoughness",l=>l.textureMetallicRoughness)),h&&r.uniforms.add(m===1?new _("texOcclusion",l=>l.textureOcclusion):new Y("texOcclusion",l=>l.textureOcclusion)),r.uniforms.add(m===1?new A("mrrFactors",l=>l.mrrFactors):new Vt("mrrFactors",l=>l.mrrFactors)),r.include(Me),o&&r.code.add(s`void applyMetallicRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`),h&&r.code.add("void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }"),r.code.add(s`
          float getBakedOcclusion() {
            return ${h?"occlusion":"1.0"};
          }

          void applyPBRFactors() {
            mrr = mrrFactors;
            occlusion = 1.0;

            ${p(o,`applyMetallicRoughness(${i?"metallicRoughnessUV":"vuv0"});`)}
            ${p(h,`applyOcclusion(${d?"occlusionUV":"vuv0"});`)}
          }`)}}}function Ze(a,e){e.hasColorTextureTransform?(a.varyings.add("colorUV","vec2"),a.vertex.uniforms.add(new w("colorTextureTransformMatrix",t=>t.colorTextureTransformMatrix??V)).code.add(s`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):a.vertex.code.add(s`void forwardColorUV(){}`)}function Aa(a,e){e.hasNormalTextureTransform&&e.textureCoordinateType!==0?(a.varyings.add("normalUV","vec2"),a.vertex.uniforms.add(new w("normalTextureTransformMatrix",t=>t.normalTextureTransformMatrix??V)).code.add(s`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):a.vertex.code.add(s`void forwardNormalUV(){}`)}function Xe(a,e){e.hasEmissionTextureTransform&&e.textureCoordinateType!==0?(a.varyings.add("emissiveUV","vec2"),a.vertex.uniforms.add(new w("emissiveTextureTransformMatrix",t=>t.emissiveTextureTransformMatrix??V)).code.add(s`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):a.vertex.code.add(s`void forwardEmissiveUV(){}`)}function Da(a,e){e.hasOcclusionTextureTransform&&e.textureCoordinateType!==0?(a.varyings.add("occlusionUV","vec2"),a.vertex.uniforms.add(new w("occlusionTextureTransformMatrix",t=>t.occlusionTextureTransformMatrix??V)).code.add(s`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):a.vertex.code.add(s`void forwardOcclusionUV(){}`)}function La(a,e){e.hasMetallicRoughnessTextureTransform&&e.textureCoordinateType!==0?(a.varyings.add("metallicRoughnessUV","vec2"),a.vertex.uniforms.add(new w("metallicRoughnessTextureTransformMatrix",t=>t.metallicRoughnessTextureTransformMatrix??V)).code.add(s`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):a.vertex.code.add(s`void forwardMetallicRoughnessUV(){}`)}function et(a,e){e.snowCover&&(a.uniforms.add(new ze("snowCover",t=>t.snowCover)).code.add(s`float getSnow(vec3 normal, vec3 groundNormal) {
return smoothstep(0.5, 0.55, dot(normal, groundNormal)) * snowCover;
}
float getRealisticTreeSnow(vec3 faceNormal, vec3 shadingNormal, vec3 groundNormal) {
float snow = min(1.0, smoothstep(0.5, 0.55, dot(faceNormal, groundNormal)) +
smoothstep(0.5, 0.55, dot(-faceNormal, groundNormal)) +
smoothstep(0.0, 0.1, dot(shadingNormal, groundNormal)));
return snow * snowCover;
}`),a.include(Me),a.code.add(s`void applySnowToMRR(float snow) {
mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}`))}function tt(a){const e=new He,{attributes:t,vertex:r,fragment:o,varyings:i}=e,{output:h,normalType:d,offsetBackfaces:m,snowCover:l,pbrMode:T,textureAlphaPremultiplied:g,instancedDoublePrecision:N,hasVertexColors:b,hasVertexTangents:se,hasColorTexture:ie,hasNormalTexture:ot,hasNormalTextureTransform:st,hasColorTextureTransform:it}=a;if(C(r,a),t.add("position","vec3"),r.inputs.add("position",()=>"position"),i.add("vpos","vec3",{invariant:!0}),e.include(P,a),e.include(Ke,a),e.include(Re,a),e.include(Ze,a),!te(h))return e.include(Je,a),e;e.include(Aa,a),e.include(Xe,a),e.include(Da,a),e.include(La,a),B(r,a),e.include(H,a),e.include($);const j=d===0||d===1;return j&&m&&e.include(Qe),e.include(Ia,a),e.include(Ge,a),i.add("vPositionLocal","vec3"),e.include(M,a),e.include(oe,a),e.include(N?Ce:$e,a),r.main.add(s`
    forwardDefaultMaterialExternalColor();

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${p(j,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${p(se,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${p(j&&m,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (shouldCullByOpacity()) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadow();
  `),o.include(Oe,a),o.include(Se,a),e.include(S,a),o.include(O,a),e.include(Be,a),B(o,a),o.uniforms.add(r.uniforms.get("localOrigin"),new A("ambient",F=>F.ambient),new A("diffuse",F=>F.diffuse)),ie&&o.uniforms.add(new _("tex",F=>F.texture)),e.include(Ye,a),o.include(Ve,a),e.include(za,a),o.include(et,a),o.include(Ne,a),Fe(o),Ie(o),o.uniforms.add(Pe).main.add(s`
    discardBySlice(vpos);
    ${ie?s`
            vec4 texColor = texture(tex, ${it?"colorUV":"vuv0"});
            ${p(g,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:"vec4 texColor = vec4(1.0);"}
    vec3 viewDirection = normalize(vpos - cameraPosition);
    vec3 posWorld = vpos + localOrigin;
    vec3 upNormal = getLocalUp(posWorld);
    ${d===2?"vec3 normal = screenDerivativeNormal(vPositionLocal);":"vec3 normal = shadingNormal(vNormalWorld, viewDirection);"}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(
      ${p(b,"vColor.rgb *")} matColor,
      texColor.rgb,
      vExternalColor.rgb,
      colorMixMode
    );
    float opacity_ = getDefaultMaterialOpacity(texColor.a);

    ${ot?`mat3 tangentSpace = computeTangentSpace(${se?"normal":"normal, vpos, vuv0"});
           vec3 shadingNormal = computeTextureNormal(tangentSpace, ${st?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}

    ${p(l,s`
          float snow = getSnow(normal, upNormal);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
    ${p((T===1||T===2)&&l,"applySnowToMRR(snow);")}

    vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, upNormal);
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${p(l,", snow")});
  `),e}const ka=Object.freeze(Object.defineProperty({__proto__:null,build:tt},Symbol.toStringTag,{value:"Module"}));class Ra extends ya{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=da,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=2,this.instanced=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.instanceColorEncodesAlphaIgnore=!1,this.emissiveStrengthFromSymbol=0,this.emissiveStrengthKHR=1,this.emissiveSource=1,this.emissiveBaseColor=_e,this.instancedDoublePrecision=!1,this.normalType=0,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=ce(.2,.2,.2),this.diffuse=ce(.8,.8,.8),this.externalColor=gt(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=v(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.modelTransformation=null,this.drivenOpacity=!1,this.customDepthTest=0,this.textureAlphaMode=0,this.textureAlphaCutoff=We,this.textureAlphaPremultiplied=!1,this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1}get emissiveStrength(){return this.emissiveStrengthFromSymbol*this.emissiveStrengthKHR}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}class Tr extends Ta{constructor(){super(...arguments),this.origin=v(),this.slicePlaneLocalOrigin=this.origin}get localOrigin(){return this.origin}}let E=class extends jt{constructor(a,e){let t=Z(at(e));e.instanced&&e.instancedDoublePrecision&&(t=t.concat(Z(Oa(e)))),super(a,e,t),this.shader=new Ue(ka,()=>we(()=>Promise.resolve().then(()=>Ja),void 0)),this.ignoreUnused=!0}_makePipeline(a,e){const{output:t,transparent:r,cullFace:o,customDepthTest:i,hasOccludees:h}=a;return ua({blending:r?Qt(t,!1,a.emissionDimmingPass):null,culling:Ua(a)?ha(o):null,depthTest:Zt(t,Ba(i)),depthWrite:qt(a),colorWrite:ma,stencilWrite:h?Yt:null,stencilTest:h?e?Kt:Jt:null,polygonOffset:Gt(a)})}initializePipeline(a){return this._occludeePipelineState=this._makePipeline(a,!0),this._makePipeline(a,!1)}getPipeline(a,e,t){return t?this._occludeePipelineState:super.getPipeline(a,e,t)}};function Ba(a){switch(a){case 1:return 515;case 0:case 4:return 513;case 2:return 516;case 3:return 514}}function Ua(a){return a.cullFace!==0||!a.hasSlicePlane&&!a.transparent&&!a.doubleSidedMode}function at(a){const e=re().vec3f("position");return a.normalType===1?e.vec2i16("normalCompressed",{glNormalized:!0}):e.vec3f("normal"),a.hasVertexTangents&&e.vec4f("tangent"),a.hasTextures&&e.vec2f16("uv0"),a.hasVertexColors&&e.vec4u8("color",{glNormalized:!0}),a.hasSymbolColors&&e.vec4u8("symbolColor"),!a.instanced&&Ae()&&e.vec4u8("olidColor"),e}E=n([ee("esri.views.3d.webgl-engine.shaders.DefaultMaterialTechnique")],E);class c extends Xt{constructor(e){super(),this.spherical=e,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.pbrMode=0,this.cullFace=0,this.normalType=0,this.customDepthTest=0,this.emissionSource=0,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.instanced=!1,this.instancedDoublePrecision=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.receiveShadows=!1,this.hasShadowHighlights=!1,this.receiveAmbientOcclusion=!1,this.receiveGlobalIllumination=!1,this.textureAlphaPremultiplied=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.writeDepth=!0,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0,this.draped=!1,this.renderOccluded=!1}get textureCoordinateType(){return this.hasTextures?1:0}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||this.emissionSource===3||this.hasOcclusionTexture}get hasVVInstancing(){return this.instanced}}n([u({count:4})],c.prototype,"alphaDiscardMode",void 0),n([u({count:3})],c.prototype,"doubleSidedMode",void 0),n([u({count:8})],c.prototype,"pbrMode",void 0),n([u({count:3})],c.prototype,"cullFace",void 0),n([u({count:3})],c.prototype,"normalType",void 0),n([u({count:4})],c.prototype,"customDepthTest",void 0),n([u({count:8})],c.prototype,"emissionSource",void 0),n([u()],c.prototype,"hasVertexColors",void 0),n([u()],c.prototype,"hasSymbolColors",void 0),n([u()],c.prototype,"hasVerticalOffset",void 0),n([u()],c.prototype,"hasColorTexture",void 0),n([u()],c.prototype,"hasMetallicRoughnessTexture",void 0),n([u()],c.prototype,"hasOcclusionTexture",void 0),n([u()],c.prototype,"hasNormalTexture",void 0),n([u()],c.prototype,"hasScreenSizePerspective",void 0),n([u()],c.prototype,"hasVertexTangents",void 0),n([u()],c.prototype,"hasOccludees",void 0),n([u()],c.prototype,"instanced",void 0),n([u()],c.prototype,"instancedDoublePrecision",void 0),n([u()],c.prototype,"hasModelTransformation",void 0),n([u()],c.prototype,"offsetBackfaces",void 0),n([u()],c.prototype,"hasVVSize",void 0),n([u()],c.prototype,"hasVVColor",void 0),n([u()],c.prototype,"receiveShadows",void 0),n([u()],c.prototype,"hasShadowHighlights",void 0),n([u()],c.prototype,"receiveAmbientOcclusion",void 0),n([u()],c.prototype,"receiveGlobalIllumination",void 0),n([u()],c.prototype,"textureAlphaPremultiplied",void 0),n([u()],c.prototype,"instancedFeatureAttribute",void 0),n([u()],c.prototype,"instancedColor",void 0),n([u()],c.prototype,"writeDepth",void 0),n([u()],c.prototype,"snowCover",void 0),n([u()],c.prototype,"hasColorTextureTransform",void 0),n([u()],c.prototype,"hasEmissionTextureTransform",void 0),n([u()],c.prototype,"hasNormalTextureTransform",void 0),n([u()],c.prototype,"hasOcclusionTextureTransform",void 0),n([u()],c.prototype,"hasMetallicRoughnessTextureTransform",void 0);function rt(a){const e=new He,{attributes:t,vertex:r,fragment:o,varyings:i}=e,{output:h,offsetBackfaces:d,pbrMode:m,snowCover:l}=a,T=m===1||m===2;if(C(r,a),t.add("position","vec3"),r.inputs.add("position",()=>"position"),i.add("vpos","vec3",{invariant:!0}),e.include(P,a),e.include(Ke,a),e.include(Re,a),e.include(Ze,a),!te(h))return e.include(Je,a),e;e.include(Xe,a),B(e.vertex,a),e.include(H,a),e.include($),d&&e.include(Qe),i.add("vNormalWorld","vec3"),i.add("localvpos","vec3",{invariant:!0}),e.include(M,a),e.include(oe,a),e.include(a.instancedDoublePrecision?Ce:$e,a),r.main.add(s`
    forwardDefaultMaterialExternalColor();

    vpos = getVertexInLocalOriginSpace();

    localvpos = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
    vpos = addVerticalOffset(vpos, localOrigin);
    vec4 basePosition = transformPosition(proj, view, vpos);

    forwardTextureCoordinates();
    forwardColorUV();
    forwardEmissiveUV();
    forwardLinearDepthToReadShadow();

    gl_Position = shouldCullByOpacity() ? vec4(1e38, 1e38, 1e38, 1.0) :
    ${p(d,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
  `);const{hasColorTexture:g,hasColorTextureTransform:N}=a;return o.include(Oe,a),o.include(Se,a),e.include(S,a),o.include(O,a),e.include(Be,a),B(o,a),Fe(o),Ie(o),o.uniforms.add(Pt,r.uniforms.get("localOrigin"),r.uniforms.get("view"),new A("ambient",b=>b.ambient),new A("diffuse",b=>b.diffuse)),g&&o.uniforms.add(new _("tex",b=>b.texture)),e.include(Ye,a),o.include(Ve,a),o.include(et,a),o.include(Ne,a),o.uniforms.add(Pe).main.add(s`
    discardBySlice(vpos);
    vec4 texColor = ${g?`texture(tex, ${N?"colorUV":"vuv0"})`:" vec4(1.0)"};
    ${p(g,`${p(a.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
      discardOrAdjustAlpha(texColor);`)}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse();
    ssao *= getBakedOcclusion();

    float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
    float shadow = readShadow(additionalAmbientScale, vpos);
    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(
      ${p(a.hasVertexColors,"vColor.rgb * ")} matColor,
      texColor.rgb,
      vExternalColor.rgb,
      colorMixMode
    );
    float opacity_ = getDefaultMaterialOpacity(texColor.a);

    vec3 shadingNormal = normalize(vNormalWorld);
    vec3 viewDirection = normalize(vpos - cameraPosition);
    vec3 upNormal = getLocalUp(vpos, localOrigin);

    ${p(l,`vec3 faceNormal = screenDerivativeNormal(vpos);
        float snow = getRealisticTreeSnow(faceNormal, shadingNormal, upNormal);
        albedo = mix(albedo, vec3(1), snow);`)}

    ${s`albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}

    ${p(T&&l,"applySnowToMRR(snow);")}

    vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, upNormal);
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${p(l,", 1.0")});
  `),e}const Wa=Object.freeze(Object.defineProperty({__proto__:null,build:rt},Symbol.toStringTag,{value:"Module"}));let X=class extends E{constructor(){super(...arguments),this.shader=new Ue(Wa,()=>we(()=>Promise.resolve().then(()=>Ya),void 0))}};X=n([ee("esri.views.3d.webgl-engine.shaders.RealisticTreeTechnique")],X);class _r extends ea{constructor(e,t){super(e,Ha),this.materialType="default",this.supportsEdges=!0,this.intersectRayDraped=void 0,this.intersectScreenPolygonDraped=void 0,this.produces=new Map([[2,r=>he(r)&&!this.transparent],[4,r=>he(r)&&this.transparent]]),this._layout=at(this.parameters),this._configuration=new c(t.spherical)}isVisibleForOutput(e){return e!==5&&e!==7&&e!==6||this.parameters.castShadows}get visible(){const{layerOpacity:e,colorMixMode:t,opacity:r,externalColor:o}=this.parameters;return e*(t==="replace"?1:r)*(t==="ignore"||isNaN(o[3])?1:o[3])>=We}get _hasEmissiveBase(){return!!this.parameters.emissiveTextureId||!xt(this.parameters.emissiveBaseColor,_e)}get emissions(){return this.parameters.emissiveStrength>0&&(this.parameters.emissiveSource===0&&this._hasEmissiveBase||this.parameters.emissiveSource===1)?this.transparent?2:1:0}updateConfiguration(e){super.updateConfiguration(e);const{parameters:t,_configuration:r}=this;r.hasNormalTexture=t.hasNormalTexture,r.hasColorTexture=t.hasColorTexture,r.hasMetallicRoughnessTexture=t.hasMetallicRoughnessTexture,r.hasOcclusionTexture=t.hasOcclusionTexture;const{treeRendering:o,doubleSided:i,doubleSidedType:h}=t;r.hasVertexTangents=!o&&t.hasVertexTangents,r.instanced=t.instanced,r.instancedDoublePrecision=t.instancedDoublePrecision,r.hasVVColor=!!t.vvColor,r.hasVVSize=!!t.vvSize,r.hasVerticalOffset=t.verticalOffset!=null,r.hasScreenSizePerspective=t.screenSizePerspective!=null,r.hasSlicePlane=t.hasSlicePlane,r.alphaDiscardMode=t.textureAlphaMode,r.normalType=o?0:t.normalType,r.transparent=this.transparent,r.enableOITOffset=e.enableOITOffset,r.customDepthTest=t.customDepthTest??0,r.hasOccludees=e.hasOccludees,r.cullFace=t.hasSlicePlane?0:t.cullFace,r.hasModelTransformation=!o&&t.modelTransformation!=null,r.hasVertexColors=t.hasVertexColors,r.hasSymbolColors=t.hasSymbolColors,r.doubleSidedMode=o?2:i&&h==="normal"?1:i&&h==="winding-order"?2:0,r.instancedFeatureAttribute=t.instancedFeatureAttribute,r.instancedColor=t.instancedColor,te(e.output)?(r.receiveShadows=t.receiveShadows,r.hasShadowHighlights=zt(r,e),r.receiveAmbientOcclusion=t.receiveAmbientOcclusion&&e.ssao!=null,r.receiveGlobalIllumination=t.receiveAmbientOcclusion&&e.globalIlluminationEnabled):r.receiveShadows=r.hasShadowHighlights=r.receiveAmbientOcclusion=r.receiveGlobalIllumination=!1,r.textureAlphaPremultiplied=!!t.textureAlphaPremultiplied,r.pbrMode=t.usePBR?t.unlit?7:t.isSchematic?2:1:0,r.emissionSource=t.emissionSource,r.offsetBackfaces=!(!this.transparent||!t.offsetTransparentBackfaces),r.snowCover=e.snowCover>0,r.hasColorTextureTransform=!!t.colorTextureTransformMatrix,r.hasNormalTextureTransform=!!t.normalTextureTransformMatrix,r.hasEmissionTextureTransform=!!t.emissiveTextureTransformMatrix,r.hasOcclusionTextureTransform=!!t.occlusionTextureTransformMatrix,r.hasMetallicRoughnessTextureTransform=!!t.metallicRoughnessTextureTransformMatrix}intersectRay(e,t,r,o,i,h){const d=this._getMaterialVerticalOffset(t,r);d!=null&&(o=q(ja,o,d),i=q(Ga,i,d)),h=ta(h,this._configuration,o,i),ia(e,r,o,i,aa(r.verticalOffset),h)}intersectScreenPolygon(e,t,r,o){return ra(oa(e,r,t,o,this._createScreenPolygonVertexDisplacement(t,r)),this._configuration,r.camera.eye)}createGLMaterial(e){return new Ea(e)}createBufferWriter(){return new na(this._layout)}get transparent(){const{drivenOpacity:e,opacity:t,externalColor:r,layerOpacity:o,texture:i,textureId:h,textureAlphaMode:d,colorMixMode:m}=this.parameters,l=r[3];return e||t<1&&m!=="replace"||l<1&&m!=="ignore"||o<1||(i!=null||h!=null)&&d!==1&&d!==2&&m!=="replace"}_createScreenPolygonVertexDisplacement(e,t){const r=this._getMaterialVerticalOffset(e,t);return r==null?null:{applyToVertex:(o,i,h,d)=>(o[0]=i+r[0],o[1]=h+r[1],o[2]=d+r[2],o),applyToAabb:o=>(yt(o,de(k,Tt(o,k),r)),_t(o,de(k,wt(o,k),r)),o)}}_getMaterialVerticalOffset(e,t){if(this.parameters.verticalOffset==null)return null;const r=t.camera;z(K,e[12],e[13],e[14]);let o=null;switch(t.viewingMode){case 1:o=Mt(xe,K);break;case 2:o=bt(xe,qa)}const i=q(Qa,K,r.eye),h=Ct(i),d=ue(i,i,1/h);let m=null;this.parameters.screenSizePerspective&&(m=$t(o,d));const l=sa(r,h,this.parameters.verticalOffset,m??0,this.parameters.screenSizePerspective,null);return ue(o,o,l),Ot(Ka,o,t.transform.inverseRotation)}}class Ea extends At{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return z(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(t.treeRendering?X:E,e)}}class Ha extends Ra{constructor(){super(...arguments),this.treeRendering=!1,this.useIndexing=!1,this.hasVertexTangents=!1,this.unlit=!1}get hasNormalTexture(){return!this.treeRendering&&!!this.normalTextureId}get hasColorTexture(){return!!this.textureId}get hasMetallicRoughnessTexture(){return!this.treeRendering&&!!this.metallicRoughnessTextureId}get hasOcclusionTexture(){return!this.treeRendering&&!!this.occlusionTextureId}get emissionSource(){return this.emissiveTextureId!=null&&this.emissiveSource===0?3:this.emissiveSource===0?2:1}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||this.emissionSource===3||this.hasOcclusionTexture}}const ja=v(),Ga=v(),qa=St(0,0,1),xe=v(),K=v(),Qa=v(),Ka=v(),k=v(),Ja=Object.freeze(Object.defineProperty({__proto__:null,build:tt},Symbol.toStringTag,{value:"Module"})),Ya=Object.freeze(Object.defineProperty({__proto__:null,build:rt},Symbol.toStringTag,{value:"Module"}));export{_r as B,I as F,Tr as V,za as a,et as b,Qe as c,Ua as d,Na as e,xr as o,Ye as p,Oa as u};
//# sourceMappingURL=RealisticTree.glsl-C9Ss0XEc.js.map
