import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "../common/ProjectCard";
import LoadingSpinner from "../common/LoadingSpinner";
import projectService from "../../services/project-service";

const HeroProject = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const res = await projectService.getAll();
        const fetchedProjects = Array.isArray(res.data) ? res.data : [];
        setProjects(fetchedProjects.slice(0, 6)); // Show 6 projects
      } catch (err) {
        console.error("Error fetching projects:", err);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="py-20 flex items-center justify-center bg-transparent">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className="py-20 md:py-32 bg-transparent">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary dark:text-dark-text mb-4">
            Explore Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg md:text-xl font-body text-text-secondary dark:text-dark-textSecondary max-w-3xl mx-auto">
            Discover the artistry, innovation, and excellence in our architectural masterpieces
          </p>
        </motion.div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard
                  project={{
                    ...project,
                    imageUrl:
                      project.images && project.images.length > 0
                        ? project.images[0].url
                        : "https://via.placeholder.com/400x300",
                  }}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-text-secondary dark:text-dark-textSecondary font-body">
            No projects available at this time.
          </p>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary dark:bg-accent text-secondary-light dark:text-primary rounded-lg font-body font-semibold hover:bg-primary-light dark:hover:bg-accent-alt transition-all duration-300 hover:scale-105"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroProject;