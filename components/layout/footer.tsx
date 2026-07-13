'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TermsModal } from '@/components/ui/terms-modal';
import styles from './footer.module.css';

const footerLinks = {
  company: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/#services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ],
  services: [
    { href: '/contact', label: 'Web Development' },
    { href: '/contact', label: 'SaaS Applications' },
    { href: '/contact', label: 'UI/UX Design' },
    { href: '/contact', label: 'Performance Audit' },
  ],
};

export function Footer() {
  const [isTermsOpen, setIsTermsOpen] = React.useState(false);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <Image src="/1.png" alt="PyroStruct Logo" width={180} height={60} style={{ display: 'block', height: 'auto' }} />
            </Link>
            <p className={styles.brandDesc}>
              Crafting premium digital experiences that ignite growth. 
              We build websites and SaaS applications that stand out.
            </p>
          </div>

          {/* Company links */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linkList}>
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.linkList}>
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Get in Touch</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="mailto:sagnik@pyrostruct.in" className={styles.link}>
                  sagnik@pyrostruct.in
                </a>
              </li>
              <li>
                <a href="tel:+919080930713" className={styles.link}>
                  +91 9080930713
                </a>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>Book a Call</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} PyroStruct. All rights reserved. 
            <button 
              onClick={() => setIsTermsOpen(true)} 
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textDecoration: 'underline', marginLeft: '12px' }}
            >
              Terms & Conditions
            </button>
          </p>
          <div className={styles.socials}>
            {/* Twitter/X */}
            <a href="https://x.com/Sagnik22629298" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/sagnikdatta07" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            {/* GitHub */}
            <a href="https://github.com/darkflame2015" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/pyrostruct/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/sagnik.datta.731/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </footer>
  );
}
