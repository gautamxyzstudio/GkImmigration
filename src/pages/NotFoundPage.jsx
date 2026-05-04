import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo.jsx';

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found | GK Immigration" description="The requested GK Immigration page could not be found." />
      <section className="container-shell grid min-h-[60vh] place-items-center py-20 text-center">
        <div className="max-w-xl">
          <p className="font-heading text-label-md uppercase tracking-widest text-secondary-container">404</p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-primary">This page is not available</h1>
          <p className="mt-4 text-on-surface-variant">
            The link may be outdated, but the main travel and immigration services are still ready for you.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-lg bg-secondary-container px-6 py-3 font-heading font-semibold text-white transition hover:brightness-110"
          >
            Return Home
          </Link>
        </div>
      </section>
    </>
  );
}
