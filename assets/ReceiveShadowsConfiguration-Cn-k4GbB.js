const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GlobalIlluminationUpscale.glsl-CgRIfnFS.js","assets/OutputColorHighlightOLID.glsl-CznzbIdZ.js","assets/index-B05090t7.js","assets/index-DnQv3brQ.css","assets/Indices-Cl2pWYHi.js","assets/sphere-CRTtdn4-.js","assets/ray-BXilw2mC.js","assets/vectorStacks-Dd-lJG_a.js","assets/quatf64-aQ5IuZRd.js","assets/InterleavedLayout-OsNjs_S0.js","assets/BufferView-nhF5HNvU.js","assets/types-BKo2foNY.js","assets/VertexElementDescriptor-CVzmm3VW.js","assets/VertexAttributeLocations-bj14KPgt.js","assets/DrapedZ-C24CVmgi.js","assets/getEmissions.glsl-BGlX-E8o.js","assets/NoParameters-DB-WZ6gy.js","assets/triangle-RrVVJpiJ.js","assets/lineSegment-Dw6fKLxq.js","assets/frustumPlanes-DzpumWzA.js","assets/plane-DsXAwgXx.js","assets/AlphaCutoff-BFCKP4xi.js","assets/RenderingContext-BkAXCkJm.js","assets/ProgramCache-CUeMWHwn.js","assets/VertexArrayObject-D7ioFCDt.js","assets/VertexBuffer-BTKArTA5.js","assets/projectVectorToVector-Bzk-dWt3.js","assets/projectPointToVector-DcSyvrIv.js","assets/dehydratedPoint-Z5ONvFg_.js","assets/orientedBoundingBox-g3OD5ohb.js","assets/quat-CCKGqZVv.js","assets/computeTranslationToOriginAndRotation-EjiV3P0J.js","assets/mathUtils-DlnLVBQL.js","assets/doublePrecisionUtils-H8IRoz3Y.js"])))=>i.map(i=>d[i]);
import{m5 as S,c7 as Qe,a3 as m,a4 as be,a6 as z,aS as Se,f5 as D,mT as et,k8 as Q,_ as H,hD as Y,mO as tt,j2 as at,d6 as Ce,kt as Fe,mN as it,wn as We,fz as ot,zF as j,q1 as rt,Cw as nt,vw as lt,Cx as st}from"./index-B05090t7.js";import{H as ct,p as dt,V as ut,W,$ as ht,aB as Ee,a7 as ue,T as N,r as P,Y as mt,t as q,v as A,a0 as _,a4 as Be,aC as pt,a6 as ft,a5 as gt,aD as re,aE as vt,aF as xt,N as he,aG as bt}from"./OutputColorHighlightOLID.glsl-CznzbIdZ.js";import{c as E}from"./NoParameters-DB-WZ6gy.js";import{q as St,k as B,t as i,s as U,e as f,r as d,u as O,n as h,v as wt,d as yt,a as L,j as Ge,x as Mt}from"./getEmissions.glsl-BGlX-E8o.js";import{s as V}from"./doublePrecisionUtils-H8IRoz3Y.js";import{m as Z,v as J}from"./RenderingContext-BkAXCkJm.js";let Za=class extends ct{constructor(t){super(t),this._numLoading=0,this._disposed=!1,this._textures=t.textures,this.updateTexture(t.textureId),this._acquire(t.normalTextureId,a=>this._textureNormal=a),this._acquire(t.emissiveTextureId,a=>this._textureEmissive=a),this._acquire(t.occlusionTextureId,a=>this._textureOcclusion=a),this._acquire(t.metallicRoughnessTextureId,a=>this._textureMetallicRoughness=a)}dispose(){super.dispose(),this._texture=S(this._texture),this._textureNormal=S(this._textureNormal),this._textureEmissive=S(this._textureEmissive),this._textureOcclusion=S(this._textureOcclusion),this._textureMetallicRoughness=S(this._textureMetallicRoughness),this._disposed=!0}ensureResources(t){return this._numLoading===0?2:1}get textureBindParameters(){return new jt(this._texture?.texture??null,this._textureNormal?.texture??null,this._textureEmissive?.texture??null,this._textureOcclusion?.texture??null,this._textureMetallicRoughness?.texture??null)}updateTexture(t){this._texture!=null&&t===this._texture.id||(this._texture=S(this._texture),this._acquire(t,a=>this._texture=a))}_acquire(t,a){if(t==null)return void a(null);const r=this._textures.acquire(t);if(Qe(r))return++this._numLoading,void r.then(l=>{if(this._disposed)return S(l),void a(null);a(l)}).finally(()=>--this._numLoading);a(r)}};class It extends E{constructor(t=null){super(),this.textureEmissive=t}}let jt=class extends It{constructor(t,a,r,l,o,s,n){super(r),this.texture=t,this.textureNormal=a,this.textureOcclusion=l,this.textureMetallicRoughness=o,this.scale=s,this.normalTextureTransformMatrix=n}},Dt=class extends St{constructor(t){super(),this.spherical=t,this.draped=!1}};function zt(e){e.varyings.add("linearDepth","float",{invariant:!0})}function _t(e){zt(e),e.vertex.code.add("void forwardLinearDepth(float _linearDepth) { linearDepth = _linearDepth; }")}let Xa=class extends B{constructor(t,a,r){super(t,"mat4",1,(l,o,s)=>l.setUniformMatrix4fv(t,a(o,s),r))}};function Qa(e){e.include(dt),e.code.add(i`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      if (mode == ${i.int(3)}) {
        return externalColor;
      }

      vec3 internalMixed = internalColor * textureColor;
      if (mode == ${i.int(2)}) {
        return internalMixed;
      }

      if (mode == ${i.int(1)}) {
        return internalMixed * externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      if (mode == ${i.int(3)}) {
        return externalOpacity;
      }

      float internalMixed = internalOpacity * textureOpacity;
      if (mode == ${i.int(2)}) {
        return internalMixed;
      }

      // multiply or tint (or something invalid)
      return internalMixed * externalOpacity;
    }
  `)}let Re=class extends B{constructor(t,a,r){super(t,"vec2",2,(l,o,s,n)=>l.setUniform2fv(t,a(o,s,n),r))}};const Pt=3e5,ne=5e5;let F=class extends ut{constructor(){super(...arguments),this.consumes={required:["normals"]},this.produces="disabled"}get enabled(){return!this.destroying&&!this.destroyed&&this.produces===W.AMBIENT_ILLUMINATION}get _belowMaxElevation(){return(this.view.state.camera.relativeElevation??1/0)<ne}get _useGlobalIllumination(){return this._belowMaxElevation&&this.view.stage.renderer.isFeatureEnabled(11)}get _useSSAO(){return this._belowMaxElevation&&this.view.stage.renderer.isFeatureEnabled(3)}_enable(){this.produces=W.AMBIENT_ILLUMINATION,this.requestRender(1)}_disable(){this.produces="disabled",this.requestRender(1)}};m([be()],F.prototype,"consumes",void 0),m([be()],F.prototype,"produces",void 0),F=m([z("esri.views.3d.webgl-engine.effects.AmbientIllumination")],F);function G(e){e.include(ht),e.code.add(i`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return texelFetch(depthTexture, iuv, 0).r;
}`),e.code.add(i`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function ee(e){e.fragment.uniforms.add(new Ee("projInfo",t=>Ct(t.camera))),e.fragment.uniforms.add(new ue("zScale",t=>Ft(t.camera))),e.fragment.code.add(i`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function Ct(e){const t=e.projectionMatrix;return t[11]===0?Se(we,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):Se(we,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}const we=et();function Ft(e){return e.projectionMatrix[11]===0?D(ye,0,1):D(ye,1,0)}const ye=Q(),Me=16;function Wt(){const e=new V,t=e.fragment;return e.include(N),e.include(ee),t.include(G),t.include(U),t.uniforms.add(new P("radius",a=>me(a.camera))).code.add(i`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(i`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.outputs.add("fragOcclusion","float"),t.uniforms.add(new f("normalMap",a=>a.normalTexture),new f("depthMap",a=>a.depthTexture),new d("projScale",a=>a.projScale),new f("rnm",a=>a.noiseTexture),new mt("rnmScale",(a,r)=>D(Ie,r.camera.fullWidth/a.noiseTexture.descriptor.width,r.camera.fullHeight/a.noiseTexture.descriptor.height)),new d("intensity",a=>a.intensity),new ue("screenSize",a=>D(Ie,a.camera.fullWidth,a.camera.fullHeight))).main.add(i`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragOcclusion = 1.0;
      return;
    }

    // get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 norm4 = texelFetch(normalMap, iuv, 0);
    if (norm4.a == 0.0) {
      fragOcclusion = 1.0;
      return;
    }
    vec3 norm = normalize(norm4.xyz * 2.0 - 1.0);

    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

    float sum = 0.0;
    vec3 tapPixelPos;

    vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

    // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
    // bug or deviation from CE somewhere else?
    float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

    for(int i = 0; i < ${i.int(Me)}; ++i) {
      vec2 unitOffset = reflect(sphere[i], fres).xy;
      vec2 offset = vec2(-unitOffset * radius * ps);

      // don't use current or very nearby samples
      if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
        continue;
      }

      vec2 tc = vec2(gl_FragCoord.xy + offset);
      if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
      vec2 tcTap = tc / screenSize;
      float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

      tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

      sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
    }

    // output the result
    float A = max(1.0 - sum * intensity / float(${i.int(Me)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * pow(A, 4.0)) * INV_GAMMA;

    fragOcclusion = A;
  `),e}function me(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const Ie=Q(),Et=Object.freeze(Object.defineProperty({__proto__:null,build:Wt,getRadius:me},Symbol.toStringTag,{value:"Module"})),ae=4;function Bt(){const e=new V,t=e.fragment;e.include(N);const a=(ae+1)/2,r=1/(2*a*a);return t.include(G),t.uniforms.add(new f("depthMap",l=>l.depthTexture),new O("tex",l=>l.colorTexture),new Re("blurSize",l=>l.blurSize),new d("projScale",(l,o)=>{const s=o.camera.distance;return s>5e4?Math.max(0,l.projScale-(s-5e4)):l.projScale})),t.code.add(i`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${i.float(r)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.main.add(i`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${i.int(ae)}; r <= ${i.int(ae)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const Gt=Object.freeze(Object.defineProperty({__proto__:null,build:Bt},Symbol.toStringTag,{value:"Module"}));let le=class extends q{constructor(){super(...arguments),this.shader=new A(Gt,()=>H(()=>import("./GlobalIlluminationUpscale.glsl-CgRIfnFS.js").then(t=>t.S),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33])))}initializePipeline(){return Z({colorWrite:J})}};le=m([z("esri.views.3d.webgl-engine.effects.ssao.SSAOBlurTechnique")],le);const Rt="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let Tt=class extends E{constructor(){super(...arguments),this.projScale=1}},Ot=class extends Tt{constructor(){super(...arguments),this.intensity=1}},Lt=class extends E{},$t=class extends Lt{constructor(){super(...arguments),this.blurSize=Q()}},se=class extends q{constructor(){super(...arguments),this.shader=new A(Et,()=>H(()=>import("./GlobalIlluminationUpscale.glsl-CgRIfnFS.js").then(t=>t.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33])))}initializePipeline(){return Z({colorWrite:J})}};se=m([z("esri.views.3d.webgl-engine.effects.ssao.SSAOTechnique")],se);const R=2;let je=class extends F{constructor(t){super(t),this._enableTime=Y(0),this._passParameters=new Ot,this._drawParameters=new $t}initialize(){const t=Uint8Array.from(atob(Rt),r=>r.charCodeAt(0)),a=new tt(32);a.wrapMode=33071,a.pixelFormat=6407,a.wrapMode=10497,a.hasMipmap=!0,this._passParameters.noiseTexture=new at(this.renderingContext,a,t),this.addHandles(Ce(()=>this._useSSAO,r=>{this._enableTime=Y(0),r?this._enable():this._disable()},Fe))}destroy(){this._passParameters.noiseTexture=it(this._passParameters.noiseTexture)}render(t){const a=t.find(({name:Ke})=>Ke==="normals"),r=a?.getTexture(),l=a?.getTexture(We);if(!r||!l)return;const o=this.techniques.getCompiled(se),s=this.techniques.getCompiled(le);if(!o||!s)return this._enableTime=Y(performance.now()),void this.requestRender(1);this._enableTime===0&&(this._enableTime=Y(performance.now()));const n=this.renderingContext,u=this.view.qualitySettings.fadeDuration,b=this.bindParameters,p=b.camera,C=p.relativeElevation,c=ot((ne-C)/(ne-Pt),0,1),w=u>0?Math.min(u,performance.now()-this._enableTime)/u:1,g=w*c;this._passParameters.normalTexture=r,this._passParameters.depthTexture=l,this._passParameters.projScale=1/p.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Ht/me(p)**6*g;const v=p.fullViewport[2],y=p.fullViewport[3],M=this.fboCache.acquire(v,y,"ssao input",2);n.bindFramebuffer(M.fbo),n.setViewport(0,0,v,y),n.bindTechnique(o,b,this._passParameters,this._drawParameters),n.screen.draw();const x=Math.round(v/R),I=Math.round(y/R),te=this.fboCache.acquire(x,I,"ssao blur",0);n.bindFramebuffer(te.fbo),this._drawParameters.colorTexture=M.getTexture(),D(this._drawParameters.blurSize,0,R/y),n.bindTechnique(s,b,this._passParameters,this._drawParameters),n.setViewport(0,0,x,I),n.screen.draw(),M.release();const xe=this.fboCache.acquire(x,I,W.AMBIENT_ILLUMINATION,0);return n.bindFramebuffer(xe.fbo),n.setViewport(0,0,v,y),n.setClearColor(1,1,1,0),n.clear(16384),this._drawParameters.colorTexture=te.getTexture(),D(this._drawParameters.blurSize,R/v,0),n.bindTechnique(s,b,this._passParameters,this._drawParameters),n.setViewport(0,0,x,I),n.screen.draw(),n.setViewport4fv(p.fullViewport),te.release(),w<1&&this.requestRender(2),xe}};je=m([z("esri.views.3d.webgl-engine.effects.ssao.SSAO")],je);const Ht=.5;function Nt(e,t){t.receiveAmbientOcclusion?(e.uniforms.add(new _("ssaoTex",a=>a.ssao?.getTexture())),e.constants.add("blurSizePixelsInverse","float",1/R),e.code.add(i`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(i`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}let ie=class extends B{constructor(t,a,r,l){super(t,"float",0,(o,s)=>o.setUniform1fv(t,r(s),l),a)}};function qt(e,t){e.uniforms.add(new ie("shR",9,({lighting:a})=>a.sh.r),new ie("shG",9,({lighting:a})=>a.sh.g),new ie("shB",9,({lighting:a})=>a.sh.b)),e.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal) {
vec3 ambientLight = 0.282095 * vec3(shR[0], shG[0], shB[0]);
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
vec4 lightingAmbientSH_R1 = vec4(shR[1], shR[2], shR[3], shR[4]);
vec4 lightingAmbientSH_G1 = vec4(shG[1], shG[2], shG[3], shG[4]);
vec4 lightingAmbientSH_B1 = vec4(shB[1], shB[2], shB[3], shB[4]);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
vec4 lightingAmbientSH_R2 = vec4(shR[5], shR[6], shR[7], shR[8]);
vec4 lightingAmbientSH_G2 = vec4(shG[5], shG[6], shG[7], shG[8]);
vec4 lightingAmbientSH_B2 = vec4(shB[5], shB[6], shB[7], shB[8]);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight;
}`),t.pbrMode!==1&&t.pbrMode!==2||e.code.add(i`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance()
{
vec3 ambientLight = 1.2 * (0.282095 * vec3(shR[0], shG[0], shB[0])) - 0.2;
return ambientLight *= skyTransmittance;
}`)}const $=new Be("mainLightDirection",e=>e.lighting.mainLight.direction),ce=new Be("mainLightIntensity",e=>e.lighting.mainLight.intensity);function At(e){e.uniforms.add($,ce),e.code.add(i`vec3 applyShading(vec3 shadingNormal, float shadow) {
float dotVal = clamp(dot(shadingNormal, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function Ut(e){e.code.add(i`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.code.add(i`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.code.add(i`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Te(e){e.code.add(i`struct PBRShadingInfo
{
float NdotV;
float NdotL;
float LdotH;
float NdotUP;
float RdotUP;
float NdotAmbDir;
float NdotH_Horizon;
float NdotH;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
vec3 reflectedView;
float averageAmbientRadiance;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`)}function Vt(e){e.include(Te),e.include(U),e.uniforms.add($).code.add(i`void calculateCommonInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo) {
vec3 h = normalize(mainLightDirection - viewDirection);
inputs.NdotV = clamp(abs(dot(normal, -viewDirection)), 0.001, 1.0);
inputs.NdotUP = clamp(dot(normal, upDirection), -1.0, 1.0);
inputs.reflectedView = normalize(reflect(-viewDirection, normal));
inputs.RdotUP = clamp(dot(inputs.reflectedView, upDirection), -1.0, 1.0);
inputs.albedoLinear = linearizeGamma(albedo);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
}`),e.code.add(i`vec3 mrr = vec3(0.0, 0.6, 0.2);
void calculatePBRInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo) {
calculateCommonInputs(inputs, normal, viewDirection, upDirection, albedo);
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
}`)}function pe(e){const t=3.141592653589793,a=.3183098861837907;e.constants.add("PI","float",t),e.constants.add("LIGHT_NORMALIZATION","float",a),e.constants.add("INV_PI","float",a),e.constants.add("ONE_QUATER_PI","float",.78539816339745),e.constants.add("HALF_PI","float",1.570796326794897),e.constants.add("THREE_QUATER_PI","float",2.35619449019234),e.constants.add("TWO_PI","float",6.28318530717958),e.constants.add("PI_SQUARED","float",9.86960440108936)}function Zt(e,t){e.include(U),e.include(pe),e.include(Te),e.include(Vt),t.pbrMode!==1&&t.pbrMode!==2&&t.pbrMode!==5&&t.pbrMode!==6||(e.code.add(i`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),e.code.add(i`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==1&&t.pbrMode!==2||(e.include(Ut),e.code.add(i`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotUP);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotUP, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`)),t.pbrMode!==5&&t.pbrMode!==6||e.code.add(i`const vec3 fresnelReflectionSimplified = vec3(0.04);
void calculateSimplifiedInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo) {
calculateCommonInputs(inputs, normal, viewDirection, upDirection, albedo);
float lightness = 0.3 * inputs.albedoLinear[0] + 0.5 * inputs.albedoLinear[1] + 0.2 * inputs.albedoLinear[2];
inputs.f0 = (0.85 * lightness + 0.15) * fresnelReflectionSimplified;
inputs.f90 =  vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
}`)}function di(e,t){e.include(pe),e.code.add(i`
    struct PBRShadingWater {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),e.code.add(i`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),e.code.add(i`float normalDistributionWater(float NdotH, float roughness) {
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),e.code.add(i`float geometricOcclusionKelemen(float LoH) {
return 0.25 / (LoH * LoH);
}`),e.code.add(i`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max) {
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}function Jt(e){e.include(G),e.uniforms.add(new ue("zProjectionMapLastFrame",t=>pt(t.reprojection.lastFrameCamera))),e.code.add(i`float linearDepthFromTextureLastFrame(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv), zProjectionMapLastFrame);
}`)}function Yt(e,t){const a=e.fragment;a.include(G),a.uniforms.add(ft,gt,new _("depthMap",r=>r.depth?.attachment),new P("invResolutionHeight",r=>1/r.camera.height),new re("reprojectionMatrix",r=>r.reprojection.matrix)).code.add(i`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate) {
    vec4 clipDepthCoordinate = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoordinate = reprojectionMatrix * vec4(
      clipDepthCoordinate.w * (projectionCoordinate.xy * 2.0 - 1.0),
      clipDepthCoordinate.z,
      clipDepthCoordinate.w
    );
    reprojectedCoordinate.xy /= reprojectedCoordinate.w;
    return reprojectedCoordinate.xy * 0.5 + 0.5;
  }

  vec4 applyProjectionMat(mat4 projectionMat, vec3 viewPosition) {
    vec4 projectedCoordinate =  projectionMat * vec4(viewPosition, 1.0);
    projectedCoordinate.xy /= projectedCoordinate.w;
    projectedCoordinate.xy = projectedCoordinate.xy*0.5 + 0.5;
    return projectedCoordinate;
  }

  float rayMarchScreenReachFromWorldReach(vec3 startPosition, vec3 rayDirection, float rayMarchWorldReach) {
    float rayDistanceWorld = max(0.0, rayMarchWorldReach);

    // Stop rays towards camera at near plane
    if (rayDirection.z > 0.0) {
      float distanceToNearPlane = (-nearFar[0] - startPosition.z) / rayDirection.z;
      rayDistanceWorld = min(rayDistanceWorld, max(0.0, distanceToNearPlane));
    }

    vec2 projectedCoordStart = applyProjectionMat(proj, startPosition).xy;
    vec2 projectedCoordEnd = applyProjectionMat(proj, startPosition + rayDirection * rayDistanceWorld).xy;
    vec2 projectedCoordOffset = projectedCoordEnd - projectedCoordStart;

    return ${t.useProjectedRayLength?"length(projectedCoordOffset)":"abs(projectedCoordOffset.y)"};
  }

  vec3 screenSpaceIntersectionWithLimits(
    vec3 rayDirection,
    vec3 startPosition,
    vec3 viewDirection,
    vec3 normal,
    float rayStepOffset,
    float rayMarchMaxReach,
    float rayMarchMaxSteps
  ) {
    vec3 viewPosition = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPosition);
    vec3 homogeneousStart = viewPosition / projectedCoordStart.w;
    float inverseWStart = 1.0 / projectedCoordStart.w;

    // Advance the position in the ray direction
    viewPosition += rayDirection;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, rayDirection);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPosition);
    vec3  homogeneousEnd = viewPosition / projectedCoordEnd.w;
    float inverseWEnd = 1.0 / projectedCoordEnd.w;

    // Calculate the ray direction in screen space
    vec2 projectedCoordDirection = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 vanishingPointScreenOffset = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float rayMarchDistance = ${t.useProjectedRayLength?"length(vanishingPointScreenOffset.xy)":"abs(vanishingPointScreenOffset.y)"};
    float clampedRayMarchDistance = min(rayMarchDistance, rayMarchMaxReach);

    float projectedCoordDirectionLength = length(projectedCoordDirection);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the ray march looks
    vec2 projectedStep = clampedRayMarchDistance * projectedCoordDirection / (rayMarchMaxSteps * projectedCoordDirectionLength);

    // Normalize the homogeneous camera space coordinates
    vec3 homogeneousStep = clampedRayMarchDistance * (homogeneousEnd - homogeneousStart) / (rayMarchMaxSteps * projectedCoordDirectionLength);
    float inverseWStep = clampedRayMarchDistance * (inverseWEnd - inverseWStart) / (rayMarchMaxSteps * projectedCoordDirectionLength);

    // initialize the variables for ray marching
    vec2 projectedPosition = projectedCoordStart.xy;
    vec3 homogeneousPosition = homogeneousStart;
    float inverseW = inverseWStart;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float previousEstimatedZ = -startPosition.z;
    float rayDepthDelta = 0.0;
    float estimatedDepthDifference;
    float sampledDepth;
    vec3 firstSegmentHit = vec3(projectedPosition, 0.0);

    if (dot(normal, rayDirection) < 0.0 || dot(-viewDirection, normal) < 0.0) {
      return vec3(projectedPosition, 0.0);
    }

    float previousEstimatedDepthDifference = 0.0;

    vec2 offsetProjectedPosition = projectedPosition + rayStepOffset * projectedStep;
    projectedPosition = clamp(
      offsetProjectedPosition,
      vec2(0.0),
      vec2(0.999)
    );
    homogeneousPosition.z += rayStepOffset * homogeneousStep.z;
    inverseW += rayStepOffset * inverseWStep;

    int rayMarchMaxStepsInt = int(rayMarchMaxSteps);
    for(int stepIndex = 0; stepIndex < rayMarchMaxStepsInt - 1; ++stepIndex) {
      sampledDepth = -linearDepthFromTexture(depthMap, projectedPosition); // get linear depth from the depth buffer

      // Estimate depth of the marching ray
      rayStartZ = previousEstimatedZ;
      estimatedDepthDifference = -rayStartZ - sampledDepth;
      rayEndZ = (homogeneousStep.z * 0.5 + homogeneousPosition.z) / (inverseWStep * 0.5 + inverseW);
      rayDepthDelta = rayEndZ - rayStartZ;
      previousEstimatedZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || projectedPosition.y < 0.0  || projectedPosition.y > 1.0 ) {
        return firstSegmentHit;
      }

      // Preserve the original march result, but remember a first sample within the surface thickness.
      // A clamped sample no longer matches the UV of the reconstructed ray depth.
      if (stepIndex == 0 && rayStepOffset > 0.0 && all(equal(projectedPosition, offsetProjectedPosition))) {
        float firstSegmentDepthDifference = -homogeneousPosition.z / inverseW - sampledDepth;
        vec2 firstSegmentPixelOffset = (projectedPosition - projectedCoordStart.xy) * vec2(textureSize(depthMap, 0));
        if (firstSegmentDepthDifference < 0.025 / abs(inverseW) &&
          firstSegmentDepthDifference > 0.0 &&
          sampledDepth > nearFar[0] &&
          sampledDepth < nearFar[1] &&
          length(firstSegmentPixelOffset) > 1.0) {
          firstSegmentHit = vec3(projectedPosition, sampledDepth);
        }
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - estimatedDepthDifference > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between estimatedDepthDifference and rayDepthDelta is not too large
      //  - if difference between estimatedDepthDifference and 0.025/abs(inverseW) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if(estimatedDepthDifference < 0.025 / abs(inverseW) + abs(rayDepthDelta) &&
        estimatedDepthDifference > 0.0 &&
        sampledDepth > nearFar[0] &&
        sampledDepth < nearFar[1] &&
        abs(projectedPosition.y - projectedCoordStart.y) > invResolutionHeight) {
        float hitInterpolationWeight = estimatedDepthDifference / (estimatedDepthDifference - previousEstimatedDepthDifference);
        vec2 refinedProjectedPosition = mix(projectedPosition - projectedStep, projectedPosition, 1.0 - hitInterpolationWeight);
        if (abs(refinedProjectedPosition.y - projectedCoordStart.y) > invResolutionHeight) {
          return vec3(refinedProjectedPosition, sampledDepth);
        }
        else {
          return vec3(projectedPosition, sampledDepth);
        }
      }

      ${h(!t.clampRayToScreen,`if (projectedPosition.x <= 0.0  || projectedPosition.x >= 1.0) {
        return firstSegmentHit;
      }`)}

      // Continue with ray marching
      projectedPosition = projectedPosition + projectedStep;
      homogeneousPosition.z += homogeneousStep.z;
      inverseW += inverseWStep;
      previousEstimatedDepthDifference = estimatedDepthDifference;

      ${h(t.clampRayToScreen,"projectedPosition = clamp(projectedPosition, vec2(0.0), vec2(0.999));")}
    }
    return firstSegmentHit;
  }

  vec3 screenSpaceIntersection(vec3 rayDirection, vec3 startPosition, vec3 viewDirection, vec3 normal, float rayStepOffset) {
    return screenSpaceIntersectionWithLimits(
      rayDirection,
      startPosition,
      viewDirection,
      normal,
      rayStepOffset,
      ${i.float(t.rayMarchMaxReach)},
      ${i.float(t.rayMarchMaxSteps)}
    );
  }
  `)}const De=255;function fe(e){e.code.add(i`
    vec3 quantizeGlobalIlluminationColor(vec3 color) {
      vec3 clampedColor = clamp(color, vec3(0.0), vec3(1.0));
      return floor(clampedColor * ${i.float(De)} + 0.5) * ${i.float(1/De)};
    }
  `)}function Oe(e){e.code.add(i`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`),e.code.add(i`vec3 tonemapKhronosNeutral(vec3 color) {
const float startCompression = 0.76;
const float desaturation = 0.15;
float peak = max(color.r, max(color.g, color.b));
if (peak < startCompression) {
return color;
}
float d = 1.0 - startCompression;
float newPeak = 1.0 - d * d / (peak + d - startCompression);
color *= newPeak / peak;
float g = 1.0 - 1.0 / (desaturation * (peak - newPeak) + 1.0 );
return mix(color, vec3(newPeak), g);
}`)}const kt=.01,Xt=.008,Kt=.0028,Qt=.45,ea=.5,ta=.02,aa=.1,ia=.008,oa=.3,ra=.008,na=150,la=.095,sa=.008,ca=60,da=2,ua=.0039,ha=.25,ma=.012,pa=6,Le=2.5,$e=.15,He=25,Ne=.15,ge=.5,qe=1,Ae=1,ve=16;class Ue extends E{constructor(){super(...arguments),this.projScale=1,this.resolutionScale=1,this.accumulatedFrames=0,this.temporalSampleFrame=0,this.rayMarchMinReach=Ne,this.rayMarchMaxReach=ge,this.rayMarchWorldReach=He,this.rayMarchMinReachEmissionWeight=qe,this.rayMarchMaxReachEmissionWeight=Ae,this.rayMarchMaxSteps=ve,this.colorBleedWeight=$e,this.highQualityIdleColorBlendStart=oa,this.emissionBoostFactor=Le}}function fa(e){const t=new V,a=t.fragment;t.include(N),t.include(ee),a.include(Jt),a.include(U),a.include(fe),a.include(Oe),t.include(Yt,e),a.uniforms.add($,vt,new f("normalMap",o=>o.normalTexture),new f("depthMap",o=>o.depthTexture),new f("lastFrameGlobalIlluminationTexture",(o,s)=>o.globalIllumination??s.globalIllumination?.getTexture()),new f("lastFrameGlobalIlluminationWeightTexture",(o,s)=>o.globalIlluminationWeights??s.globalIllumination?.getTexture(j)),new _("lastFrameColorTexture",o=>o.reprojection.lastFrameColor?.getTexture()),new _("lastFrameDepthTexture",o=>o.reprojection.lastFrameDepth?.attachment),new re("reprojectionProjectionMatrix",o=>o.reprojection.lastFrameCamera.projectionMatrix),new re("reprojectionViewMatrix",o=>o.reprojection.viewMatrix),new d("accumulatedFrames",o=>o.accumulatedFrames),new d("temporalSampleFrame",o=>o.temporalSampleFrame),new d("resolutionScale",o=>o.resolutionScale)),a.uniforms.add(new d("rayMarchMinReach",o=>o.rayMarchMinReach),new d("rayMarchMaxReach",o=>o.rayMarchMaxReach),new d("rayMarchWorldReach",o=>o.rayMarchWorldReach),new d("rayMarchMinReachEmissionWeight",o=>o.rayMarchMinReachEmissionWeight),new d("rayMarchMaxReachEmissionWeight",o=>o.rayMarchMaxReachEmissionWeight),new d("rayMarchMaxSteps",o=>o.rayMarchMaxSteps),new d("colorBleedWeight",o=>o.colorBleedWeight),new d("highQualityIdleColorBlendStart",o=>o.highQualityIdleColorBlendStart),new d("emissionBoostFactor",o=>o.emissionBoostFactor));const{hasEmission:r,hasColor:l}=e;return r&&(a.uniforms.add(new P("inputScale",o=>o.reprojection.lastFrameEmission?.getTexture()?.descriptor.internalFormat===rt.RGBA8?wt:1),new _("lastFrameEmissionTexture",o=>o.reprojection.lastFrameEmission?.getTexture())),a.code.add(i`bool hasHitReprojectionMismatch(vec3 hit, vec2 hitReprojectedCoordinate, float colorBlendWeight) {
if (colorBlendWeight != 1.0) {
return false;
}
if (
any(lessThan(hitReprojectedCoordinate, vec2(0.0))) ||
any(greaterThanEqual(hitReprojectedCoordinate, vec2(1.0)))
) {
return true;
}
vec3 hitViewPos = reconstructPosition(hit.xy * vec2(textureSize(normalMap, 0)), -hit.z);
vec3 reprojectedHitViewPos = (reprojectionViewMatrix * vec4(hitViewPos, 1.0)).xyz;
float expectedLastFrameDepth = -reprojectedHitViewPos.z;
float storedLastFrameDepth = -linearDepthFromTextureLastFrame(
lastFrameDepthTexture,
hitReprojectedCoordinate
);
float relativeDepthMismatch = abs(storedLastFrameDepth - expectedLastFrameDepth) /
max(max(storedLastFrameDepth, expectedLastFrameDepth), 0.00001);
return relativeDepthMismatch > reprojectionMismatchThreshold;
}`)),a.constants.add("highQualityIdleColorBlendEnd","float",ra),a.constants.add("highQualityIdleColorBlendFrames","float",na),a.constants.add("highQualityIdleOcclusionBlendEnd","float",sa),a.constants.add("highQualityIdleOcclusionBlendExponent","float",da),a.constants.add("highQualityIdleOcclusionBlendFrames","float",ca),a.constants.add("highQualityIdleOcclusionBlendStart","float",la),a.constants.add("fullColorBleedBlendWeight","float",ma),a.constants.add("accumulationDitherScale","float",ua),a.constants.add("lowQualityColorBlendWeight","float",Kt),a.constants.add("lowQualityColorDitherScale","float",ha),a.constants.add("lowQualityOcclusionBlendWeight","float",Xt),a.constants.add("reprojectionMismatchThreshold","float",kt),a.constants.add("reprojectionMismatchColorScale","float",Qt),a.constants.add("stableHistoryColorBlendWeight","float",ia),a.constants.add("strongHistoryOcclusionThreshold","float",ta),a.constants.add("weakHistoryOcclusionBlendWeight","float",aa),a.constants.add("weakHistoryOcclusionThreshold","float",ea),a.constants.add("storedColorBlendWeightScale","float",pa),a.code.add(i`float computeIdleColorBlendWeight(float accumulatedFrames) {
float idleColorBlendProgress = clamp(accumulatedFrames / highQualityIdleColorBlendFrames, 0.0, 1.0);
return mix(highQualityIdleColorBlendStart, highQualityIdleColorBlendEnd, pow(idleColorBlendProgress, 1./5.)
);
}
float computeIdleOcclusionBlendWeight(float accumulatedFrames) {
float idleOcclusionBlendProgress = clamp(accumulatedFrames / highQualityIdleOcclusionBlendFrames, 0.0, 1.0);
return mix(highQualityIdleOcclusionBlendStart, highQualityIdleOcclusionBlendEnd,
pow(idleOcclusionBlendProgress, highQualityIdleOcclusionBlendExponent));
}
bool isEdgeDepth(float centerDepth, vec2 sampleUv) {
vec2 texelSize = 1.0 / vec2(textureSize(depthMap, 0));
float depthLeft = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(-texelSize.x, 0.0)));
float depthRight = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(texelSize.x, 0.0)));
float depthUp = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(0.0, texelSize.y)));
float depthDown = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(0.0, -texelSize.y)));
float maxDifference = max(max(abs(centerDepth - depthLeft), abs(centerDepth - depthRight)), max(abs(centerDepth - depthUp), abs(centerDepth - depthDown)));
return abs(maxDifference / centerDepth) > 0.01;
}
vec3 sampleCosineHemisphere(vec2 u) {
float phi = 6.28318530718 * u.x;
float radius = sqrt(u.y);
float x = radius * cos(phi);
float y = radius * sin(phi);
float z = sqrt(max(0.0, 1.0 - u.y));
return vec3(x, y, z);
}
mat3 basisFromNormal(vec3 n) {
vec3 up = abs(n.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
vec3 tangent = normalize(cross(up, n));
vec3 bitangent = cross(n, tangent);
return mat3(tangent, bitangent, n);
}
float blueNoiseDitherValue(vec2 pixel, float frame, vec2 axis, float phase) {
float scroll = 5.588238 * mod(frame, 512.0);
vec2 p = pixel + vec2(scroll);
vec2 rotated = vec2(
axis.x * p.x + axis.y * p.y,
-axis.y * p.x + axis.x * p.y
);
return fract(52.9829189 * fract(0.06711056 * rotated.x + 0.00583715 * rotated.y + phase));
}
vec4 blueNoiseDither(vec2 pixel, float frame) {
vec4 value = vec4(
blueNoiseDitherValue(pixel, frame, vec2(0.9659258, 0.25881904), 0.0),
blueNoiseDitherValue(pixel, frame, vec2(0.70710677, 0.70710677), 0.17),
blueNoiseDitherValue(pixel, frame, vec2(0.25881904, 0.9659258), 0.37),
blueNoiseDitherValue(pixel, frame, vec2(1.0, 0.0), 0.61)
);
return value * 2.0 - 1.0;
}`),t.outputs.add("fragGlobalIllumination","vec4",0),t.outputs.add("fragWeight","vec2",1),a.main.add(i`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragGlobalIllumination = vec4(0.0, 0.0, 0.0, 1.0);
      fragWeight = vec2(0.0);
      return;
    }

    // Get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));

    vec4 normalTexel= texelFetch(normalMap, iuv, 0);

    // 0.0 alpha excludes the surface as a receiver (e.g. water)
    if (normalTexel.a == 0.0) {
      fragGlobalIllumination = vec4(0.0, 0.0, 0.0, 1.0);
      fragWeight = vec2(0.0);
      return;
    }
    fragGlobalIllumination = vec4(0.0, 0.0, 0.0, 0.0);

    float receiverOpacity = normalTexel.a;
    vec3 normal = normalize(normalTexel.xyz * 2.0 - 1.0);

    // Reconstruct view space position of current fragment
    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(uv * vec2(textureSize(normalMap, 0)), currentPixelDepth);
    vec4 viewPos = vec4(currentPixelPos, 1.0);

    // Reproject current view position to last frame
    vec4 reprojectedViewPos = reprojectionViewMatrix * viewPos;
    vec4 reprojectedCoordinate = applyProjectionMat(reprojectionProjectionMatrix, reprojectedViewPos.xyz);

    // Read last frame reprojected depth and GI history
    float lastFrameDepthViewPos = -linearDepthFromTextureLastFrame(lastFrameDepthTexture, reprojectedCoordinate.xy);
    vec4 lastFrameGlobalIllumination = texture(lastFrameGlobalIlluminationTexture, reprojectedCoordinate.xy);
    float historyOcclusionBlendWeight = texture(lastFrameGlobalIlluminationWeightTexture, reprojectedCoordinate.xy).r;

    int steps;
    float occlusionBlendWeight = 1.0;
    float colorBlendWeight = 1.0;
    float idleColorBlendWeight = computeIdleColorBlendWeight(accumulatedFrames);
    float idleOcclusionBlendWeight = computeIdleOcclusionBlendWeight(accumulatedFrames);
    float reprojectionDepthMismatch = abs((lastFrameDepthViewPos + reprojectedViewPos.z) / max(lastFrameDepthViewPos, reprojectedViewPos.z));
    bool hasReprojectionMismatch = reprojectionDepthMismatch > reprojectionMismatchThreshold;
    bool isScaledGlobalIllumination = resolutionScale < 1.0;
    bool isLowQualityEdgePixel = isScaledGlobalIllumination && isEdgeDepth(currentPixelDepth, uv);

    // Heuristic to determine blending weights and number of steps for occlusion and color
    if (hasReprojectionMismatch) {
      if (isLowQualityEdgePixel) {
        steps = 1;
        occlusionBlendWeight = lowQualityOcclusionBlendWeight;
      } else {
        steps = 6;
        occlusionBlendWeight = 1.0;
      }
    } else {
      steps = 1;
      if (historyOcclusionBlendWeight > weakHistoryOcclusionThreshold) {
        occlusionBlendWeight = weakHistoryOcclusionBlendWeight;
        colorBlendWeight = stableHistoryColorBlendWeight;
      } else if (historyOcclusionBlendWeight > strongHistoryOcclusionThreshold) {
        occlusionBlendWeight = historyOcclusionBlendWeight - 0.05;
        colorBlendWeight = stableHistoryColorBlendWeight;
      } else {
        occlusionBlendWeight = isScaledGlobalIllumination ? lowQualityOcclusionBlendWeight : idleOcclusionBlendWeight;
        colorBlendWeight = isScaledGlobalIllumination ? lowQualityColorBlendWeight : idleColorBlendWeight;
      }
    }

    vec4 randomDirectionSample;
    mat3 normalBasis = basisFromNormal(normal);
    int temporalSampleStride = min(64 / steps, 6);
    float temporalFrameOffset = mod(temporalSampleFrame, float(64 / steps));

    // For each ray determine if it hits geometry and accumulate occlusion or color
    float stepSize = 1.0 / float(steps);

    for (int i = 0; i < steps; ++i) {
      float sampleIndex = float(i * temporalSampleStride + int(temporalFrameOffset));
      randomDirectionSample = blueNoiseDither(floor(gl_FragCoord.xy), sampleIndex);
      vec2 hemisphereSample = randomDirectionSample.rg * 0.5 + 0.5;
      float offsetSample = randomDirectionSample.a * 0.5 + 0.5;
      vec3 rayDirection = normalBasis * sampleCosineHemisphere(hemisphereSample);
      float rayMarchScreenReach = rayMarchScreenReachFromWorldReach(viewPos.xyz, rayDirection, rayMarchWorldReach);
      rayMarchScreenReach = clamp(rayMarchScreenReach, rayMarchMinReach, rayMarchMaxReach);
      vec3 hit = screenSpaceIntersectionWithLimits(
        rayDirection,
        viewPos.xyz,
        normalize(viewPos.xyz),
        normal,
        offsetSample,
        rayMarchScreenReach,
        rayMarchMaxSteps
      );

      float hitOpacity = 0.0;
      if (hit.z > 0.0) {
        ivec2 normalMapSize = textureSize(normalMap, 0);
        ivec2 hitIuv = clamp(ivec2(hit.xy * vec2(normalMapSize)), ivec2(0), normalMapSize - ivec2(1));
        float storedHitOpacity = texelFetch(normalMap, hitIuv, 0).a;

        // 0.0 alpha excludes the surface as a receiver (e.g. water), but a valid ray hit still occludes as opaque
        hitOpacity = storedHitOpacity == 0.0 ? 1.0 : storedHitOpacity;

        ${h(l,i`
          // Emission and color bleed - Reproject the current receiver and sampled hit to estimate bounced color
          vec3 receiverColor = texture(lastFrameColorTexture, reprojectedCoordinate.xy).rgb;

          vec2 hitReprojectedCoordinate = reprojectionCoordinate(hit);
          vec3 sourceColor = texture(lastFrameColorTexture, hitReprojectedCoordinate).rgb;
          vec3 sourceColorLinear = linearizeGamma(sourceColor);
          ${h(r,i`
            bool rejectReprojectedHitEmission = hasHitReprojectionMismatch(hit, hitReprojectedCoordinate, colorBlendWeight);
            `)}
          vec3 sourceEmission = ${h(r,`rejectReprojectedHitEmission
              ? vec3(0.0)
              : texture(lastFrameEmissionTexture, hitReprojectedCoordinate).xyz * inputScale`,"vec3(0.0)")};

          float emissionWeight = mix(
            rayMarchMinReachEmissionWeight,
            rayMarchMaxReachEmissionWeight,
            (rayMarchScreenReach - rayMarchMinReach) / max(rayMarchMaxReach - rayMarchMinReach, 0.00001)
          );
          fragGlobalIllumination.rgb += (
            hitOpacity * (sourceColorLinear * colorBleedWeight) + emissionBoostFactor * sourceEmission * emissionWeight
          ) * stepSize;
          `)}
      }

      if (hitOpacity < 1.0) {
        // Occlusion - heuristic modulating sky intensity based on angle to main light
        vec4 viewMainLightDirection = view * vec4(mainLightDirection, 0.0);
        float skyModulation = pow(max(dot(rayDirection, viewMainLightDirection.xyz), 0.0), 3.0) * 5.5;
        float skyFacingWeight = clamp(3.5 * dot(viewMainLightDirection.xyz, normal), 0.0, 1.0);
        skyModulation = mix(1.0, skyModulation * 0.2 + 0.8, skyFacingWeight);
        fragGlobalIllumination.a += (1.0 - hitOpacity) * skyModulation * stepSize;
      }
    }

    fragGlobalIllumination.rgb *= receiverOpacity;
    fragGlobalIllumination.a = mix(1.0, fragGlobalIllumination.a, receiverOpacity);

    // Rendering trick add noise to reduce accumulation artifacts
    float accumulationDither = occlusionBlendWeight < 1.0
      ? receiverOpacity * randomDirectionSample.b * accumulationDitherScale
      : 0.0;

    ${h(l,i`
      // Accumulate color
      vec3 lastFrameColor = lastFrameGlobalIllumination.rgb;
      float colorDitherScale = isScaledGlobalIllumination ? lowQualityColorDitherScale : 1.0;
      fragGlobalIllumination.rgb = mix(
        lastFrameColor + accumulationDither * colorDitherScale,
        fragGlobalIllumination.rgb,
        colorBlendWeight
      );
      // Heuristic: attenuate emission to reduce sparkling artifacts when reprojection history cannot be reused.
      if (hasReprojectionMismatch) {
        fragGlobalIllumination.rgb *= reprojectionMismatchColorScale;
      }
      `,i`
      fragGlobalIllumination.rgb = vec3(0.0);
      `)}

    // Tone-map accumulated color before quantizing it for storage.
    fragGlobalIllumination.rgb = tonemapKhronosNeutral(fragGlobalIllumination.rgb);
    fragGlobalIllumination.rgb = quantizeGlobalIlluminationColor(fragGlobalIllumination.rgb);

    // Accumulate occlusion
    fragGlobalIllumination.a = mix(lastFrameGlobalIllumination.a + accumulationDither, fragGlobalIllumination.a, occlusionBlendWeight);

    fragWeight = vec2(occlusionBlendWeight, colorBlendWeight * storedColorBlendWeightScale);
  `),t}const ga=Object.freeze(Object.defineProperty({__proto__:null,GlobalIlluminationPassParameters:Ue,build:fa,defaultColorBleedWeight:$e,defaultEmissionBoostFactor:Le,defaultRayMarchMaxReach:ge,defaultRayMarchMaxReachEmissionWeight:Ae,defaultRayMarchMaxSteps:ve,defaultRayMarchMinReach:Ne,defaultRayMarchMinReachEmissionWeight:qe,defaultRayMarchWorldReach:He},Symbol.toStringTag,{value:"Module"})),va=15.3,xa=5,ba=-.05;function Ve(e){e.fragment.code.add(i`
    float globalIlluminationNormalSimilarityWeight(vec3 sampleNormal, vec3 centerNormal) {
      return clamp(1.0 - ${i.float(va)} * length(sampleNormal - centerNormal), 0.0, 1.0);
    }

    float globalIlluminationDepthNormalCorrection(vec3 encodedNormal) {
      vec3 decodedNormal = normalize(encodedNormal * 2.0 - 1.0);
      return pow(max((1.0 - abs(decodedNormal.x)) * (1.0 - abs(decodedNormal.y)), 0.01), ${i.float(xa)});
    }

    float globalIlluminationDepthSharpness(float projScale, float depth) {
      return ${i.float(ba)} * projScale / depth;
    }

    float globalIlluminationDepthSharpness(float projScale, float depth, vec3 encodedNormal) {
      return globalIlluminationDepthSharpness(projScale, depth) * globalIlluminationDepthNormalCorrection(encodedNormal);
    }
  `)}const oe=4,Sa=.2,wa=2.5;let Ze=class extends E{constructor(){super(...arguments),this.blurSize=Q()}};function ya(){const e=new V,t=e.fragment;e.include(N),e.include(ee),e.include(Ve);const a=(oe+3)/2,r=1/(2*a*a);t.include(G),t.include(xt,Je),t.include(fe);const l=5e4;t.uniforms.add(new he("hasEmission",c=>c.reprojection.lastFrameEmission!=null),new f("depthMap",c=>c.depthTexture),new f("normalMap",c=>c.normalTexture),new O("globalIlluminationTexture",c=>c.texture),new O("globalIlluminationWeightTexture",c=>c.weightTexture),new Re("blurSize",c=>c.blurSize),new d("resolutionScale",c=>c.resolutionScale),new d("projScale",(c,w)=>{const g=w.camera.distance;return g>l?Math.max(0,c.projScale-(g-l)):c.projScale}));const o=.1,s=120,n=.03,u=.08,b=1.5,p=1/32768;return t.code.add(i`
    void accumulateBlurSample(
      vec2 sampleUv,
      float sampleOffset,
      float centerDepth,
      vec3 centerNormal,
      float depthSharpness,
      bool skipOcclusionBlur,
      inout float emissionWeightSum,
      inout vec3 emissionSum,
      inout float occlusionWeightSum,
      inout float occlusionSum,
      float centerOcclusionBlendWeight
    ) {
      vec4 sampleGlobalIllumination = texture(globalIlluminationTexture, sampleUv);
      vec3 sampleNormal = texture(normalMap, sampleUv).rgb;
      float sampleDepth = linearDepthFromTexture(depthMap, sampleUv);

      float depthDelta = sampleDepth - centerDepth;
      bool isScaledGlobalIllumination = resolutionScale < 1.0;
      float normalSimilarityWeight = globalIlluminationNormalSimilarityWeight(sampleNormal, centerNormal);
      float depthNormalCorrection = globalIlluminationDepthNormalCorrection(sampleNormal);
      vec3 emission = sampleGlobalIllumination.rgb;
      float emissionSpatialWeightMultiplier = isScaledGlobalIllumination ? ${i.float(s)} : 1.0;

      float emissionWeight = exp(
        -sampleOffset * sampleOffset * ${i.float(r)} * ${i.float(o)} * emissionSpatialWeightMultiplier
        - depthDelta * depthDelta * depthSharpness * depthNormalCorrection
      );
      emissionWeight *= normalSimilarityWeight;
      emissionWeightSum += emissionWeight;
      emissionSum += emissionWeight * emission;

      if (skipOcclusionBlur) {
        return;
      }

      float occlusionSpatialKernelScale = centerOcclusionBlendWeight > ${i.float(n)}
        ? ${i.float(u)}
        : ${i.float(b)};
      float occlusionWeight = exp(-sampleOffset * sampleOffset * occlusionSpatialKernelScale - depthDelta * depthDelta * depthSharpness);
      occlusionWeight *= normalSimilarityWeight;
      occlusionWeightSum += occlusionWeight;
      occlusionSum += occlusionWeight * sampleGlobalIllumination.a;
    }
  `),t.main.add(i`
    vec3 emissionSum = vec3(0.0);
    float emissionWeightSum = 0.0;

    vec4 centerGlobalIllumination = texture(globalIlluminationTexture, uv);
    float centerOcclusionBlendWeight = texture(globalIlluminationWeightTexture, uv).r;
    float centerColorBlendWeight = texture(globalIlluminationWeightTexture, uv).g;
    bool isScaledGlobalIllumination = resolutionScale < 1.0;
    bool shouldReuseCenterOcclusion = isScaledGlobalIllumination && centerOcclusionBlendWeight <= ${i.float(n)};
    bool shouldSkipLowQualityBlur = !hasEmission && shouldReuseCenterOcclusion;
    if (shouldSkipLowQualityBlur) {
      fragColor = vec4(
        quantizeGlobalIlluminationColor(centerGlobalIllumination.rgb),
        centerGlobalIllumination.a
      );
      return;
    }

    float centerDepth = linearDepthFromTexture(depthMap, uv);
    vec3 centerNormal = texture(normalMap, uv).rgb;
    float occlusionSum = 0.0;
    float occlusionWeightSum = 0.0;

    float depthSharpness = globalIlluminationDepthSharpness(projScale, centerDepth);
    float lowQualityBlurScale = hasEmission
      ? mix(
          1.0,
          ${i.float(wa)},
          smoothstep(0.0, ${i.float(Sa)}, centerColorBlendWeight)
        )
      : 1.0;
    for (int sampleOffset = -${i.int(oe)}; sampleOffset <= ${i.int(oe)}; ++sampleOffset) {
      float sampleOffsetFloat = float(sampleOffset);
      vec2 sampleUv = uv + sampleOffsetFloat * blurSize * lowQualityBlurScale;
      accumulateBlurSample(
        sampleUv,
        sampleOffsetFloat,
        centerDepth,
        centerNormal,
        depthSharpness,
        shouldReuseCenterOcclusion,
        emissionWeightSum,
        emissionSum,
        occlusionWeightSum,
        occlusionSum,
        centerOcclusionBlendWeight
      );
    }

    float occlusion = shouldReuseCenterOcclusion ? centerGlobalIllumination.a : occlusionSum / occlusionWeightSum;
    vec3 blurredEmission = (emissionSum / emissionWeightSum).rgb;

    // Dither the blurred color to reduce quantization banding and wrong color accumulation.
    float dither = ditherNoise(vec4(blurredEmission, occlusion)) - ${i.float(p)};
    blurredEmission += isScaledGlobalIllumination ? ${i.float(.85)} * dither : dither;

    fragColor = vec4(quantizeGlobalIlluminationColor(blurredEmission), occlusion);
  `),e}const Je=new yt;Je.useFloatBlend=!1;const Ma=Object.freeze(Object.defineProperty({__proto__:null,GlobalIlluminationBlurDrawParameters:Ze,build:ya},Symbol.toStringTag,{value:"Module"}));let k=class extends q{constructor(){super(...arguments),this.shader=new A(Ma,()=>H(()=>import("./GlobalIlluminationUpscale.glsl-CgRIfnFS.js").then(t=>t.G),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33])))}initializePipeline(){return Z({colorWrite:J})}};k=m([z("esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationBlurTechnique")],k);let X=class extends q{constructor(){super(...arguments),this.shader=new A(ga,()=>H(()=>import("./GlobalIlluminationUpscale.glsl-CgRIfnFS.js").then(t=>t.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33])))}initializePipeline(){return Z({colorWrite:J})}};X=m([z("esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationTechnique")],X);let de=class extends Ge{constructor(){super(...arguments),this.hasColor=!0,this.hasEmission=!1,this.rayMarchMaxReach=ge,this.rayMarchMaxSteps=ve,this.useProjectedRayLength=!0,this.clampRayToScreen=!1}};m([L()],de.prototype,"hasColor",void 0),m([L()],de.prototype,"hasEmission",void 0);const ze=5e4,Ia=100;let Ye=class extends E{};function ja(){const e=new V,t=e.fragment;return e.include(N),e.include(ee),e.include(Ve),t.include(G),t.include(fe),t.uniforms.add(new f("depthMap",a=>a.depthTexture),new f("normalMap",a=>a.normalTexture),new O("tex",a=>a.colorTexture),new O("globalIlluminationWeightTexture",a=>a.weightTexture),new d("projScale",(a,r)=>{const l=r.camera.distance;return l>ze?Math.max(0,a.projScale-(l-ze)):a.projScale})),t.code.add(i`
    float computeDepthWeight(float sampleDepth, float centerDepth, float depthSharpness) {
      float depthDelta = abs(sampleDepth - centerDepth);
      return exp(-0.08 - depthDelta * depthDelta * depthSharpness);
    }

    vec3 normalFromTexture(sampler2D normalTexture, vec2 uv) {
      ivec2 normalTextureSize = textureSize(normalTexture, 0);
      ivec2 normalTexel = clamp(ivec2(uv * vec2(normalTextureSize)), ivec2(0), normalTextureSize - ivec2(1));
      return texelFetch(normalTexture, normalTexel, 0).xyz;
    }

    void sampleJointBilateralUpscale(vec2 sampleUv, out vec4 upscaledColor, out vec2 upscaledWeight) {
      float centerDepth = linearDepthFromTexture(depthMap, sampleUv);
      vec3 centerNormal = normalFromTexture(normalMap, sampleUv);
      float depthSharpness = ${i.float(Ia)} * globalIlluminationDepthSharpness(projScale, centerDepth, centerNormal);

      vec2 lowResTextureSize = vec2(textureSize(tex, 0));
      vec2 texelPosition = sampleUv * lowResTextureSize - 0.5;
      vec2 texelBase = floor(texelPosition);
      vec2 bilinearWeightsFraction = fract(texelPosition);

      vec2 uv00 = (texelBase + vec2(0.5, 0.5)) / lowResTextureSize;
      vec2 uv10 = (texelBase + vec2(1.5, 0.5)) / lowResTextureSize;
      vec2 uv01 = (texelBase + vec2(0.5, 1.5)) / lowResTextureSize;
      vec2 uv11 = (texelBase + vec2(1.5, 1.5)) / lowResTextureSize;

      vec4 color00 = texture(tex, uv00);
      vec4 color10 = texture(tex, uv10);
      vec4 color01 = texture(tex, uv01);
      vec4 color11 = texture(tex, uv11);
      vec2 weight00 = texture(globalIlluminationWeightTexture, uv00).rg;
      vec2 weight10 = texture(globalIlluminationWeightTexture, uv10).rg;
      vec2 weight01 = texture(globalIlluminationWeightTexture, uv01).rg;
      vec2 weight11 = texture(globalIlluminationWeightTexture, uv11).rg;

      float depth00 = linearDepthFromTexture(depthMap, uv00);
      float depth10 = linearDepthFromTexture(depthMap, uv10);
      float depth01 = linearDepthFromTexture(depthMap, uv01);
      float depth11 = linearDepthFromTexture(depthMap, uv11);

      vec3 normal00 = normalFromTexture(normalMap, uv00);
      vec3 normal10 = normalFromTexture(normalMap, uv10);
      vec3 normal01 = normalFromTexture(normalMap, uv01);
      vec3 normal11 = normalFromTexture(normalMap, uv11);

      float bilinearWeight00 = (1.0 - bilinearWeightsFraction.x) * (1.0 - bilinearWeightsFraction.y);
      float bilinearWeight10 = bilinearWeightsFraction.x * (1.0 - bilinearWeightsFraction.y);
      float bilinearWeight01 = (1.0 - bilinearWeightsFraction.x) * bilinearWeightsFraction.y;
      float bilinearWeight11 = bilinearWeightsFraction.x * bilinearWeightsFraction.y;

      float jointBilateralWeight00 = bilinearWeight00 * computeDepthWeight(depth00, centerDepth, depthSharpness) * globalIlluminationNormalSimilarityWeight(normal00, centerNormal);
      float jointBilateralWeight10 = bilinearWeight10 * computeDepthWeight(depth10, centerDepth, depthSharpness) * globalIlluminationNormalSimilarityWeight(normal10, centerNormal);
      float jointBilateralWeight01 = bilinearWeight01 * computeDepthWeight(depth01, centerDepth, depthSharpness) * globalIlluminationNormalSimilarityWeight(normal01, centerNormal);
      float jointBilateralWeight11 = bilinearWeight11 * computeDepthWeight(depth11, centerDepth, depthSharpness) * globalIlluminationNormalSimilarityWeight(normal11, centerNormal);
      float jointBilateralWeightSum = jointBilateralWeight00 + jointBilateralWeight10 + jointBilateralWeight01 + jointBilateralWeight11;

      if (jointBilateralWeightSum < 0.0001) {
        // Fall back to the nearest low-resolution texel when all bilateral weights collapse.
        vec2 nearestUv = (floor(texelPosition + 0.5) + vec2(0.5)) / lowResTextureSize;
        upscaledColor = texture(tex, nearestUv);
        upscaledWeight = texture(globalIlluminationWeightTexture, nearestUv).rg;
        return;
      }

      upscaledColor = (
        color00 * jointBilateralWeight00 +
        color10 * jointBilateralWeight10 +
        color01 * jointBilateralWeight01 +
        color11 * jointBilateralWeight11
      ) / jointBilateralWeightSum;

      upscaledWeight = (
        weight00 * jointBilateralWeight00 +
        weight10 * jointBilateralWeight10 +
        weight01 * jointBilateralWeight01 +
        weight11 * jointBilateralWeight11
      ) / jointBilateralWeightSum;
    }
  `),e.outputs.add("fragColor","vec4",0),e.outputs.add("fragWeight","vec2",1),t.main.add(i`sampleJointBilateralUpscale(uv, fragColor, fragWeight);
fragColor.rgb = quantizeGlobalIlluminationColor(fragColor.rgb);`),e}const Da=Object.freeze(Object.defineProperty({__proto__:null,GlobalIlluminationUpscaleDrawParameters:Ye,build:ja},Symbol.toStringTag,{value:"Module"}));let K=class extends q{constructor(){super(...arguments),this.shader=new A(Da,()=>H(()=>import("./GlobalIlluminationUpscale.glsl-CgRIfnFS.js").then(t=>t.c),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33])))}initializePipeline(){return Z({colorWrite:J})}};K=m([z("esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationUpscaleTechnique")],K);const T=1,za=100;let _e=class extends F{constructor(e){super(e),this._passParameters=new Ue,this._drawParameters=new Ze,this._drawParametersUpscale=new Ye,this._configuration=new de,this._lastOutput=null,this._isGlobalIlluminationUpdate=!1,this._lowQualityResolutionScale=.35,this._maxFrames=256}initialize(){this.addHandles(Ce(()=>this._mode,e=>{e===0?this._disable():this._enable()},Fe))}destroy(){this._lastOutput=S(this._lastOutput)}_disable(){super._disable(),this._resetAccumulation(),this._passParameters.temporalSampleFrame=0}get hasHighQuality(){return this._mode===2}resetAccumulation(){this._isGlobalIlluminationUpdate||!(this._passParameters.accumulatedFrames>za)&&this._configuration.hasEmission||this._resetAccumulation()}_resetAccumulation(){this._passParameters.accumulatedFrames=0,this._lastOutput=S(this._lastOutput)}get isAccumulating(){return this.enabled&&this._passParameters.accumulatedFrames<this._maxFrames}precompile(){this.techniques.getCompiled(K)}render(e){const t=this.bindParameters.frameRendererTarget===1;if(this._passParameters.accumulatedFrames>=this._maxFrames&&!t)return this._lastOutput?.retain(),this._lastOutput;const a=e.find(({name:o})=>o==="normals"),r=a?.getTexture(),l=a?.getTexture(We);return r&&l?this._mode===0?this._emptyOutput:(this._configuration.hasEmission=!!this.bindParameters.reprojection.lastFrameEmission,t?this._renderScreenshot(r,l):this._renderInteractive(r,l)):this._emptyOutput}_renderScreenshot(e,t){let a=this._emptyOutput;const r=this._passParameters.accumulatedFrames,l=this._passParameters.temporalSampleFrame;this._passParameters.accumulatedFrames=0,this._passParameters.temporalSampleFrame=0;const o=this.techniques.get(X,this._configuration),s=this.techniques.get(k);for(;this._passParameters.accumulatedFrames<this._maxFrames;){this._passParameters.globalIllumination=a.getTexture(),this._passParameters.globalIlluminationWeights=a.getTexture(j);const n=this._renderAccumulationFrame(e,t,o,s);++this._passParameters.accumulatedFrames,a.release(),a=n}return this._passParameters.globalIllumination=null,this._passParameters.globalIlluminationWeights=null,this._passParameters.accumulatedFrames=r,this._passParameters.temporalSampleFrame=l,a}_renderInteractive(e,t){if(!this._canRender)return this._requestRender(),this._emptyOutput;const a=this._mode===1?this._lowQualityResolutionScale:1,r=this.techniques.getCompiled(X,this._configuration),l=this.techniques.getCompiled(k),o=a<1,s=o?this.techniques.getCompiled(K):null;if(!r||!l||o&&!s)return this._requestRender(),this._emptyOutput;const n=this._renderAccumulationFrame(e,t,r,l,s,a);return++this._passParameters.accumulatedFrames,this._passParameters.accumulatedFrames<this._maxFrames&&this._requestRender(),this._storeOutput(n),n}_renderAccumulationFrame(e,t,a,r,l,o=1){const s=this.bindParameters,n=this.renderingContext,{camera:u}=s;this._passParameters.normalTexture=e,this._passParameters.depthTexture=t,this._passParameters.projScale=1/u.computeScreenPixelSizeAtDist(1),this._passParameters.resolutionScale=o;const{fullWidth:b,fullHeight:p}=u,C=Math.max(1,Math.floor(b*o)),c=Math.max(1,Math.floor(p*o)),w=this.fboCache.acquire(C,c,"global illumination input").acquireColor(j,2);n.bindFramebuffer(w.fbo),n.setViewport(0,0,C,c),n.bindTechnique(a,s,this._passParameters,this._drawParameters),n.screen.draw();const g=Math.max(1,Math.round(C/T)),v=Math.max(1,Math.round(c/T)),y=this.fboCache.acquire(g,v,"global illumination blur horizontal");n.bindFramebuffer(y.fbo);const M=w.obtainAttachment(j);this._drawParameters.texture=w.getTexture(),this._drawParameters.weightTexture=M.attachment,D(this._drawParameters.blurSize,0,T/c),n.bindTechnique(r,s,this._passParameters,this._drawParameters),n.setViewport(0,0,g,v),n.screen.draw(),w.release();const x=this.fboCache.acquire(g,v,l?"global illumination blur vertical":W.AMBIENT_ILLUMINATION);n.bindFramebuffer(x.fbo),n.setViewport(0,0,g,v),n.setClearColor(1,1,1,0),n.clear(16384),this._drawParameters.texture=y.getTexture(),this._drawParameters.weightTexture=M.attachment,D(this._drawParameters.blurSize,T/g,0),n.bindTechnique(r,s,this._passParameters,this._drawParameters),n.setViewport(0,0,g,v),n.screen.draw(),y.release(),x.attachColor(M,j),M.release();let I=x;return l&&(I=this.fboCache.acquire(b,p,W.AMBIENT_ILLUMINATION).acquireColor(j,2),n.bindFramebuffer(I.fbo),n.setViewport(0,0,b,p),n.setClearColor(1,1,1,0),n.clear(16384),this._drawParametersUpscale.colorTexture=x.getTexture(),this._drawParametersUpscale.weightTexture=x.getTexture(j),n.bindTechnique(l,s,this._passParameters,this._drawParametersUpscale),n.screen.draw(),x.release()),n.setViewport4fv(u.fullViewport),this._passParameters.temporalSampleFrame=(this._passParameters.temporalSampleFrame+1)%64,I}_requestRender(){this._isGlobalIlluminationUpdate=!0,this.requestRender(1),this._isGlobalIlluminationUpdate=!1}_storeOutput(e){this._lastOutput!==e&&(this._lastOutput=S(this._lastOutput),this._lastOutput=e,this._lastOutput.retain())}get _emptyOutput(){const e=this.renderingContext,{fullWidth:t,fullHeight:a}=this.bindParameters.camera,r=this.fboCache.acquire(t,a,W.AMBIENT_ILLUMINATION).acquireColor(j,2);return e.bindFramebuffer(r.fbo),e.setViewport(0,0,t,a),e.clearBuffer(0,nt),e.clearBuffer(1,lt),r}get _canRender(){const{reprojection:e,hasEmission:t,globalIllumination:a}=this.bindParameters;return!(!e.lastFrameColor||t&&!e.lastFrameEmission||!e.lastFrameDepth||!a)}get _mode(){return this._useGlobalIllumination?this.view.stage.renderer.isFeatureEnabled(10)?2:1:0}get test(){const e=this;return{get maxFrames(){return e._maxFrames},set maxFrames(t){e._maxFrames=t},get lowQualityResolutionScale(){return e._lowQualityResolutionScale},set lowQualityResolutionScale(t){e._lowQualityResolutionScale=t},passParameters:this._passParameters,configuration:this._configuration,get mode(){return e._mode},async restartAccumulation(){e.produces!=="disabled"&&(e._disable(),await st(),e._enable())}}}};_e=m([z("esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIllumination")],_e);function _a(e,t){t.receiveGlobalIllumination?(e.uniforms.add(new he("hasGlobalIlluminationTexture",a=>a.globalIllumination!=null),new _("globalIlluminationTexture",a=>a.globalIllumination?.getTexture())),e.constants.add("blurSizePixelsInverse","float",1/T),e.code.add(i`vec3 readGlobalIlluminationOcclusionInverse() {
if (!hasGlobalIlluminationTexture) {
return vec3(1.0);
}
ivec2 texel = ivec2(gl_FragCoord.xy * blurSizePixelsInverse);
return vec3(texelFetch(globalIlluminationTexture, texel, 0).a);
}
vec3 readGlobalIlluminationOcclusion() {
return 1.0 - readGlobalIlluminationOcclusionInverse();
}
vec4 readGlobalIlluminationEmissionInverse() {
if (!hasGlobalIlluminationTexture) {
return vec4(1.0);
}
ivec2 texel = ivec2(gl_FragCoord.xy * blurSizePixelsInverse);
return 1.0 - vec4(texelFetch(globalIlluminationTexture, texel, 0).rgb, 0.0);
}
vec4 readGlobalIlluminationEmission() {
return max((1.0 - readGlobalIlluminationEmissionInverse() - 0.01) / 0.99, 0.0);
}`)):e.code.add(i`vec3 readGlobalIlluminationOcclusionInverse() { return vec3(1.0); }
vec3 readGlobalIlluminationOcclusion() { return vec3(0.0); }
vec4 readGlobalIlluminationEmissionInverse() { return vec4(1.0); }
vec4 readGlobalIlluminationEmission() { return vec4(0.0); }`)}const Pa=.4;function Ca(e){e.code.add(i`float mapChannel(float x, vec2 p) {
if((x < p.x) && (p.x == 0.0) || !(x < p.x) && (p.x == 1.0)) {
return 0.0;
}
float result = (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
return max(result, 0.0);
}`),e.code.add(i`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function Fa(e){e.constants.add("ambientBoostFactor","float",Pa)}function Wa(e){e.uniforms.add(new P("lightingGlobalFactor",t=>t.lighting.globalFactor))}function vi(e,t){const{pbrMode:a,spherical:r,hasColorTexture:l,receiveGlobalIllumination:o}=t;e.include(U),e.include(_a,t),e.include(Nt,t),a!==0&&e.include(Zt,t),e.include(qt,t),e.include(pe),e.include(Oe,t);const s=!(a===2&&!l);s&&e.include(Ca),Fa(e),Wa(e),e.uniforms.add($).code.add(i`
    float additionalDirectedAmbientLight(float lightAlignment) {
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }

    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float lightAlignment = dot(${r?i`normalize(vPosWorld)`:i`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }
  `),e.uniforms.add(ce).code.add(i`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`);const n=o?"globalIlluminationOcclusion":"ssao";switch(e.constants.add("mainLightIrradianceScale","float",o?.75:1),e.constants.add("ambientIrradianceScale","float",o?1.5:1),o&&(e.constants.add("globalIlluminationEmissionCompressionWeight","float",.75),e.code.add(i`vec3 evaluateGlobalIlluminationOcclusion() {
return min(1.2 * readGlobalIlluminationOcclusion(), 1.0);
}
vec3 evaluateGlobalIlluminationEmission(vec3 albedoLinear) {
vec3 emission = 2.25 * (0.75 * albedoLinear + 0.25) * readGlobalIlluminationEmission().rgb;
vec3 compressedEmission = emission / (emission + 1.0);
return mix(emission, compressedEmission, globalIlluminationEmissionCompressionWeight);
}`)),a){case 0:case 4:case 3:e.include(At),e.code.add(i`
        vec3 evaluateSceneLighting(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
                                   vec3 viewDirection, vec3 upDirection) {
          ${h(o,i`vec3 globalIlluminationOcclusion = evaluateGlobalIlluminationOcclusion();`)}

          vec3 mainLighting = mainLightIrradianceScale * applyShading(normal, shadow);
          vec3 ambientLighting = ambientIrradianceScale * calculateAmbientIrradiance(normal) * (1.0 - ${n});
          vec3 albedoLinear = linearizeGamma(albedo);

          vec3 totalLight = mainLighting + ambientLighting + additionalLight;
          totalLight = min(totalLight, vec3(PI));
          vec3 linearColor = vec3((albedoLinear / PI) * totalLight);
          ${h(o,"linearColor += evaluateGlobalIlluminationEmission(albedoLinear);")}
          return delinearizeGamma(linearColor);
        }
      `);break;case 1:case 2:e.constants.add("groundReflectance","float",o?.35:.2),e.code.add(i`
        const float fillLightIntensity = 0.25;
        const float horizonLightDiffusion = 0.4;

        vec3 evaluateSceneLighting(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
                                   vec3 viewDirection, vec3 upDirection) {
          PBRShadingInfo inputs;
          calculatePBRInputs(inputs, normal, viewDirection, upDirection, albedo);
          ${h(o,"vec3 globalIlluminationOcclusion = evaluateGlobalIlluminationOcclusion();")}
      `),t.useFillLights?e.uniforms.add(new he("hasFillLights",u=>u.enableFillLights)):e.constants.add("hasFillLights","bool",!1),e.code.add(i`
        vec3 ambientDir = vec3(5.0 * upDirection[1] - upDirection[0] * upDirection[2], - 5.0 * upDirection[0] - upDirection[2] * upDirection[1], upDirection[1] * upDirection[1] + upDirection[0] * upDirection[0]);
        ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent = mainLightIrradianceScale * inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
        // calculate ambient irradiance for localView and additionalLight for globalView
        vec3 ambientLightIrradianceComponent = ambientIrradianceScale * calculateAmbientIrradiance(normal) * (1.0 - ${n}) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = groundReflectance * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),e.uniforms.add(new P("lightingSpecularStrength",u=>u.lighting.mainLight.specularStrength),new P("lightingEnvironmentStrength",u=>u.lighting.mainLight.environmentStrength)).code.add(i`
        vec3 horizonRingDir = inputs.RdotUP * upDirection - inputs.reflectedView;
        vec3 horizonRingH = normalize(horizonRingDir - viewDirection);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;

        // calculateAmbientRadiance for localView and additionalLight for global view
        vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance() * (1.0 - ${n}) + additionalLight;
        float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotUP + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;

        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radiance by the groundReflectance
        inputs.groundRadianceToSurface = 0.5 * groundReflectance * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;

        // Calculate average ambient radiance - This is used in the gamut mapping process to determine the black level for compression
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + groundReflectance);
      `),e.constants.add("additionalAmbientIrradianceFactor","float",.02),e.code.add(i`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 linearColor = reflectedColorComponent + additionalMaterialReflectanceComponent;

        ${h(o,"linearColor += evaluateGlobalIlluminationEmission(inputs.albedoLinear);")}

      ${s?"linearColor = blackLevelSoftCompression(linearColor, inputs.averageAmbientRadiance);":"linearColor = max(vec3(0.0), linearColor - 0.005 * inputs.averageAmbientRadiance);"}

        return delinearizeGamma(linearColor);
      }
    `);break;case 5:case 6:e.constants.add("terrainSpecularity","float",o?.35:.5),e.uniforms.add($,ce).code.add(i`
        const float roughnessTerrain = 0.5;

        vec3 evaluateSceneLighting(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
                                   vec3 viewDirection, vec3 upDirection) {
          PBRShadingInfo inputs;
          calculateSimplifiedInputs(inputs, normal, viewDirection, upDirection, albedo);

          ${h(o,"vec3 globalIlluminationOcclusion = evaluateGlobalIlluminationOcclusion();")}

          vec3 mainLightIrradianceComponent = mainLightIrradianceScale * (1.0 - shadow) * inputs.NdotL * mainLightIntensity;
          vec3 ambientLightIrradianceComponent = ambientIrradianceScale * calculateAmbientIrradiance(normal) * (1.0 - ${n}) + additionalLight;
          vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;

          vec3 indirectDiffuse = ((1.0 - inputs.NdotUP) * mainLightIrradianceComponent + (1.0 + inputs.NdotUP ) * ambientSky) * 0.5;
          vec3 diffuseColor = inputs.albedoLinear * (1.0 - inputs.f0) * indirectDiffuse / PI;

          vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, roughnessTerrain) * mainLightIntensity;
          vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, inputs.NdotV);
          vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
          vec3 specularComponent = terrainSpecularity * specularColor * mainLightRadianceComponent;

          vec3 linearColor = diffuseColor + specularComponent;

          ${h(o,"linearColor += evaluateGlobalIlluminationEmission(inputs.albedoLinear);")}

          return delinearizeGamma(linearColor);
        }
      `);break;case 7:e.code.add(i`vec3 evaluateSceneLighting(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
vec3 viewDirection, vec3 upDirection) {
return albedo;
}`)}}function xi(e,{spherical:t}){e.code.add("vec3 normalize4(vec4 vector){ return normalize(vector.xyz / vector.w); }"),e.code.add(t?`vec3 getLocalUp(in vec3 pos, in vec3 origin) { return normalize(pos + origin); }
         vec3 getLocalUp(in vec3 pos) { return normalize(pos); }`:`vec3 getLocalUp(in vec3 pos, in vec3 origin) { return vec3(0.0, 0.0, 1.0); }
         vec3 getLocalUp(in vec3 pos) { return vec3(0.0, 0.0, 1.0); }`),t?e.code.add(i`mat3 getTBNMatrix(in vec3 n) {
vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`):e.code.add(i`mat3 getTBNMatrix(in vec3 n) {
vec3 t = vec3(1.0, 0.0, 0.0);
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`)}function Ea(e,t){const a=Mt(t.output)&&t.receiveShadows;a&&_t(e),e.vertex.code.add(i`
    void forwardLinearDepthToReadShadow() { ${h(a,"forwardLinearDepth(gl_Position.w);")} }
  `)}let Ba=class extends B{constructor(t,a,r,l){super(t,"mat4",2,(o,s,n,u)=>o.setUniformMatrices4fv(t,a(s,n,u),l),r)}};class Ga extends B{constructor(t,a,r,l){super(t,"mat4",1,(o,s,n)=>o.setUniformMatrices4fv(t,a(s,n),l),r)}}function Ra(e){e.uniforms.add(new Ga("shadowMapMatrix",({origin:t},a)=>a.shadowMap.getShadowMapMatrices(t),4)),e.include(ke)}function Ta(e){e.uniforms.add(new Ba("shadowMapMatrix",({origin:t},a)=>a.shadowMap.getShadowMapMatrices(t),4)),e.include(ke)}function ke(e){e.uniforms.add(new Ee("cascadeDistances",t=>t.shadowMap.cascadeDistances),new bt("numCascades",t=>t.shadowMap.numCascades)).code.add(i`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
vec3 calculateUVZShadow(in vec3 _worldPos, in float _linearDepth, in ivec2 shadowMapSize) {
int i = _linearDepth < cascadeDistances[1] ? 0 :
_linearDepth < cascadeDistances[2] ? 1 :
_linearDepth < cascadeDistances[3] ? 2 : 3;
if (i >= numCascades) {
return invalidShadowmapUVZ;
}
vec3 lvpos = lightSpacePosition(_worldPos, shadowMapMatrix[i]);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
return invalidShadowmapUVZ;
}
vec2 uvShadow = cascadeCoordinates(i, shadowMapSize, lvpos);
return vec3(uvShadow, lvpos.z);
}`)}class Oa extends B{constructor(t,a){super(t,"sampler2DShadow",0,(r,l)=>r.bindTexture(t,a(l)))}}class Pe extends Dt{constructor(){super(...arguments),this.hasShadowHighlights=!1,this.receiveShadows=!0}}function Si(e,t){t.receiveShadows&&e.fragment.include(Ra),Xe(e,t)}function wi(e,t){t.receiveShadows&&e.fragment.include(Ta),Xe(e,t)}function Xe(e,t){e.include(Ea,t);const{hasShadowHighlights:a,receiveShadows:r,spherical:l}=t;r&&(La(e.fragment,a),e.fragment.code.add(i`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap, 0));
return readShadowMaps(uvzShadow);
}
float readShadowMap(const in vec3 _worldPos ) { return readShadowMap(_worldPos, linearDepth); }`)),e.fragment.uniforms.add(new P("lightingGlobalFactor",({lighting:o})=>o.globalFactor)).code.add(i`
      float getShadow(float additionalAmbientScale, float shadow) {
        float ambient = ${h(l,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};
        return max(ambient, shadow);
      }

      float readShadow(float additionalAmbientScale, vec3 vpos) {
        return getShadow(additionalAmbientScale, ${h(r,"readShadowMap(vpos)","0.0")});
      }
    `)}function La(e,t){t&&e.uniforms.add(new _("shadowHighlight",({shadowHighlight:a})=>a?.getTexture())),e.uniforms.add(new Oa("shadowMap",({shadowMap:a})=>a.getOutput(5)??a.getOutput(7))).code.add(i`
    float readShadowMaps(const in vec3 uvzShadow) {
      if (uvzShadow.z < 0.0) {
        return 0.0;
      }

      float shadow1 = texture(shadowMap, uvzShadow);
      ${h(t,`float shadow2 = texelFetch(shadowHighlight, ivec2(gl_FragCoord.xy), 0).r;
         return shadow1 > shadow2 ? shadow1 : shadow2;`,"return shadow1;")}
    }
  `)}m([L()],Pe.prototype,"hasShadowHighlights",void 0),m([L()],Pe.prototype,"receiveShadows",void 0);class $a extends Ge{constructor(){super(...arguments),this.receiveShadows=!0}}function yi(e,t){return e.receiveShadows&&t.shadowHighlight?.getTexture()!=null}m([L()],$a.prototype,"receiveShadows",void 0);export{ve as $,Ue as A,He as B,Ye as C,ja as D,qt as E,di as F,Yt as G,Le as H,Oe as I,Pt as J,fa as K,ne as L,ge as N,Ne as U,$e as V,Ae as _,pe as a,xi as b,ee as c,vi as d,Nt as e,Za as f,Re as g,Vt as h,yi as i,Si as j,Zt as k,jt as l,wi as m,Qa as n,ce as o,Fa as p,$ as q,G as r,Bt as s,Xa as t,Wt as u,Wa as v,me as w,Ze as x,ya as y,qe as z};
//# sourceMappingURL=ReceiveShadowsConfiguration-Cn-k4GbB.js.map
