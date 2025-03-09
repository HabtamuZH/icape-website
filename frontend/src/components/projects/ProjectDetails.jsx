// src/components/Projects/ProjectDetails.js
import { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  const { project } = location.state || {};
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef(null);

  if (!project) {
    return (
      <div className="text-center text-light text-2xl py-20">
        Project not found.
      </div>
    );
  }

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setDragOffset(0);
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const parallaxOffset = (x / width - 0.5) * 20;
    sliderRef.current.style.setProperty(
      "--parallax-offset",
      `${parallaxOffset}px`
    );
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const offset = clientX - startX;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 50;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) prevSlide();
      else nextSlide();
    }
    setDragOffset(0);
  };

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${
          project.images[0]?.url || "https://via.placeholder.com/150"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-85"></div>

      <div className="relative z-10 flex flex-col items-center py-12">
        <div className="w-full pt-12 px-6 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-light bg-accent/20 px-6 py-3 rounded-lg shadow-md">
            {project.name.toUpperCase()}
          </h1>
        </div>

        <div className="w-full px-4 sm:px-6 py-12">
          <div
            className="relative w-full max-w-4xl mx-auto perspective-1000"
            ref={sliderRef}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            <div className="relative h-[350px] md:h-[450px] flex justify-center items-center overflow-hidden">
              {project.images.map((image, index) => {
                const isActive = index === currentIndex;
                const offset = index - currentIndex;
                const rotateY = offset * -25;
                const translateZ = isActive ? 100 : -100;

                return (
                  <div
                    key={index}
                    className={`absolute w-[300px] sm:w-[400px] md:w-[500px] h-[200px] sm:h-[250px] md:h-[300px] transition-all duration-700 ease-in-out transform ${
                      isActive
                        ? "scale-100 opacity-100 z-10"
                        : "scale-75 opacity-40 z-0"
                    }`}
                    style={{
                      transform: `translateX(${
                        offset * 100 + (isDragging ? dragOffset / 5 : 0)
                      }%) rotateY(${rotateY}deg) translateZ(${translateZ}px) translateX(var(--parallax-offset, 0px))`,
                    }}
                  >
                    <img
                      src={image.url}
                      alt={`${project.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
                      onClick={() => openModal(image.url)}
                      draggable={false}
                    />
                  </div>
                );
              })}
            </div>

            <div className="absolute inset-0 flex justify-between items-center px-6 pointer-events-none">
              <button
                onClick={prevSlide}
                className="pointer-events-auto bg-accent/70 p-4 rounded-full text-light hover:bg-accent transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <FaArrowLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="pointer-events-auto bg-accent/70 p-4 rounded-full text-light hover:bg-accent transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <FaArrowRight size={20} />
              </button>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-accent scale-125 shadow-md"
                      : "bg-light/50 hover:bg-light/80"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full max-w-5xl p-6 md:p-8 mt-8 bg-light/10 backdrop-blur-md rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-light mb-4">
            Project Details
          </h2>
          <div
            className="text-lg md:text-xl font-body text-light leading-relaxed prose prose-invert"
            dangerouslySetInnerHTML={{
              __html: project.content || "No content available",
            }}
          />
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={closeModal}
        >
          <div className="relative h-[90vh] overflow-hidden rounded-lg shadow-2xl">
            <img
              src={selectedImage}
              alt="Selected Project Image"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-light text-3xl hover:text-accent transition-colors duration-300"
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
