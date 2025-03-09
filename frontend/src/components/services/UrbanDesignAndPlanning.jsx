import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import image from "./../../../public/images/image14.jpg";
import { Link } from "react-router-dom";

const UrbanDesignAndPlanning = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      reset: false, // Changed to false for one-time reveal
      distance: "60px",
      duration: 1000, // Slightly longer for smoothness
      easing: "cubic-bezier(0.4, 0, 0.2, 1)", // Modern easing curve
    });

    sr.reveal(".line-detail", { origin: "left", delay: 100 });
    sr.reveal(".section-heading", { origin: "bottom", delay: 200 });
    sr.reveal(".section-text", { origin: "bottom", delay: 300 });
    sr.reveal(".discover-button", { origin: "bottom", delay: 400 });
    sr.reveal(".image-section", { origin: "right", delay: 200 });

    return () => sr.destroy(); // Cleanup
  }, []);

  return (
    <section
      name="urban"
      className="relative min-h-screen flex items-center overflow-hidden bg-secondary"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/80 z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        {/* Text Section */}
        <div className="lg:w-2/5 flex flex-col items-start text-left space-y-6">
          <span className="line-detail w-20 h-1 bg-accent rounded-full transform transition-all duration-500 ease-in-out" />
          <h1 className="section-heading text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary uppercase tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent drop-shadow-md">
            Urban Design & Planning
          </h1>
          <p className="section-text text-primary/90 text-base sm:text-lg lg:text-xl font-body max-w-md leading-relaxed text-opacity-90">
            We envision cities as dynamic, sustainable ecosystems—blending
            innovative design with practical solutions to shape communities that
            thrive for generations.
          </p>
          <Link
            to="/services/urban-design-and-planning"
            className="discover-button px-8 py-3 bg-accent text-primary font-body font-semibold text-base rounded-full border border-border shadow-sharp hover:bg-accent/90 hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 uppercase tracking-wide"
          >
            Discover More
          </Link>
        </div>

        {/* Image Section */}
        <div className="image-section lg:w-3/5 flex justify-center items-center">
          <div className="relative group">
            <img
              src={image}
              alt="Urban Planning Showcase"
              className="w-full max-w-xs sm:max-w-md lg:max-w-2xl h-auto object-cover rounded-xl2 shadow-architectural group-hover:shadow-sharp transition-all duration-500 ease-in-out transform group-hover:scale-105"
              loading="lazy"
            />
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-dark bg-opacity-0 group-hover:bg-opacity-20 rounded-xl2 transition-all duration-500 ease-in-out" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-full filter blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 rounded-full filter blur-3xl -z-10 animate-slow-spin" />
    </section>
  );
};

export default UrbanDesignAndPlanning;
