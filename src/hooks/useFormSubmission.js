import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../utils/constants.js';
import { hasErrors } from '../utils/validation.js';

export function useFormSubmission({ initialValues, validate, formType }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  async function submitForm(event, overrideValues = {}) {
    event.preventDefault();
    const finalValues = { ...values, ...overrideValues };
    const nextErrors = validate(finalValues);
    setErrors(nextErrors);
    setStatusMessage('');

    if (hasErrors(nextErrors)) {
      setStatus('idle');
      return;
    }

    setStatus('loading');

    try {
      const templateParams = {
        name: finalValues.name || '',
        phone: finalValues.phone || '',
        email: finalValues.email || '',
        service: finalValues.service || '',
        message: finalValues.message || '',
        formType: formType || 'General Inquiry',
        form_type: formType || 'General Inquiry',
        from_name: finalValues.name || '',
        from_email: finalValues.email || '',
        reply_to: finalValues.email || '',
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      setStatus('success');
      setStatusMessage('Thank you! Your inquiry has been sent successfully. Our team will contact you shortly.');
      setValues(initialValues);
    } catch (error) {
      console.error('EmailJS Form Submission Error:', error);
      setStatus('error');
      setStatusMessage('We could not send your request right now. Please call or WhatsApp us for immediate help.');
    }
  }

  return {
    values,
    errors,
    status,
    statusMessage,
    isLoading: status === 'loading',
    updateField,
    submitForm,
  };
}
