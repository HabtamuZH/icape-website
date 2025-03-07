/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';


const ServiceOverview = ({content,img}) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  // ScrollReveal Setup
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });

    if (sectionRef.current) {
      sr.reveal(sectionRef.current.children, {
        origin: 'bottom',
        delay: 200,
        interval: 200, // Staggered reveal for text elements
      });
    }
    if (imageRef.current) {
      sr.reveal(imageRef.current, { origin: 'right', delay: 600 });
    }
  }, []);

  return (
    <section className="w-full py-18 bg-secondary text-dark">
      <div className="max-w-[80vw] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div
          ref={sectionRef}
          className="lg:w-1/2 pr-0 lg:pr-12 space-y-6"
        >
          {content.map((item, index) => (
            <div key={index}>
              <h2 className="text-3xl md:text-4xl font-heading text-primary mb-4 animate-fadeIn">
                {item.title}
              </h2>
              <h3 className="text-xl md:text-2xl font-body text-accent mb-4 animate-fadeIn">
                {item.subtitle}
              </h3>
              <p className="text-base md:text-lg font-body text-dark leading-relaxed animate-fadeIn">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div
          ref={imageRef}
          className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
        >
          <img
            src={img}
            alt="Architectural Design Example"
            className="w-full max-w-md h-auto object-cover rounded-xl2 shadow-architectural hover:shadow-sharp transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;