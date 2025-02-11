import { useState } from "react";
import image from "./../../../public/images/image15.jpg";
import DetailSlider from "./DetailSlider";
import { interiorDesignDescriptions as description } from "../../data/serviceDescription";

const InteriorDesign = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  return (
    <div className="bg-gray-700 flex relative items-center overflow-hidden h-screen">
      <div className="container mx-auto px-6 flex relative py-16 flex-col lg:flex-row">
        {/* Image Section */}
        <div className="lg:w-4/5 flex justify-center items-center me-3">
          <img
            src={image}
            alt="Interior Design"
            className="w-full max-w-xs md:max-w-sm lg:max-w-full"
          />
        </div>
        {/* Text Section */}
        <div className="lg:w-1/2 flex flex-col relative ">
          <span className="w-20 h-2 bg-white self-end mb-12"></span>
          <h1 className="font-bebas-neue uppercase text-6xl sm:text-6xl font-black flex flex-col leading-none text-white">
            Interior Design
          </h1>
          <p className="text-sm sm:text-base text-white mt-4">
            We create elegant, functional, and comfortable interiors that
            reflect your style. Our designs balance aesthetics and functionality
            to transform spaces into timeless experiences.
          </p>
          <div className="flex mt-8">
            <button
              className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-md"
              onClick={() => setIsSliderOpen(true)}
            >
              Read more
            </button>
          </div>
        </div>
      </div>

      {isSliderOpen && (
        <DetailSlider
          title="Interior Design"
          description={description}
          onClose={() => setIsSliderOpen(false)}
        />
      )}
    </div>
  );
};

export default InteriorDesign;
