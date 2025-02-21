import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import GradientText from "../common/GraddientText";
import ScrollReveal from "scrollreveal";
import img from "/bg.jpg";

const HeroSection = () => {
  useEffect(() => {
    // Initialize ScrollReveal Animations
    ScrollReveal().reveal(".hero-title", {
      origin: "bottom",
      distance: "80px",
      duration: 1000,
      easing: "ease-in-out",
      opacity: 0,
      reset: false,
    });

    ScrollReveal().reveal(".hero-subtitle", {
      origin: "bottom",
      distance: "80px",
      duration: 1000,
      delay: 200,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
    });

    ScrollReveal().reveal(".hero-button", {
      scale: 0.85,
      duration: 800,
      delay: 400,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
    });

    ScrollReveal().reveal(".announcement-banner", {
      origin: "top",
      distance: "50px",
      duration: 800,
      delay: 300,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center text-left px-8 md:px-12 overflow-hidden"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative flex items-center justify-center flex-col gap-3 z-10 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        {/* Announcement Banner */}
        <Link
          to="/projects/completed"
          className="announcement-banner inline-flex lg:mt-10 items-center py-1 px-3 pr-4 text-sm text-black bg-accent rounded-full hover:bg-opacity-90 transition duration-300"
          role="alert"
        >
          <span className="text-xs bg-dark rounded-full text-white px-2 py-1 md:px-4 md:py-1.5 mr-3">
            New
          </span>
          <span className="text-xs md:text-sm font-medium">
            ICAPE's latest innovations
          </span>
          <FaChevronRight className="ml-2 md:w-5 md:h-5 h-3 w-3 text-dark" />
        </Link>

        {/* Main Heading */}
        <h1 className="hero-title md:mb-4 text-3xl tracking-tight leading-none text-light lg:text-6xl font-bold">
          We Invest in the World’s Potential
        </h1>
        <h1 className="hero-title md:mb-4 text-2xl tracking-tight leading-none text-accent lg:text-5xl font-bold sm:border rounded-lg px-4 py-3">
          Architecture + Planning + Engineering
        </h1>

        {/* Gradient Text Component
        <GradientText
          colors={["#CccA6B", "#C19b6B", "#D1BFA7"]}
          animationSpeed={10}
          showBorder={true}
          className="hero-subtitle  lg:text-5xl sm:text-3xl font-extrabold "
        >
          ICAPE Architectural Design
        </GradientText> */}

        {/* Subheading */}
        <p className="hero-subtitle md:mb-8 mb-4 text-xs sm:text-sm  md:text-lg font-normal text-center text-gray-300 lg:text-xl sm:px-16 xl:px-48">
          At ICAPE, we focus on innovation, technology, and sustainable design
          to create architectural masterpieces that stand the test of time.
        </p>

        {/* Call-to-Action Button */}
        <div className="hero-button flex flex-col mb-4 md:mb-8 lg:mb-16 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Link
            to="/services"
            className="inline-flex justify-center items-center py-3 px-6 text-sm md:text-base font-medium text-black bg-accent rounded-lg hover:bg-opacity-80 transition duration-300"
          >
            Explore Our Services
            <FaArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
