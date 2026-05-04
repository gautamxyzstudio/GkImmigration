import { useState } from 'react';
import { CONTACT_ENDPOINT } from '../utils/constants.js';
import { hasErrors } from '../utils/validation.js';

export function useFormSubmission({ initialValues, validate, endpoint = CONTACT_ENDPOINT, formType }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  async function submitForm(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setStatusMessage('');

    if (hasErrors(nextErrors)) {
      setStatus('idle');
      return;
    }

    setStatus('loading');

    try {
      // TODO(project-owner): Connect /api/contact to a real backend, Formspree, or EmailJS account.
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, formType }),
      });

      if (!response.ok) {
        throw new Error('The request could not be completed.');
      }

      setStatus('success');
      setStatusMessage('Thank you. Our team will contact you shortly.');
      setValues(initialValues);
    } catch {
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
