/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";

const CTA = ({ content }) => {
  const ctaRef = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px", // Slightly increased for impact
      duration: 1400, // Smoother, longer animation
      easing: "cubic-bezier(0.4, 0, 0.2, 1)", // Modern easing curve
      reset: false,
    });

    if (ctaRef.current) {
      sr.reveal(ctaRef.current.children, {
        origin: "bottom",
        delay: 200,
        interval: 250, // Slightly increased stagger for elegance
      });
    }
  }, []);

  return (
    <section className="relative w-full py-28 bg-primary text-light overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-accent/50 z-0" />
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-accent/10 rounded-full filter blur-3xl animate-slow-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-tertiary/15 rounded-full filter blur-3xl animate-slow-spin -z-10" />

      <div className="max-w-[80vw] mx-auto px-4 text-center relative z-10">
        <div ref={ctaRef} className="space-y-10">
          {content.map((cta, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-accent mb-6 animate-fadeIn bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent drop-shadow-lg">
                {cta.headline}
              </h2>
              <p className="text-xl md:text-2xl font-body text-secondary/95 mb-8 animate-fadeIn max-w-2xl leading-relaxed">
                {cta.subtext}
              </p>
              <Link
                to={cta.buttonLink}
                className="inline-block px-12 py-5 text-xl font-semibold font-body bg-accent text-dark rounded-xl2 shadow-sharp hover:bg-gradient-to-r hover:from-accent hover:to-tertiary hover:text-light hover:scale-110 hover:shadow-architectural transform transition-all duration-400 ease-in-out focus:outline-none focus:ring-4 focus:ring-accent focus:ring-opacity-50"
              >
                {cta.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
