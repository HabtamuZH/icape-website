import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import arcBg from "./../../../public/images/image17.jpg";
import DetailSlider from "./DetailSlider";
import { architecturalDesignDescription as description } from "../../data/serviceDescription";

const ArchitecturalDesign = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  useEffect(() => {
    const sr = ScrollReveal({
      reset: true, // Prevents re-animation
      duration: 1000,
      easing: "ease-out",
    });

    sr.reveal(".sectionHeader", { origin: "top", distance: "50px", delay: 200 });
    sr.reveal(".contentText", { origin: "bottom", distance: "50px", delay: 300 });
    sr.reveal(".readMoreButton", { origin: "bottom", distance: "30px", delay: 400 });

    return () => sr.destroy(); // Cleanup
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-secondary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={arcBg}
          alt="Architectural Design Background"
          className="w-full h-full object-cover"
          loading="lazy" // Performance boost
        />
        <div className="absolute inset-0 bg-dark/60" /> {/* Dark overlay */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col items-center justify-center min-h-screen">
        <h1 className="sectionHeader text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-light mb-6 tracking-tight">
          Architectural Design
        </h1>
        <p className="contentText text-light/80 text-base sm:text-lg lg:text-xl font-body max-w-3xl text-center mb-10 leading-relaxed">
          We craft architectural masterpieces that seamlessly blend creativity, sustainability, and functionality—designing spaces that inspire, endure, and elevate everyday living.
        </p>
        <button
          className="readMoreButton px-6 py-3 bg-accent text-primary font-body font-semibold text-base rounded-full border border-border shadow-lg hover:bg-accent/80 hover:shadow-xl transition-all duration-300"
          onClick={() => setIsSliderOpen(true)}
        >
          Discover More
        </button>
      </div>

      {/* Detail Slider */}
      {isSliderOpen && (
        <DetailSlider
          onClose={() => setIsSliderOpen(false)}
          title="Architectural Design"
          description={description}
        />
      )}
    </section>
  );
};

export default ArchitecturalDesign;