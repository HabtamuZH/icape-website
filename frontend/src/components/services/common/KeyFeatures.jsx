/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

const Features = ({ features, title }) => {
  const headingRef = useRef(null);
  const featuresRef = useRef(null);

  // ScrollReveal Setup
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1200,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: false,
    });

    if (headingRef.current) {
      sr.reveal(headingRef.current, { origin: "bottom", delay: 200 });
    }
    if (featuresRef.current) {
      sr.reveal(featuresRef.current.children, {
        origin: "bottom",
        delay: 400,
        interval: 200,
      });
    }
  }, []);

  return (
    <section className="w-full py-20 bg-light text-dark">
      <div className="max-w-[80vw] mx-auto px-4">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-3xl md:text-4xl font-heading text-primary text-center mb-12 animate-fadeIn drop-shadow-md"
        >
          {title}
        </h2>

        {/* Features Grid */}
        <div
          ref={featuresRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded-xl2 shadow-architectural hover:shadow-sharp hover:scale-105 transition-all duration-300 ease-in-out flex flex-col items-center text-center"
            >
              <feature.icon
                size={40}
                className="text-accent mb-4 animate-fadeIn"
              />
              <h3 className="text-xl font-heading text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-base font-body text-dark leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
