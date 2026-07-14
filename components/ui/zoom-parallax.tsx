'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import styles from './zoom-parallax.module.css';

interface ZoomParallaxProps {
  items: React.ReactNode[];
}

export function ZoomParallax({ items }: ZoomParallaxProps) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.grid}>
        {items.map((item, index) => {
          // Subtle staggered Y translation only on desktop!
          const yOffset = isMobile ? 0 : (index % 2 === 0 ? 60 : -60);
          const yOffsetEnd = isMobile ? 0 : (index % 2 === 0 ? 120 : -120);

          const y = useTransform(
            scrollYProgress, 
            [0, 1], 
            [yOffset, yOffsetEnd]
          );
          
          // Subtle zoom in as it scrolls into view
          const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.85, 1, 1, 0.95]);
          const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

          return (
            <motion.div
              key={index}
              style={{ y, scale, opacity }}
              className={styles.itemWrap}
            >
              <div className={styles.itemInner}>
                {item}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
