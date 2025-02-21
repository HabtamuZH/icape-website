import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
import img from "/bg.jpg";

const HeroSection = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      reset: false,
      distance: "60px",
      duration: 1000,
      easing: "ease-out",
    });

    sr.reveal(".hero-title", { origin: "bottom", delay: 100 });
    sr.reveal(".hero-subtitle", { origin: "bottom", delay: 300 });
    sr.reveal(".hero-button", { scale: 0.9, delay: 500 });
    sr.reveal(".announcement-banner", { origin: "top", delay: 200 });
  }, []);

  return (
    <section
      className='relative min-h-screen flex items-center justify-center text-left px-4 sm:px-8 md:px-12 overflow-hidden bg-secondary'
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-dark/60' />

      {/* Content Container */}
      <div className='relative z-10 max-w-6xl mx-auto py-12 lg:py-20 text-center'>
        {/* Announcement Banner */}
        <Link
          to='/projects/completed'
          className='announcement-banner inline-flex items-center py-2 px-4 mb-8 text-sm font-body text-primary bg-accent rounded-full hover:bg-accent/90 transition duration-300 shadow-md'
        >
          <span className='text-xs bg-dark text-light rounded-full px-3 py-1 mr-3 font-medium'>
            New
          </span>
          <span className='text-sm font-medium'>
            Discover ICAPE's Latest Innovations
          </span>
          <FaChevronRight className='ml-3 w-4 h-4 text-dark' />
        </Link>

        {/* Main Heading */}
        <h1 className='hero-title mb-4 text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-light tracking-tight leading-tight'>
          Crafting the Future of Architecture
        </h1>
        <h2 className='hero-title mb-6 text-2xl sm:text-3xl lg:text-4xl font-heading text-accent font-semibold tracking-wide'>
          Architecture • Planning • Engineering
        </h2>

        {/* Subheading */}
        <p className='hero-subtitle mb-8 text-base sm:text-lg lg:text-xl font-body text-light/80 max-w-3xl mx-auto leading-relaxed'>
          At ICAPE, we blend cutting-edge technology with visionary design to
          create architectural masterpieces that inspire, endure, and harmonize
          with the environment.
        </p>

        {/* Call-to-Action Button */}
        <div className='hero-button flex justify-center'>
          <Link
            to='/services'
            className='inline-flex items-center py-3 px-8 text-base font-body font-medium text-primary bg-accent rounded-lg border border-border hover:bg-accent/80 hover:border-accent transition-all duration-300 shadow-lg hover:shadow-xl'
          >
            Explore Our Services
            <FaArrowRight className='ml-3 w-5 h-5' />
          </Link>
        </div>
      </div>
    </section>
  )
};

export default HeroSection;