import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProjectDetails = () => {
  const location = useLocation();
  const { project } = location.state || {}; // Access the passed project data
  const [selectedImage, setSelectedImage] = useState(null); // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal open/close

  if (!project) {
    return <div>Project not found.</div>;
  }

  // Function to open modal with selected image
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${project.images[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-evenly md:justify-center py-12">
        {/* Project Title */}
        <div className="w-full pt-12 px-6 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-heading font-bold text-light bg-opacity-50 px-4 py-2">
            {project.name.toUpperCase()}
          </h1>
        </div>

          {/* Image Slideshow Section */}
          <div className="w-full h-3/5  px-6">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1.5,
              slideShadows: true,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container w-full md:w-3/5"
          >
            {project.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`${project.name} - Image ${index + 1}`}
                  className="w-full md:w-3/5 h-3/5 object-cover py-2 rounded-xl shadow-lg cursor-pointer transition-transform duration-300 scale-[90%] hover:scale-95"
                  onClick={() => openModal(image)}
                />
              </SwiperSlide>
            ))}

            {/* Slider Controls */}
            <div className="slider-controler mt-8">
              <div className="swiper-button-prev slider-arrow text-white hover:text-accent transition-colors">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow text-white hover:text-accent transition-colors">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>

        {/* Detailed Description Section */}
        <div className="w-full max-w-6xl p-6 mt-8 bg-light/10 backdrop-blur-sm rounded-lg">
          <h2 className="text-2xl font-heading font-bold text-light mb-4">
            Project Details
          </h2>
          <p className="text-lg font-body text-light">{project.description}</p>
        </div>
      </div>

      {/* Modal for Image Display */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden">
            <img
              src={selectedImage}
              alt="Selected Project Image"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-light text-2xl hover:text-accent transition-colors"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;