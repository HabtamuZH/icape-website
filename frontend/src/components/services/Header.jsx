import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import headerBg from "./../../../public/images/image4.jpg";
import services from "../../data/serviceDescription";

const Header = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      reset: true, // Prevents re-animation on every scroll
      duration: 800,
      origin: "bottom",
      distance: "50px",
      easing: "ease-out",
    });

    sr.reveal(".reveal", { delay: 200 });
    services.forEach((_, index) => {
      sr.reveal(`.reveal-${index}`, { delay: 300 + index * 150 }); // Staggered delays
    });

    return () => sr.destroy(); // Cleanup
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-secondary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={headerBg}
          alt="Architecture Background"
          className="w-full h-full object-cover"
          loading="lazy" // Improves performance
        />
        <div className="absolute inset-0 bg-dark/60" /> {/* Dark overlay for contrast */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Heading */}
        <h1 className="reveal text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-light text-center mt-20 lg:mt-28 mb-12 tracking-tight">
          Our Expertise in Action
        </h1>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`reveal-${index} bg-light rounded-xl shadow-lg p-6 flex flex-col items-center border border-border transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              {/* Icon */}
              {service.icon && (
                <div className="mb-4 p-2 bg-accent/20 rounded-full">
                  <img
                    src={service.icon}
                    alt={`${service.title} Icon`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              )}
              {/* Title */}
              <h2 className="text-xl lg:text-2xl font-heading font-semibold text-primary mb-3 text-center">
                {service.title}
              </h2>
              {/* Description */}
              <p className="text-primary/80 text-sm lg:text-base font-body text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;