import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectImages from "../../data/imageData";
import { icapeLogo } from "../../data/imageData"

const ProjectDetails = () => {
  const { projectId } = useParams();
  const images = projectImages[projectId] || [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${images[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {/* Logo Section */}
        <div className="w-1/3 p-6 flex flex-col items-center justify-center">
          <img
            src={icapeLogo}
            alt="Icape Logo"
            className="w-full h-auto mb-4"
          />
          <h1 className="text-4xl font-bold bg-opacity-50 px-4 py-2">
            {projectId.toUpperCase()}
          </h1>
        </div>

        {/* Image Slideshow Section */}
        <div className="w-2/3 p-6 flex justify-center">
          <div className="relative h-[80vh] mt-24 w-full">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Project ${projectId} - ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
