import image from "./../../public/images/image14.jpg";

const UrbanPlanning = () => {
  return (
    <div className="bg-gray-800 flex relative z-20 items-center overflow-hidden h-screen">
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
            <a
              href="#"
              className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-md"
            >
              Read more
            </a>
          </div>
        </div>
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src={image}
            alt="Urban Planning"
            className="w-full max-w-xs md:max-w-sm lg:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default UrbanPlanning;
