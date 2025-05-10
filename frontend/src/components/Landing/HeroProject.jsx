import { useRef, useEffect, useState } from "react";
import ProjectCard from "../common/ProjectCard"; // Adjust path as needed
import projectService from "../../services/project-service"; // Adjust path as needed
import LoadingSpinner from "../common/LoadingSpinner"; // Ensure this is available
import { motion } from "framer-motion"; // For animations
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroProject = () => {
  const sectionRef = useRef(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch 5 projects from the backend
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const res = await projectService.getAll();
        const fetchedProjects = Array.isArray(res.data) ? res.data : [];
        // Limit to 5 projects
        setProjects(fetchedProjects.slice(0, 5));
      } catch (err) {
        console.error("Error fetching projects:", err);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-24 bg-secondary overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="w-96 h-96 bg-accent/10 rounded-full blur-3xl absolute top-10 left-[-10%]"></div>
        <div className="w-96 h-96 bg-light/10 rounded-full blur-3xl absolute bottom-10 right-[-10%]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-bold text-primary">
            Explore Ou<span className="text-accent">r Projects</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg lg:text-xl font-body text-primary/80 max-w-3xl mx-auto">
            Discover the artistry, innovation, and excellence in our architectural masterpieces.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                className="group relative"
              >
                <ProjectCard
                  project={{
                    ...project,
                    id: project.id, // Map id to id for routing
                    imageUrl:
                      project.images && project.images.length > 0
                        ? project.images[0].url
                        : "https://via.placeholder.com/150", // Use first image
                    index, // For ScrollReveal stagger
                  }}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-primary font-body text-lg">
              No projects available at this time.
            </p>
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-accent text-light font-body font-semibold rounded-full hover:bg-accent/80 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All Projects
            <FaArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroProject;