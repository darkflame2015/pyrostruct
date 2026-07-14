'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TextRevealProps {
  children: string;
  className?: string;
  offset?: any; // e.g. ['start 0.9', 'end 0.2']
}

export function TextReveal({ children, className = '', offset = ['start 0.9', 'start 0.25'] }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset,
  });

  const words = children.split(' ');

  return (
    <div ref={containerRef} className={className}>
      <p
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          fontSize: 'inherit',
          fontFamily: 'inherit',
          fontWeight: 'inherit',
          lineHeight: 'inherit',
          letterSpacing: 'inherit',
        }}
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} range={[start, end]} progress={scrollYProgress}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
}

interface WordProps {
  children: string;
  range: [number, number];
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}

function Word({ children, range, progress }: WordProps) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(progress, range, [
    'rgba(232, 224, 212, 0.15)',
    'rgba(232, 224, 212, 1)',
  ]);

  return (
    <motion.span
      style={{
        opacity,
        color,
        marginRight: '0.3em',
        display: 'inline-block',
        transition: 'color 0.1s',
        willChange: 'opacity',
      }}
    >
      {children}
    </motion.span>
  );
}
