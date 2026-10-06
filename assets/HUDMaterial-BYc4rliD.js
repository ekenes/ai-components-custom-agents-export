const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RibbonLine.glsl-BEe-nHbc.js","assets/index-XU9Qjxfb.js","assets/index-DnQv3brQ.css","assets/getEmissions.glsl-EnLwgCGS.js","assets/NoParameters-DB-WZ6gy.js","assets/doublePrecisionUtils-BmLt0bxY.js","assets/GeometryUtil-Cac7zoBr.js","assets/mathUtils-DD_nspDN.js","assets/sphere-BNeAgE4_.js","assets/ray-C6Rope_V.js","assets/vectorStacks-D1Ba094h.js","assets/quatf64-aQ5IuZRd.js","assets/OutputColorHighlightOLID.glsl-CErwsFHx.js","assets/Indices-BXAFtI4B.js","assets/InterleavedLayout-SLdYqalj.js","assets/BufferView-BBxsDyVW.js","assets/types-BKo2foNY.js","assets/VertexElementDescriptor-CVzmm3VW.js","assets/VertexAttributeLocations-D1zPzoAr.js","assets/DrapedZ-C24CVmgi.js","assets/triangle-DZ1rn4KV.js","assets/lineSegment-0r4dHb72.js","assets/frustumPlanes-DjA-np2l.js","assets/plane-CG_SybTm.js","assets/AlphaCutoff-DkCj_MGe.js","assets/RenderingContext-C8rF8xrt.js","assets/ProgramCache-DQmRs71a.js","assets/VertexArrayObject-DXVJgP39.js","assets/VertexBuffer-C8127VLw.js","assets/projectVectorToVector-CNq8d-x_.js","assets/projectPointToVector-s2-ztV-e.js","assets/dehydratedPoint-Z5ONvFg_.js","assets/orientedBoundingBox-DIyxL0MH.js","assets/quat-D-_XIe2M.js","assets/computeTranslationToOriginAndRotation-C4NEmHBJ.js","assets/Octree-D_ClpvdA.js","assets/vec3f32-WCVSSNPR.js","assets/ReceiveShadowsConfiguration-DzXqaVC0.js"])))=>i.map(i=>d[i]);
import{iX as Ji,wH as fi,gI as hi,vw as Gi,aS as Yi,mT as Je,a3 as h,A$ as Xi,cY as Te,f5 as Q,k8 as B,B0 as mi,nA as qi,_ as Zi,p2 as yt,a6 as Ki,bD as pt,tP as Ue,f2 as ee,fu as ze,aV as je,fx as ae,fy as bt,fw as q,fA as ue,i_ as fe,fv as $t,B1 as Qi,is as re,aY as ke,fz as dt,ot as ut,a_ as _,tQ as se,k4 as gi,bB as en,aL as tn,fr as nn,B2 as an,n1 as Dt,f3 as zt,jm as qe,iw as rn,cK as vi,tE as sn,nT as Si,eI as Pe,c_ as xi,b8 as on,cR as ln,B3 as _e,aZ as cn}from"./index-XU9Qjxfb.js";import{h as he,l as pn,x as dn,M as un,j as fn,v as yi}from"./lineSegment-0r4dHb72.js";import{S as Le,r as G,E as Pt,j as Ge}from"./plane-CG_SybTm.js";import{M as bi,V as me,p as Tt,O as hn,W as mn}from"./BufferView-BBxsDyVW.js";import{j as $i,x as Ce,r as J,t as s,g as ge,n as O,e as gn,a as g,k as vn,o as Sn,h as xn,l as Ct,c as yn,m as Ee,p as bn}from"./getEmissions.glsl-EnLwgCGS.js";import{a as Di,a9 as $n,aa as Dn,O as zn,Z as Pn,d as gt,ab as zi,ac as Ot,u as Tn,r as we,R as vt,m as ft,$ as Cn,Y as On,q as Pi,c as wn,ad as _n,a5 as Ln,P as En,g as Fn,p as Vn,_ as An,h as Rn,t as In,v as Nn,z as wt,w as Wn,A as _t,ae as Fe,C as Mn,D as jn,E as Un,af as kn,ag as Lt,ah as Bn,ai as Hn,aj as Et,ak as Ti,al as Jn,am as Ft,an as Ci,I as Oi,ao as Gn,G as Yn,ap as ht,H as Xn,aq as qn,ar as Zn,as as Kn,at as Qn,au as ea,j as ta,x as Vt,K as ia,av as na,aw as At,ax as Rt,ay as aa,az as Ve,aA as ra}from"./OutputColorHighlightOLID.glsl-CErwsFHx.js";import{i as sa,n as oa,c as la,m as ca,a as pa,b as da,d as ua,e as fa,o as ha,l as ma,f as ga}from"./ReceiveShadowsConfiguration-DzXqaVC0.js";import{i as K,P as va,t as Sa,m as It}from"./InterleavedLayout-SLdYqalj.js";import{b as wi,s as xa,V as Nt,g as ya,v as ba,c as $a,e as Da}from"./GeometryUtil-Cac7zoBr.js";import"./DDSUtil-CMEeZNjr.js";import{u as Wt,s as za}from"./doublePrecisionUtils-BmLt0bxY.js";import{i as Pa}from"./TextureBackedBufferLayout-DTQYw9Hh.js";import{m as Ae,v as Ze,h as Mt}from"./RenderingContext-C8rF8xrt.js";import{o as Oe}from"./AlphaCutoff-DkCj_MGe.js";let Ta=class extends $i{constructor(e){super(),this.spherical=e,this.draped=!1}},ts=class extends Dn{constructor(){super(...arguments),this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.shadingEnabled=!1,this.isDecoration=!1,this.worldSized=!1}},Ca=class extends Di{constructor(){super(...arguments),this.primitiveVertexCount=1}updateConfiguration(e){super.updateConfiguration(e),this._configuration.pbrMode=this.parameters.shadingEnabled?2:0,this._configuration.draped=e.slot===18,this._configuration.shadingEnabled=this.parameters.shadingEnabled,this._configuration.worldSized=this._configuration.draped&&this.parameters.worldSized,this._configuration.emissionSource=this.emissions?1:0,this._configuration.hasVVSize=this.parameters.hasVVSize,this._configuration.hasVVColor=this.parameters.hasVVColor,this._configuration.hasVVOpacity=this.parameters.hasVVOpacity,this._configuration.hasOccludees=e.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===8,Ce(e.output)&&this.parameters.shadingEnabled?(this._configuration.receiveShadows=e.shadowMap.enabled,this._configuration.hasShadowHighlights=sa(this._configuration,e),this._configuration.receiveAmbientOcclusion=e.ssao!=null,this._configuration.receiveGlobalIllumination=e.globalIlluminationEnabled):this._configuration.receiveShadows=this._configuration.hasShadowHighlights=this._configuration.receiveAmbientOcclusion=this._configuration.receiveGlobalIllumination=!1}computeAttachmentOrigin(e,t,i){return $n(e,t,i,this._isClosed(i))}_isClosed(e){return(this.parameters.isClosed??!1)&&e>2}};const jt=8;function Oa(n,e){const{vertex:t}=n;t.uniforms.add(new J("intrinsicWidth",r=>r.width));const{hasScreenSizePerspective:i,spherical:a}=e;i?(n.include(zn,e),Pn(t),gt(t,e),t.uniforms.add(new zi("inverseViewMatrix",(r,l)=>Ji(Ut,fi(Ut,l.camera.viewMatrix,r.origin)))),t.code.add(s`
      float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
        vec3 worldPos = (inverseViewMatrix * vec4(pos, 1)).xyz;
        vec3 groundUp = ${a?s`normalize(worldPos + localOrigin)`:s`vec3(0.0, 0.0, 1.0)`};
        float absCosAngle = abs(dot(groundUp, normalize(worldPos - cameraPosition)));

        return screenSizePerspectiveScaleFloat(size, absCosAngle, length(pos), screenSizePerspective);
      }
    `)):t.code.add(s`float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
return size;
}`),e.hasVVSize?(t.uniforms.add(new ge("vvSizeMinSize",r=>r.vvSize.minSize),new ge("vvSizeMaxSize",r=>r.vvSize.maxSize),new ge("vvSizeOffset",r=>r.vvSize.offset),new ge("vvSizeFactor",r=>r.vvSize.factor),new ge("vvSizeFallback",r=>r.vvSize.fallback)),t.code.add(s`
    float getSize(${O(i,"vec3 pos")}) {
      float value = ${t.inputs.get("sizeFeatureAttribute")};
      float size = isnan(value)
        ? vvSizeFallback.x
        : intrinsicWidth * clamp(vvSizeOffset + value * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;

      return ${O(i,"applyLineSizeScreenSizePerspective(size, pos)","size")};
    }
    `)):t.code.add(s`
    float getSize(${O(i,"vec3 pos")}) {
      float fullSize = intrinsicWidth * ${t.inputs.get("size")};
      return ${O(i,"applyLineSizeScreenSizePerspective(fullSize, pos)","fullSize")};
    }
    `),e.hasVVOpacity?(t.constants.add("vvOpacityNumber","int",8),t.uniforms.add(new Ot("vvOpacityValues",jt,r=>r.vvOpacity.values),new Ot("vvOpacityOpacities",jt,r=>r.vvOpacity.opacityValues),new J("vvOpacityFallback",r=>r.vvOpacity.fallback,{supportsNaN:!0})),t.code.add(s`
    float interpolateOpacity(float value) {
      if (value <= vvOpacityValues[0]) {
        return vvOpacityOpacities[0];
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
        }
      }

      return vvOpacityOpacities[vvOpacityNumber - 1];
    }

    vec4 applyOpacity(vec4 color) {
      float value = ${t.inputs.get("opacityFeatureAttribute")};
      if (isnan(value)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${O(e.hasVVColor,"color","vec4(color.rgb, vvOpacityFallback)")};
      }

      return vec4(color.rgb, interpolateOpacity(value));
    }
    `)):t.code.add(s`vec4 applyOpacity(vec4 color) {
return color;
}`),e.hasVVColor?(n.include(Tn,e),t.code.add(s`
    vec4 getColor() {
      vec4 color = interpolateVVColor(${t.inputs.get("colorFeatureAttribute")});

      // if we encounter NaN in the color it means the color is in the fallback case where the symbol color
      // is not defined and there is no valid color visual variable override. In this case just return a fully
      // transparent color
      if (isnan(color.r)) {
        return vec4(0);
      }

      return applyOpacity(color);
    }
    `)):t.code.add(s`
    vec4 getColor() {
      return applyOpacity(${t.inputs.get("color")});
    }
    `)}const Ut=hi();function wa(n){n.vertex.code.add("#define noPerspectiveWrite(x, w) (x * w)")}function _i(n){n.fragment.code.add("#define noPerspectiveRead(x) (x * gl_FragCoord.w)")}function _a(n){return n.pattern.map(e=>Math.round(e*n.pixelRatio))}function La(n){if(n==null)return 1;const e=_a(n);return Math.floor(e.reduce((t,i)=>t+i,0))}function Ea(n){return n==null?Gi:n.length===4?n:Yi(Fa,n[0],n[1],n[2],1)}const Fa=Je();function Va(n,e){if(!e.stippleEnabled)return void n.fragment.code.add(s`float getStippleAlpha(float lineWidth) { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);const t=!(e.draped&&e.stipplePreferContinuous),{vertex:i,fragment:a}=n;e.draped||(gt(i,e),i.uniforms.add(new we("worldToScreenPerDistanceRatio",({camera:o})=>1/o.perScreenPixelRatio)).code.add(s`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),n.varyings.add("vStippleDistance","float"),n.varyings.add("vStippleDistanceLimits","vec2"),n.varyings.add("vStipplePatternStretch","float"),i.code.add(s`
    float discretizeStippleDistanceToScreenRatio(float stippleDistanceToScreenRatio) {
      float step = ${s.float(Aa)};

      float discreteStippleDistanceToScreenRatio = log(stippleDistanceToScreenRatio);
      discreteStippleDistanceToScreenRatio = ceil(discreteStippleDistanceToScreenRatio / step) * step;
      discreteStippleDistanceToScreenRatio = exp(discreteStippleDistanceToScreenRatio);
      return discreteStippleDistanceToScreenRatio;
    }
  `),vt(i),i.code.add(s`
    vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {

      // First check if the segment is long enough to support fully screen space patterns.
      // Force sparse mode for segments that are very large in screen space even if it is not allowed,
      // to avoid imprecision from calculating with large floats.
      if (segmentLengthPseudoScreen >= ${t?"patternLength":"1e4"}) {
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        float stretch = repetitions / flooredRepetitions;

        // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
        // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
        vStipplePatternStretch = max(0.75, stretch);

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),a.uniforms.add(new gn("stipplePatternTexture",o=>o.stippleTexture),new J("stipplePatternPixelSizeInv",o=>1/Li(o))),e.stippleOffColorEnabled&&a.uniforms.add(new ft("stippleOffColor",o=>Ea(o.stippleOffColor))),n.include(_i);const r=e.worldSized&&e.imagePattern,l=!e.worldSized;r?(n.varyings.add("vStippleV","float"),n.fragment.include(oa),a.code.add(s`vec4 getStippleColor(out bool isClamped) {
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = vStippleDistance * stipplePatternPixelSizeInv;
float v = vStippleV == -1.0 ? 0.5 : vStippleV;
return texture(stipplePatternTexture, vec2(u, v));
}
vec4 getStippleColor() {
bool ignored;
return getStippleColor(ignored);
}
float getStippleSDF() {
vec4 color = getStippleColor();
return color.a == 0.0 ? -0.5 : 0.5;
}
float getStippleAlpha(float lineWidth) {
return getStippleColor().a;
}
vec4 blendStipple(vec4 color, float stippleAlpha) {
vec4 stippleColor = getStippleColor();
int mixMode  = 1;
vec3 col = mixExternalColor(color.rgb, vec3(1.0), stippleColor.rgb, mixMode);
float opacity = mixExternalOpacity(color.a, 1.0, stippleColor.a, mixMode);
return vec4(col, opacity);
}`)):a.code.add(s`
    float getStippleSDF(out bool isClamped) {
      float stippleDistance = noPerspectiveRead(${l?"clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y)":"vStippleDistance"});
      float lineSizeInv = noPerspectiveRead(vLineSizeInv);

      ${l?s`
      vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
      isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
      `:s`isClamped = false;`}

      float u = stippleDistance * stipplePatternPixelSizeInv * lineSizeInv;
      u = fract(u);

      float sdf = texture(stipplePatternTexture, vec2(u, 0.5)).r;

      return (sdf - 0.5) * vStipplePatternStretch + 0.5;
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha(float lineWidth) {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);
      float antiAliasedResult = clamp(stippleSDF * lineWidth + 0.5, 0.0, 1.0);
      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${e.stippleOffColorEnabled?"mix(color, stippleOffColor, stippleAlpha)":"vec4(color.rgb, color.a * stippleAlpha)"};
    }
  `),a.code.add(s`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${O(!e.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }
  `)}function Li(n){const e=n.stipplePattern;return wi(e)?e.length:e?La(e)/e.pixelRatio:1}const Aa=.4,Ei=64,Ra=Ei/2,Ia=Ra/5,Na=Ei/Ia,as=.25;let kt=class extends Ta{constructor(){super(...arguments),this.hasScreenSizePerspective=!1,this.worldSized=!1}};h([g()],kt.prototype,"hasScreenSizePerspective",void 0),h([g()],kt.prototype,"worldSized",void 0);function Wa(n,e){const t=n.vertex,i=e.hasScreenSizePerspective,a=e.worldSized;vt(t),t.constants.add("markerSizePerLineWidth","float",Na),t.uniforms.add(new J("markerScale",({markerScale:r})=>r)),a&&t.uniforms.add(new we("groundMetersToScreenRatio",r=>1/(r.screenToPlanarDistanceRatio*r.planarDistanceToGroundRatio))),t.code.add(s`
      float getLineWidth(${O(i,"vec3 pos")}) {
        float size = max(getSize(${O(i,"pos")}), 1.0);
        return ${O(a,"size * pixelRatio * groundMetersToScreenRatio","size * pixelRatio")};
      }

      float getScreenMarkerSize(float lineWidth) {
        return markerScale * markerSizePerLineWidth * lineWidth;
      }
    `),t.constants.add("maxSegmentLengthFraction","float",.45).uniforms.add(new we("perRenderPixelRatio",r=>r.camera.perRenderPixelRatio)).code.add(s`
      bool areWorldMarkersHidden(vec3 pos, vec3 other) {
        vec3 midPoint = mix(pos, other, 0.5);
        float distanceToCamera = length(midPoint);
        float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
        float worldMarkerSize = getScreenMarkerSize(getLineWidth(${O(i,"pos")})) * screenToWorldRatio;
        float segmentLen = length(pos - other);
        return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
      }

      float getWorldMarkerSize(vec3 pos) {
        float distanceToCamera = length(pos);
        float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
        return getScreenMarkerSize(getLineWidth(${O(i,"pos")})) * screenToWorldRatio;
      }
    `)}function Ma(n){n.include(la),n.fragment.uniforms.add(new zi("inverseViewMatrix",(e,t)=>{const i=fi(ja,t.camera.viewMatrix,e.localOrigin);return Xi(i,i)})).code.add(s`vec4 reconstructLocalPosition(vec2 coord, float linearDepth) {
vec4 cameraSpace = vec4(reconstructPosition(coord, linearDepth), 1.0);
return inverseViewMatrix * cameraSpace;
}`)}const ja=hi();function Ua(n,e){n.include(ca,e),n.include(Ma),n.fragment.include(Cn),n.fragment.code.add(s`float readFragmentShadow(float additionalAmbientScale) {
vec3 pos = reconstructLocalPosition(gl_FragCoord.xy, linearizeDepth(gl_FragCoord.z)).xyz;
return readShadow(additionalAmbientScale, pos);
}`)}const ka=Te(1),Ba=Te(1);function Ha(n,e){const{animation:t}=e,{varyings:i,vertex:a,fragment:r}=n;i.add("vTimeStamp","float"),i.add("vFirstTime","float"),i.add("vLastTime","float"),i.add("vTransitionType","float"),a.main.add(s`vTimeStamp = animatedAlphaTimeStamps.x;
vFirstTime = animatedAlphaTimeStamps.y;
vLastTime = animatedAlphaTimeStamps.z;
vTransitionType = animatedAlphaTimeStamps.w;`),t===3&&r.constants.add("decayRate","float",2.3),r.code.add(s`
    float getTrailOpacity(float x) {
      if (x < 0.0) {
        return 0.0;
      }

      ${Ja(t)}
    }`),r.uniforms.add(new J("timeElapsed",l=>l.timeElapsed),new J("trailLength",l=>l.trailLength),new J("speed",l=>l.animationSpeed),new On("startEndTime",l=>Q(Ga,l.startTime,l.endTime))),r.constants.add("fadeInTime","float",Ba),r.constants.add("fadeOutTime","float",ka),r.constants.add("incomingTransition","int",0),r.constants.add("outgoingTransition","int",2),r.code.add(s`float fadeIn(float x) {
return smoothstep(0.0, fadeInTime, x);
}
float fadeOut(float x) {
return isinf(fadeOutTime) ? 1.0 : smoothstep(fadeOutTime, 0.0, x);
}
void updateAlphaIf(inout float alpha, bool condition, float newAlpha) {
alpha = condition ? min(alpha, newAlpha) : alpha;
}
float animatedAlpha() {
float startTime = startEndTime[0];
float endTime = startEndTime[1];
float totalTime = vLastTime - vFirstTime;
float actualFadeOutTime = min(fadeOutTime * speed, trailLength);
float longStreamlineThreshold = (fadeInTime + 1.0) * speed + actualFadeOutTime;
bool longStreamline = totalTime > longStreamlineThreshold;
float totalTimeWithFadeOut = longStreamline && actualFadeOutTime != trailLength ? totalTime : totalTime + actualFadeOutTime;
float fadeOutStartTime = longStreamline ? totalTime - actualFadeOutTime : totalTime;
float originTime =  -vFirstTime;
float actualEndTime = int(vTransitionType) == outgoingTransition ? min(endTime, startTime + vLastTime / speed) : endTime;
if (speed == 0.0) {
float alpha = getTrailOpacity((totalTimeWithFadeOut - (vTimeStamp - vFirstTime)) / trailLength);
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
return alpha;
}
float relativeStartTime = mod(startTime, totalTimeWithFadeOut);
float shiftedTimeElapsed = timeElapsed - relativeStartTime + originTime;
float headRelativeToFirst = mod(shiftedTimeElapsed * speed, totalTimeWithFadeOut);
float vRelativeToHead = headRelativeToFirst - originTime - vTimeStamp;
float vAbsoluteTime = timeElapsed - vRelativeToHead / speed;
if (startTime > timeElapsed) {
return 0.0;
}
float alpha = getTrailOpacity(vRelativeToHead / trailLength);
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, int(vTransitionType) != incomingTransition, step(startTime, vAbsoluteTime));
updateAlphaIf(alpha, headRelativeToFirst > fadeOutStartTime, fadeOut((headRelativeToFirst - fadeOutStartTime) / speed));
alpha *= fadeIn(vTimeStamp - vFirstTime);
return alpha;
}`)}function Ja(n){switch(n){case 2:return"return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;";case 3:return`float cutOff = exp(-decayRate);
        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);`;default:return"return 1.0;"}}const Ga=B();function Ya(n){switch(n.elementType){case"float":switch(n.elementCount){case 1:return s`float`;case 2:return s`vec2`;case 3:return s`vec3`;case 4:return s`vec4`;case 9:return s`mat3`;default:n.elementCount}break;case"int":switch(n.elementCount){case 1:return s`int`;case 2:return s`ivec2`;case 3:return s`ivec3`;case 4:return s`ivec4`;case 9:throw new Error("Invalid element count 9 for type int");default:n.elementCount}break;case"uint":switch(n.elementCount){case 1:return s`uint`;case 2:return s`uvec2`;case 3:return s`uvec3`;case 4:return s`uvec4`;case 9:throw new Error("Invalid element count 9 for type uint");default:n.elementCount}break;default:n.elementType}throw new Error("unsupported field")}const Fi=new we("constNaN",()=>NaN,{supportsNaN:!0});let St=class extends $i{constructor(e){super(),this.supportNaN=e}};function Xa(n,e){const t=e?.supportNaN;t&&(n.uniforms.add(Fi),n.code.add(s`bool bitsEncodeFloat16NaN(highp uint bits) {
const highp uint nanExponent = 0x00007c00u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x000003ffu;
return exponent == nanExponent && mantissa != 0u;
}`)),n.code.add(s`
    mediump float unpackHalf1x16(highp uint bits) {
      ${O(t,s`
        if (bitsEncodeFloat16NaN(bits)) {
          return constNaN;
        }`)}
      return unpackHalf2x16(bits).x;
    }`),n.code.add(s`
    mediump vec2 unpackHalf2x16NaNSupport(highp uint bits) {
      vec2 result = unpackHalf2x16(bits);
      ${O(t,s`
        if (bitsEncodeFloat16NaN(bits)) {
          result.x = constNaN;
        }
        if (bitsEncodeFloat16NaN(bits >> ${s.uint(oe[2])})) {
          result.y = constNaN;
        }
        `)}
      return result;
    }`)}function qa(n,e){const t=e?.supportNaN;t&&(n.uniforms.add(Fi),n.code.add(s`bool bitsEncodeFloat32NaN(highp uint bits) {
const highp uint nanExponent = 0x7f800000u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x007fffffu;
return exponent == nanExponent && mantissa != 0u;
}`)),n.code.add(s`
    highp float unpackFloat1x32(highp uint bits) {
      ${O(t,s`
        if (bitsEncodeFloat32NaN(bits)) {
          return constNaN;
        }`)}
      return uintBitsToFloat(bits);
    }`)}function Za(n){n.code.add(s`mediump int unpackInt1x16(highp uint bits) {
highp uint signExtendedBits = (bits & 0x8000u) != 0u ? (bits | 0xffff0000u) : bits;
return int(signExtendedBits);
}`)}function Ka(n,e){const{fieldType:t}=n;return`${(0,er[t])(tr(n,e))}`}function Re(n,e){const t=[];for(const i of n){const a=s`unpackFloat1x32(${i})`;t.push(a)}return t.join(e)}h([g()],St.prototype,"supportNaN",void 0);const Vi=n=>s`${n[0]}`,Bt=n=>{const e=n[0],t=s`uvec4(${s.uint(oe[0])}, ${s.uint(oe[1])}, ${s.uint(oe[2])}, ${s.uint(oe[3])})`,i=s`uvec4(${s.hexuint(Ai[1])})`;return s`((uvec4(${e}) >> ${t}) & ${i})`},Qa=n=>s`(float(${Vi(n)})/${s.float(mi)})`,er={u8:Vi,u32:n=>s`${n[0]}`,vec4u32:n=>s`uvec4(${n.join(", ")})`,unorm8:Qa,vec4unorm8:n=>s`(vec4(${Bt(n)})/${s.float(mi)})`,snorm16:n=>s`unpackSnorm2x16(${n[0]}).x`,vec2snorm16:n=>s`unpackSnorm2x16(${n[0]})`,f16:n=>s`unpackHalf1x16(${n[0]})`,vec4f16:n=>s`vec4(unpackHalf2x16NaNSupport(${n[0]}), unpackHalf2x16NaNSupport(${n[1]}))`,f32:n=>s`unpackFloat1x32(${n[0]})`,vec4u8:Bt,vec2f32:n=>s`vec2(${Re(n,", ")})`,vec3f32:n=>s`vec3(${Re(n,", ")})`,vec4f32:n=>s`vec4(${Re(n,", ")})`,mat3f32:n=>s`mat3(${Re(n,`,
`)})`};function tr(n,e){const{byteOffset:t,byteSize:i}=n,a=e.channelByteStride,r=e.byteStride,l=Math.ceil(i/Ke),o=ir[e.channels],c=new Array;for(let d=0;d<l;++d){const p=d*Ke,u=t+p,S=i-p,v=Math.min(S,Ke);let m=0;const $=new Array;for(;m<v;){const P=u+m,f=Math.floor(P/r),x=P%r,z=Math.floor(x/a),T=x%a,D=a-T,y=v-m,C=Math.min(D,y),L=s`texel${s.int(f)}${o[z]}`,b=C===4?"":s` & ${s.hexuint(Ai[C])}`,R=T===0?"":s` >> ${s.uint(oe[T])}`,w=s`((${L}${R})${b})`,E=m===0?"":s` << ${s.uint(oe[m])}`,V=s`(${w})${E}`;$.push(V),m+=C}c.push(s`(${$.join(" | ")})`)}return c}const Ke=4,oe=[0,8,16,24],Ai=[0,255,65535,16777215,4294967295],ir={1:[s``],2:[s`.x`,s`.y`],4:[s`.x`,s`.y`,s`.z`,s`.w`]},nr=new St(!0),ar=new St(!1);let rr=class{constructor(e,t){this._shader=e,this._namespace=t,this._used=new Map}getItemSuffix(e){return e===0?"":`${e<0?"Minus":"Plus"}${Math.abs(e)}`}getItemDataName(e=0){return`${this._namespace}ItemData${this.getItemSuffix(e)}`}getStructName(e=0){return`${this._namespace}TextureBackedBufferItemData${this.getItemSuffix(e)}`}getFetchName(e=0){return`${this._namespace}fetchTextureBackedBufferItemData${this.getItemSuffix(e)}`}getStrideName(){return`${this._namespace}tbbStride`}getTextureAttribute(e,t=0){const i=this._used,a=this.getItemDataName(t);let r=i.get(t);return r==null&&(r=new Set,i.set(t,r)),r.add(e),s`${a}.${e}`}generateVertexCode(e){const{_shader:t,_used:i}=this,a=new Wt(t.vertex);for(const r of i.keys())this._generateFetchFunction(r,a,e);return a.generateSource()}generateVertexMainCode(e){const{_shader:t,_used:i}=this,a=new Wt(t.vertex);for(const r of i.keys())this._generateFetchFunctionCall(r,a,e);return a.generateSource()}_generateFetchFunctionCall(e,t,i){const{itemIndexExpression:a}=i,r=this._used.get(e);if(r==null||r.size===0)return;const l=this.getItemDataName(e),o=this.getFetchName(e);t.add(s`${l} = ${o}(${a});`)}_getIndexOffset(e=0){return e===0?s``:s`${e<0?"-":"+"}${s.uint(Math.abs(e))}`}_generateFetchFunction(e,t,i){const{bufferUniform:a,layout:r}=i,{texelFormatInfo:l}=r,o=this._used.get(e);if(o==null||o.size===0)return;const c=this.getStrideName(),d=this.getStructName(e),p=this.getItemDataName(e),u=this.getFetchName(e),S=this._getIndexOffset(e),v=new Array;for(const f of r.fields.values())o.has(f.name)&&v.push(f);if(v.length===0)return;const m=[];for(let f=0;f<r.texelStride;++f)m.push(!1);for(const f of v)for(let x=0;x<f.numTexels;++x)m[f.startTexel+x]=!0;t.add(s`
  struct ${d} {`);for(const f of v)t.add(s`\t${Ya(f)} ${f.name};`);t.add(s`};`),t.add(s`\n${d} ${u}( highp uint baseIndex ) {
    ${d} itemData;
    highp uint index = (baseIndex${S}) * ${c};
    highp uint rowWidth = uint(textureSize(${a.name}, 0).x);
    int coordX = int(index % rowWidth);
    int coordY = int(index / rowWidth);\n`);const $=or[l.channels],P=lr[l.channels];for(let f=0;f<m.length;++f)m[f]!==!1&&t.add(s`highp ${$} texel${s.int(f)} = texelFetch(${a.name}, ivec2(coordX + ${s.int(f)}, coordY), 0)${P};`);for(const f of v)t.add(s`itemData.${f.name} = ${Ka(f,l)};`);t.add(s`return itemData;\n}`),t.add(s`${d} ${p};`)}};class sr{constructor(e){this._parameters=e,this.moduleId=qi(),this.namespace=`_tbb_${this.moduleId}_`}createBuilder(e,t){let i=null;const a=r=>{i=this._buildTextureBackedBufferShaderCode(r)};return t?e.include(a,t):e.include(a),K(i!=null,"Valid builder expected."),i}_buildTextureBackedBufferShaderCode(e){const{namespace:t,_parameters:i}=this,{bufferUniform:a,layout:r}=i,l=i.enableNaNSupport?nr:ar,{vertex:o}=e,c=new rr(e,t);o.include(qa,l),o.include(Xa,l),o.include(Za);const d=c.getStrideName(),p=c.getStructName(),u=c.getFetchName(),S=c.getItemDataName();for(const v of[d,p,u,S])K(v.length<1024,"Identifiers do not have a valid length");return o.constants.add(d,"uint",r.texelStride),o.uniforms.add(a),o.code.add(()=>c.generateVertexCode(i)),o.main.add(()=>c.generateVertexMainCode(i)),c}}const or={1:s`uint`,2:s`uvec2`,4:s`uvec4`},lr={1:s`.x`,2:s`.xy`,4:""};let cr=class extends vn{constructor(e,t){super(e,"usampler2D",2,(i,a,r)=>i.bindTexture(e,t(a,r)))}};function Ri(n){return va().u32("textureElementIndex",{integer:!0}).vec2f16("lineParameters")}const pr=[{type:"vec3f32",name:"position"},{type:"f32",name:"u0"}];function Ii(n){const e=[...pr];return n.hasVVColor?e.push({type:"f32",name:"colorFeatureAttribute"}):e.push({type:"vec4unorm8",name:"color"}),n.hasVVSize?e.push({type:"f32",name:"sizeFeatureAttribute"}):e.push({type:"f32",name:"size"}),n.hasVVOpacity&&e.push({type:"f32",name:"opacityFeatureAttribute"}),Pi()&&e.push({type:"vec4unorm8",name:"olidColor"}),n.hasAnimation&&e.push({type:"vec4f16",name:"timeStamps"}),new Pa(e)}const dr=new cr("componentTextureBuffer",n=>n.textureBuffer);function ur(n){return new sr({layout:Ii(n),itemIndexExpression:"textureElementIndex",bufferUniform:dr})}const Ni=1;function fr(n){const e=new za,{attributes:t,varyings:i,vertex:a,fragment:r}=e,{applyMarkerOffset:l,draped:o,shadingEnabled:c,output:d,capType:p,stippleEnabled:u,falloffEnabled:S,wireframe:v,innerColorEnabled:m,hasAnimation:$,hasScreenSizePerspective:P,worldSized:f,imagePattern:x}=n,z=p===2,T=u&&z,D=S||T,y=u||z,C=ur(n).createBuilder(e,n);a.inputs.add("position",()=>C.getTextureAttribute("position")),n.hasVVSize?a.inputs.add("sizeFeatureAttribute",()=>C.getTextureAttribute("sizeFeatureAttribute")):a.inputs.add("size",()=>C.getTextureAttribute("size")),n.hasVVOpacity&&a.inputs.add("opacityFeatureAttribute",()=>C.getTextureAttribute("opacityFeatureAttribute")),n.hasVVColor?a.inputs.add("colorFeatureAttribute",()=>C.getTextureAttribute("colorFeatureAttribute")):a.inputs.add("color",()=>C.getTextureAttribute("color")),r.include(pa),e.include(Oa,n),e.include(Va,n),d===11?(e.varyings.add("objectAndLayerIdColorVarying","vec4"),a.code.add(s`
      vec4 getOlidColor() {
        return ${C.getTextureAttribute("olidColor")};
      }

      void forwardObjectAndLayerIdColor() {
        objectAndLayerIdColorVarying = getOlidColor();
      }
    `),r.code.add(s`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)):(a.code.add(s`void forwardObjectAndLayerIdColor() {}`),r.code.add(s`void outputObjectAndLayerIdColor() {}`));const L=l&&!o;if(L&&e.include(Wa,n),wn(a,n),o&&(f||u)){const b=f?"groundMetersToScreenRatio":"planarDistanceToScreenRatio";a.uniforms.add(new we(b,R=>1/(R.screenToPlanarDistanceRatio*(f?R.planarDistanceToGroundRatio:1))))}return a.uniforms.add(_n,Ln,En,new J("miterLimit",b=>b.join!=="miter"?0:b.miterLimit)),a.constants.add("LARGE_HALF_FLOAT","float",65500),a.constants.add("EPS","float",.001),a.constants.add("NUM_JOIN_SUBDIVISIONS","float",n.numJoinSubdivisions),t.add("textureElementIndex","uint"),t.add("lineParameters","vec2"),i.add("vColor","vec4"),i.add("vpos","vec3",{invariant:!0}),i.add("vLineDistance","float"),i.add("vLineWidth","float"),u||(i.add("vIsInsideJoin","int"),i.add("vStretchFactor","float"),i.add("vJoinCenterLineSDFs","vec2"),i.add("vSubdivisionFactor","float")),u&&i.add("vLineSizeInv","float"),D&&i.add("vLineDistanceNorm","float"),z&&(i.add("vSegmentSDF","float"),i.add("vReverseSegmentSDF","float")),a.code.add(s`vec3 perpendicular(vec3 v) {
return vec3(v.y, -v.x, 0.0);
}
float nearPlaneInterpolationFactor(float nearPlaneDistance, vec4 start, vec4 end) {
return (-nearPlaneDistance - start.z) / (end.z - start.z);
}
vec3 rotateZ(vec3 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return vec3(m * v.xy, v.z);
}`),a.code.add(s`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
posNdc.z /= posNdc.w;
return posNdc;
}`),a.code.add(s`void clip(
inout vec4 pos,
inout vec4 prev,
inout vec4 next,
bool isStartVertex
) {
float adjustedNearPlaneDistance = nearFar[0] * 0.99;
if (pos.z > -nearFar[0]) {
if (!isStartVertex) {
if (prev.z < -nearFar[0]) {
pos = mix(prev, pos, nearPlaneInterpolationFactor(adjustedNearPlaneDistance, prev, pos));
next = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
} else {
if (next.z < -nearFar[0]) {
pos = mix(pos, next, nearPlaneInterpolationFactor(adjustedNearPlaneDistance, pos, next));
prev = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
}
} else {
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, nearPlaneInterpolationFactor(adjustedNearPlaneDistance, pos, prev));
}
if (next.z > -nearFar[0]) {
next = mix(next, pos, nearPlaneInterpolationFactor(adjustedNearPlaneDistance, next, pos));
}
}
}`),vt(a),a.constants.add("aaWidth","float",u?0:1),a.main.add(s`
    vec3 position = ${C.getTextureAttribute("position")};
    float u0 = ${C.getTextureAttribute("u0")};
    ${O(f,s`
        float prevU0 = ${C.getTextureAttribute("u0",-1)};
        float nextU0 = ${C.getTextureAttribute("u0",1)};
      `)}

    // unpack values from vertex type
    float vertexType = abs(lineParameters.y);
    float lineSide = sign(lineParameters.y);
    bool isStartVertex = vertexType == 2.0 || vertexType == 4.0;
    vec3 prevPosition = ${C.getTextureAttribute("position",-1)};
    vec3 nextPosition = ${C.getTextureAttribute("position",1)};

    float coverage = 1.0;

    // Check for special value of lineParameters.y which is used by the Renderer when graphics are removed before the
    // VBO is recompacted. If this is the case, then we just project outside of clip space.
    if (lineParameters.y == 0.0) {
      gl_Position = ${xa};
    }
    else {
      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);

      bool isJoin = vertexType < 3.0;
  `),L&&a.main.add(s`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos.xyz, other.xyz);
if (!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos.xyz) * 0.5;
}`),e.include(wa),a.code.add(s`
    vec2 computeJoinAndCapDisplacement(
      bool isJoin,
      bool isStartVertex,
      inout vec3 left,
      inout vec3 right,
      float lineSide,
      float lineWidth,
      float subdivisionFactor,
      float perspectiveDivisor
    ) {
      float leftLen = length(left);
      float rightLen = length(right);
      left = leftLen > EPS ? left / leftLen : vec3(0.0);
      right = rightLen > EPS ? right / rightLen : vec3(0.0);

      vec3 capDisplacementDir = vec3(0.0);
      vec3 joinDisplacementDir = vec3(0.0);
      float displacementLen = lineWidth;
      float miterDisplacementLen = lineWidth;
      float innerDisplacementLen = lineWidth;
      bool isOutside = false;

      if (isJoin) {
        // Determine if the vertex is on the outside or inside of the join.
        isOutside = (left.x * right.y - left.y * right.x) * lineSide > 0.0;

        // Compute the miter join position first.
        vec3 joinDirection = normalize(left + right);
        joinDisplacementDir = perpendicular(joinDirection);

        // Compute the miter stretch.
        if (leftLen > EPS && rightLen > EPS) {
          float nDotSeg = dot(joinDisplacementDir, left);
          displacementLen /= length(nDotSeg * left - joinDisplacementDir);
          miterDisplacementLen = displacementLen;

          innerDisplacementLen = min(displacementLen, min(leftLen, rightLen) / abs(nDotSeg));

          // Limit displacement of inner vertices.
          if (!isOutside) {
            displacementLen = innerDisplacementLen;
          }
        }

        ${O(!u,s`
            // Compute stretch compensation for feathering.
            if (subdivisionFactor > 0.0) {
              vIsInsideJoin = 1;
            }
            vSubdivisionFactor = isOutside ? subdivisionFactor : 0.5;

            if (miterDisplacementLen > miterLimit * lineWidth) {
              vec2 leftScreenDir = left.xy;
              vec2 rightScreenDir = right.xy;
              float leftScreenLen = length(leftScreenDir);
              float rightScreenLen = length(rightScreenDir);

              if (leftScreenLen > EPS && rightScreenLen > EPS) {
                leftScreenDir /= leftScreenLen;
                rightScreenDir /= rightScreenLen;

                /**
                 * Feathering AA needs special considerations on join triangles because these can get stretched a lot at acute angles.
                 * We use the triangle height to determine by how much they get stretched.
                 */
                float theta = acos(clamp(dot(leftScreenDir, rightScreenDir), -1.0, 1.0));
                /**
                 * The argument of cos here is half the angle of a join triangle.
                 * We start with one triangle, and every subdivision adds another triangle.
                 */
                float subdividedTriangleHeight = (innerDisplacementLen + lineWidth) * cos(theta / (2.0 + 2.0 * NUM_JOIN_SUBDIVISIONS));
                float bevelTriangleHeight = innerDisplacementLen + lineWidth * cos(theta * 0.5);
                float triangleHeight = NUM_JOIN_SUBDIVISIONS > 0.0 ? subdividedTriangleHeight : bevelTriangleHeight;
                vStretchFactor = noPerspectiveWrite(max(triangleHeight / (2.0 * lineWidth), 1.0), perspectiveDivisor);
              }
            }
          `)}

        if (isOutside && displacementLen > miterLimit * lineWidth) {
          ${O(n.roundJoins,s`
              vec3 startDir = perpendicular(leftLen < EPS ? right : left);
              vec3 endDir = perpendicular(rightLen < EPS ? left : right);
              float factor = ${u?s`min(1.0, subdivisionFactor * ((NUM_JOIN_SUBDIVISIONS + 1.0) / NUM_JOIN_SUBDIVISIONS))`:s`subdivisionFactor`};

              float rotationAngle = acos(clamp(dot(startDir.xy, endDir.xy), -1.0, 1.0));
              joinDisplacementDir = rotateZ(startDir, -lineSide * factor * rotationAngle);
            `,s`
              /**
               * Convert to bevel join if miterLimit is exceeded.
               * Here vertices with a subdivisionFactor > 0 are either START vertices or
               * an additional END vertex to fix line pattern interpolation.
               * The additional vertex is considered to be the END of the previous segment.
               * However, it is pushed to the position of the START of the next segment,
               * so that the entire bevel join will be part of the first segment, pattern-wise.
               */
              vec3 startDir = perpendicular(leftLen < EPS ? right : left);
              vec3 endDir = perpendicular(rightLen < EPS ? left : right);

              ${O(u,s`joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? endDir : startDir;`,s`joinDisplacementDir = mix(startDir, endDir, subdivisionFactor);`)}
            `)}
          displacementLen = lineWidth;
        }
      } else {
        joinDisplacementDir = perpendicular(isStartVertex ? right : left);
        ${p!==0?s`capDisplacementDir = vec3((isStartVertex ? -right : left).xy, 0.0);`:""}
      }

      return (joinDisplacementDir.xy * lineSide + capDisplacementDir.xy) * displacementLen;
    }
  `),a.main.add(s`
      clip(pos, prev, next, isStartVertex);

      vec3 clippedPos = pos.xyz;
      vec3 clippedCenter = mix(pos.xyz, isStartVertex ? next.xyz : prev.xyz, 0.5);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);

      vec3 left = (pos.xyz - prev.xyz);
      vec3 right = (next.xyz - pos.xyz);

      float lineSize = getSize(${O(P,"clippedPos")});
      ${O(u&&P,"float patternLineSize = getSize(clippedCenter);")}
      ${O(u&&!P,"float patternLineSize = lineSize;")}

      ${O(f,s`
          float lineSizeScreen = lineSize * groundMetersToScreenRatio;
          if (lineSizeScreen < 1.0) {
            coverage = lineSizeScreen;
            lineSizeScreen = 1.0;
          }

          lineSizeScreen += aaWidth;
          float lineWidth = lineSizeScreen * pixelRatio;
        `,s`
          if (lineSize < 1.0) {
            coverage = lineSize; // convert sub-pixel coverage to alpha
            lineSize = 1.0;
          }

          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio;
        `)}

      vLineWidth = noPerspectiveWrite(lineWidth, pos.w);
      ${u?s`vLineSizeInv = noPerspectiveWrite(1.0 / lineSize, pos.w);`:""}
  `),y&&a.main.add(s`
      float isEndVertex = float(!isStartVertex);
      vec3 segmentOrigin = mix(pos.xyz, prev.xyz, isEndVertex);
      vec3 segment = mix(right, left, isEndVertex);
      ${z?s`vec3 segmentEnd = mix(next.xyz, pos.xyz, isEndVertex);`:""}
    `),a.main.add(s`
    ${O(!u,s`
        vIsInsideJoin = 0;
        vStretchFactor = 1.0;
        vSubdivisionFactor = 0.0;
        vJoinCenterLineSDFs = vec2(LARGE_HALF_FLOAT);
      `)}

    vec2 displacementXY = computeJoinAndCapDisplacement(
      isJoin,
      isStartVertex,
      left,
      right,
      lineSide,
      lineWidth,
      lineParameters.x,
      pos.w
    );
    vec3 segmentDirection = isStartVertex ? right : left;

    /**
     * To prevent z-fighting between layers, we also adjust the z value.
     * We want to ensure that the orientation of the final triangles is the same, regardless of the line width.
     * To do so, the below formula projects the xy displacement onto the original segment direction
     * to find the z-offset necessary so the triangle orientation is independent of the width.
     */
    float displacementZ = dot(displacementXY, segmentDirection.xy) / dot(segmentDirection.xy, segmentDirection.xy) * segmentDirection.z;
    vec3 displacement = vec3(displacementXY, displacementZ);

    float lineDistNorm = noPerspectiveWrite(lineSide, pos.w);

    vLineDistance = lineWidth * lineDistNorm;
    ${D?s`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xyz += displacement;
  `),u||a.main.add(s`if (isJoin) {
vec2 joinCenterToVertex = displacementXY;
vec2 leftCenterlineDir = left.xy;
vec2 rightCenterlineDir = right.xy;
float leftCenterlineLen = length(leftCenterlineDir);
float rightCenterlineLen = length(rightCenterlineDir);
leftCenterlineDir = leftCenterlineLen > EPS ? leftCenterlineDir / leftCenterlineLen : vec2(1.0, 0.0);
rightCenterlineDir = rightCenterlineLen > EPS ? rightCenterlineDir / rightCenterlineLen : leftCenterlineDir;
vJoinCenterLineSDFs = noPerspectiveWrite(
vec2(
dot(vec2(rightCenterlineDir.y, -rightCenterlineDir.x), joinCenterToVertex),
dot(vec2(leftCenterlineDir.y, -leftCenterlineDir.x), joinCenterToVertex)
),
pos.w
);
}`),z&&a.main.add(s`vec2 segmentDir = normalize(segment.xy);
vSegmentSDF = noPerspectiveWrite((isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin.xy, segmentDir)), pos.w);
vReverseSegmentSDF = noPerspectiveWrite((isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd.xy, -segmentDir)), pos.w);`),u&&(o?a.main.add(s`float stippleDistanceToScreenRatio = ${f?"groundMetersToScreenRatio":"planarDistanceToScreenRatio"};`):a.main.add(s`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float stippleDistanceToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),a.main.add(s`
      float segmentLengthScreenDouble = length(segment.xy);
      float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
      float discreteStippleDistanceToScreenRatio = discretizeStippleDistanceToScreenRatio(stippleDistanceToScreenRatio);
      float segmentLengthRender = ${O(f,s`abs(mix(nextU0 - u0, u0 - prevU0, isEndVertex))`,s`length(mix(nextPosition - position, position - prevPosition, isEndVertex))`)};

      ${O(!o||f,s`
          float segmentStartRender = ${O(f,s`mix(u0, prevU0, isEndVertex)`,s`mix(u0, u0 - segmentLengthRender, isEndVertex)`)};
        `)}

      vStipplePatternStretch = stippleDistanceToScreenRatio / discreteStippleDistanceToScreenRatio;
    `),o?a.main.add(s`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteStippleDistanceToScreenRatio / stippleDistanceToScreenRatio;
float startPseudoScreen = u0 * discreteStippleDistanceToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):a.main.add(s`float startPseudoScreen = segmentStartRender * discreteStippleDistanceToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteStippleDistanceToScreenRatio;`),a.uniforms.add(new J("stipplePatternPixelSize",b=>Li(b))),a.main.add(s`
      float patternLength = patternLineSize * stipplePatternPixelSize;

      ${O(f,s`
          vStippleDistanceLimits = vec2(segmentStartRender, segmentStartRender + segmentLengthRender);
          vStipplePatternStretch = 1.0;

          ${O(x,s`
              // The v-coordinate used in case of an image pattern.
              bool isLeft = lineSide < 0.0;
              vStippleV = isLeft ? 0.0 : 1.0;
            `)}
        `,s`
          // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the
          // fragment shader
          vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
        `)}

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of
      // joins)
      if (segmentLengthScreenDouble >= EPS) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1]
        // at the original vertex positions, and slightly outside of that range at the displaced positions
        vec3 stippleDisplacement = pos.xyz - segmentOrigin;
        float stippleDisplacementFactor = dot(segment.xy, stippleDisplacement.xy) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length to really represent the screen
      // distance.
      vStippleDistanceLimits = noPerspectiveWrite(vStippleDistanceLimits, pos.w);
      vStippleDistance = noPerspectiveWrite(vStippleDistance, pos.w);

      // Disable stipple distance limits on caps
      vStippleDistanceLimits = isJoin ?
                                 vStippleDistanceLimits :
                                 isStartVertex ?
                                  vec2(-1e34, vStippleDistanceLimits.y) :
                                  vec2(vStippleDistanceLimits.x, 1e34);
    `)),a.main.add(s`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;
      pos.z = pos.z * pos.w;

      vColor = getColor();
      vColor.a = noPerspectiveWrite(vColor.a * coverage, pos.w);

      ${v&&!o?"pos.z -= EPS * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),e.include(Fn,n),e.include(_i),r.include(Vn),r.include(An),r.include(Rn,n),r.main.add("discardBySlice(vpos);"),u||r.code.add(s`float lineFeatheringFactor(float lineWidth, float lineDistance) {
float stretchFactor = vIsInsideJoin == 1 ? noPerspectiveRead(vStretchFactor) : 1.0;
float featherWidth = 2.0;
float featherStartDistance = max(lineWidth - featherWidth / stretchFactor, 0.0);
float straightFeatherStartDistance = max(lineWidth - featherWidth, 0.0);
float value = abs(lineDistance);
float feather = (value - featherStartDistance) / (lineWidth - featherStartDistance);
vec2 joinCenterSDFs = noPerspectiveRead(vJoinCenterLineSDFs);
float joinCenterDistance = abs(vSubdivisionFactor > 0.5 ? joinCenterSDFs.x : joinCenterSDFs.y);
float straightFeather = (joinCenterDistance - straightFeatherStartDistance) / (lineWidth - straightFeatherStartDistance);
feather = vIsInsideJoin == 1 ? max(feather, straightFeather) : feather;
return 1.0 - clamp(feather, 0.0, 1.0);
}`),r.main.add(s`
    float lineWidth = noPerspectiveRead(vLineWidth);
    float lineDistance = noPerspectiveRead(vLineDistance);
    ${O(D,s`float lineDistanceNorm = noPerspectiveRead(vLineDistanceNorm);`)}
  `),v?r.main.add(s`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(z&&r.main.add(s`float sdf = noPerspectiveRead(min(vSegmentSDF, vReverseSegmentSDF));
vec2 fragmentPosition = vec2(min(sdf, 0.0), lineDistance);
float fragmentRadius = length(fragmentPosition);
float fragmentCapSDF = (fragmentRadius - lineWidth) * 0.5;
float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);
if (capCoverage < alphaCutoff) {
discard;
}`),T?r.main.add(s`vec2 stipplePosition = vec2(
min(getStippleSDF() * 2.0 - 1.0, 0.0),
lineDistanceNorm
);
float stippleRadius = length(stipplePosition * lineWidth);
float stippleCapSDF = (stippleRadius - lineWidth) * 0.5;
float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
float stippleAlpha = step(alphaCutoff, stippleCoverage);`):r.main.add(s`float stippleAlpha = getStippleAlpha(lineWidth);`),d!==11&&r.main.add(s`discardByStippleAlpha(stippleAlpha, alphaCutoff);`),r.uniforms.add(new ft("intrinsicColor",b=>b.color)).main.add(s`vec4 color = intrinsicColor * vColor;
color.a = noPerspectiveRead(color.a);`),m&&r.uniforms.add(new ft("innerColor",b=>b.innerColor??b.color),new J("innerWidth",(b,R)=>b.innerWidth*R.camera.pixelRatio)).main.add(s`float distToInner = abs(lineDistance) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),r.main.add(s`vec4 finalColor = blendStipple(color, stippleAlpha);`),S&&(r.uniforms.add(new J("falloff",b=>b.falloff)),r.main.add(s`finalColor.a *= pow(max(0.0, 1.0 - abs(lineDistanceNorm)), falloff);`)),u||r.main.add(s`finalColor.a *= lineFeatheringFactor(lineWidth, lineDistance);`),c&&(i.add("vnormal","vec3"),a.include(da,n),a.main.add(s`vnormal = getLocalUp(vpos, localOrigin);
forwardLinearDepthToReadShadow();`),e.include(Ua,n),gt(r,n),r.include(ua,n),r.include(fa,n),r.uniforms.add(ha,a.uniforms.get("localOrigin")).main.add(s`vec3 posWorld = vpos + localOrigin;
float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
float shadow = readFragmentShadow(additionalAmbientScale);
float ssao = evaluateAmbientOcclusionInverse();
vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
vec3 viewDirection = normalize(vpos - cameraPosition);
finalColor = vec4(evaluateSceneLighting(vnormal, finalColor.rgb, shadow, 1.0 - ssao, additionalLight, viewDirection, vnormal), finalColor.a);`)),$&&(a.main.add(`vec4 animatedAlphaTimeStamps = ${C.getTextureAttribute("timeStamps")};`),e.include(Ha,n),r.main.add("finalColor.a *= animatedAlpha();"))),r.main.add(s`outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),e}const hr=Object.freeze(Object.defineProperty({__proto__:null,build:fr,numRoundJoinSubdivisions:Ni},Symbol.toStringTag,{value:"Module"}));let mt=class extends In{constructor(n,e){super(n,e,Sa(Ri())),this.shader=new Nn(hr,()=>Zi(()=>import("./RibbonLine.glsl-BEe-nHbc.js").then(t=>t.R),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]))),this.ignoreUnused=!0,this.primitiveType=e.wireframe?yt.LINES:yt.TRIANGLE_STRIP}_makePipelineState(n,e){const{output:t,hasOccludees:i}=n;return Ae({blending:Un(t,!1,n.emissionDimmingPass),depthTest:jn(t),depthWrite:Mn(n),colorWrite:Ze,stencilWrite:i?_t:null,stencilTest:i?e?wt:Wn:null,polygonOffset:Fe(n)})}initializePipeline(n){if(n.occluder){const{hasOccludees:e}=n;this._occluderPipelineTransparent=Ae({blending:Mt,polygonOffset:Fe(n),depthTest:Lt,depthWrite:null,colorWrite:Ze,stencilWrite:null,stencilTest:e?kn:null}),this._occluderPipelineOpaque=Ae({blending:Mt,polygonOffset:Fe(n),depthTest:e?Lt:Et,depthWrite:null,colorWrite:Ze,stencilWrite:e?Hn:null,stencilTest:e?Bn:null}),this._occluderPipelineMaskWrite=Ae({blending:null,polygonOffset:Fe(n),depthTest:Et,depthWrite:null,colorWrite:null,stencilWrite:e?_t:null,stencilTest:e?wt:null})}return this._occludeePipeline=this._makePipelineState(n,!0),this._makePipelineState(n,!1)}getPipeline(n,e,t){if(t)return this._occludeePipeline;switch(n.occluder){case 11:return this._occluderPipelineTransparent??super.getPipeline(n,e,t);case 10:return this._occluderPipelineOpaque??super.getPipeline(n,e,t);default:n.occluder;case void 0:case null:return this._occluderPipelineMaskWrite??super.getPipeline(n,e,t)}}};mt=h([Ki("esri.views.3d.webgl-engine.shaders.RibbonLineTechnique")],mt);let j=class extends Ti{constructor(e){super(),this.spherical=e,this.emissionSource=0,this.pbrMode=0,this.draped=!1,this.shadingEnabled=!1,this.worldSized=!1,this.hasScreenSizePerspective=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVVOpacity=!1,this.hasOccludees=!1,this.occluder=!1,this.receiveShadows=!0,this.hasShadowHighlights=!1,this.receiveAmbientOcclusion=!0,this.receiveGlobalIllumination=!0,this.textureCoordinateType=0,this.hasVVInstancing=!1,this.hasSliceTranslatedView=!0,this.overlayEnabled=!1,this.snowCover=!1,this.renderOccluded=!1,this.useCustomDTRExponentForWater=!1,this.hasColorTexture=!1,this.useFillLights=!1}};h([g({count:8})],j.prototype,"emissionSource",void 0),h([g({count:8})],j.prototype,"pbrMode",void 0),h([g()],j.prototype,"draped",void 0),h([g()],j.prototype,"shadingEnabled",void 0),h([g()],j.prototype,"worldSized",void 0),h([g()],j.prototype,"hasScreenSizePerspective",void 0),h([g()],j.prototype,"hasVVSize",void 0),h([g()],j.prototype,"hasVVColor",void 0),h([g()],j.prototype,"hasVVOpacity",void 0),h([g()],j.prototype,"hasOccludees",void 0),h([g()],j.prototype,"occluder",void 0),h([g()],j.prototype,"receiveShadows",void 0),h([g()],j.prototype,"hasShadowHighlights",void 0),h([g()],j.prototype,"receiveAmbientOcclusion",void 0),h([g()],j.prototype,"receiveGlobalIllumination",void 0);const mr=16,gr=8;let N=class extends j{constructor(){super(...arguments),this.capType=0,this.animation=2,this.polygonOffsetIndex=0,this.numJoinSubdivisions=1,this.polygonOffset=0,this.writeDepth=!1,this.transparent=!1,this.enableOITOffset=!0,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.wireframe=!1,this.imagePattern=!1}get hasAnimation(){return this.animation!==0}};h([g({count:3})],N.prototype,"capType",void 0),h([g({count:4})],N.prototype,"animation",void 0),h([g({count:mr})],N.prototype,"polygonOffsetIndex",void 0),h([g({count:gr})],N.prototype,"numJoinSubdivisions",void 0),h([g({count:5})],N.prototype,"polygonOffset",void 0),h([g()],N.prototype,"writeDepth",void 0),h([g()],N.prototype,"transparent",void 0),h([g()],N.prototype,"enableOITOffset",void 0),h([g()],N.prototype,"stippleEnabled",void 0),h([g()],N.prototype,"stippleOffColorEnabled",void 0),h([g()],N.prototype,"stipplePreferContinuous",void 0),h([g()],N.prototype,"roundJoins",void 0),h([g()],N.prototype,"applyMarkerOffset",void 0),h([g()],N.prototype,"falloffEnabled",void 0),h([g()],N.prototype,"innerColorEnabled",void 0),h([g()],N.prototype,"wireframe",void 0),h([g()],N.prototype,"imagePattern",void 0);class ds extends Ca{constructor(e,t){super(e,Sr),this.produces=new Map([[2,i=>Sn(i)||Ce(i)&&this.parameters.renderOccluded===8],[3,i=>xn(i)],[10,i=>Ct(i)&&this.parameters.renderOccluded===8],[11,i=>Ct(i)&&this.parameters.renderOccluded===8],[4,i=>Ce(i)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[8,i=>Ce(i)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[18,i=>yn(i)]]),this._configuration=new N(t)}updateConfiguration(e){super.updateConfiguration(e);const{draped:t}=this._configuration,i=this.parameters.stipplePattern!=null&&this.parameters.stippleTexture!=null&&e.output!==10,a=i&&this.parameters.isImagePattern(),r=t&&this.parameters.usesWorldSizedWidth(a);this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.stippleEnabled=i,this._configuration.stippleOffColorEnabled=i&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=i&&this.parameters.stipplePreferContinuous,this._configuration.numJoinSubdivisions=Wi(this.parameters.join,i),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&yr(this.parameters.markerParameters),this._configuration.polygonOffsetIndex=this.parameters.polygonOffsetIndex,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.wireframe=this.parameters.wireframe,this._configuration.animation=this.parameters.animation,this._configuration.emissionSource=this.emissions?1:0,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective&&!r,this._configuration.worldSized=r,this._configuration.imagePattern=a}get visible(){return this.parameters.color[3]>=Oe||this.parameters.stipplePattern!=null&&(this.parameters.stippleOffColor?.[3]??0)>Oe}get emissions(){return this.parameters.emissiveStrength>0?this.parameters.renderOccluded!==8?2:1:0}setParameters(e,t){e.animation=this.parameters.animation,super.setParameters(e,t)}intersectRayDraped({attributes:e},t,i,a,r,l,o){if(!t.options.selectionMode)return;const c=this._getLineSize(e,!0),d=i[0],p=i[1],u=Ht(c,l,o,this.parameters.usesWorldSizedWidth());let S=Number.MAX_VALUE,v=0;for(const m of Jt(te,ve,this.parameters,e)){const $=d-te[0],P=p-te[1],f=ve[0]-te[0],x=ve[1]-te[1],z=dt((f*$+x*P)/(f*f+x*x),0,1),T=f*z-$,D=x*z-P,y=T*T+D*D;y<S&&(S=y,v=m)}S<u*u&&a(r.distance,r.renderDistance,r.normal,v)}intersectRay(e,t,i,a,r,l){const{options:o,camera:c,rayBegin:d,rayEnd:p}=i;if(!o.selectionMode||!e.visible||!c)return;if(!It(t))return void pt.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const u=e.attributes,S=u.get("position").data,v=this._getLineSize(u),m=et;Ue(m,i.point);const $=v*c.pixelRatio,P=He*c.pixelRatio,f=$/2+P;ee(ye[0],m[0]-f,m[1]+f,0),ee(ye[1],m[0]+f,m[1]+f,0),ee(ye[2],m[0]+f,m[1]-f,0),ee(ye[3],m[0]-f,m[1]-f,0);for(let T=0;T<4;T++)if(!c.unprojectFromRenderScreen(ye[T],Z[T]))return;Le(c.eye,Z[0],Z[1],it),Le(c.eye,Z[1],Z[2],nt),Le(c.eye,Z[2],Z[3],at),Le(c.eye,Z[3],Z[0],rt);let x=Number.MAX_VALUE,z=0;for(const T of this._forEachTransformedLineSegment(W,M,S,t,Be(this.parameters,u))){if(G(it,W)<0&&G(it,M)<0||G(nt,W)<0&&G(nt,M)<0||G(at,W)<0&&G(at,M)<0||G(rt,W)<0&&G(rt,M)<0)continue;const D=c.projectToRenderScreen(W,Se),y=c.projectToRenderScreen(M,xe);if(D==null||y==null)continue;if(D[2]<0&&y[2]>0){ze(Y,W,M);const b=c.frustum,R=-G(b[4],W)/je(Y,Pt(b[4]));if(ae(Y,Y,R),bt(W,W,Y),!c.projectToRenderScreen(W,D))continue}else if(D[2]>0&&y[2]<0){ze(Y,M,W);const b=c.frustum,R=-G(b[4],M)/je(Y,Pt(b[4]));if(ae(Y,Y,R),bt(M,M,Y),!c.projectToRenderScreen(M,y))continue}else if(D[2]<0&&y[2]<0)continue;D[2]=0,y[2]=0;const C=he(D,y,tt),L=pn(C,m);if(!(L>=x)){if(this.parameters.screenSizePerspective){const b=this.computeScreenSizePerspectiveWidth(C,W,M,m,c,v,P);if(L>=b*b)continue}x=L,q(Zt,W),q(Kt,M),z=T}}if(x<f*f){let T=Number.MAX_VALUE;if(dn(he(Zt,Kt,tt),he(d,p,Qt),X)){ze(X,X,d);const D=ue(X);ae(X,X,1/D),T=D/fe(d,p)}l(T,T,X,z)}}intersectScreenPolygon(e,t,i,a){const{options:r,camera:l,screenPolygonPrimitiveProcessor:o}=i;if(!r.selectionMode||!e.visible)return null;if(!It(t))return pt.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix"),null;const c=e.attributes,d=c.get("position").data,p=this._getLineSize(c),u=He,S=u*l.pixelRatio,v=new Ci(4);for(const m of this._forEachTransformedLineSegment(W,M,d,t,Be(this.parameters,c)))for(const[$,P]of o.processLineSegment(br,W,M)){if(!Jn(l,$,P,Se,xe))continue;const f=he(Se,xe,tt);let x=p/2+u;this.parameters.screenSizePerspective&&($t(et,Se,xe,.5),x=Math.max(x,this.computeScreenSizePerspectiveWidth(f,$,P,et,l,p,S)/l.pixelRatio)),l.renderToScreen(Se,Xt),l.renderToScreen(xe,qt),Ft(a,Xt,qt,x)&&(un(he($,P,Qt),l.eye,le),v.updateIfCloserFromValues(fe(l.eye,le),m,le,null))}return v}intersectScreenPolygonDraped({attributes:e},t,i,a,r,l){if(!i.options.selectionMode)return null;const o=Ht(this._getLineSize(e,!0),r,l,this.parameters.usesWorldSizedWidth());for(const c of Jt(te,ve,this.parameters,e,t))if(Ft(a,te,ve,o))return new Oi(c);return null}createBufferWriter(){return new xr(Ri(this.parameters),Ii(this.parameters),this.parameters)}createGLMaterial(e){return new vr(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}update(e){return!!this.parameters.hasAnimation&&(this.setParameters({timeElapsed:Qi(e.time)},!1),e.dt!==0)}computeScreenSizePerspectiveWidth(e,t,i,a,r,l,o){const c=fn(e,a);$t(le,t,i,c),re(Yt,le,r.viewMatrix);const d=ue(Yt),p=this.computeCameraAbsCosAngle(le,r,this._configuration.spherical);return Gt.update(p,d,this.parameters.screenSizePerspective,this.parameters.screenSizePerspectiveMinPixelReferenceSize),Gt.apply(l)*r.pixelRatio/2+o}computeCameraAbsCosAngle(e,t,i){return i?ke(X,e):ee(X,0,0,1),ze(Ie,e,t.eye),ke(Ie,Ie),Math.abs(je(X,Ie))}_getLineSize(e,t=!1){let i=this.parameters.width;if(this.parameters.vvSize){const a=e.get("sizeFeatureAttribute").data[0];Number.isNaN(a)?t&&(i*=this.parameters.vvSize.fallback[0]):i*=dt(this.parameters.vvSize.offset[0]+a*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else e.has("size")&&(i*=e.get("size").data[0]);return i}*_forEachTransformedLineSegment(e,t,i,a,r){const l=r?i.length-2:i.length-5;for(let o=0;o<l;o+=3){e[0]=i[o]+a[12],e[1]=i[o+1]+a[13],e[2]=i[o+2]+a[14];const c=(o+3)%i.length;t[0]=i[c]+a[12],t[1]=i[c+1]+a[13],t[2]=i[c+2]+a[14],yield o/3}}}class vr extends Xn{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures?.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const{stipplePattern:t}=this._material.parameters;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.getTechnique(mt,e)}}let Sr=class extends Yn{constructor(){super(...arguments),this._width=0,this.color=ut,this.join="miter",this.cap=0,this.miterLimit=5,this.shadingEnabled=!1,this.writeDepth=!0,this.polygonOffset=0,this.polygonOffsetIndex=0,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1,this.timeElapsed=Te(0),this.animation=0,this.animationSpeed=1,this.trailLength=1,this.startTime=Te(0),this.endTime=Te(1/0),this.worldSized=!1}get width(){return this.isImagePattern()?this.stipplePattern.width:this._width}set width(e){this._width=e}get transparent(){return this.color[3]<1||this.hasAnimation||this.stipplePattern!=null&&(this.stippleOffColor?.[3]??0)<1}get hasAnimation(){return this.animation!==0}usesWorldSizedWidth(e=this.isImagePattern()){return this.worldSized||e}isImagePattern(){return wi(this.stipplePattern)&&this.stippleTexture!=null}};class xr{constructor(e,t,i){this.layout=e,this.textureBufferLayout=t,this._parameters=i,this.numJoinSubdivisions=Wi(this._parameters.join,this._parameters.stipplePattern!=null)}_isClosed(e){return Be(this._parameters,e)}allocate(e){return this.layout.createBuffer(e)}elementCountTextureBuffer(e){return e.get("position").data.length/3+(this._isClosed(e)?3:2)}elementCount(e){const i=e.get("position").indices.length/2+1,a=this._isClosed(e);let r=a?2:4;return r+=((a?i:i-1)-(a?0:1))*(2*this.numJoinSubdivisions+4),r+=2,this._parameters.wireframe&&(r=2+4*(r-2)),r}write(e,t,i,a,r,l){l!=null&&this._writeTextureBuffer(e,i,l),a!=null&&this._writeVertexBuffer(e,i,a,r)}_writeTextureBuffer(e,t,i){const a=t.get("position"),r=a.data.length/3,l=this._isClosed(t),{buffer:o,offset:c}=i,d=o.getField("position",bi),p=o.getField("u0",me),u=o.getField("sizeFeatureAttribute",me),S=o.getField("size",me),v=o.getField("colorFeatureAttribute",me),m=o.getField("color",Tt),$=o.getField("olidColor",Tt),P=o.getField("timeStamps",hn),f=o.getField("opacityFeatureAttribute",me),x=t.get("sizeFeatureAttribute")?.data,z=t.get("size")?.data,T=t.get("colorFeatureAttribute")?.data,D=t.get("color")?.data,y=t.get("opacityFeatureAttribute")?.data,C=t.get("distanceToStart")?.data,L=t.get("timeStamps");K(d!==null,"Expected valid position field in texture buffer"),K(p!==null,"Expected valid u0 field in texture buffer");let b=0;for(let w=0;w<r;++w){this._getTransformedPosition(ce,a.data,w,e),w>0&&(C!=null?b=C[w]??b:b+=fe(Ne,ce));const E=c+w+1;if(d.setVec(E,ce),p.set(E,b),q(Ne,ce),u&&u.set(E,x?.length===1?x[0]:x?.[w]??0),S&&S.set(E,z?.length===1?z[0]:z?.[w]??1),v&&v.set(E,T?.length===1?T[0]:T?.[w]??0),m)if(D!=null){const V=Math.min(4*w,D.length-4);m.setValues(E,D[V],D[V+1],D[V+2],D[V+3])}else m.setValues(E,1,1,1,1);f&&f.set(E,y?.length===1?y[0]:y?.[w]??0)}if(P!=null&&L!=null){K(L.size===4);const w=L.data;for(let E=0;E<r;++E){const V=4*E,H=c+E+1;P.set(H,0,w[V]),P.set(H,1,w[V+1]),P.set(H,2,w[V+2]),P.set(H,3,w[V+3])}}if(l){const w=c,E=c+1,V=c+2,H=c+r,xt=H+1,Bi=H+2;o.copyItem(H,w),o.copyItem(E,xt),o.copyItem(V,Bi),d.getVec(H,Ne),d.getVec(E,ce);const Hi=C?.[r]??b+fe(Ne,ce);p.set(xt,Hi)}else{const w=c,E=c+1,V=c+r,H=V+1;o.copyItem(E,w),o.copyItem(V,H)}const R=t.get("olidColor");Pi()&&R!=null&&$!=null&&ht(R,4,$,c)}_writeVertexBuffer(e,t,i,a){const{buffer:r,offset:l}=i,{layout:o}=this,c=t.get("position"),d=c.indices,p=c.data.length/3,u=this._isClosed(t),S=p+(u?3:2);d&&d.length!==2*(p-1)&&console.warn("RibbonLineMaterial does not support indices");const v=r.getField("textureElementIndex",mn);K(v!=null,"Missing texture buffer index field"),K(a!=null,"Using a texture layout, but the texture range for this instance was not provided");const m=a.from;K(a.numElements===S,"Expected number of elements in TextureBuffer to equal number of points");const $=new Float32Array(r.buffer),P=new Float16Array(r.buffer),f=new Uint32Array(r.buffer),x=o.stride/4;let z=l*x;const T=z,D=$.BYTES_PER_ELEMENT/P.BYTES_PER_ELEMENT,y=(b,R,w)=>{const E=w+1;f[z]=m+E,z++;let V=z*D;P[V++]=b,P[V++]=R,z=Math.ceil(V/D)};z+=x;let C=0,L=0;u?(C=0,L=p):(y(1,-4,0),y(1,4,0),C=1,L=p-1);for(let b=C;b<L;b++){y(0,-1,b),y(0,1,b);const R=this.numJoinSubdivisions;for(let w=0;w<R;++w){const E=(w+1)/(R+1);y(E,-1,b),y(E,1,b)}y(1,-2,b),y(1,2,b)}u?(y(0,-1,L),y(0,1,L)):(y(0,-5,L),y(0,5,L)),Qe($,T+x,$,T,x),z=Qe($,z-x,$,z,x),this._parameters.wireframe&&this._addWireframeVertices(r,T,z,x)}_getTransformedPosition(e,t,i,a){const r=3*i;ee(e,t[r+0],t[r+1],t[r+2]),a&&re(e,e,a)}_addWireframeVertices(e,t,i,a){const r=new Uint8Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT),l=new Uint8Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,(i-t)*Float32Array.BYTES_PER_ELEMENT),o=a*Float32Array.BYTES_PER_ELEMENT;let c=0;const d=p=>c=Qe(l,p,r,c,o);for(let p=0;p<=l.length-4*o;p+=2*o)d(p),d(p+2*o),d(p+1*o),d(p+2*o),d(p+1*o),d(p+3*o)}}function Qe(n,e,t,i,a){for(let r=0;r<a;r++)t[i++]=n[e++];return i}function Be(n,e){return n.isClosed?e.get("position").indices.length>2:!1}function Ht(n,e,t,i){return i?n/(2*t)+He*e:(n/2+He)*e}function*Jt(n,e,t,i,a){const r=i.get("position").data,l=Be(t,i)?r.length-2:r.length-5,o=a?.[0]??0,c=a?.[1]??0;Q(n,r[0]+o,r[1]+c);for(let d=3;d<l+3;d+=3){const p=d%r.length;Q(e,r[p]+o,r[p+1]+c),yield d/3,Ue(n,e)}}function yr(n){return n.anchor===1&&n.hideOnShortSegments&&n.placement==="begin-end"&&n.worldSpace}function Wi(n,e){const t=e?1:0;switch(n){case"miter":case"bevel":return t;case"round":return Ni+t}}const Gt=new Gn,W=_(),M=_(),te=B(),ve=B(),le=_(),Yt=_(),Ie=_(),Y=_(),X=_(),et=_(),Se=se(),xe=se(),Xt=gi(),qt=gi(),Zt=_(),Kt=_(),tt=yi(),Qt=yi(),Ne=_(),ce=_(),ye=[se(),se(),se(),se()],Z=[_(),_(),_(),_()],it=Ge(),nt=Ge(),at=Ge(),rt=Ge(),He=4,br=[_(),_()],$r=()=>pt.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function Dr(n){return{cachedResult:n.cachedResult,arcade:n.arcade?{func:n.arcade.func,context:n.arcade.modules.arcadeUtils.createExecContext(null,{sr:n.arcade.context.spatialReference}),modules:n.arcade.modules}:null}}async function fs(n,e,t,i){const a=n?.expression;if(typeof a!="string")return null;const r=Cr(a);if(r!=null)return{cachedResult:r};const l=await en();tn(t);const o=l.arcadeUtils,c=o.createSyntaxTree(a);if(!c)return null;if(o.dependsOnView(c))return i?.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0};const d=o.createFunction(c);return d?{arcade:{modules:l,func:d,context:o.createExecContext(null,{sr:e})}}:null}function zr(n,e,t){return n.arcadeUtils.arcadeFeature.createFromGraphicLikeObject(n.arcadeUtils.createArcadeGeometryFromDehydratedGeometry(e.geometry),e.attributes,t,null)}function Pr(n,e){if(n!=null&&!Mi(n)){if(!e||!n.arcade)return void $r().errorOncePerTick("Arcade support required but not provided");n.arcade.modules.arcadeUtils.updateExecContext(n.arcade.context,e)}}function Tr(n){if(n!=null){if(Mi(n))return n.cachedResult;const e=n.arcade;let t=e?.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof t!="number"&&(n.cachedResult=0,t=0),t}return 0}function hs(n,e=!1){let t=n?.featureExpressionInfo;const i=t?.expression;return e||i==="0"||(t=null),t??null}const ms={cachedResult:0};function Mi(n){return n.cachedResult!=null}function Cr(n){return n==="0"?0:null}let gs=class ji{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.mode=null,this.centerInElevationSR=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=nn(e)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){const i=this.calculateOffsetRenderUnits(t);return this.featureExpressionInfoContext!=null?i:e+i}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset;const i=this.featureExpressionInfoContext;return i!=null&&(t+=Tr(i)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=an(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}setFeatureExpressionInfoContext(e){this._featureExpressionInfoContext=e}updateFeatureExpressionInfoContextForGraphic(e,t,i){e.arcade?(this._featureExpressionInfoContext=Dr(e),this.updateFeatureExpressionFeature(t,i)):this._featureExpressionInfoContext=e}updateFeatureExpressionFeature(e,t){const i=this.featureExpressionInfoContext;i?.arcade&&(i.cachedResult=void 0,Pr(this._featureExpressionInfoContext,e.geometry?zr(i.arcade.modules,e,t):null))}static fromElevationInfo(e){const t=new ji;return e!=null&&t.setFromElevationInfo(e),t}};function Ye(n,e){return n.size===e?new Or(n):null}let Or=class{constructor(e){this._attribute=e}get count(){return this._attribute.indices.length}get(e,t=0){const{data:i,indices:a,stride:r}=this._attribute;return i[a[e]*r+t]}getVec(e,t){const{data:i,indices:a,size:r,stride:l}=this._attribute,o=a[e]*l;for(let c=0;c<r;c++)t[c]=i[o+c];return t}};function ei(n,e){return Xe(n,e,1,Ye)}function ti(n,e){return Xe(n,e,2,Ye)}function We(n,e){return Xe(n,e,3,Ye)}function ii(n,e){return Xe(n,e,4,Ye)}function Xe(n,e,t,i){if(n.type===1){const{vertex:r}=n.buffers,l=r.layout.fields.get(e);return l==null||l.constructor.ElementCount!==t?null:r.getField(e,l.constructor)}const a=n.attributes.get(e);return a!=null?i(a,t):null}class wr extends Di{constructor(){super(...arguments),this.primitiveVertexCount=1}computeAttachmentOrigin(e,t,i){return qn(e,t,i)}}class F extends Ti{constructor(e,t){super(),this.spherical=e,this.polygonOffset=0,this.enableOITOffset=!1,this.screenCenterOffsetUnitsEnabled=!1,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.occludedFragmentFade=!1,this.hasOcclusionTexture=!1,this.hasFocusAreaStyle=!1,this.hasVertexColor=!0,this.hasVertexSize=!0,this.hasVertexRotation=!0,this.hasVertexUVi=!0,this.hasVertexCenterOffset=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.hasVVInstancing=!1,this.snowCover=!1,this.renderOccluded=!1,this.transparentOccluded=t}}h([g()],F.prototype,"transparentOccluded",void 0),h([g({count:5})],F.prototype,"polygonOffset",void 0),h([g()],F.prototype,"enableOITOffset",void 0),h([g()],F.prototype,"screenCenterOffsetUnitsEnabled",void 0),h([g()],F.prototype,"signedDistanceFieldEnabled",void 0),h([g()],F.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),h([g()],F.prototype,"hasVVSize",void 0),h([g()],F.prototype,"hasVVColor",void 0),h([g()],F.prototype,"hasVerticalOffset",void 0),h([g()],F.prototype,"hasScreenSizePerspective",void 0),h([g()],F.prototype,"hasRotation",void 0),h([g()],F.prototype,"debugDrawLabelBorder",void 0),h([g()],F.prototype,"depthTestEnabled",void 0),h([g()],F.prototype,"pixelSnappingEnabled",void 0),h([g()],F.prototype,"draped",void 0),h([g()],F.prototype,"occludedFragmentFade",void 0),h([g()],F.prototype,"hasOcclusionTexture",void 0),h([g()],F.prototype,"hasFocusAreaStyle",void 0),h([g()],F.prototype,"hasVertexColor",void 0),h([g()],F.prototype,"hasVertexSize",void 0),h([g()],F.prototype,"hasVertexRotation",void 0),h([g()],F.prototype,"hasVertexUVi",void 0),h([g()],F.prototype,"hasVertexCenterOffset",void 0);class Ss extends wr{constructor(e,t,i=!1){super(e,Ir),this.produces=new Map([[12,a=>Ee(a)&&!this.parameters.drawAsLabel&&!this._configuration.transparentOccluded],[13,a=>Ee(a)&&!this.parameters.drawAsLabel&&this._configuration.transparentOccluded],[14,a=>Ee(a)&&this.parameters.drawAsLabel],[18,a=>this.parameters.draped&&Ee(a)]]),this._visible=!0,this._configuration=new F(t,i)}updateConfiguration(e){super.updateConfiguration(e);const{parameters:t,_configuration:i}=this,a=t.draped;i.enableOITOffset=e.enableOITOffset,i.hasSlicePlane=this.parameters.hasSlicePlane,i.hasVerticalOffset=!!this.parameters.verticalOffset,i.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,i.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",i.polygonOffset=this.parameters.polygonOffset,i.draped=a,i.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,i.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,i.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,i.hasRotation=this.parameters.hasRotation,i.hasVVSize=!!this.parameters.vvSize,i.hasVVColor=!!this.parameters.vvColor,i.occludedFragmentFade=!a&&!!this.parameters.occludedFragmentOpacity,i.hasFocusAreaStyle=this.parameters.focusAreaStyle!=null,i.depthTestEnabled=this.parameters.depthEnabled,i.hasVertexColor=this.parameters.hasVertexColor,i.hasVertexSize=this.parameters.hasVertexSize,i.hasVertexRotation=this.parameters.hasVertexRotation,i.hasVertexUVi=this.parameters.hasVertexUVi,i.hasVertexCenterOffset=this.parameters.hasVertexCenterOffset,Ce(e.output)&&(i.debugDrawLabelBorder=!!Zn.LABELS_SHOW_BORDER),i.hasOcclusionTexture=!t.drawAsLabel&&i.transparentOccluded&&bn(e.output)}intersectRay(e,t,i,a,r,l){const{options:{selectionMode:o,hud:c,excludeLabels:d},point:p,camera:u}=i,{parameters:S}=this;if(o&&c&&(!d||!S.isLabel)&&e.visible&&p&&u){for(const{renderScreenPosition:v,screenSize:m,pixelRatioTolerance:$,halfOutlineSize:P,rotationAngle:f,anchor:x,centerView:z}of this._forEachScreenSpaceHUDInstance(li,e,t,u))if(ai(p,v[0],v[1],m,$,P,f,S,x)){const T=i.ray;if(Me[0]=p[0],Me[1]=p[1],Me[2]=v[2],u.unprojectFromRenderScreen(Me,A)){const D=_();q(D,T.direction);const y=1/ue(D);ae(D,D,y);const C=fe(T.origin,A)*y,L=_();re(L,z,u.inverseViewMatrix),l(C,C,D,-1,L)}}}}*_forEachScreenSpaceHUDInstance(e,t,i,a){const{parameters:r}=this,l=We(t,"position"),o=ti(t,"size"),c=We(t,"normal"),d=ei(t,"rotation"),p=We(t,"centerOffset"),u=ii(t,"featureAttribute"),S=r.size,v=Dt(si,i),m=r.centerOffsetUnits==="screen";for(let $=0;$<l.count;$++){const P=u?.getVec($,oi)??null,{scaleX:f,scaleY:x}=di(P,r,a.pixelRatio);if(l.getVec($,A),re(A,A,i),re(A,A,a.viewMatrix),p?p.getVec($,k):ee(k,0,0,0),!m&&(A[0]+=k[0],A[1]+=k[1],k[2]!==0)){const y=k[2];ke(k,A),ze(A,A,ae(k,k,y))}c.getVec($,ie),zt(ie,ie,v);const{normal:z,cosAngle:T}=ni(ie,a,pi),D=ui(r,A,T,a,st);if(qe(A,A,z,D),a.applyProjection(A,U),U[0]>-1){m&&(k[0]||k[1])&&(U[0]+=k[0]*a.pixelRatio,k[1]!==0&&(U[1]+=st.alignmentEvaluator.apply(k[1])*a.pixelRatio),a.unapplyProjection(U,A)),U[0]+=r.screenOffset[0]*a.pixelRatio,U[1]+=r.screenOffset[1]*a.pixelRatio,U[0]=Math.floor(U[0]),U[1]=Math.floor(U[1]),I[0]=S[0],I[1]=S[1],o!=null&&(I[0]*=o.get($,0),I[1]*=o.get($,1)),st.evaluator.applyVec2(I,I);let y=0;r.textureIsSignedDistanceField&&(y=Math.min(r.outlineSize,.5*I[0])*a.pixelRatio/2),I[0]*=f,I[1]*=x,q(e.centerView,A),ee(e.renderScreenPosition,U[0],U[1],U[2]),Ue(e.screenSize,I),e.pixelRatioTolerance=Vr*a.pixelRatio,e.halfOutlineSize=y,e.rotationAngle=r.rotation+(d?.get($)??0),e.anchor=Nt(r),yield e}}}*_forEachDrapedHUDInstance(e,t,i){const a=We(t,"position"),r=ti(t,"size"),l=ei(t,"rotation"),o=ii(t,"featureAttribute"),c=this.parameters,d=c.size;e.pixelRatioTolerance=Ar*i,e.anchor=Nt(c);for(let p=0;p<a.count;p++){const u=o?.getVec(p,oi)??null,{scaleX:S,scaleY:v}=di(u,c,i);if(e.x=a.get(p,0),e.y=a.get(p,1),I[0]=d[0],I[1]=d[1],r!=null&&(I[0]*=r.get(p,0),I[1]*=r.get(p,1)),e.halfOutlineSize=0,c.textureIsSignedDistanceField){const m=Math.min(c.outlineSize,.5*I[0]);e.halfOutlineSize=m*i/2}I[0]*=S,I[1]*=v,Ue(e.screenSize,I),e.rotationAngle=c.rotation+(l?.get(p)??0),yield e}}intersectRayDraped(e,t,i,a,r,l){const o=this.parameters;for(const{x:c,y:d,screenSize:p,pixelRatioTolerance:u,halfOutlineSize:S,rotationAngle:v,anchor:m}of this._forEachDrapedHUDInstance(ci,e,l))ai(i,c,d,p,u,S,v,o,m)&&a(r.distance,r.renderDistance,r.normal,-1)}intersectScreenPolygonDraped(e,t,i,a,r){if(!i.options.selectionMode||i.options.excludeLabels&&this.parameters.isLabel)return null;const l=this.parameters;for(const{x:o,y:c,screenSize:d,pixelRatioTolerance:p,halfOutlineSize:u,rotationAngle:S,anchor:v}of this._forEachDrapedHUDInstance(ci,e,r))if(ri(a,o+t[0],c+t[1],d,p,u,S,l,v,!1))return new Oi(-1);return null}intersectScreenPolygon(e,t,i,a){const{options:{selectionMode:r,hud:l,excludeLabels:o},camera:c}=i,{parameters:d}=this;if(!r||!l||o&&d.isLabel||!e.visible||t==null)return null;const p=new Ci(1),u=1/c.pixelRatio;for(const{renderScreenPosition:S,screenSize:v,pixelRatioTolerance:m,halfOutlineSize:$,rotationAngle:P,anchor:f,centerView:x}of this._forEachScreenSpaceHUDInstance(li,e,t,c)){const z=re(A,x,c.inverseViewMatrix);if(!i.screenPolygonPrimitiveProcessor?.validatePoint(z))continue;const T=S[0]*u,D=(c.fullHeight-S[1])*u;if(ct[0]=v[0]*u,ct[1]=v[1]*u,ri(a,T,D,ct,m*u,$*u,P,d,f,!0)){const y=fe(c.eye,z);p.updateIfCloserFromValues(y,-1,z,null)}}return p.valid?p:null}createBufferWriter(){return new Nr(this.parameters)}createPrimitivePositionReader(e,t){K(t!=null,"HUD geometry requires instancing");const i=e.vertex.getField("position",bi);return a=>i.getVec(0,a)}applyShaderOffsets(e,t,i,a,r,l,o,c){zt(ot,i,Dt(si,a));const d=ni(ot,o,pi),p=Wr(ue(t),o),u=ui(this.parameters,t,d.cosAngle,o,c);qe(t,t,d.normal,u+p),qe(e,e,ot,u+p);const S=l+u;this._applyPolygonOffsetView(t,d,S,o,t),this._applyCenterOffsetView(t,r,t)}applyShaderOffsetsNDC(e,t,i,a,r,l){return this._applyCenterOffsetNDC(e,t,a,r),l!=null&&q(l,r),this._applyPolygonOffsetNDC(r,i,a,r),r}_applyPolygonOffsetView(e,t,i,a,r){const l=a.aboveGround?1:-1;let o=Math.sign(i);o===0&&(o=l);const c=l*o;if(this.parameters.shaderPolygonOffset<=0)return q(r,e);const d=dt(Math.abs(t.cosAngle),.01,1),p=1-Math.sqrt(1-d*d)/d/a.viewport[2];return ae(r,e,c>0?p:1/p),r}_applyCenterOffsetView(e,t,i){const a=this.parameters.centerOffsetUnits!=="screen";return i!==e&&q(i,e),a&&(i[0]+=t[0],i[1]+=t[1],t[2]&&(ke(ie,i),rn(i,i,ae(ie,ie,t[2])))),i}_applyCenterOffsetNDC(e,t,i,a){const r=this.parameters.centerOffsetUnits!=="screen";return a!==e&&q(a,e),r||(a[0]+=t[0]/i.fullWidth*2,a[1]+=t[1]/i.fullHeight*2),a}_applyPolygonOffsetNDC(e,t,i,a){const r=this.parameters.shaderPolygonOffset;if(e!==a&&q(a,e),r){const l=i.aboveGround?1:-1,o=l*Math.sign(t);a[2]-=(o||l)*r}return a}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:t,outlineColor:i}=this.parameters,a=e[3]>=Oe||t>=Oe&&i[3]>=Oe;return this._visible&&a}createGLMaterial(e){return new _r(e)}calculateRelativeScreenBounds(e,t,i=vi()){return Lr(this.parameters,e,t,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}}class _r extends ga{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(Da,e)}}function Lr(n,e,t,i){i[0]=n.anchorPosition[0]*-e[0]+n.screenOffset[0]*t,i[1]=n.anchorPosition[1]*-e[1]+n.screenOffset[1]*t}function ni(n,e,t){return re(t.normal,n,e.viewInverseTransposeMatrix),t.cosAngle=je(t.normal,Rr),t}function ai(n,e,t,i,a,r,l,o,c){const d=Ui(e,t,i,a,r,o,c,ki);return Q(ne,e,t),Pe(be,n,ne,xi(l)),be[0]>d[0]&&be[0]<d[2]&&be[1]>d[1]&&be[1]<d[3]}function ri(n,e,t,i,a,r,l,o,c,d){const p=Ui(e,t,i,a,r,o,c,ki,d);if(Q(pe,p[0],p[1]),Q($e,p[2],p[1]),Q(de,p[2],p[3]),Q(De,p[0],p[3]),l!==0){const u=xi(l);Q(ne,e,t),Pe(pe,pe,ne,u),Pe($e,$e,ne,u),Pe(de,de,ne,u),Pe(De,De,ne,u),ln(p),_e(p,pe),_e(p,$e),_e(p,de),_e(p,De)}return!!ta(n,p)&&(Vt(n,pe,$e,de)||Vt(n,pe,de,De))}function Ui(n,e,t,i,a,r,l,o,c=!1){let d=n-i-t[0]*l[0],p=d+t[0]+2*i;const u=c?1-l[1]:l[1];let S=e-i-t[1]*u,v=S+t[1]+2*i;const m=r.distanceFieldBoundingBox;return r.textureIsSignedDistanceField&&m!=null&&(d+=t[0]*m[0],S+=t[1]*(c?1-m[3]:m[1]),p-=t[0]*(1-m[2]),v-=t[1]*(c?m[1]:1-m[3]),d-=a,p+=a,S-=a,v+=a),o[0]=d,o[1]=S,o[2]=p,o[3]=v,o}const st=new Kn,A=_(),ie=_(),U=Je(),Me=se(),ot=_(),be=B(),ne=B(),si=on(),k=_(),lt=_(),oi=Je(),ki=vi(),pe=B(),$e=B(),de=B(),De=B(),ct=B();class Er{constructor(){this.renderScreenPosition=_(),this.screenSize=B(),this.centerView=_(),this.pixelRatioTolerance=0,this.halfOutlineSize=0,this.rotationAngle=0,this.anchor=B()}}class Fr{constructor(){this.x=0,this.y=0,this.screenSize=B(),this.pixelRatioTolerance=0,this.halfOutlineSize=0,this.rotationAngle=0,this.anchor=B()}}const li=new Er,ci=new Fr,pi={normal:_(),cosAngle:0},Vr=1,Ar=2,I=Si(0,0),Rr=cn(0,0,1);class Ir extends ma{constructor(){super(...arguments),this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1,this.color=ut,this.size=sn,this.polygonOffset=0,this.anchorPosition=Si(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=ut,this.outlineSize=0,this.distanceFieldBoundingBox=Je(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.hasVertexColor=!1,this.hasVertexSize=!1,this.hasVertexRotation=!1,this.hasVertexUVi=!1,this.hasVertexCenterOffset=!1,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.focusAreaStyle=null,this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}class Nr{constructor(e){this.baseInstanceLayout=ya,this.layout=ba(e)}elementCount(e){return e.get("position").indices.length}elementCountBaseInstance(e){return e.get("uv0").indices.length}write(e,t,i,a){if(a==null)return;const{buffer:r,offset:l}=a,{position:o,normal:c,color:d,size:p,rotation:u,centerOffset:S,groundDistance:v,featureAttribute:m,uvi:$,olidColor:P}=r;ia(i.get("position"),e,o,l),na(i.get("normal"),t,c,l);const f=i.get("position").indices.length;if($){const x=i.get("uvi")?.data;if(x&&x.length>=4){const[z,T,D,y]=x;for(let C=0;C<f;++C){const L=l+C;$.setValues(L,z,T,D,y)}}}if(d&&ht(i.get("color"),4,d,l),p&&At(i.get("size"),p,l),u&&Rt(i.get("rotation"),u,l),S&&(i.get("centerOffset")?aa(i.get("centerOffset"),S,l):Ve(S,l,f)),i.get("groundDistance")?Rt(i.get("groundDistance"),v,l):Ve(v,l,f),m&&(i.get("featureAttribute")?ra(i.get("featureAttribute"),m,l):Ve(m,l,f)),P!=null){const x=i.get("olidColor");x!=null?ht(x,4,P,l):Ve(P,l,f)}}writeBaseInstance(e,t){const{uv0:i}=t;At(e.get("uv0"),i,0)}rebaseBuffers(e,t){if(t==null)return;const{buffer:i,offset:a}=t;i.copyFrom(e.vertex,0,a)}}function di(n,e,t){return n==null||e.vvSize==null?{scaleX:t,scaleY:t}:(Qn(lt,e,n),{scaleX:lt[0]*t,scaleY:lt[1]*t})}function Wr(n,e){const t=e.computeRenderPixelSizeAtDist(n)*$a;return(e.aboveGround?1:-1)*t}function ui(n,e,t,i,a){if(!n.verticalOffset?.screenLength){const c=ue(e);return a.update(t,c,n.screenSizePerspective,n.screenSizePerspectiveMinPixelReferenceSize,n.screenSizePerspectiveAlignment,null),0}const r=ue(e),l=n.screenSizePerspectiveAlignment??n.screenSizePerspective,o=ea(i,r,n.verticalOffset,t,l,n.screenSizePerspectiveMinPixelReferenceSize);return a.update(t,r,n.screenSizePerspective,n.screenSizePerspectiveMinPixelReferenceSize,n.screenSizePerspectiveAlignment,null),o}export{fr as R,Ni as T,gs as a,Ca as b,ts as c,ms as d,mr as e,Oa as f,Wa as g,wa as h,hs as i,Ei as j,_i as k,as as l,Ua as m,Ra as n,ds as o,Ss as p,cr as q,sr as r,j as t,fs as u};
//# sourceMappingURL=HUDMaterial-BYc4rliD.js.map
