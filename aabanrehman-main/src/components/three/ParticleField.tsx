'use client';

import { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  size?: number;
  speed?: number;
  colorA?: string;
  colorB?: string;
  colorC?: string;
  spread?: number;
  mouseInfluence?: number;
  scrollInfluence?: number;
  onQualityChange?: (count: number) => void;
}

const simplexNoise = `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289((x * 34.0 + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 1.0/7.0;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`;

export function ParticleField({
  count = 2000,
  size = 0.02,
  speed = 0.3,
  colorA = '#8b5cf6',
  colorB = '#06b6d4',
  colorC = '#10b981',
  spread = 8,
  mouseInfluence = 0.5,
  scrollInfluence = 0.1,
  onQualityChange,
}: ParticleFieldProps) {
  const { viewport } = useThree();
  const positionsRef = useRef<Float32Array>();
  const colorsRef = useRef<Float32Array>();
  const velocitiesRef = useRef<Float32Array>();
  const basePositionsRef = useRef<Float32Array>();
  const geometryRef = useRef<THREE.BufferGeometry>();
  const materialRef = useRef<THREE.PointsMaterial>();
  const meshRef = useRef<THREE.Points>();
  const timeRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollYRef = useRef(0);

  // Initialize particle data
  const particleData = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const basePositions = new Float32Array(count * 3);

    const colorA3 = new THREE.Color(colorA);
    const colorB3 = new THREE.Color(colorB);
    const colorC3 = new THREE.Color(colorC);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = spread * (0.3 + Math.random() * 0.7);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;
      basePositions[i3] = x;
      basePositions[i3 + 1] = y;
      basePositions[i3 + 2] = z;

      velocities[i3] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.01;

      const t = Math.random();
      let color: THREE.Color;
      if (t < 0.33) color = colorA3;
      else if (t < 0.66) color = colorB3;
      else color = colorC3;

      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    return { positions, colors, velocities, basePositions };
  }, [count, colorA, colorB, colorC, spread]);

  // Create geometry and material
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(particleData.positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(particleData.colors, 3));
    geo.setAttribute('aVelocity', new THREE.BufferAttribute(particleData.velocities, 3));
    geo.setAttribute('aBasePosition', new THREE.BufferAttribute(particleData.basePositions, 3));
    return geo;
  }, [particleData]);

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
  }, [size]);

  // Update quality
  useEffect(() => {
    onQualityChange?.(count);
  }, [count, onQualityChange]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / viewport.width) * 2 - 1;
      mouseRef.current.y = -(e.clientY / viewport.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [viewport.width, viewport.height]);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY * 0.001;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation loop
  useFrame((state, delta) => {
    if (!meshRef.current) return;

    timeRef.current += delta * speed;

    const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
    const velocities = meshRef.current.geometry.attributes.aVelocity.array as Float32Array;
    const basePositions = meshRef.current.geometry.attributes.aBasePosition.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const i3x = i3;
      const i3y = i3 + 1;
      const i3z = i3 + 2;

      // Noise-based flow
      const noiseInputX = basePositions[i3x] * 0.1 + timeRef.current * 0.1;
      const noiseInputY = basePositions[i3y] * 0.1 + timeRef.current * 0.13;
      const noiseInputZ = basePositions[i3z] * 0.1 + timeRef.current * 0.07;

      const noise = Math.sin(noiseInputX) * Math.cos(noiseInputY) * Math.sin(noiseInputZ);
      const noise2 = Math.cos(noiseInputX * 1.3) * Math.sin(noiseInputY * 1.3) * Math.cos(noiseInputZ * 1.3);

      // Apply velocity with noise
      velocities[i3x] += (noise - velocities[i3x]) * 0.01;
      velocities[i3y] += (noise2 - velocities[i3y]) * 0.01;
      velocities[i3z] += ((noise + noise2) * 0.5 - velocities[i3z]) * 0.01;

      // Mouse influence
      const dx = mouseRef.current.x * spread - positions[i3x];
      const dy = mouseRef.current.y * spread - positions[i3y];
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < spread * 0.5) {
        const influence = (1 - dist / (spread * 0.5)) * mouseInfluence;
        velocities[i3x] += dx * influence * 0.01;
        velocities[i3y] += dy * influence * 0.01;
      }

      // Scroll influence
      velocities[i3z] += -scrollYRef.current * scrollInfluence * 0.01;

      // Update position
      positions[i3x] += velocities[i3x];
      positions[i3y] += velocities[i3y];
      positions[i3z] += velocities[i3z];

      // Boundary wrap
      const boundary = spread * 1.5;
      if (Math.abs(positions[i3x]) > boundary) positions[i3x] = -Math.sign(positions[i3x]) * boundary;
      if (Math.abs(positions[i3y]) > boundary) positions[i3y] = -Math.sign(positions[i3y]) * boundary;
      if (Math.abs(positions[i3z]) > boundary) positions[i3z] = -Math.sign(positions[i3z]) * boundary;
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;
    meshRef.current.geometry.attributes.aVelocity.needsUpdate = true;

    // Slow rotation of entire field
    meshRef.current.rotation.y = timeRef.current * 0.02;
    meshRef.current.rotation.x = Math.sin(timeRef.current * 0.1) * 0.05;
  });

  return (
    <points ref={meshRef} geometry={geometry} material={material} />
  );
}

interface ParticleFieldCanvasProps extends Omit<ParticleFieldProps, 'count'> {
  quality?: 'high' | 'medium' | 'low';
  reducedMotion?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const QUALITY_COUNTS = {
  high: 4000,
  medium: 2000,
  low: 500,
};

export function ParticleFieldCanvas({
  quality = 'medium',
  reducedMotion = false,
  className = '',
  style,
  ...props
}: ParticleFieldCanvasProps) {
  const count = reducedMotion ? 0 : QUALITY_COUNTS[quality];

  if (reducedMotion || count === 0) {
    return (
      <div
        className={className}
        style={{
          ...style,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(6,182,212,0.08) 50%, rgba(16,185,129,0.05) 100%)',
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <ParticleField count={count} {...props} />
  );
}