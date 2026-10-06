const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RibbonLine.glsl-CfjhuFt_.js","assets/index-B05090t7.js","assets/index-DnQv3brQ.css","assets/getEmissions.glsl-BGlX-E8o.js","assets/NoParameters-DB-WZ6gy.js","assets/doublePrecisionUtils-H8IRoz3Y.js","assets/OutputColorHighlightOLID.glsl-CznzbIdZ.js","assets/Indices-Cl2pWYHi.js","assets/sphere-CRTtdn4-.js","assets/ray-BXilw2mC.js","assets/vectorStacks-Dd-lJG_a.js","assets/quatf64-aQ5IuZRd.js","assets/InterleavedLayout-OsNjs_S0.js","assets/BufferView-nhF5HNvU.js","assets/types-BKo2foNY.js","assets/VertexElementDescriptor-CVzmm3VW.js","assets/VertexAttributeLocations-bj14KPgt.js","assets/DrapedZ-C24CVmgi.js","assets/triangle-RrVVJpiJ.js","assets/lineSegment-Dw6fKLxq.js","assets/frustumPlanes-DzpumWzA.js","assets/plane-DsXAwgXx.js","assets/AlphaCutoff-BFCKP4xi.js","assets/RenderingContext-BkAXCkJm.js","assets/ProgramCache-CUeMWHwn.js","assets/VertexArrayObject-D7ioFCDt.js","assets/VertexBuffer-BTKArTA5.js","assets/projectVectorToVector-Bzk-dWt3.js","assets/projectPointToVector-DcSyvrIv.js","assets/dehydratedPoint-Z5ONvFg_.js","assets/orientedBoundingBox-g3OD5ohb.js","assets/quat-CCKGqZVv.js","assets/computeTranslationToOriginAndRotation-EjiV3P0J.js","assets/mathUtils-DlnLVBQL.js","assets/ReceiveShadowsConfiguration-Cn-k4GbB.js","assets/HUDMaterial-DOuZ3ueM.js","assets/DDSUtil-BwUINEOV.js","assets/TextureBackedBufferLayout-DmN_ngRQ.js"])))=>i.map(i=>d[i]);
import{cP as ot,zA as Vt,zB as Mt,zC as Dt,f2 as ce,fy as D,rG as J,is as oe,dl as Ft,fw as Q,a_ as j,nA as st,nb as Ee,gI as _e,pp as Tt,i_ as Et,n9 as Bt,gH as Be,pb as Rt,cj as Ut,ck as Ht,lF as Re,er as Gt,a3 as X,gL as It,c_ as qt,mY as it,n2 as kt,aJ as Lt,ot as Wt,ng as rt,zD as Nt,f5 as be,zE as Yt,k8 as Me,c1 as Qt,a6 as De,_ as at,a4 as Ce,d6 as Kt,zF as Ue,q1 as Xt,tP as Jt,vw as Zt,p2 as eo,hl as He,aZ as to,aY as F,fx as H,aV as nt,aW as W,fu as k}from"./index-B05090t7.js";import{m as oo}from"./mathUtils-DlnLVBQL.js";import{w as so}from"./sphere-CRTtdn4-.js";import{L as io,M as ro,l as R,n as B,N as ao,O as lt,c as no,d as lo,P as ct,r as Ge,Q as co,k as uo,R as ut,S as ht,T as ho,U as dt,t as ft,v as pt,V as fo,W as he,X as po,u as mo,f as go,g as vo,p as bo,Y as Se,m as Oe,Z as wo,_ as xo,$ as yo,a0 as Ie,a1 as $o,q as Ao,B as _o,E as Co,a2 as So,a3 as qe}from"./OutputColorHighlightOLID.glsl-CznzbIdZ.js";import{i as mt,P as gt,t as ke}from"./InterleavedLayout-OsNjs_S0.js";import{t as Oo,s as vt}from"./doublePrecisionUtils-H8IRoz3Y.js";import{f as zo}from"./Octree-BSb94C_0.js";import{t as Le,r as V,n as G}from"./vec3f32-WCVSSNPR.js";import{U as Fe,A as Po}from"./Indices-Cl2pWYHi.js";import{j as jo,w as Vo,N as Mo}from"./plane-DsXAwgXx.js";import{v as Do}from"./ray-BXilw2mC.js";import{t as x}from"./orientedBoundingBox-g3OD5ohb.js";import{d as Fo,a as To,t as S,r as ne,e as le,n as E,x as We,f as Eo}from"./getEmissions.glsl-BGlX-E8o.js";import{c as Bo}from"./NoParameters-DB-WZ6gy.js";import{m as bt,r as Ro,v as wt,f as Uo}from"./RenderingContext-BkAXCkJm.js";function Ho(o){return Go.has(o)}const Go=new Set(["position","normal","normalCompressed","uv0","size","rotation","offset","perspectiveDivide","centerOffset","groundDistance","previousDelta","lineParameters","sizeFeatureAttribute","profileRight","profileUp","pathVertexInfo","profileRotation","pathRotationUp","pathMaxStretchDistance","featureAttribute","position","size","sizeFeatureAttribute","profileRight","profileUp","profileRotation","pathRotationUp","pathMaxStretchDistance"]);let Ne=class{constructor(){this.box=ot(),this.sphere=new so}};function Io(o,e,t){const s=Vt(e,ko),i=Mt(e,Lo);if(Dt(t)){const r=ce(qo,t[12],t[13],t[14]);return D(I,s,r),D(q,i,r),J(o,I),void J(o,q)}if(oe(I,s,t),J(o,I),!Ft(s,i)){oe(q,i,t),J(o,q);for(let r=0;r<3;++r)Q(I,s),Q(q,i),I[r]=i[r],q[r]=s[r],oe(I,I,t),oe(q,q,t),J(o,I),J(o,q)}}const qo=j(),I=j(),q=j(),ko=j(),Lo=j();function Wo(o,e){return o==null&&(o=[]),o.push(e),o}function No(o,e){if(o==null)return null;const t=o.filter(s=>s!==e);return t.length===0?null:t}function ni(o,e,t,s,i){de[0]=o.get(e,0),de[1]=o.get(e,1),de[2]=o.get(e,2),Oo(de,N,3),t.set(i,0,N[0]),s.set(i,0,N[1]),t.set(i,1,N[2]),s.set(i,1,N[3]),t.set(i,2,N[4]),s.set(i,2,N[5])}const de=j(),N=new Float32Array(6);let li=class{constructor(e={}){this.id=st(),this.type=0,this._highlightIds=new Set,this._shaderTransformation=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerViewUid=e.layerViewUid,e.isElevationSource&&(this.lastValidElevationBB=ot()),this._geometries=e.geometries?Array.from(e.geometries):[]}dispose(){this._geometries.length=0}get layer(){return this._layer}set layer(e){mt(this._layer==null||e==null,"Object3D can only be added to a single Layer"),this._layer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e);for(const t of this._highlightIds)e.addHighlight(t);this._emit("geometryAdded",{object:this,geometry:e}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}removeGeometry(e){const t=this._geometries.splice(e,1)[0];if(t){for(const s of this._highlightIds)t.removeHighlight(s);this._emit("geometryRemoved",{object:this,geometry:t}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,t,s=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:t,sync:s}),Ho(t)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const t of this._geometries)t.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new io;for(const t of this._geometries)t.occludees=Wo(t.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const t of this._geometries)t.occludees=No(t.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const t=new ro(e);for(const s of this._geometries)s.addHighlight(t);return this._emit("highlightChanged",this),this._highlightIds.add(t),t}removeHighlight(e){this._highlightIds.delete(e);for(const t of this._geometries)t.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===0?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,t){return Ee(t,this.transformation,e.transformation)}getCombinedShaderTransformation(e,t=_e()){return Ee(t,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=new Ne,this._validateBoundingVolume(this._bvWorldSpace,0)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=new Ne,this._validateBoundingVolume(this._bvObjectSpace,1)),this._bvObjectSpace}_validateBoundingVolume(e,t){const s=t===1;for(const i of this._geometries){const r=i.boundingInfo;r&&Io(e.box,r.box,s?i.transformation:this.getCombinedShaderTransformation(i))}Tt(e.box,e.sphere.center);for(const i of this._geometries){const r=i.boundingInfo;if(r==null)continue;const a=s?i.transformation:this.getCombinedShaderTransformation(i),p=oo(a);oe(Ye,r.sphere.center,a);const h=Et(Ye,e.sphere.center),n=r.sphere.radius*p;e.sphere.radius=Math.max(e.sphere.radius,h+n)}}_invalidateBoundingVolume(){const e=this._bvWorldSpace?.sphere;this._bvObjectSpace=this._bvWorldSpace=void 0,this.layer&&e&&this.layer.notifyObjectBBChanged(this,e)}_emit(e,t){this.layer?.events.emit(e,t)}get geometries(){return this._geometries}get transformation(){return this._transformation??Bt}set transformation(e){this._transformation=Be(this._transformation??_e(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?Be(this._shaderTransformation??_e(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}get test(){}};const Ye=j(),Yo=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];let ui=class{constructor(e,t,s=""){this.stage=e,this.apiLayerViewUid=s,this.id=st(),this.events=new Rt,this.visible=!0,this.sliceable=!1,this._objectsAdded=new Array,this._handles=new Ut,this._objects=new Map,this._pickable=!0,this.visible=t?.visible??!0,this._pickable=t?.pickable??!0,this.updatePolicy=t?.updatePolicy??0,e.addLayer(this);for(const i of Yo)this._handles.add(this.events.on(i,r=>e.handleEvent(i,r)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.removeLayer(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}getObject(e){return Ht(this._objects.get(e))}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.set(e.id,e),e.layer=this,this.events.emit("layerObjectAdded",e),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.delete(e.id)&&(this.events.emit("layerObjectRemoved",e),e.layer=null,this._octree!=null&&(Re(this._objectsAdded,e)||this._octree.remove([e])))}addMany(e){for(const t of e)this._objects.set(t.id,t),t.layer=this;this.events.emit("layerObjectsAdded",e),this._octree!=null&&this._objectsAdded.push(...e)}removeMany(e){const t=new Array;for(const s of e)this._objects.delete(s.id)&&t.push(s);if(t.length!==0&&(this.events.emit("layerObjectsRemoved",t),t.forEach(s=>s.layer=null),this._octree!=null)){for(let s=0;s<t.length;)Re(this._objectsAdded,t[s])?(t[s]=t[t.length-1],t.length-=1):++s;this._octree.remove(t)}}commit(){this.stage.commitLayer(this)}sync(){this.updatePolicy!==1&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){this._octree==null||this._objectsAdded.includes(e)||this._octree.update(e,t)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.size>50?(this._octree=new zo(e=>e.boundingVolumeWorldSpace.sphere),this._octree.add(this._objects.values())):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded),this._objectsAdded.length=0),this._octree}invalidateSpatialQueryAccelerator(){this._octree=Gt(this._octree),this._objectsAdded.length=0}get test(){}},xt=class extends Fo{constructor(){super(...arguments),this.hasEmissive=!1}};X([To()],xt.prototype,"hasEmissive",void 0);function yt(o,e,t){o.push(["olidColor",new x(e,t,4,!0)])}function Qo(o,e=!1){return o<=It?e?new Array(o).fill(0):new Array(o):new Float16Array(o)}function Ko(o,e,t){const s=o.isGeographic&&e;let{metersPerUnit:i}=o,r=0;return s?(i=1,r=qt(t)):o.isGeographic?i=it(o).metersPerDegree:o.isWebMercator&&(r=kt(t)),i*Math.max(.2,Math.cos(r))}const M={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},Xo={dash:M.dash,"dash-dot":[...M.dash,...M.dot],dot:M.dot,"long-dash":M["long-dash"],"long-dash-dot":[...M["long-dash"],...M.dot],"long-dash-dot-dot":[...M["long-dash"],...M.dot,...M.dot],none:null,"short-dash":M["short-dash"],"short-dash-dot":[...M["short-dash"],...M["short-dot"]],"short-dash-dot-dot":[...M["short-dash"],...M["short-dot"],...M["short-dot"]],"short-dot":M["short-dot"],solid:null},$t=8;let Jo=class{constructor(e,t,s){this.image=e,this.width=t,this.length=s,this.uuid=Lt()}};function Zo(o){return o!=null&&"image"in o}function At(o,e){return o==null?o:{pattern:o.slice(),pixelRatio:e}}function pi(o){return{pattern:[o,o],pixelRatio:2}}function mi(o){switch(o?.type){case"style":return es(o.style);case"template":return ts(o.normalizedDashTemplate);case"image":return new Jo(o.image,o.width,o.length);case void 0:case null:return null}return null}function es(o){return o!=null?At(Xo[o],$t):null}function ts({dashTemplate:o,hidesLine:e}){return At(e||o.length===0?null:o,$t)}function gi(o){switch(o?.type){case"style":return o.style==="none";case"template":return o.normalizedDashTemplate.hidesLine;case"image":case void 0:case null:return!1}return!1}function vi(o,e,t=null){const s=[],i=e.mapPositions,r=os(e,s),a=r.data,p=r.indices.length,h=Fe(p);return ss(e,s,h),as(e,s,h),is(e,s,h),rs(e,s,r.indices,h),ns(e,s,r.indices,h),ls(e,s),cs(e,s,r.indices,h),us(o,e,s,a),t!=null&&yt(s,t,h),new R(o,s,i)}function os(o,e){const{attributeData:{position:t},removeDuplicateStartEnd:s}=o,i=t.length/3,r=i>2&&hs(t)&&s,a=i-(r?1:0),p=new Array(2*(a-1)),h=r?t.slice(0,-3):t;let n=0;for(let v=0;v<a-1;v++)p[n++]=v,p[n++]=v+1;const l=new x(h,p,3,r);return e.push(["position",l]),l}function ss(o,e,t){if(o.attributeData.colorFeature!=null)return;const s=o.attributeData.color;e.push(["color",new x(s??Wt,t,4)])}function is(o,e,t){o.attributeData.normal&&e.push(["normal",new x(o.attributeData.normal,t,3)])}function rs(o,e,t,s){const i=o.attributeData.colorFeature;i!=null&&(typeof i=="number"?e.push(["colorFeatureAttribute",new x([i],s,1,!0)]):e.push(["colorFeatureAttribute",new x(i,t,1,!0)]))}function as(o,e,t){o.attributeData.sizeFeature==null&&e.push(["size",new x([o.attributeData.size??1],t,1,!0)])}function ns(o,e,t,s){const i=o.attributeData.sizeFeature;i!=null&&(typeof i=="number"?e.push(["sizeFeatureAttribute",new x([i],s,1,!0)]):e.push(["sizeFeatureAttribute",new x(i,t,1,!0)]))}function ls(o,e){const{attributeData:{position:t,timeStamps:s}}=o;if(!s)return;const i=t.length/3,r=new Array(2*(i-1));let a=0;for(let p=0;p<i-1;p++)r[a++]=p,r[a++]=p+1;e.push(["timeStamps",new x(s,r,K,!0)])}function cs(o,e,t,s){const i=o.attributeData.opacityFeature;i!=null&&(typeof i=="number"?e.push(["opacityFeatureAttribute",new x([i],s,1,!0)]):e.push(["opacityFeatureAttribute",new x(i,t,1,!0)]))}function us(o,{overlayInfo:e},t,s){const i=o.parameters;if(e==null||!ds(i)||i.stipplePattern==null)return;const{renderCoordsHelper:r,spatialReference:a}=e,p=a.isGeographic&&r.viewingMode===1,h=i.worldSized||Zo(i.stipplePattern);if(!h&&!p)return;let n=s;if(p){const d=rt(s.length),c=it(a);for(let C=0;C<d.length;C+=3)Nt(s,C,d,C,c);n=d}const l=s.length/3,v=B(l+1),_=r.viewingMode===1;let w=fs,b=ps,m=0,f=0,g=0;be(w,n[f++],n[f++]),f++,v[0]=0;for(let d=1;d<l+1;++d){d===l&&(f=0);const c=f;be(b,n[f++],n[f++]),f++;const C=(s[g+1]+s[c+1])/2,u=h?Ko(a,_,C):1;m+=Yt(w,b)*u,v[d]=m,[w,b]=[b,w],g=c}t.push(["distanceToStart",new x(v,t[0][1].indices,1,!0)])}function hs(o){const e=o.length;return o[0]===o[e-3]&&o[1]===o[e-2]&&o[2]===o[e-1]}function ds(o){return"stipplePattern"in o}const fs=Me(),ps=Me(),K=4;function ms(o,e){const t=Qo(o.length*K),s=o[0],i=o[o.length-1];for(let r=0;r<o.length;r++)t[r*K]=o[r],t[r*K+1]=s,t[r*K+2]=i,t[r*K+3]=e+.5;return t}function Qe(o,e){const t=o[e],s=o[e+1],i=o[e+2];return Math.sqrt(t*t+s*s+i*i)}function gs(o,e){const t=o[e],s=o[e+1],i=o[e+2],r=1/Math.sqrt(t*t+s*s+i*i);o[e]*=r,o[e+1]*=r,o[e+2]*=r}function Ke(o,e,t){o[e]*=t,o[e+1]*=t,o[e+2]*=t}function vs(o,e,t,s,i,r=e){(i=i||o)[r]=o[e]+t[s],i[r+1]=o[e+1]+t[s+1],i[r+2]=o[e+2]+t[s+2]}function bs(o){o.uniforms.add(new ao("alignPixelEnabled",e=>e.alignPixelEnabled)),o.code.add(S`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),o.code.add(S`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}const ws=.5;function xs(o,e){const t=o.vertex;o.include(lt),o.attributes.add("position","vec3"),o.vertex.inputs.add("position",()=>"position"),o.attributes.add("normal","vec3"),e.hasVertexCenterOffset?o.attributes.add("centerOffset","vec3"):t.constants.add("centerOffset","vec3",[0,0,0]),o.attributes.add("groundDistance","float"),no(t,e),lo(t,e),t.uniforms.add(ct,new ne("polygonOffset",s=>s.shaderPolygonOffset),new Ge("aboveGround",s=>s.camera.aboveGround?1:-1)),e.hasVerticalOffset&&co(t),t.code.add(S`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),t.code.add(S`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = aboveGround;
}
float groundRelative = aboveGround * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),e.draped&&!e.hasVerticalOffset||t.uniforms.add(uo),e.draped||(t.uniforms.add(new Ge("perDistancePixelRatio",s=>Math.tan(s.camera.fovY/2)/(s.camera.fullViewport[2]/2))),t.code.add(S`
      void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
        float distanceToCamera = length(posView);

        // Compute offset in world units for a half pixel shift
        float pixelOffset = distanceToCamera * perDistancePixelRatio * ${S.float(ws)};

        // Apply offset along normal in the direction away from the ground surface
        vec3 modelOffset = normalModel * aboveGround * pixelOffset;

        // Apply the same offset also on the view space position
        vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

        posModel += modelOffset;
        posView += viewOffset;
      }
    `)),e.screenCenterOffsetUnitsEnabled&&ut(t),e.hasScreenSizePerspective&&ht(t),t.code.add(S`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      float pointGroundDistance = groundDistance;
      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?S`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":S`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}const ys=S`vec4(0.0, 0.0, 2.0, 1.0)`;class _t extends Bo{constructor(){super(...arguments),this.effect=0,this.fadeFactor=Qt(1)}}function $s(o){const e=new vt;return e.include(ho),e.outputs.add("fragColor","vec4",0),e.fragment.uniforms.add(new le("colorTexture",t=>t.color),new le("emissionTexture",t=>t.emission),new le("focusArea",t=>t.focusArea),new dt("focusAreaEffectMode",t=>t.effect),new ne("fadeFactor",t=>t.fadeFactor.value)).constants.add("EffectBright","int",0).main.add(`
      float mask = texture(focusArea, uv).r;
      
      if (focusAreaEffectMode == EffectBright) {
        vec4 color = texture(colorTexture, uv);
        float luminance = color.r * 0.25 + color.g * 0.5 + color.b * 0.25;
        fragColor = mask > 0.0 ? color : mix(color, vec4(0.55 * luminance + 0.45), fadeFactor);
      } else {
        if(mask > 0.0) discard;
        fragColor = vec4(vec3(0.0), fadeFactor * 0.67);
      }
  `),o.hasEmissive&&(e.outputs.add("fragEmission","vec4",1),e.fragment.main.add(`
      if (focusAreaEffectMode == EffectBright) {
        vec4 color = texture(emissionTexture, uv);
        float luminance = color.r * 0.25 + color.g * 0.5 + color.b * 0.25;
        fragEmission = mask > 0.0 ? color : mix(color, vec4(0.67 * luminance), fadeFactor);
      } else
        fragEmission = vec4(vec3(0.0), fadeFactor * 0.9);
    `)),e}const As=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaPassParameters:_t,build:$s},Symbol.toStringTag,{value:"Module"}));let we=class extends ft{constructor(){super(...arguments),this.shader=new pt(As,()=>at(()=>import("./RibbonLine.glsl-CfjhuFt_.js").then(o=>o.F),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]))),this.ignoreUnused=!0}initializePipeline(){return bt({colorWrite:wt,blending:Ro})}};we=X([De("esri.views.3d.webgl-engine.effects.focusArea.FocusAreaTechnique")],we);let ae=class extends fo{constructor(o){super({...o,view:o.focusAreasView.view}),this.consumes={required:[he.FOCUSAREA,he.FOCUSAREA_MASK]},this.produces=he.FOCUSAREA,this._fadeDirection=0,this._configuration=new xt,this._passParameters=new _t}fadeOut(o){this.removeAllHandles(),this._startTime=null,this._fadeDirection=1,this.addHandles(Kt(()=>this._passParameters.fadeFactor.value,e=>{e===0&&(this.removeAllHandles(),o())})),this.requestRender(2)}precompile(){this._configuration.hasEmissive=this.bindParameters.emissions!==0,this.techniques.precompile(we,this._configuration)}render(o){const e=this.bindParameters;this._startTime??=this.view.stage?.renderer.renderContext.time;const t=this.view.qualitySettings.fadeDuration,s=t>0?Math.min(t,this.view.stage?.renderer.renderContext.time-this._startTime)/t:1,i=this.renderingContext,r=this.techniques.get(we,this._configuration),a=this.input,p=o.find(({name:w})=>w===he.FOCUSAREA_MASK),h=this.focusAreasView.style==="bright";this._passParameters.color=this._passParameters.emission=i.emptyTexture,this._passParameters.focusArea=p.getTexture(),this._passParameters.effect=Ct[this.focusAreasView.style],this._passParameters.fadeFactor.value=this._fadeDirection===0?s:1-s;const n=e.camera,l=n.fullViewport[2],v=n.fullViewport[3],_=h?this.fboCache.acquire(l,v,this.produces):a;if(h){if(this._passParameters.color=a.getTexture(),this._configuration.hasEmissive){this._passParameters.emission=a.getTexture(Ue);const w=this._passParameters.emission?.descriptor.internalFormat===Xt.RGBA16F?8:5;_.acquireColor(Ue,w,"emissive")}_.moveAttachments(a),i.bindFramebuffer(_.fbo),i.setClearColor(0,0,0,0),i.clear(16384)}else i.bindFramebuffer(_.fbo);return i.bindTechnique(r,e,this._passParameters),i.screen.draw(),s<1&&this.requestRender(2),_}};X([Ce()],ae.prototype,"consumes",void 0),X([Ce()],ae.prototype,"produces",void 0),X([Ce({constructOnly:!0})],ae.prototype,"focusAreasView",void 0),ae=X([De("esri.views.3d.webgl-engine.effects.focusArea.FocusArea")],ae);const Ct={bright:0,dark:1},_s=o=>o?Ct[o]:0;function Cs(o){const e=new vt;e.include(xs,o),e.vertex.include(po,o);const{output:t,hasOcclusionTexture:s,signedDistanceFieldEnabled:i,pixelSnappingEnabled:r,hasEmission:a,hasScreenSizePerspective:p,debugDrawLabelBorder:h,hasVVSize:n,hasVVColor:l,hasRotation:v,occludedFragmentFade:_,sampleSignedDistanceFieldTexelCenter:w,hasVertexColor:b,hasVertexSize:m,hasVertexRotation:f,hasVertexUVi:g}=o;e.include(lt),e.include(mo,o),e.include(go,o),e.include(vo,o);const{vertex:d,fragment:c}=e;c.include(bo),c.code.add(S`
    vec4 applyFocusAreaStyle(vec4 color, int style) {
      const float factor = 0.46;
      const float factorBright = 0.32;

      if (style == ${S.int(0)}) {
        float luma = (color.r + color.g + color.b) / 3.0;
        float bright = luma * (1.0 - 0.6 * factorBright) + 0.6 * factorBright * color.a;
        float brightScaled = bright * factorBright;
        return vec4(brightScaled, brightScaled, brightScaled, color.a * factorBright);
      }

      float darkScaled = factor * factor;
      return vec4(color.rgb * darkScaled, color.a * factor);
    }
  `),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2");const C=t===10;d.uniforms.add(ct,new Se("screenOffset",(y,U)=>be(fe,2*y.screenOffset[0]*U.camera.pixelRatio,2*y.screenOffset[1]*U.camera.pixelRatio)),new Se("anchorPosition",y=>St(y)),new Oe("materialColor",({color:y})=>y),new ne("materialRotation",y=>y.rotation),new Se("materialSize",y=>y.size),new le("tex",y=>y.texture)),ut(d),i&&(d.uniforms.add(new Oe("outlineColor",y=>y.outlineColor)),c.uniforms.add(new Oe("outlineColor",y=>Xe(y)?y.outlineColor:Zt),new ne("outlineSize",y=>Xe(y)?y.outlineSize:0))),r&&d.include(bs),p&&(wo(d),ht(d)),h&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add("uv0","vec2"),g&&e.attributes.add("uvi","vec4"),b&&e.attributes.add("color","vec4"),m&&e.attributes.add("size","vec2"),f&&e.attributes.add("rotation","float"),(n||l)&&e.attributes.add("featureAttribute","vec4"),d.main.add(S`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${ys};
      return;
    }

    vec2 vertexSize = materialSize${E(m," * size")};
    vec2 inputSize;
    ${E(p,S`
        inputSize = screenSizePerspectiveScaleVec2(vertexSize, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,S`
        inputSize = vertexSize;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${E(n,S`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);
  `);const u=S`
  ${E(g,S`
    vec2 texSize = vec2(textureSize(tex, 0));
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0)) / texSize;
    `,S`
    vec2 uv = mix(vec2(0.), vec2(1.), bvec2(uv0));
    `)}

    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${E(v,S`
        float angle = radians(materialRotation${E(f," + rotation")});
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,O=r?i?S`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:S`posProj += quadOffset;
if (inputSize.x == vertexSize.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:S`posProj += quadOffset;`;d.include(xo),d.main.add(S`
    ${u}
    ${l?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":b?"vcolor = color * materialColor;":"vcolor = materialColor;"}

    ${E(t===11,S`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < alphaCutoff;
    ${E(i,"alphaDiscard = alphaDiscard && outlineColor.a < alphaCutoff;")}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${O}
      gl_Position = posProj;
    }

    vtc = uv;

    ${E(h,S`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `);const z=We(t)&&o.hasFocusAreaStyle&&!o.draped;switch(c.uniforms.add(new le("tex",y=>y.texture)),z&&c.uniforms.add(new dt("focusAreaStyle",y=>_s(y.focusAreaStyle))),_&&!C&&(c.include(yo),c.uniforms.add(new Ie("depthMap",y=>y.mainDepth),new ne("occludedOpacity",y=>y.occludedFragmentOpacity?.value??1))),s&&c.uniforms.add(new Ie("texOcclusion",y=>y.hudOcclusion?.attachment)),h?c.main.add(`
        float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));
        // don't discard fragments on debug border
        float textureAlphaCutoff = isBorder > 0.0 ? 0.0 : alphaCutoff;
      `):c.main.add("float textureAlphaCutoff = alphaCutoff;"),c.main.add("vec2 samplePos = vtc;"),w&&c.main.add(S`float txSize = float(textureSize(tex, 0).x);
float texelSize = 1.0 / txSize;
vec2 scaleFactor = (vsize - txSize) * texelSize;
samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`),i?c.main.add(S`
      vec4 fillPixelColor = vcolor;

      // Get distance in output units (i.e. pixels)

      float sdf = texture(tex, samplePos).r;
      float pixelDistance = sdf * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - pixelDistance, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(pixelDistance) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < textureAlphaCutoff ||
          fillPixelColor.a + outlinePixelColor.a < alphaCutoff
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
                              vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${E(!C,S`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < textureAlphaCutoff) {
          discard;
        }

        ${E(!C,S`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `):c.main.add(S`
        vec4 texColor = texture(tex, samplePos, -0.5);
        if (texColor.a < textureAlphaCutoff) {
          discard;
        }
        ${E(!C,S`fragColor = texColor * premultiplyAlpha(vcolor);`)}
      `),_&&!C&&c.main.add(S`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${S.float(1-Os)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `),s&&c.main.add("fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;"),!C&&h&&c.main.add("fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);"),t===2&&c.main.add(S`if (fragColor.a < alphaCutoff) {
discard;
}`),z&&c.main.add(S`fragColor = applyFocusAreaStyle(fragColor, focusAreaStyle);`),We(t)&&a&&c.main.add("fragEmission = vec4(0.0);"),t){case 1:c.main.add(`
        fragColor = vec4(fragColor.rgb * floatBlendOutputScale, fragColor.a);
        fragAlpha = fragColor.a * floatBlendOutputScale;
      `);break;case 2:c.main.add("fragColor.rgb /= fragColor.a;");break;case 11:c.main.add("outputObjectAndLayerIdColor();");break;case 10:e.include($o,o),c.main.add("outputHighlight(false);")}return e}function Xe(o){return o.outlineColor[3]>0&&o.outlineSize>0}function St(o){return o.textureIsSignedDistanceField?Ss(o.anchorPosition,o.distanceFieldBoundingBox,fe):Jt(fe,o.anchorPosition),fe}const fe=Me();function Ss(o,e,t){be(t,o[0]*(e[2]-e[0])+e[0],o[1]*(e[3]-e[1])+e[1])}const Os=.08,zs=Object.freeze(Object.defineProperty({__proto__:null,anchorPosition:St,build:Cs},Symbol.toStringTag,{value:"Module"}));let Je=class extends ft{constructor(o,e){super(o,e,ke(Ps).concat(ke(js(e)))),this.shader=new pt(zs,()=>at(()=>import("./RibbonLine.glsl-CfjhuFt_.js").then(t=>t.H),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]))),this.ignoreUnused=!0,this.primitiveType=eo.TRIANGLE_STRIP}initializePipeline(o){const{draped:e,output:t,depthTestEnabled:s}=o,i=Eo(t),r=s&&!e&&!i&&t!==10;return bt({blending:Co(t,!0),depthTest:s&&!e?{func:515}:null,depthWrite:r?Uo:null,colorWrite:wt,polygonOffset:_o(o)})}};Je=X([De("esri.views.3d.webgl-engine.shaders.HUDMaterialTechnique")],Je);const Ps=gt().vec2u8("uv0",{glNormalized:!0});function js(o){let e=gt().vec3f("position").vec3f("normal").f32("groundDistance");return o.hasVertexCenterOffset&&(e=e.vec3f("centerOffset")),o.hasVertexColor&&(e=e.vec4u8("color",{glNormalized:!0})),o.hasVertexSize&&(e=e.vec2f("size")),o.hasVertexRotation&&(e=e.f32("rotation")),(o.hasVVColor||o.hasVVSize)&&(e=e.vec4f("featureAttribute")),o.hasVertexUVi&&(e=e.vec4i16("uvi")),Ao()?e.vec4u8("olidColor"):e}function Vs(){return Ze??=Ms(),Ze}function Ms(){const t=new x([0,0,0,255,255,0,255,255],[0,1,2,3],2,!0);return new So([["uv0",t]])}let Ze=null;const ze=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],Ds=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],Fs=[0,0,1,0,1,1,0,1],Ts=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Ot=new Array(36);for(let o=0;o<6;o++)for(let e=0;e<6;e++)Ot[6*o+e]=o;const Y=new Array(36);for(let o=0;o<6;o++)Y[6*o]=0,Y[6*o+1]=1,Y[6*o+2]=2,Y[6*o+3]=2,Y[6*o+4]=3,Y[6*o+5]=0;function bi(o,e){Array.isArray(e)||(e=[e,e,e]);const t=new Array(24);for(let s=0;s<8;s++)t[3*s]=ze[s][0]*e[0],t[3*s+1]=ze[s][1]*e[1],t[3*s+2]=ze[s][2]*e[2];return new R(o,[["position",new x(t,Ts,3,!0)],["normal",new x(Ds,Ot,3)],["uv0",new x(Fs,Y,2)]])}const Pe=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],Es=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],Bs=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],Rs=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function wi(o,e){Array.isArray(e)||(e=[e,e,e]);const t=new Array(18);for(let s=0;s<6;s++)t[3*s]=Pe[s][0]*e[0],t[3*s+1]=Pe[s][1]*e[1],t[3*s+2]=Pe[s][2]*e[2];return new R(o,[["position",new x(t,Bs,3,!0)],["normal",new x(Es,Rs,3)]])}const pe=V(-.5,0,-.5),me=V(.5,0,-.5),ge=V(0,0,.5),ve=V(0,.5,0),Z=G(),ee=G(),se=G(),ie=G(),re=G();k(Z,pe,ve),k(ee,pe,me),W(se,Z,ee),F(se,se),k(Z,me,ve),k(ee,me,ge),W(ie,Z,ee),F(ie,ie),k(Z,ge,ve),k(ee,ge,pe),W(re,Z,ee),F(re,re);const je=[pe,me,ge,ve],Us=[0,-1,0,se[0],se[1],se[2],ie[0],ie[1],ie[2],re[0],re[1],re[2]],Hs=[0,1,2,3,1,0,3,2,1,3,0,2],Gs=[0,0,0,1,1,1,2,2,2,3,3,3];function xi(o,e){Array.isArray(e)||(e=[e,e,e]);const t=new Array(12);for(let s=0;s<4;s++)t[3*s]=je[s][0]*e[0],t[3*s+1]=je[s][1]*e[1],t[3*s+2]=je[s][2]*e[2];return new R(o,[["position",new x(t,Hs,3,!0)],["normal",new x(Us,Gs,3)]])}function yi(o,e,t,s,i={uv:!0}){const r=-Math.PI,a=2*Math.PI,p=-Math.PI/2,h=Math.PI,n=Math.max(3,Math.floor(t)),l=Math.max(2,Math.floor(s)),v=(n+1)*(l+1),_=B(3*v),w=B(3*v),b=B(2*v),m=[];let f=0;for(let c=0;c<=l;c++){const C=[],u=c/l,O=p+u*h,z=Math.cos(O);for(let y=0;y<=n;y++){const U=y/n,$=r+U*a,T=Math.cos($)*z,P=Math.sin(O),ue=-Math.sin($)*z;_[3*f]=T*e,_[3*f+1]=P*e,_[3*f+2]=ue*e,w[3*f]=T,w[3*f+1]=P,w[3*f+2]=ue,b[2*f]=U,b[2*f+1]=u,C.push(f),++f}m.push(C)}const g=new Array;for(let c=0;c<l;c++)for(let C=0;C<n;C++){const u=m[c][C],O=m[c][C+1],z=m[c+1][C+1],y=m[c+1][C];c===0?(g.push(u),g.push(z),g.push(y)):c===l-1?(g.push(u),g.push(O),g.push(z)):(g.push(u),g.push(O),g.push(z),g.push(z),g.push(y),g.push(u))}const d=[["position",new x(_,g,3,!0)],["normal",new x(w,g,3,!0)]];return i.uv&&d.push(["uv0",new x(b,g,2,!0)]),i.offset&&(d[0][0]="offset",d.push(["position",new x(Float64Array.from(i.offset),Fe(g.length),3,!0)])),new R(o,d)}function $i(o,e,t,s){const i=Is(e,t);return new R(o,i)}function Is(o,e,t){let s,i;s=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],i=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let h=0;h<s.length;h+=3)Ke(s,h,o/Qe(s,h));let r={};function a(h,n){h>n&&([h,n]=[n,h]);const l=h.toString()+"."+n.toString();if(r[l])return r[l];let v=s.length;return s.length+=3,vs(s,3*h,s,3*n,s,v),Ke(s,v,o/Qe(s,v)),v/=3,r[l]=v,v}for(let h=0;h<e;h++){const n=i.length,l=new Array(4*n);for(let v=0;v<n;v+=3){const _=i[v],w=i[v+1],b=i[v+2],m=a(_,w),f=a(w,b),g=a(b,_),d=4*v;l[d]=_,l[d+1]=m,l[d+2]=g,l[d+3]=w,l[d+4]=f,l[d+5]=m,l[d+6]=b,l[d+7]=g,l[d+8]=f,l[d+9]=m,l[d+10]=f,l[d+11]=g}i=l,r={}}const p=qe(s);for(let h=0;h<p.length;h+=3)gs(p,h);return[["position",new x(qe(s),i,3,!0)],["normal",new x(p,i,3,!0)]]}function Ai(o,{normal:e,position:t,color:s,rotation:i,size:r,centerOffset:a,groundDistance:p,uvi:h,featureAttribute:n,olidColor:l=null}={}){const v=t?He(t):j(),_=e?He(e):to(0,0,1),w=p!=null?[p]:[1],b=Fe(1),m=[["position",new x(v,b,3,!0)],["normal",new x(_,b,3,!0)]],f=r!=null&&r.length===2?r:null;if(f&&m.push(["size",new x(f,b,2)]),i!=null&&m.push(["rotation",new x([i],b,1,!0)]),s){const g=[s[0],s[1],s[2],s.length>3?s[3]:255];m.push(["color",new x(g,b,4,!0)])}if(h&&m.push(["uvi",new x(h,b,h.length)]),a&&m.push(["centerOffset",new x(a,b,3)]),m.push(["groundDistance",new x(w,b,1)]),n){const g=[n[0],n[1],n[2],n[3]];m.push(["featureAttribute",new x(g,b,4)])}return l!=null&&yt(m,l,b),new R(o,m,null,void 0,Vs())}function qs(o,e,t,s,i=!0,r=!0){let a=0;const p=e,h=o;let n=V(0,a,0),l=V(0,a+h,0),v=V(0,-1,0),_=V(0,1,0);s&&(a=h,l=V(0,0,0),n=V(0,a,0),v=V(0,1,0),_=V(0,-1,0));const w=[l,n],b=[v,_],m=t+2,f=Math.sqrt(h*h+p*p);if(s)for(let u=t-1;u>=0;u--){const O=u*(2*Math.PI/t),z=V(Math.cos(O)*p,a,Math.sin(O)*p);w.push(z);const y=V(h*Math.cos(O)/f,-p/f,h*Math.sin(O)/f);b.push(y)}else for(let u=0;u<t;u++){const O=u*(2*Math.PI/t),z=V(Math.cos(O)*p,a,Math.sin(O)*p);w.push(z);const y=V(h*Math.cos(O)/f,p/f,h*Math.sin(O)/f);b.push(y)}const g=new Array,d=new Array;if(i){for(let u=3;u<w.length;u++)g.push(1),g.push(u-1),g.push(u),d.push(0),d.push(0),d.push(0);g.push(w.length-1),g.push(2),g.push(1),d.push(0),d.push(0),d.push(0)}if(r){for(let u=3;u<w.length;u++)g.push(u),g.push(u-1),g.push(0),d.push(u),d.push(u-1),d.push(1);g.push(0),g.push(2),g.push(w.length-1),d.push(1),d.push(2),d.push(b.length-1)}const c=B(3*m);for(let u=0;u<m;u++)c[3*u]=w[u][0],c[3*u+1]=w[u][1],c[3*u+2]=w[u][2];const C=B(3*m);for(let u=0;u<m;u++)C[3*u]=b[u][0],C[3*u+1]=b[u][1],C[3*u+2]=b[u][2];return[["position",new x(c,g,3,!0)],["normal",new x(C,d,3,!0)]]}function _i(o,e,t,s,i,r=!0,a=!0){return new R(o,qs(e,t,s,i,r,a))}function Ci(o,e,t,s,i,r,a){const p=i?Le(i):V(1,0,0),h=r?Le(r):V(0,0,0);a??=!0;const n=G();F(n,p);const l=G();H(l,n,Math.abs(e));const v=G();H(v,l,-.5),D(v,v,h);const _=V(0,1,0);Math.abs(1-nt(n,_))<.2&&ce(_,0,0,1);const w=G();W(w,n,_),F(w,w),W(_,w,n);const b=2*s+(a?2:0),m=s+(a?2:0),f=B(3*b),g=B(3*m),d=B(2*b),c=new Array(3*s*(a?4:2)),C=new Array(3*s*(a?4:2));a&&(f[3*(b-2)]=v[0],f[3*(b-2)+1]=v[1],f[3*(b-2)+2]=v[2],d[2*(b-2)]=0,d[2*(b-2)+1]=0,f[3*(b-1)]=f[3*(b-2)]+l[0],f[3*(b-1)+1]=f[3*(b-2)+1]+l[1],f[3*(b-1)+2]=f[3*(b-2)+2]+l[2],d[2*(b-1)]=1,d[2*(b-1)+1]=1,g[3*(m-2)]=-n[0],g[3*(m-2)+1]=-n[1],g[3*(m-2)+2]=-n[2],g[3*(m-1)]=n[0],g[3*(m-1)+1]=n[1],g[3*(m-1)+2]=n[2]);const u=($,T,P)=>{c[$]=T,C[$]=P};let O=0;const z=G(),y=G();for(let $=0;$<s;$++){const T=$*(2*Math.PI/s);H(z,_,Math.sin(T)),H(y,w,Math.cos(T)),D(z,z,y),g[3*$]=z[0],g[3*$+1]=z[1],g[3*$+2]=z[2],H(z,z,t),D(z,z,v),f[3*$]=z[0],f[3*$+1]=z[1],f[3*$+2]=z[2],d[2*$]=$/s,d[2*$+1]=0,f[3*($+s)]=f[3*$]+l[0],f[3*($+s)+1]=f[3*$+1]+l[1],f[3*($+s)+2]=f[3*$+2]+l[2],d[2*($+s)]=$/s,d[2*$+1]=1;const P=($+1)%s;u(O++,$,$),u(O++,$+s,$),u(O++,P,P),u(O++,P,P),u(O++,$+s,$),u(O++,P+s,P)}if(a){for(let $=0;$<s;$++){const T=($+1)%s;u(O++,b-2,m-2),u(O++,$,m-2),u(O++,T,m-2)}for(let $=0;$<s;$++){const T=($+1)%s;u(O++,$+s,m-1),u(O++,b-1,m-1),u(O++,T+s,m-1)}}const U=[["position",new x(f,c,3,!0)],["normal",new x(g,C,3,!0)],["uv0",new x(d,c,2,!0)]];return new R(o,U)}function Si(o,e,t,s,i,r){s=s||10,i=i==null||i,mt(e.length>1);const a=[[0,0,0]],p=[],h=[];for(let n=0;n<s;n++){p.push([0,-n-1,-(n+1)%s-1]);const l=n/s*2*Math.PI;h.push([Math.cos(l)*t,Math.sin(l)*t])}return ks(o,h,e,a,p,i,r)}function ks(o,e,t,s,i,r,a=V(0,0,0)){const p=e.length,h=B(t.length*p*3+(6*s.length||0)),n=B(t.length*p*3+(s?6:0)),l=new Array,v=new Array;let _=0,w=0;const b=j(),m=j(),f=j(),g=j(),d=j(),c=j(),C=j(),u=j(),O=j(),z=j(),y=j(),U=j(),$=j(),T=jo();ce(O,0,1,0),k(m,t[1],t[0]),F(m,m),r?(D(u,t[0],a),F(f,u)):ce(f,0,0,1),et(m,f,O,O,d,f,tt),Q(g,f),Q(U,d);for(let A=0;A<s.length;A++)H(c,d,s[A][0]),H(u,f,s[A][2]),D(c,c,u),D(c,c,t[0]),h[_++]=c[0],h[_++]=c[1],h[_++]=c[2];n[w++]=-m[0],n[w++]=-m[1],n[w++]=-m[2];for(let A=0;A<i.length;A++)l.push(i[A][0]>0?i[A][0]:-i[A][0]-1+s.length),l.push(i[A][1]>0?i[A][1]:-i[A][1]-1+s.length),l.push(i[A][2]>0?i[A][2]:-i[A][2]-1+s.length),v.push(0),v.push(0),v.push(0);let P=s.length;const ue=s.length-1;for(let A=0;A<t.length;A++){let Te=!1;A>0&&(Q(b,m),A<t.length-1?(k(m,t[A+1],t[A]),F(m,m)):Te=!0,D(z,b,m),F(z,z),D(y,t[A-1],g),Vo(t[A],z,T),Mo(T,Do(y,b),u)?(k(u,u,t[A]),F(f,u),W(d,z,f),F(d,d)):et(z,g,U,O,d,f,tt),Q(g,f),Q(U,d)),r&&(D(u,t[A],a),F($,u));for(let L=0;L<p;L++)if(H(c,d,e[L][0]),H(u,f,e[L][1]),D(c,c,u),F(C,c),n[w++]=C[0],n[w++]=C[1],n[w++]=C[2],D(c,c,t[A]),h[_++]=c[0],h[_++]=c[1],h[_++]=c[2],!Te){const $e=(L+1)%p;l.push(P+L),l.push(P+p+L),l.push(P+$e),l.push(P+$e),l.push(P+p+L),l.push(P+p+$e);for(let Ae=0;Ae<6;Ae++){const jt=l.length-6;v.push(l[jt+Ae]-ue)}}P+=p}const zt=t[t.length-1];for(let A=0;A<s.length;A++)H(c,d,s[A][0]),H(u,f,s[A][1]),D(c,c,u),D(c,c,zt),h[_++]=c[0],h[_++]=c[1],h[_++]=c[2];const xe=w/3;n[w++]=m[0],n[w++]=m[1],n[w++]=m[2];const ye=P-p;for(let A=0;A<i.length;A++)l.push(i[A][0]>=0?P+i[A][0]:-i[A][0]-1+ye),l.push(i[A][2]>=0?P+i[A][2]:-i[A][2]-1+ye),l.push(i[A][1]>=0?P+i[A][1]:-i[A][1]-1+ye),v.push(xe),v.push(xe),v.push(xe);const Pt=[["position",new x(h,l,3,!0)],["normal",new x(n,v,3,!0)]];return new R(o,Pt)}function Oi(o,e,t,s,i){const r=rt(3*e.length),a=new Array(2*(e.length-1));let p=0,h=0;for(let l=0;l<e.length;l++){for(let v=0;v<3;v++)r[p++]=e[l][v];l>0&&(a[h++]=l-1,a[h++]=l)}const n=[["position",new x(r,a,3,!0)]];if(t?.length===e.length&&t[0].length===3){const l=B(3*t.length);let v=0;for(let _=0;_<e.length;_++)for(let w=0;w<3;w++)l[v++]=t[_][w];n.push(["normal",new x(l,a,3,!0)])}if(s&&n.push(["color",new x(s,Po(s.length/4),4)]),i?.length===e.length){const l=ms(i,1);n.push(["timeStamps",new x(l,a,K,!0)])}return new R(o,n,null)}function zi(o,e,t,s,i,r=0){const a=new Array(18),p=[[-t,r,i/2],[s,r,i/2],[0,e+r,i/2],[-t,r,-i/2],[s,r,-i/2],[0,e+r,-i/2]],h=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let n=0;n<6;n++)a[3*n]=p[n][0],a[3*n+1]=p[n][1],a[3*n+2]=p[n][2];return new R(o,[["position",new x(a,h,3,!0)]])}function Pi(o,e){const t=o.getMutableAttribute("position").data;for(let s=0;s<t.length;s+=3){const i=t[s],r=t[s+1],a=t[s+2];ce(te,i,r,a),oe(te,te,e),t[s]=te[0],t[s+1]=te[1],t[s+2]=te[2]}}function ji(o,e=o){const t=o.attributes,s=t.get("position").data,i=t.get("normal").data;if(i){const r=e.getMutableAttribute("normal").data;for(let a=0;a<i.length;a+=3){const p=i[a+1];r[a+1]=-i[a+2],r[a+2]=p}}if(s){const r=e.getMutableAttribute("position").data;for(let a=0;a<s.length;a+=3){const p=s[a+1];r[a+1]=-s[a+2],r[a+2]=p}}}function Ve(o,e,t,s,i){return!(Math.abs(nt(e,o))>i)&&(W(t,o,e),F(t,t),W(s,t,o),F(s,s),!0)}function et(o,e,t,s,i,r,a){return Ve(o,e,i,r,a)||Ve(o,t,i,r,a)||Ve(o,s,i,r,a)}const tt=.99619469809,te=j();export{zi as A,Si as B,mi as C,gi as D,ni as E,Qo as F,et as G,bi as J,Cs as L,ks as M,wi as R,St as V,Ai as a,Zo as b,ws as c,ui as d,Je as e,Ci as f,Ps as g,yi as h,bs as i,ji as j,xs as k,xi as l,yt as m,_t as n,$s as o,li as p,pi as q,xt as r,ys as s,Ho as t,$i as u,js as v,_i as w,vi as x,Oi as y,Pi as z};
//# sourceMappingURL=GeometryUtil-C6qTl5z9.js.map
