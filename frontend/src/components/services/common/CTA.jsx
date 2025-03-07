/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";

const CTA = ({ content }) => {
  const ctaRef = useRef(null);

  // ScrollReveal Setup
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1200,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: false,
    });

    if (ctaRef.current) {
      sr.reveal(ctaRef.current.children, {
        origin: "bottom",
        delay: 200,
        interval: 200, // Staggered reveal for headline, subtext, and button
      });
    }
  }, []);

  return (
    <section className="w-full py-24 bg-primary text-light">
      <div className="max-w-[80vw] mx-auto px-4 text-center">
        <div ref={ctaRef} className="space-y-8">
          {content.map((cta, index) => (
            <div key={index}>
              <h2 className="text-3xl md:text-4xl font-heading text-accent mb-4 animate-fadeIn drop-shadow-md">
                {cta.headline}
              </h2>
              <p className="text-lg md:text-xl font-body text-secondary mb-6 animate-fadeIn">
                {cta.subtext}
              </p>
              <Link
                to={cta.buttonLink}
                className="inline-block px-10 py-4 text-lg font-semibold font-body bg-accent text-dark rounded-xl2 shadow-sharp hover:bg-tertiary hover:text-light hover:scale-105 hover:shadow-architectural transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-border focus:ring-opacity-50"
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
