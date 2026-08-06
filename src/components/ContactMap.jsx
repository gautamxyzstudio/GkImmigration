import { useMemo } from "react";
import { ExternalLink, Navigation } from "lucide-react";
import { OFFICE } from "../utils/constants.js";

export function ContactMap() {
  const { embedUrl, directionsUrl } = useMemo(() => {
    const query = encodeURIComponent(OFFICE.address);
    return {
      embedUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.1668514903813!2d76.04051187594365!3d30.265570574812962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910497c496b0805%3A0x11eae94176bda874!2sGK%20IMMIGRATIONS!5e1!3m2!1sen!2sin!4v1786019768047!5m2!1sen!2sin`,
      directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${query}`,
    };
  }, []);

  return (
    <section
      aria-labelledby="map-title"
      className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-premium"
    >
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-primary">
            <Navigation size={22} aria-hidden="true" />
          </span>
          <div>
            <h2
              id="map-title"
              className="font-heading text-headline-sm text-primary"
            >
              Visit Our Office
            </h2>
            <p className="mt-1 text-body-sm text-on-surface-variant">
              {OFFICE.address}
            </p>
          </div>
        </div>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="cta-button shrink-0 px-5 py-2.5 text-sm"
        >
          Get Directions
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
      <iframe
        title="Google Map showing GK Immigrations office"
        src={embedUrl}
        className="map-frame h-[420px] w-full border-0 lg:h-[500px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </section>
  );
}
