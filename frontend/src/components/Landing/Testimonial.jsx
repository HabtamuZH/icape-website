import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Martin Escobar",
      title: "Founder of Meta",
      quote:
        "We had the privilege of working with this incredible team, and their expertise brought our vision to life with precision and creativity. Highly recommend!"
    },
    {
      name: "Simon Andrew",
      title: "Software Engineer",
      quote:
        "Their innovative solutions and commitment to excellence exceeded our expectations. Truly a pleasure to collaborate with such a professional team."
    },
    {
      name: "Michael Worin",
      title: "Product Designer",
      quote:
        "This team helped us transform our ideas into a tangible product. Their attention to detail and creative approach made all the difference!"
    }
  ];

  useEffect(() => {
    // ScrollReveal animations
    ScrollReveal().reveal(".testimonial-card", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      reset: false,
    });

    ScrollReveal().reveal(".testimonial-heading", {
      origin: "top",
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <section className="relative py-14 bg-primary/10">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="testimonial-heading text-secondary text-3xl font-bold sm:text-4xl">
            Hear from our customers
          </h3>
          <p className="mt-3 text-secondary text-lg">
            Our clients trust us with their visions, and we deliver with
            excellence. Here's what they have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12">
          <ul className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li key={idx} className="testimonial-card bg-white rounded-xl border shadow-lg transition-all hover:shadow-2xl">
                <div className="p-6">
                  <FaQuoteLeft className="w-10 h-10 text-accent" />
                  <blockquote>
                    <p className="text-gray-800 text-lg font-medium mt-4">
                      {item.quote}
                    </p>
                  </blockquote>
                </div>
                <div className="flex items-center gap-x-4 p-4 mt-6 bg-secondary/10 rounded-b-xl">
                  <FaUserCircle className="w-14 h-14 text-secondary" />
                  <div>
                    <span className="block text-gray-900 font-semibold">
                      {item.name}
                    </span>
                    <span className="block text-secondary text-sm mt-0.5">
                      {item.title}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute top-0 w-full h-full"></div>
    </section>
  );
};

export default Testimonials;
