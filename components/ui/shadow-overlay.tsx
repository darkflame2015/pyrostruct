'use client';

import React, { useRef, useId, useEffect, CSSProperties } from 'react';
import { animate, useMotionValue, AnimationPlaybackControls } from 'framer-motion';
import { usePerformanceMode } from '@/hooks/use-performance-mode';

interface AnimationConfig {
    preview?: boolean;
    scale: number;
    speed: number;
}

interface NoiseConfig {
    opacity: number;
    scale: number;
}

interface ShadowOverlayProps {
    sizing?: 'fill' | 'stretch';
    color?: string;
    animation?: AnimationConfig;
    noise?: NoiseConfig;
    style?: CSSProperties;
    className?: string;
    children?: React.ReactNode;
}

function mapRange(
    value: number,
    fromLow: number,
    fromHigh: number,
    toLow: number,
    toHigh: number
): number {
    if (fromLow === fromHigh) {
        return toLow;
    }
    const percentage = (value - fromLow) / (fromHigh - fromLow);
    return toLow + percentage * (toHigh - toLow);
}

const useInstanceId = (): string => {
    const id = useId();
    const cleanId = id.replace(/:/g, "");
    return `shadowoverlay-${cleanId}`;
};

export function ShadowOverlay({
    sizing = 'fill',
    color = 'rgba(80, 80, 80, 0.6)',
    animation,
    noise,
    style,
    className,
    children
}: ShadowOverlayProps) {
    const id = useInstanceId();
    const isLowEnd = usePerformanceMode();
    const animationEnabled = animation && animation.scale > 0 && !isLowEnd;

    const displacementScale = animation ? mapRange(animation.scale, 1, 100, 20, 100) : 0;
    const animationDuration = animation ? mapRange(animation.speed, 1, 100, 1000, 50) : 1;
    // Calculate the duration in seconds for the SVG animate tag
    const smilDuration = `${animationDuration / 25}s`;

    return (
        <div
            className={className}
            style={{
                overflow: "hidden",
                position: "relative",
                width: "100%",
                height: "100%",
                ...style
            }}
        >
            {/* Animated shadow layer */}
            <div
                style={{
                    position: "absolute",
                    inset: -displacementScale,
                    filter: animationEnabled ? `url(#${id}) blur(4px)` : "none"
                }}
            >
                {animationEnabled && (
                    <svg style={{ position: "absolute", width: 0, height: 0 }}>
                        <defs>
                            <filter id={id}>
                                <feTurbulence
                                    result="undulation"
                                    numOctaves="2"
                                    baseFrequency={`${mapRange(animation.scale, 0, 100, 0.001, 0.0005)},${mapRange(animation.scale, 0, 100, 0.004, 0.002)}`}
                                    seed="0"
                                    type="turbulence"
                                />
                                <feColorMatrix
                                    in="undulation"
                                    type="hueRotate"
                                    values="0"
                                >
                                    <animate
                                        attributeName="values"
                                        from="0"
                                        to="360"
                                        dur={smilDuration}
                                        repeatCount="indefinite"
                                    />
                                </feColorMatrix>
                                <feColorMatrix
                                    in="dist"
                                    result="circulation"
                                    type="matrix"
                                    values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
                                />
                                <feDisplacementMap
                                    in="SourceGraphic"
                                    in2="circulation"
                                    scale={displacementScale}
                                    result="dist"
                                />
                                <feDisplacementMap
                                    in="dist"
                                    in2="undulation"
                                    scale={displacementScale}
                                    result="output"
                                />
                            </filter>
                        </defs>
                    </svg>
                )}
                <div
                    style={{
                        backgroundColor: color,
                        maskImage: `radial-gradient(ellipse at center, black 0%, transparent 80%)`,
                        WebkitMaskImage: `radial-gradient(ellipse at center, black 0%, transparent 80%)`,
                        width: "100%",
                        height: "100%"
                    }}
                />
            </div>

            {/* Content layer (children) */}
            {children && (
                <div
                    style={{
                        position: "relative",
                        zIndex: 10,
                        width: "100%",
                        height: "100%"
                    }}
                >
                    {children}
                </div>
            )}

            {/* Noise overlay */}
            {noise && noise.opacity > 0 && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundSize: `${noise.scale * 200}px`,
                        backgroundRepeat: "repeat",
                        opacity: noise.opacity,
                        pointerEvents: "none",
                        mixBlendMode: "overlay"
                    }}
                />
            )}
        </div>
    );
}
