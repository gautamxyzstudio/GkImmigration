import { useMemo } from 'react';
import { ExternalLink, Navigation } from 'lucide-react';
import { OFFICE } from '../utils/constants.js';

export function ContactMap() {
  const { embedUrl, directionsUrl } = useMemo(() => {
    const query = encodeURIComponent(OFFICE.address);
    return {
      embedUrl: `https://www.google.com/maps?q=${query}&output=embed`,
      directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${query}`,
    };
  }, []);

  return (
    <section aria-labelledby="map-title" className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-premium">
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-primary">
            <Navigation size={22} aria-hidden="true" />
          </span>
          <div>
            <h2 id="map-title" className="font-heading text-headline-sm text-primary">
              Visit Our Office
            </h2>
            <p className="mt-1 text-body-sm text-on-surface-variant">{OFFICE.address}</p>
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
        title="Google Map showing GK Immigration office"
        src={embedUrl}
        className="map-frame h-[420px] w-full border-0 lg:h-[500px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </section>
  );
}
