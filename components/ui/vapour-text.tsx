'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';

interface VapourTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
}

export function VapourText({
  text,
  className = '',
  as: Tag = 'h1',
  delay = 0,
  staggerDelay = 0.03,
  once = true
}: VapourTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-50px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const words = text.split(' ');

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      }
    }
  };

  const charVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(12px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }
    }
  };

  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        aria-label={text}
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <Tag className={className} style={{ display: 'contents' }}>
          {words.map((word, wordIndex) => (
            <span key={wordIndex} style={{ display: 'inline-flex', marginRight: '0.3em' }}>
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={`${wordIndex}-${charIndex}`}
                  variants={charVariants}
                  style={{
                    display: 'inline-block',
                    willChange: 'transform, opacity, filter',
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </Tag>
      </motion.div>
    </div>
  );
}
