import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Clock,
  FileText,
  GraduationCap,
  Handshake,
  PlaneTakeoff,
  Users,
} from "lucide-react";
import { HeroSection } from "../components/HeroSection.jsx";
import { InfoCard } from "../components/InfoCard.jsx";
import { InquiryForm } from "../components/InquiryForm.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { Seo } from "../components/Seo.jsx";
import { VisaDetailModal } from "../components/VisaDetailModal.jsx";
import { useModal } from "../context/ModalContext.jsx";
import { HERO_IMAGES } from "../utils/constants.js";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: PlaneTakeoff,
    title: "Tourist Visa",
    body: "Short-term travel support for holidays, leisure visits, and planned itineraries.",
    time: "7-10 Days",
  },
  {
    icon: Users,
    title: "Visitor Visa",
    body: "Guidance for family visits, personal invitations, and temporary stays.",
    time: "15-20 Days",
  },
  {
    icon: GraduationCap,
    title: "Study Visa",
    body: "Application support for students preparing for overseas education.",
    time: "4-8 Weeks",
  },
  {
    icon: Handshake,
    title: "Business Visa",
    body: "Documentation guidance for business meetings, conferences, and trade visits.",
    time: "Profile based",
  },
];

const countriesData = [
  {
    id: "canada",
    name: "Canada",
    flag: "https://flagcdn.com/w320/ca.png",
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=800",
    visaTypes: [
      "Tourist Visa",
      "Visitor Visa",
      "Study Visa (SDS)",
      "SOWP",
      "Business Visa",
    ],
    processingTime: "15 - 45 Days",
    validity: "Up to 10 Years (Multiple)",
    description:
      "Canada offers multiple visa paths for tourists, students, and spouses. Complete support for document compilation, SOP drafting, and biometric guidance to maximize approval rates.",
    keyRequirements: [
      "Passport valid for at least 6 months",
      "Financial proof & 6-month bank statements",
      "Proof of ties to home country (job/property)",
      "Statement of Purpose (SOP)",
      "Invitation letter or flight & hotel itinerary",
    ],
  },
  {
    id: "usa",
    name: "USA",
    flag: "https://flagcdn.com/w320/us.png",
    image:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800",
    visaTypes: ["B1/B2 Visitor", "F-1 Student", "Business Visa"],
    processingTime: "5 - 15 Days (post-interview)",
    validity: "10 Years Multiple Entry",
    description:
      "The US B1/B2 Visitor Visa permits multiple entries over a 10-year period. We assist with DS-160 application filing, fee payment, slot booking, and interview mock preparation.",
    keyRequirements: [
      "Form DS-160 confirmation page",
      "Valid passport & appointment confirmation",
      "Proof of funds and financial stability",
      "Employment/business proof & income tax returns",
      "Interview prep & mock session guidance",
    ],
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "https://flagcdn.com/w320/gb.png",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800",
    visaTypes: ["Standard Visitor", "Student Visa (CAS)", "Family Visa"],
    processingTime: "15 - 20 Working Days",
    validity: "6 Months, 2, 5, or 10 Years",
    description:
      "UK Standard Visitor visa permits travel for leisure, visiting family, or short business meetings. Priority and Super Priority processing options are available for urgent applications.",
    keyRequirements: [
      "Valid passport with blank pages",
      "Bank statements demonstrating maintenance funds",
      "Employment / business verification",
      "Detailed travel itinerary and accommodation details",
      "TB test certificate (if applicable)",
    ],
  },
  {
    id: "australia",
    name: "Australia",
    flag: "https://flagcdn.com/w320/au.png",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800",
    visaTypes: ["Visitor Visa (Subclass 600)", "Student Visa (Subclass 500)"],
    processingTime: "15 - 30 Days",
    validity: "1 Year to 3 Years",
    description:
      "Australia Subclass 600 Visitor visa is processed electronically (eVisa). We provide end-to-end assistance from ImmiAccount setup to document translation and submission.",
    keyRequirements: [
      "Color passport scan & national identity card",
      "Bank statements & financial proof",
      "Employment leave sanction letter",
      "Travel plan & cover letter",
      "Health & character declarations",
    ],
  },
  {
    id: "schengen",
    name: "Schengen Area",
    flag: "https://flagcdn.com/w320/eu.png",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800",
    visaTypes: ["Tourist Visa", "Business Visa", "Short-term Study"],
    processingTime: "15 - 25 Days",
    validity: "Up to 90 Days stay per 180 days",
    description:
      "A single Schengen visa gives access to 29 European countries including France, Germany, Italy, Switzerland, and Spain. Complete itinerary, insurance, and VFS appointment booking guidance.",
    keyRequirements: [
      "Completed & signed Schengen application form",
      "Travel insurance with min €30,000 coverage",
      "Confirmed round-trip flight & hotel bookings",
      "6-month bank statement with sound balance",
      "Detailed day-by-day travel itinerary",
    ],
  },
  {
    id: "dubai",
    name: "Dubai (UAE)",
    flag: "https://flagcdn.com/w320/ae.png",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
    visaTypes: [
      "14-Day Visa",
      "30-Day Tourist",
      "60-Day Tourist",
      "Multiple Entry",
    ],
    processingTime: "24 - 48 Hours",
    validity: "30 Days or 60 Days",
    description:
      "Express Dubai tourist visas processed in 24 to 48 hours with minimal documentation required. Perfect for shopping trips, family vacations, or transit stays.",
    keyRequirements: [
      "Passport front & back scan (valid 6+ months)",
      "Passport size photograph with white background",
      "Confirmed flight ticket details",
      "Fast digital processing with minimal documents",
    ],
  },
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

const processSteps = [
  {
    title: "Profile and travel-purpose review",
    description:
      "We begin by thoroughly assessing your travel history, financial background, education/employment details, and specific travel purpose. This helps us craft a tailored visa strategy with the highest probability of approval.",
  },
  {
    title: "Document checklist and gap check",
    description:
      "We provide a comprehensive, customized document checklist. Our team verifies your financial records, bank statements, sponsorship letters, and ties to your home country to resolve any potential gaps before submission.",
  },
  {
    title: "Application preparation support",
    description:
      "Our experts assist with precise form filling, persuasive Cover Letter / Statement of Purpose (SOP) drafting, document formatting, fee payments, and scheduling your biometric or embassy appointment.",
  },
  {
    title: "Submission and next-step guidance",
    description:
      "We guide you through the final file submission, real-time application tracking, and provide thorough mock interview preparation whenever embassy interviews are required.",
  },
];

export function VisaPage() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [openStepIndex, setOpenStepIndex] = useState(-1);
  const { openModal } = useModal();

  const toggleStep = (index) => {
    setOpenStepIndex((current) => (current === index ? -1 : index));
  };

  const handleOpenDetails = (country) => {
    setSelectedCountry(country);
    setIsDetailModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailModalOpen(false);
    setSelectedCountry(null);
  };

  const handleApplyForCountry = (countryName) => {
    openModal(`Tourist Visa - ${countryName}`);
  };

  return (
    <>
      <Seo
        title="Visa Services | GK Immigrations"
        description="Get tourist, visitor, study, and business visa support from GK Immigrations."
      />
      <HeroSection
        title="Get Your Visa Approved Without Hassle"
        eyebrow="Visa Services"
        description="Expert assistance for Tourist, Visitor and Study Visas. We handle the paperwork while you plan your journey."
        image={HERO_IMAGES.visas}
        imageAlt="Traveler holding a passport and boarding pass near an airport window"
      >
        <div className="max-w-xl rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur">
          <InquiryForm
            title="Quick Visa Inquiry"
            compact
            defaultService="Tourist Visa"
            formType="visa"
          />
        </div>
      </HeroSection>
      <section className="section-y">
        <div className="container-shell">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-headline-lg text-primary">
              Our visa categories
            </h2>
            <p className="mt-3 text-on-surface-variant">
              Comprehensive solutions for every travel purpose.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 h-full">
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
              <h2 className="font-heading text-headline-lg text-primary">
                Popular destinations
              </h2>
              <p className="mt-2 text-on-surface-variant">
                Direct visa support for the most visited countries worldwide.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {countriesData.map((country, index) => (
              <Reveal key={country.id} delay={index * 60}>
                <article
                  onClick={() => handleOpenDetails(country)}
                  className="group cursor-pointer overflow-hidden rounded-2xl border border-outline-variant/60 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-secondary-container hover:shadow-premium flex flex-col justify-between h-full"
                >
                  <div className="relative h-28 w-full overflow-hidden bg-slate-100">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-3 right-3 flex items-center gap-2">
                      <img
                        src={country.flag}
                        alt={`${country.name} flag`}
                        className="h-6 w-6 rounded-full border border-white object-cover shadow-sm shrink-0 bg-white"
                      />
                      <h3 className="font-heading text-sm font-bold text-white drop-shadow-sm truncate">
                        {country.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-3.5 flex flex-col justify-between flex-1 text-left">
                    <div>
                      <span className="inline-block rounded-md bg-primary-fixed/40 px-2 py-0.5 text-[10px] font-bold text-primary mb-1.5">
                        {country.processingTime}
                      </span>
                      <p className="text-xs text-on-surface-variant line-clamp-1 font-medium">
                        {country.visaTypes.slice(0, 2).join(", ")}
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenDetails(country);
                      }}
                      className="mt-3 flex w-full items-center justify-center rounded-xl bg-surface-container-low py-2 text-xs font-bold text-primary transition hover:bg-primary hover:text-white"
                    >
                      View Details
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Country Visa Detail Dialog Box */}
      <VisaDetailModal
        country={selectedCountry}
        isOpen={isDetailModalOpen}
        onClose={handleCloseDetails}
        onApply={handleApplyForCountry}
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="container-shell">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="font-heading text-headline-lg text-primary">
                Our Success Gallery
              </h2>
              <p className="mt-2 text-on-surface-variant">
                Real visa approvals and moments of trust from our clients at GK
                Immigrations.
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
      <section className="bg-white section-y">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <FileText
              className="text-secondary-container"
              size={48}
              aria-hidden="true"
            />
            <h2 className="mt-4 font-heading text-headline-lg text-primary">
              How the process works
            </h2>
            <p className="mt-4 text-on-surface-variant">
              We begin with a consultation, prepare a document checklist, review
              your file, and guide final submission steps.
            </p>
          </div>
          <div className="space-y-3">
            {processSteps.map((step, index) => {
              const isOpen = openStepIndex === index;
              return (
                <div
                  key={step.title}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-primary bg-surface shadow-sm"
                      : "border-outline-variant bg-surface hover:border-primary/40"
                  }`}
                >
                  <button
                    onClick={() => toggleStep(index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left transition"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-heading font-bold text-sm transition-colors ${
                          isOpen
                            ? "bg-primary text-white"
                            : "bg-primary-fixed text-primary"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span className="font-heading font-semibold text-primary text-base">
                        {step.title}
                      </span>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-slate-100 px-5 pb-5 pt-3">
                        <p className="text-sm leading-relaxed text-on-surface-variant sm:pl-12">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
