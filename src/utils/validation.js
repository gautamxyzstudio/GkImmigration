const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\d{10}$/;

export function validateInquiry(values) {
  const errors = {};

  if (!values.name?.trim()) {
    errors.name = 'Enter your full name.';
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  if (!values.phone?.trim()) {
    errors.phone = 'Enter your phone number.';
  } else if (!phonePattern.test(values.phone.trim())) {
    errors.phone = 'Enter a valid 10-digit phone number.';
  }

  if (values.email && !emailPattern.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  if (!values.service?.trim()) {
    errors.service = 'Choose a service.';
  }

  if (values.service === 'Visa Services' && !values.visaType?.trim()) {
    errors.visaType = 'Select the type of visa you need.';
  }

  if (values.message && values.message.trim().length > 500) {
    errors.message = 'Message must be under 500 characters.';
  }

  return errors;
}

export function hasErrors(errors) {
  return Object.keys(errors).length > 0;
}
