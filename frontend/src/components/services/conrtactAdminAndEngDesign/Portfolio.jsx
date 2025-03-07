import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";

const contractProjects = [
  {
    title: "Commercial Complex Oversight",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Industrial Facility Design",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1581094282-33a6b996e4a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Residential Development",
    year: "2021",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Infrastructure Upgrade",
    year: "2020",
    image:
      "https://images.unsplash.com/photo-1506703712098-7d3b6f1048c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
];

const ContractAdminPortfolio = () => {
  const headingRef = useRef(null);
  const projectsRef = useRef(null);

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
        interval: 200,
      });
    }
  }, []);

  return (
    <section className="w-full py-18 bg-secondary text-dark">
      <div className="max-w-[80vw] mx-auto px-4">
        <h2
          ref={headingRef}
          className="text-3xl md:text-4xl font-heading text-primary text-center mb-12 animate-fadeIn drop-shadow-md"
        >
          Our Contract Administration & Engineering Projects
        </h2>
        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {contractProjects.map((project, index) => (
            <Link
              key={index}
              to="/portfolio"
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

export default ContractAdminPortfolio;
