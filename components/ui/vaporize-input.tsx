'use client';

import React, { useRef, useState, useEffect } from 'react';
import { HoverVaporizeText } from './hover-vaporize-text';

interface VaporizeInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  multiline?: boolean;
  label?: string;
  isSent?: boolean;
  rows?: number;
}

export function VaporizeInput({ multiline, label, isSent = false, ...props }: VaporizeInputProps) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  
  const shouldVaporize = focused || hasValue || isSent;

  useEffect(() => {
    if (props.value) {
      setHasValue(String(props.value).length > 0);
    } else {
      setHasValue(false);
    }
  }, [props.value]);

  return (
    <div style={{ position: 'relative', width: '100%', marginBottom: '24px' }}>
      {label && <label className="input-label" htmlFor={props.id}>{label}</label>}
      
      <div style={{ position: 'relative' }}>
        {/* Actual Input */}
        {multiline ? (
          <textarea
            {...(props as any)}
            className="input"
            onFocus={(e) => { setFocused(true); props.onFocus?.(e as any); }}
            onBlur={(e) => { setFocused(false); props.onBlur?.(e as any); }}
            placeholder=""
          />
        ) : (
          <input
            {...(props as any)}
            className="input"
            onFocus={(e) => { setFocused(true); props.onFocus?.(e as any); }}
            onBlur={(e) => { setFocused(false); props.onBlur?.(e as any); }}
            placeholder=""
          />
        )}

        {/* Canvas Vaporize Placeholder */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          padding: multiline ? '12px 16px' : '0 16px',
          display: 'flex',
          alignItems: multiline ? 'flex-start' : 'center',
          pointerEvents: 'none',
          zIndex: 10,
        }}>
          <HoverVaporizeText
            text={props.placeholder || ''}
            isHovered={shouldVaporize}
            font={{ fontFamily: 'var(--font-body)', fontSize: '14.5px' }}
            color="rgba(161, 161, 170, 0.8)"
            alignment="left"
          />
        </div>
      </div>
    </div>
  );
}
