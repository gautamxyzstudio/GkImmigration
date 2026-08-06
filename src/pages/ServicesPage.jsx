import { Link } from "react-router-dom";
import { BriefcaseBusiness, Landmark, Plane, ShieldCheck } from "lucide-react";
import { HeroSection } from "../components/HeroSection.jsx";
import { InfoCard } from "../components/InfoCard.jsx";
import { Seo } from "../components/Seo.jsx";
import { HERO_IMAGES } from "../utils/constants.js";

const serviceCards = [
  {
    icon: Plane,
    title: "Visa Services",
    body: "Tourist, visitor, study, spouse, and business visa application support.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Air Tickets",
    body: "Flight planning for families, students, and business travelers.",
  },
  {
    icon: Landmark,
    title: "Tour Packages",
    body: "Domestic and international itineraries with practical support before departure.",
  },
  {
    icon: ShieldCheck,
    title: "Travel Insurance",
    body: "Plan selection for medical, cancellation, delay, and baggage coverage.",
  },
];

const servicesHeroImages = [
  {
    src: HERO_IMAGES.services,
    alt: "Commercial airplane parked at an airport terminal during boarding",
  },
  {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2200",
    alt: "Document review and application assistance",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2200",
    alt: "Client guidance and consultation session",
  },
  {
    src: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&q=80&w=2200",
    alt: "International holiday destination packages",
  },
];

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Services | GK Immigrations"
        description="Explore visa, travel, tour, and insurance services from GK Immigrations."
      />
      <HeroSection
        compact
        title="Travel and immigrations services under one roof"
        eyebrow="Our Services"
        description="Choose expert assistance for visa applications, air tickets, guided tours, and travel insurance with a single responsive team."
        images={servicesHeroImages}
      />
      <section className="section-y">
        <div className="container-shell grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((service) => (
            <InfoCard
              key={service.title}
              icon={service.icon}
              title={service.title}
            >
              {service.body}
            </InfoCard>
          ))}
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-3">
          {["Consultation", "Document Review", "Submission Support"].map(
            (step, index) => (
              <article
                key={step}
                className="rounded-xl border border-outline-variant p-6"
              >
                <p className="font-heading text-label-md text-secondary-container">
                  STEP {index + 1}
                </p>
                <h2 className="mt-3 font-heading text-headline-sm text-primary">
                  {step}
                </h2>
                <p className="mt-3 text-body-sm text-on-surface-variant">
                  {index === 0
                    ? "We understand your destination, purpose, dates, and eligibility basics."
                    : index === 1
                      ? "Your documents are checked against the service requirements before filing."
                      : "The team guides final submission steps and keeps communication clear."}
                </p>
              </article>
            ),
          )}
        </div>
      </section>
      <section className="section-y">
        <div className="container-shell rounded-xl bg-primary-container p-8 text-white lg:p-12">
          <h2 className="font-heading text-headline-lg">
            Need help choosing the right service?
          </h2>
          <p className="mt-4 max-w-2xl text-blue-100">
            Share your travel goal and timeline. We will point you to the right
            visa, package, or insurance path.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-lg bg-secondary-container px-6 py-3 font-heading font-semibold text-white transition hover:brightness-110"
          >
            Talk to an Expert
          </Link>
        </div>
      </section>
    </>
  );
}
