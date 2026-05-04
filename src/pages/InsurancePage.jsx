import { Link } from 'react-router-dom';
import {
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
} from 'lucide-react';
import { Reveal } from '../components/Reveal.jsx';
import { Seo } from '../components/Seo.jsx';
import { HERO_IMAGES, OFFICE } from '../utils/constants.js';

const insuranceBenefits = [
  { icon: BriefcaseMedical, title: 'Medical Emergencies', body: 'Comprehensive coverage for hospitalization and medical costs abroad.' },
  { icon: CalendarX2, title: 'Trip Cancellations', body: 'Reimbursement for non-refundable expenses if your trip is cut short.' },
  { icon: Luggage, title: 'Lost Baggage', body: 'Compensation for your belongings if they are lost, stolen, or damaged.' },
  { icon: Clock, title: 'Flight Delays', body: 'Stay covered for accommodation and meals during long transit delays.' },
];

const planRows = [
  ['Medical Coverage', '$50,000', '$250,000', '$500,000+'],
  ['Trip Cancellation', 'Up to $1,000', 'Up to $5,000', 'Full Trip Value'],
  ['Baggage Loss', '$500', '$1,500', '$3,000'],
  ['Dental Cover', 'Emergency Only', '$500', '$1,000'],
  ['Price Range', 'Starts ₹499', 'Starts ₹1,299', 'Starts ₹2,499'],
];

const blueBenefits = [
  { icon: BadgeDollarSign, title: 'Cashless Treatment', body: 'Over 10,000+ network hospitals globally for cashless claims.' },
  { icon: Headphones, title: '24/7 Global Help', body: 'Dedicated international helpdesk available at any time, anywhere.' },
  { icon: CircleDollarSign, title: 'Affordable Premium', body: 'Maximum coverage with the lowest premiums in the industry.' },
  { icon: Stethoscope, title: 'COVID-19 Protection', body: 'Inclusive plans covering medical and quarantine expenses.' },
];

const steps = [
  ['1', 'Fill Details', 'Enter your destination and travel dates.'],
  ['2', 'Get Options', 'Compare best plans from top providers.'],
  ['3', 'Choose & Confirm', 'Select the plan that fits your needs.'],
  ['4', 'Receive Policy', 'Get your policy instantly via email.'],
];

const faqs = [
  ['Is travel insurance mandatory for my visa?', 'Yes, for many destinations like Schengen countries, travel insurance with a minimum €30,000 coverage is mandatory for visa approval.'],
  ['What does the medical coverage include?', 'It typically includes inpatient or outpatient treatment, emergency medical evacuation, and repatriation of remains.'],
  ['How much does a typical plan cost?', 'Costs depend on age, duration, and destination. Basic plans start as low as ₹49 per day for certain domestic journeys.'],
  ['Can I buy insurance at the last minute?', 'Absolutely. You can purchase insurance and receive your policy via email even minutes before check in.'],
];

export function InsurancePage() {
  return (
    <>
      <Seo title="Travel Insurance | GK Immigration" description="Compare travel insurance coverage for domestic and international journeys." />

      <section className="insurance-hero relative flex min-h-[600px] items-center overflow-hidden">
        <img
          src={HERO_IMAGES.insurance}
          alt="Airplane wing above clouds at sunset representing protected travel"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/30" />
        <div className="container-shell relative z-10 py-16 text-white lg:py-24">
          <Reveal className="max-w-2xl">
            <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-display-xl">
              Secure Your Journey with Travel Insurance
            </h1>
            <p className="mt-5 max-w-xl text-body-lg text-blue-100/90">
              Affordable plans for domestic and international travel. Do not let unforeseen medical or travel hiccups disrupt your peace of mind.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#insurance-form" className="cta-button px-8 py-4">Get Free Quote</a>
              <a href={OFFICE.whatsappUrl} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-8 py-4 font-heading font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#128C7E]">
                <MessageCircle size={18} aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
            <div className="mt-8 flex items-center gap-5">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((item) => <span key={item} className="h-10 w-10 rounded-full border-2 border-white bg-primary-fixed-dim insurance-pulse" />)}
              </div>
              <span className="font-body text-label-md text-white/80">Trusted by 10,000+ Travelers Worldwide</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-shell">
          <Reveal className="mb-10 text-center">
            <h2 className="font-heading text-headline-lg text-primary">Why Travel Insurance?</h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-secondary-container" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {insuranceBenefits.map(({ icon: Icon, title, body }, index) => (
              <Reveal key={title} delay={index * 80}>
                <article className="insurance-card group rounded-xl border border-outline-variant bg-surface p-8 text-center transition hover:-translate-y-2 hover:shadow-lg">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary-container/10 text-primary-container transition group-hover:bg-primary group-hover:text-white">
                    <Icon size={28} aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-heading text-headline-sm text-primary">{title}</h3>
                  <p className="text-body-sm text-on-surface-variant">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-outline-variant bg-surface-container-low py-10">
        <div className="container-shell">
          <h3 className="mb-8 text-center font-body text-label-sm uppercase tracking-widest text-on-surface-variant">Partnering with the world&apos;s most trusted providers</h3>
          <div className="grid grid-cols-2 gap-5 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 md:grid-cols-5">
            {['TATA AIG', 'ICICI LOMBARD', 'HDFC ERGO', 'BAJAJ ALLIANZ', 'RELIANCE'].map((provider) => (
              <div key={provider} className="mx-auto flex h-12 w-32 items-center justify-center rounded bg-slate-300 px-3 font-heading text-xs font-bold text-slate-600 transition hover:-translate-y-1">
                {provider}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-shell">
          <Reveal className="mb-10 text-center">
            <h2 className="font-heading text-headline-lg text-primary">Compare Our Top Plans</h2>
            <p className="mt-2 text-on-surface-variant">Find the perfect balance of coverage and value</p>
          </Reveal>
          <Reveal className="overflow-x-auto rounded-xl border border-outline-variant bg-white shadow-xl">
            <table className="w-full min-w-[800px] text-left">
              <thead className="bg-primary text-white">
                <tr>
                  {['Features', 'Economy Plan', 'Popular Choice', 'Premium Gold'].map((head, index) => (
                    <th key={head} className={`p-6 font-heading text-headline-sm ${index === 2 ? 'bg-secondary-container' : ''}`}>{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {planRows.map((row) => (
                  <tr key={row[0]} className="transition hover:bg-surface">
                    {row.map((cell, index) => (
                      <td key={`${row[0]}-${cell}`} className={`p-6 ${index === 0 ? 'font-semibold text-primary' : ''} ${index === 2 ? 'bg-secondary-container/5' : ''} ${row[0] === 'Price Range' ? 'font-bold text-primary' : ''}`}>
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
            <h2 className="font-heading text-headline-lg">Why Choose GK Immigration Insurance?</h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {blueBenefits.map(({ icon: Icon, title, body }, index) => (
              <Reveal key={title} delay={index * 80}>
                <article className="flex items-start gap-4">
                  <Icon className="mt-1 shrink-0 text-secondary-container" size={34} aria-hidden="true" />
                  <div>
                    <h3 className="mb-1 font-heading text-headline-sm">{title}</h3>
                    <p className="text-body-sm text-blue-100/80">{body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-16 lg:py-20">
        <div className="container-shell">
          <Reveal className="mb-12 text-center">
            <h2 className="font-heading text-headline-lg text-primary">Get Insured in 4 Simple Steps</h2>
          </Reveal>
          <div className="relative grid gap-8 lg:grid-cols-4">
            <div className="absolute left-0 top-8 hidden h-0.5 w-full bg-surface-variant lg:block" />
            {steps.map(([number, title, body], index) => (
              <Reveal key={title} delay={index * 90}>
                <article className="relative z-10 bg-white text-center">
                  <div className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full font-heading text-xl font-bold text-white shadow-lg ${index === 3 ? 'bg-secondary-container' : 'bg-primary'}`}>
                    {number}
                  </div>
                  <h3 className="mb-1 font-heading text-headline-sm text-primary">{title}</h3>
                  <p className="px-4 text-body-sm text-on-surface-variant">{body}</p>
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
              <HeartPulse className="mb-5 text-secondary-container" size={40} aria-hidden="true" />
              <h2 className="font-heading text-4xl font-bold leading-tight lg:text-display-xl">Ready to fly safe?</h2>
              <p className="mt-4 text-body-lg text-blue-100">
                Fill out the form and our insurance experts will curate the best quotes for your specific journey.
              </p>
              <ul className="mt-8 space-y-4">
                {['Instant Digital Copy', 'Visa Compliant Policies', 'Zero Paperwork'].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-heading font-semibold">
                    <CheckCircle2 className="text-secondary-container" size={20} />
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
            <h2 className="font-heading text-headline-lg text-primary">Frequently Asked Questions</h2>
          </Reveal>
          <div className="space-y-5">
            {faqs.map(([question, answer], index) => (
              <Reveal key={question} delay={index * 70}>
                <details className="group border-b border-outline-variant pb-5" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-headline-sm text-primary">
                    {question}
                    <ChevronDown className="shrink-0 transition group-open:rotate-180" size={20} aria-hidden="true" />
                  </summary>
                  <p className="mt-3 text-body-md text-on-surface-variant">{answer}</p>
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
                <h2 className="font-heading text-4xl font-bold leading-tight lg:text-display-xl">Do Not Leave Safety to Chance</h2>
                <p className="mt-4 text-body-lg text-blue-100/90">Join thousands of travelers who trust GK Immigration for their safety abroad.</p>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link to="/contact" className="cta-button px-8 py-4">Get Quick Quote</Link>
                  <a href={OFFICE.whatsappUrl} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-8 py-4 font-heading font-semibold text-white transition hover:scale-105">
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
  return (
    <form className="grid gap-5 p-8 lg:w-1/2 lg:p-12">
      <div className="grid gap-5 md:grid-cols-2">
        <FormInput label="Full Name" placeholder="John Doe" />
        <FormInput label="Phone Number" placeholder="+91 98765 43210" type="tel" />
      </div>
      <FormInput label="Email Address" placeholder="john@example.com" type="email" />
      <label>
        <span className="mb-2 block font-body text-label-md text-on-surface">Travel Destination</span>
        <select className="h-12 w-full rounded-lg border border-outline-variant bg-white px-4 text-on-surface transition focus:border-primary focus:ring-2 focus:ring-primary/10">
          <option>Select Country</option>
          <option>United States</option>
          <option>United Kingdom</option>
          <option>Canada</option>
          <option>Europe (Schengen)</option>
          <option>Australia</option>
        </select>
      </label>
      <div className="grid gap-5 md:grid-cols-2">
        <FormInput label="Start Date" type="date" />
        <FormInput label="End Date" type="date" />
      </div>
      <button type="button" className="cta-button w-full py-4">
        Get Insurance Quote
      </button>
    </form>
  );
}

function FormInput({ label, type = 'text', placeholder = '' }) {
  return (
    <label>
      <span className="mb-2 block font-body text-label-md text-on-surface">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-12 w-full rounded-lg border border-outline-variant px-4 text-on-surface transition focus:border-primary focus:ring-2 focus:ring-primary/10"
      />
    </label>
  );
}
