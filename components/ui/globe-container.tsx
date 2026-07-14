'use client';

import React from 'react';
import { usePerformanceMode } from '@/hooks/use-performance-mode';
import dynamic from 'next/dynamic';

const GlobeDynamic = dynamic(
  () => import('@/components/ui/globe-analytics').then((mod) => mod.GlobeAnalytics),
  { ssr: false, loading: () => <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: '50%', background: 'rgba(255,255,255,0.02)' }} /> }
);

export function GlobeContainer() {
  const isLowEndDevice = usePerformanceMode();

  if (isLowEndDevice) {
    return (
      <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: '50%', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
        <span style={{ color: 'var(--fg-dim)', fontSize: '0.85rem', textAlign: 'center', padding: '20px' }}>
          Interactive features disabled<br/>to conserve device resources.
        </span>
      </div>
    );
  }

  return <GlobeDynamic />;
}
