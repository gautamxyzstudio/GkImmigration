import { Link } from 'react-router-dom';
import { InstagramEmbed } from 'react-social-media-embed';
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  Globe2,
  Luggage,
  Map,
  MessageCircle,
  Plane,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { Reveal } from '../components/Reveal.jsx';
import { Seo } from '../components/Seo.jsx';

const heroImage =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2200';

const services = [
  {
    title: 'Instant Visas',
    text: 'Expert visa assistance for 50+ countries with a 98% success rate.',
    icon: FileCheck2,
    href: '/visas',
    action: 'Check Requirements',
  },
  {
    title: 'Air Tickets',
    text: 'Book international and domestic flights at the best rates with 24/7 support.',
    icon: Plane,
    href: '/contact',
    action: 'Explore Deals',
  },
  {
    title: 'Luxury Tours',
    text: 'Curated holiday packages that combine comfort, adventure, and culture.',
    icon: Luggage,
    href: '/destinations',
    action: 'View Packages',
  },
  {
    title: 'Travel Insurance',
    text: 'Comprehensive travel protection to ensure peace of mind on every journey.',
    icon: ShieldCheck,
    href: '/insurance',
    action: 'Get Quote',
  },
];

const destinations = [
  {
    name: 'Dubai Excellence',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1400',
    price: 'Starting from ₹45,000',
    badge: 'Best Seller',
    large: true,
  },
  {
    name: 'Bali Retreats',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000',
    price: 'Starting from ₹38,500',
  },
  {
    name: 'Sunny Goa',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=900',
    price: 'Starting from ₹12,000',
  },
  {
    name: 'Kerala Backwaters',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=900',
    price: 'Starting from ₹22,000',
  },
];

const testimonials = [
  {
    quote:
      'BharatTravel made our Dubai trip absolutely effortless. From the visa process to the final airport drop-off, everything was perfectly organized.',
    name: 'Rahul Mehra',
    trip: 'Travelled to Dubai',
    color: 'bg-primary-fixed-dim',
  },
  {
    quote:
      'I was worried about my UK visa, but GK Immigration handled the paperwork so professionally. I got my approval within 10 days.',
    name: 'Anita Sharma',
    trip: 'Travelled to London',
    color: 'bg-secondary-fixed-dim',
  },
];

const instagramProfile = 'https://www.instagram.com/gkimmigrations/';

const instagramReels = [
  {
    url: instagramProfile,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=700',
    views: '8.8k',
  },
  {
    url: instagramProfile,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=700',
    views: '11.2k',
  },
  {
    url: instagramProfile,
    image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=700',
    views: '13.1k',
  },
  {
    url: instagramProfile,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=700',
    views: '9.1k',
  },
  {
    url: instagramProfile,
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=80&w=700',
    views: '20.4k',
  },
];

const intakePartners = ['Sault College', 'UOW', 'Canadore', 'Conestoga', 'Philippine Airlines', 'Thai Airways', 'Qatar Airways', 'British Airways'];

export function HomePage() {
  return (
    <>
      <Seo
        title="GK Immigration | Premium Visa and Travel Services"
        description="Plan visas, tours, tickets, and travel insurance with GK Immigration in Bhawanigarh."
      />

      <section className="relative flex min-h-[600px] items-center overflow-hidden">
        <img src={heroImage} alt="Global landmarks and ocean view for premium travel services" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/35 to-transparent" />
        <div className="container-shell relative z-10 py-20 text-white">
          <Reveal className="mb-10 max-w-2xl">
            <h1 className="font-heading text-5xl font-light leading-tight md:text-[56px]">
              Explore the World,
              <br />
              Trusted by Millions.
            </h1>
            <p className="mt-5 max-w-lg text-body-lg text-white/90">
              Seamless flights, instant visas, and curated global tours tailored to your unique travel dreams.
            </p>
          </Reveal>

          <Reveal delay={120} className="max-w-5xl rounded-xl bg-white p-2 text-on-surface shadow-2xl">
            <div className="flex gap-4 border-b border-surface-container p-4">
              {[
                ['Flights', Plane],
                ['Visas', FileCheck2],
                ['Tours', Map],
              ].map(([label, Icon], index) => (
                <button
                  key={label}
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 font-body text-label-md transition ${
                    index === 1 ? 'bg-primary-container text-white' : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  <Icon size={18} aria-hidden="true" />
                  {label}
                </button>
              ))}
            </div>
            <div className="grid gap-4 p-6 md:grid-cols-4">
              <SearchField label="Country" placeholder="Select Destination" icon={Globe2} />
              <label className="space-y-1 md:col-span-2">
                <span className="text-xs font-bold uppercase tracking-wider text-outline">Type of Visa</span>
                <span className="flex items-center gap-2 border-b-2 border-surface-container-high py-2 text-primary focus-within:border-primary">
                  <BadgeCheck size={19} aria-hidden="true" />
                  <select className="w-full bg-transparent p-0 font-semibold text-on-surface outline-none">
                    <option>Select Visa Type</option>
                    <option>Tourist Visa</option>
                    <option>Student Visa</option>
                    <option>Visitor Visa</option>
                    <option>SOWP</option>
                    <option>Business Visa</option>
                  </select>
                </span>
              </label>
              <Link to="/contact" className="cta-button h-full">
                Check Eligibility
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-surface-container bg-white py-10">
        <div className="container-shell flex flex-wrap items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <span className="grid h-6 w-6 place-items-center rounded bg-primary text-xs font-bold text-white">G</span>
            <div className="flex items-center gap-1 text-yellow-500">
              {[1, 2, 3, 4, 5].map((item) => <Star key={item} className="fill-current" size={16} aria-hidden="true" />)}
              <span className="ml-2 font-heading text-sm font-bold text-on-surface">4.8/5 (12,000+ Reviews)</span>
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
            <h2 className="font-heading text-headline-lg text-primary">Complete Travel Ecosystem</h2>
            <p className="mt-3 text-on-surface-variant">
              From the first step of your visa application to the final flight home, we handle every detail with precision and care.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, text, href, action }, index) => (
              <Reveal key={title} delay={index * 90}>
                <article className="group rounded-xl border border-surface-container-high bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-premium">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-fixed text-primary-container transition group-hover:bg-primary group-hover:text-white">
                    <Icon size={28} aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-headline-sm text-primary">{title}</h3>
                  <p className="mt-3 min-h-20 text-body-sm text-outline">{text}</p>
                  <Link to={href} className="mt-4 inline-flex items-center gap-2 font-heading text-sm font-bold text-primary transition group-hover:text-secondary-container">
                    {action}
                    <ArrowRight size={15} />
                  </Link>
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
              <h2 className="font-heading text-headline-lg text-primary">Trending Destinations</h2>
              <p className="mt-2 text-on-surface-variant">Handpicked favorites by GK Immigration explorers this season.</p>
            </div>
            <Link to="/destinations" className="inline-flex items-center gap-2 font-heading font-bold text-primary">
              See All Destinations
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-4 lg:grid-rows-2">
            {destinations.map((destination, index) => (
              <article
                key={destination.name}
                className={`group relative min-h-[280px] overflow-hidden rounded-2xl bg-primary text-white shadow-soft ${
                  destination.large ? 'lg:col-span-2 lg:row-span-2 lg:min-h-[600px]' : index === 1 ? 'lg:col-span-2' : ''
                }`}
              >
                <img src={destination.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  {destination.badge ? <span className="mb-3 inline-block rounded-full bg-secondary-container px-3 py-1 text-[10px] font-bold uppercase">{destination.badge}</span> : null}
                  <h3 className="font-heading text-headline-sm">{destination.name}</h3>
                  <p className="mt-1 text-body-sm text-white/80">{destination.price}</p>
                  {destination.large ? (
                    <Link to="/contact" className="mt-4 inline-flex rounded-lg bg-white px-5 py-2 font-heading text-sm font-bold text-primary transition hover:bg-primary hover:text-white">
                      Book Now
                    </Link>
                  ) : null}
                </div>
              </article>
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
              We do not just book trips; we create memories that last a lifetime. Read what our community has to say.
            </p>
            <div className="mt-8 flex gap-3">
              <button className="grid h-12 w-12 place-items-center rounded-full border border-surface-container-high text-primary transition hover:bg-primary hover:text-white">‹</button>
              <button className="grid h-12 w-12 place-items-center rounded-full border border-surface-container-high text-primary transition hover:bg-primary hover:text-white">›</button>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:col-span-8">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 100}>
                <article className="rounded-2xl bg-surface p-8">
                  <div className="mb-4 flex text-yellow-500">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="fill-current" size={17} />)}
                  </div>
                  <p className="min-h-28 text-body-md text-on-surface">{testimonial.quote}</p>
                  <div className="mt-8 flex items-center gap-4">
                    <span className={`h-12 w-12 rounded-full ${testimonial.color}`} />
                    <span>
                      <span className="block font-heading font-bold text-primary">{testimonial.name}</span>
                      <span className="text-xs text-outline">{testimonial.trip}</span>
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InstagramReelsSection />

      <section className="border-t border-surface-container bg-surface py-16 lg:py-24">
        <div className="container-shell">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-heading text-headline-lg text-primary">Our Recent Intakes</h2>
            <p className="mt-3 text-on-surface-variant">
              Proudly partnering with world-class educational institutions and leading global airlines to ensure your success.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 items-center gap-8 opacity-80 md:grid-cols-4">
            {intakePartners.map((partner) => (
              <div key={partner} className="mx-auto flex h-14 w-40 items-center justify-center rounded bg-slate-200 px-4 font-heading text-sm font-bold text-slate-500 grayscale transition hover:grayscale-0">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function SearchField({ label, placeholder, icon: Icon }) {
  return (
    <label className="space-y-1">
      <span className="text-xs font-bold uppercase tracking-wider text-outline">{label}</span>
      <span className="flex items-center gap-2 border-b-2 border-surface-container-high py-2 text-primary focus-within:border-primary">
        <Icon size={19} aria-hidden="true" />
        <input className="w-full bg-transparent p-0 font-semibold text-on-surface outline-none" placeholder={placeholder} />
      </span>
    </label>
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
              <h2 className="font-heading text-headline-md">Captured by GK Immigrants</h2>
              <p className="text-body-sm text-on-primary-container">Live Instagram embeds from @gkimmigrations</p>
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
            <article key={`${reel.url}-${index}`} className="relative min-h-[320px] overflow-hidden rounded-2xl bg-white/10">
              <div className="absolute inset-0">
                <img src={reel.image} alt="" className="h-full w-full object-cover opacity-90 transition duration-500 hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              </div>
              <div className="absolute inset-0 hidden bg-white text-black lg:block">
                <InstagramEmbed
                  url={reel.url}
                  width="100%"
                  placeholderDisabled
                  captioned={false}
                  style={{ minWidth: 0, width: '100%', height: '100%' }}
                />
              </div>
              <a href={reel.url} target="_blank" rel="noreferrer" className="absolute inset-0 z-10 flex items-end p-4">
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
