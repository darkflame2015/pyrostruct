'use client';

import { motion } from 'framer-motion';
import { ShadowOverlay } from '@/components/ui/shadow-overlay';
import { TextReveal } from '@/components/ui/text-reveal';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <ShadowOverlay 
        color="rgba(80, 80, 80, 0.4)" 
        animation={{ scale: 25, speed: 20 }}
        noise={{ opacity: 0.25, scale: 1.5 }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <section className={styles.section}>
          <TextReveal className={styles.title}>
            I am Sagnik Datta,
          </TextReveal>
          <TextReveal className={styles.subtitle}>
            A Professional Web Developer.
          </TextReveal>
          
          <div className={styles.content}>
            <TextReveal className={styles.paragraph}>
              I am an undergrad student bridging fresh academic perspective with uncompromising professional rigor. I engineer bespoke digital experiences with a deep passion for the craft, guaranteeing unparalleled ongoing service and zero-friction updates.
            </TextReveal>
            
            <TextReveal className={styles.paragraph}>
              When you commission a project with PyroStruct, you aren't just getting a website. You are securing a long-term technical partnership built on trust, elite UI/UX design, and lightning-fast performance optimizations. I take pride in providing quality websites with love and proper service, ensuring your digital presence is always state-of-the-art.
            </TextReveal>
          </div>

          <motion.div 
            className={styles.contactInfo}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className={styles.contactHeader}>
              <h3 className={styles.contactTitle}>Let's Build Together</h3>
              <p className={styles.contactSubtitle}>Ready to engineer something exceptional? Reach out directly.</p>
            </div>
            
            <div className={styles.contactGrid}>
              <div>
                <a href="mailto:sagnik@pyrostruct.in" className={styles.contactDetail}>
                  <div className={styles.contactIconBox}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div className={styles.contactText}>
                    <h4>Direct Email</h4>
                    <p>sagnik@pyrostruct.in</p>
                  </div>
                </a>
                
                <a href="tel:+919080930713" className={styles.contactDetail}>
                  <div className={styles.contactIconBox}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div className={styles.contactText}>
                    <h4>Direct Phone</h4>
                    <p>+91 9080930713</p>
                  </div>
                </a>
              </div>
              
              <div className={styles.socialsContainer}>
                <h4>Connect Professionally</h4>
                <div className={styles.socials}>
                  <a href="https://www.linkedin.com/in/sagnikdatta07" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="https://x.com/Sagnik22629298" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                  <a href="https://www.instagram.com/pyrostruct/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="https://www.facebook.com/sagnik.datta.731/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
