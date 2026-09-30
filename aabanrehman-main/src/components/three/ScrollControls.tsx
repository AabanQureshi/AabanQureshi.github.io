'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ScrollControlsProps {
  cameraPath?: THREE.Vector3[];
  lookAtPath?: THREE.Vector3[];
  scrollRange?: [number, number];
  enabled?: boolean;
}

export function ScrollControls({
  cameraPath,
  lookAtPath,
  scrollRange = [0, 10000],
  enabled = true,
}: ScrollControlsProps) {
  const { camera } = useThree();
  const splineRef = useRef<THREE.CatmullRomCurve3>();
  const lookAtSplineRef = useRef<THREE.CatmullRomCurve3>();
  const scrollProgressRef = useRef(0);

  useEffect(() => {
    if (cameraPath && cameraPath.length >= 4) {
      splineRef.current = new THREE.CatmullRomCurve3(cameraPath);
      splineRef.current.closed = false;
    }
    if (lookAtPath && lookAtPath.length >= 4) {
      lookAtSplineRef.current = new THREE.CatmullRomCurve3(lookAtPath);
      lookAtSplineRef.current.closed = false;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const [min, max] = scrollRange;
      const clamped = Math.max(min, Math.min(max, scrollY));
      scrollProgressRef.current = (clamped - min) / (max - min);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cameraPath, lookAtPath, scrollRange]);

  useFrame(() => {
    if (!enabled || !splineRef.current) return;

    const progress = scrollProgressRef.current;
    const point = splineRef.current.getPoint(progress);
    camera.position.copy(point);

    if (lookAtSplineRef.current) {
      const lookPoint = lookAtSplineRef.current.getPoint(progress);
      camera.lookAt(lookPoint);
    }
  });

  return null;
}

interface ParallaxControlsProps {
  factor?: number;
  axis?: 'x' | 'y' | 'z';
  enabled?: boolean;
}

export function ParallaxControls({ factor = 0.5, axis = 'y', enabled = true }: ParallaxControlsProps) {
  const { camera } = useThree();
  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY * 0.001;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    if (!enabled) return;
    if (axis === 'x') camera.position.x = -scrollYRef.current * factor;
    else if (axis === 'y') camera.position.y = -scrollYRef.current * factor;
    else if (axis === 'z') camera.position.z = 5 + scrollYRef.current * factor;
  });

  return null;
}

interface MouseParallaxProps {
  factor?: number;
  enabled?: boolean;
  lerp?: number;
}

export function MouseParallax({ factor = 0.3, enabled = true, lerp = 0.05 }: MouseParallaxProps) {
  const { camera, viewport } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / viewport.width) * 2 - 1;
      mouseRef.current.y = -(e.clientY / viewport.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [viewport.width, viewport.height]);

  useFrame(() => {
    if (!enabled) return;

    targetRef.current.x += (mouseRef.current.x * factor - targetRef.current.x) * lerp;
    targetRef.current.y += (mouseRef.current.y * factor - targetRef.current.y) * lerp;

    camera.position.x = targetRef.current.x;
    camera.position.y = targetRef.current.y;
  });

  return null;
}