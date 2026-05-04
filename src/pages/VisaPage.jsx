import { Clock, FileText, GraduationCap, Handshake, PlaneTakeoff, Users } from 'lucide-react';
import { HeroSection } from '../components/HeroSection.jsx';
import { InfoCard } from '../components/InfoCard.jsx';
import { InquiryForm } from '../components/InquiryForm.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { Seo } from '../components/Seo.jsx';
import { HERO_IMAGES } from '../utils/constants.js';

const categories = [
  { icon: PlaneTakeoff, title: 'Tourist Visa', body: 'Short-term travel support for holidays, leisure visits, and planned itineraries.', time: '7-10 Days' },
  { icon: Users, title: 'Visitor Visa', body: 'Guidance for family visits, personal invitations, and temporary stays.', time: '15-20 Days' },
  { icon: GraduationCap, title: 'Study Visa', body: 'Application support for students preparing for overseas education.', time: '4-8 Weeks' },
  { icon: Handshake, title: 'Business Visa', body: 'Documentation guidance for business meetings, conferences, and trade visits.', time: 'Profile based' },
];

const countries = ['Canada', 'USA', 'UK', 'Australia', 'Schengen', 'Dubai'];

export function VisaPage() {
  return (
    <>
      <Seo title="Visa Services | GK Immigration" description="Get tourist, visitor, study, and business visa support from GK Immigration." />
      <HeroSection
        title="Get Your Visa Approved Without Hassle"
        eyebrow="Visa Services"
        description="Expert assistance for Tourist, Visitor and Study Visas. We handle the paperwork while you plan your journey."
        image={HERO_IMAGES.visas}
        imageAlt="Traveler holding a passport and boarding pass near an airport window"
      >
        <div className="max-w-xl rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur">
          <InquiryForm title="Quick Visa Inquiry" compact defaultService="Tourist Visa" formType="visa" />
        </div>
      </HeroSection>
      <section className="section-y">
        <div className="container-shell">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-headline-lg text-primary">Our visa categories</h2>
            <p className="mt-3 text-on-surface-variant">Comprehensive solutions for every travel purpose.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <Reveal key={category.title} delay={index * 90}>
                <InfoCard icon={category.icon} title={category.title}>
                  <span>{category.body}</span>
                  <span className="mt-4 flex items-center gap-2 font-heading text-sm font-semibold text-primary">
                    <Clock size={16} aria-hidden="true" />
                    Processing: {category.time}
                  </span>
                </InfoCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section-y bg-surface-container-low">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-heading text-headline-lg text-primary">Popular destinations</h2>
              <p className="mt-2 text-on-surface-variant">Direct visa support for the most visited countries worldwide.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {countries.map((country, index) => (
              <Reveal key={country} delay={index * 60}>
                <article className="group cursor-pointer rounded-xl border border-transparent bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-secondary-container hover:shadow-premium">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-fixed font-heading text-xl font-bold text-primary">
                    {country.slice(0, 2).toUpperCase()}
                  </div>
                  <h3 className="font-heading text-label-md text-primary-container">{country}</h3>
                  <p className="mt-1 text-xs text-outline">Tourist & Student</p>
                  <button className="mt-4 text-xs font-bold text-secondary-container opacity-0 transition group-hover:opacity-100">View Details</button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white section-y">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <FileText className="text-secondary-container" size={48} aria-hidden="true" />
            <h2 className="mt-4 font-heading text-headline-lg text-primary">How the process works</h2>
            <p className="mt-4 text-on-surface-variant">
              We begin with a consultation, prepare a document checklist, review your file, and guide final submission steps.
            </p>
          </div>
          <ol className="grid gap-4">
            {['Profile and travel-purpose review', 'Document checklist and gap check', 'Application preparation support', 'Submission and next-step guidance'].map((item, index) => (
              <li key={item} className="flex gap-4 rounded-xl border border-outline-variant bg-surface p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">{index + 1}</span>
                <span className="font-heading font-semibold text-primary">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
