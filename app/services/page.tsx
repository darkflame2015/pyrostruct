import React from 'react';
import { VapourText } from '@/components/ui/vapour-text';
import { TextReveal } from '@/components/ui/text-reveal';
import { GsapPortfolioCard } from '@/components/ui/gsap-portfolio-card';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

import { ZoomParallax } from '@/components/ui/zoom-parallax';
import { ShadowOverlay } from '@/components/ui/shadow-overlay';
import Link from 'next/link';
import styles from './page.module.css';

const portfolioProjects = [
  {
    title: 'Zexor',
    description: 'A modern sample e-commerce application showcasing premium UI themes, product grids, and interactive layouts.',
    link: 'https://zexor.vercel.app/',
  },
  {
    title: 'Parallel Sourcing',
    description: 'A bespoke B2B sourcing platform developed strictly to client specifications, emphasizing data-heavy interfaces.',
    link: 'https://parallelsourcing.in',
  },
  {
    title: 'RAS Website',
    description: 'A vibrant college society website featuring event listings, dynamic content updates, and highly engaging student-centric design.',
    link: 'https://ras-website-gamma.vercel.app/',
  },
  {
    title: 'Krishi AI Finance Tracker',
    description: 'A robust dual-dashboard financial tracking system integrating custom backends and databases for administrators and customers.',
    link: 'https://krishi-ai-finance-tracker.vercel.app/login',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <ShadowOverlay
          color="rgba(60, 60, 60, 0.4)"
          animation={{ scale: 30, speed: 25 }}
          noise={{ opacity: 0.3, scale: 1 }}
          style={{ position: 'absolute', inset: 0 }}
        />

        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroTitle}>
            <VapourText
              text="Elite Digital Portfolio"
              as="h1"
              delay={0.3}
              staggerDelay={0.025}
            />
          </div>

          <div className={styles.revealWrapper}>
            <TextReveal className={styles.revealText} offset={['start 0.9', 'end 0.4']}>
              We architect bespoke digital experiences tailored for exclusive brands. Our portfolio represents the pinnacle of high-performance e-commerce and complex enterprise-grade SaaS infrastructure. By fusing immaculate design with uncompromising engineering, we deliver absolute market dominance. Discover our exemplary work below.
            </TextReveal>
          </div>
        </div>

        <div className={styles.heroFade} />
      </section>

      {/* Portfolio Grid */}
      <section className={`section ${styles.portfolioSection}`}>
        <div className="container">
          <ScrollAnimation className={styles.sectionHeader}>
            <span className="section-label">Featured Work</span>
            <VapourText text="Exemplary Projects" as="h2" className="section-title" />
            <p className="section-subtitle">
              A curated selection of our most ambitious digital products. Hover over the cards to experience our custom interactive engineering.
            </p>
          </ScrollAnimation>

          <ZoomParallax
            items={portfolioProjects.map((project, i) => (
              <div key={project.title} style={{ width: '100%', height: '100%' }}>
                <GsapPortfolioCard
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  image={(project as any).image}
                  index={i}
                />
              </div>
            ))}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container" style={{ textAlign: 'center' }}>
          <VapourText text="Commission Your Masterpiece" as="h2" className="section-title" />
          <p style={{ color: 'var(--fg-muted)', maxWidth: '500px', margin: '16px auto 32px' }}>
            Ready to establish your brand's digital supremacy? Let's engineer something extraordinary together.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Start a Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
