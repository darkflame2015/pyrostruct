'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook that detects if the user is on a low-end device (old phone, budget tablet)
 * or has explicitly enabled Data Saver modes.
 * Returns `true` if the device is deemed low-performance.
 */
export function usePerformanceMode() {
  const [isLowEnd, setIsLowEnd] = useState(false);

  useEffect(() => {
    let lowEnd = false;
    
    // Check hardware concurrency (CPU logical cores)
    // Most modern phones have 8 cores. 4 or less typically indicates an older or budget device.
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
      lowEnd = true;
    }
    
    // Check Device Memory (RAM in GB)
    // Only available in Chromium-based browsers
    if ('deviceMemory' in navigator) {
      if ((navigator as any).deviceMemory < 4) {
        lowEnd = true;
      }
    }

    // Check Data Saver mode
    if ('connection' in navigator) {
      if ((navigator as any).connection.saveData) {
        lowEnd = true;
      }
    }
    
    setIsLowEnd(lowEnd);
  }, []);

  return isLowEnd;
}
