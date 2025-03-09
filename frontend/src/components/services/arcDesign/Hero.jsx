import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";
import archDesignImg from '../../../assets/photo0.jpg'

const Hero = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonRef = useRef(null);

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
    if (subheadingRef.current) {
      sr.reveal(subheadingRef.current, { origin: "bottom", delay: 600 });
    }
    if (buttonRef.current) {
      sr.reveal(buttonRef.current, { origin: "bottom", delay: 1000 });
    }
  }, []);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center bg-hero-gradient"
      style={{ backgroundImage: `url(${archDesignImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark bg-opacity-50 shadow-architectural" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-dark/40 animate-slow-spin" />

      {/* Content */}
      <div className="relative z-10 text-center text-light px-4 max-w-4xl">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl font-heading font-bold mb-6 text-accent tracking-wide animate-fadeIn drop-shadow-md"
        >
          Architectural Design , Desigh Department
        </h1>
        <p
          ref={subheadingRef}
          className="text-lg md:text-2xl font-body mb-8 text-secondary leading-relaxed animate-fadeIn drop-shadow-sm"
        >
          Crafting timeless spaces that blend functionality with aesthetic
          brilliance, tailored to inspire and endure.
        </p>
        <Link
          to="/contact"
          ref={buttonRef}
          className="inline-block px-10 py-4 text-lg font-semibold font-body bg-accent text-light rounded-xl2 shadow-sharp hover:bg-tertiary hover:text-light hover:scale-105 hover:shadow-architectural transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-border focus:ring-opacity-50"
        >
          Get Started
        </Link>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-accent rounded-full bg-accent/20 animate-slow-spin hidden lg:block" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-tertiary rounded-full bg-tertiary/20 animate-pulse hidden lg:block" />
    </section>
  );
};

export default Hero;
