import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import GradientText from "../common/GraddientText";
import ScrollReveal from "scrollreveal";

const HeroSection = () => {
  const images = [
    "/images/image17.png",
    "/images/image18.png",
    "/images/image19.png",
    "/images/image20.png",
    "/images/image21.png",
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    // Automatic Background Image Transition
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    // Initialize ScrollReveal Animations
    ScrollReveal().reveal(".hero-title", {
      origin: "bottom",
      distance: "80px",
      duration: 1000,
      easing: "ease-in-out",
      opacity:0,
      reset: false,
    });

    ScrollReveal().reveal(".hero-subtitle", {
      origin: "bottom",
      distance: "80px",
      duration: 1000,
      delay: 200,
      opacity:0,
      easing: "ease-in-out",
      reset: false,
    });

    ScrollReveal().reveal(".hero-button", {
      scale: 0.85,
      duration: 800,
      delay: 400,
      opacity:0,
      easing: "ease-in-out",
      reset: false,
    });

    ScrollReveal().reveal(".announcement-banner", {
      origin: "top",
      distance: "50px",
      duration: 800,
      delay: 300,opacity:0,
      easing: "ease-in-out",
      reset: false,
    });

  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center text-left px-8 md:px-16 overflow-hidden"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/60 absolute inset-0"></div> {/* Overlay for better contrast */}
      
      <div className="relative flex items-center justify-center flex-col gap-3 z-10 py-8 px-4 mx-auto max-w-screen-xl text-left lg:py-16 lg:px-12">
        {/* Announcement Banner */}
        <a
          href="#"
          className="announcement-banner inline-flex items-center py-1 px-3 pr-4 mb-7 text-sm text-black bg-accent rounded-full hover:bg-opacity-90 transition duration-300"
          role="alert"
        >
          <span className="text-xs bg-dark rounded-full text-white px-4 py-1.5 mr-3">New</span>
          <span className="text-sm font-medium">ICAPE's latest innovations</span>
          <FaChevronRight className="ml-2 w-5 h-5 text-dark" />
        </a>

        {/* Main Heading */}
        <h1 className="hero-title mb-4 text-4xl tracking-tight leading-none text-light md:text-5xl lg:text-6xl font-bold">
          We Invest in the World’s Potential
        </h1>

        {/* Gradient Text Component */}
        <GradientText
          colors={["#CccA6B", "#D1BFA7", "#C19b6B", "#D1BFA7"]}
          animationSpeed={10}
          showBorder={true}
          className="hero-subtitle text-5xl font-extrabold text-black"
        >
          ICAPE Architectural Design
        </GradientText>

        {/* Subheading */}
        <p className="hero-subtitle mb-8 text-lg font-normal text-center text-gray-300 lg:text-xl sm:px-16 xl:px-48">
          At ICAPE, we focus on innovation, technology, and sustainable design to create architectural masterpieces that stand the test of time.
        </p>

        {/* Call-to-Action Button */}
        <div className="hero-button flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Link
            to="/projects"
            className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-white bg-accent rounded-lg hover:bg-opacity-80 transition duration-300"
          >
            Explore Our Projects
            <FaArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
