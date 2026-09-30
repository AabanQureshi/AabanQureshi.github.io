'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingGeometryProps {
  quality?: 'high' | 'medium' | 'low';
  reducedMotion?: boolean;
  colors?: string[];
}

const glassVertexShader = `
varying vec3 vNormal;
varying vec3 vWorldPosition;
varying vec2 vUv;

void main() {
  vNormal = normalize(normalMatrix * normal);
  vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const glassFragmentShader = `
uniform vec3 colorA;
uniform vec3 colorB;
uniform float time;
uniform float opacity;

varying vec3 vNormal;
varying vec3 vWorldPosition;
varying vec2 vUv;

void main() {
  // Fresnel effect
  vec3 viewDir = normalize(cameraPosition - vWorldPosition);
  float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 3.0);

  // Gradient based on world position
  float gradient = smoothstep(-2.0, 2.0, vWorldPosition.y);
  vec3 baseColor = mix(colorA, colorB, gradient);

  // Animated shimmer
  float shimmer = sin(vWorldPosition.x * 2.0 + time * 0.5) * 0.5 + 0.5;
  baseColor += vec3(shimmer * 0.1);

  // Combine with fresnel
  vec3 finalColor = mix(baseColor, vec3(1.0), fresnel * 0.5);
  float alpha = opacity * (0.3 + fresnel * 0.7);

  gl_FragColor = vec4(finalColor, alpha);
}
`;

const GEOMETRY_TYPES = [
  { type: 'TorusKnotGeometry', args: [0.6, 0.2, 100, 16, 2, 3] as const },
  { type: 'IcosahedronGeometry', args: [0.8, 0] as const },
  { type: 'OctahedronGeometry', args: [0.9, 0] as const },
  { type: 'DodecahedronGeometry', args: [0.85, 0] as const },
];

export function FloatingGeometry({ quality = 'medium', reducedMotion = false, colors = ['#8b5cf6', '#06b6d4'] }: FloatingGeometryProps) {
  const geometryCount = quality === 'high' ? 4 : quality === 'medium' ? 3 : 1;
  const meshesRef = useRef<THREE.Mesh[]>([]);
  const timeRef = useRef(0);

  const materials = useMemo(() => {
    const colorA = new THREE.Color(colors[0]);
    const colorB = new THREE.Color(colors[1]);

    return Array.from({ length: geometryCount }, (_, i) =>
      new THREE.ShaderMaterial({
        vertexShader: glassVertexShader,
        fragmentShader: glassFragmentShader,
        uniforms: {
          colorA: { value: colorA },
          colorB: { value: colorB },
          time: { value: 0 },
          opacity: { value: 0.15 },
        },
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.NormalBlending,
      })
    );
  }, [colors, geometryCount]);

  const geometries = useMemo(() => {
    return Array.from({ length: geometryCount }, (_, i) => {
      const geoType = GEOMETRY_TYPES[i % GEOMETRY_TYPES.length];
      // @ts-ignore - dynamic geometry creation
      return new THREE[geoType.type](...geoType.args);
    });
  }, [geometryCount]);

  // Initialize meshes
  useEffect(() => {
    meshesRef.current = materials.map((material, i) => {
      const mesh = new THREE.Mesh(geometries[i], material);
      mesh.position.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      mesh.scale.setScalar(0.5 + Math.random() * 0.5);
      return mesh;
    });
  }, [materials, geometries]);

  useFrame((state, delta) => {
    if (reducedMotion) return;

    timeRef.current += delta;
    materials.forEach((mat) => {
      mat.uniforms.time.value = timeRef.current;
    });

    meshesRef.current.forEach((mesh, i) => {
      const speed = 0.1 + i * 0.05;
      const amplitude = 0.5 + i * 0.2;

      mesh.rotation.x += delta * speed * 0.7;
      mesh.rotation.y += delta * speed;
      mesh.rotation.z += delta * speed * 0.3;

      mesh.position.y += Math.sin(timeRef.current * speed * 2 + i) * amplitude * delta * 0.5;
      mesh.position.x += Math.cos(timeRef.current * speed * 1.5 + i * 2) * amplitude * delta * 0.3;
    });
  });

  if (reducedMotion) return null;

  return (
    <group>
      {meshesRef.current.map((mesh, i) => (
        <primitive key={i} object={mesh} />
      ))}
    </group>
  );
}

import { useEffect } from 'react';
import { Group } from 'three';

// Simple floating orbs as an alternative
export function FloatingOrbs({ quality = 'medium', reducedMotion = false, count = 8 }: { quality?: 'high' | 'medium' | 'low'; reducedMotion?: boolean; count?: number }) {
  const actualCount = quality === 'high' ? count : quality === 'medium' ? Math.max(3, count - 3) : 1;
  const orbsRef = useRef<THREE.Mesh[]>([]);
  const timeRef = useRef(0);

  const materials = useMemo(() => {
    return Array.from({ length: actualCount }, (_, i) => {
      const hue = (i / actualCount) * 0.4 + 0.65; // Purple to cyan range
      const color = new THREE.Color().setHSL(hue, 0.8, 0.5);
      return new THREE.MeshPhysicalMaterial({
        color,
        transparent: true,
        opacity: 0.1,
        transmission: 0.3,
        thickness: 0.5,
        roughness: 0.1,
        metalness: 0,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        ior: 1.33,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
    });
  }, [actualCount]);

  const geometry = useMemo(() => new THREE.SphereGeometry(1, 32, 32), []);

  useEffect(() => {
    orbsRef.current = materials.map((material, i) => {
      const mesh = new THREE.Mesh(geometry, material);
      const radius = 2 + Math.random() * 3;
      const theta = (i / actualCount) * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      mesh.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
      mesh.scale.setScalar(0.3 + Math.random() * 0.4);
      return mesh;
    });
  }, [materials, geometry, actualCount]);

  useFrame((state, delta) => {
    if (reducedMotion) return;

    timeRef.current += delta;
    orbsRef.current.forEach((mesh, i) => {
      mesh.rotation.y += delta * 0.1;
      mesh.position.y += Math.sin(timeRef.current * 0.5 + i) * 0.01;
    });
  });

  if (reducedMotion || actualCount === 0) return null;

  return (
    <group>
      {orbsRef.current.map((mesh, i) => (
        <primitive key={i} object={mesh} />
      ))}
    </group>
  );
}
