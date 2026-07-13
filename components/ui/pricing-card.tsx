'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HoverVaporizeText } from './hover-vaporize-text';
import styles from './pricing-card.module.css';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  tier: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  index?: number;
}

export function PricingCard({
  tier,
  price,
  period = '/project',
  description,
  features,
  popular = false,
  ctaText = 'Commission Project',
  ctaHref = '/contact',
  onCtaClick,
  index = 0
}: PricingCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 1000); // 1 sec delay
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsHovered(false);
  };

  return (
    <motion.div
      className={`${styles.card} ${popular ? styles.popular : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {popular && (
        <div className={styles.badge}>Most Popular</div>
      )}

      <div className={styles.header}>
        <h3 className={styles.tier}>{tier}</h3>
        <p className={styles.desc}>{description}</p>
      </div>

      <div className={styles.priceWrap}>
        <span className={styles.price}>{price}</span>
        <span className={styles.period}>{period}</span>
      </div>

      <ul className={styles.features}>
        {features.map((feature, i) => (
          <li key={i} className={`${styles.feature} ${!feature.included ? styles.excluded : ''}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              {feature.included ? (
                <polyline points="20 6 9 17 4 12" />
              ) : (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              )}
            </svg>
            <div style={{ flexGrow: 1, position: 'relative' }}>
              {feature.included ? (
                <span>{feature.text}</span>
              ) : (
                <HoverVaporizeText 
                  text={feature.text} 
                  isHovered={isHovered} 
                  font={{ fontFamily: 'var(--font-body)', fontSize: '15px' }}
                  color="rgba(161, 161, 170, 0.6)"
                />
              )}
            </div>
          </li>
        ))}
      </ul>

      {onCtaClick ? (
        <button
          onClick={onCtaClick}
          className={`${styles.cta} ${popular ? styles.ctaPrimary : ''}`}
          style={{ width: '100%', cursor: 'pointer', appearance: 'none' }}
        >
          {ctaText}
        </button>
      ) : (
        <Link
          href={ctaHref}
          className={`${styles.cta} ${popular ? styles.ctaPrimary : ''}`}
        >
          {ctaText}
        </Link>
      )}
    </motion.div>
  );
}
