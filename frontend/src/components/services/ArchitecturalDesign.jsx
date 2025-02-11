import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";
import arcBg from "./../../../public/images/image17.jpg";
import DetailSlider from "./DetailSlider";
import { architecturalDesignDescription as description } from "../../data/serviceDescription";

const ArchitecturalDesign = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  useEffect(() => {
    ScrollReveal().reveal(".sectionHeader", {
      duration: 1000,
      origin: "top",
      distance: "50px",
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".contentText", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".readMoreButton", {
      duration: 1000,
      origin: "bottom",
      distance: "30px",
      delay: 400,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={arcBg}
          alt="Architectural Design Background"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-black opacity-50 sectionHeader"
          onClick={(e) =>
            e.target.classList.contains("sectionHeader") &&
            setIsSliderOpen(false)
          }
        ></div>
      </div>

      <div className="relative bg-[#333c] mt-[10%] z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 sectionHeader">
          Architectural Design
        </h1>
        <p className="text-white max-w-2xl text-center mb-8 contentText">
          Our architectural design services focus on blending creativity,
          sustainability, and functionality to craft spaces that meet your
          needs. We specialize in designing modern and timeless structures that
          balance aesthetics with practicality.
        </p>
        <button
          className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300 readMoreButton"
          onClick={() => setIsSliderOpen(true)}
        >
          Read More
        </button>
      </div>

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
