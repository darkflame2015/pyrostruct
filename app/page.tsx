import React from 'react';
import Link from 'next/link';
import { ShadowOverlay } from '@/components/ui/shadow-overlay';
import { VapourText } from '@/components/ui/vapour-text';

import { ServiceCard } from '@/components/ui/service-card';
import { GlobeContainer } from '@/components/ui/globe-container';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { ZoomParallax } from '@/components/ui/zoom-parallax';

import styles from './page.module.css';

import { TextReveal } from '@/components/ui/text-reveal';

/* ---- Service icons (inline SVG) ---- */
const WebIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const SaasIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

const DesignIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r="2.5" />
    <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z" />
    <path d="M2 17l5-5 4 4 4-4 7 7" />
  </svg>
);

const PerfIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

/* ---- Stats Data ---- */
const stats = [
  { value: 'Elite', label: 'Engineering Standards' },
  { value: 'Bespoke', label: 'Design Architecture' },
  { value: '100%', label: 'Exclusive Delivery' },
  { value: '24/7', label: 'Priority Support' },
];

/* ---- Testimonials ---- */
const testimonials = [
  {
    quote: "Working with Sagnik was an absolute game changer. He delivered a stunning website ahead of schedule with zero friction.",
    author: "Sayantan Sen",
    role: "Project Manager"
  },
  {
    quote: "Sagnik is a true professional. The UI is gorgeous, the performance is flawless, and his attention to detail is unmatched.",
    author: "James Cole",
    role: "Technical Lead"
  },
  {
    quote: "Sagnik delivered a highly sophisticated enterprise SaaS architecture with flawless precision. Happy with his provided service.",
    author: "David Park",
    role: "CEO, DataForge"
  },
];

export default function HomePage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className={styles.hero}>
        <ShadowOverlay
          color="rgba(60, 60, 60, 0.5)"
          animation={{ scale: 40, speed: 30 }}
          noise={{ opacity: 0.3, scale: 1 }}
          style={{ position: 'absolute', inset: 0 }}
        />



        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroTitle}>
            <VapourText
              text="We Engineer"
              as="h1"
              delay={0.3}
              staggerDelay={0.025}
            />
            <VapourText
              text="Digital Eminence"
              as="h1"
              delay={0.6}
              staggerDelay={0.025}
            />
          </div>

          <p className={styles.heroSubtitle}>
            Bespoke architecture for exclusive brands. We craft high-performance
            platforms designed to dominate markets and command absolute attention.
          </p>

          <div className={styles.heroCtas}>
            <Link href="/contact" className="btn btn-primary">
              Commission a Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link href="/services" className="btn btn-outline">
              Explore Our Work
            </Link>
          </div>
        </div>

        {/* Gradient fade at bottom */}
        <div className={styles.heroFade} />
      </section>

      {/* ========== SERVICES ========== */}
      <section id="services" className={`section ${styles.services}`}>
        <div className="container">
          <ScrollAnimation className={styles.sectionHeader}>
            <span className="section-label">Our Capabilities</span>
            <VapourText text="Architected for Dominance" as="h2" className="section-title" />
            <p className="section-subtitle">
              From visionary concepts to flawless deployment, we deliver exclusive digital infrastructure
              that propels elite brands forward.
            </p>
          </ScrollAnimation>

          <ZoomParallax
            items={[
              <div key="service-1" style={{ width: '100%', height: '100%' }}>
                <ServiceCard
                  icon={<WebIcon />}
                  title="Bespoke Web Development"
                  description="Visually striking, hyper-responsive platforms built on bleeding-edge frameworks. Every pixel optimized for unparalleled user engagement."
                  index={0}
                />
              </div>,
              <div key="service-2" style={{ width: '100%', height: '100%' }}>
                <ServiceCard
                  icon={<SaasIcon />}
                  title="Enterprise SaaS Architecture"
                  description="Complex data systems and secure scalable infrastructure. We engineer robust platforms capable of handling massive throughput with zero friction."
                  index={1}
                />
              </div>,
              <div key="service-3" style={{ width: '100%', height: '100%' }}>
                <ServiceCard
                  icon={<DesignIcon />}
                  title="Elite UI/UX Design"
                  description="Aesthetic supremacy meets cognitive design. We craft immersive interfaces that feel luxurious, intuitive, and highly addictive."
                  index={2}
                />
              </div>,
              <div key="service-4" style={{ width: '100%', height: '100%' }}>
                <ServiceCard
                  icon={<PerfIcon />}
                  title="Absolute Performance"
                  description="Lightning-fast rendering, flawlessly optimized core web vitals, and impenetrable security. We settle for nothing less than perfection."
                  index={3}
                />
              </div>
            ]}
          />
        </div>
      </section>

      {/* ========== ABOUT / WHY PYROSTRUCT ========== */}
      <section className={`section ${styles.about}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <ScrollAnimation
              className={styles.aboutContent}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="section-label">The PyroStruct Standard</span>
              <VapourText text="Precision Engineering Meets Premium Design" as="h2" className="section-title" />

              <div style={{ margin: '32px 0 0', maxWidth: '600px' }}>
                <TextReveal>
                  We are not merely developers; we are architects of elite digital experiences. Every project we undertake is an exercise in uncompromising craftsmanship, blending bleeding-edge technology with an obsessive dedication to aesthetics. We construct products that do not just function—they mesmerize, inspire, and establish absolute market dominance.
                </TextReveal>
              </div>

              <div style={{ marginTop: '40px', maxWidth: '400px', width: '100%', alignSelf: 'center' }}>
                <GlobeContainer />
              </div>
            </ScrollAnimation>

            <div className={styles.statsGrid}>
              {stats.map((stat, i) => (
                <ScrollAnimation
                  key={stat.label}
                  className={styles.statCard}
                  delay={i * 0.1}
                >
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className={`section ${styles.testimonials}`}>
        <div className="container">
          <ScrollAnimation className={styles.sectionHeader}>
            <span className="section-label">Testimonials</span>
            <VapourText text="Trusted by Ambitious Teams" as="h2" className="section-title" />
          </ScrollAnimation>

          <div className="grid-3" style={{ marginTop: '60px' }}>
            {testimonials.map((t, i) => (
              <ScrollAnimation
                key={t.author}
                className={styles.testimonialCard}
                y={30}
                delay={i * 0.12}
              >
                <svg className={styles.quoteIcon} width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
                  <path d="M11 7.5V16.5H5.5V12H3V7.5H11ZM21 7.5V16.5H15.5V12H13V7.5H21Z" />
                </svg>
                <p className={styles.quoteText}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.quoteAuthor}>
                  <div className={styles.authorAvatar}>
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className={styles.authorName}>{t.author}</p>
                    <p className={styles.authorRole}>{t.role}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <ScrollAnimation
            className={styles.ctaBanner}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <ShadowOverlay
              color="rgba(50, 50, 50, 0.4)"
              animation={{ scale: 25, speed: 20 }}
              noise={{ opacity: 0.2, scale: 1.2 }}
              style={{ position: 'absolute', inset: 0, borderRadius: 'var(--radius-xl)' }}
            />
            <div className={styles.ctaContent}>
              <VapourText text="Ready to Build Something Exceptional?" as="h2" className="section-title" />
              <p style={{ color: 'var(--fg-muted)', maxWidth: '500px', margin: '16px auto 0' }}>
                Let&apos;s turn your vision into a premium digital product. Get in touch and
                let&apos;s start building.
              </p>
              <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">
                  Start a Project
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <Link href="/pricing" className="btn btn-outline">
                  See Pricing
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
