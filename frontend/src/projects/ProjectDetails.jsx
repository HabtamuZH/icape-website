import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.jpg";
import image8 from "./images/image8.jpg";
import image9 from "./images/image9.jpg";
import image10 from "./images/image10.jpg";
import image11 from "./images/image11.jpg";
import image12 from "./images/image12.jpg";
import image13 from "./images/image13.jpg";
import image14 from "./images/image14.jpg";
import image15 from "./images/image15.jpg";
import image16 from "./images/image16.jpg";
import image17 from "./images/image17.jpg";
import image18 from "./images/image18.jpg";
import image19 from "./images/image19.jpg";
import image20 from "./images/image20.jpg";
import image21 from "./images/image21.jpg";
import icapeLogo from "./images/icape_logo.png";

const projectImages = {
  apartment: [image1, image2, image3, image16, image17],
  cbeBank: [image4, image5, image6, image18, image19],
  jcc: [image7, image8, image9, image20, image21],
  garaMart: [image10, image11, image12, image16, image17],
  waritZ: [image13, image14, image15, image18, image19],
};

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
    <div className="relative min-h-screen" style={{ backgroundImage: `url(${images[0]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {/* Logo Section */}
        <div className="w-1/3 p-6 flex flex-col items-center justify-center">
          <img src={icapeLogo} alt="Icape Logo" className="w-full h-auto mb-4" />
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
