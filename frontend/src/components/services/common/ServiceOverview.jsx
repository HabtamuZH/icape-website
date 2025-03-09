/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

const ServiceOverview = ({ content, img }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px", // Increased for a more dramatic reveal
      duration: 1400, // Smoother animation
      easing: "cubic-bezier(0.4, 0, 0.2, 1)", // Modern easing
      reset: false, // One-time reveal
    });

    if (sectionRef.current) {
      sr.reveal(sectionRef.current.children, {
        origin: "bottom",
        delay: 200,
        interval: 250, // Slightly increased stagger
      });
    }
    if (imageRef.current) {
      sr.reveal(imageRef.current, { origin: "right", delay: 500 });
    }
  }, []);

  return (
    <section className="relative w-full py-24 lg:py-32 bg-secondary text-dark overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-accent/10 z-0" />

      <div className="max-w-[85vw] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
        {/* Text Content */}
        <div ref={sectionRef} className="lg:w-2/3 pr-0 lg:pr-2 space-y-8">
          {content.map(({ title, subtitle, description }, index) => (
            <div key={index} className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent drop-shadow-md animate-fadeIn">
                {title}
              </h2>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-body text-accent animate-fadeIn">
                {subtitle}
              </h3>

              {description.map((desc, i) => (
                <p
                  key={i}
                  className="text-lg md:text-lg font-body text-dark/90 leading-relaxed max-w-lg animate-fadeIn"
                >
                  {desc}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Image */}
        <div
          ref={imageRef}
          className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center"
        >
          <div className="relative group max-w-md lg:max-w-lg">
            <img
              src={img}
              alt={`${content[0]?.title} Example`}
              className="w-full h-[400px] object-cover rounded-xl2 shadow-architectural group-hover:shadow-sharp transition-all duration-500 ease-in-out transform group-hover:scale-105"
              loading="lazy"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-dark bg-opacity-0 group-hover:bg-opacity-20 rounded-xl2 transition-all duration-500 ease-in-out" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
