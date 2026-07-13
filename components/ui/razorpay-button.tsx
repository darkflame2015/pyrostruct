'use client';
import React, { useEffect, useRef } from 'react';

export function RazorpayButton() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Only append the script if the form is empty to prevent duplicates on re-renders
    if (formRef.current && formRef.current.children.length === 0) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      script.async = true;
      script.setAttribute('data-payment_button_id', 'pl_TD3m3JeJjiXEnR');
      formRef.current.appendChild(script);
    }
  }, []);

  return <form ref={formRef} style={{ margin: 0, padding: 0, display: 'flex', justifyContent: 'center', width: '100%' }}></form>;
}
