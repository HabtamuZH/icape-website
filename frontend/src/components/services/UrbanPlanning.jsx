import { useState } from "react";
import image from "./../../../public/images/image14.jpg";
import DetailSlider from "./DetailSlider";
import { urbanPlanningDescription as description } from "./../../data/serviceDescription";

const UrbanPlanning = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  return (
    <div className="bg-gray-800 flex relative z-10 items-center overflow-hidden h-screen">
      <div className="container mx-auto px-6 flex relative py-16 flex-col lg:flex-row">
        {/* Text Section */}
        <div className="lg:w-1/2 flex flex-col relative z-20">
          <span className="w-20 h-2 bg-white mb-12"></span>
          <h1 className="font-bebas-neue uppercase text-6xl sm:text-6xl font-black flex flex-col leading-none text-white">
            Urban Planning
          </h1>
          <p className="text-sm sm:text-base text-white mt-4">
            Dimension of reality that makes change possible and understandable.
            An indefinite and homogeneous environment in which natural events
            and human existence take place.
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
        {/* Image Section */}
        <div className="lg:w-4/5 flex justify-center items-center">
          <img
            src={image}
            alt="Urban Planning"
            className="w-full max-w-xs md:max-w-sm lg:max-w-full"
          />
        </div>
      </div>

      {isSliderOpen && (
        <DetailSlider
          title="Urban Planning"
          description={description}
          onClose={() => setIsSliderOpen(false)}
        />
      )}
    </div>
  );
};

export default UrbanPlanning;
