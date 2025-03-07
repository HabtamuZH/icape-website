import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";

// Placeholder image (replace with your contract/engineering photo)
const contractEngImg =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"; // Construction oversight

const ContractAdminHero = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonRef = useRef(null);

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
      style={{ backgroundImage: `url(${contractEngImg})` }}
    >
      <div className="absolute inset-0 bg-dark bg-opacity-50 shadow-architectural" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-dark/40 animate-slow-spin" />
      <div className="relative z-10 text-center text-light px-4 max-w-4xl">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl font-heading font-bold mb-6 text-accent tracking-wide animate-fadeIn drop-shadow-md"
        >
          Contract Administration & Engineering Design
        </h1>
        <p
          ref={subheadingRef}
          className="text-lg md:text-2xl font-body mb-8 text-secondary leading-relaxed animate-fadeIn drop-shadow-sm"
        >
          Ensuring seamless project execution with precision engineering and
          expert oversight.
        </p>
        <Link
          to="/contact"
          ref={buttonRef}
          className="inline-block px-10 py-4 text-lg font-semibold font-body bg-accent text-light rounded-xl2 shadow-sharp hover:bg-tertiary hover:text-light hover:scale-105 hover:shadow-architectural transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-border focus:ring-opacity-50"
        >
          Get Started
        </Link>
      </div>
      <div className="absolute top-10 left-10 w-20 h-20 border border-accent rounded-full bg-accent/20 animate-slow-spin hidden lg:block" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-tertiary rounded-full bg-tertiary/20 animate-pulse hidden lg:block" />
    </section>
  );
};

export default ContractAdminHero;
