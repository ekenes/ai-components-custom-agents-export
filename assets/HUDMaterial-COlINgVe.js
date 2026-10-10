const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RibbonLine.glsl-DDUoO4JM.js","assets/index-sBTGSh23.js","assets/index-DAx1CvpA.css","assets/getEmissions.glsl-DNL5xQvY.js","assets/NoParameters-oniR9cXl.js","assets/doublePrecisionUtils-CtF2dH1L.js","assets/GeometryUtil-CmfWYabR.js","assets/mathUtils-JxojU-E-.js","assets/sphere--WLV2QDF.js","assets/ray-D_d1E9-H.js","assets/vectorStacks-D1gra0vL.js","assets/quatf64-aQ5IuZRd.js","assets/OutputColorHighlightOLID.glsl-B4DrgdT9.js","assets/Indices-Dw2u9Ml2.js","assets/InterleavedLayout-CYPMZVjd.js","assets/BufferView-DfEibyVG.js","assets/types-DfUoEbzw.js","assets/VertexElementDescriptor-CBVWHxfT.js","assets/VertexAttributeLocations-DTwbdF8f.js","assets/DrapedZ-DzLtR0NK.js","assets/frustumPlanes-q5rrcWaJ.js","assets/plane-DyyJ8hFb.js","assets/lineSegment-BhiZDO6v.js","assets/AlphaCutoff-DD8tli_W.js","assets/RenderingContext-D43kcVR4.js","assets/ProgramCache-CacL_Kmx.js","assets/VertexArrayObject-BHyZeHqU.js","assets/VertexBuffer-DBNy7fnM.js","assets/projectVectorToVector-BsOz5v1q.js","assets/projectPointToVector-CdrWiGiv.js","assets/dehydratedPoint-HwkPLSOd.js","assets/orientedBoundingBox-Tl5lpgjO.js","assets/quat-DU1NwlVY.js","assets/computeTranslationToOriginAndRotation-DFX_9gUW.js","assets/Octree-B04KeeCd.js","assets/vec3f32-CTt429Kd.js","assets/ReceiveShadowsConfiguration-LEfq6Frh.js","assets/DDSUtil-ettjQia7.js"])))=>i.map(i=>d[i]);
import{iT as Bi,wU as fi,gJ as hi,Be as Hi,vK as Ji,aS as Gi,mU as He,cY as Te,f5 as Q,k5 as B,Bf as bt,a3 as h,nK as Yi,_ as qi,p9 as yt,a6 as Xi,bD as pt,u0 as Ue,f2 as ee,fu as De,aV as Me,fx as te,fy as $t,fw as X,fA as ue,iW as fe,fv as Pt,Bg as Zi,io as ne,aY as ke,fz as dt,oz as ut,a_ as L,u1 as se,k1 as mi,bB as Ki,aM as Qi,fr as ea,Bh as ta,nh as Dt,f3 as zt,pu as Xe,is as ia,cK as gi,tR as aa,nZ as vi,eI as ze,cZ as Si,b8 as ra,cR as na,Bi as Oe,aZ as sa}from"./index-sBTGSh23.js";import{g as he,_ as oa,C as la,v as ca,y as pa,f as xi}from"./lineSegment-BhiZDO6v.js";import{w as _e,J as G,b as Tt,_ as Je}from"./plane-DyyJ8hFb.js";import{h as bi,d as me,X as Ct,g as da,N as ua}from"./BufferView-DfEibyVG.js";import{u as Ce,t as J,e as s,d as ge,a as b,b as fa,g as ha,i as g,j as ma,k as ga,h as va,m as wt,o as Sa,p as Fe,l as xa}from"./getEmissions.glsl-DNL5xQvY.js";import{a as yi,aa as ba,ab as ya,L as $a,Z as Pa,e as gt,ac as $i,ad as Ot,u as Da,a0 as za,O as Ge,Q as vt,p as ft,a6 as Pi,ae as Di,m as zi,af as Ta,Y as Ca,r as Ti,f as wa,ag as Oa,M as _a,k as Fa,q as La,$ as Ea,j as Aa,w as Va,x as Ra,y as _t,z as Ia,A as Ft,ah as Le,C as Wa,D as Na,E as Ma,ai as Ua,aj as Lt,ak as ka,al as ja,am as Et,an as Ci,ao as Ba,ap as At,aq as wi,g as Oi,ar as Ha,G as Ja,as as ht,H as Ga,at as Ya,au as qa,av as Xa,aw as Za,ax as Ka,_ as Qa,v as Vt,T as er,ay as tr,az as Rt,aA as It,aB as ir,aC as Ee,aD as ar}from"./OutputColorHighlightOLID.glsl-B4DrgdT9.js";import{i as rr,s as nr,g as sr,v as or,r as lr,a as cr,b as pr,_ as dr,c as ur,e as fr,d as hr,o as mr,f as gr}from"./ReceiveShadowsConfiguration-LEfq6Frh.js";import{a as K,K as vr,n as Sr,f as Wt}from"./InterleavedLayout-CYPMZVjd.js";import{i as _i,t as xr,N as Nt,g as br,_ as yr,e as $r,h as Pr}from"./GeometryUtil-CmfWYabR.js";import"./DDSUtil-ettjQia7.js";import{c as Mt,i as Dr}from"./doublePrecisionUtils-CtF2dH1L.js";import{i as zr}from"./TextureBackedBufferLayout-BT82P3b-.js";import{T as Ae,g as Ze,c as Ut}from"./RenderingContext-D43kcVR4.js";import{e as we}from"./AlphaCutoff-DD8tli_W.js";let es=class extends ya{constructor(){super(...arguments),this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.shadingEnabled=!1,this.isDecoration=!1,this.worldSized=!1}},Tr=class extends yi{constructor(){super(...arguments),this.primitiveVertexCount=1}updateConfiguration(e){super.updateConfiguration(e),this._configuration.pbrMode=this.parameters.shadingEnabled?2:0,this._configuration.draped=e.slot===18,this._configuration.shadingEnabled=this.parameters.shadingEnabled,this._configuration.worldSized=this.parameters.worldSized,this._configuration.emissionSource=+!!this.emissions,this._configuration.hasVVSize=this.parameters.hasVVSize,this._configuration.hasVVColor=this.parameters.hasVVColor,this._configuration.hasVVOpacity=this.parameters.hasVVOpacity,this._configuration.hasOccludees=e.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===8,Ce(e.output)&&this.parameters.shadingEnabled?(this._configuration.receiveShadows=e.shadowMap.enabled,this._configuration.hasShadowHighlights=rr(this._configuration,e),this._configuration.receiveAmbientOcclusion=e.ssao!=null,this._configuration.receiveGlobalIllumination=e.globalIlluminationEnabled):this._configuration.receiveShadows=this._configuration.hasShadowHighlights=this._configuration.receiveAmbientOcclusion=this._configuration.receiveGlobalIllumination=!1}computeAttachmentOrigin(e,t,i){return ba(e,t,i,this._isClosed(i))}_isClosed(e){return(this.parameters.isClosed??!1)&&e>2}};function Cr(a,e){let{vertex:t}=a;t.uniforms.add(new J("intrinsicWidth",n=>n.width));let{hasScreenSizePerspective:i,spherical:r}=e;i?(a.include($a,e),Pa(t),gt(t,e),t.uniforms.add(new $i("inverseViewMatrix",(n,l)=>Bi(kt,fi(kt,l.camera.viewMatrix,n.origin)))),t.code.add(s`
      float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
        vec3 worldPos = (inverseViewMatrix * vec4(pos, 1)).xyz;
        vec3 groundUp = ${r?s`normalize(worldPos + localOrigin)`:s`vec3(0.0, 0.0, 1.0)`};
        float absCosAngle = abs(dot(groundUp, normalize(worldPos - cameraPosition)));

        return screenSizePerspectiveScaleFloat(size, absCosAngle, length(pos), screenSizePerspective);
      }
    `)):t.code.add(s`float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
return size;
}`),e.hasVVSize?(t.uniforms.add(new ge("vvSizeMinSize",n=>n.vvSize.minSize),new ge("vvSizeMaxSize",n=>n.vvSize.maxSize),new ge("vvSizeOffset",n=>n.vvSize.offset),new ge("vvSizeFactor",n=>n.vvSize.factor),new ge("vvSizeFallback",n=>n.vvSize.fallback)),t.code.add(s`
    float getSize(${b(i,"vec3 pos")}) {
      float value = ${t.inputs.get("sizeFeatureAttribute")};
      float size = isnan(value)
        ? vvSizeFallback.x
        : intrinsicWidth * clamp(vvSizeOffset + value * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;

      return ${b(i,"applyLineSizeScreenSizePerspective(size, pos)","size")};
    }
    `)):t.code.add(s`
    float getSize(${b(i,"vec3 pos")}) {
      float fullSize = intrinsicWidth * ${t.inputs.get("size")};
      return ${b(i,"applyLineSizeScreenSizePerspective(fullSize, pos)","fullSize")};
    }
    `),e.hasVVOpacity?(t.constants.add("vvOpacityNumber","int",8),t.uniforms.add(new Ot("vvOpacityValues",8,n=>n.vvOpacity.values),new Ot("vvOpacityOpacities",8,n=>n.vvOpacity.opacityValues),new J("vvOpacityFallback",n=>n.vvOpacity.fallback,{supportsNaN:!0})),t.code.add(s`
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
        return ${b(e.hasVVColor,"color","vec4(color.rgb, vvOpacityFallback)")};
      }

      return vec4(color.rgb, interpolateOpacity(value));
    }
    `)):t.code.add(s`vec4 applyOpacity(vec4 color) {
return color;
}`),e.hasVVColor?(a.include(Da,e),t.code.add(s`
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
    `)}const kt=hi();function wr(a){a.include(nr),a.fragment.uniforms.add(new $i("inverseViewMatrix",(e,t)=>{let i=fi(Or,t.camera.viewMatrix,e.localOrigin);return Hi(i,i)})).code.add(s`vec4 reconstructLocalPosition(vec2 coord, float linearDepth) {
vec4 cameraSpace = vec4(reconstructPosition(coord, linearDepth), 1.0);
return inverseViewMatrix * cameraSpace;
}`)}const Or=hi();function _r(a,e){a.include(sr,e),a.include(wr),a.fragment.include(za),a.fragment.code.add(s`float readFragmentShadow(float additionalAmbientScale) {
vec3 pos = reconstructLocalPosition(gl_FragCoord.xy, linearizeDepth(gl_FragCoord.z)).xyz;
return readShadow(additionalAmbientScale, pos);
}`)}function Fr(a,e){let{vertex:t,fragment:i}=a;a.include(_r,e),i.include(or,e),i.include(lr,e),cr(i),gt(i,e),t.main.add("forwardLinearDepthToReadShadow();"),i.uniforms.add(pr,dr,t.uniforms.get("localOrigin")).code.add(s`vec4 evaluateSceneLightingFragment(vec3 vpos, vec3 normal, vec4 albedo) {
vec3 posWorld = vpos + localOrigin;
float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
float shadow = readFragmentShadow(additionalAmbientScale);
float ssao = evaluateAmbientOcclusionInverse();
vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
vec3 viewDirection = normalize(vpos - cameraPosition);
return vec4(
evaluateSceneLighting(normal, albedo.rgb, shadow, 1.0 - ssao, additionalLight, viewDirection, normal),
albedo.a);
}`)}function Lr(a){a.vertex.code.add("#define noPerspectiveWrite(x, w) (x * w)")}function Fi(a){a.fragment.code.add("#define noPerspectiveRead(x) (x * gl_FragCoord.w)")}function Er(a){return a.pattern.map(e=>Math.round(e*a.pixelRatio))}function Ar(a){if(a==null)return 1;let e=Er(a);return Math.floor(e.reduce((t,i)=>t+i,0))}function Vr(a){return a==null?Ji:a.length===4?a:Gi(Rr,a[0],a[1],a[2],1)}const Rr=He();function Ir(a,e){if(!e.stippleEnabled){a.fragment.code.add(s`float getStippleAlpha(float lineWidth) { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);return}let t=!(e.draped&&e.stipplePreferContinuous),{vertex:i,fragment:r}=a;e.draped||(gt(i,e),i.uniforms.add(new Ge("worldToScreenPerDistanceRatio",({camera:o})=>1/o.screenPixelSizePerDistance)).code.add(s`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),a.varyings.add("vStippleDistance","float"),a.varyings.add("vStippleLimitsAndCaps","vec4"),a.varyings.add("vStipplePatternStretch","float"),i.code.add(s`
    float discretizeStippleDistanceToScreenRatio(float stippleDistanceToScreenRatio) {
      float step = ${s.float(Wr)};

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
  `),r.uniforms.add(new fa("stipplePatternTexture",o=>o.stippleTexture),new J("stipplePatternPixelSizeInv",o=>1/Li(o))),e.stippleOffColorEnabled&&r.uniforms.add(new ft("stippleOffColor",o=>Vr(o.stippleOffColor))),a.include(Fi);let n=e.worldSized&&e.imagePattern,{usePerspectiveCorrectStipple:l}=e;l&&a.varyings.add("vStipplePerspective","vec4"),n?(a.varyings.add("vStippleV","float"),a.fragment.include(ur),r.code.add(s`vec4 getStippleColor(out bool isClamped) {
vec2 aaCorrectedLimits = vStippleLimitsAndCaps.xy + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = (vStippleLimitsAndCaps.z <= 0.0 && vStippleDistance < aaCorrectedLimits.x) ||
(vStippleLimitsAndCaps.w <= 0.0 && vStippleDistance > aaCorrectedLimits.y);
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
}`)):r.code.add(s`
    float getStippleSDF(out bool isClamped) {
      ${b(e.worldSized,s`
          float unclampedStippleDistance = noPerspectiveRead(vStippleDistance);
          float stippleDistancePerPixel = length(vec2(dFdx(unclampedStippleDistance), dFdy(unclampedStippleDistance)));
        `,s`float stippleDistancePerPixel = 1.0;`)}

      bool clampStart = vStippleLimitsAndCaps.z <= 0.0;
      bool clampEnd = vStippleLimitsAndCaps.w <= 0.0;
      float stippleDistance = vStippleDistance;
      if (clampStart) {
        stippleDistance = max(stippleDistance, vStippleLimitsAndCaps.x);
      }
      if (clampEnd) {
        stippleDistance = min(stippleDistance, vStippleLimitsAndCaps.y);
      }
      stippleDistance = noPerspectiveRead(stippleDistance);
      float lineSizeInv = noPerspectiveRead(vLineSizeInv);

      ${b(l,s`
          // Convert screen-space progress to progress along the 3D segment using the endpoints' inverse clip-W values.
          // This keeps dash lengths constant in world units, so farther dashes appear shorter on screen.
          vec4 stipplePerspective = noPerspectiveRead(vStipplePerspective);
          float segmentLength = stipplePerspective.y - stipplePerspective.x;
          float segmentFactor = segmentLength > 0.0 ? (stippleDistance - stipplePerspective.x) / segmentLength : 0.0;
          float interpolatedInverseW = mix(stipplePerspective.z, stipplePerspective.w, segmentFactor);
          float perspectiveFactor = segmentFactor * stipplePerspective.w / interpolatedInverseW;
          stippleDistance = mix(stipplePerspective.x, stipplePerspective.y, perspectiveFactor);
        `)}

        vec2 aaCorrectedLimits = vStippleLimitsAndCaps.xy + vec2(1.0, -1.0) * stippleDistancePerPixel / gl_FragCoord.w;
      isClamped = (clampStart && vStippleDistance < aaCorrectedLimits.x) ||
          (clampEnd && vStippleDistance > aaCorrectedLimits.y);

      float u = stippleDistance * stipplePatternPixelSizeInv * lineSizeInv;
      u = fract(u);

      float sdf = texture(stipplePatternTexture, vec2(u, 0.5)).r;

      return sdf;
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
  `),r.code.add(s`
    float getStippleCapDistance() {
      return (getStippleSDF() * 2.0 - 1.0) * vStipplePatternStretch;
    }

    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${b(!e.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }
  `)}function Li(a){let e=a.stipplePattern;return _i(e)?e.length:e?Ar(e)/e.pixelRatio:1}const Wr=.4,as=64,rs=32,Nr=32/5,Mr=64/Nr,ns=.25;function Ur(a,e){let t=a.vertex,i=e.hasScreenSizePerspective,r=e.worldSized,n=r&&!e.draped;vt(t),t.constants.add("markerSizePerLineWidth","float",Mr),t.uniforms.add(new J("markerScale",({markerScale:l})=>l)),r&&t.uniforms.add(new Ge("groundMetersToScreenRatio",l=>1/(l.screenToPlanarDistanceRatio*l.planarDistanceToGroundRatio))),t.code.add(s`float getScreenMarkerSize(float lineWidth) {
return markerScale * markerSizePerLineWidth * lineWidth;
}`),t.code.add(b(n,s`
        float getLineWidth(vec3 pos) {
          float size = getSize(${b(i,"pos")});
          float metersPerScreenPixel = max(-pos.z, nearFar[0]) * metersPerRenderUnit * screenPixelSizePerDistance;
          return max(size / metersPerScreenPixel, 1.0) * pixelRatio;
        }
    `,s`
        float getLineWidth(${b(e.lineWidthRequiresPosition,"vec3 pos")}) {
          float size = max(getSize(${b(i,"pos")}), 1.0);
          return ${b(r,"size * pixelRatio * groundMetersToScreenRatio","size * pixelRatio")};
        }
    `)),n?t.uniforms.add(Pi,Di,zi):t.uniforms.add(Ta),t.code.add(b(n,s`
        float getWorldMarkerSize(vec3 pos) {
          return markerScale * markerSizePerLineWidth * getSize(${b(i,"pos")}) * 0.5 / metersPerRenderUnit;
        }
      `,s`
        float getWorldMarkerSize(vec3 pos) {
          float distanceToCamera = length(pos);
          float screenToWorldRatio = renderPixelSizePerDistance * distanceToCamera * 0.5;
          return getScreenMarkerSize(getLineWidth(${b(i,"pos")})) * screenToWorldRatio;
        }
      `)),t.constants.add("maxSegmentLengthFraction","float",.45),t.code.add(b(n,s`bool areWorldMarkersHidden(vec3 pos, vec3 other) {
return getWorldMarkerSize(pos) > maxSegmentLengthFraction * length(pos - other);
}`,s`
        bool areWorldMarkersHidden(vec3 pos, vec3 other) {
          vec3 midPoint = mix(pos, other, 0.5);
          float distanceToCamera = length(midPoint);
          float screenToWorldRatio = renderPixelSizePerDistance * distanceToCamera * 0.5;
          float worldMarkerSize = getScreenMarkerSize(getLineWidth(${b(i,"pos")})) * screenToWorldRatio;
          float segmentLen = length(pos - other);
          return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
        }
      `))}const kr=Te(1),jr=Te(1);function Br(a,e){let{animation:t}=e,{varyings:i,vertex:r,fragment:n}=a;i.add("vTimeStamp","float"),i.add("vFirstTime","float"),i.add("vLastTime","float"),i.add("vTransitionType","float"),r.main.add(s`vTimeStamp = animatedAlphaTimeStamps.x;
vFirstTime = animatedAlphaTimeStamps.y;
vLastTime = animatedAlphaTimeStamps.z;
vTransitionType = animatedAlphaTimeStamps.w;`),t===3&&n.constants.add("decayRate","float",2.3),n.code.add(s`
    float getTrailOpacity(float x) {
      if (x < 0.0) {
        return 0.0;
      }

      ${Hr(t)}
    }`),n.uniforms.add(new J("timeElapsed",l=>l.timeElapsed),new J("trailLength",l=>l.trailLength),new J("speed",l=>l.animationSpeed),new Ca("startEndTime",l=>Q(Jr,l.startTime,l.endTime))),n.constants.add("fadeInTime","float",jr),n.constants.add("fadeOutTime","float",kr),n.constants.add("incomingTransition","int",0),n.constants.add("outgoingTransition","int",2),n.code.add(s`float fadeIn(float x) {
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
}`)}function Hr(a){switch(a){case 2:return"return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;";case 3:return`float cutOff = exp(-decayRate);
        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);`;default:return"return 1.0;"}}const Jr=B();function Gr(a){switch(a.elementType){case"float":switch(a.elementCount){case 1:return s`float`;case 2:return s`vec2`;case 3:return s`vec3`;case 4:return s`vec4`;case 9:return s`mat3`;default:a.elementCount}break;case"int":switch(a.elementCount){case 1:return s`int`;case 2:return s`ivec2`;case 3:return s`ivec3`;case 4:return s`ivec4`;case 9:throw Error("Invalid element count 9 for type int");default:a.elementCount}break;case"uint":switch(a.elementCount){case 1:return s`uint`;case 2:return s`uvec2`;case 3:return s`uvec3`;case 4:return s`uvec4`;case 9:throw Error("Invalid element count 9 for type uint");default:a.elementCount}break;default:a.elementType}throw Error("unsupported field")}const Ei=new Ge("constNaN",()=>NaN,{supportsNaN:!0});let St=class extends ha{constructor(e){super(),this.supportNaN=e}};h([g()],St.prototype,"supportNaN",void 0);function Yr(a,e){let t=e?.supportNaN;t&&(a.uniforms.add(Ei),a.code.add(s`bool bitsEncodeFloat16NaN(highp uint bits) {
const highp uint nanExponent = 0x00007c00u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x000003ffu;
return exponent == nanExponent && mantissa != 0u;
}`)),a.code.add(s`
    mediump float unpackHalf1x16(highp uint bits) {
      ${b(t,s`
        if (bitsEncodeFloat16NaN(bits)) {
          return constNaN;
        }`)}
      return unpackHalf2x16(bits).x;
    }`),a.code.add(s`
    mediump vec2 unpackHalf2x16NaNSupport(highp uint bits) {
      vec2 result = unpackHalf2x16(bits);
      ${b(t,s`
        if (bitsEncodeFloat16NaN(bits)) {
          result.x = constNaN;
        }
        if (bitsEncodeFloat16NaN(bits >> ${s.uint(oe[2])})) {
          result.y = constNaN;
        }
        `)}
      return result;
    }`)}function qr(a,e){let t=e?.supportNaN;t&&(a.uniforms.add(Ei),a.code.add(s`bool bitsEncodeFloat32NaN(highp uint bits) {
const highp uint nanExponent = 0x7f800000u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x007fffffu;
return exponent == nanExponent && mantissa != 0u;
}`)),a.code.add(s`
    highp float unpackFloat1x32(highp uint bits) {
      ${b(t,s`
        if (bitsEncodeFloat32NaN(bits)) {
          return constNaN;
        }`)}
      return uintBitsToFloat(bits);
    }`)}function Xr(a){a.code.add(s`mediump int unpackInt1x16(highp uint bits) {
highp uint signExtendedBits = (bits & 0x8000u) != 0u ? (bits | 0xffff0000u) : bits;
return int(signExtendedBits);
}`)}function Zr(a,e){let{fieldType:t}=a,i=en[t];return`${i(tn(a,e))}`}function Ve(a,e){let t=[];for(let i of a){let r=s`unpackFloat1x32(${i})`;t.push(r)}return t.join(e)}const Kr=a=>s`${a[0]}`,Qr=a=>s`uvec4(${a.join(", ")})`,jt=a=>s`${a[0]}`,Bt=a=>{let e=a[0],t=s`uvec4(${s.uint(oe[0])}, ${s.uint(oe[1])}, ${s.uint(oe[2])}, ${s.uint(oe[3])})`,i=s`uvec4(${s.hexuint(Ai[1])})`;return s`((uvec4(${e}) >> ${t}) & ${i})`},en={u8:jt,u32:Kr,vec4u32:Qr,unorm8:a=>s`(float(${jt(a)})/${s.float(bt)})`,vec4unorm8:a=>s`(vec4(${Bt(a)})/${s.float(bt)})`,snorm16:a=>s`unpackSnorm2x16(${a[0]}).x`,vec2snorm16:a=>s`unpackSnorm2x16(${a[0]})`,f16:a=>s`unpackHalf1x16(${a[0]})`,vec4f16:a=>s`vec4(unpackHalf2x16NaNSupport(${a[0]}), unpackHalf2x16NaNSupport(${a[1]}))`,f32:a=>s`unpackFloat1x32(${a[0]})`,vec4u8:Bt,vec2f32:a=>s`vec2(${Ve(a,", ")})`,vec3f32:a=>s`vec3(${Ve(a,", ")})`,vec4f32:a=>s`vec4(${Ve(a,", ")})`,mat3f32:a=>s`mat3(${Ve(a,`,
`)})`};function tn(a,e){let{byteOffset:t,byteSize:i}=a,r=e.channelByteStride,n=e.byteStride,l=Math.ceil(i/Ke),o=an[e.channels],c=[];for(let d=0;d<l;++d){let p=d*Ke,u=t+p,v=i-p,S=Math.min(v,Ke),m=0,$=[];for(;m<S;){let D=u+m,f=Math.floor(D/n),x=D%n,z=Math.floor(x/r),C=x%r,y=r-C,T=S-m,w=Math.min(y,T),P=s`texel${s.int(f)}${o[z]}`,_=w===4?"":s` & ${s.hexuint(Ai[w])}`,F=C===0?"":s` >> ${s.uint(oe[C])}`,O=s`((${P}${F})${_})`,E=m===0?"":s` << ${s.uint(oe[m])}`,V=s`(${O})${E}`;$.push(V),m+=w}c.push(s`(${$.join(" | ")})`)}return c}const Ke=4,oe=[0,8,16,24],Ai=[0,255,65535,16777215,4294967295],an={1:[s``],2:[s`.x`,s`.y`],4:[s`.x`,s`.y`,s`.z`,s`.w`]},rn=new St(!0),nn=new St(!1);let sn=class{constructor(e,t){this._shader=e,this._namespace=t,this._used=new Map}getItemSuffix(e){return e===0?"":`${e<0?"Minus":"Plus"}${Math.abs(e)}`}getItemDataName(e=0){return`${this._namespace}ItemData${this.getItemSuffix(e)}`}getStructName(e=0){return`${this._namespace}TextureBackedBufferItemData${this.getItemSuffix(e)}`}getFetchName(e=0){return`${this._namespace}fetchTextureBackedBufferItemData${this.getItemSuffix(e)}`}getStrideName(){return`${this._namespace}tbbStride`}getTextureAttribute(e,t=0){let i=this._used,r=this.getItemDataName(t),n=i.get(t);return n??(n=new Set,i.set(t,n)),n.add(e),s`${r}.${e}`}generateVertexCode(e){let{_shader:t,_used:i}=this,r=new Mt(t.vertex);for(let n of i.keys())this._generateFetchFunction(n,r,e);return r.generateSource()}generateVertexMainCode(e){let{_shader:t,_used:i}=this,r=new Mt(t.vertex);for(let n of i.keys())this._generateFetchFunctionCall(n,r,e);return r.generateSource()}_generateFetchFunctionCall(e,t,i){let{itemIndexExpression:r}=i,n=this._used.get(e);if(n==null||n.size===0)return;let l=this.getItemDataName(e),o=this.getFetchName(e);t.add(s`${l} = ${o}(${r});`)}_getIndexOffset(e=0){return e===0?s``:s`${e<0?"-":"+"}${s.uint(Math.abs(e))}`}_generateFetchFunction(e,t,i){let{bufferUniform:r,layout:n}=i,{texelFormatInfo:l}=n,o=this._used.get(e);if(o==null||o.size===0)return;let c=this.getStrideName(),d=this.getStructName(e),p=this.getItemDataName(e),u=this.getFetchName(e),v=this._getIndexOffset(e),S=[];for(let f of n.fields.values())o.has(f.name)&&S.push(f);if(S.length===0)return;let m=[];for(let f=0;f<n.texelStride;++f)m.push(!1);for(let f of S)for(let x=0;x<f.numTexels;++x)m[f.startTexel+x]=!0;t.add(s`
  struct ${d} {`);for(let f of S)t.add(s`\t${Gr(f)} ${f.name};`);t.add(s`};`),t.add(s`\n${d} ${u}( highp uint baseIndex ) {
    ${d} itemData;
    highp uint index = (baseIndex${v}) * ${c};
    highp uint rowWidth = uint(textureSize(${r.name}, 0).x);
    int coordX = int(index % rowWidth);
    int coordY = int(index / rowWidth);\n`);let $=ln[l.channels],D=cn[l.channels];for(let f=0;f<m.length;++f)m[f]!==!1&&t.add(s`highp ${$} texel${s.int(f)} = texelFetch(${r.name}, ivec2(coordX + ${s.int(f)}, coordY), 0)${D};`);for(let f of S)t.add(s`itemData.${f.name} = ${Zr(f,l)};`);t.add(s`return itemData;\n}`),t.add(s`${d} ${p};`)}},on=class{constructor(e){this._parameters=e,this.moduleId=Yi(),this.namespace=`_tbb_${this.moduleId}_`}createBuilder(e,t){let i=null,r=n=>{i=this._buildTextureBackedBufferShaderCode(n)};return t?e.include(r,t):e.include(r),K(i!=null,"Valid builder expected."),i}_buildTextureBackedBufferShaderCode(e){let{namespace:t,_parameters:i}=this,{bufferUniform:r,layout:n}=i,l=i.enableNaNSupport?rn:nn,{vertex:o}=e,c=new sn(e,t);o.include(qr,l),o.include(Yr,l),o.include(Xr);let d=c.getStrideName(),p=c.getStructName(),u=c.getFetchName(),v=c.getItemDataName();for(let S of[d,p,u,v])K(S.length<1024,"Identifiers do not have a valid length");return o.constants.add(d,"uint",n.texelStride),o.uniforms.add(r),o.code.add(()=>c.generateVertexCode(i)),o.main.add(()=>c.generateVertexMainCode(i)),c}};const ln={1:s`uint`,2:s`uvec2`,4:s`uvec4`},cn={1:s`.x`,2:s`.xy`,4:""};let pn=class extends ma{constructor(e,t){super(e,"usampler2D",2,(i,r,n)=>i.bindTexture(e,t(r,n)))}};function Vi(a){return vr().u32("textureElementIndex",{integer:!0}).vec2f16("lineParameters")}const dn=[{type:"vec3f32",name:"position"},{type:"f32",name:"u0"}];function Ri(a){let e=[...dn];return a.hasVVColor?e.push({type:"f32",name:"colorFeatureAttribute"}):e.push({type:"vec4unorm8",name:"color"}),a.hasVVSize?e.push({type:"f32",name:"sizeFeatureAttribute"}):e.push({type:"f32",name:"size"}),a.hasVVOpacity&&e.push({type:"f32",name:"opacityFeatureAttribute"}),Ti()&&e.push({type:"vec4unorm8",name:"olidColor"}),a.hasAnimation&&e.push({type:"vec4f16",name:"timeStamps"}),new zr(e)}const un=new pn("componentTextureBuffer",a=>a.textureBuffer);function fn(a){return new on({layout:Ri(a),itemIndexExpression:"textureElementIndex",bufferUniform:un})}const hn=1;function mn(a){let e=new Dr,{attributes:t,varyings:i,vertex:r,fragment:n}=e,{applyMarkerOffset:l,draped:o,shadingEnabled:c,output:d,capType:p,stippleEnabled:u,falloffEnabled:v,wireframe:S,innerColorEnabled:m,hasAnimation:$,hasScreenSizePerspective:D,worldSized:f,imagePattern:x}=a,z=p===2,C=u&&z,y=v||C,T=u||z,w=a.usePerspectiveCorrectStipple,P=fn(a).createBuilder(e,a);r.inputs.add("position",()=>P.getTextureAttribute("position")),a.hasVVSize?r.inputs.add("sizeFeatureAttribute",()=>P.getTextureAttribute("sizeFeatureAttribute")):r.inputs.add("size",()=>P.getTextureAttribute("size")),a.hasVVOpacity&&r.inputs.add("opacityFeatureAttribute",()=>P.getTextureAttribute("opacityFeatureAttribute")),a.hasVVColor?r.inputs.add("colorFeatureAttribute",()=>P.getTextureAttribute("colorFeatureAttribute")):r.inputs.add("color",()=>P.getTextureAttribute("color")),n.include(fr),e.include(Cr,a),e.include(Ir,a),d===11?(e.varyings.add("objectAndLayerIdColorVarying","vec4"),r.code.add(s`
      vec4 getOlidColor() {
        return ${P.getTextureAttribute("olidColor")};
      }

      void forwardObjectAndLayerIdColor() {
        objectAndLayerIdColorVarying = getOlidColor();
      }
    `),n.code.add(s`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)):(r.code.add(s`void forwardObjectAndLayerIdColor() {}`),n.code.add(s`void outputObjectAndLayerIdColor() {}`));let _=l&&!o;if(_&&e.include(Ur,a),wa(r,a),o&&(f||u)){let F=f?"groundMetersToScreenRatio":"planarDistanceToScreenRatio";r.uniforms.add(new Ge(F,O=>1/(O.screenToPlanarDistanceRatio*(f?O.planarDistanceToGroundRatio:1))))}return f&&!o&&r.uniforms.add(Di,zi),r.uniforms.add(Oa,Pi,_a,new J("miterLimit",F=>F.join==="miter"?F.miterLimit:0)),r.constants.add("LARGE_HALF_FLOAT","float",65500),r.constants.add("EPS","float",.001),r.constants.add("NUM_JOIN_SUBDIVISIONS","float",a.numJoinSubdivisions),t.add("textureElementIndex","uint"),t.add("lineParameters","vec2"),i.add("vColor","vec4"),i.add("vpos","vec3",{invariant:!0}),i.add("vLineDistance","float"),i.add("vLineWidth","float"),u||(i.add("vIsInsideJoin","int"),i.add("vStretchFactor","float"),i.add("vJoinCenterLineSDFs","vec2"),i.add("vSubdivisionFactor","float")),u&&i.add("vLineSizeInv","float"),y&&i.add("vLineDistanceNorm","float"),z&&(i.add("vSegmentSDF","float"),i.add("vReverseSegmentSDF","float")),r.code.add(s`vec3 perpendicular(vec3 v) {
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
}`),r.code.add(s`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
posNdc.z /= posNdc.w;
return posNdc;
}`),r.code.add(s`
    void clip(
      inout vec4 pos,
      inout vec4 prev,
      inout vec4 next,
      ${b(w,s`inout float u0, inout float prevU0, inout float nextU0,`)}
      bool isStartVertex
    ) {
      float adjustedNearPlaneDistance = nearFar[0] * 0.99;

      if (pos.z > -nearFar[0]) {
        // Current position behind near plane, so we need to clip
        if (!isStartVertex) {
          if (prev.z < -nearFar[0]) {
            // Previous position in front of near plane
            float clipFactor = nearPlaneInterpolationFactor(adjustedNearPlaneDistance, prev, pos);
            ${b(w,s`u0 = mix(prevU0, u0, clipFactor); nextU0 = u0;`)}
            pos = mix(prev, pos, clipFactor);
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if (next.z < -nearFar[0]) {
            // Next position in front of near plane
            float clipFactor = nearPlaneInterpolationFactor(adjustedNearPlaneDistance, pos, next);
            ${b(w,s`u0 = mix(u0, nextU0, clipFactor); prevU0 = u0;`)}
            pos = mix(pos, next, clipFactor);
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        // Current position visible
        if (prev.z > -nearFar[0]) {
          // Previous position behind near plane
          float clipFactor = nearPlaneInterpolationFactor(adjustedNearPlaneDistance, pos, prev);
          ${b(w,s`prevU0 = mix(u0, prevU0, clipFactor);`)}
          prev = mix(pos, prev, clipFactor);
        }

        if (next.z > -nearFar[0]) {
          // Next position behind near plane
          float clipFactor = nearPlaneInterpolationFactor(adjustedNearPlaneDistance, next, pos);
          ${b(w,s`nextU0 = mix(nextU0, u0, clipFactor);`)}
          next = mix(next, pos, clipFactor);
        }
      }
    }
  `),vt(r),r.constants.add("aaWidth","float",+!u),r.main.add(s`
    vec3 position = ${P.getTextureAttribute("position")};
    float u0 = ${P.getTextureAttribute("u0")};
    ${b(f,s`
        float prevU0 = ${P.getTextureAttribute("u0",-1)};
        float nextU0 = ${P.getTextureAttribute("u0",1)};
        ${b(!o,s`
            u0 *= metersPerRenderUnit;
            prevU0 *= metersPerRenderUnit;
            nextU0 *= metersPerRenderUnit;
          `)}
      `)}

    // unpack values from vertex type
    float vertexType = abs(lineParameters.y);
    float lineSide = sign(lineParameters.y);
    bool isStartVertex = vertexType == 2.0 || vertexType == 4.0;
    vec3 prevPosition = ${P.getTextureAttribute("position",-1)};
    vec3 nextPosition = ${P.getTextureAttribute("position",1)};

    float coverage = 1.0;

    // Check for special value of lineParameters.y which is used by the Renderer when graphics are removed before the
    // VBO is recompacted. If this is the case, then we just project outside of clip space.
    if (lineParameters.y == 0.0) {
      gl_Position = ${xr};
    }
    else {
      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);

      bool isJoin = vertexType < 3.0;
  `),_&&r.main.add(s`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos.xyz, other.xyz);
if (!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos.xyz) * 0.5;
}`),e.include(Lr),r.code.add(s`
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

        ${b(!u,s`
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
          ${b(a.roundJoins,s`
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

              ${b(u,s`joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? endDir : startDir;`,s`joinDisplacementDir = mix(startDir, endDir, subdivisionFactor);`)}
            `)}
          displacementLen = lineWidth;
        }
      } else {
        joinDisplacementDir = perpendicular(isStartVertex ? right : left);
        ${p===0?"":s`capDisplacementDir = vec3((isStartVertex ? -right : left).xy, 0.0);`}
      }

      return (joinDisplacementDir.xy * lineSide + capDisplacementDir.xy) * displacementLen;
    }
  `),r.main.add(s`
      clip(pos, prev, next, ${b(w,s`u0, prevU0, nextU0,`)} isStartVertex);

      vec3 clippedPos = pos.xyz;
      vec3 clippedCenter = mix(pos.xyz, isStartVertex ? next.xyz : prev.xyz, 0.5);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);

      vec3 left = (pos.xyz - prev.xyz);
      vec3 right = (next.xyz - pos.xyz);

      float lineSize = getSize(${b(D,"clippedPos")});
      ${b(u&&D,"float patternLineSize = getSize(clippedCenter);")}
      ${b(u&&!D,"float patternLineSize = lineSize;")}

      ${b(f,s`
          ${b(o,s`float lineSizeScreen = lineSize * groundMetersToScreenRatio;`,s`
              float metersPerScreenPixel = max(-clippedPos.z, nearFar[0]) * metersPerRenderUnit * screenPixelSizePerDistance;
              float lineSizeScreen = lineSize / metersPerScreenPixel;
            `)}
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
  `),T&&r.main.add(s`
      float isEndVertex = float(!isStartVertex);
      vec3 segmentOrigin = mix(pos.xyz, prev.xyz, isEndVertex);
      vec3 segment = mix(right, left, isEndVertex);
      ${z?s`vec3 segmentEnd = mix(next.xyz, pos.xyz, isEndVertex);`:""}
    `),r.main.add(s`
    ${b(!u,s`
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
    ${y?s`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xyz += displacement;
  `),u||r.main.add(s`if (isJoin) {
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
}`),z&&r.main.add(s`vec2 segmentDir = normalize(segment.xy);
vSegmentSDF = noPerspectiveWrite((isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin.xy, segmentDir)), pos.w);
vReverseSegmentSDF = noPerspectiveWrite((isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd.xy, -segmentDir)), pos.w);`),u&&(o?r.main.add(s`float stippleDistanceToScreenRatio = ${f?"groundMetersToScreenRatio":"planarDistanceToScreenRatio"};`):r.main.add(s`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float stippleDistanceToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),r.main.add(s`
      float segmentLengthScreenDouble = length(segment.xy);
      float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
      float discreteStippleDistanceToScreenRatio = discretizeStippleDistanceToScreenRatio(stippleDistanceToScreenRatio);
      float segmentLengthRender = ${b(f,s`abs(mix(nextU0 - u0, u0 - prevU0, isEndVertex))`,s`length(mix(nextPosition - position, position - prevPosition, isEndVertex))`)};

      ${b(!o||f,s`
          float segmentStartRender = ${b(f,s`mix(u0, prevU0, isEndVertex)`,s`mix(u0, u0 - segmentLengthRender, isEndVertex)`)};
        `)}

      vStipplePatternStretch = stippleDistanceToScreenRatio / discreteStippleDistanceToScreenRatio;
    `),o?r.main.add(s`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteStippleDistanceToScreenRatio / stippleDistanceToScreenRatio;
float startPseudoScreen = u0 * discreteStippleDistanceToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):r.main.add(s`float startPseudoScreen = segmentStartRender * discreteStippleDistanceToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteStippleDistanceToScreenRatio;`),r.uniforms.add(new J("stipplePatternPixelSize",F=>Li(F))),r.main.add(s`
      float patternLength = patternLineSize * stipplePatternPixelSize;
      vec2 stippleDistanceLimits;

      ${b(f,s`
          stippleDistanceLimits = vec2(segmentStartRender, segmentStartRender + segmentLengthRender);
          vStipplePatternStretch = 1.0;

          ${b(x,s`
              // The v-coordinate used in case of an image pattern.
              bool isLeft = lineSide < 0.0;
              vStippleV = isLeft ? 0.0 : 1.0;
            `)}
        `,s`
          // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the
          // fragment shader
          stippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
        `)}

      vStippleDistance = mix(stippleDistanceLimits.x, stippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of
      // joins)
      if (segmentLengthScreenDouble >= EPS) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1]
        // at the original vertex positions, and slightly outside of that range at the displaced positions
        vec3 stippleDisplacement = pos.xyz - segmentOrigin;
        float stippleDisplacementFactor = dot(segment.xy, stippleDisplacement.xy) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (stippleDistanceLimits.y - stippleDistanceLimits.x);
      }

      ${b(w,s`
          float segmentStartInverseW = 1.0 / mix(pos.w, prev.w, isEndVertex);
          float segmentEndInverseW = 1.0 / mix(next.w, pos.w, isEndVertex);
          vStipplePerspective = noPerspectiveWrite(
            vec4(stippleDistanceLimits, segmentStartInverseW, segmentEndInverseW),
            pos.w
          );
        `)}

      // Cancel out perspective-correct interpolation for screen-space stipple distances.
      vStippleLimitsAndCaps.xy = noPerspectiveWrite(stippleDistanceLimits, pos.w);
      vStippleDistance = noPerspectiveWrite(vStippleDistance, pos.w);

      // Disable stipple distance limits on caps
      vStippleLimitsAndCaps.zw = isJoin ? vec2(0.0) :
               isStartVertex ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    `)),r.main.add(s`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;
      pos.z = pos.z * pos.w;

      vColor = getColor();
      vColor.a = noPerspectiveWrite(vColor.a * coverage, pos.w);

      ${S&&!o?"pos.z -= EPS * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),e.include(Fa,a),e.include(Fi),n.include(La),n.include(Ea),n.include(Aa,a),n.main.add("discardBySlice(vpos);"),u||n.code.add(s`float lineFeatheringFactor(float lineWidth, float lineDistance) {
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
}`),n.main.add(s`
    float lineWidth = noPerspectiveRead(vLineWidth);
    float lineDistance = noPerspectiveRead(vLineDistance);
    ${b(y,s`float lineDistanceNorm = noPerspectiveRead(vLineDistanceNorm);`)}
  `),S?n.main.add(s`vec4 albedo = vec4(1.0, 0.0, 1.0, 1.0);
vec4 finalColor = albedo;`):(z&&n.main.add(s`float sdf = noPerspectiveRead(min(vSegmentSDF, vReverseSegmentSDF));
vec2 fragmentPosition = vec2(min(sdf, 0.0), lineDistance);
float fragmentRadius = length(fragmentPosition);
float fragmentCapSDF = (fragmentRadius - lineWidth) * 0.5;
float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);
if (capCoverage < alphaCutoff) {
discard;
}`),C?n.main.add(s`
      vec2 stipplePosition = vec2(
        min(getStippleCapDistance(), 0.0),
        ${w?s`lineDistance / lineWidth`:s`lineDistanceNorm`}
      );
      float stippleRadius = length(stipplePosition * lineWidth);
      float stippleCapSDF = (stippleRadius - lineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(alphaCutoff, stippleCoverage);
      `):n.main.add(s`float stippleAlpha = getStippleAlpha(lineWidth);`),d!==11&&n.main.add(s`discardByStippleAlpha(stippleAlpha, alphaCutoff);`),n.uniforms.add(new ft("intrinsicColor",F=>F.color)).main.add(s`vec4 color = intrinsicColor * vColor;
color.a = noPerspectiveRead(color.a);`),m&&n.uniforms.add(new ft("innerColor",F=>F.innerColor??F.color),new J("innerWidth",(F,O)=>F.innerWidth*O.camera.pixelRatio)).main.add(s`float distToInner = abs(lineDistance) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),n.main.add("vec4 albedo = blendStipple(color, stippleAlpha);"),v&&(n.uniforms.add(new J("falloff",F=>F.falloff)),n.main.add(s`albedo.a *= pow(max(0.0, 1.0 - abs(lineDistanceNorm)), falloff);`)),u||n.main.add(s`albedo.a *= lineFeatheringFactor(lineWidth, lineDistance);`),$&&(r.main.add(`vec4 animatedAlphaTimeStamps = ${P.getTextureAttribute("timeStamps")};`),e.include(Br,a),n.main.add("albedo.a *= animatedAlpha();")),c?(i.add("vnormal","vec3"),r.include(hr,a),r.main.add("vnormal = getLocalUp(vpos, localOrigin);"),e.include(Fr,a),n.main.add("vec4 finalColor = evaluateSceneLightingFragment(vpos, vnormal, albedo);")):n.main.add("vec4 finalColor = albedo;")),n.main.add(s`outputColorHighlightOLID(applySlice(finalColor, vpos), albedo.rgb);`),e}const gn=Object.freeze(Object.defineProperty({__proto__:null,build:mn,numRoundJoinSubdivisions:1},Symbol.toStringTag,{value:"Module"}));let mt=class extends Va{constructor(a,e){super(a,e,Sr(Vi())),this.shader=new Ra(gn,()=>qi(()=>import("./RibbonLine.glsl-DDUoO4JM.js").then(t=>t.R),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]))),this.ignoreUnused=!0,this.primitiveType=e.wireframe?yt.LINES:yt.TRIANGLE_STRIP}_makePipelineState(a,e){let{output:t,hasOccludees:i}=a;return Ae({blending:Ma(t,!1,a.emissionDimmingPass),depthTest:Na(t),depthWrite:Wa(a),colorWrite:Ze,stencilWrite:i?Ft:null,stencilTest:i?e?_t:Ia:null,polygonOffset:Le(a)})}initializePipeline(a){if(a.occluder){let{hasOccludees:e}=a;this._occluderPipelineTransparent=Ae({blending:Ut,polygonOffset:Le(a),depthTest:Lt,depthWrite:null,colorWrite:Ze,stencilWrite:null,stencilTest:e?Ua:null}),this._occluderPipelineOpaque=Ae({blending:Ut,polygonOffset:Le(a),depthTest:e?Lt:Et,depthWrite:null,colorWrite:Ze,stencilWrite:e?ja:null,stencilTest:e?ka:null}),this._occluderPipelineMaskWrite=Ae({blending:null,polygonOffset:Le(a),depthTest:Et,depthWrite:null,colorWrite:null,stencilWrite:e?Ft:null,stencilTest:e?_t:null})}return this._occludeePipeline=this._makePipelineState(a,!0),this._makePipelineState(a,!1)}getPipeline(a,e,t){if(t)return this._occludeePipeline;switch(a.occluder){case 11:return this._occluderPipelineTransparent??super.getPipeline(a,e,t);case 10:return this._occluderPipelineOpaque??super.getPipeline(a,e,t);default:a.occluder;case void 0:case null:return this._occluderPipelineMaskWrite??super.getPipeline(a,e,t)}}};mt=h([Xi("esri.views.3d.webgl-engine.shaders.RibbonLineTechnique")],mt);let U=class extends Ci{constructor(e){super(),this.spherical=e,this.emissionSource=0,this.pbrMode=0,this.draped=!1,this.shadingEnabled=!1,this.worldSized=!1,this.hasScreenSizePerspective=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVVOpacity=!1,this.hasOccludees=!1,this.occluder=!1,this.receiveShadows=!0,this.hasShadowHighlights=!1,this.receiveAmbientOcclusion=!0,this.receiveGlobalIllumination=!0,this.textureCoordinateType=0,this.hasVVInstancing=!1,this.hasSliceTranslatedView=!0,this.overlayEnabled=!1,this.snowCover=!1,this.renderOccluded=!1,this.useCustomDTRExponentForWater=!1,this.hasColorTexture=!1,this.useFillLights=!1}get lineWidthRequiresPosition(){return this.hasScreenSizePerspective||this.worldSized&&!this.draped}};h([g({count:8})],U.prototype,"emissionSource",void 0),h([g({count:8})],U.prototype,"pbrMode",void 0),h([g()],U.prototype,"draped",void 0),h([g()],U.prototype,"shadingEnabled",void 0),h([g()],U.prototype,"worldSized",void 0),h([g()],U.prototype,"hasScreenSizePerspective",void 0),h([g()],U.prototype,"hasVVSize",void 0),h([g()],U.prototype,"hasVVColor",void 0),h([g()],U.prototype,"hasVVOpacity",void 0),h([g()],U.prototype,"hasOccludees",void 0),h([g()],U.prototype,"occluder",void 0),h([g()],U.prototype,"receiveShadows",void 0),h([g()],U.prototype,"hasShadowHighlights",void 0),h([g()],U.prototype,"receiveAmbientOcclusion",void 0),h([g()],U.prototype,"receiveGlobalIllumination",void 0);const ds=16;let W=class extends U{constructor(){super(...arguments),this.capType=0,this.animation=2,this.polygonOffsetIndex=0,this.numJoinSubdivisions=1,this.polygonOffset=0,this.writeDepth=!1,this.transparent=!1,this.enableOITOffset=!0,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.wireframe=!1,this.imagePattern=!1}get hasAnimation(){return this.animation!==0}get usePerspectiveCorrectStipple(){return this.worldSized&&!this.draped}};h([g({count:3})],W.prototype,"capType",void 0),h([g({count:4})],W.prototype,"animation",void 0),h([g({count:16})],W.prototype,"polygonOffsetIndex",void 0),h([g({count:8})],W.prototype,"numJoinSubdivisions",void 0),h([g({count:5})],W.prototype,"polygonOffset",void 0),h([g()],W.prototype,"writeDepth",void 0),h([g()],W.prototype,"transparent",void 0),h([g()],W.prototype,"enableOITOffset",void 0),h([g()],W.prototype,"stippleEnabled",void 0),h([g()],W.prototype,"stippleOffColorEnabled",void 0),h([g()],W.prototype,"stipplePreferContinuous",void 0),h([g()],W.prototype,"roundJoins",void 0),h([g()],W.prototype,"applyMarkerOffset",void 0),h([g()],W.prototype,"falloffEnabled",void 0),h([g()],W.prototype,"innerColorEnabled",void 0),h([g()],W.prototype,"wireframe",void 0),h([g()],W.prototype,"imagePattern",void 0);class fs extends Tr{constructor(e,t){super(e,Sn),this.produces=new Map([[2,i=>ga(i)||Ce(i)&&this.parameters.renderOccluded===8],[3,i=>va(i)],[10,i=>wt(i)&&this.parameters.renderOccluded===8],[11,i=>wt(i)&&this.parameters.renderOccluded===8],[4,i=>Ce(i)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[8,i=>Ce(i)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[18,i=>Sa(i)]]),this._configuration=new W(t)}updateConfiguration(e){super.updateConfiguration(e);let t=this.parameters.stipplePattern!=null&&this.parameters.stippleTexture!=null&&e.output!==10,i=t&&this.parameters.isImagePattern()&&this._configuration.draped,r=this.parameters.usesWorldSizedWidth(i);this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.stippleEnabled=t,this._configuration.stippleOffColorEnabled=t&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=t&&this.parameters.stipplePreferContinuous,this._configuration.numJoinSubdivisions=Ii(this.parameters.join,t),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&bn(this.parameters.markerParameters),this._configuration.polygonOffsetIndex=this.parameters.polygonOffsetIndex,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.wireframe=this.parameters.wireframe,this._configuration.animation=this.parameters.animation,this._configuration.emissionSource=+!!this.emissions,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective&&!r,this._configuration.worldSized=r,this._configuration.imagePattern=i}get visible(){return this.parameters.color[3]>=we||this.parameters.stipplePattern!=null&&(this.parameters.stippleOffColor?.[3]??0)>we}get emissions(){return this.parameters.emissiveStrength>0?this.parameters.renderOccluded===8?1:2:0}setParameters(e,t){e.animation=this.parameters.animation,super.setParameters(e,t)}intersectRayDraped({attributes:e},t,i,r,n,l,o){if(!t.options.selectionMode)return;let c=this._getLineSize(e,!0),d=i[0],p=i[1],u=Ht(c,l,o,this.parameters.usesWorldSizedWidth()),v=Number.MAX_VALUE,S=0;for(let m of Jt(ie,ve,this.parameters,e)){let $=d-ie[0],D=p-ie[1],f=ve[0]-ie[0],x=ve[1]-ie[1],z=f*$+x*D,C=f*f+x*x,y=dt(z/C,0,1),T=f*y-$,w=x*y-D,P=T*T+w*w;P<v&&(v=P,S=m)}v<u*u&&r(n.distance,n.renderDistance,n.normal,S)}intersectRay(e,t,i,r,n,l){let{options:o,camera:c,rayBegin:d,rayEnd:p}=i;if(!o.selectionMode||!e.visible||!c)return;if(!Wt(t)){pt.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");return}let u=e.attributes,v=u.get("position").data,S=this._getLineSize(u),m=et;Ue(m,i.point);let $=S*c.pixelRatio,D=Be*c.pixelRatio,f=$/2+D;ee(be[0],m[0]-f,m[1]+f,0),ee(be[1],m[0]+f,m[1]+f,0),ee(be[2],m[0]+f,m[1]-f,0),ee(be[3],m[0]-f,m[1]-f,0);for(let C=0;C<4;C++)if(!c.unprojectFromRenderScreen(be[C],Z[C]))return;_e(c.eye,Z[0],Z[1],it),_e(c.eye,Z[1],Z[2],at),_e(c.eye,Z[2],Z[3],rt),_e(c.eye,Z[3],Z[0],nt);let x=Number.MAX_VALUE,z=0;for(let C of this._forEachTransformedLineSegment(N,M,v,t,je(this.parameters,u))){if(G(it,N)<0&&G(it,M)<0||G(at,N)<0&&G(at,M)<0||G(rt,N)<0&&G(rt,M)<0||G(nt,N)<0&&G(nt,M)<0)continue;let y=c.projectToRenderScreen(N,Se),T=c.projectToRenderScreen(M,xe);if(y==null||T==null)continue;if(y[2]<0&&T[2]>0){De(Y,N,M);let _=c.frustum,F=-G(_[4],N)/Me(Y,Tt(_[4]));if(te(Y,Y,F),$t(N,N,Y),!c.projectToRenderScreen(N,y))continue}else if(y[2]>0&&T[2]<0){De(Y,M,N);let _=c.frustum,F=-G(_[4],M)/Me(Y,Tt(_[4]));if(te(Y,Y,F),$t(M,M,Y),!c.projectToRenderScreen(M,T))continue}else if(y[2]<0&&T[2]<0)continue;y[2]=0,T[2]=0;let w=he(y,T,tt),P=oa(w,m);if(!(P>=x)){if(this.parameters.screenSizePerspective){let _=this.computeScreenSizePerspectiveWidth(w,N,M,m,c,S,D);if(P>=_*_)continue}x=P,X(Zt,N),X(Kt,M),z=C}}if(x<f*f){let C=Number.MAX_VALUE;if(la(he(Zt,Kt,tt),he(d,p,Qt),q)){De(q,q,d);let y=ue(q);te(q,q,1/y),C=y/fe(d,p)}l(C,C,q,z)}}intersectScreenPolygon(e,t,i,r){let{options:n,camera:l,screenPolygonPrimitiveProcessor:o}=i;if(!n.selectionMode||!e.visible)return null;if(!Wt(t))return pt.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix"),null;let c=e.attributes,d=c.get("position").data,p=this._getLineSize(c),u=Be,v=u*l.pixelRatio,S=new wi(4);for(let m of this._forEachTransformedLineSegment(N,M,d,t,je(this.parameters,c)))for(let[$,D]of o.processLineSegment(yn,N,M)){if(!Ba(l,$,D,Se,xe))continue;let f=he(Se,xe,tt),x=p/2+u;this.parameters.screenSizePerspective&&(Pt(et,Se,xe,.5),x=Math.max(x,this.computeScreenSizePerspectiveWidth(f,$,D,et,l,p,v)/l.pixelRatio)),l.renderToScreen(Se,qt),l.renderToScreen(xe,Xt),At(r,qt,Xt,x)&&(ca(he($,D,Qt),l.eye,le),S.updateIfCloserFromValues(fe(l.eye,le),m,le,null))}return S}intersectScreenPolygonDraped({attributes:e},t,i,r,n,l){if(!i.options.selectionMode)return null;let o=Ht(this._getLineSize(e,!0),n,l,this.parameters.usesWorldSizedWidth());for(let c of Jt(ie,ve,this.parameters,e,t))if(At(r,ie,ve,o))return new Oi(c);return null}createBufferWriter(){return new xn(Vi(this.parameters),Ri(this.parameters),this.parameters)}createGLMaterial(e){return new vn(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}update(e){return this.parameters.hasAnimation?(this.setParameters({timeElapsed:Zi(e.time)},!1),e.dt!==0):!1}computeScreenSizePerspectiveWidth(e,t,i,r,n,l,o){let c=pa(e,r);Pt(le,t,i,c),ne(Yt,le,n.viewMatrix);let d=ue(Yt),p=this.computeCameraAbsCosAngle(le,n,this._configuration.spherical);return Gt.update(p,d,this.parameters.screenSizePerspective,this.parameters.screenSizePerspectiveMinPixelReferenceSize),Gt.apply(l)*n.pixelRatio/2+o}computeCameraAbsCosAngle(e,t,i){return i?ke(q,e):ee(q,0,0,1),De(Re,e,t.eye),ke(Re,Re),Math.abs(Me(q,Re))}_getLineSize(e,t=!1){let i=this.parameters.width;if(this.parameters.vvSize){let r=e.get("sizeFeatureAttribute").data[0];Number.isNaN(r)?t&&(i*=this.parameters.vvSize.fallback[0]):i*=dt(this.parameters.vvSize.offset[0]+r*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else e.has("size")&&(i*=e.get("size").data[0]);return i}*_forEachTransformedLineSegment(e,t,i,r,n){let l=n?i.length-2:i.length-5;for(let o=0;o<l;o+=3){e[0]=i[o]+r[12],e[1]=i[o+1]+r[13],e[2]=i[o+2]+r[14];let c=(o+3)%i.length;t[0]=i[c]+r[12],t[1]=i[c+1]+r[13],t[2]=i[c+2]+r[14],yield o/3}}}class vn extends Ga{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures?.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){let{stipplePattern:t}=this._material.parameters;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.getTechnique(mt,e)}}class Sn extends Ja{constructor(){super(...arguments),this._width=0,this.color=ut,this.join="miter",this.cap=0,this.miterLimit=5,this.shadingEnabled=!1,this.writeDepth=!0,this.polygonOffset=0,this.polygonOffsetIndex=0,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1,this.timeElapsed=Te(0),this.animation=0,this.animationSpeed=1,this.trailLength=1,this.startTime=Te(0),this.endTime=Te(1/0),this.worldSized=!1}get width(){return this.isImagePattern()?this.stipplePattern.width:this._width}set width(e){this._width=e}get transparent(){return this.color[3]<1||this.hasAnimation||this.stipplePattern!=null&&(this.stippleOffColor?.[3]??0)<1}get hasAnimation(){return this.animation!==0}usesWorldSizedWidth(e=this.isImagePattern()){return this.worldSized||e}isImagePattern(){return _i(this.stipplePattern)&&this.stippleTexture!=null}}class xn{constructor(e,t,i){this.layout=e,this.textureBufferLayout=t,this._parameters=i,this.numJoinSubdivisions=Ii(this._parameters.join,this._parameters.stipplePattern!=null)}_isClosed(e){return je(this._parameters,e)}allocate(e){return this.layout.createBuffer(e)}elementCountTextureBuffer(e){return e.get("position").data.length/3+(this._isClosed(e)?3:2)}elementCount(e){let t=e.get("position").indices.length/2+1,i=this._isClosed(e),r=i?2:4,n=+!i,l=i?t:t-1,o=this.numJoinSubdivisions*2+4;return r+=(l-n)*o,r+=2,this._parameters.wireframe&&(r=2+(r-2)*4),r}write(e,t,i,r,n,l){l!=null&&this._writeTextureBuffer(e,i,l),r!=null&&this._writeVertexBuffer(e,i,r,n)}_writeTextureBuffer(e,t,i){let r=t.get("position"),n=r.data.length/3,l=this._isClosed(t),{buffer:o,offset:c}=i,d=o.getField("position",bi),p=o.getField("u0",me),u=o.getField("sizeFeatureAttribute",me),v=o.getField("size",me),S=o.getField("colorFeatureAttribute",me),m=o.getField("color",Ct),$=o.getField("olidColor",Ct),D=o.getField("timeStamps",da),f=o.getField("opacityFeatureAttribute",me),x=t.get("sizeFeatureAttribute")?.data,z=t.get("size")?.data,C=t.get("colorFeatureAttribute")?.data,y=t.get("color")?.data,T=t.get("opacityFeatureAttribute")?.data,w=t.get("distanceToStart")?.data,P=t.get("timeStamps");K(d!==null,"Expected valid position field in texture buffer"),K(p!==null,"Expected valid u0 field in texture buffer");let _=0;for(let O=0;O<n;++O){this._getTransformedPosition(ce,r.data,O,e),O>0&&(w==null?_+=fe(Ie,ce):_=w[O]??_);let E=c+O+1;if(d.setVec(E,ce),p.set(E,_),X(Ie,ce),u&&u.set(E,x?.length===1?x[0]:x?.[O]??0),v&&v.set(E,z?.length===1?z[0]:z?.[O]??1),S&&S.set(E,C?.length===1?C[0]:C?.[O]??0),m)if(y!=null){let V=Math.min(O*4,y.length-4);m.setValues(E,y[V],y[V+1],y[V+2],y[V+3])}else m.setValues(E,1,1,1,1);f&&f.set(E,T?.length===1?T[0]:T?.[O]??0)}if(D!=null&&P!=null){K(P.size===4);let O=P.data;for(let E=0;E<n;++E){let V=E*4,H=c+E+1;D.set(H,0,O[V]),D.set(H,1,O[V+1]),D.set(H,2,O[V+2]),D.set(H,3,O[V+3])}}if(l){let O=c,E=c+1,V=c+2,H=c+n,xt=H+1,ki=H+2;o.copyItem(H,O),o.copyItem(E,xt),o.copyItem(V,ki),d.getVec(H,Ie),d.getVec(E,ce);let ji=w?.[n]??_+fe(Ie,ce);p.set(xt,ji)}else{let O=c,E=c+1,V=c+n,H=V+1;o.copyItem(E,O),o.copyItem(V,H)}let F=t.get("olidColor");Ti()&&F!=null&&$!=null&&ht(F,4,$,c)}_writeVertexBuffer(e,t,i,r){let{buffer:n,offset:l}=i,{layout:o}=this,c=t.get("position"),d=c.indices,p=c.data.length/3,u=this._isClosed(t),v=p+(u?3:2);d&&d.length!==2*(p-1)&&console.warn("RibbonLineMaterial does not support indices");let S=n.getField("textureElementIndex",ua);K(S!=null,"Missing texture buffer index field"),K(r!=null,"Using a texture layout, but the texture range for this instance was not provided");let m=r.from;K(r.numElements===v,"Expected number of elements in TextureBuffer to equal number of points");let $=new Float32Array(n.buffer),D=new Float16Array(n.buffer),f=new Uint32Array(n.buffer),x=o.stride/4,z=l*x,C=z,y=$.BYTES_PER_ELEMENT/D.BYTES_PER_ELEMENT,T=(_,F,O)=>{let E=O+1;f[z]=m+E,z++;let V=z*y;D[V++]=_,D[V++]=F,z=Math.ceil(V/y)};z+=x;let w=0,P=0;u?(w=0,P=p):(T(1,-4,0),T(1,4,0),w=1,P=p-1);for(let _=w;_<P;_++){T(0,-1,_),T(0,1,_);let F=this.numJoinSubdivisions;for(let O=0;O<F;++O){let E=(O+1)/(F+1);T(E,-1,_),T(E,1,_)}T(1,-2,_),T(1,2,_)}u?(T(0,-1,P),T(0,1,P)):(T(0,-5,P),T(0,5,P)),Qe($,C+x,$,C,x),z=Qe($,z-x,$,z,x),this._parameters.wireframe&&this._addWireframeVertices(n,C,z,x)}_getTransformedPosition(e,t,i,r){let n=i*3;ee(e,t[n+0],t[n+1],t[n+2]),r&&ne(e,e,r)}_addWireframeVertices(e,t,i,r){let n=new Uint8Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT),l=new Uint8Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,(i-t)*Float32Array.BYTES_PER_ELEMENT),o=r*Float32Array.BYTES_PER_ELEMENT,c=0,d=p=>c=Qe(l,p,n,c,o);for(let p=0;p<=l.length-4*o;p+=o*2)d(p),d(p+2*o),d(p+1*o),d(p+2*o),d(p+1*o),d(p+3*o)}}function Qe(a,e,t,i,r){for(let n=0;n<r;n++)t[i++]=a[e++];return i}function je(a,e){return a.isClosed?e.get("position").indices.length>2:!1}function Ht(a,e,t,i){return i?a/(2*t)+Be*e:(a/2+Be)*e}function*Jt(a,e,t,i,r){let n=i.get("position").data,l=je(t,i)?n.length-2:n.length-5,o=r?.[0]??0,c=r?.[1]??0;Q(a,n[0]+o,n[1]+c);for(let d=3;d<l+3;d+=3){let p=d%n.length;Q(e,n[p]+o,n[p+1]+c),yield d/3,Ue(a,e)}}function bn(a){return a.anchor===1&&a.hideOnShortSegments&&a.placement==="begin-end"&&a.worldSpace}function Ii(a,e){let t=+!!e;switch(a){case"miter":case"bevel":return t;case"round":return hn+t}}const Gt=new Ha,N=L(),M=L(),ie=B(),ve=B(),le=L(),Yt=L(),Re=L(),Y=L(),q=L(),et=L(),Se=se(),xe=se(),qt=mi(),Xt=mi(),Zt=L(),Kt=L(),tt=xi(),Qt=xi(),Ie=L(),ce=L(),be=[se(),se(),se(),se()],Z=[L(),L(),L(),L()],it=Je(),at=Je(),rt=Je(),nt=Je(),Be=4,yn=[L(),L()],$n=()=>pt.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function Pn(a){return{cachedResult:a.cachedResult,arcade:a.arcade?{func:a.arcade.func,context:a.arcade.modules.arcadeUtils.createExecContext(null,{sr:a.arcade.context.spatialReference}),modules:a.arcade.modules}:null}}async function hs(a,e,t,i){let r=a?.expression;if(typeof r!="string")return null;let n=Cn(r);if(n!=null)return{cachedResult:n};let l=await Ki();Qi(t);let o=l.arcadeUtils,c=o.createSyntaxTree(r);if(!c)return null;if(o.dependsOnView(c))return i?.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0};let d=o.createFunction(c);return d?{arcade:{modules:l,func:d,context:o.createExecContext(null,{sr:e})}}:null}function Dn(a,e,t){return a.arcadeUtils.arcadeFeature.createFromGraphicLikeObject(a.arcadeUtils.createArcadeGeometryFromDehydratedGeometry(e.geometry),e.attributes,t,null)}function zn(a,e){if(a!=null&&!Wi(a)){if(!e||!a.arcade){$n().errorOncePerTick("Arcade support required but not provided");return}a.arcade.modules.arcadeUtils.updateExecContext(a.arcade.context,e)}}function Tn(a){if(a!=null){if(Wi(a))return a.cachedResult;let e=a.arcade,t=e?.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof t!="number"&&(a.cachedResult=0,t=0),t}return 0}function ms(a,e=!1){let t=a?.featureExpressionInfo,i=t?.expression;return!e&&i!=="0"&&(t=null),t??null}const gs={cachedResult:0};function Wi(a){return a.cachedResult!=null}function Cn(a){return a==="0"?0:null}class Ni{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.mode=null,this.centerInElevationSR=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=ea(e)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){let i=this.calculateOffsetRenderUnits(t);return this.featureExpressionInfoContext==null?e+i:i}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset,i=this.featureExpressionInfoContext;return i!=null&&(t+=Tn(i)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=ta(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}setFeatureExpressionInfoContext(e){this._featureExpressionInfoContext=e}updateFeatureExpressionInfoContextForGraphic(e,t,i){e.arcade?(this._featureExpressionInfoContext=Pn(e),this.updateFeatureExpressionFeature(t,i)):this._featureExpressionInfoContext=e}updateFeatureExpressionFeature(e,t){let i=this.featureExpressionInfoContext;i?.arcade&&(i.cachedResult=void 0,zn(this._featureExpressionInfoContext,e.geometry?Dn(i.arcade.modules,e,t):null))}static fromElevationInfo(e){let t=new Ni;return e!=null&&t.setFromElevationInfo(e),t}}function Ye(a,e){return a.size===e?new wn(a):null}let wn=class{constructor(e){this._attribute=e}get count(){return this._attribute.indices.length}get(e,t=0){let{data:i,indices:r,stride:n}=this._attribute;return i[r[e]*n+t]}getVec(e,t){let{data:i,indices:r,size:n,stride:l}=this._attribute,o=r[e]*l;for(let c=0;c<n;c++)t[c]=i[o+c];return t}};function ei(a,e){return qe(a,e,1,Ye)}function ti(a,e){return qe(a,e,2,Ye)}function We(a,e){return qe(a,e,3,Ye)}function ii(a,e){return qe(a,e,4,Ye)}function qe(a,e,t,i){if(a.type===1){let{vertex:n}=a.buffers,l=n.layout.fields.get(e);return l==null||l.constructor.ElementCount!==t?null:n.getField(e,l.constructor)}let r=a.attributes.get(e);return r==null?null:i(r,t)}class On extends yi{constructor(){super(...arguments),this.primitiveVertexCount=1}computeAttachmentOrigin(e,t,i){return Ya(e,t,i)}}class A extends Ci{constructor(e,t){super(),this.spherical=e,this.polygonOffset=0,this.enableOITOffset=!1,this.screenCenterOffsetUnitsEnabled=!1,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.occludedFragmentFade=!1,this.hasOcclusionTexture=!1,this.hasFocusAreaStyle=!1,this.hasVertexColor=!0,this.hasVertexSize=!0,this.hasVertexRotation=!0,this.hasVertexUVi=!0,this.hasVertexCenterOffset=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.hasVVInstancing=!1,this.snowCover=!1,this.renderOccluded=!1,this.transparentOccluded=t}}h([g()],A.prototype,"transparentOccluded",void 0),h([g({count:5})],A.prototype,"polygonOffset",void 0),h([g()],A.prototype,"enableOITOffset",void 0),h([g()],A.prototype,"screenCenterOffsetUnitsEnabled",void 0),h([g()],A.prototype,"signedDistanceFieldEnabled",void 0),h([g()],A.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),h([g()],A.prototype,"hasVVSize",void 0),h([g()],A.prototype,"hasVVColor",void 0),h([g()],A.prototype,"hasVerticalOffset",void 0),h([g()],A.prototype,"hasScreenSizePerspective",void 0),h([g()],A.prototype,"hasRotation",void 0),h([g()],A.prototype,"debugDrawLabelBorder",void 0),h([g()],A.prototype,"depthTestEnabled",void 0),h([g()],A.prototype,"pixelSnappingEnabled",void 0),h([g()],A.prototype,"draped",void 0),h([g()],A.prototype,"occludedFragmentFade",void 0),h([g()],A.prototype,"hasOcclusionTexture",void 0),h([g()],A.prototype,"hasFocusAreaStyle",void 0),h([g()],A.prototype,"hasVertexColor",void 0),h([g()],A.prototype,"hasVertexSize",void 0),h([g()],A.prototype,"hasVertexRotation",void 0),h([g()],A.prototype,"hasVertexUVi",void 0),h([g()],A.prototype,"hasVertexCenterOffset",void 0);class Ss extends On{constructor(e,t,i=!1){super(e,In),this.produces=new Map([[12,r=>Fe(r)&&!this.parameters.drawAsLabel&&!this._configuration.transparentOccluded],[13,r=>Fe(r)&&!this.parameters.drawAsLabel&&this._configuration.transparentOccluded],[14,r=>Fe(r)&&this.parameters.drawAsLabel],[18,r=>this.parameters.draped&&Fe(r)]]),this._visible=!0,this._configuration=new A(t,i)}updateConfiguration(e){super.updateConfiguration(e);let{parameters:t,_configuration:i}=this,r=t.draped;i.enableOITOffset=e.enableOITOffset,i.hasSlicePlane=this.parameters.hasSlicePlane,i.hasVerticalOffset=!!this.parameters.verticalOffset,i.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,i.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",i.polygonOffset=this.parameters.polygonOffset,i.draped=r,i.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,i.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,i.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,i.hasRotation=this.parameters.hasRotation,i.hasVVSize=!!this.parameters.vvSize,i.hasVVColor=!!this.parameters.vvColor,i.occludedFragmentFade=!r&&!!this.parameters.occludedFragmentOpacity,i.hasFocusAreaStyle=this.parameters.focusAreaStyle!=null,i.depthTestEnabled=this.parameters.depthEnabled,i.hasVertexColor=this.parameters.hasVertexColor,i.hasVertexSize=this.parameters.hasVertexSize,i.hasVertexRotation=this.parameters.hasVertexRotation,i.hasVertexUVi=this.parameters.hasVertexUVi,i.hasVertexCenterOffset=this.parameters.hasVertexCenterOffset,Ce(e.output)&&(i.debugDrawLabelBorder=!!qa.LABELS_SHOW_BORDER),i.hasOcclusionTexture=!t.drawAsLabel&&i.transparentOccluded&&xa(e.output)}intersectRay(e,t,i,r,n,l){let{options:{selectionMode:o,hud:c,excludeLabels:d},point:p,camera:u}=i,{parameters:v}=this;if(o&&c&&(!d||!v.isLabel)&&e.visible&&p&&u){for(let{renderScreenPosition:S,screenSize:m,pixelRatioTolerance:$,halfOutlineSize:D,rotationAngle:f,anchor:x,centerView:z}of this._forEachScreenSpaceHUDInstance(li,e,t,u))if(ri(p,S[0],S[1],m,$,D,f,v,x)){let C=i.ray;if(Ne[0]=p[0],Ne[1]=p[1],Ne[2]=S[2],u.unprojectFromRenderScreen(Ne,R)){let y=L();X(y,C.direction);let T=1/ue(y);te(y,y,T);let w=fe(C.origin,R)*T,P=L();ne(P,z,u.inverseViewMatrix),l(w,w,y,-1,P)}}}}*_forEachScreenSpaceHUDInstance(e,t,i,r){let{parameters:n}=this,l=We(t,"position"),o=ti(t,"size"),c=We(t,"normal"),d=ei(t,"rotation"),p=We(t,"centerOffset"),u=ii(t,"featureAttribute"),v=n.size,S=Dt(si,i),m=n.centerOffsetUnits==="screen";for(let $=0;$<l.count;$++){let{scaleX:D,scaleY:f}=di(u?.getVec($,oi)??null,n,r.pixelRatio);if(l.getVec($,R),ne(R,R,i),ne(R,R,r.viewMatrix),p?p.getVec($,j):ee(j,0,0,0),!m&&(R[0]+=j[0],R[1]+=j[1],j[2]!==0)){let y=j[2];ke(j,R),De(R,R,te(j,j,y))}c.getVec($,ae),zt(ae,ae,S);let{normal:x,cosAngle:z}=ai(ae,r,pi),C=ui(n,R,z,r,st);if(Xe(R,R,x,C),r.applyProjection(R,k),k[0]>-1){m&&(j[0]||j[1])&&(k[0]+=j[0]*r.pixelRatio,j[1]!==0&&(k[1]+=st.alignmentEvaluator.apply(j[1])*r.pixelRatio),r.unapplyProjection(k,R)),k[0]+=n.screenOffset[0]*r.pixelRatio,k[1]+=n.screenOffset[1]*r.pixelRatio,k[0]=Math.floor(k[0]),k[1]=Math.floor(k[1]),I[0]=v[0],I[1]=v[1],o!=null&&(I[0]*=o.get($,0),I[1]*=o.get($,1)),st.evaluator.applyVec2(I,I);let y=0;n.textureIsSignedDistanceField&&(y=Math.min(n.outlineSize,.5*I[0])*r.pixelRatio/2),I[0]*=D,I[1]*=f,X(e.centerView,R),ee(e.renderScreenPosition,k[0],k[1],k[2]),Ue(e.screenSize,I),e.pixelRatioTolerance=An*r.pixelRatio,e.halfOutlineSize=y,e.rotationAngle=n.rotation+(d?.get($)??0),e.anchor=Nt(n),yield e}}}*_forEachDrapedHUDInstance(e,t,i){let r=We(t,"position"),n=ti(t,"size"),l=ei(t,"rotation"),o=ii(t,"featureAttribute"),c=this.parameters,d=c.size;e.pixelRatioTolerance=Vn*i,e.anchor=Nt(c);for(let p=0;p<r.count;p++){let{scaleX:u,scaleY:v}=di(o?.getVec(p,oi)??null,c,i);e.x=r.get(p,0),e.y=r.get(p,1),I[0]=d[0],I[1]=d[1],n!=null&&(I[0]*=n.get(p,0),I[1]*=n.get(p,1)),e.halfOutlineSize=0,c.textureIsSignedDistanceField&&(e.halfOutlineSize=Math.min(c.outlineSize,.5*I[0])*i/2),I[0]*=u,I[1]*=v,Ue(e.screenSize,I),e.rotationAngle=c.rotation+(l?.get(p)??0),yield e}}intersectRayDraped(e,t,i,r,n,l){let o=this.parameters;for(let{x:c,y:d,screenSize:p,pixelRatioTolerance:u,halfOutlineSize:v,rotationAngle:S,anchor:m}of this._forEachDrapedHUDInstance(ci,e,l))ri(i,c,d,p,u,v,S,o,m)&&r(n.distance,n.renderDistance,n.normal,-1)}intersectScreenPolygonDraped(e,t,i,r,n){if(!i.options.selectionMode||i.options.excludeLabels&&this.parameters.isLabel)return null;let l=this.parameters;for(let{x:o,y:c,screenSize:d,pixelRatioTolerance:p,halfOutlineSize:u,rotationAngle:v,anchor:S}of this._forEachDrapedHUDInstance(ci,e,n))if(ni(r,o+t[0],c+t[1],d,p,u,v,l,S,!1))return new Oi(-1);return null}intersectScreenPolygon(e,t,i,r){let{options:{selectionMode:n,hud:l,excludeLabels:o},camera:c}=i,{parameters:d}=this;if(!n||!l||o&&d.isLabel||!e.visible||t==null)return null;let p=new wi(1),u=1/c.pixelRatio;for(let{renderScreenPosition:v,screenSize:S,pixelRatioTolerance:m,halfOutlineSize:$,rotationAngle:D,anchor:f,centerView:x}of this._forEachScreenSpaceHUDInstance(li,e,t,c)){let z=ne(R,x,c.inverseViewMatrix);if(!i.screenPolygonPrimitiveProcessor?.validatePoint(z))continue;let C=v[0]*u,y=(c.fullHeight-v[1])*u;if(ct[0]=S[0]*u,ct[1]=S[1]*u,ni(r,C,y,ct,m*u,$*u,D,d,f,!0)){let T=fe(c.eye,z);p.updateIfCloserFromValues(T,-1,z,null)}}return p.valid?p:null}createBufferWriter(){return new Wn(this.parameters)}createPrimitivePositionReader(e,t){K(t!=null,"HUD geometry requires instancing");let i=e.vertex.getField("position",bi);return r=>i.getVec(0,r)}applyShaderOffsets(e,t,i,r,n,l,o,c){zt(ot,i,Dt(si,r));let d=ai(ot,o,pi),p=Nn(ue(t),o),u=ui(this.parameters,t,d.cosAngle,o,c);Xe(t,t,d.normal,u+p),Xe(e,e,ot,u+p);let v=l+u;this._applyPolygonOffsetView(t,d,v,o,t),this._applyCenterOffsetView(t,n,t)}applyShaderOffsetsNDC(e,t,i,r,n,l){return this._applyCenterOffsetNDC(e,t,r,n),l!=null&&X(l,n),this._applyPolygonOffsetNDC(n,i,r,n),n}_applyPolygonOffsetView(e,t,i,r,n){let l=r.aboveGround?1:-1,o=Math.sign(i);o===0&&(o=l);let c=l*o;if(this.parameters.shaderPolygonOffset<=0)return X(n,e);let d=dt(Math.abs(t.cosAngle),.01,1),p=1-Math.sqrt(1-d*d)/d/r.viewport[2];return c>0?te(n,e,p):te(n,e,1/p),n}_applyCenterOffsetView(e,t,i){let r=this.parameters.centerOffsetUnits!=="screen";return i!==e&&X(i,e),r&&(i[0]+=t[0],i[1]+=t[1],t[2]&&(ke(ae,i),ia(i,i,te(ae,ae,t[2])))),i}_applyCenterOffsetNDC(e,t,i,r){let n=this.parameters.centerOffsetUnits!=="screen";return r!==e&&X(r,e),n||(r[0]+=t[0]/i.fullWidth*2,r[1]+=t[1]/i.fullHeight*2),r}_applyPolygonOffsetNDC(e,t,i,r){let n=this.parameters.shaderPolygonOffset;if(e!==r&&X(r,e),n){let l=i.aboveGround?1:-1,o=l*Math.sign(t);r[2]-=(o||l)*n}return r}set visible(e){this._visible=e}get visible(){let{color:e,outlineSize:t,outlineColor:i}=this.parameters,r=e[3]>=we||t>=we&&i[3]>=we;return this._visible&&r}createGLMaterial(e){return new _n(e)}calculateRelativeScreenBounds(e,t,i=gi()){return Fn(this.parameters,e,t,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}}class _n extends gr{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(Pr,e)}}function Fn(a,e,t,i){i[0]=a.anchorPosition[0]*-e[0]+a.screenOffset[0]*t,i[1]=a.anchorPosition[1]*-e[1]+a.screenOffset[1]*t}function ai(a,e,t){return ne(t.normal,a,e.viewInverseTransposeMatrix),t.cosAngle=Me(t.normal,Rn),t}function ri(a,e,t,i,r,n,l,o,c){let d=Mi(e,t,i,r,n,o,c,Ui);return Q(re,e,t),ze(ye,a,re,Si(l)),ye[0]>d[0]&&ye[0]<d[2]&&ye[1]>d[1]&&ye[1]<d[3]}function ni(a,e,t,i,r,n,l,o,c,d){let p=Mi(e,t,i,r,n,o,c,Ui,d);if(Q(pe,p[0],p[1]),Q($e,p[2],p[1]),Q(de,p[2],p[3]),Q(Pe,p[0],p[3]),l!==0){let u=Si(l);Q(re,e,t),ze(pe,pe,re,u),ze($e,$e,re,u),ze(de,de,re,u),ze(Pe,Pe,re,u),na(p),Oe(p,pe),Oe(p,$e),Oe(p,de),Oe(p,Pe)}return Qa(a,p)?Vt(a,pe,$e,de)||Vt(a,pe,de,Pe):!1}function Mi(a,e,t,i,r,n,l,o,c=!1){let d=a-i-t[0]*l[0],p=d+t[0]+2*i,u=c?1-l[1]:l[1],v=e-i-t[1]*u,S=v+t[1]+2*i,m=n.distanceFieldBoundingBox;return n.textureIsSignedDistanceField&&m!=null&&(d+=t[0]*m[0],v+=t[1]*(c?1-m[3]:m[1]),p-=t[0]*(1-m[2]),S-=t[1]*(c?m[1]:1-m[3]),d-=r,p+=r,v-=r,S+=r),o[0]=d,o[1]=v,o[2]=p,o[3]=S,o}const st=new Xa,R=L(),ae=L(),k=He(),Ne=se(),ot=L(),ye=B(),re=B(),si=ra(),j=L(),lt=L(),oi=He(),Ui=gi(),pe=B(),$e=B(),de=B(),Pe=B(),ct=B();class Ln{constructor(){this.renderScreenPosition=L(),this.screenSize=B(),this.centerView=L(),this.pixelRatioTolerance=0,this.halfOutlineSize=0,this.rotationAngle=0,this.anchor=B()}}class En{constructor(){this.x=0,this.y=0,this.screenSize=B(),this.pixelRatioTolerance=0,this.halfOutlineSize=0,this.rotationAngle=0,this.anchor=B()}}const li=new Ln,ci=new En,pi={normal:L(),cosAngle:0},An=1,Vn=2,I=vi(0,0),Rn=sa(0,0,1);class In extends mr{constructor(){super(...arguments),this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1,this.color=ut,this.size=aa,this.polygonOffset=0,this.anchorPosition=vi(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=ut,this.outlineSize=0,this.distanceFieldBoundingBox=He(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.hasVertexColor=!1,this.hasVertexSize=!1,this.hasVertexRotation=!1,this.hasVertexUVi=!1,this.hasVertexCenterOffset=!1,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.focusAreaStyle=null,this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}class Wn{constructor(e){this.baseInstanceLayout=br,this.layout=yr(e)}elementCount(e){return e.get("position").indices.length}elementCountBaseInstance(e){return e.get("uv0").indices.length}write(e,t,i,r){if(r==null)return;let{buffer:n,offset:l}=r,{position:o,normal:c,color:d,size:p,rotation:u,centerOffset:v,groundDistance:S,featureAttribute:m,uvi:$,olidColor:D}=n;er(i.get("position"),e,o,l),tr(i.get("normal"),t,c,l);let f=i.get("position").indices.length;if($){let x=i.get("uvi")?.data;if(x&&x.length>=4){let[z,C,y,T]=x;for(let w=0;w<f;++w){let P=l+w;$.setValues(P,z,C,y,T)}}}if(d&&ht(i.get("color"),4,d,l),p&&Rt(i.get("size"),p,l),u&&It(i.get("rotation"),u,l),v&&(i.get("centerOffset")?ir(i.get("centerOffset"),v,l):Ee(v,l,f)),i.get("groundDistance")?It(i.get("groundDistance"),S,l):Ee(S,l,f),m&&(i.get("featureAttribute")?ar(i.get("featureAttribute"),m,l):Ee(m,l,f)),D!=null){let x=i.get("olidColor");x==null?Ee(D,l,f):ht(x,4,D,l)}}writeBaseInstance(e,t){let{uv0:i}=t;Rt(e.get("uv0"),i,0)}rebaseBuffers(e,t){if(t==null)return;let{buffer:i,offset:r}=t;i.copyFrom(e.vertex,0,r)}}function di(a,e,t){return a==null||e.vvSize==null?{scaleX:t,scaleY:t}:(Za(lt,e,a),{scaleX:lt[0]*t,scaleY:lt[1]*t})}function Nn(a,e){let t=e.computeRenderPixelSizeAtDistance(a)*$r;return(e.aboveGround?1:-1)*t}function ui(a,e,t,i,r){if(!a.verticalOffset?.screenLength){let c=ue(e);return r.update(t,c,a.screenSizePerspective,a.screenSizePerspectiveMinPixelReferenceSize,a.screenSizePerspectiveAlignment,null),0}let n=ue(e),l=a.screenSizePerspectiveAlignment??a.screenSizePerspective,o=Ka(i,n,a.verticalOffset,t,l,a.screenSizePerspectiveMinPixelReferenceSize);return r.update(t,n,a.screenSizePerspective,a.screenSizePerspectiveMinPixelReferenceSize,a.screenSizePerspectiveAlignment,null),o}export{Ss as A,fs as E,hn as O,hs as a,Tr as b,es as c,gs as d,ds as e,Ur as f,Lr as g,as as h,rs as i,Fr as j,mn as k,ns as l,pn as m,on as n,Ni as o,Cr as p,U as r,Fi as t,ms as u};
//# sourceMappingURL=HUDMaterial-COlINgVe.js.map
