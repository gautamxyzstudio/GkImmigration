import PropTypes from "prop-types";
import { Send } from "lucide-react";
import { useFormSubmission } from "../hooks/useFormSubmission.js";
import { serviceTypes, visaTypes } from "../utils/constants.js";
import { validateInquiry } from "../utils/validation.js";

const baseValues = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export function InquiryForm({
  title = "Request a Free Consultation",
  compact = false,
  defaultService = "",
  formType = "general",
}) {
  const {
    values,
    errors,
    status,
    statusMessage,
    isLoading,
    updateField,
    submitForm,
  } = useFormSubmission({
    initialValues: { ...baseValues, service: defaultService },
    validate: validateInquiry,
    formType,
  });
  const options = formType === "visa" ? visaTypes : serviceTypes;

  return (
    <form
      onSubmit={submitForm}
      className={`space-y-5 ${compact ? "" : "rounded-xl bg-white p-6 shadow-premium lg:p-8"}`}
      noValidate
    >
      <h2
        className={`${compact ? "text-white" : "text-primary"} font-heading text-headline-md`}
      >
        {title}
      </h2>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField
          label="Full Name"
          name="name"
          value={values.name}
          error={errors.name}
          onChange={updateField}
          required
          formType={formType}
        />
        <FormField
          label="Phone Number"
          name="phone"
          type="tel"
          value={values.phone}
          error={errors.phone}
          onChange={updateField}
          required
          formType={formType}
        />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField
          label="Email Address"
          name="email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={updateField}
          formType={formType}
        />
        <div>
          <label
            className={`mb-2 block font-body text-label-md ${formType === "visa" ? "text-white" : "text-primary"}`}
            htmlFor={`${formType}-service`}
          >
            Service Type <span className="text-secondary-container">*</span>
          </label>
          <select
            id={`${formType}-service`}
            name="service"
            value={values.service}
            onChange={updateField}
            className="h-12 w-full rounded-lg border border-outline-variant bg-white px-4 text-on-surface transition focus:border-primary focus:ring-2 focus:ring-primary/10"
            required
          >
            <option value="">Choose a service</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p className="mt-2 text-body-sm text-error">{errors.service}</p>
          ) : null}
        </div>
      </div>
      <div>
        <label
          className={`mb-2 block font-body text-label-md ${formType === "visa" ? "text-white" : "text-primary"}`}
          htmlFor={`${formType}-message`}
        >
          Message
        </label>
        <textarea
          id={`${formType}-message`}
          name="message"
          rows="4"
          value={values.message}
          onChange={updateField}
          placeholder="Tell us about your travel plans or timeline."
          className="w-full resize-none rounded-lg border border-outline-variant px-4 py-3 text-on-surface transition focus:border-primary focus:ring-2 focus:ring-primary/10"
        />
        {errors.message ? (
          <p className="mt-2 text-body-sm text-error">{errors.message}</p>
        ) : null}
      </div>
      {statusMessage ? (
        <p
          className={`rounded-lg px-4 py-3 text-body-sm ${status === "success" ? "bg-primary-fixed text-primary" : "bg-error-container text-on-error-container"}`}
        >
          {statusMessage}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-secondary-container px-6 py-3 font-heading font-semibold text-white shadow-lg shadow-orange-900/10 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isLoading ? "Sending..." : "Get Free Consultation"}
        <Send size={18} aria-hidden="true" />
      </button>
    </form>
  );
}

function FormField({
  label,
  name,
  type = "text",
  value,
  error,
  onChange,
  required = false,
  formType,
}) {
  return (
    <div>
      <label
        className={`mb-2 block font-body text-label-md ${formType === "visa" ? "text-white" : "text-primary"}`}
        htmlFor={name}
      >
        {label}{" "}
        {required ? <span className="text-secondary-container">*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="h-12 w-full rounded-lg border border-outline-variant px-4 text-on-surface transition focus:border-primary focus:ring-2 focus:ring-primary/10"
      />
      {error ? <p className="mt-2 text-body-sm text-error">{error}</p> : null}
    </div>
  );
}

InquiryForm.propTypes = {
  title: PropTypes.string,
  compact: PropTypes.bool,
  defaultService: PropTypes.string,
  formType: PropTypes.string,
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  formType: PropTypes.string,
};
