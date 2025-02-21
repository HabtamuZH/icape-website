import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import image from "./../../../public/images/image15.jpg";
import DetailSlider from "./DetailSlider";
import { interiorDesignDescriptions as description } from "../../data/serviceDescription";

const InteriorDesign = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  useEffect(() => {
    const sr = ScrollReveal({
      reset: true, // Prevents re-animation on every scroll
      duration: 800,
      easing: "ease-out",
    });

    // Image animation
    sr.reveal(".image-section", { origin: "left", distance: "50px", delay: 200 });

    // Text section animations
    sr.reveal(".line-detail", { origin: "top", distance: "30px", delay: 300 });
    sr.reveal(".section-heading", { origin: "bottom", distance: "50px", delay: 400 });
    sr.reveal(".section-text", { origin: "bottom", distance: "50px", delay: 500 });
    sr.reveal(".discover-button", { origin: "bottom", distance: "30px", delay: 600 });

    return () => sr.destroy(); // Cleanup
  }, []);

  return (
    <section
      name='interior-design'
      className='relative min-h-screen flex items-center overflow-hidden bg-secondary'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
        {/* Image Section */}
        <div className='image-section lg:w-3/5 flex justify-center items-center'>
          <img
            src={image}
            alt='Interior Design Showcase'
            className='w-full max-w-xs sm:max-w-md lg:max-w-2xl h-auto object-cover rounded-lg shadow-lg'
            loading='lazy' // Performance boost
          />
        </div>

        {/* Text Section */}
        <div className='lg:w-2/5 flex flex-col items-start text-left'>
          <span className='line-detail w-16 h-1 bg-accent mb-6 self-start' />
          <h1 className='section-heading text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary uppercase tracking-tight leading-tight mb-4'>
            Interior Design
          </h1>
          <p className='section-text text-primary/80 text-base sm:text-lg font-body max-w-lg leading-relaxed mb-8'>
            We craft interiors that blend elegance, comfort, and
            functionality—transforming spaces into timeless reflections of your
            unique style and vision.
          </p>
          <button
            className='discover-button px-6 py-3 bg-accent text-primary font-body font-semibold text-base rounded-full border border-border shadow-md hover:bg-accent/80 hover:shadow-lg transition-all duration-300 uppercase'
            onClick={() => setIsSliderOpen(true)}
          >
            Discover More
          </button>
        </div>
      </div>

      {/* Detail Slider */}
      {isSliderOpen && (
        <DetailSlider
          title='Interior Design'
          description={description}
          onClose={() => setIsSliderOpen(false)}
        />
      )}
    </section>
  )
};

export default InteriorDesign;