import React from 'react';

interface VapourTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  delay?: number; // Kept for prop compatibility
  staggerDelay?: number; // Kept for prop compatibility
  once?: boolean; // Kept for prop compatibility
}

export function VapourText({
  text,
  className = '',
  as: Tag = 'h1',
}: VapourTextProps) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <div
        aria-label={text}
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <Tag className={className} style={{ display: 'contents' }}>
          {text}
        </Tag>
      </div>
    </div>
  );
}
