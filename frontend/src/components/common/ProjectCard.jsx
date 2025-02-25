import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "40px",
      duration: 800,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: false,
    });

    if (cardRef.current) {
      sr.reveal(cardRef.current, {
        origin: "bottom",
        opacity: 0,
        delay: 100 * (project.index || 0), // Use index if provided for staggered effect
      });
    }

    return () => sr.destroy();
  }, [project.index]); // Re-run if index changes

  return (
    <Link
      to={`/projects/${project.id}`}
      state={{ project }} // Pass the entire project object as state
      className="block group relative overflow-hidden rounded-lg shadow-xl shadow-primary/20"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

      {/* Image with lazy loading */}
      <img
        src={project.imageUrl}
        loading="lazy"
        className="w-full h-72 sm:h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
        alt={`${project.name} project`}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-light transition-transform duration-300 transform translate-y-2 group-hover:-translate-y-2 z-20">
        <h2 className="text-xl sm:text-2xl font-heading font-bold mb-1">{project.name}</h2>
        <p className="text-sm sm:text-base font-body font-light">{project.role}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;