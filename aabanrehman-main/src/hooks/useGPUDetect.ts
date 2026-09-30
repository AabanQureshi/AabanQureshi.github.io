import { useEffect, useState } from 'react';

export type GPUTier = 'high' | 'medium' | 'low' | 'unknown';

interface GPUInfo {
  tier: GPUTier;
  renderer: string;
  vendor: string;
}

export function useGPUDetect(): GPUInfo {
  const [gpuInfo, setGpuInfo] = useState<GPUInfo>({
    tier: 'unknown',
    renderer: '',
    vendor: '',
  });

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');

    if (!gl) {
      setGpuInfo({ tier: 'low', renderer: 'No WebGL', vendor: '' });
      return;
    }

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    const renderer = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'Unknown';
    const vendor = debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : 'Unknown';

    let tier: GPUTier = 'medium';
    const rendererLower = renderer.toLowerCase();

    // High-end desktop GPUs
    if (
      rendererLower.includes('rtx') ||
      rendererLower.includes('gtx 1') ||
      rendererLower.includes('gtx 2') ||
      rendererLower.includes('radeon rx 6') ||
      rendererLower.includes('radeon rx 7') ||
      rendererLower.includes('arc a7') ||
      rendererLower.includes('m1 max') ||
      rendererLower.includes('m2 max') ||
      rendererLower.includes('m3 max')
    ) {
      tier = 'high';
    }
    // Low-end / integrated
    else if (
      rendererLower.includes('intel') ||
      rendererLower.includes('uhd') ||
      rendererLower.includes('iris') ||
      rendererLower.includes('integrated') ||
      rendererLower.includes('mali') ||
      rendererLower.includes('adreno')
    ) {
      tier = 'low';
    }

    setGpuInfo({ tier, renderer, vendor });
  }, []);

  return gpuInfo;
}

export function getQualityPreset(tier: GPUTier) {
  const presets = {
    high: { particles: 4000, dpr: [1, 2], bloom: true, shadows: true, geometryCount: 4 },
    medium: { particles: 2000, dpr: [1, 1.5], bloom: true, shadows: false, geometryCount: 3 },
    low: { particles: 800, dpr: [1, 1], bloom: false, shadows: false, geometryCount: 1 },
    unknown: { particles: 1500, dpr: [1, 1.5], bloom: true, shadows: false, geometryCount: 2 },
  };
  return presets[tier];
}