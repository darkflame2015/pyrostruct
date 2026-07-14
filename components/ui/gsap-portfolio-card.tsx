'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import styles from './gsap-portfolio-card.module.css';

interface PortfolioCardProps {
  title: string;
  description: string;
  link: string;
  image?: string;
  index: number;
}

export function GsapPortfolioCard({ title, description, link, image, index }: PortfolioCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      gsap.to(blobRef.current, {
        x,
        y,
        duration: 0.8,
        ease: 'power3.out',
      });
    };

    const onMouseEnter = () => {
      gsap.to(card, {
        scale: 1.02,
        duration: 0.4,
        ease: 'power3.out',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
        borderColor: 'rgba(255, 255, 255, 0.3)'
      });
      gsap.to(titleRef.current, { color: '#ffffff', duration: 0.3 });
      gsap.to(blobRef.current, { opacity: 1, duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.4,
        ease: 'power3.out',
        boxShadow: '0 0px 0px rgba(0, 0, 0, 0)',
        borderColor: 'rgba(255, 255, 255, 0.08)'
      });
      gsap.to(titleRef.current, { color: 'var(--fg)', duration: 0.3 });
      gsap.to(blobRef.current, { opacity: 0, duration: 0.3 });
    };

    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mouseleave', onMouseLeave);

    return () => {
      card.removeEventListener('mousemove', onMouseMove);
      card.removeEventListener('mouseenter', onMouseEnter);
      card.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      ref={cardRef}
    >
      <div className="noiseOverlay" />
      
      {image && (
        <>
          <div className={styles.imagePreview}>
            <Image 
              src={image} 
              alt={`${title} Preview`} 
              fill 
              style={{ objectFit: 'cover', objectPosition: 'top center' }} 
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={80}
            />
          </div>
          <div className={styles.imageGradient} />
        </>
      )}

      <div 
        ref={blobRef} 
        className={styles.spotlightBlob}
      />
      <div className={styles.content}>
        <h3 className={styles.title} ref={titleRef}>{title}</h3>
        <p className={styles.description} ref={descRef}>{description}</p>
        <div className={styles.visitLink}>
          Visit Website
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
