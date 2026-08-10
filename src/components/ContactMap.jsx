import { useState } from "react";
import { ExternalLink, Navigation } from "lucide-react";
import { OFFICE } from "../utils/constants.js";

const OFFICES = [
  {
    id: "india",
    country: "India",
    label: "Head Office (India)",
    flag: "https://flagcdn.com/w40/in.png",
    address: OFFICE.address,
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.1668514903813!2d76.04051187594365!3d30.265570574812962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910497c496b0805%3A0x11eae94176bda874!2sGK%20IMMIGRATIONS!5e1!3m2!1sen!2sin!4v1786019768047!5m2!1sen!2sin",
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(OFFICE.address)}`,
  },
  {
    id: "canada",
    country: "Canada",
    label: "Canada Office",
    flag: "https://flagcdn.com/w40/ca.png",
    address: "25 Telegram Mews, Toronto, ON M5V 3Z1, Canada",
    embedUrl: `https://maps.google.com/maps?q=${encodeURIComponent("25 Telegram Mews, Toronto, ON M5V 3Z1, Canada")}&t=&z=15&ie=UTF8&iwloc=&output=embed`,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("25 Telegram Mews, Toronto, ON M5V 3Z1, Canada")}`,
  },
  {
    id: "australia",
    country: "Australia",
    label: "Australia Office",
    flag: "https://flagcdn.com/w40/au.png",
    address: "Thornhill Park VIC 3335, Australia",
    embedUrl: `https://maps.google.com/maps?q=${encodeURIComponent("Thornhill Park VIC 3335, Australia")}&t=&z=14&ie=UTF8&iwloc=&output=embed`,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Thornhill Park VIC 3335, Australia")}`,
  },
];

export function ContactMap() {
  const [activeOffice, setActiveOffice] = useState(OFFICES[0]);

  return (
    <section
      aria-labelledby="map-title"
      className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-premium"
    >
      {/* Header section with active office & directions button */}
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-4 items-start sm:items-center">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-primary">
            <Navigation size={22} aria-hidden="true" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h2
                id="map-title"
                className="font-heading text-headline-sm text-primary"
              >
                Visit Our Offices
              </h2>
            </div>
            <div className="mt-1.5 flex flex-wrap items-center gap-2">
              {OFFICES.map((office) => (
                <button
                  key={office.id}
                  onClick={() => setActiveOffice(office)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition ${
                    activeOffice.id === office.id
                      ? "bg-primary text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <img
                    src={office.flag}
                    alt={`${office.country} flag`}
                    className="h-3 w-4 rounded-xs object-cover"
                  />
                  {office.country}
                </button>
              ))}
            </div>
          </div>
        </div>

        <a
          href={activeOffice.directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="cta-button shrink-0 px-5 py-2.5 text-sm"
        >
          Get Directions ({activeOffice.country})
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>

      {/* Google Map iframe */}
      <iframe
        title={`Google Map showing ${activeOffice.label}`}
        src={activeOffice.embedUrl}
        className="map-frame h-[380px] w-full border-0 lg:h-[450px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />

      {/* Grid of all office addresses with Get Directions */}
      <div className="px-6 py-6 md:py-8 md:px-12 bg-slate-50/50 border-t border-slate-100">
        <h3 className="mb-4 font-heading text-title-md font-bold text-primary">
          Our Global Locations
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {OFFICES.map((office) => {
            const isActive = activeOffice.id === office.id;
            return (
              <div
                key={office.id}
                className={`flex flex-col justify-between rounded-2xl border p-5 transition ${
                  isActive
                    ? "border-primary/50 bg-white shadow-md ring-1 ring-primary/20"
                    : "border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <img
                        src={office.flag}
                        alt={`${office.country} flag`}
                        className="h-4 w-5.5 rounded-xs border border-slate-200 object-cover shadow-2xs"
                      />
                      <h4 className="font-heading font-bold text-slate-900 text-sm">
                        {office.label}
                      </h4>
                    </div>
                  </div>
                  <p className="text-body-sm text-slate-600 leading-relaxed mb-4">
                    {office.address}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-100 mt-auto">
                  <a
                    href={office.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-dark hover:underline"
                  >
                    Get Directions
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                  {!isActive && (
                    <button
                      onClick={() => setActiveOffice(office)}
                      className="ml-auto text-xs text-slate-500 hover:text-primary transition font-medium"
                    >
                      View on Map
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
