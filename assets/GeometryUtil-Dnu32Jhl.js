const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RibbonLine.glsl-DjtBDXKX.js","assets/index-Bp0lGH6M.js","assets/index-C3KAOaxn.css","assets/getEmissions.glsl-89YqLBQv.js","assets/NoParameters-Bo6yVN0t.js","assets/doublePrecisionUtils-BlhV9T5Q.js","assets/OutputColorHighlightOLID.glsl-2Py67pww.js","assets/Indices-DY--6SKN.js","assets/sphere-BlaYOtPZ.js","assets/ray-DUSnwDfh.js","assets/vectorStacks-OMDV8q2t.js","assets/quatf64-DO3BzXFi.js","assets/InterleavedLayout-BSuSNrxd.js","assets/BufferView-BMpgZo-L.js","assets/types-CczN_TGt.js","assets/VertexElementDescriptor-Dwhma2P9.js","assets/VertexAttributeLocations-7_2Jkx2I.js","assets/DrapedZ-CuMlDREO.js","assets/frustumPlanes-BB68xUn8.js","assets/plane-CRRp6Vcs.js","assets/lineSegment-mIfNbc61.js","assets/AlphaCutoff-Cu3Xej3-.js","assets/RenderingContext-AL2Q21sx.js","assets/ProgramCache-CERjxV3k.js","assets/VertexArrayObject-DRGzYIlH.js","assets/VertexBuffer-lFjptVN9.js","assets/projectVectorToVector-LC2zqPru.js","assets/projectPointToVector-B8tArMqf.js","assets/dehydratedPoint-CwDQJT2l.js","assets/orientedBoundingBox-J5hXD1RK.js","assets/quat-DOGJ15ZG.js","assets/computeTranslationToOriginAndRotation-DlcGfCTb.js","assets/mathUtils-BQ6qVWZ8.js","assets/ReceiveShadowsConfiguration-BusuWNP7.js","assets/DDSUtil-BtBSlAL7.js","assets/HUDMaterial-ll4qp99Y.js","assets/TextureBackedBufferLayout-CBnpnvwA.js"])))=>i.map(i=>d[i]);
import{cP as tt,zR as jt,zS as Vt,zT as Dt,fq as le,fp as F,rR as Z,ig as te,dk as Ft,fn as Y,a_ as j,nv as ot,nc as Te,gB as _e,pv as Mt,iC as Tt,na as Et,gA as Ee,pg as Rt,cj as Bt,ck as Ut,lj as Re,er as Ht,a6 as Q,gv as qt,cZ as Gt,mK as it,n3 as It,aN as kt,oq as Lt,mX as at,zU as Wt,p2 as ve,zV as Nt,jO as Ve,c1 as Kt,a9 as De,_ as rt,a7 as Ce,d5 as Yt,zW as Be,qc as Qt,u1 as Zt,vL as Xt,p7 as Jt,hb as Ue,aZ as eo,aY as M,fo as H,aV as st,aW as W,fl as k}from"./index-Bp0lGH6M.js";import{m as to}from"./mathUtils-BQ6qVWZ8.js";import{j as oo}from"./sphere-BlaYOtPZ.js";import{I as io,J as ao,d as B,t as R,K as ro,L as nt,f as so,e as no,M as lt,O as He,P as lo,l as co,Q as ct,R as ut,S as uo,U as ht,w as dt,x as ft,V as ho,W as ue,X as fo,u as po,i as go,k as mo,q as vo,Y as Ae,p as Se,Z as bo,$ as xo,a0 as wo,a1 as qe,a2 as yo,r as $o,B as _o,E as Co,a3 as Ao,a4 as Ge}from"./OutputColorHighlightOLID.glsl-2Py67pww.js";import{a as pt,K as gt,n as Ie}from"./InterleavedLayout-BSuSNrxd.js";import{e as So,i as mt}from"./doublePrecisionUtils-BlhV9T5Q.js";import{p as Oo}from"./Octree-DVIfkxzk.js";import{t as ke,n as V,e as q}from"./vec3f32-CQbcKdo7.js";import{h as Fe,d as zo}from"./Indices-DY--6SKN.js";import{_ as Po,C as jo,P as Vo}from"./plane-CRRp6Vcs.js";import{b as Do}from"./ray-DUSnwDfh.js";import{t as w}from"./orientedBoundingBox-J5hXD1RK.js";import{r as Fo,i as Mo,e as A,t as se,b as ne,a as E,u as Le,s as To}from"./getEmissions.glsl-89YqLBQv.js";import{t as Eo}from"./NoParameters-Bo6yVN0t.js";import{T as vt,o as Ro,g as bt,h as Bo}from"./RenderingContext-AL2Q21sx.js";function Uo(t){return Ho.has(t)}const Ho=new Set("position.normal.normalCompressed.uv0.size.rotation.offset.perspectiveDivide.centerOffset.groundDistance.previousDelta.lineParameters.sizeFeatureAttribute.profileRight.profileUp.pathVertexInfo.profileRotation.pathRotationUp.pathMaxStretchDistance.featureAttribute.position.size.sizeFeatureAttribute.profileRight.profileUp.profileRotation.pathRotationUp.pathMaxStretchDistance".split("."));let We=class{constructor(){this.box=tt(),this.sphere=new oo}};function qo(t,e,o){let i=jt(e,Io),a=Vt(e,ko);if(Dt(o)){let r=le(Go,o[12],o[13],o[14]);F(G,i,r),F(I,a,r),Z(t,G),Z(t,I);return}if(te(G,i,o),Z(t,G),!Ft(i,a)){te(I,a,o),Z(t,I);for(let r=0;r<3;++r)Y(G,i),Y(I,a),G[r]=a[r],I[r]=i[r],te(G,G,o),te(I,I,o),Z(t,G),Z(t,I)}}const Go=j(),G=j(),I=j(),Io=j(),ko=j();function Lo(t,e){return t??=[],t.push(e),t}function Wo(t,e){if(t==null)return null;let o=t.filter(i=>i!==e);return o.length===0?null:o}function sa(t,e,o,i,a){he[0]=t.get(e,0),he[1]=t.get(e,1),he[2]=t.get(e,2),So(he,N,3),o.set(a,0,N[0]),i.set(a,0,N[1]),o.set(a,1,N[2]),i.set(a,1,N[3]),o.set(a,2,N[4]),i.set(a,2,N[5])}const he=j(),N=new Float32Array(6);let na=class{constructor(e={}){this.id=ot(),this.type=0,this._highlightIds=new Set,this._shaderTransformation=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerViewUid=e.layerViewUid,e.isElevationSource&&(this.lastValidElevationBB=tt()),this._geometries=e.geometries?Array.from(e.geometries):[]}dispose(){this._geometries.length=0}get layer(){return this._layer}set layer(e){pt(this._layer==null||e==null,"Object3D can only be added to a single Layer"),this._layer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e);for(let o of this._highlightIds)e.addHighlight(o);this._emit("geometryAdded",{object:this,geometry:e}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}removeGeometry(e){let o=this._geometries.splice(e,1)[0];if(o){for(let i of this._highlightIds)o.removeHighlight(i);this._emit("geometryRemoved",{object:this,geometry:o}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,o,i=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:o,sync:i}),Uo(o)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(let o of this._geometries)o.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){let e=new io;for(let o of this._geometries)o.occludees=Lo(o.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(let o of this._geometries)o.occludees=Wo(o.occludees,e);this._emit("occlusionChanged",this)}highlight(e){let o=new ao(e);for(let i of this._geometries)i.addHighlight(o);return this._emit("highlightChanged",this),this._highlightIds.add(o),o}removeHighlight(e){this._highlightIds.delete(e);for(let o of this._geometries)o.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===0?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,o){return Te(o,this.transformation,e.transformation)}getCombinedShaderTransformation(e,o=_e()){return Te(o,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=new We,this._validateBoundingVolume(this._bvWorldSpace,0)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=new We,this._validateBoundingVolume(this._bvObjectSpace,1)),this._bvObjectSpace}_validateBoundingVolume(e,o){let i=o===1;for(let a of this._geometries){let r=a.boundingInfo;r&&qo(e.box,r.box,i?a.transformation:this.getCombinedShaderTransformation(a))}Mt(e.box,e.sphere.center);for(let a of this._geometries){let r=a.boundingInfo;if(r==null)continue;let s=i?a.transformation:this.getCombinedShaderTransformation(a),p=to(s);te(Ne,r.sphere.center,s);let h=Tt(Ne,e.sphere.center),n=r.sphere.radius*p;e.sphere.radius=Math.max(e.sphere.radius,h+n)}}_invalidateBoundingVolume(){let e=this._bvWorldSpace?.sphere;this._bvObjectSpace=this._bvWorldSpace=void 0,this.layer&&e&&this.layer.notifyObjectBBChanged(this,e)}_emit(e,o){this.layer?.events.emit(e,o)}get geometries(){return this._geometries}get transformation(){return this._transformation??Et}set transformation(e){this._transformation=Ee(this._transformation??_e(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?Ee(this._shaderTransformation??_e(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}get test(){}};const Ne=j(),No=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];let ca=class{constructor(e,o,i=""){this.stage=e,this.apiLayerViewUid=i,this.id=ot(),this.events=new Rt,this.visible=!0,this.sliceable=!1,this._objectsAdded=[],this._handles=new Bt,this._objects=new Map,this._pickable=!0,this.visible=o?.visible??!0,this._pickable=o?.pickable??!0,this.updatePolicy=o?.updatePolicy??0,e.addLayer(this);for(let a of No)this._handles.add(this.events.on(a,r=>e.handleEvent(a,r)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.removeLayer(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}getObject(e){return Ut(this._objects.get(e))}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.set(e.id,e),e.layer=this,this.events.emit("layerObjectAdded",e),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.delete(e.id)&&(this.events.emit("layerObjectRemoved",e),e.layer=null,this._octree!=null&&(Re(this._objectsAdded,e)||this._octree.remove([e])))}addMany(e){for(let o of e)this._objects.set(o.id,o),o.layer=this;this.events.emit("layerObjectsAdded",e),this._octree!=null&&this._objectsAdded.push(...e)}removeMany(e){let o=[];for(let i of e)this._objects.delete(i.id)&&o.push(i);if(o.length!==0&&(this.events.emit("layerObjectsRemoved",o),o.forEach(i=>i.layer=null),this._octree!=null)){for(let i=0;i<o.length;)Re(this._objectsAdded,o[i])?(o[i]=o[o.length-1],--o.length):++i;this._octree.remove(o)}}commit(){this.stage.commitLayer(this)}sync(){this.updatePolicy!==1&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,o){this._octree!=null&&!this._objectsAdded.includes(e)&&this._octree.update(e,o)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.size>50?(this._octree=new Oo(e=>e.boundingVolumeWorldSpace.sphere),this._octree.add(this._objects.values())):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded),this._objectsAdded.length=0),this._octree}invalidateSpatialQueryAccelerator(){this._octree=Ht(this._octree),this._objectsAdded.length=0}get test(){}},xt=class extends Fo{constructor(){super(...arguments),this.hasEmissive=!1}};Q([Mo()],xt.prototype,"hasEmissive",void 0);function wt(t,e,o){t.push(["olidColor",new w(e,o,4,!0)])}function Ko(t,e=!1){return t<=qt?e?Array(t).fill(0):Array(t):new Float16Array(t)}function Yo(t,e,o){let i=t.isGeographic&&e,{metersPerUnit:a}=t,r=0;return i?(a=1,r=Gt(o)):t.isGeographic?a=it(t).metersPerDegree:t.isWebMercator&&(r=It(o)),a*Math.max(.2,Math.cos(r))}const D={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},Qo={dash:D.dash,"dash-dot":[...D.dash,...D.dot],dot:D.dot,"long-dash":D["long-dash"],"long-dash-dot":[...D["long-dash"],...D.dot],"long-dash-dot-dot":[...D["long-dash"],...D.dot,...D.dot],none:null,"short-dash":D["short-dash"],"short-dash-dot":[...D["short-dash"],...D["short-dot"]],"short-dash-dot-dot":[...D["short-dash"],...D["short-dot"],...D["short-dot"]],"short-dot":D["short-dot"],solid:null};let Zo=class{constructor(e,o,i){this.image=e,this.width=o,this.length=i,this.uuid=kt()}};function Xo(t){return t!=null&&"image"in t}function yt(t,e){return t==null?t:{pattern:t.slice(),pixelRatio:e}}function fa(t){return{pattern:[t,t],pixelRatio:2}}function pa(t){switch(t?.type){case"style":return Jo(t.style);case"template":return ei(t.normalizedDashTemplate);case"image":return new Zo(t.image,t.width,t.length);case void 0:case null:return null}return null}function Jo(t){return t==null?null:yt(Qo[t],8)}function ei({dashTemplate:t,hidesLine:e}){return yt(e||t.length===0?null:t,8)}function ga(t){switch(t?.type){case"style":return t.style==="none";case"template":return t.normalizedDashTemplate.hidesLine;case"image":case void 0:case null:return!1}return!1}function ma(t,e,o=null){let i=[],a=e.mapPositions,r=ti(e,i),s=r.data,p=r.indices.length,h=Fe(p);return oi(e,i,h),ri(e,i,h),ii(e,i,h),ai(e,i,r.indices,h),si(e,i,r.indices,h),ni(e,i),li(e,i,r.indices,h),ci(t,e,i,s),o!=null&&wt(i,o,h),new B(t,i,a)}function ti(t,e){let{attributeData:{position:o},removeDuplicateStartEnd:i}=t,a=o.length/3,r=a>2&&ui(o)&&i,s=a-+!!r,p=Array(2*(s-1)),h=r?o.slice(0,-3):o,n=0;for(let v=0;v<s-1;v++)p[n++]=v,p[n++]=v+1;let l=new w(h,p,3,r);return e.push(["position",l]),l}function oi(t,e,o){if(t.attributeData.colorFeature!=null)return;let i=t.attributeData.color;e.push(["color",new w(i??Lt,o,4)])}function ii(t,e,o){t.attributeData.normal&&e.push(["normal",new w(t.attributeData.normal,o,3)])}function ai(t,e,o,i){let a=t.attributeData.colorFeature;a!=null&&(typeof a=="number"?e.push(["colorFeatureAttribute",new w([a],i,1,!0)]):e.push(["colorFeatureAttribute",new w(a,o,1,!0)]))}function ri(t,e,o){t.attributeData.sizeFeature??e.push(["size",new w([t.attributeData.size??1],o,1,!0)])}function si(t,e,o,i){let a=t.attributeData.sizeFeature;a!=null&&(typeof a=="number"?e.push(["sizeFeatureAttribute",new w([a],i,1,!0)]):e.push(["sizeFeatureAttribute",new w(a,o,1,!0)]))}function ni(t,e){let{attributeData:{position:o,timeStamps:i}}=t;if(!i)return;let a=o.length/3,r=Array(2*(a-1)),s=0;for(let p=0;p<a-1;p++)r[s++]=p,r[s++]=p+1;e.push(["timeStamps",new w(i,r,$t,!0)])}function li(t,e,o,i){let a=t.attributeData.opacityFeature;a!=null&&(typeof a=="number"?e.push(["opacityFeatureAttribute",new w([a],i,1,!0)]):e.push(["opacityFeatureAttribute",new w(a,o,1,!0)]))}function ci(t,{overlayInfo:e},o,i){let a=t.parameters;if(e==null||!hi(a)||a.stipplePattern==null)return;let{renderCoordsHelper:r,spatialReference:s}=e,p=s.isGeographic&&r.viewingMode===1,h=a.worldSized||Xo(a.stipplePattern);if(!h&&!p)return;let n=i;if(p){let d=at(i.length),c=it(s);for(let S=0;S<d.length;S+=3)Wt(i,S,d,S,c);n=d}let l=i.length/3,v=R(l+1),C=r.viewingMode===1,x=di,b=fi,g=0,f=0,m=0;ve(x,n[f++],n[f++]),f++,v[0]=0;for(let d=1;d<l+1;++d){d===l&&(f=0);let c=f;ve(b,n[f++],n[f++]),f++;let S=(i[m+1]+i[c+1])/2,u=h?Yo(s,C,S):1;g+=Nt(x,b)*u,v[d]=g,[x,b]=[b,x],m=c}o.push(["distanceToStart",new w(v,o[0][1].indices,1,!0)])}function ui(t){let e=t.length;return t[0]===t[e-3]&&t[1]===t[e-2]&&t[2]===t[e-1]}function hi(t){return"stipplePattern"in t}const di=Ve(),fi=Ve(),$t=4;function pi(t,e){let o=Ko(t.length*4),i=t[0],a=t[t.length-1];for(let r=0;r<t.length;r++)o[r*4]=t[r],o[r*4+1]=i,o[r*4+2]=a,o[r*4+3]=e+.5;return o}function Ke(t,e){let o=t[e],i=t[e+1],a=t[e+2];return Math.sqrt(o*o+i*i+a*a)}function gi(t,e){let o=t[e],i=t[e+1],a=t[e+2],r=1/Math.sqrt(o*o+i*i+a*a);t[e]*=r,t[e+1]*=r,t[e+2]*=r}function Ye(t,e,o){t[e]*=o,t[e+1]*=o,t[e+2]*=o}function mi(t,e,o,i,a,r=e){a||=t,a[r]=t[e]+o[i],a[r+1]=t[e+1]+o[i+1],a[r+2]=t[e+2]+o[i+2]}function vi(t){t.uniforms.add(new ro("alignPixelEnabled",e=>e.alignPixelEnabled)),t.code.add(A`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),t.code.add(A`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}const bi=.5;function xi(t,e){let o=t.vertex;t.include(nt),t.attributes.add("position","vec3"),t.vertex.inputs.add("position",()=>"position"),t.attributes.add("normal","vec3"),e.hasVertexCenterOffset?t.attributes.add("centerOffset","vec3"):o.constants.add("centerOffset","vec3",[0,0,0]),t.attributes.add("groundDistance","float"),so(o,e),no(o,e),o.uniforms.add(lt,new se("polygonOffset",i=>i.shaderPolygonOffset),new He("aboveGround",i=>i.camera.aboveGround?1:-1)),e.hasVerticalOffset&&lo(o),o.code.add(A`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),o.code.add(A`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
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
}`),(!e.draped||e.hasVerticalOffset)&&o.uniforms.add(co),e.draped||(o.uniforms.add(new He("hudPixelSizePerDistance",i=>Math.tan(i.camera.fovY/2)/(i.camera.fullViewport[2]/2))),o.code.add(A`
      void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
        float distanceToCamera = length(posView);

        // Compute offset in world units for a half pixel shift
        float pixelOffset = distanceToCamera * hudPixelSizePerDistance * ${A.float(bi)};

        // Apply offset along normal in the direction away from the ground surface
        vec3 modelOffset = normalModel * aboveGround * pixelOffset;

        // Apply the same offset also on the view space position
        vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

        posModel += modelOffset;
        posView += viewOffset;
      }
    `)),e.screenCenterOffsetUnitsEnabled&&ct(o),e.hasScreenSizePerspective&&ut(o),o.code.add(A`
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

      ${e.hasVerticalOffset?A`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":A`
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
  `)}const wi=A`vec4(0.0, 0.0, 2.0, 1.0)`;let _t=class extends Eo{constructor(){super(...arguments),this.effect=0,this.fadeFactor=Kt(1)}};function yi(t){let e=new mt;return e.include(uo),e.outputs.add("fragColor","vec4",0),e.fragment.uniforms.add(new ne("colorTexture",o=>o.color),new ne("emissionTexture",o=>o.emission),new ne("focusArea",o=>o.focusArea),new ht("focusAreaEffectMode",o=>o.effect),new se("fadeFactor",o=>o.fadeFactor.value)).constants.add("EffectBright","int",0).code.add("float getLuminance(in vec4 color) { return color.r * 0.25 + color.g * 0.5 + color.b * 0.25; }").main.add(`
      float mask = texture(focusArea, uv).r;
      
      if (focusAreaEffectMode == EffectBright) {
        vec4 color = texture(colorTexture, uv);
        float luminance = getLuminance(color);
        fragColor = mask > 0.0 ? color : mix(color, vec4(0.55 * luminance + 0.45), fadeFactor);
      } else {
        if(mask > 0.0) discard;
        fragColor = vec4(vec3(0.0), fadeFactor * 0.67);
      }
  `),t.hasEmissive&&(e.outputs.add("fragEmission","vec4",1),e.fragment.main.add(A`if (focusAreaEffectMode == EffectBright) {
vec4 color = texture(emissionTexture, uv);
float luminance = getLuminance(color);
fragEmission = mask > 0.0 ? color : mix(color, vec4(0.67 * luminance), fadeFactor);
} else
fragEmission = vec4(vec3(0.0), fadeFactor * 0.9);`)),e}const $i=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaPassParameters:_t,build:yi},Symbol.toStringTag,{value:"Module"}));let be=class extends dt{constructor(){super(...arguments),this.shader=new ft($i,()=>rt(()=>import("./RibbonLine.glsl-DjtBDXKX.js").then(t=>t.F),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]))),this.ignoreUnused=!0}initializePipeline(){return vt({colorWrite:bt,blending:Ro})}};be=Q([De("esri.views.3d.webgl-engine.effects.focusArea.FocusAreaTechnique")],be);let re=class extends ho{constructor(t){super({...t,view:t.focusAreasView.view}),this.consumes={required:[ue.FOCUSAREA,ue.FOCUSAREA_MASK]},this.produces=ue.FOCUSAREA,this._fadeDirection=0,this._configuration=new xt,this._passParameters=new _t}fadeOut(t){this.removeAllHandles(),this._startTime=null,this._fadeDirection=1,this.addHandles(Yt(()=>this._passParameters.fadeFactor.value,e=>{e===0&&(this.removeAllHandles(),t())})),this.requestRender(2)}precompile(){this._configuration.hasEmissive=this.bindParameters.emissions!==0,this.techniques.precompile(be,this._configuration)}render(t){let e=this.bindParameters;this._startTime??=this.view.stage?.renderer.renderContext.time;let o=this.view.qualitySettings.fadeDuration,i=o>0?Math.min(o,this.view.stage?.renderer.renderContext.time-this._startTime)/o:1,a=this.renderingContext,r=this.techniques.get(be,this._configuration),s=this.input,p=t.find(({name:x})=>x===ue.FOCUSAREA_MASK),h=this.focusAreasView.style==="bright";this._passParameters.color=this._passParameters.emission=a.emptyTexture,this._passParameters.focusArea=p.getTexture(),this._passParameters.effect=Ct[this.focusAreasView.style],this._passParameters.fadeFactor.value=this._fadeDirection===0?i:1-i;let n=e.camera,l=n.fullViewport[2],v=n.fullViewport[3],C=h?this.fboCache.acquire(l,v,this.produces):s;if(h){if(this._passParameters.color=s.getTexture(),this._configuration.hasEmissive){this._passParameters.emission=s.getTexture(Be);let x=this._passParameters.emission?.descriptor.internalFormat===Qt.RGBA16F?8:5;C.acquireColor(Be,x,"emissive")}C.moveAttachments(s),a.bindFramebuffer(C.fbo),a.setClearColor(0,0,0,0),a.clear(16384)}else a.bindFramebuffer(C.fbo);return a.bindTechnique(r,e,this._passParameters),a.screen.draw(),i<1&&this.requestRender(2),C}};Q([Ce()],re.prototype,"consumes",void 0),Q([Ce()],re.prototype,"produces",void 0),Q([Ce({constructOnly:!0})],re.prototype,"focusAreasView",void 0),re=Q([De("esri.views.3d.webgl-engine.effects.focusArea.FocusArea")],re);const Ct={bright:0,dark:1},_i=t=>t?Ct[t]:0;function Ci(t){let e=new mt;e.include(xi,t),e.vertex.include(fo,t);let{output:o,hasOcclusionTexture:i,signedDistanceFieldEnabled:a,pixelSnappingEnabled:r,hasEmission:s,hasScreenSizePerspective:p,debugDrawLabelBorder:h,hasVVSize:n,hasVVColor:l,hasRotation:v,occludedFragmentFade:C,sampleSignedDistanceFieldTexelCenter:x,hasVertexColor:b,hasVertexSize:g,hasVertexRotation:f,hasVertexUVi:m}=t;e.include(nt),e.include(po,t),e.include(go,t),e.include(mo,t);let{vertex:d,fragment:c}=e;c.include(vo),c.code.add(A`
    vec4 applyFocusAreaStyle(vec4 color, int style) {
      const float factor = 0.46;
      const float factorBright = 0.32;

      if (style == ${A.int(0)}) {
        float luma = (color.r + color.g + color.b) / 3.0;
        float bright = luma * (1.0 - 0.6 * factorBright) + 0.6 * factorBright * color.a;
        float brightScaled = bright * factorBright;
        return vec4(brightScaled, brightScaled, brightScaled, color.a * factorBright);
      }

      float darkScaled = factor * factor;
      return vec4(color.rgb * darkScaled, color.a * factor);
    }
  `),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2");let S=o===10;d.uniforms.add(lt,new Ae("screenOffset",(y,U)=>ve(de,y.screenOffset[0]*2*U.camera.pixelRatio,y.screenOffset[1]*2*U.camera.pixelRatio)),new Ae("anchorPosition",y=>At(y)),new Se("materialColor",({color:y})=>y),new se("materialRotation",y=>y.rotation),new Ae("materialSize",y=>y.size),new ne("tex",y=>y.texture)),ct(d),a&&(d.uniforms.add(new Se("outlineColor",y=>y.outlineColor)),c.uniforms.add(new Se("outlineColor",y=>Qe(y)?y.outlineColor:Xt),new se("outlineSize",y=>Qe(y)?y.outlineSize:0))),r&&d.include(vi),p&&(bo(d),ut(d)),h&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add("uv0","vec2"),m&&e.attributes.add("uvi","vec4"),b&&e.attributes.add("color","vec4"),g&&e.attributes.add("size","vec2"),f&&e.attributes.add("rotation","float"),(n||l)&&e.attributes.add("featureAttribute","vec4"),d.main.add(A`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${wi};
      return;
    }

    vec2 vertexSize = materialSize${E(g," * size")};
    vec2 inputSize;
    ${E(p,A`
        inputSize = screenSizePerspectiveScaleVec2(vertexSize, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,A`
        inputSize = vertexSize;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${E(n,A`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);
  `);let u=A`
  ${E(m,A`
    vec2 texSize = vec2(textureSize(tex, 0));
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0)) / texSize;
    `,A`
    vec2 uv = mix(vec2(0.), vec2(1.), bvec2(uv0));
    `)}

    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${E(v,A`
        float angle = radians(materialRotation${E(f," + rotation")});
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,O=r?a?A`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:A`posProj += quadOffset;
if (inputSize.x == vertexSize.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:A`posProj += quadOffset;`;d.include(xo),d.main.add(A`
    ${u}
    ${l?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":b?"vcolor = color * materialColor;":"vcolor = materialColor;"}

    ${E(o===11,A`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < alphaCutoff;
    ${E(a,"alphaDiscard = alphaDiscard && outlineColor.a < alphaCutoff;")}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${O}
      gl_Position = posProj;
    }

    vtc = uv;

    ${E(h,A`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `);let z=Le(o)&&t.hasFocusAreaStyle&&!t.draped;switch(c.uniforms.add(new ne("tex",y=>y.texture)),z&&c.uniforms.add(new ht("focusAreaStyle",y=>_i(y.focusAreaStyle))),C&&!S&&(c.include(wo),c.uniforms.add(new qe("depthMap",y=>y.mainDepth),new se("occludedOpacity",y=>y.occludedFragmentOpacity?.value??1))),i&&c.uniforms.add(new qe("texOcclusion",y=>y.hudOcclusion?.attachment)),h?c.main.add(`
        float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));
        // don't discard fragments on debug border
        float textureAlphaCutoff = isBorder > 0.0 ? 0.0 : alphaCutoff;
      `):c.main.add("float textureAlphaCutoff = alphaCutoff;"),c.main.add("vec2 samplePos = vtc;"),x&&c.main.add(A`float txSize = float(textureSize(tex, 0).x);
float texelSize = 1.0 / txSize;
vec2 scaleFactor = (vsize - txSize) * texelSize;
samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`),a?c.main.add(A`
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

        ${E(!S,A`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < textureAlphaCutoff) {
          discard;
        }

        ${E(!S,A`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `):c.main.add(A`
        vec4 texColor = texture(tex, samplePos, -0.5);
        if (texColor.a < textureAlphaCutoff) {
          discard;
        }
        ${E(!S,A`fragColor = texColor * premultiplyAlpha(vcolor);`)}
      `),C&&!S&&c.main.add(A`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${A.float(1-Si)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `),i&&c.main.add("fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;"),!S&&h&&c.main.add("fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);"),o===2&&c.main.add(A`if (fragColor.a < alphaCutoff) {
discard;
}`),z&&c.main.add(A`fragColor = applyFocusAreaStyle(fragColor, focusAreaStyle);`),Le(o)&&s&&c.main.add("fragEmission = vec4(0.0);"),o){case 1:c.main.add(`
        fragColor = vec4(fragColor.rgb * floatBlendOutputScale, fragColor.a);
        fragAlpha = fragColor.a * floatBlendOutputScale;
      `);break;case 2:c.main.add("fragColor.rgb /= fragColor.a;");break;case 11:c.main.add("outputObjectAndLayerIdColor();");break;case 10:e.include(yo,t),c.main.add("outputHighlight(false);")}return e}function Qe(t){return t.outlineColor[3]>0&&t.outlineSize>0}function At(t){return t.textureIsSignedDistanceField?Ai(t.anchorPosition,t.distanceFieldBoundingBox,de):Zt(de,t.anchorPosition),de}const de=Ve();function Ai(t,e,o){ve(o,t[0]*(e[2]-e[0])+e[0],t[1]*(e[3]-e[1])+e[1])}const Si=.08,Oi=Object.freeze(Object.defineProperty({__proto__:null,anchorPosition:At,build:Ci},Symbol.toStringTag,{value:"Module"}));let Ze=class extends dt{constructor(t,e){super(t,e,Ie(zi).concat(Ie(Pi(e)))),this.shader=new ft(Oi,()=>rt(()=>import("./RibbonLine.glsl-DjtBDXKX.js").then(o=>o.H),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]))),this.ignoreUnused=!0,this.primitiveType=Jt.TRIANGLE_STRIP}initializePipeline(t){let{draped:e,output:o,depthTestEnabled:i}=t,a=To(o),r=i&&!e&&!a&&o!==10;return vt({blending:Co(o,!0),depthTest:i&&!e?{func:515}:null,depthWrite:r?Bo:null,colorWrite:bt,polygonOffset:_o(t)})}};Ze=Q([De("esri.views.3d.webgl-engine.shaders.HUDMaterialTechnique")],Ze);const zi=gt().vec2u8("uv0",{glNormalized:!0});function Pi(t){let e=gt().vec3f("position").vec3f("normal").f32("groundDistance");return t.hasVertexCenterOffset&&(e=e.vec3f("centerOffset")),t.hasVertexColor&&(e=e.vec4u8("color",{glNormalized:!0})),t.hasVertexSize&&(e=e.vec2f("size")),t.hasVertexRotation&&(e=e.f32("rotation")),(t.hasVVColor||t.hasVVSize)&&(e=e.vec4f("featureAttribute")),t.hasVertexUVi&&(e=e.vec4i16("uvi")),$o()?e.vec4u8("olidColor"):e}function ji(){return Xe??=Vi(),Xe}function Vi(){let t=new w([0,0,0,255,255,0,255,255],[0,1,2,3],2,!0);return new Ao([["uv0",t]])}let Xe=null;const Oe=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],Di=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],Fi=[0,0,1,0,1,1,0,1],Mi=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],St=Array(36);for(let t=0;t<6;t++)for(let e=0;e<6;e++)St[t*6+e]=t;const K=Array(36);for(let t=0;t<6;t++)K[t*6]=0,K[t*6+1]=1,K[t*6+2]=2,K[t*6+3]=2,K[t*6+4]=3,K[t*6+5]=0;function ba(t,e){Array.isArray(e)||(e=[e,e,e]);let o=Array(24);for(let i=0;i<8;i++)o[i*3]=Oe[i][0]*e[0],o[i*3+1]=Oe[i][1]*e[1],o[i*3+2]=Oe[i][2]*e[2];return new B(t,[["position",new w(o,Mi,3,!0)],["normal",new w(Di,St,3)],["uv0",new w(Fi,K,2)]])}const ze=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],Ti=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],Ei=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],Ri=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function xa(t,e){Array.isArray(e)||(e=[e,e,e]);let o=Array(18);for(let i=0;i<6;i++)o[i*3]=ze[i][0]*e[0],o[i*3+1]=ze[i][1]*e[1],o[i*3+2]=ze[i][2]*e[2];return new B(t,[["position",new w(o,Ei,3,!0)],["normal",new w(Ti,Ri,3)]])}const fe=V(-.5,0,-.5),pe=V(.5,0,-.5),ge=V(0,0,.5),me=V(0,.5,0),X=q(),J=q(),oe=q(),ie=q(),ae=q();k(X,fe,me),k(J,fe,pe),W(oe,X,J),M(oe,oe),k(X,pe,me),k(J,pe,ge),W(ie,X,J),M(ie,ie),k(X,ge,me),k(J,ge,fe),W(ae,X,J),M(ae,ae);const Pe=[fe,pe,ge,me],Bi=[0,-1,0,oe[0],oe[1],oe[2],ie[0],ie[1],ie[2],ae[0],ae[1],ae[2]],Ui=[0,1,2,3,1,0,3,2,1,3,0,2],Hi=[0,0,0,1,1,1,2,2,2,3,3,3];function wa(t,e){Array.isArray(e)||(e=[e,e,e]);let o=Array(12);for(let i=0;i<4;i++)o[i*3]=Pe[i][0]*e[0],o[i*3+1]=Pe[i][1]*e[1],o[i*3+2]=Pe[i][2]*e[2];return new B(t,[["position",new w(o,Ui,3,!0)],["normal",new w(Bi,Hi,3)]])}function ya(t,e,o,i,a={uv:!0}){let r=-Math.PI,s=Math.PI*2,p=-Math.PI/2,h=Math.PI,n=Math.max(3,Math.floor(o)),l=Math.max(2,Math.floor(i)),v=(n+1)*(l+1),C=R(v*3),x=R(v*3),b=R(v*2),g=[],f=0;for(let c=0;c<=l;c++){let S=[],u=c/l,O=p+u*h,z=Math.cos(O);for(let y=0;y<=n;y++){let U=y/n,$=r+U*s,T=Math.cos($)*z,P=Math.sin(O),ce=-Math.sin($)*z;C[3*f]=T*e,C[3*f+1]=P*e,C[3*f+2]=ce*e,x[3*f]=T,x[3*f+1]=P,x[3*f+2]=ce,b[2*f]=U,b[2*f+1]=u,S.push(f),++f}g.push(S)}let m=[];for(let c=0;c<l;c++)for(let S=0;S<n;S++){let u=g[c][S],O=g[c][S+1],z=g[c+1][S+1],y=g[c+1][S];c===0?(m.push(u),m.push(z),m.push(y)):c===l-1?(m.push(u),m.push(O),m.push(z)):(m.push(u),m.push(O),m.push(z),m.push(z),m.push(y),m.push(u))}let d=[["position",new w(C,m,3,!0)],["normal",new w(x,m,3,!0)]];return a.uv&&d.push(["uv0",new w(b,m,2,!0)]),a.offset&&(d[0][0]="offset",d.push(["position",new w(Float64Array.from(a.offset),Fe(m.length),3,!0)])),new B(t,d)}function $a(t,e,o,i){let a=qi(e,o);return new B(t,a)}function qi(t,e,o){let i,a;i=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],a=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let h=0;h<i.length;h+=3)Ye(i,h,t/Ke(i,h));let r={};function s(h,n){h>n&&([h,n]=[n,h]);let l=h.toString()+"."+n.toString();if(r[l])return r[l];let v=i.length;return i.length+=3,mi(i,h*3,i,n*3,i,v),Ye(i,v,t/Ke(i,v)),v/=3,r[l]=v,v}for(let h=0;h<e;h++){let n=a.length,l=Array(n*4);for(let v=0;v<n;v+=3){let C=a[v],x=a[v+1],b=a[v+2],g=s(C,x),f=s(x,b),m=s(b,C),d=v*4;l[d]=C,l[d+1]=g,l[d+2]=m,l[d+3]=x,l[d+4]=f,l[d+5]=g,l[d+6]=b,l[d+7]=m,l[d+8]=f,l[d+9]=g,l[d+10]=f,l[d+11]=m}a=l,r={}}let p=Ge(i);for(let h=0;h<p.length;h+=3)gi(p,h);return[["position",new w(Ge(i),a,3,!0)],["normal",new w(p,a,3,!0)]]}function _a(t,{normal:e,position:o,color:i,rotation:a,size:r,centerOffset:s,groundDistance:p,uvi:h,featureAttribute:n,olidColor:l=null}={}){let v=o?Ue(o):j(),C=e?Ue(e):eo(0,0,1),x=p==null?[1]:[p],b=Fe(1),g=[["position",new w(v,b,3,!0)],["normal",new w(C,b,3,!0)]],f=r!=null&&r.length===2?r:null;if(f&&g.push(["size",new w(f,b,2)]),a!=null&&g.push(["rotation",new w([a],b,1,!0)]),i){let m=[i[0],i[1],i[2],i.length>3?i[3]:255];g.push(["color",new w(m,b,4,!0)])}if(h&&g.push(["uvi",new w(h,b,h.length)]),s&&g.push(["centerOffset",new w(s,b,3)]),g.push(["groundDistance",new w(x,b,1)]),n){let m=[n[0],n[1],n[2],n[3]];g.push(["featureAttribute",new w(m,b,4)])}return l!=null&&wt(g,l,b),new B(t,g,null,void 0,ji())}function Gi(t,e,o,i,a=!0,r=!0){let s=0,p=e,h=t,n=V(0,s,0),l=V(0,s+h,0),v=V(0,-1,0),C=V(0,1,0);i&&(s=h,l=V(0,0,0),n=V(0,s,0),v=V(0,1,0),C=V(0,-1,0));let x=[l,n],b=[v,C],g=o+2,f=Math.sqrt(h*h+p*p);if(i)for(let u=o-1;u>=0;u--){let O=2*Math.PI/o*u,z=V(Math.cos(O)*p,s,Math.sin(O)*p);x.push(z);let y=V(h*Math.cos(O)/f,-p/f,h*Math.sin(O)/f);b.push(y)}else for(let u=0;u<o;u++){let O=2*Math.PI/o*u,z=V(Math.cos(O)*p,s,Math.sin(O)*p);x.push(z);let y=V(h*Math.cos(O)/f,p/f,h*Math.sin(O)/f);b.push(y)}let m=[],d=[];if(a){for(let u=3;u<x.length;u++)m.push(1),m.push(u-1),m.push(u),d.push(0),d.push(0),d.push(0);m.push(x.length-1),m.push(2),m.push(1),d.push(0),d.push(0),d.push(0)}if(r){for(let u=3;u<x.length;u++)m.push(u),m.push(u-1),m.push(0),d.push(u),d.push(u-1),d.push(1);m.push(0),m.push(2),m.push(x.length-1),d.push(1),d.push(2),d.push(b.length-1)}let c=R(g*3);for(let u=0;u<g;u++)c[u*3]=x[u][0],c[u*3+1]=x[u][1],c[u*3+2]=x[u][2];let S=R(g*3);for(let u=0;u<g;u++)S[u*3]=b[u][0],S[u*3+1]=b[u][1],S[u*3+2]=b[u][2];return[["position",new w(c,m,3,!0)],["normal",new w(S,d,3,!0)]]}function Ca(t,e,o,i,a,r=!0,s=!0){return new B(t,Gi(e,o,i,a,r,s))}function Aa(t,e,o,i,a,r,s){let p=a?ke(a):V(1,0,0),h=r?ke(r):V(0,0,0);s??=!0;let n=q();M(n,p);let l=q();H(l,n,Math.abs(e));let v=q();H(v,l,-.5),F(v,v,h);let C=V(0,1,0);Math.abs(1-st(n,C))<.2&&le(C,0,0,1);let x=q();W(x,n,C),M(x,x),W(C,x,n);let b=i*2+(s?2:0),g=i+(s?2:0),f=R(b*3),m=R(g*3),d=R(b*2),c=Array(i*3*(s?4:2)),S=Array(i*3*(s?4:2));s&&(f[(b-2)*3]=v[0],f[(b-2)*3+1]=v[1],f[(b-2)*3+2]=v[2],d[(b-2)*2]=0,d[(b-2)*2+1]=0,f[(b-1)*3]=f[(b-2)*3]+l[0],f[(b-1)*3+1]=f[(b-2)*3+1]+l[1],f[(b-1)*3+2]=f[(b-2)*3+2]+l[2],d[(b-1)*2]=1,d[(b-1)*2+1]=1,m[(g-2)*3]=-n[0],m[(g-2)*3+1]=-n[1],m[(g-2)*3+2]=-n[2],m[(g-1)*3]=n[0],m[(g-1)*3+1]=n[1],m[(g-1)*3+2]=n[2]);let u=($,T,P)=>{c[$]=T,S[$]=P},O=0,z=q(),y=q();for(let $=0;$<i;$++){let T=2*Math.PI/i*$;H(z,C,Math.sin(T)),H(y,x,Math.cos(T)),F(z,z,y),m[$*3]=z[0],m[$*3+1]=z[1],m[$*3+2]=z[2],H(z,z,o),F(z,z,v),f[$*3]=z[0],f[$*3+1]=z[1],f[$*3+2]=z[2],d[$*2]=$/i,d[$*2+1]=0,f[($+i)*3]=f[$*3]+l[0],f[($+i)*3+1]=f[$*3+1]+l[1],f[($+i)*3+2]=f[$*3+2]+l[2],d[($+i)*2]=$/i,d[$*2+1]=1;let P=($+1)%i;u(O++,$,$),u(O++,$+i,$),u(O++,P,P),u(O++,P,P),u(O++,$+i,$),u(O++,P+i,P)}if(s){for(let $=0;$<i;$++){let T=($+1)%i;u(O++,b-2,g-2),u(O++,$,g-2),u(O++,T,g-2)}for(let $=0;$<i;$++){let T=($+1)%i;u(O++,$+i,g-1),u(O++,b-1,g-1),u(O++,T+i,g-1)}}let U=[["position",new w(f,c,3,!0)],["normal",new w(m,S,3,!0)],["uv0",new w(d,c,2,!0)]];return new B(t,U)}function Sa(t,e,o,i,a,r){i||=10,a??=!0,pt(e.length>1);let s=[[0,0,0]],p=[],h=[];for(let n=0;n<i;n++){p.push([0,-n-1,-((n+1)%i)-1]);let l=n/i*2*Math.PI;h.push([Math.cos(l)*o,Math.sin(l)*o])}return Ii(t,h,e,s,p,a,r)}function Ii(t,e,o,i,a,r,s=V(0,0,0)){let p=e.length,h=R(o.length*p*3+(i.length*6||0)),n=R(o.length*p*3+(i?6:0)),l=[],v=[],C=0,x=0,b=j(),g=j(),f=j(),m=j(),d=j(),c=j(),S=j(),u=j(),O=j(),z=j(),y=j(),U=j(),$=j(),T=Po();le(O,0,1,0),k(g,o[1],o[0]),M(g,g),r?(F(u,o[0],s),M(f,u)):le(f,0,0,1),Je(g,f,O,O,d,f,et),Y(m,f),Y(U,d);for(let _=0;_<i.length;_++)H(c,d,i[_][0]),H(u,f,i[_][2]),F(c,c,u),F(c,c,o[0]),h[C++]=c[0],h[C++]=c[1],h[C++]=c[2];n[x++]=-g[0],n[x++]=-g[1],n[x++]=-g[2];for(let _=0;_<a.length;_++)l.push(a[_][0]>0?a[_][0]:-a[_][0]-1+i.length),l.push(a[_][1]>0?a[_][1]:-a[_][1]-1+i.length),l.push(a[_][2]>0?a[_][2]:-a[_][2]-1+i.length),v.push(0),v.push(0),v.push(0);let P=i.length,ce=i.length-1;for(let _=0;_<o.length;_++){let Me=!1;_>0&&(Y(b,g),_<o.length-1?(k(g,o[_+1],o[_]),M(g,g)):Me=!0,F(z,b,g),M(z,z),F(y,o[_-1],m),jo(o[_],z,T),Vo(T,Do(y,b),u)?(k(u,u,o[_]),M(f,u),W(d,z,f),M(d,d)):Je(z,m,U,O,d,f,et),Y(m,f),Y(U,d)),r&&(F(u,o[_],s),M($,u));for(let L=0;L<p;L++)if(H(c,d,e[L][0]),H(u,f,e[L][1]),F(c,c,u),M(S,c),n[x++]=S[0],n[x++]=S[1],n[x++]=S[2],F(c,c,o[_]),h[C++]=c[0],h[C++]=c[1],h[C++]=c[2],!Me){let ye=(L+1)%p;l.push(P+L),l.push(P+p+L),l.push(P+ye),l.push(P+ye),l.push(P+p+L),l.push(P+p+ye);for(let $e=0;$e<6;$e++){let Pt=l.length-6;v.push(l[Pt+$e]-ce)}}P+=p}let Ot=o[o.length-1];for(let _=0;_<i.length;_++)H(c,d,i[_][0]),H(u,f,i[_][1]),F(c,c,u),F(c,c,Ot),h[C++]=c[0],h[C++]=c[1],h[C++]=c[2];let xe=x/3;n[x++]=g[0],n[x++]=g[1],n[x++]=g[2];let we=P-p;for(let _=0;_<a.length;_++)l.push(a[_][0]>=0?P+a[_][0]:-a[_][0]-1+we),l.push(a[_][2]>=0?P+a[_][2]:-a[_][2]-1+we),l.push(a[_][1]>=0?P+a[_][1]:-a[_][1]-1+we),v.push(xe),v.push(xe),v.push(xe);let zt=[["position",new w(h,l,3,!0)],["normal",new w(n,v,3,!0)]];return new B(t,zt)}function Oa(t,e,o,i,a){let r=at(e.length*3),s=Array(2*(e.length-1)),p=0,h=0;for(let l=0;l<e.length;l++){for(let v=0;v<3;v++)r[p++]=e[l][v];l>0&&(s[h++]=l-1,s[h++]=l)}let n=[["position",new w(r,s,3,!0)]];if(o?.length===e.length&&o[0].length===3){let l=R(o.length*3),v=0;for(let C=0;C<e.length;C++)for(let x=0;x<3;x++)l[v++]=o[C][x];n.push(["normal",new w(l,s,3,!0)])}if(i&&n.push(["color",new w(i,zo(i.length/4),4)]),a?.length===e.length){let l=pi(a,1);n.push(["timeStamps",new w(l,s,$t,!0)])}return new B(t,n,null)}function za(t,e,o,i,a,r=0){let s=Array(18),p=[[-o,r,a/2],[i,r,a/2],[0,e+r,a/2],[-o,r,-a/2],[i,r,-a/2],[0,e+r,-a/2]],h=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let n=0;n<6;n++)s[n*3]=p[n][0],s[n*3+1]=p[n][1],s[n*3+2]=p[n][2];return new B(t,[["position",new w(s,h,3,!0)]])}function Pa(t,e){let o=t.getMutableAttribute("position").data;for(let i=0;i<o.length;i+=3){let a=o[i],r=o[i+1],s=o[i+2];le(ee,a,r,s),te(ee,ee,e),o[i]=ee[0],o[i+1]=ee[1],o[i+2]=ee[2]}}function ja(t,e=t){let o=t.attributes,i=o.get("position").data,a=o.get("normal").data;if(a){let r=e.getMutableAttribute("normal").data;for(let s=0;s<a.length;s+=3){let p=a[s+1];r[s+1]=-a[s+2],r[s+2]=p}}if(i){let r=e.getMutableAttribute("position").data;for(let s=0;s<i.length;s+=3){let p=i[s+1];r[s+1]=-i[s+2],r[s+2]=p}}}function je(t,e,o,i,a){return Math.abs(st(e,t))>a?!1:(W(o,t,e),M(o,o),W(i,o,t),M(i,i),!0)}function Je(t,e,o,i,a,r,s){return je(t,e,a,r,s)||je(t,o,a,r,s)||je(t,i,a,r,s)}const et=.99619469809,ee=j();export{Pa as A,Sa as B,Ii as C,pa as D,ga as E,sa as F,Je as G,Ko as H,At as N,ja as S,ba as V,Pi as _,ca as a,Oa as b,ya as c,_a as d,bi as e,Aa as f,zi as g,Ze as h,Xo as i,Ca as j,vi as k,$a as l,xi as m,xa as n,wt as o,Uo as p,_t as q,xt as r,wa as s,wi as t,yi as u,Ci as v,fa as w,ma as x,na as y,za as z};
//# sourceMappingURL=GeometryUtil-Dnu32Jhl.js.map
