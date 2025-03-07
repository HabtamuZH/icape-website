/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

const Testimonials = ({ testimonials }) => {
  const headingRef = useRef(null);
  const testimonialsRef = useRef(null);

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
    if (testimonialsRef.current) {
      sr.reveal(testimonialsRef.current.children, {
        origin: "bottom",
        delay: 400,
        interval: 200, // Staggered reveal for each testimonial
      });
    }
  }, []);

  return (
    <section className="w-full py-16 bg-secondary text-dark">
      <div className="max-w-[80vw] mx-auto px-4">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-3xl md:text-4xl font-heading text-primary text-center mb-12 animate-fadeIn drop-shadow-md"
        >
          What Our Clients Say
        </h2>

        {/* Testimonials Grid */}
        <div
          ref={testimonialsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-light p-6 rounded-xl2 shadow-architectural hover:shadow-sharp transition-all duration-300 ease-in-out flex flex-col  "
            >
              <p className="text-base font-body text-dark italic mb-4 leading-relaxed text-center">
                &quot;{testimonial.quote}&quot;
              </p>
              <h3 className="text-lg font-heading text-primary">
                {testimonial.client}
              </h3>
              <p className="text-sm font-body text-accent">
                {testimonial.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
