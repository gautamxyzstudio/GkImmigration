import { Link } from 'react-router-dom';
import {
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Filter,
  Headphones,
  MapPin,
  MessageCircle,
  PencilRuler,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';
import { InquiryForm } from '../components/InquiryForm.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { Seo } from '../components/Seo.jsx';
import { HERO_IMAGES, OFFICE } from '../utils/constants.js';

const destinationCards = [
  {
    name: 'Rajasthan',
    tag: 'Heritage & Royal',
    description: 'Experience the royalty of Jaipur, Jodhpur, and Udaipur in a grand 7-day tour.',
    duration: '7D/6N',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1400',
    alt: 'Hawa Mahal palace facade in Jaipur Rajasthan',
    featured: true,
  },
  {
    name: 'Ladakh',
    tag: 'Mountain Escape',
    duration: '7D/6N',
    image: 'https://images.unsplash.com/photo-1581793746485-04698e79a4e8?auto=format&fit=crop&q=80&w=1000',
    alt: 'Blue lake and mountain landscape in Ladakh',
  },
  {
    name: 'Kerala',
    tag: 'Backwaters',
    duration: '6D/5N Package',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1000',
    alt: 'Kerala houseboat on peaceful backwaters',
  },
  {
    name: 'Manali',
    tag: 'Hill Station',
    duration: '5D/4N Package',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=1000',
    alt: 'Snow capped mountains and pine forest in Manali',
  },
  {
    name: 'Golden Triangle',
    tag: 'Culture & History',
    duration: '6D/5N Heritage',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1000',
    alt: 'Taj Mahal in Agra with reflecting pool',
  },
];

const featuredPackages = [
  {
    title: 'Amazing Thailand Discovery',
    duration: '5 Days / 4 Nights',
    price: '₹45,999',
    rating: '4.9',
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&q=80&w=1000',
    features: ['4-Star Accommodations', 'Daily Breakfast & Dinners'],
  },
  {
    title: 'Royal Rajasthan Heritage',
    duration: '7 Days / 6 Nights',
    price: '₹32,500',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1000',
    features: ['Private Chauffeur', 'Desert Safari Experience'],
  },
  {
    title: 'Swiss Alps & Lakes',
    duration: '8 Days / 7 Nights',
    price: '₹1,85,000',
    rating: '5.0',
    badge: 'Premium',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80&w=1000',
    features: ['Luxury Mountain Resorts', 'Mt. Titlis Cable Car'],
  },
];

const trustItems = [
  { title: 'Best Price Guarantee', body: 'Lowest prices with zero hidden charges.', icon: CircleDollarSign },
  { title: 'Customized Packages', body: 'Itineraries tailored to your preferences.', icon: PencilRuler },
  { title: '24/7 Support', body: 'Dedicated concierge for your entire trip.', icon: Headphones },
  { title: 'Verified Partners', body: 'Top-tier hotels and transport services.', icon: ShieldCheck },
];

export function DestinationsPage() {
  return (
    <>
      <Seo title="Tour Packages | GK Immigration" description="Explore domestic and international tour packages with GK Immigration." />

      <section className="packages-hero relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden px-4 py-20 text-center text-white sm:px-6 lg:min-h-[870px]">
        <img
          src={HERO_IMAGES.destinations}
          alt="Tour bus traveling along a scenic road for a holiday package"
          className="absolute inset-0 h-full w-full scale-105 object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/45 via-primary/50 to-primary/80" />
        <div className="absolute inset-x-0 top-24 mx-auto h-72 max-w-3xl rounded-full bg-white/10 blur-3xl" />
        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <Reveal>
            <h1 className="mx-auto max-w-3xl font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-display-xl">
              Explore the World with Our Best Tour Packages
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-body-lg text-blue-50/90">
              Handpicked domestic and international trips at the best prices, crafted for unforgettable memories.
            </p>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-12 max-w-4xl">
            <div className="glass-panel package-search-shadow rounded-xl border border-white/20 p-2 text-on-surface md:rounded-full">
              <div className="flex flex-col items-center gap-2 md:flex-row">
                <SearchField label="Destination" value="Where to?" icon={MapPin} />
                <SearchField label="Budget" value="Economy" icon={CircleDollarSign} />
                <SearchField label="Travel Date" value="mm/dd/yyyy" icon={CalendarDays} noDivider />
                <Link to="/contact" className="cta-button w-full rounded-full px-8 py-4 md:w-auto">
                  Plan My Trip
                </Link>
              </div>
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-full border border-white/30 bg-white/10 px-6 py-2 font-heading text-sm font-medium text-white backdrop-blur-sm transition hover:scale-105 hover:bg-white/20"
            >
              Get Free Quote
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-shell">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-secondary">Top Picks</span>
              <h2 className="font-heading text-headline-lg text-primary">Popular Destinations</h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="flex rounded-full border border-outline-variant bg-surface-container p-1">
                <button className="rounded-full px-6 py-2 text-sm font-semibold text-on-surface-variant transition hover:bg-white/60">International</button>
                <button className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white shadow-soft">Domestic</button>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {destinationCards.map((destination, index) => (
              <Reveal key={destination.name} delay={index * 80} className={destination.featured ? 'lg:col-span-2' : ''}>
                <article className={`bento-animated group relative overflow-hidden rounded-2xl bg-primary text-white ${destination.featured ? 'min-h-[450px]' : 'min-h-[400px] lg:min-h-[450px]'}`}>
                  <img
                    src={destination.image}
                    alt={destination.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-secondary-container sm:text-sm">{destination.tag}</p>
                    <h3 className={`font-heading font-bold ${destination.featured ? 'text-display-xl' : 'text-headline-lg'}`}>{destination.name}</h3>
                    {destination.description ? <p className="mt-2 max-w-md text-body-sm text-blue-100/90">{destination.description}</p> : null}
                    <div className="mt-5 flex items-center justify-between gap-4">
                      <span className="flex items-center gap-2 text-sm font-medium text-blue-100">
                        <CalendarDays size={15} aria-hidden="true" />
                        {destination.duration}
                      </span>
                      <Link
                        to="/contact"
                        className={destination.featured ? 'rounded-lg bg-white px-6 py-2.5 text-sm font-bold text-primary shadow-lg transition hover:bg-primary hover:text-white' : 'rounded-full border border-white/30 bg-white/10 p-2 text-white backdrop-blur transition hover:bg-white/20'}
                        aria-label={`View ${destination.name} packages`}
                      >
                        {destination.featured ? 'View Packages' : <Plane size={16} />}
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface-variant/30">
        <div className="container-shell">
          <Reveal className="mb-12 text-center">
            <h2 className="font-heading text-headline-lg text-primary">Featured Travel Packages</h2>
            <p className="mx-auto mt-3 max-w-xl text-on-surface-variant">
              Browse our curated selection of top-rated tours designed for families, honeymooners, and adventurers.
            </p>
          </Reveal>

          <Reveal delay={80} className="mb-10 flex flex-wrap justify-center gap-4">
            {['All Destinations', 'Family Trips', 'Honeymoon', 'Adventure', 'Budget Friendly'].map((filter, index) => (
              <button
                key={filter}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition hover:-translate-y-0.5 ${
                  index === 0 ? 'bg-primary text-white' : 'border border-outline-variant bg-white text-on-surface hover:border-primary'
                }`}
              >
                {index === 0 ? <Filter size={15} /> : null}
                {filter}
              </button>
            ))}
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredPackages.map((travelPackage, index) => (
              <Reveal key={travelPackage.title} delay={index * 90}>
                <article className="package-card group overflow-hidden rounded-2xl border border-outline-variant/30 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative h-56 overflow-hidden">
                    <img src={travelPackage.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    {travelPackage.badge ? (
                      <span className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white ${index === 2 ? 'bg-tertiary' : 'bg-secondary-container'}`}>
                        {travelPackage.badge}
                      </span>
                    ) : null}
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <h3 className="font-heading text-headline-sm text-primary">{travelPackage.title}</h3>
                      <span className="flex items-center gap-1 text-on-tertiary-container">
                        <Star className="fill-current" size={14} />
                        <span className="text-xs font-bold">{travelPackage.rating}</span>
                      </span>
                    </div>
                    <p className="mb-4 flex items-center gap-2 text-xs text-slate-500">
                      <CalendarDays size={14} />
                      {travelPackage.duration}
                    </p>
                    <ul className="mb-6 space-y-2">
                      {travelPackage.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-on-surface-variant">
                          <CheckCircle2 className="text-green-600" size={15} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <p className="text-[10px] font-bold uppercase text-slate-400">Starting from</p>
                        <p className="font-heading text-headline-sm font-extrabold text-primary">
                          {travelPackage.price}
                          <span className="text-xs font-normal text-slate-500">/person</span>
                        </p>
                      </div>
                      <Link to="/contact" className="rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white transition hover:brightness-110">
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-shell grid grid-cols-2 gap-8 md:grid-cols-4">
          {trustItems.map(({ title, body, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 70} className="text-center">
              <article className="group">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-primary transition group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-white">
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-heading font-bold text-primary">{title}</h3>
                <p className="text-xs text-on-surface-variant">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-16 lg:py-24">
        <div className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="container-shell relative z-10 grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <InquiryForm title="Let's Plan Your Journey" defaultService="Tour Packages" formType="packages" />
          </Reveal>
          <Reveal delay={120} className="rounded-3xl border border-primary/10 bg-primary/5 p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white ring-4 ring-white">
                AS
              </div>
              <div>
                <h3 className="font-heading font-bold text-primary">Ananya Sharma</h3>
                <div className="flex text-on-tertiary-container">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="fill-current" size={14} />)}
                </div>
              </div>
            </div>
            <p className="italic leading-relaxed text-on-surface-variant">
              GK Immigration organized our honeymoon trip to Thailand and it was flawless. High-conversion team indeed!
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary px-6 py-20 text-center text-white">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1589519160732-576f165b9aad?auto=format&fit=crop&q=80&w=1800" alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <Reveal className="relative z-10 mx-auto max-w-3xl">
          <Sparkles className="mx-auto mb-4 text-secondary-fixed" size={34} aria-hidden="true" />
          <h2 className="font-heading text-headline-lg">Plan Your Perfect Trip</h2>
          <p className="mt-4 text-blue-100">Ready to explore? Connect with our experts today and get a personalized itinerary for your dream destination.</p>
          <div className="mt-10 flex flex-col justify-center gap-4 md:flex-row">
            <Link to="/contact" className="cta-button rounded-full px-10 py-4">
              Get Free Quote
            </Link>
            <a href={OFFICE.whatsappUrl} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-10 py-4 font-heading font-bold text-white transition hover:-translate-y-0.5 hover:brightness-110">
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function SearchField({ label, value, icon: Icon, noDivider = false }) {
  return (
    <label className={`flex w-full flex-1 items-center gap-3 px-6 py-3 ${noDivider ? '' : 'border-b border-slate-200 md:border-b-0 md:border-r'}`}>
      <Icon className="text-primary" size={20} aria-hidden="true" />
      <span className="flex-1 text-left">
        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</span>
        <span className="font-heading text-sm font-semibold">{value}</span>
      </span>
    </label>
  );
}
