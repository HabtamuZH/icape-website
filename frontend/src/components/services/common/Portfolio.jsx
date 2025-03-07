/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";

const Portfolio = ({ projects, title }) => {
  const headingRef = useRef(null);
  const projectsRef = useRef(null);

  // ScrollReveal Setup
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1200,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: false,
    });

    if (headingRef.current) {
      sr.reveal(headingRef.current, { origin: "bottom", delay: 200 });
    }
    if (projectsRef.current) {
      sr.reveal(projectsRef.current.children, {
        origin: "bottom",
        delay: 400,
        interval: 200, // Staggered reveal for each project card
      });
    }
  }, []);

  return (
    <section className="w-full py-20 bg-secondary text-dark">
      <div className="max-w-[80vw] mx-auto px-4">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-3xl md:text-4xl font-heading text-primary text-center mb-12 animate-fadeIn drop-shadow-md"
        >
          {title}
        </h2>

        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {projects.map((project, index) => (
            <Link
              key={index}
              to="/portfolio" // Adjust to your detailed portfolio route
              className="group relative overflow-hidden rounded-xl2 shadow-architectural hover:shadow-sharp transition-all duration-300 ease-in-out"
            >
              <img
                src={project.image}
                alt={`${project.title} - ${project.year}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-dark bg-opacity-70 p-4">
                <h3 className="text-lg font-heading text-light">
                  {project.title}
                </h3>
                <p className="text-sm font-body text-secondary">
                  {project.year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
