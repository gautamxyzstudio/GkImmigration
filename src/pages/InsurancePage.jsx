import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeDollarSign,
  BriefcaseMedical,
  CalendarX2,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Clock,
  Headphones,
  HeartPulse,
  Luggage,
  MessageCircle,
  Stethoscope,
} from "lucide-react";
import { Reveal } from "../components/Reveal.jsx";
import { Seo } from "../components/Seo.jsx";
import { useFormSubmission } from "../hooks/useFormSubmission.js";
import { useModal } from "../context/ModalContext.jsx";
import { HERO_IMAGES, OFFICE } from "../utils/constants.js";
import { validateInquiry } from "../utils/validation.js";
import { Link } from "react-router-dom";

const SLIDER_IMAGES = [
  {
    src: HERO_IMAGES.insurance,
    alt: "Airplane wing above clouds at sunset representing protected travel",
  },
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2200",
    alt: "Commercial airplane taking off at sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=2200",
    alt: "Traveler with backpack exploring scenic mountain views",
  },
  {
    src: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=2200",
    alt: "Passports, tickets and camera ready for international travel",
  },
];

const insuranceBenefits = [
  {
    icon: BriefcaseMedical,
    title: "Medical Emergencies",
    body: "Comprehensive coverage for hospitalization and medical costs abroad.",
  },
  {
    icon: CalendarX2,
    title: "Trip Cancellations",
    body: "Reimbursement for non-refundable expenses if your trip is cut short.",
  },
  {
    icon: Luggage,
    title: "Lost Baggage",
    body: "Compensation for your belongings if they are lost, stolen, or damaged.",
  },
  {
    icon: Clock,
    title: "Flight Delays",
    body: "Stay covered for accommodation and meals during long transit delays.",
  },
];

const planRows = [
  ["Medical Coverage", "$50,000", "$250,000", "$500,000+"],
  ["Trip Cancellation", "Up to $1,000", "Up to $5,000", "Full Trip Value"],
  ["Baggage Loss", "$500", "$1,500", "$3,000"],
  ["Dental Cover", "Emergency Only", "$500", "$1,000"],
  ["Price Range", "Starts ₹499", "Starts ₹1,299", "Starts ₹2,499"],
];

const blueBenefits = [
  {
    icon: BadgeDollarSign,
    title: "Cashless Treatment",
    body: "Over 10,000+ network hospitals globally for cashless claims.",
  },
  {
    icon: Headphones,
    title: "24/7 Global Help",
    body: "Dedicated international helpdesk available at any time, anywhere.",
  },
  {
    icon: CircleDollarSign,
    title: "Affordable Premium",
    body: "Maximum coverage with the lowest premiums in the industry.",
  },
  {
    icon: Stethoscope,
    title: "COVID-19 Protection",
    body: "Inclusive plans covering medical and quarantine expenses.",
  },
];

const steps = [
  ["1", "Fill Details", "Enter your destination and travel dates."],
  ["2", "Get Options", "Compare best plans from top providers."],
  ["3", "Choose & Confirm", "Select the plan that fits your needs."],
  ["4", "Receive Policy", "Get your policy instantly via email."],
];

const faqs = [
  [
    "Is travel insurance mandatory for my visa?",
    "Yes, for many destinations like Schengen countries, travel insurance with a minimum €30,000 coverage is mandatory for visa approval.",
  ],
  [
    "What does the medical coverage include?",
    "It typically includes inpatient or outpatient treatment, emergency medical evacuation, and repatriation of remains.",
  ],
  [
    "How much does a typical plan cost?",
    "Costs depend on age, duration, and destination. Basic plans start as low as ₹49 per day for certain domestic journeys.",
  ],
  [
    "Can I buy insurance at the last minute?",
    "Absolutely. You can purchase insurance and receive your policy via email even minutes before check in.",
  ],
];

const homeGalleryItems = [
  {
    title: "Dilteg Singh",
    subtitle: "Visa Approval Success",
    image: "/gallery/DiltegSingh.webp",
  },
  {
    title: "Manjit & Amarjit",
    subtitle: "Family Visa Granted",
    image: "/gallery/ManjitAmarjit.webp",
  },
  {
    title: "Gurpreet Singh",
    subtitle: "Study Visa Approved",
    image: "/gallery/Gurpreet.webp",
  },
  {
    title: "Kulwant Kaur",
    subtitle: "Visitor Visa Success",
    image: "/gallery/KulwantKaur.webp",
  },
];

export function InsurancePage() {
  const { openModal } = useModal();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <Seo
        title="Travel Insurance | GK Immigration"
        description="Compare travel insurance coverage for domestic and international journeys."
      />

      <section className="insurance-hero relative flex min-h-[600px] items-center overflow-hidden">
        {/* Auto Image Slider */}
        <div className="absolute inset-0 z-0">
          {SLIDER_IMAGES.map((img, index) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 scale-105"
                  : "opacity-0 scale-100"
              }`}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 right-6 z-20 flex gap-2">
          {SLIDER_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-secondary-container"
                  : "w-2.5 bg-white/50 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/30" />
        <div className="container-shell relative z-10 py-16 text-white lg:py-24">
          <Reveal className="max-w-2xl">
            <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-display-xl">
              Secure Your Journey with Travel Insurance
            </h1>
            <p className="mt-5 max-w-xl text-body-lg text-blue-100/90">
              Affordable plans for domestic and international travel. Do not let
              unforeseen medical or travel hiccups disrupt your peace of mind.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => openModal("Travel Insurance")}
                className="cta-button px-8 py-4"
              >
                Get Free Quote
              </button>
              <a
                href={OFFICE.whatsappUrl}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-8 py-4 font-heading font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#128C7E]"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
            <div className="mt-8 flex items-center gap-5">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((item) => (
                  <span
                    key={item}
                    className="h-10 w-10 rounded-full border-2 border-white bg-primary-fixed-dim insurance-pulse"
                  />
                ))}
              </div>
              <span className="font-body text-label-md text-white/80">
                Trusted by 10,000+ Travelers Worldwide
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-shell">
          <Reveal className="mb-10 text-center">
            <h2 className="font-heading text-headline-lg text-primary">
              Why Travel Insurance?
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-secondary-container" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {insuranceBenefits.map(({ icon: Icon, title, body }, index) => (
              <Reveal key={title} delay={index * 80}>
                <article className="insurance-card group rounded-xl border border-outline-variant bg-surface p-8 text-center transition hover:-translate-y-2 hover:shadow-lg">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary-container/10 text-primary-container transition group-hover:bg-primary group-hover:text-white">
                    <Icon size={28} aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-heading text-headline-sm text-primary">
                    {title}
                  </h3>
                  <p className="text-body-sm text-on-surface-variant">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-outline-variant bg-surface-container-low py-10">
        <div className="container-shell">
          <h3 className="mb-8 text-center font-body text-label-sm uppercase tracking-widest text-on-surface-variant">
            Partnering with the world&apos;s most trusted providers
          </h3>
          <div className="grid grid-cols-2 gap-5 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 md:grid-cols-5">
            {[
              "TATA AIG",
              "ICICI LOMBARD",
              "HDFC ERGO",
              "BAJAJ ALLIANZ",
              "RELIANCE",
            ].map((provider) => (
              <div
                key={provider}
                className="mx-auto flex h-12 w-32 items-center justify-center rounded bg-slate-300 px-3 font-heading text-xs font-bold text-slate-600 transition hover:-translate-y-1"
              >
                {provider}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-shell">
          <Reveal className="mb-10 text-center">
            <h2 className="font-heading text-headline-lg text-primary">
              Compare Our Top Plans
            </h2>
            <p className="mt-2 text-on-surface-variant">
              Find the perfect balance of coverage and value
            </p>
          </Reveal>
          <Reveal className="overflow-x-auto rounded-xl border border-outline-variant bg-white shadow-xl">
            <table className="w-full min-w-[800px] text-left">
              <thead className="bg-primary text-white">
                <tr>
                  {[
                    "Features",
                    "Economy Plan",
                    "Popular Choice",
                    "Premium Gold",
                  ].map((head, index) => (
                    <th
                      key={head}
                      className={`p-6 font-heading text-headline-sm ${index === 2 ? "bg-secondary-container" : ""}`}
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {planRows.map((row) => (
                  <tr key={row[0]} className="transition hover:bg-surface">
                    {row.map((cell, index) => (
                      <td
                        key={`${row[0]}-${cell}`}
                        className={`p-6 ${index === 0 ? "font-semibold text-primary" : ""} ${index === 2 ? "bg-secondary-container/5" : ""} ${row[0] === "Price Range" ? "font-bold text-primary" : ""}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section className="bg-primary-container py-16 text-white lg:py-20">
        <div className="container-shell">
          <Reveal className="mb-10 text-center">
            <h2 className="font-heading text-headline-lg">
              Why Choose GK Immigration Insurance?
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {blueBenefits.map(({ icon: Icon, title, body }, index) => (
              <Reveal key={title} delay={index * 80}>
                <article className="flex items-start gap-4">
                  <Icon
                    className="mt-1 shrink-0 text-secondary-container"
                    size={34}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="mb-1 font-heading text-headline-sm">
                      {title}
                    </h3>
                    <p className="text-body-sm text-blue-100/80">{body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="container-shell">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="font-heading text-headline-lg text-primary">
                Our Success Gallery
              </h2>
              <p className="mt-2 text-on-surface-variant">
                Real visa approvals and moments of trust from our clients at GK
                Immigration.
              </p>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 font-heading font-bold text-primary transition-colors hover:text-secondary-container"
            >
              View Full Gallery
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeGalleryItems.map((item) => (
              <Reveal key={item.title}>
                <Link
                  to="/gallery"
                  className="group relative block overflow-hidden rounded-2xl border border-outline-variant bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-900/10"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="absolute left-3 top-3 rounded-full bg-primary-container/90 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                      Visa Approval
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-title-md font-bold text-primary transition-colors group-hover:text-secondary-container">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-body-sm text-on-surface-variant">
                      {item.subtitle}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-16 lg:py-20">
        <div className="container-shell">
          <Reveal className="mb-12 text-center">
            <h2 className="font-heading text-headline-lg text-primary">
              Get Insured in 4 Simple Steps
            </h2>
          </Reveal>
          <div className="relative grid gap-8 lg:grid-cols-4">
            <div className="absolute left-0 top-8 hidden h-0.5 w-full bg-surface-variant lg:block" />
            {steps.map(([number, title, body], index) => (
              <Reveal key={title} delay={index * 90}>
                <article className="relative z-10 bg-white text-center">
                  <div
                    className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full font-heading text-xl font-bold text-white shadow-lg ${index === 3 ? "bg-secondary-container" : "bg-primary"}`}
                  >
                    {number}
                  </div>
                  <h3 className="mb-1 font-heading text-headline-sm text-primary">
                    {title}
                  </h3>
                  <p className="px-4 text-body-sm text-on-surface-variant">
                    {body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="insurance-form" className="bg-surface py-16 lg:py-24">
        <div className="container-shell">
          <Reveal className="overflow-hidden rounded-2xl border border-outline-variant bg-white shadow-2xl lg:flex">
            <div className="flex flex-col justify-center bg-primary-container p-8 text-white lg:w-1/2 lg:p-12">
              <HeartPulse
                className="mb-5 text-secondary-container"
                size={40}
                aria-hidden="true"
              />
              <h2 className="font-heading text-4xl font-bold leading-tight lg:text-display-xl">
                Ready to fly safe?
              </h2>
              <p className="mt-4 text-body-lg text-blue-100">
                Fill out the form and our insurance experts will curate the best
                quotes for your specific journey.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Instant Digital Copy",
                  "Visa Compliant Policies",
                  "Zero Paperwork",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-heading font-semibold"
                  >
                    <CheckCircle2
                      className="text-secondary-container"
                      size={20}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <InsuranceQuoteForm />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-shell max-w-4xl">
          <Reveal className="mb-10 text-center">
            <h2 className="font-heading text-headline-lg text-primary">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="space-y-5">
            {faqs.map(([question, answer], index) => (
              <Reveal key={question} delay={index * 70}>
                <details
                  className="group border-b border-outline-variant pb-5"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-headline-sm text-primary">
                    {question}
                    <ChevronDown
                      className="shrink-0 transition group-open:rotate-180"
                      size={20}
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="mt-3 text-body-md text-on-surface-variant">
                    {answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="container-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl p-8 text-center text-white md:p-12">
              <img
                src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=80&w=1800"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/80" />
              <div className="relative z-10 mx-auto max-w-2xl">
                <h2 className="font-heading text-4xl font-bold leading-tight lg:text-display-xl">
                  Do Not Leave Safety to Chance
                </h2>
                <p className="mt-4 text-body-lg text-blue-100/90">
                  Join thousands of travelers who trust GK Immigration for their
                  safety abroad.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => openModal("Travel Insurance")}
                    className="cta-button px-8 py-4"
                  >
                    Get Quick Quote
                  </button>
                  <a
                    href={OFFICE.whatsappUrl}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-8 py-4 font-heading font-semibold text-white transition hover:scale-105"
                  >
                    <MessageCircle size={18} aria-hidden="true" />
                    WhatsApp Expert
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InsuranceQuoteForm() {
  const {
    values,
    errors,
    status,
    statusMessage,
    isLoading,
    updateField,
    submitForm,
  } = useFormSubmission({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      service: "Travel Insurance",
      destination: "United States",
      startDate: "",
      endDate: "",
      message: "",
    },
    validate: validateInquiry,
    formType: "Travel Insurance Quote",
  });

  const handleSubmit = (e) => {
    const destination = values.destination || "Not specified";
    const dates =
      values.startDate && values.endDate
        ? `${values.startDate} to ${values.endDate}`
        : "Flexible";
    submitForm(e, {
      service: `Travel Insurance - ${destination}`,
      message: `Insurance Quote Request for ${destination}. Dates: ${dates}.`,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 p-8 lg:w-1/2 lg:p-12"
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <FormInput
          label="Full Name"
          name="name"
          placeholder="John Doe"
          value={values.name}
          error={errors.name}
          onChange={updateField}
          required
        />
        <FormInput
          label="Phone Number"
          name="phone"
          placeholder="+91 98765 43210"
          type="tel"
          value={values.phone}
          error={errors.phone}
          onChange={updateField}
          required
        />
      </div>
      <FormInput
        label="Email Address"
        name="email"
        placeholder="john@example.com"
        type="email"
        value={values.email}
        error={errors.email}
        onChange={updateField}
      />
      <label>
        <span className="mb-2 block font-body text-label-md text-on-surface">
          Travel Destination <span className="text-secondary-container">*</span>
        </span>
        <select
          name="destination"
          value={values.destination}
          onChange={updateField}
          className="h-12 w-full rounded-lg border border-outline-variant bg-white px-4 text-on-surface transition focus:border-primary focus:ring-2 focus:ring-primary/10"
        >
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Canada">Canada</option>
          <option value="Europe (Schengen)">Europe (Schengen)</option>
          <option value="Australia">Australia</option>
          <option value="Other / Global">Other / Global</option>
        </select>
      </label>
      <div className="grid gap-5 md:grid-cols-2">
        <FormInput
          label="Start Date"
          name="startDate"
          type="date"
          value={values.startDate}
          onChange={updateField}
        />
        <FormInput
          label="End Date"
          name="endDate"
          type="date"
          value={values.endDate}
          onChange={updateField}
        />
      </div>
      {statusMessage ? (
        <p
          className={`rounded-lg px-4 py-3 text-body-sm ${
            status === "success"
              ? "bg-primary-fixed text-primary font-semibold"
              : "bg-error-container text-on-error-container"
          }`}
        >
          {statusMessage}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={isLoading}
        className="cta-button w-full py-4 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isLoading ? "Sending Request..." : "Get Insurance Quote"}
      </button>
    </form>
  );
}

function FormInput({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  error,
  onChange,
  required = false,
}) {
  return (
    <label>
      <span className="mb-2 block font-body text-label-md text-on-surface">
        {label}{" "}
        {required ? <span className="text-secondary-container">*</span> : null}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="h-12 w-full rounded-lg border border-outline-variant px-4 text-on-surface transition focus:border-primary focus:ring-2 focus:ring-primary/10"
      />
      {error ? <p className="mt-2 text-body-sm text-error">{error}</p> : null}
    </label>
  );
}
