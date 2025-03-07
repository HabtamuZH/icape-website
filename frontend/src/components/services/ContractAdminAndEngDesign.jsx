import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import image from "./../../../public/images/image15.jpg";
import { Link } from "react-router-dom";

const ContractAdminAndEngDesign = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      reset: false, // One-time reveal for professionalism
      distance: "70px",
      duration: 1200, // Smoother, longer animation
      easing: "cubic-bezier(0.25, 0.1, 0.25, 1)", // Modern easing
    });

    sr.reveal(".line-detail", { origin: "left", delay: 200 });
    sr.reveal(".section-heading", { origin: "bottom", delay: 300 });
    sr.reveal(".section-text", { origin: "bottom", delay: 400 });
    sr.reveal(".discover-button", { origin: "bottom", delay: 500 });
    sr.reveal(".image-section", { origin: "right", delay: 300 });

    return () => sr.destroy(); // Cleanup
  }, []);

  return (
    <section
      name="contract-admin-engineering"
      className="relative min-h-screen flex items-center justify-center bg-secondary overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent/10 to-secondary/90 z-0" />
      <div className="absolute top-0 left-0 w-48 h-48 bg-accent/15 rounded-full filter blur-3xl animate-slow-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-primary/15 rounded-full filter blur-3xl animate-slow-spin -z-10" />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-0 relative z-10">
        {/* Left: Image Section with Parallax */}
        <div className="lg:w-1/2 flex justify-center items-center relative">
          <div className="image-section group relative w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl">
            <img
              src={image}
              alt="Contract Administration and Engineering Design Showcase"
              className="w-full h-[450px] object-cover rounded-xl2 shadow-architectural group-hover:shadow-sharp transition-all duration-700 ease-in-out transform group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay with Hover Effect */}
            <div className="absolute inset-0 bg-dark bg-opacity-0 group-hover:bg-opacity-30 rounded-xl2 transition-all duration-700 ease-in-out flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="text-light font-body text-lg font-semibold uppercase tracking-wide">
                Precision in Action
              </span>
            </div>
            {/* Subtle Parallax Background */}
            <div className="absolute inset-0 -z-10 bg-accent/20 rounded-xl2 transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-700 ease-in-out" />
          </div>
        </div>

        {/* Right: Text Section */}
        <div className="lg:w-1/2 flex flex-col items-start text-left pl-0 lg:pl-12 space-y-8">
          <span className="line-detail w-24 h-1 bg-accent rounded-full transform transition-all duration-500 ease-in-out hover:w-32" />
          <h1 className="section-heading text-4xl sm:text-3xl lg:text-3xl xl:text-4xl font-heading font-bold text-primary uppercase tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary/80 drop-shadow-lg">
            Contract Administration And Engineering Design
          </h1>
          <p className="section-text text-primary/95 text-lg sm:text-xl lg:text-2xl font-body max-w-lg leading-relaxed">
            Delivering projects with unmatched precision through expert contract
            management and innovative engineering design—seamless execution from
            vision to reality.
          </p>
          <Link
            to="/services/contract-admin-and-engineering-design"
            className="discover-button px-8 py-4 bg-accent text-primary font-body font-semibold text-lg rounded-full border border-border shadow-sharp hover:bg-accent/90 hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 uppercase tracking-wider"
          >
            Explore Excellence
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContractAdminAndEngDesign;
