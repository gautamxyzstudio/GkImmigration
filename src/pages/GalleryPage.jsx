import { useCallback, useEffect, useState } from "react";
import {
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Globe2,
  HeartHandshake,
  Maximize2,
  MessageCircle,
  Plane,
  Sparkles,
  X,
} from "lucide-react";
import { HeroSection } from "../components/HeroSection.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { Seo } from "../components/Seo.jsx";
import { useModal } from "../context/ModalContext.jsx";
import { OFFICE } from "../utils/constants.js";

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Dilteg Singh - Visa Approval Success",
    location: "Bhawanigarh, Punjab",
    date: "July 2026",
    image: "/gallery/DiltegSingh.webp",
    alt: "Dilteg Singh holding approved visa document",
    description:
      "Congratulations to Dilteg Singh on securing visa approval through GK Immigration.",
  },
  {
    id: 2,
    title: "Gurmej Singh - Visa Approval Success",
    location: "Bhawanigarh, Punjab",
    date: "July 2026",
    image: "/gallery/GurmejSingh.webp",
    alt: "Gurmej Singh holding approved visa document",
    description:
      "Congratulations to Gurmej Singh on receiving visa grant with complete assistance.",
  },
  {
    id: 3,
    title: "Gurpiar - Visa Approval Success",
    location: "Bhawanigarh, Punjab",
    date: "June 2026",
    image: "/gallery/Gurpiar.webp",
    alt: "Gurpiar holding approved visa document",
    description:
      "Successful visa filing and approval for Gurpiar from GK Immigration team.",
  },
  {
    id: 4,
    title: "Gurpreet - Visa Approval Success",
    location: "Bhawanigarh, Punjab",
    date: "June 2026",
    image: "/gallery/Gurpreet.webp",
    alt: "Gurpreet holding approved visa document",
    description:
      "Happy moment with Gurpreet celebrating fast-track visa processing success.",
  },
  {
    id: 5,
    title: "Harminder - Visa Approval Success",
    location: "Bhawanigarh, Punjab",
    date: "May 2026",
    image: "/gallery/Harminder.webp",
    alt: "Harminder holding approved visa document",
    description:
      "Warm congratulations to Harminder on receiving official visa approval.",
  },
  {
    id: 6,
    title: "Kulwant Kaur - Visa Approval Success",
    location: "Bhawanigarh, Punjab",
    date: "May 2026",
    image: "/gallery/KulwantKaur.webp",
    alt: "Kulwant Kaur holding approved visa document",
    description:
      "Successful visitor visa grant for Kulwant Kaur processed smoothly.",
  },
  {
    id: 7,
    title: "Manjit & Amarjit - Visa Approval Success",
    location: "Bhawanigarh, Punjab",
    date: "April 2026",
    image: "/gallery/ManjitAmarjit.webp",
    alt: "Manjit and Amarjit holding approved visa documents",
    description:
      "Delighted family Manjit & Amarjit celebrating their joint visa approvals.",
  },
  {
    id: 8,
    title: "Mohit - Visa Approval Success",
    location: "Bhawanigarh, Punjab",
    date: "April 2026",
    image: "/gallery/Mohit.webp",
    alt: "Mohit holding approved visa document",
    description:
      "Congratulations to Mohit on securing approved visa through GK Immigration.",
  },
  {
    id: 9,
    title: "Raj Rani - Visa Approval Success",
    location: "Bhawanigarh, Punjab",
    date: "March 2026",
    image: "/gallery/RajRani.webp",
    alt: "Raj Rani holding approved visa document",
    description:
      "Smooth document filing and visa approval success for Raj Rani.",
  },
  {
    id: 10,
    title: "Rajinder Brar - Visa Approval Success",
    location: "Bhawanigarh, Punjab",
    date: "March 2026",
    image: "/gallery/RajinderBrar.webp",
    alt: "Rajinder Brar holding approved visa document",
    description:
      "Congratulations to Rajinder Brar on receiving visa approval letter.",
  },
  {
    id: 11,
    title: "Rajinder Kaur - Visa Approval Success",
    location: "Bhawanigarh, Punjab",
    date: "February 2026",
    image: "/gallery/RajinderKaur.webp",
    alt: "Rajinder Kaur holding approved visa document",
    description:
      "Successful visa grant for Rajinder Kaur with dedicated counselor guidance.",
  },
  {
    id: 12,
    title: "Raman Deep - Visa Approval Success",
    location: "Bhawanigarh, Punjab",
    date: "February 2026",
    image: "/gallery/RamanDeep.webp",
    alt: "Raman Deep holding approved visa document",
    description:
      "Celebrating Raman Deep on fast visa clearance through GK Immigration.",
  },
  {
    id: 13,
    title: "Rehmat Kaur - Visa Approval Success",
    location: "Bhawanigarh, Punjab",
    date: "January 2026",
    image: "/gallery/RehmatKaur.webp",
    alt: "Rehmat Kaur holding approved visa document",
    description:
      "Best wishes to Rehmat Kaur on receiving official visa approval.",
  },
  {
    id: 14,
    title: "Surender Kaur - Visa Approval Success",
    location: "Bhawanigarh, Punjab",
    date: "January 2026",
    image: "/gallery/SurenderKaur.webp",
    alt: "Surender Kaur holding approved visa document",
    description:
      "Successful visa approval for Surender Kaur processed with 100% accuracy.",
  },
];

const STATS = [
  { icon: Award, label: "Visa Approvals", value: "5,000+" },
  { icon: Globe2, label: "Destinations", value: "50+" },
  { icon: HeartHandshake, label: "Client Satisfaction", value: "99%" },
  { icon: Calendar, label: "Years Experience", value: "10+" },
];

const galleryHeroImages = [
  {
    src: "/gallery/DiltegSingh.webp",
    alt: "GK Immigration client visa approval success story",
  },
  {
    src: "/gallery/ManjitAmarjit.webp",
    alt: "Family visa approval success at GK Immigration",
  },
  {
    src: "/gallery/Gurpreet.webp",
    alt: "Client celebrating visa grant at Bhawanigarh office",
  },
  {
    src: "/gallery/KulwantKaur.webp",
    alt: "Successful visitor visa approval story",
  },
];

export function GalleryPage() {
  const { openModal } = useModal();
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const activeItem =
    selectedItemIndex !== null ? GALLERY_ITEMS[selectedItemIndex] : null;

  const handlePrev = useCallback(() => {
    if (selectedItemIndex === null || GALLERY_ITEMS.length === 0) return;
    setSelectedItemIndex((prev) =>
      prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1,
    );
  }, [selectedItemIndex]);

  const handleNext = useCallback(() => {
    if (selectedItemIndex === null || GALLERY_ITEMS.length === 0) return;
    setSelectedItemIndex((prev) =>
      prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1,
    );
  }, [selectedItemIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedItemIndex === null) return;
      if (e.key === "Escape") setSelectedItemIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItemIndex, handlePrev, handleNext]);

  return (
    <>
      <Seo
        title="Visa Approval Gallery | GK Immigration"
        description="View real visa approval photos and success stories of happy clients at GK Immigration Bhawanigarh."
      />

      <HeroSection
        compact
        title="Moments of Trust, Travel & Success"
        eyebrow="Our Gallery"
        description="A visual look into our client visa approvals, travel journeys, and success stories at GK Immigration."
        images={galleryHeroImages}
      />

      {/* Main Gallery Grid */}
      <section className="section-y bg-background">
        <div className="container-shell">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {GALLERY_ITEMS.map((item, index) => (
              <Reveal key={item.id}>
                <article
                  onClick={() => setSelectedItemIndex(index)}
                  className="group cursor-pointer overflow-hidden rounded-2xl border border-outline-variant bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10"
                >
                  <div className="relative aspect-[2/2.5] overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-full min-h-[400px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="border-y border-outline-variant bg-primary-container py-14 text-white">
        <div className="container-shell">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-xl bg-white/5 p-4 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary-container text-white shadow-md">
                  <Icon size={24} />
                </div>
                <div>
                  <div className="font-heading text-3xl font-extrabold tracking-tight text-white">
                    {value}
                  </div>
                  <div className="text-body-sm font-medium text-blue-100/90">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-y bg-surface">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-container via-primary to-blue-950 p-8 text-white shadow-2xl lg:p-12">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-secondary-fixed backdrop-blur-sm">
                <Sparkles size={14} /> Start Your Global Journey
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-4xl">
                Ready to be our next visa or holiday success story?
              </h2>
              <p className="mt-4 text-body-lg text-blue-100/90">
                Connect with our Bhawanigarh consultation team today for visa
                assessment, air ticketing, or custom tour itineraries.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="inline-flex items-center gap-2 rounded-xl bg-secondary-container px-6 py-3.5 font-heading text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110"
                >
                  <Plane size={18} />
                  Book Free Consultation
                </button>
                <a
                  href={OFFICE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-heading text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-500"
                >
                  <MessageCircle size={18} />
                  WhatsApp Direct Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fade-in">
          {/* Backdrop Click to Close */}
          <div
            className="absolute inset-0"
            onClick={() => setSelectedItemIndex(null)}
          />

          {/* Modal Container */}
          <div className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-surface shadow-2xl md:flex-row">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItemIndex(null)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Left/Right Navigation Buttons */}
            {GALLERY_ITEMS.length > 1 ? (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black hover:scale-110"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black hover:scale-110"
                  aria-label="Next photo"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            ) : null}

            {/* Image Preview Container */}
            <div className="relative flex flex-1 items-center justify-center bg-slate-950 min-h-[300px] md:min-h-[480px]">
              <img
                src={activeItem.image}
                alt={activeItem.alt}
                className="max-h-[75vh] w-full object-contain p-2"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
