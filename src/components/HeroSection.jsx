import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export function HeroSection({
  title,
  eyebrow,
  description,
  image,
  images,
  imageAlt = "",
  children,
  compact = false,
  interval = 2000,
}) {
  // Build slide items from images prop or single image prop
  const slideImages =
    Array.isArray(images) && images.length > 0
      ? images.map((img) =>
          typeof img === "string" ? { src: img, alt: imageAlt || title } : img,
        )
      : image
        ? [{ src: image, alt: imageAlt || title }]
        : [];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slideImages.length <= 1) return;
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [slideImages.length, interval]);

  return (
    <section
      className={`relative flex items-center overflow-hidden ${compact ? "min-h-[480px]" : "min-h-[640px]"}`}
    >
      {/* Background Auto Image Slider */}
      <div className="absolute inset-0 z-0">
        {slideImages.map((img, index) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt || imageAlt || title}
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
      {slideImages.length > 1 ? (
        <div className="absolute bottom-6 right-6 z-20 flex gap-2">
          {slideImages.map((_, index) => (
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
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/25" />
      <div className="container-shell relative z-10 py-16 text-white lg:py-24">
        <div className="reveal-up max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 font-body text-label-md uppercase tracking-widest text-secondary-fixed">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-[56px]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-blue-50/90">
            {description}
          </p>
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
  image: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
      }),
    ]),
  ),
  imageAlt: PropTypes.string,
  children: PropTypes.node,
  compact: PropTypes.bool,
  interval: PropTypes.number,
};
