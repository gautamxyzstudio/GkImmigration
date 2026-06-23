import { Link } from "react-router-dom";
import { Globe2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { NAV_ITEMS, OFFICE } from "../utils/constants.js";

export function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-slate-50 pb-24 font-body text-sm md:pb-0">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.25fr_1fr_1fr_1fr]">
        <section aria-labelledby="footer-brand">
          <h2
            id="footer-brand"
            className="font-heading text-xl font-black text-primary-container"
          >
            GK Immigration
          </h2>
          <p className="mt-4 max-w-sm text-on-surface-variant">
            Premium immigration and travel services for visas, holidays,
            insurance, and global journey planning.
          </p>
          <address className="mt-6 space-y-3 not-italic text-on-surface-variant">
            <p className="flex gap-2">
              <MapPin
                className="mt-0.5 shrink-0 text-primary"
                size={18}
                aria-hidden="true"
              />
              {OFFICE.address}
            </p>
            <p className="flex gap-2">
              <Phone
                className="mt-0.5 shrink-0 text-primary"
                size={18}
                aria-hidden="true"
              />
              <a href={`tel:${OFFICE.phone}`} className="hover:text-primary">
                {OFFICE.phone}
              </a>
            </p>
            <p className="flex gap-2">
              <Mail
                className="mt-0.5 shrink-0 text-primary"
                size={18}
                aria-hidden="true"
              />
              <a href={`mailto:${OFFICE.email}`} className="hover:text-primary">
                {OFFICE.email}
              </a>
            </p>
          </address>
          <div className="mt-6 flex gap-4 text-outline">
            <a
              href="/"
              className="transition hover:text-primary"
              aria-label="Visit GK Immigration website"
            >
              <Globe2 size={20} />
            </a>
            <a
              href={OFFICE.whatsappUrl}
              className="transition hover:text-primary"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href={`mailto:${OFFICE.email}`}
              className="transition hover:text-primary"
              aria-label="Email GK Immigration"
            >
              <Mail size={20} />
            </a>
          </div>
        </section>
        <section aria-labelledby="footer-links">
          <h2
            id="footer-links"
            className="font-heading text-headline-sm text-primary"
          >
            Quick Links
          </h2>
          <ul className="mt-4 space-y-3 text-on-surface-variant">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="footer-services">
          <h2
            id="footer-services"
            className="font-heading text-headline-sm text-primary"
          >
            Services
          </h2>
          <ul className="mt-4 space-y-3 text-on-surface-variant">
            <li>Tourist and visitor visas</li>
            <li>Study visa guidance</li>
            <li>Domestic and international tours</li>
            <li>Travel insurance consultation</li>
          </ul>
        </section>
        <section aria-labelledby="footer-support">
          <h2
            id="footer-support"
            className="font-heading text-headline-sm text-primary"
          >
            Support
          </h2>
          <ul className="mt-4 space-y-3 text-on-surface-variant">
            <li>Sitemap</li>
            <li>Partner Login</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </section>
      </div>
      <div className="border-t border-outline-variant py-4 text-center text-body-sm text-outline">
        © 2026 GK Immigration. Your Trusted Global Travel Partner.
      </div>
    </footer>
  );
}
