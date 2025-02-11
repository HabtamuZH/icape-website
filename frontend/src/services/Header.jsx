import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import headerBg from "./../../public/images/image4.jpg";
import services from "../data/serviceDescription";

const Header = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      duration: 800,
      origin: "bottom",
      distance: "50px",
      delay: 200,
      easing: "ease-in-out",
    });

    services.forEach((_, index) => {
      ScrollReveal().reveal(`.reveal-${index}`, {
        duration: 800,
        origin: "bottom",
        distance: "50px",
        delay: 200 + index * 200,
        easing: "ease-in-out",
      });
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <img
          src={headerBg}
          alt="Architecture Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Heading with ScrollReveal */}
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center mt-24 reveal">
          Our Services
        </h1>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-32">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-[#1b2944] rounded-lg shadow-lg p-6 flex flex-col items-center transform hover:scale-105 reveal-${index}`}
            >
              {/* Optional Icon */}
              {service.icon && (
                <span className=" p-1 rounded-[50%] inline">
                  <img
                    src={service.icon}
                    alt={`${service.title} Icon`}
                    className="w-12 h-12 mb-4"
                  />
                </span>
              )}
              <h2 className="text-xl font-semibold mb-2 text-gray-200 text-center ">
                {service.title}
              </h2>
              <p className="text-gray-100 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
