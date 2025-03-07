/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";
import services from "../../../data/services/services";

const RelatedServices = ({ title }) => {
  const relatedServices = services.filter((service) => service.title !== title);

  const headingRef = useRef(null);
  const servicesRef = useRef(null);

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
    if (servicesRef.current) {
      sr.reveal(servicesRef.current.children, {
        origin: "bottom",
        delay: 400,
        interval: 200, // Staggered reveal for each service card
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
          Explore More of Our Services
        </h2>

        {/* Services Grid */}
        <div
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {relatedServices.map(({ title, link, description, icon }, index) => (
            <Link
              key={index}
              to={`${link}`.trim()}
              className="group bg-secondary p-6 rounded-xl2 shadow-architectural hover:shadow-sharp hover:scale-105 transition-all duration-300 ease-in-out flex flex-col items-center text-center"
            >
              {icon && (
                <div className="mb-4 p-2 bg-accent/20 rounded-full">
                  <img
                    src={icon}
                    alt={`${title} Icon`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              )}
              <h3 className="text-xl font-heading text-primary mb-2">
                {title}
              </h3>
              <p className="text-base font-body text-dark leading-relaxed">
                {description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
