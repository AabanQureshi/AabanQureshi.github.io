'use client';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { useFrame, useThree } from '@react-three/fiber';
import { useMemo, useEffect, useRef } from 'react';
import * as THREE from 'three';

interface PostProcessingProps {
  enabled?: boolean;
  bloomStrength?: number;
  bloomRadius?: number;
  bloomThreshold?: number;
  chromaticAberration?: number;
  vignette?: number;
}

const ChromaticAberrationShader = {
  uniforms: {
    tDiffuse: { value: null },
    aberration: { value: 0.005 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float aberration;
    varying vec2 vUv;
    void main() {
      vec2 offset = aberration * vec2(0.001, 0.001);
      float r = texture2D(tDiffuse, vUv + offset).r;
      float g = texture2D(tDiffuse, vUv).g;
      float b = texture2D(tDiffuse, vUv - offset).b;
      gl_FragColor = vec4(r, g, b, 1.0);
    }
  `,
};

const VignetteShader = {
  uniforms: {
    tDiffuse: { value: null },
    offset: { value: 1.0 },
    darkness: { value: 1.3 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float offset;
    uniform float darkness;
    varying vec2 vUv;
    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      float dist = distance(vUv, vec2(0.5));
      float vig = smoothstep(offset, 0.0, dist * darkness);
      gl_FragColor = vec4(texel.rgb * vig, texel.a);
    }
  `,
};

export function PostProcessing({
  enabled = true,
  bloomStrength = 0.3,
  bloomRadius = 0.4,
  bloomThreshold = 0.85,
  chromaticAberration = 0.003,
  vignette = 0.3,
}: PostProcessingProps) {
  const { gl, scene, camera, size } = useThree();
  const composerRef = useRef<EffectComposer>();
  const bloomPassRef = useRef<UnrealBloomPass>();
  const chromaticPassRef = useRef<ShaderPass>();
  const vignettePassRef = useRef<ShaderPass>();

  const composer = useMemo(() => {
    const c = new EffectComposer(gl);
    c.addPass(new RenderPass(scene, camera));

    const bloom = new UnrealBloomPass(new THREE.Vector2(size.width, size.height), bloomStrength, bloomRadius, bloomThreshold);
    c.addPass(bloom);
    bloomPassRef.current = bloom;

    const chromatic = new ShaderPass(ChromaticAberrationShader);
    chromatic.uniforms.aberration.value = chromaticAberration;
    c.addPass(chromatic);
    chromaticPassRef.current = chromatic;

    const vig = new ShaderPass(VignetteShader);
    vig.uniforms.offset.value = 1.0;
    vig.uniforms.darkness.value = vignette;
    c.addPass(vig);
    vignettePassRef.current = vig;

    return c;
  }, [gl, scene, camera, size, bloomStrength, bloomRadius, bloomThreshold, chromaticAberration, vignette]);

  useEffect(() => {
    if (!enabled) return;
    composer.render();
  }, [composer, enabled]);

  useFrame((state, delta) => {
    if (!enabled) return;
    gl.autoClear = false;
    composer.render(delta);
  }, 1);

  useEffect(() => {
    return () => {
      composerRef.current?.dispose();
    };
  }, []);

  return null;
}