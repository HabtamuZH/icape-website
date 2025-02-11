import { PropTypes } from "prop-types";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const DetailSlider = ({ onClose, title, description }) => {
  useEffect(() => {
    ScrollReveal().reveal(".slider-container", {
      duration: 800,
      origin: "right",
      distance: "50px",
      delay: 200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="fixed bottom-0 right-0 lg:w-3/5 h-3/4 bg-[#000e] shadow-lg z-20 p-6 overflow-y-auto slider-containers transition-all duration-200 ease-linear delay-700">
      <button
        onClick={onClose}
        className="text-red-200 text-2xl hover:text-red-300 fixed top-40 right-5 bg-[#737373cc] py-1 px-2 rounded-3xl"
      >
        X
      </button>
      <h2 className="my-8 text-3xl text-yellow-600 text-center  font-bold">
        {title}
      </h2>
      <div className="text-gray-200 space-y-4 ">
        {description.map((ds) => (
          <>
            <h2 className="me-1 text-yellow-400 font-[500] text-xl ">
              {ds.subTitle}
            </h2>
            <p className="ms-2 ">{ds.content}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default DetailSlider;
DetailSlider.propTypes = {
  onClose: PropTypes.func,
  description: PropTypes.array,
  title: PropTypes.string,
};
