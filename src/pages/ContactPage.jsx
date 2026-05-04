import { ChevronDown, Mail, MapPin, MessageCircle, Phone, Timer } from 'lucide-react';
import { ContactMap } from '../components/ContactMap.jsx';
import { HeroSection } from '../components/HeroSection.jsx';
import { InquiryForm } from '../components/InquiryForm.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { Seo } from '../components/Seo.jsx';
import { HERO_IMAGES, OFFICE } from '../utils/constants.js';

const faqs = [
  ['How long does it take for a response?', 'We aim to respond to all inquiries within 24 business hours. For urgent matters, please use WhatsApp or call us directly.'],
  ['What documents do I need for an initial consultation?', 'Bring your valid passport and any previous visa details if available. Our experts will guide the next checklist based on your destination.'],
  ['Are consultation sessions free?', 'Yes, we offer an initial free consultation to understand your requirements and evaluate your travel or visa options.'],
];

export function ContactPage() {
  return (
    <>
      <Seo title="Contact GK Immigration" description="Contact GK Immigration in Bhawanigarh for visas, tours, insurance, and travel planning." />
      <HeroSection
        title="Get in Touch with Us"
        eyebrow="Contact"
        description="We are here to help you plan your next journey with expert guidance and clear communication."
        image={HERO_IMAGES.contact}
        imageAlt="Modern professional office with large windows and a welcoming consultation area"
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href={OFFICE.whatsappUrl} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 font-heading text-lg font-bold text-white shadow-xl transition hover:scale-105">
            <MessageCircle size={22} aria-hidden="true" />
            Chat on WhatsApp
          </a>
          <a href={`tel:${OFFICE.phone}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary-container px-8 py-4 font-heading text-lg font-bold text-white shadow-xl transition hover:scale-105">
            <Phone size={22} aria-hidden="true" />
            Call Now
          </a>
        </div>
      </HeroSection>
      <section className="relative z-10 -mt-20 pb-16">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <InquiryForm title="Send Us a Message" formType="contact" />
          </Reveal>
          <aside className="space-y-5" aria-label="Contact details">
            <article className="premium-card p-6">
              <MapPin className="text-primary" size={28} aria-hidden="true" />
              <h2 className="mt-3 font-heading text-headline-sm text-primary">Our Office</h2>
              <p className="mt-2 text-on-surface-variant">{OFFICE.address}</p>
            </article>
            <div className="grid gap-5 sm:grid-cols-2">
              <article className="premium-card p-6">
                <Phone className="text-secondary-container" size={26} aria-hidden="true" />
                <h2 className="mt-3 font-heading text-headline-sm text-primary">Call Us</h2>
                <a href={`tel:${OFFICE.phone}`} className="mt-2 block text-on-surface-variant hover:text-primary">
                  {OFFICE.phone}
                </a>
              </article>
              <article className="premium-card p-6">
                <Mail className="text-secondary-container" size={26} aria-hidden="true" />
                <h2 className="mt-3 font-heading text-headline-sm text-primary">Email Us</h2>
                <a href={`mailto:${OFFICE.email}`} className="mt-2 block break-words text-on-surface-variant hover:text-primary">
                  {OFFICE.email}
                </a>
              </article>
            </div>
            <article className="rounded-xl bg-primary-container p-6 text-white shadow-premium">
              <Timer className="text-secondary-fixed" size={28} aria-hidden="true" />
              <h2 className="mt-3 font-heading text-headline-sm">Business Hours</h2>
              <p className="mt-2 text-blue-100">Monday to Saturday, 10 AM to 7 PM. Sunday closed.</p>
            </article>
          </aside>
        </div>
      </section>
      <section className="pb-16 lg:pb-24">
        <div className="container-shell">
          <ContactMap />
        </div>
      </section>
      <section className="pb-16 lg:pb-24">
        <div className="container-shell max-w-4xl">
          <div className="mb-10 text-center">
            <span className="mb-2 block text-label-md font-bold uppercase tracking-widest text-secondary">Common Questions</span>
            <h2 className="font-heading text-headline-lg text-primary">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(([question, answer], index) => (
              <details key={question} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-soft" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-headline-sm text-primary">
                  {question}
                  <ChevronDown className="shrink-0 transition group-open:rotate-180" size={20} aria-hidden="true" />
                </summary>
                <p className="mt-4 text-on-surface-variant">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
