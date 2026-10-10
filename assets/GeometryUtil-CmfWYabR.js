const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RibbonLine.glsl-DDUoO4JM.js","assets/index-sBTGSh23.js","assets/index-DAx1CvpA.css","assets/getEmissions.glsl-DNL5xQvY.js","assets/NoParameters-oniR9cXl.js","assets/doublePrecisionUtils-CtF2dH1L.js","assets/OutputColorHighlightOLID.glsl-B4DrgdT9.js","assets/Indices-Dw2u9Ml2.js","assets/sphere--WLV2QDF.js","assets/ray-D_d1E9-H.js","assets/vectorStacks-D1gra0vL.js","assets/quatf64-aQ5IuZRd.js","assets/InterleavedLayout-CYPMZVjd.js","assets/BufferView-DfEibyVG.js","assets/types-DfUoEbzw.js","assets/VertexElementDescriptor-CBVWHxfT.js","assets/VertexAttributeLocations-DTwbdF8f.js","assets/DrapedZ-DzLtR0NK.js","assets/frustumPlanes-q5rrcWaJ.js","assets/plane-DyyJ8hFb.js","assets/lineSegment-BhiZDO6v.js","assets/AlphaCutoff-DD8tli_W.js","assets/RenderingContext-D43kcVR4.js","assets/ProgramCache-CacL_Kmx.js","assets/VertexArrayObject-BHyZeHqU.js","assets/VertexBuffer-DBNy7fnM.js","assets/projectVectorToVector-BsOz5v1q.js","assets/projectPointToVector-CdrWiGiv.js","assets/dehydratedPoint-HwkPLSOd.js","assets/orientedBoundingBox-Tl5lpgjO.js","assets/quat-DU1NwlVY.js","assets/computeTranslationToOriginAndRotation-DFX_9gUW.js","assets/mathUtils-JxojU-E-.js","assets/ReceiveShadowsConfiguration-LEfq6Frh.js","assets/DDSUtil-ettjQia7.js","assets/HUDMaterial-COlINgVe.js","assets/TextureBackedBufferLayout-BT82P3b-.js"])))=>i.map(i=>d[i]);
import{cP as tt,zO as jt,zP as Vt,zQ as Dt,f2 as le,fy as F,rT as Z,io as te,dk as Ft,fw as Y,a_ as j,nK as it,nr as Te,gJ as _e,px as Mt,iW as Tt,np as Et,gI as Ee,pi as Rt,cj as Bt,ck as Ut,lC as Re,er as Ht,a3 as Q,gD as Gt,cZ as It,mZ as ot,ni as kt,aK as qt,oz as Lt,na as at,zR as Wt,f5 as ve,zS as Kt,k5 as Ve,c1 as Nt,a6 as De,_ as rt,a4 as Ce,d5 as Yt,zT as Be,qe as Qt,u0 as Zt,vK as Jt,p9 as Xt,hi as Ue,aZ as ei,aY as M,fx as H,aV as st,aW as W,fu as q}from"./index-sBTGSh23.js";import{m as ti}from"./mathUtils-JxojU-E-.js";import{j as ii}from"./sphere--WLV2QDF.js";import{I as oi,J as ai,d as B,t as R,K as ri,L as nt,f as si,e as ni,M as lt,O as He,P as li,l as ci,Q as ct,R as ut,S as ui,U as ht,w as dt,x as ft,V as hi,W as ue,X as di,u as fi,i as pi,k as gi,q as mi,Y as Ae,p as Se,Z as vi,$ as bi,a0 as xi,a1 as Ge,a2 as wi,r as yi,B as $i,E as _i,a3 as Ci,a4 as Ie}from"./OutputColorHighlightOLID.glsl-B4DrgdT9.js";import{a as pt,K as gt,n as ke}from"./InterleavedLayout-CYPMZVjd.js";import{e as Ai,i as mt}from"./doublePrecisionUtils-CtF2dH1L.js";import{p as Si}from"./Octree-B04KeeCd.js";import{t as qe,n as V,e as G}from"./vec3f32-CTt429Kd.js";import{h as Fe,d as Oi}from"./Indices-Dw2u9Ml2.js";import{_ as zi,C as Pi,P as ji}from"./plane-DyyJ8hFb.js";import{b as Vi}from"./ray-D_d1E9-H.js";import{t as w}from"./orientedBoundingBox-Tl5lpgjO.js";import{r as Di,i as Fi,e as A,t as se,b as ne,a as E,u as Le,s as Mi}from"./getEmissions.glsl-DNL5xQvY.js";import{t as Ti}from"./NoParameters-oniR9cXl.js";import{T as vt,o as Ei,g as bt,h as Ri}from"./RenderingContext-D43kcVR4.js";function Bi(t){return Ui.has(t)}const Ui=new Set("position.normal.normalCompressed.uv0.size.rotation.offset.perspectiveDivide.centerOffset.groundDistance.previousDelta.lineParameters.sizeFeatureAttribute.profileRight.profileUp.pathVertexInfo.profileRotation.pathRotationUp.pathMaxStretchDistance.featureAttribute.position.size.sizeFeatureAttribute.profileRight.profileUp.profileRotation.pathRotationUp.pathMaxStretchDistance".split("."));let We=class{constructor(){this.box=tt(),this.sphere=new ii}};function Hi(t,e,i){let o=jt(e,Ii),a=Vt(e,ki);if(Dt(i)){let r=le(Gi,i[12],i[13],i[14]);F(I,o,r),F(k,a,r),Z(t,I),Z(t,k);return}if(te(I,o,i),Z(t,I),!Ft(o,a)){te(k,a,i),Z(t,k);for(let r=0;r<3;++r)Y(I,o),Y(k,a),I[r]=a[r],k[r]=o[r],te(I,I,i),te(k,k,i),Z(t,I),Z(t,k)}}const Gi=j(),I=j(),k=j(),Ii=j(),ki=j();function qi(t,e){return t??=[],t.push(e),t}function Li(t,e){if(t==null)return null;let i=t.filter(o=>o!==e);return i.length===0?null:i}function sa(t,e,i,o,a){he[0]=t.get(e,0),he[1]=t.get(e,1),he[2]=t.get(e,2),Ai(he,K,3),i.set(a,0,K[0]),o.set(a,0,K[1]),i.set(a,1,K[2]),o.set(a,1,K[3]),i.set(a,2,K[4]),o.set(a,2,K[5])}const he=j(),K=new Float32Array(6);let na=class{constructor(e={}){this.id=it(),this.type=0,this._highlightIds=new Set,this._shaderTransformation=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerViewUid=e.layerViewUid,e.isElevationSource&&(this.lastValidElevationBB=tt()),this._geometries=e.geometries?Array.from(e.geometries):[]}dispose(){this._geometries.length=0}get layer(){return this._layer}set layer(e){pt(this._layer==null||e==null,"Object3D can only be added to a single Layer"),this._layer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e);for(let i of this._highlightIds)e.addHighlight(i);this._emit("geometryAdded",{object:this,geometry:e}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}removeGeometry(e){let i=this._geometries.splice(e,1)[0];if(i){for(let o of this._highlightIds)i.removeHighlight(o);this._emit("geometryRemoved",{object:this,geometry:i}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,i,o=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:i,sync:o}),Bi(i)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(let i of this._geometries)i.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){let e=new oi;for(let i of this._geometries)i.occludees=qi(i.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(let i of this._geometries)i.occludees=Li(i.occludees,e);this._emit("occlusionChanged",this)}highlight(e){let i=new ai(e);for(let o of this._geometries)o.addHighlight(i);return this._emit("highlightChanged",this),this._highlightIds.add(i),i}removeHighlight(e){this._highlightIds.delete(e);for(let i of this._geometries)i.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===0?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,i){return Te(i,this.transformation,e.transformation)}getCombinedShaderTransformation(e,i=_e()){return Te(i,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=new We,this._validateBoundingVolume(this._bvWorldSpace,0)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=new We,this._validateBoundingVolume(this._bvObjectSpace,1)),this._bvObjectSpace}_validateBoundingVolume(e,i){let o=i===1;for(let a of this._geometries){let r=a.boundingInfo;r&&Hi(e.box,r.box,o?a.transformation:this.getCombinedShaderTransformation(a))}Mt(e.box,e.sphere.center);for(let a of this._geometries){let r=a.boundingInfo;if(r==null)continue;let s=o?a.transformation:this.getCombinedShaderTransformation(a),p=ti(s);te(Ke,r.sphere.center,s);let h=Tt(Ke,e.sphere.center),n=r.sphere.radius*p;e.sphere.radius=Math.max(e.sphere.radius,h+n)}}_invalidateBoundingVolume(){let e=this._bvWorldSpace?.sphere;this._bvObjectSpace=this._bvWorldSpace=void 0,this.layer&&e&&this.layer.notifyObjectBBChanged(this,e)}_emit(e,i){this.layer?.events.emit(e,i)}get geometries(){return this._geometries}get transformation(){return this._transformation??Et}set transformation(e){this._transformation=Ee(this._transformation??_e(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?Ee(this._shaderTransformation??_e(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}get test(){}};const Ke=j(),Wi=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];let ca=class{constructor(e,i,o=""){this.stage=e,this.apiLayerViewUid=o,this.id=it(),this.events=new Rt,this.visible=!0,this.sliceable=!1,this._objectsAdded=[],this._handles=new Bt,this._objects=new Map,this._pickable=!0,this.visible=i?.visible??!0,this._pickable=i?.pickable??!0,this.updatePolicy=i?.updatePolicy??0,e.addLayer(this);for(let a of Wi)this._handles.add(this.events.on(a,r=>e.handleEvent(a,r)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.removeLayer(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}getObject(e){return Ut(this._objects.get(e))}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.set(e.id,e),e.layer=this,this.events.emit("layerObjectAdded",e),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.delete(e.id)&&(this.events.emit("layerObjectRemoved",e),e.layer=null,this._octree!=null&&(Re(this._objectsAdded,e)||this._octree.remove([e])))}addMany(e){for(let i of e)this._objects.set(i.id,i),i.layer=this;this.events.emit("layerObjectsAdded",e),this._octree!=null&&this._objectsAdded.push(...e)}removeMany(e){let i=[];for(let o of e)this._objects.delete(o.id)&&i.push(o);if(i.length!==0&&(this.events.emit("layerObjectsRemoved",i),i.forEach(o=>o.layer=null),this._octree!=null)){for(let o=0;o<i.length;)Re(this._objectsAdded,i[o])?(i[o]=i[i.length-1],--i.length):++o;this._octree.remove(i)}}commit(){this.stage.commitLayer(this)}sync(){this.updatePolicy!==1&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,i){this._octree!=null&&!this._objectsAdded.includes(e)&&this._octree.update(e,i)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.size>50?(this._octree=new Si(e=>e.boundingVolumeWorldSpace.sphere),this._octree.add(this._objects.values())):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded),this._objectsAdded.length=0),this._octree}invalidateSpatialQueryAccelerator(){this._octree=Ht(this._octree),this._objectsAdded.length=0}get test(){}},xt=class extends Di{constructor(){super(...arguments),this.hasEmissive=!1}};Q([Fi()],xt.prototype,"hasEmissive",void 0);function wt(t,e,i){t.push(["olidColor",new w(e,i,4,!0)])}function Ki(t,e=!1){return t<=Gt?e?Array(t).fill(0):Array(t):new Float16Array(t)}function Ni(t,e,i){let o=t.isGeographic&&e,{metersPerUnit:a}=t,r=0;return o?(a=1,r=It(i)):t.isGeographic?a=ot(t).metersPerDegree:t.isWebMercator&&(r=kt(i)),a*Math.max(.2,Math.cos(r))}const D={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},Yi={dash:D.dash,"dash-dot":[...D.dash,...D.dot],dot:D.dot,"long-dash":D["long-dash"],"long-dash-dot":[...D["long-dash"],...D.dot],"long-dash-dot-dot":[...D["long-dash"],...D.dot,...D.dot],none:null,"short-dash":D["short-dash"],"short-dash-dot":[...D["short-dash"],...D["short-dot"]],"short-dash-dot-dot":[...D["short-dash"],...D["short-dot"],...D["short-dot"]],"short-dot":D["short-dot"],solid:null};let Qi=class{constructor(e,i,o){this.image=e,this.width=i,this.length=o,this.uuid=qt()}};function Zi(t){return t!=null&&"image"in t}function yt(t,e){return t==null?t:{pattern:t.slice(),pixelRatio:e}}function fa(t){return{pattern:[t,t],pixelRatio:2}}function pa(t){switch(t?.type){case"style":return Ji(t.style);case"template":return Xi(t.normalizedDashTemplate);case"image":return new Qi(t.image,t.width,t.length);case void 0:case null:return null}return null}function Ji(t){return t==null?null:yt(Yi[t],8)}function Xi({dashTemplate:t,hidesLine:e}){return yt(e||t.length===0?null:t,8)}function ga(t){switch(t?.type){case"style":return t.style==="none";case"template":return t.normalizedDashTemplate.hidesLine;case"image":case void 0:case null:return!1}return!1}function ma(t,e,i=null){let o=[],a=e.mapPositions,r=eo(e,o),s=r.data,p=r.indices.length,h=Fe(p);return to(e,o,h),ao(e,o,h),io(e,o,h),oo(e,o,r.indices,h),ro(e,o,r.indices,h),so(e,o),no(e,o,r.indices,h),lo(t,e,o,s),i!=null&&wt(o,i,h),new B(t,o,a)}function eo(t,e){let{attributeData:{position:i},removeDuplicateStartEnd:o}=t,a=i.length/3,r=a>2&&co(i)&&o,s=a-+!!r,p=Array(2*(s-1)),h=r?i.slice(0,-3):i,n=0;for(let v=0;v<s-1;v++)p[n++]=v,p[n++]=v+1;let l=new w(h,p,3,r);return e.push(["position",l]),l}function to(t,e,i){if(t.attributeData.colorFeature!=null)return;let o=t.attributeData.color;e.push(["color",new w(o??Lt,i,4)])}function io(t,e,i){t.attributeData.normal&&e.push(["normal",new w(t.attributeData.normal,i,3)])}function oo(t,e,i,o){let a=t.attributeData.colorFeature;a!=null&&(typeof a=="number"?e.push(["colorFeatureAttribute",new w([a],o,1,!0)]):e.push(["colorFeatureAttribute",new w(a,i,1,!0)]))}function ao(t,e,i){t.attributeData.sizeFeature??e.push(["size",new w([t.attributeData.size??1],i,1,!0)])}function ro(t,e,i,o){let a=t.attributeData.sizeFeature;a!=null&&(typeof a=="number"?e.push(["sizeFeatureAttribute",new w([a],o,1,!0)]):e.push(["sizeFeatureAttribute",new w(a,i,1,!0)]))}function so(t,e){let{attributeData:{position:i,timeStamps:o}}=t;if(!o)return;let a=i.length/3,r=Array(2*(a-1)),s=0;for(let p=0;p<a-1;p++)r[s++]=p,r[s++]=p+1;e.push(["timeStamps",new w(o,r,$t,!0)])}function no(t,e,i,o){let a=t.attributeData.opacityFeature;a!=null&&(typeof a=="number"?e.push(["opacityFeatureAttribute",new w([a],o,1,!0)]):e.push(["opacityFeatureAttribute",new w(a,i,1,!0)]))}function lo(t,{overlayInfo:e},i,o){let a=t.parameters;if(e==null||!uo(a)||a.stipplePattern==null)return;let{renderCoordsHelper:r,spatialReference:s}=e,p=s.isGeographic&&r.viewingMode===1,h=a.worldSized||Zi(a.stipplePattern);if(!h&&!p)return;let n=o;if(p){let d=at(o.length),c=ot(s);for(let S=0;S<d.length;S+=3)Wt(o,S,d,S,c);n=d}let l=o.length/3,v=R(l+1),C=r.viewingMode===1,x=ho,b=fo,g=0,f=0,m=0;ve(x,n[f++],n[f++]),f++,v[0]=0;for(let d=1;d<l+1;++d){d===l&&(f=0);let c=f;ve(b,n[f++],n[f++]),f++;let S=(o[m+1]+o[c+1])/2,u=h?Ni(s,C,S):1;g+=Kt(x,b)*u,v[d]=g,[x,b]=[b,x],m=c}i.push(["distanceToStart",new w(v,i[0][1].indices,1,!0)])}function co(t){let e=t.length;return t[0]===t[e-3]&&t[1]===t[e-2]&&t[2]===t[e-1]}function uo(t){return"stipplePattern"in t}const ho=Ve(),fo=Ve(),$t=4;function po(t,e){let i=Ki(t.length*4),o=t[0],a=t[t.length-1];for(let r=0;r<t.length;r++)i[r*4]=t[r],i[r*4+1]=o,i[r*4+2]=a,i[r*4+3]=e+.5;return i}function Ne(t,e){let i=t[e],o=t[e+1],a=t[e+2];return Math.sqrt(i*i+o*o+a*a)}function go(t,e){let i=t[e],o=t[e+1],a=t[e+2],r=1/Math.sqrt(i*i+o*o+a*a);t[e]*=r,t[e+1]*=r,t[e+2]*=r}function Ye(t,e,i){t[e]*=i,t[e+1]*=i,t[e+2]*=i}function mo(t,e,i,o,a,r=e){a||=t,a[r]=t[e]+i[o],a[r+1]=t[e+1]+i[o+1],a[r+2]=t[e+2]+i[o+2]}function vo(t){t.uniforms.add(new ri("alignPixelEnabled",e=>e.alignPixelEnabled)),t.code.add(A`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
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
}`)}const bo=.5;function xo(t,e){let i=t.vertex;t.include(nt),t.attributes.add("position","vec3"),t.vertex.inputs.add("position",()=>"position"),t.attributes.add("normal","vec3"),e.hasVertexCenterOffset?t.attributes.add("centerOffset","vec3"):i.constants.add("centerOffset","vec3",[0,0,0]),t.attributes.add("groundDistance","float"),si(i,e),ni(i,e),i.uniforms.add(lt,new se("polygonOffset",o=>o.shaderPolygonOffset),new He("aboveGround",o=>o.camera.aboveGround?1:-1)),e.hasVerticalOffset&&li(i),i.code.add(A`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),i.code.add(A`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
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
}`),(!e.draped||e.hasVerticalOffset)&&i.uniforms.add(ci),e.draped||(i.uniforms.add(new He("hudPixelSizePerDistance",o=>Math.tan(o.camera.fovY/2)/(o.camera.fullViewport[2]/2))),i.code.add(A`
      void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
        float distanceToCamera = length(posView);

        // Compute offset in world units for a half pixel shift
        float pixelOffset = distanceToCamera * hudPixelSizePerDistance * ${A.float(bo)};

        // Apply offset along normal in the direction away from the ground surface
        vec3 modelOffset = normalModel * aboveGround * pixelOffset;

        // Apply the same offset also on the view space position
        vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

        posModel += modelOffset;
        posView += viewOffset;
      }
    `)),e.screenCenterOffsetUnitsEnabled&&ct(i),e.hasScreenSizePerspective&&ut(i),i.code.add(A`
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
  `)}const wo=A`vec4(0.0, 0.0, 2.0, 1.0)`;let _t=class extends Ti{constructor(){super(...arguments),this.effect=0,this.fadeFactor=Nt(1)}};function yo(t){let e=new mt;return e.include(ui),e.outputs.add("fragColor","vec4",0),e.fragment.uniforms.add(new ne("colorTexture",i=>i.color),new ne("emissionTexture",i=>i.emission),new ne("focusArea",i=>i.focusArea),new ht("focusAreaEffectMode",i=>i.effect),new se("fadeFactor",i=>i.fadeFactor.value)).constants.add("EffectBright","int",0).code.add("float getLuminance(in vec4 color) { return color.r * 0.25 + color.g * 0.5 + color.b * 0.25; }").main.add(`
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
fragEmission = vec4(vec3(0.0), fadeFactor * 0.9);`)),e}const $o=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaPassParameters:_t,build:yo},Symbol.toStringTag,{value:"Module"}));let be=class extends dt{constructor(){super(...arguments),this.shader=new ft($o,()=>rt(()=>import("./RibbonLine.glsl-DDUoO4JM.js").then(t=>t.F),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]))),this.ignoreUnused=!0}initializePipeline(){return vt({colorWrite:bt,blending:Ei})}};be=Q([De("esri.views.3d.webgl-engine.effects.focusArea.FocusAreaTechnique")],be);let re=class extends hi{constructor(t){super({...t,view:t.focusAreasView.view}),this.consumes={required:[ue.FOCUSAREA,ue.FOCUSAREA_MASK]},this.produces=ue.FOCUSAREA,this._fadeDirection=0,this._configuration=new xt,this._passParameters=new _t}fadeOut(t){this.removeAllHandles(),this._startTime=null,this._fadeDirection=1,this.addHandles(Yt(()=>this._passParameters.fadeFactor.value,e=>{e===0&&(this.removeAllHandles(),t())})),this.requestRender(2)}precompile(){this._configuration.hasEmissive=this.bindParameters.emissions!==0,this.techniques.precompile(be,this._configuration)}render(t){let e=this.bindParameters;this._startTime??=this.view.stage?.renderer.renderContext.time;let i=this.view.qualitySettings.fadeDuration,o=i>0?Math.min(i,this.view.stage?.renderer.renderContext.time-this._startTime)/i:1,a=this.renderingContext,r=this.techniques.get(be,this._configuration),s=this.input,p=t.find(({name:x})=>x===ue.FOCUSAREA_MASK),h=this.focusAreasView.style==="bright";this._passParameters.color=this._passParameters.emission=a.emptyTexture,this._passParameters.focusArea=p.getTexture(),this._passParameters.effect=Ct[this.focusAreasView.style],this._passParameters.fadeFactor.value=this._fadeDirection===0?o:1-o;let n=e.camera,l=n.fullViewport[2],v=n.fullViewport[3],C=h?this.fboCache.acquire(l,v,this.produces):s;if(h){if(this._passParameters.color=s.getTexture(),this._configuration.hasEmissive){this._passParameters.emission=s.getTexture(Be);let x=this._passParameters.emission?.descriptor.internalFormat===Qt.RGBA16F?8:5;C.acquireColor(Be,x,"emissive")}C.moveAttachments(s),a.bindFramebuffer(C.fbo),a.setClearColor(0,0,0,0),a.clear(16384)}else a.bindFramebuffer(C.fbo);return a.bindTechnique(r,e,this._passParameters),a.screen.draw(),o<1&&this.requestRender(2),C}};Q([Ce()],re.prototype,"consumes",void 0),Q([Ce()],re.prototype,"produces",void 0),Q([Ce({constructOnly:!0})],re.prototype,"focusAreasView",void 0),re=Q([De("esri.views.3d.webgl-engine.effects.focusArea.FocusArea")],re);const Ct={bright:0,dark:1},_o=t=>t?Ct[t]:0;function Co(t){let e=new mt;e.include(xo,t),e.vertex.include(di,t);let{output:i,hasOcclusionTexture:o,signedDistanceFieldEnabled:a,pixelSnappingEnabled:r,hasEmission:s,hasScreenSizePerspective:p,debugDrawLabelBorder:h,hasVVSize:n,hasVVColor:l,hasRotation:v,occludedFragmentFade:C,sampleSignedDistanceFieldTexelCenter:x,hasVertexColor:b,hasVertexSize:g,hasVertexRotation:f,hasVertexUVi:m}=t;e.include(nt),e.include(fi,t),e.include(pi,t),e.include(gi,t);let{vertex:d,fragment:c}=e;c.include(mi),c.code.add(A`
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
  `),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2");let S=i===10;d.uniforms.add(lt,new Ae("screenOffset",(y,U)=>ve(de,y.screenOffset[0]*2*U.camera.pixelRatio,y.screenOffset[1]*2*U.camera.pixelRatio)),new Ae("anchorPosition",y=>At(y)),new Se("materialColor",({color:y})=>y),new se("materialRotation",y=>y.rotation),new Ae("materialSize",y=>y.size),new ne("tex",y=>y.texture)),ct(d),a&&(d.uniforms.add(new Se("outlineColor",y=>y.outlineColor)),c.uniforms.add(new Se("outlineColor",y=>Qe(y)?y.outlineColor:Jt),new se("outlineSize",y=>Qe(y)?y.outlineSize:0))),r&&d.include(vo),p&&(vi(d),ut(d)),h&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add("uv0","vec2"),m&&e.attributes.add("uvi","vec4"),b&&e.attributes.add("color","vec4"),g&&e.attributes.add("size","vec2"),f&&e.attributes.add("rotation","float"),(n||l)&&e.attributes.add("featureAttribute","vec4"),d.main.add(A`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${wo};
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
}`:A`posProj += quadOffset;`;d.include(bi),d.main.add(A`
    ${u}
    ${l?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":b?"vcolor = color * materialColor;":"vcolor = materialColor;"}

    ${E(i===11,A`vcolor.a = 1.0;`)}

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
  `);let z=Le(i)&&t.hasFocusAreaStyle&&!t.draped;switch(c.uniforms.add(new ne("tex",y=>y.texture)),z&&c.uniforms.add(new ht("focusAreaStyle",y=>_o(y.focusAreaStyle))),C&&!S&&(c.include(xi),c.uniforms.add(new Ge("depthMap",y=>y.mainDepth),new se("occludedOpacity",y=>y.occludedFragmentOpacity?.value??1))),o&&c.uniforms.add(new Ge("texOcclusion",y=>y.hudOcclusion?.attachment)),h?c.main.add(`
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
        if (zSample < ${A.float(1-So)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `),o&&c.main.add("fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;"),!S&&h&&c.main.add("fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);"),i===2&&c.main.add(A`if (fragColor.a < alphaCutoff) {
discard;
}`),z&&c.main.add(A`fragColor = applyFocusAreaStyle(fragColor, focusAreaStyle);`),Le(i)&&s&&c.main.add("fragEmission = vec4(0.0);"),i){case 1:c.main.add(`
        fragColor = vec4(fragColor.rgb * floatBlendOutputScale, fragColor.a);
        fragAlpha = fragColor.a * floatBlendOutputScale;
      `);break;case 2:c.main.add("fragColor.rgb /= fragColor.a;");break;case 11:c.main.add("outputObjectAndLayerIdColor();");break;case 10:e.include(wi,t),c.main.add("outputHighlight(false);")}return e}function Qe(t){return t.outlineColor[3]>0&&t.outlineSize>0}function At(t){return t.textureIsSignedDistanceField?Ao(t.anchorPosition,t.distanceFieldBoundingBox,de):Zt(de,t.anchorPosition),de}const de=Ve();function Ao(t,e,i){ve(i,t[0]*(e[2]-e[0])+e[0],t[1]*(e[3]-e[1])+e[1])}const So=.08,Oo=Object.freeze(Object.defineProperty({__proto__:null,anchorPosition:At,build:Co},Symbol.toStringTag,{value:"Module"}));let Ze=class extends dt{constructor(t,e){super(t,e,ke(zo).concat(ke(Po(e)))),this.shader=new ft(Oo,()=>rt(()=>import("./RibbonLine.glsl-DDUoO4JM.js").then(i=>i.H),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]))),this.ignoreUnused=!0,this.primitiveType=Xt.TRIANGLE_STRIP}initializePipeline(t){let{draped:e,output:i,depthTestEnabled:o}=t,a=Mi(i),r=o&&!e&&!a&&i!==10;return vt({blending:_i(i,!0),depthTest:o&&!e?{func:515}:null,depthWrite:r?Ri:null,colorWrite:bt,polygonOffset:$i(t)})}};Ze=Q([De("esri.views.3d.webgl-engine.shaders.HUDMaterialTechnique")],Ze);const zo=gt().vec2u8("uv0",{glNormalized:!0});function Po(t){let e=gt().vec3f("position").vec3f("normal").f32("groundDistance");return t.hasVertexCenterOffset&&(e=e.vec3f("centerOffset")),t.hasVertexColor&&(e=e.vec4u8("color",{glNormalized:!0})),t.hasVertexSize&&(e=e.vec2f("size")),t.hasVertexRotation&&(e=e.f32("rotation")),(t.hasVVColor||t.hasVVSize)&&(e=e.vec4f("featureAttribute")),t.hasVertexUVi&&(e=e.vec4i16("uvi")),yi()?e.vec4u8("olidColor"):e}function jo(){return Je??=Vo(),Je}function Vo(){let t=new w([0,0,0,255,255,0,255,255],[0,1,2,3],2,!0);return new Ci([["uv0",t]])}let Je=null;const Oe=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],Do=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],Fo=[0,0,1,0,1,1,0,1],Mo=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],St=Array(36);for(let t=0;t<6;t++)for(let e=0;e<6;e++)St[t*6+e]=t;const N=Array(36);for(let t=0;t<6;t++)N[t*6]=0,N[t*6+1]=1,N[t*6+2]=2,N[t*6+3]=2,N[t*6+4]=3,N[t*6+5]=0;function ba(t,e){Array.isArray(e)||(e=[e,e,e]);let i=Array(24);for(let o=0;o<8;o++)i[o*3]=Oe[o][0]*e[0],i[o*3+1]=Oe[o][1]*e[1],i[o*3+2]=Oe[o][2]*e[2];return new B(t,[["position",new w(i,Mo,3,!0)],["normal",new w(Do,St,3)],["uv0",new w(Fo,N,2)]])}const ze=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],To=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],Eo=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],Ro=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function xa(t,e){Array.isArray(e)||(e=[e,e,e]);let i=Array(18);for(let o=0;o<6;o++)i[o*3]=ze[o][0]*e[0],i[o*3+1]=ze[o][1]*e[1],i[o*3+2]=ze[o][2]*e[2];return new B(t,[["position",new w(i,Eo,3,!0)],["normal",new w(To,Ro,3)]])}const fe=V(-.5,0,-.5),pe=V(.5,0,-.5),ge=V(0,0,.5),me=V(0,.5,0),J=G(),X=G(),ie=G(),oe=G(),ae=G();q(J,fe,me),q(X,fe,pe),W(ie,J,X),M(ie,ie),q(J,pe,me),q(X,pe,ge),W(oe,J,X),M(oe,oe),q(J,ge,me),q(X,ge,fe),W(ae,J,X),M(ae,ae);const Pe=[fe,pe,ge,me],Bo=[0,-1,0,ie[0],ie[1],ie[2],oe[0],oe[1],oe[2],ae[0],ae[1],ae[2]],Uo=[0,1,2,3,1,0,3,2,1,3,0,2],Ho=[0,0,0,1,1,1,2,2,2,3,3,3];function wa(t,e){Array.isArray(e)||(e=[e,e,e]);let i=Array(12);for(let o=0;o<4;o++)i[o*3]=Pe[o][0]*e[0],i[o*3+1]=Pe[o][1]*e[1],i[o*3+2]=Pe[o][2]*e[2];return new B(t,[["position",new w(i,Uo,3,!0)],["normal",new w(Bo,Ho,3)]])}function ya(t,e,i,o,a={uv:!0}){let r=-Math.PI,s=Math.PI*2,p=-Math.PI/2,h=Math.PI,n=Math.max(3,Math.floor(i)),l=Math.max(2,Math.floor(o)),v=(n+1)*(l+1),C=R(v*3),x=R(v*3),b=R(v*2),g=[],f=0;for(let c=0;c<=l;c++){let S=[],u=c/l,O=p+u*h,z=Math.cos(O);for(let y=0;y<=n;y++){let U=y/n,$=r+U*s,T=Math.cos($)*z,P=Math.sin(O),ce=-Math.sin($)*z;C[3*f]=T*e,C[3*f+1]=P*e,C[3*f+2]=ce*e,x[3*f]=T,x[3*f+1]=P,x[3*f+2]=ce,b[2*f]=U,b[2*f+1]=u,S.push(f),++f}g.push(S)}let m=[];for(let c=0;c<l;c++)for(let S=0;S<n;S++){let u=g[c][S],O=g[c][S+1],z=g[c+1][S+1],y=g[c+1][S];c===0?(m.push(u),m.push(z),m.push(y)):c===l-1?(m.push(u),m.push(O),m.push(z)):(m.push(u),m.push(O),m.push(z),m.push(z),m.push(y),m.push(u))}let d=[["position",new w(C,m,3,!0)],["normal",new w(x,m,3,!0)]];return a.uv&&d.push(["uv0",new w(b,m,2,!0)]),a.offset&&(d[0][0]="offset",d.push(["position",new w(Float64Array.from(a.offset),Fe(m.length),3,!0)])),new B(t,d)}function $a(t,e,i,o){let a=Go(e,i);return new B(t,a)}function Go(t,e,i){let o,a;o=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],a=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let h=0;h<o.length;h+=3)Ye(o,h,t/Ne(o,h));let r={};function s(h,n){h>n&&([h,n]=[n,h]);let l=h.toString()+"."+n.toString();if(r[l])return r[l];let v=o.length;return o.length+=3,mo(o,h*3,o,n*3,o,v),Ye(o,v,t/Ne(o,v)),v/=3,r[l]=v,v}for(let h=0;h<e;h++){let n=a.length,l=Array(n*4);for(let v=0;v<n;v+=3){let C=a[v],x=a[v+1],b=a[v+2],g=s(C,x),f=s(x,b),m=s(b,C),d=v*4;l[d]=C,l[d+1]=g,l[d+2]=m,l[d+3]=x,l[d+4]=f,l[d+5]=g,l[d+6]=b,l[d+7]=m,l[d+8]=f,l[d+9]=g,l[d+10]=f,l[d+11]=m}a=l,r={}}let p=Ie(o);for(let h=0;h<p.length;h+=3)go(p,h);return[["position",new w(Ie(o),a,3,!0)],["normal",new w(p,a,3,!0)]]}function _a(t,{normal:e,position:i,color:o,rotation:a,size:r,centerOffset:s,groundDistance:p,uvi:h,featureAttribute:n,olidColor:l=null}={}){let v=i?Ue(i):j(),C=e?Ue(e):ei(0,0,1),x=p==null?[1]:[p],b=Fe(1),g=[["position",new w(v,b,3,!0)],["normal",new w(C,b,3,!0)]],f=r!=null&&r.length===2?r:null;if(f&&g.push(["size",new w(f,b,2)]),a!=null&&g.push(["rotation",new w([a],b,1,!0)]),o){let m=[o[0],o[1],o[2],o.length>3?o[3]:255];g.push(["color",new w(m,b,4,!0)])}if(h&&g.push(["uvi",new w(h,b,h.length)]),s&&g.push(["centerOffset",new w(s,b,3)]),g.push(["groundDistance",new w(x,b,1)]),n){let m=[n[0],n[1],n[2],n[3]];g.push(["featureAttribute",new w(m,b,4)])}return l!=null&&wt(g,l,b),new B(t,g,null,void 0,jo())}function Io(t,e,i,o,a=!0,r=!0){let s=0,p=e,h=t,n=V(0,s,0),l=V(0,s+h,0),v=V(0,-1,0),C=V(0,1,0);o&&(s=h,l=V(0,0,0),n=V(0,s,0),v=V(0,1,0),C=V(0,-1,0));let x=[l,n],b=[v,C],g=i+2,f=Math.sqrt(h*h+p*p);if(o)for(let u=i-1;u>=0;u--){let O=2*Math.PI/i*u,z=V(Math.cos(O)*p,s,Math.sin(O)*p);x.push(z);let y=V(h*Math.cos(O)/f,-p/f,h*Math.sin(O)/f);b.push(y)}else for(let u=0;u<i;u++){let O=2*Math.PI/i*u,z=V(Math.cos(O)*p,s,Math.sin(O)*p);x.push(z);let y=V(h*Math.cos(O)/f,p/f,h*Math.sin(O)/f);b.push(y)}let m=[],d=[];if(a){for(let u=3;u<x.length;u++)m.push(1),m.push(u-1),m.push(u),d.push(0),d.push(0),d.push(0);m.push(x.length-1),m.push(2),m.push(1),d.push(0),d.push(0),d.push(0)}if(r){for(let u=3;u<x.length;u++)m.push(u),m.push(u-1),m.push(0),d.push(u),d.push(u-1),d.push(1);m.push(0),m.push(2),m.push(x.length-1),d.push(1),d.push(2),d.push(b.length-1)}let c=R(g*3);for(let u=0;u<g;u++)c[u*3]=x[u][0],c[u*3+1]=x[u][1],c[u*3+2]=x[u][2];let S=R(g*3);for(let u=0;u<g;u++)S[u*3]=b[u][0],S[u*3+1]=b[u][1],S[u*3+2]=b[u][2];return[["position",new w(c,m,3,!0)],["normal",new w(S,d,3,!0)]]}function Ca(t,e,i,o,a,r=!0,s=!0){return new B(t,Io(e,i,o,a,r,s))}function Aa(t,e,i,o,a,r,s){let p=a?qe(a):V(1,0,0),h=r?qe(r):V(0,0,0);s??=!0;let n=G();M(n,p);let l=G();H(l,n,Math.abs(e));let v=G();H(v,l,-.5),F(v,v,h);let C=V(0,1,0);Math.abs(1-st(n,C))<.2&&le(C,0,0,1);let x=G();W(x,n,C),M(x,x),W(C,x,n);let b=o*2+(s?2:0),g=o+(s?2:0),f=R(b*3),m=R(g*3),d=R(b*2),c=Array(o*3*(s?4:2)),S=Array(o*3*(s?4:2));s&&(f[(b-2)*3]=v[0],f[(b-2)*3+1]=v[1],f[(b-2)*3+2]=v[2],d[(b-2)*2]=0,d[(b-2)*2+1]=0,f[(b-1)*3]=f[(b-2)*3]+l[0],f[(b-1)*3+1]=f[(b-2)*3+1]+l[1],f[(b-1)*3+2]=f[(b-2)*3+2]+l[2],d[(b-1)*2]=1,d[(b-1)*2+1]=1,m[(g-2)*3]=-n[0],m[(g-2)*3+1]=-n[1],m[(g-2)*3+2]=-n[2],m[(g-1)*3]=n[0],m[(g-1)*3+1]=n[1],m[(g-1)*3+2]=n[2]);let u=($,T,P)=>{c[$]=T,S[$]=P},O=0,z=G(),y=G();for(let $=0;$<o;$++){let T=2*Math.PI/o*$;H(z,C,Math.sin(T)),H(y,x,Math.cos(T)),F(z,z,y),m[$*3]=z[0],m[$*3+1]=z[1],m[$*3+2]=z[2],H(z,z,i),F(z,z,v),f[$*3]=z[0],f[$*3+1]=z[1],f[$*3+2]=z[2],d[$*2]=$/o,d[$*2+1]=0,f[($+o)*3]=f[$*3]+l[0],f[($+o)*3+1]=f[$*3+1]+l[1],f[($+o)*3+2]=f[$*3+2]+l[2],d[($+o)*2]=$/o,d[$*2+1]=1;let P=($+1)%o;u(O++,$,$),u(O++,$+o,$),u(O++,P,P),u(O++,P,P),u(O++,$+o,$),u(O++,P+o,P)}if(s){for(let $=0;$<o;$++){let T=($+1)%o;u(O++,b-2,g-2),u(O++,$,g-2),u(O++,T,g-2)}for(let $=0;$<o;$++){let T=($+1)%o;u(O++,$+o,g-1),u(O++,b-1,g-1),u(O++,T+o,g-1)}}let U=[["position",new w(f,c,3,!0)],["normal",new w(m,S,3,!0)],["uv0",new w(d,c,2,!0)]];return new B(t,U)}function Sa(t,e,i,o,a,r){o||=10,a??=!0,pt(e.length>1);let s=[[0,0,0]],p=[],h=[];for(let n=0;n<o;n++){p.push([0,-n-1,-((n+1)%o)-1]);let l=n/o*2*Math.PI;h.push([Math.cos(l)*i,Math.sin(l)*i])}return ko(t,h,e,s,p,a,r)}function ko(t,e,i,o,a,r,s=V(0,0,0)){let p=e.length,h=R(i.length*p*3+(o.length*6||0)),n=R(i.length*p*3+(o?6:0)),l=[],v=[],C=0,x=0,b=j(),g=j(),f=j(),m=j(),d=j(),c=j(),S=j(),u=j(),O=j(),z=j(),y=j(),U=j(),$=j(),T=zi();le(O,0,1,0),q(g,i[1],i[0]),M(g,g),r?(F(u,i[0],s),M(f,u)):le(f,0,0,1),Xe(g,f,O,O,d,f,et),Y(m,f),Y(U,d);for(let _=0;_<o.length;_++)H(c,d,o[_][0]),H(u,f,o[_][2]),F(c,c,u),F(c,c,i[0]),h[C++]=c[0],h[C++]=c[1],h[C++]=c[2];n[x++]=-g[0],n[x++]=-g[1],n[x++]=-g[2];for(let _=0;_<a.length;_++)l.push(a[_][0]>0?a[_][0]:-a[_][0]-1+o.length),l.push(a[_][1]>0?a[_][1]:-a[_][1]-1+o.length),l.push(a[_][2]>0?a[_][2]:-a[_][2]-1+o.length),v.push(0),v.push(0),v.push(0);let P=o.length,ce=o.length-1;for(let _=0;_<i.length;_++){let Me=!1;_>0&&(Y(b,g),_<i.length-1?(q(g,i[_+1],i[_]),M(g,g)):Me=!0,F(z,b,g),M(z,z),F(y,i[_-1],m),Pi(i[_],z,T),ji(T,Vi(y,b),u)?(q(u,u,i[_]),M(f,u),W(d,z,f),M(d,d)):Xe(z,m,U,O,d,f,et),Y(m,f),Y(U,d)),r&&(F(u,i[_],s),M($,u));for(let L=0;L<p;L++)if(H(c,d,e[L][0]),H(u,f,e[L][1]),F(c,c,u),M(S,c),n[x++]=S[0],n[x++]=S[1],n[x++]=S[2],F(c,c,i[_]),h[C++]=c[0],h[C++]=c[1],h[C++]=c[2],!Me){let ye=(L+1)%p;l.push(P+L),l.push(P+p+L),l.push(P+ye),l.push(P+ye),l.push(P+p+L),l.push(P+p+ye);for(let $e=0;$e<6;$e++){let Pt=l.length-6;v.push(l[Pt+$e]-ce)}}P+=p}let Ot=i[i.length-1];for(let _=0;_<o.length;_++)H(c,d,o[_][0]),H(u,f,o[_][1]),F(c,c,u),F(c,c,Ot),h[C++]=c[0],h[C++]=c[1],h[C++]=c[2];let xe=x/3;n[x++]=g[0],n[x++]=g[1],n[x++]=g[2];let we=P-p;for(let _=0;_<a.length;_++)l.push(a[_][0]>=0?P+a[_][0]:-a[_][0]-1+we),l.push(a[_][2]>=0?P+a[_][2]:-a[_][2]-1+we),l.push(a[_][1]>=0?P+a[_][1]:-a[_][1]-1+we),v.push(xe),v.push(xe),v.push(xe);let zt=[["position",new w(h,l,3,!0)],["normal",new w(n,v,3,!0)]];return new B(t,zt)}function Oa(t,e,i,o,a){let r=at(e.length*3),s=Array(2*(e.length-1)),p=0,h=0;for(let l=0;l<e.length;l++){for(let v=0;v<3;v++)r[p++]=e[l][v];l>0&&(s[h++]=l-1,s[h++]=l)}let n=[["position",new w(r,s,3,!0)]];if(i?.length===e.length&&i[0].length===3){let l=R(i.length*3),v=0;for(let C=0;C<e.length;C++)for(let x=0;x<3;x++)l[v++]=i[C][x];n.push(["normal",new w(l,s,3,!0)])}if(o&&n.push(["color",new w(o,Oi(o.length/4),4)]),a?.length===e.length){let l=po(a,1);n.push(["timeStamps",new w(l,s,$t,!0)])}return new B(t,n,null)}function za(t,e,i,o,a,r=0){let s=Array(18),p=[[-i,r,a/2],[o,r,a/2],[0,e+r,a/2],[-i,r,-a/2],[o,r,-a/2],[0,e+r,-a/2]],h=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let n=0;n<6;n++)s[n*3]=p[n][0],s[n*3+1]=p[n][1],s[n*3+2]=p[n][2];return new B(t,[["position",new w(s,h,3,!0)]])}function Pa(t,e){let i=t.getMutableAttribute("position").data;for(let o=0;o<i.length;o+=3){let a=i[o],r=i[o+1],s=i[o+2];le(ee,a,r,s),te(ee,ee,e),i[o]=ee[0],i[o+1]=ee[1],i[o+2]=ee[2]}}function ja(t,e=t){let i=t.attributes,o=i.get("position").data,a=i.get("normal").data;if(a){let r=e.getMutableAttribute("normal").data;for(let s=0;s<a.length;s+=3){let p=a[s+1];r[s+1]=-a[s+2],r[s+2]=p}}if(o){let r=e.getMutableAttribute("position").data;for(let s=0;s<o.length;s+=3){let p=o[s+1];r[s+1]=-o[s+2],r[s+2]=p}}}function je(t,e,i,o,a){return Math.abs(st(e,t))>a?!1:(W(i,t,e),M(i,i),W(o,i,t),M(o,o),!0)}function Xe(t,e,i,o,a,r,s){return je(t,e,a,r,s)||je(t,i,a,r,s)||je(t,o,a,r,s)}const et=.99619469809,ee=j();export{Pa as A,Sa as B,ko as C,pa as D,ga as E,sa as F,Ki as G,Xe as H,At as N,ja as S,ba as V,Po as _,ca as a,Oa as b,ya as c,_a as d,bo as e,Aa as f,zo as g,Ze as h,Zi as i,Ca as j,vo as k,$a as l,xo as m,xa as n,wt as o,Bi as p,_t as q,xt as r,wa as s,wo as t,yo as u,Co as v,fa as w,ma as x,na as y,za as z};
//# sourceMappingURL=GeometryUtil-CmfWYabR.js.map
