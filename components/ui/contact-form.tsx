'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VaporizeInput } from './vaporize-input';
import styles from './contact-form.module.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      
      // Reset after a moment
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000); // Give time for vaporize to play before clearing
    } catch (err) {
      console.error(err);
      setErrorMsg('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      className={styles.form}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.row}>
        <div className={styles.field}>
          <VaporizeInput
            id="contact-name"
            name="name"
            type="text"
            label="Name"
            placeholder="e.g., Johnathan Doe"
            value={formData.name}
            onChange={handleChange}
            isSent={submitted}
            required
          />
        </div>
        <div className={styles.field}>
          <VaporizeInput
            id="contact-email"
            name="email"
            type="email"
            label="Email"
            placeholder="e.g., your.name@company-domain.com"
            value={formData.email}
            onChange={handleChange}
            isSent={submitted}
            required
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-subject" className="input-label">Subject</label>
        <div className={styles.selectWrapper}>
          <select
            id="contact-subject"
            name="subject"
            className={`input ${styles.selectInput}`}
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="" disabled style={{ color: '#000', background: '#fff' }}>Select a topic</option>
            <option value="Website Development" style={{ color: '#000', background: '#fff' }}>Website Development</option>
            <option value="SaaS Application" style={{ color: '#000', background: '#fff' }}>SaaS Application</option>
            <option value="UI/UX Design" style={{ color: '#000', background: '#fff' }}>UI/UX Design</option>
            <option value="Performance Audit" style={{ color: '#000', background: '#fff' }}>Performance Audit</option>
            <option value="General Inquiry" style={{ color: '#000', background: '#fff' }}>General Inquiry</option>
          </select>
          <svg className={styles.selectIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      <div className={styles.field}>
        <VaporizeInput
          id="contact-message"
          name="message"
          multiline
          label="Message"
          placeholder="Please describe your project, its goals, timeline, and any specific requirements you have..."
          value={formData.message}
          onChange={handleChange}
          isSent={submitted}
          required
          rows={5}
        />
      </div>

      {errorMsg && (
        <div style={{ color: '#ff4444', marginTop: '10px', fontSize: '0.9rem' }}>
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        className={`btn btn-primary ${styles.submitBtn}`}
        disabled={submitted || isSubmitting}
        style={{ marginTop: '16px' }}
      >
        {submitted ? (
          <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Transmission Sent
          </>
        ) : isSubmitting ? (
          <>
            Deploying...
          </>
        ) : (
          <>
            Deploy Message
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </>
        )}
      </button>
    </motion.form>
  );
}
