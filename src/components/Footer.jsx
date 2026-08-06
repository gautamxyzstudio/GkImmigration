import { Link } from "react-router-dom";
import { Globe2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaThreads,
  FaXTwitter,
  FaYoutube,
  FaSnapchat,
} from "react-icons/fa6";
import { NAV_ITEMS, OFFICE } from "../utils/constants.js";

function SharechatIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="365.7 401.8 235 234.9"
      className={className}
      aria-hidden="true"
    >
      <g id="Layer_2">
        <g id="Layer_1-2">
          <path
            fill="#494949"
            d="M600.7,519.2c0-32.8-47.5-87.2-87.9-108.5c-10.7-5.6-20.9-9-29.6-9c-10.5,0-23.3,4.9-36.4,12.8c-12.8,7.7-26,18.4-37.9,30.3c-12,12.1-22.8,25.4-30.6,38.3c-7.8,12.9-12.6,25.6-12.6,36c0,41.6,75.9,117.5,117.5,117.5c10.5,0,23.2-4.9,36.3-12.8c12.8-7.7,26.1-18.5,38-30.4c12-11.9,22.8-25.3,30.5-38.2C595.9,542.3,600.7,529.7,600.7,519.2z"
          />
          <path
            fill="#40C9FF"
            d="M521.7,480.7c-12.1-12.7-24.9-24.8-38.4-36c-11.3-9.3-22.9-17.6-34.5-24.1c-12.1,7.3-24.5,17.3-35.8,28.6l70.1,70.1L521.7,480.7z"
          />
          <path
            fill="#9661BA"
            d="M511.1,416.9c-10.1-5.3-19.7-8.5-27.9-8.5c-9.9,0-21.9,4.6-34.3,12.1c11.6,6.5,23.2,14.9,34.5,24.1L511.1,416.9z"
          />
          <path
            fill="#FFA233"
            d="M519.7,555.8l-36.5-36.5l-70.1-70.1c-11.4,11.3-21.5,24-28.9,36.2c23.4,40.5,68,81.1,99.3,106.6L519.7,555.8z"
          />
          <path
            fill="#FF5A7E"
            d="M517.4,618c-2.8-2-16.2-11.6-33.9-26.1c-31.2-25.5-75.8-66-99.3-106.6c-7.3,12.2-11.8,24.1-11.8,33.9c0,39.2,71.6,110.8,110.8,110.8C493.1,630,505,625.4,517.4,618z"
          />
          <path
            fill="#FFD91D"
            d="M594,519.2c0-30.9-44.8-82.2-82.8-102.3l-27.8,27.8c13.5,11.2,26.3,23.2,38.4,36l-38.5,38.5l36.5,36.5L483.5,592c17.7,14.4,31.1,24,33.9,26.1c12.1-7.3,24.5-17.4,35.9-28.7c11.3-11.3,21.5-23.9,28.8-36.1C589.5,541,594,529.1,594,519.2z"
          />
        </g>
      </g>
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: OFFICE.socials?.facebook || "https://facebook.com/gkimmigrations",
    icon: FaFacebook,
    hoverColor: "hover:text-[#1877F2] hover:bg-[#1877F2]/10",
  },
  {
    name: "Instagram",
    href:
      OFFICE.socials?.instagram || "https://www.instagram.com/gkimmigrations/",
    icon: FaInstagram,
    hoverColor: "hover:text-[#E4405F] hover:bg-[#E4405F]/10",
  },
  {
    name: "Threads",
    href: OFFICE.socials?.threads || "https://www.threads.net/@gkimmigrations",
    icon: FaThreads,
    hoverColor: "hover:text-slate-900 hover:bg-slate-200",
  },
  {
    name: "Twitter X",
    href: OFFICE.socials?.twitter || "https://x.com/gkimmigrations",
    icon: FaXTwitter,
    hoverColor: "hover:text-slate-900 hover:bg-slate-200",
  },
  {
    name: "YouTube",
    href: OFFICE.socials?.youtube || "https://youtube.com/@gkimmigrations",
    icon: FaYoutube,
    hoverColor: "hover:text-[#FF0000] hover:bg-[#FF0000]/10",
  },
  {
    name: "ShareChat",
    href:
      OFFICE.socials?.sharechat ||
      "https://sharechat.com/profile/gkimmigrations",
    icon: SharechatIcon,
    hoverColor: "hover:text-[#00B4D8] hover:bg-[#00B4D8]/10",
  },
  {
    name: "Snapchat",
    href: OFFICE.socials?.snapchat || "https://snapchat.com/add/gkimmigrations",
    icon: FaSnapchat,
    hoverColor: "hover:text-[#EAB308] hover:bg-[#EAB308]/10",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-slate-50 pb-24 font-body text-sm md:pb-0">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.25fr_1fr_1fr_1fr]">
        <section aria-labelledby="footer-brand">
          <Link
            to="/"
            id="footer-brand"
            className="inline-block rounded-xl bg-primary-container p-2.5 shadow-md"
          >
            <img
              src="/logo.png"
              alt="GK Immigrations Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 max-w-sm text-on-surface-variant">
            Premium immigrations and travel services for visas, holidays,
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
          <div className="mt-6 flex flex-wrap items-center gap-2 text-outline">
            <a
              href="/"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-outline-variant/60 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:text-primary hover:shadow-sm"
              aria-label="Visit GK Immigrations website"
            >
              <Globe2 size={18} />
            </a>
            <a
              href={OFFICE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-outline-variant/60 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:text-[#25D366] hover:bg-[#25D366]/10 hover:shadow-sm"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            {SOCIAL_LINKS.slice(0, 3).map(
              ({ name, href, icon: Icon, hoverColor }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border border-outline-variant/60 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${hoverColor}`}
                  aria-label={`Follow GK Immigrations on ${name}`}
                >
                  <Icon size={18} />
                </a>
              ),
            )}
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-outline">
            {SOCIAL_LINKS.slice(3, 7).map(
              ({ name, href, icon: Icon, hoverColor }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border border-outline-variant/60 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${hoverColor}`}
                  aria-label={`Follow GK Immigrations on ${name}`}
                >
                  <Icon size={18} />
                </a>
              ),
            )}
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
        <div className="container-shell flex flex-row justify-between items-center">
          <span>
            {" "}
            © {new Date().getFullYear()} GK Immigrations. Your Trusted Global
            Travel Partner.
          </span>
          <Link
            to="https://www.xyz.studio/"
            className="hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Design & Develop by{" "}
            <strong className="text-primary font-heading">XYZ Studio</strong>
          </Link>
        </div>
      </div>
    </footer>
  );
}
