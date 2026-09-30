'use client';

import { Canvas, CanvasProps } from '@react-three/fiber';
import { Suspense, useEffect, useRef } from 'react';

interface Canvas3DProps extends Omit<CanvasProps, 'children' | 'fallback' | 'onError'> {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  frameloop?: 'always' | 'demand' | 'never';
  onError?: (error: Error) => void;
}

export function Canvas3D({
  children,
  fallback = null,
  className = '',
  style,
  frameloop = 'demand',
  onError,
  ...props
}: Canvas3DProps) {
  const errorRef = useRef<Error | null>(null);

  useEffect(() => {
    if (errorRef.current && onError) {
      onError(errorRef.current);
    }
  }, [onError]);

  return (
    <div className={className} style={style}>
      <Canvas
        frameloop={frameloop}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => {
          gl.getContext().getExtension('EXT_color_buffer_float');
        }}
        {...props}
      >
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}

interface PerformanceMonitorProps {
  children: React.ReactNode;
  onQualityChange?: (quality: 'high' | 'medium' | 'low') => void;
  sampleSize?: number;
}

export function PerformanceMonitor({ children, onQualityChange, sampleSize = 60 }: PerformanceMonitorProps) {
  const frameTimes = useRef<number[]>([]);
  const lastTime = useRef(performance.now());
  const qualityRef = useRef<'high' | 'medium' | 'low'>('high');
  const frameId = useRef<number>();

  useEffect(() => {
    const measure = (now: number) => {
      const dt = now - lastTime.current;
      lastTime.current = now;

      frameTimes.current.push(dt);
      if (frameTimes.current.length > sampleSize) {
        frameTimes.current.shift();
      }

      if (frameTimes.current.length === sampleSize) {
        const avgFrameTime = frameTimes.current.reduce((a, b) => a + b, 0) / sampleSize;
        const fps = 1000 / avgFrameTime;

        let newQuality: 'high' | 'medium' | 'low' = 'high';
        if (fps < 30) newQuality = 'low';
        else if (fps < 50) newQuality = 'medium';

        if (newQuality !== qualityRef.current) {
          qualityRef.current = newQuality;
          onQualityChange?.(newQuality);
        }
      }

      frameId.current = requestAnimationFrame(measure);
    };

    frameId.current = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(frameId.current!);
  }, [sampleSize, onQualityChange]);

  return <>{children}</>;
}
