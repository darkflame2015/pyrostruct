'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { VapourText } from '@/components/ui/vapour-text';
import { PricingCard } from '@/components/ui/pricing-card';
import styles from './page.module.css';

const currencies = [
  { code: 'INR', symbol: '₹', rate: 1, label: 'INR' },
  { code: 'USD', symbol: '$', rate: 1 / 83.5, label: 'US Dollar' },
  { code: 'EUR', symbol: '€', rate: 1 / 90.5, label: 'Euro' },
  { code: 'CAD', symbol: 'CA$', rate: 1 / 61.2, label: 'Canadian Dollar' },
];

const pricingTiers = [
  {
    tier: 'Starter',
    basePrice: 12000,
    period: '/project',
    description: 'Perfect for small businesses and personal portfolios needing a clean, professional online presence.',
    features: [
      { text: '1-2 pages vanilla stack', included: true },
      { text: 'Basic portfolio website', included: true },
      { text: 'Free .in domain included', included: true },
      { text: 'Mobile-first responsive design', included: true },
      { text: 'Contact form integration', included: true },
      { text: 'Custom mail & chatbot', included: false },
      { text: 'Premium animations', included: false },
      { text: 'E-commerce features', included: false },
    ],
  },
  {
    tier: 'Professional',
    basePrice: 19000,
    period: '/project',
    description: 'For growing brands that need a powerful, multi-page digital platform with better features.',
    features: [
      { text: 'Up to 5 page website', included: true },
      { text: 'Free .com domain support', included: true },
      { text: 'Own custom professional email', included: true },
      { text: 'Enhanced UI/UX features', included: true },
      { text: 'Advanced SEO setup', included: true },
      { text: 'Basic CMS integration', included: true },
      { text: 'Premium animations', included: false },
      { text: 'E-commerce features', included: false },
    ],
  },
  {
    tier: 'Premium',
    basePrice: 25000,
    period: '/project',
    description: 'High-quality site with premium animations, chatbot, and basic e-commerce capabilities.',
    popular: true,
    features: [
      { text: 'Quality site with premium animations', included: true },
      { text: 'AI Chatbot support included', included: true },
      { text: 'Basic E-commerce integration', included: true },
      { text: 'Free .com domain & custom mail', included: true },
      { text: 'Advanced CMS & Analytics', included: true },
      { text: 'Payment gateway setup', included: true },
      { text: 'Priority maintenance (3 months)', included: true },
      { text: 'Custom enterprise architecture', included: false },
    ],
  },
  {
    tier: 'Enterprise',
    basePrice: 45000,
    period: '+',
    description: 'Enterprise-grade architecture with custom add-ons for large businesses. Contact for precise pricing.',
    features: [
      { text: 'Enterprise-grade architecture', included: true },
      { text: 'Custom requirement add-ons', included: true },
      { text: 'Full-stack SaaS capabilities', included: true },
      { text: 'Dedicated server & cloud hosting', included: true },
      { text: 'Advanced security & compliance', included: true },
      { text: 'Unlimited pages & revisions', included: true },
      { text: 'Dedicated project manager', included: true },
      { text: '24/7 Priority support', included: true },
    ],
  },
];

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Starter projects typically take 1-2 weeks, Professional projects 3-5 weeks, Premium 4-8 weeks, and Enterprise projects 8-16+ weeks depending on complexity. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We work with modern frameworks including Next.js, React, TypeScript, GSAP for animations, Node.js, and various cloud platforms. Our tech stack is chosen based on your project\'s specific needs for optimal performance.',
  },
  {
    question: 'Do you offer ongoing maintenance?',
    answer: 'Yes! We offer maintenance plans starting at ₹5000/month that include security updates, performance monitoring, content updates, and priority bug fixes. This can be discussed after project delivery.',
  },
  {
    question: 'What\'s your payment structure?',
    answer: 'We typically work with a 50% upfront deposit and 50% upon project completion. For Enterprise projects, we can arrange milestone-based payments. We accept bank transfers and major international payment gateways.',
  },
  {
    question: 'Can I see examples of your work?',
    answer: 'Absolutely. Please check out our Services page for interactive previews of our recent projects, or contact us during our initial call for more relevant case studies.',
  },
  {
    question: 'What if I need changes after the project is delivered?',
    answer: 'Each plan includes revision rounds. Additional changes beyond the included rounds are billed at a competitive hourly rate. We also offer retainer agreements for ongoing collaboration.',
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCurrencyIndex, setActiveCurrencyIndex] = useState(0);

  // Clean up body overflow if user leaves the page or uses the back button while Razorpay is open
  useEffect(() => {
    const handlePopState = () => {
      document.body.style.overflow = 'auto';
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const activeCurrency = currencies[activeCurrencyIndex];
  


  const formatPrice = (basePrice: number) => {
    const converted = basePrice * activeCurrency.rate;
    // Format with commas, no decimals for large numbers
    return `${activeCurrency.symbol}${converted.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
  };

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">Pricing</span>
          </motion.div>
          <VapourText
            text="Exclusive Plans for Elite Brands"
            as="h1"
            delay={0.2}
            staggerDelay={0.02}
          />
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Invest in digital infrastructure that commands absolute market authority. From elegant foundations to custom enterprise architectures, our solutions are engineered for unparalleled performance.
          </motion.p>
          
          <motion.div 
            className={styles.currencyToggle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            {currencies.map((currency, idx) => (
              <button
                key={currency.code}
                className={`${styles.currencyBtn} ${idx === activeCurrencyIndex ? styles.currencyActive : ''}`}
                onClick={() => setActiveCurrencyIndex(idx)}
              >
                {currency.code}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className={styles.pricingGrid}>
        <div className="container">
          <div className="grid-4">
            {pricingTiers.map((tier, i) => {
              const isEnterprise = tier.tier === 'Enterprise';
              return (
              <div 
                key={tier.tier}
                style={{
                  height: '100%',
                }}
              >
                <PricingCard 
                  tier={tier.tier}
                  price={formatPrice(tier.basePrice)}
                  period={tier.period}
                  description={tier.description}
                  features={tier.features}
                  popular={tier.popular}
                  index={i}
                  ctaText={isEnterprise ? 'Contact Us' : 'Deploy Project'}
                  useRazorpayButton={!isEnterprise}
                />
              </div>
              )
            })}
          </div>

          <motion.p
            className={styles.pricingNote}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            All prices are starting points based on live approximate exchange rates. Final pricing depends on project scope and precise requirements.
            <br />
            <Link href="/contact" className="glass-button">
              Get a Custom Quote
            </Link>
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '60px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">FAQ</span>
            <VapourText text="Common Questions" as="h2" className="section-title" />
          </motion.div>

          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ''}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={styles.faqChevron}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      className={styles.faqAnswer}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container" style={{ textAlign: 'center' }}>
          <VapourText text="Let's Discuss Your Project" as="h2" className="section-title" />
          <p style={{ color: 'var(--fg-muted)', maxWidth: '500px', margin: '16px auto 32px' }}>
            Not sure which plan is right for you? Let&apos;s chat and find the perfect fit for your needs.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get in Touch
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
