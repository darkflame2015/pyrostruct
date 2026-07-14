'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Aggressive reset for mobile browsers (iOS Safari, etc.)
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';
    
    // Force immediate scroll using multiple methods
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as any });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Wait for at least 2 frames before restoring smooth scroll
    // This ensures mobile browsers actually commit the instant scroll
    let frameId: number;
    let timeoutId: NodeJS.Timeout;

    frameId = requestAnimationFrame(() => {
      frameId = requestAnimationFrame(() => {
        timeoutId = setTimeout(() => {
          document.documentElement.style.scrollBehavior = 'smooth';
          document.body.style.scrollBehavior = '';
        }, 50);
      });
    });

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}
