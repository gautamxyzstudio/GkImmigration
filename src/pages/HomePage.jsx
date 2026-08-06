import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { InstagramEmbed } from "react-social-media-embed";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  Luggage,
  MessageCircle,
  Plane,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Reveal } from "../components/Reveal.jsx";
import { Seo } from "../components/Seo.jsx";

const HOME_HERO_IMAGES = [
  {
    src: "/Tourist-Visa.webp",
    alt: "Tourist Visa",
  },
  {
    src: "/Business-Visa.webp",
    alt: "Business Visa",
  },
  {
    src: "/Study-Visa.webp",
    alt: "Study Visa",
  },
  {
    src: "/Visitor-Visa.webp",
    alt: "Visitor Visa",
  },
];

const services = [
  {
    title: "Instant Visas",
    text: "Expert visa assistance for 50+ countries with a 98% success rate.",
    icon: FileCheck2,
    href: "/visas",
    action: "Check Requirements",
  },
  {
    title: "Air Tickets",
    text: "Book international and domestic flights at the best rates with 24/7 support.",
    icon: Plane,
    href: "/contact",
    action: "Explore Deals",
  },
  {
    title: "Luxury Tours",
    text: "Curated holiday packages that combine comfort, adventure, and culture.",
    icon: Luggage,
    href: "/insurance",
    action: "View Packages",
  },
  {
    title: "Travel Insurance",
    text: "Comprehensive travel protection to ensure peace of mind on every journey.",
    icon: ShieldCheck,
    href: "/insurance",
    action: "Get Quote",
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

const testimonials = [
  {
    quote:
      "GK Immigrations made our Dubai trip absolutely effortless. From the visa process to the final airport drop-off, everything was perfectly organized.",
    name: "Rahul Mehra",
    trip: "Travelled to Dubai",
    color: "bg-blue-100 text-blue-900",
  },
  {
    quote:
      "I was worried about my UK visa, but GK Immigrations handled the paperwork so professionally. I got my approval within 10 days.",
    name: "Anita Sharma",
    trip: "Travelled to London",
    color: "bg-emerald-100 text-emerald-900",
  },
  {
    quote:
      "Got my Canada Study Visa approved in just 30 days! The team guided me step-by-step with document submission and SOP writing.",
    name: "Gurpreet Singh",
    trip: "Student Visa - Toronto",
    color: "bg-amber-100 text-amber-900",
  },
  {
    quote:
      "Filed SOWP (Spouse Open Work Permit) through GK Immigrations. Excellent counseling, clear document guidance, and successful result!",
    name: "Manpreet Kaur",
    trip: "Spouse Visa - Vancouver",
    color: "bg-purple-100 text-purple-900",
  },
  {
    quote:
      "Australia Visitor Visa approved smoothly. Very honest advice, transparent fees, and friendly staff at the Bhawanigarh office.",
    name: "Vikramaditya Verma",
    trip: "Travelled to Sydney",
    color: "bg-rose-100 text-rose-900",
  },
  {
    quote:
      "Booked our Thailand honeymoon tour package through GK Immigrations. Incredible hotel selections, hassle-free transfers, and great support!",
    name: "Simran & Harpreet",
    trip: "Honeymoon Tour - Phuket",
    color: "bg-pink-100 text-pink-900",
  },
  {
    quote:
      "Schengen Multi-Entry Tourist Visa granted within 2 weeks for our European vacation. Highly recommend their travel experts.",
    name: "Jasleen Dhillon",
    trip: "Travelled to Paris & Swiss",
    color: "bg-indigo-100 text-indigo-900",
  },
  {
    quote:
      "Our family heritage trip to Rajasthan was memorable. Private cab, top hotels, and seamless travel arrangements from start to finish.",
    name: "Rajesh Kumar",
    trip: "Royal Rajasthan Tour",
    color: "bg-orange-100 text-orange-900",
  },
  {
    quote:
      "Got 10-year US B1/B2 Tourist Visa after interview preparation from GK team. Extremely knowledgeable and supportive staff.",
    name: "Amandeep Sandhu",
    trip: "Travelled to New York",
    color: "bg-teal-100 text-teal-900",
  },
  {
    quote:
      "Best flight fare rates and instant travel insurance policy issuance. Whenever I travel internationally, GK Immigrations is my go-to choice.",
    name: "Priya Patel",
    trip: "Air Tickets & Insurance",
    color: "bg-sky-100 text-sky-900",
  },
  {
    quote:
      "Germany Business Visa processed smoothly for trade expo. Clear communication, proper checklist, and fast filing service.",
    name: "Harjit Gill",
    trip: "Business Visa - Frankfurt",
    color: "bg-cyan-100 text-cyan-900",
  },
  {
    quote:
      "New Zealand visitor visa approved without any stress. Thanks to GK Immigrations for their expert file preparation and guidance.",
    name: "Kuldeep Singh",
    trip: "Travelled to Auckland",
    color: "bg-lime-100 text-lime-900",
  },
];

const instagramProfile = "https://www.instagram.com/gkimmigrations/";

const instagramReels = [
  {
    url: instagramProfile,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=700",
    views: "8.8k",
  },
  {
    url: instagramProfile,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=700",
    views: "11.2k",
  },
  {
    url: instagramProfile,
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=700",
    views: "13.1k",
  },
  {
    url: instagramProfile,
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=700",
    views: "9.1k",
  },
  {
    url: instagramProfile,
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=80&w=700",
    views: "20.4k",
  },
];

const intakePartners = [
  "Sault College",
  "UOW",
  "Canadore",
  "Conestoga",
  "Philippine Airlines",
  "Thai Airways",
  "Qatar Airways",
  "British Airways",
];

export function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev >= testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HOME_HERO_IMAGES.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const testimonialTimer = window.setInterval(() => {
      setTestimonialIndex((prev) =>
        prev >= testimonials.length - 2 ? 0 : prev + 2,
      );
    }, 3500);
    return () => window.clearInterval(testimonialTimer);
  }, []);

  return (
    <>
      <Seo
        title="GK Immigrations | Premium Visa and Travel Services"
        description="Plan visas, tours, tickets, and travel insurance with GK Immigrations in Bhawanigarh."
      />

      <section className="relative flex min-h-[600px] items-center overflow-hidden">
        {/* Auto Image Slider Background */}
        <div className="absolute inset-0 z-0">
          {HOME_HERO_IMAGES.map((img, index) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={1920}
              height={1080}
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
          {HOME_HERO_IMAGES.map((_, index) => (
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

        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/35 to-transparent" />
        <div className="container-shell relative z-10 py-20 text-white">
          <Reveal className="mb-10 max-w-2xl">
            <h1 className="font-heading text-5xl font-light leading-tight md:text-[56px]">
              Explore the World,
              <br />
              Trusted by Millions.
            </h1>
            <p className="mt-5 max-w-lg text-body-lg text-white/90">
              Seamless flights, instant visas, and curated global tours tailored
              to your unique travel dreams.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-surface-container bg-white py-10">
        <div className="container-shell flex flex-wrap items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <span className="grid h-6 w-6 place-items-center rounded bg-primary text-xs font-bold text-white">
              G
            </span>
            <div className="flex items-center gap-1 text-yellow-500">
              {[1, 2, 3, 4, 5].map((item) => (
                <Star
                  key={item}
                  className="fill-current"
                  size={16}
                  aria-hidden="true"
                />
              ))}
              <span className="ml-2 font-heading text-sm font-bold text-on-surface">
                4.8/5 (12,000+ Reviews)
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 font-heading text-sm font-bold text-primary opacity-70">
            <CheckCircle2 size={18} aria-hidden="true" />
            Ministry of Tourism Approved
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-shell">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-heading text-headline-lg text-primary">
              Complete Travel Ecosystem
            </h2>
            <p className="mt-3 text-on-surface-variant">
              From the first step of your visa application to the final flight
              home, we handle every detail with precision and care.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map(
              ({ icon: Icon, title, text, href, action }, index) => (
                <Reveal key={title} delay={index * 90}>
                  <article className="group rounded-xl border border-surface-container-high bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-premium">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-fixed text-primary-container transition group-hover:bg-primary group-hover:text-white">
                      <Icon size={28} aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-headline-sm text-primary">
                      {title}
                    </h3>
                    <p className="mt-3 min-h-20 text-body-sm text-outline">
                      {text}
                    </p>
                    <Link
                      to={href}
                      className="mt-4 inline-flex items-center gap-2 font-heading text-sm font-bold text-primary transition group-hover:text-secondary-container"
                    >
                      {action}
                      <ArrowRight size={15} />
                    </Link>
                  </article>
                </Reveal>
              ),
            )}
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

      <section className="bg-white py-16 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-4">
            <h2 className="font-heading text-headline-lg text-primary">
              Why our travelers
              <br />
              love us.
            </h2>
            <p className="mt-6 text-on-surface-variant">
              We do not just book trips; we create memories that last a
              lifetime. Read what our community has to say.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={handlePrevTestimonial}
                className="grid h-12 w-12 place-items-center rounded-full border border-surface-container-high text-primary transition hover:bg-primary hover:text-white"
                aria-label="Previous testimonials"
              >
                ‹
              </button>
              <button
                onClick={handleNextTestimonial}
                className="grid h-12 w-12 place-items-center rounded-full border border-surface-container-high text-primary transition hover:bg-primary hover:text-white"
                aria-label="Next testimonials"
              >
                ›
              </button>
            </div>
          </Reveal>
          <div className="overflow-hidden lg:col-span-8">
            <div
              className="flex gap-6 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${testimonialIndex * 50}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="w-full shrink-0 md:w-[calc(50%-12px)]"
                >
                  <article className="h-full rounded-2xl bg-surface p-8 shadow-sm transition hover:shadow-md">
                    <div className="mb-4 flex text-yellow-500">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="fill-current" size={17} />
                      ))}
                    </div>
                    <p className="min-h-28 text-body-md text-on-surface leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-heading text-lg font-bold shadow-sm ${testimonial.color}`}
                      >
                        {testimonial.name.charAt(0).toUpperCase()}
                      </div>
                      <span>
                        <span className="block font-heading font-bold text-primary">
                          {testimonial.name}
                        </span>
                        <span className="text-xs text-outline">
                          {testimonial.trip}
                        </span>
                      </span>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <InstagramReelsSection />

      <section className="border-t border-surface-container bg-surface py-16 lg:py-24">
        <div className="container-shell">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-heading text-headline-lg text-primary">
              Our Recent Intakes
            </h2>
            <p className="mt-3 text-on-surface-variant">
              Proudly partnering with world-class educational institutions and
              leading global airlines to ensure your success.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 items-center gap-8 opacity-80 md:grid-cols-4">
            {intakePartners.map((partner) => (
              <div
                key={partner}
                className="mx-auto flex h-14 w-40 items-center justify-center rounded bg-slate-200 px-4 font-heading text-sm font-bold text-slate-500 grayscale transition hover:grayscale-0"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function InstagramReelsSection() {
  return (
    <section className="bg-primary-container py-16 text-white">
      <div className="container-shell">
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px]">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-primary-container">
                <Camera size={20} />
              </span>
            </span>
            <div>
              <h2 className="font-heading text-headline-md">
                Captured by GK Immigrants
              </h2>
              <p className="text-body-sm text-on-primary-container">
                Live Instagram embeds from @gkimmigrations
              </p>
            </div>
          </div>
          <a
            href={instagramProfile}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2.5 font-heading text-sm font-bold transition hover:bg-white/20"
          >
            Follow @GKImmigration
            <ExternalLink size={15} />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {instagramReels.map((reel, index) => (
            <article
              key={`${reel.url}-${index}`}
              className="relative min-h-[320px] overflow-hidden rounded-2xl bg-white/10"
            >
              <div className="absolute inset-0">
                <img
                  src={reel.image}
                  alt=""
                  className="h-full w-full object-cover opacity-90 transition duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              </div>
              <div className="absolute inset-0 bg-white text-black block">
                <InstagramEmbed
                  url={reel.url}
                  width="100%"
                  placeholderDisabled
                  captioned={false}
                  style={{ minWidth: 0, width: "100%", height: "100%" }}
                />
              </div>
              <a
                href={reel.url}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 z-10 flex items-end p-4"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-black/45 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
                  <MessageCircle size={13} />
                  {reel.views}
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
