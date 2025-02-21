import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import image7 from "/images/image7.jpg";
import image8 from "/images/image8.jpg";
import image9 from "/images/image9.jpg";
import image10 from "/images/image10.jpg";
import image11 from "/images/image11.jpg";

const projects = [
  { id: "apartment", name: "APARTMENT", image: image7 },
  { id: "cbeBank", name: "CBE BANK", image: image8 },
  { id: "jcc", name: "JCC", image: image9 },
  { id: "garaMart", name: "GARA MART", image: image10 },
  { id: "waritZ", name: "WARIT Z", image: image11 },
];

const Projects = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [projectType, setProjectType] = useState("");

  useEffect(() => {
    setProjectType(location.pathname.split("/").pop().toUpperCase());
  }, [location]);

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <>
      {/* Section Header */}
      <section className="w-full pt-24">
        <h1 className="text-4xl text-center font-bold pt-2">{projectType} PROJECTS</h1>
        <div className="container mx-auto flex flex-wrap">
          {projects.map((project) => (
            <div key={project.id} className="w-full md:w-1/3 p-4 cursor-pointer" onClick={() => handleProjectClick(project.id)}>
              <div className="relative h-64 bg-gray-200 rounded-lg shadow-lg">
                {/* Lazy Loading Image */}
                <picture>
                  <source srcSet={project.image.replace(/\.(png|jpg)$/, ".webp")} type="image/webp" />
                  <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
                </picture>

                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <h2 className="text-white text-2xl font-bold">{project.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
