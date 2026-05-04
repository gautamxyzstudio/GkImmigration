import PropTypes from 'prop-types';

export function HeroSection({ title, eyebrow, description, image, imageAlt, children, compact = false }) {
  return (
    <section className={`relative flex items-center overflow-hidden ${compact ? 'min-h-[480px]' : 'min-h-[640px]'}`}>
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover motion-safe:animate-[reveal-up_1200ms_ease-out_both]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/25" />
      <div className="container-shell relative z-10 py-16 text-white lg:py-24">
        <div className="reveal-up max-w-3xl">
          {eyebrow ? <p className="mb-3 font-body text-label-md uppercase tracking-widest text-secondary-fixed">{eyebrow}</p> : null}
          <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-[56px]">{title}</h1>
          <p className="mt-6 max-w-2xl text-body-lg text-blue-50/90">{description}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  eyebrow: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  children: PropTypes.node,
  compact: PropTypes.bool,
};
