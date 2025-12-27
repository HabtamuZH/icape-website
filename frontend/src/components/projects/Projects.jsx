import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import ProjectCard from "../common/ProjectCard";
import LoadingSpinner from "../common/LoadingSpinner";
import projectService from "../../services/project-service";
import clsx from "clsx";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["All", "ARCHITECTURE DESIGN", "URBAN DESIGN", "ENGINEERING DESIGN"];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await projectService.getAll();
        const projectsData = Array.isArray(res.data) ? res.data : [];
        setProjects(projectsData);
        setFilteredProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]);
        setFilteredProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.type?.toUpperCase() === selectedCategory)
      );
    }
  }, [selectedCategory, projects]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className="min-h-screen py-20 md:py-32">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary dark:text-dark-text mb-4">
              Our Projects
            </h1>
            <p className="text-lg md:text-xl font-body text-text-secondary dark:text-dark-textSecondary max-w-3xl mx-auto">
              Explore our portfolio of innovative architectural designs and successful projects
            </p>
          </motion.div>

          {/* Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 mb-4 rounded-lg bg-secondary-light dark:bg-dark-surface border border-border dark:border-dark-border text-primary dark:text-dark-text"
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm font-body font-medium">Filters</span>
            </button>

            {/* Filter Buttons */}
            <div
              className={clsx(
                "flex flex-wrap gap-3",
                showFilters ? "flex" : "hidden lg:flex"
              )}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={clsx(
                    "px-6 py-2.5 rounded-lg font-body font-medium text-sm transition-all duration-300",
                    selectedCategory === category
                      ? "bg-primary dark:bg-accent text-secondary-light dark:text-primary shadow-lg scale-105"
                      : "bg-secondary-light dark:bg-dark-surface text-text-secondary dark:text-dark-textSecondary border border-border dark:border-dark-border hover:border-primary dark:hover:border-accent hover:text-primary dark:hover:text-dark-text"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <p className="text-sm font-body text-text-secondary dark:text-dark-textSecondary">
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            </p>
          </motion.div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={{
                    ...project,
                    imageUrl: project.images && project.images.length > 0
                      ? project.images[0].url
                      : 'https://via.placeholder.com/400x300',
                  }} 
                  index={index} 
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-transparent border border-border dark:border-dark-border flex items-center justify-center">
                <Filter className="w-10 h-10 text-text-secondary dark:text-dark-textSecondary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary dark:text-dark-text mb-2">
                No projects found
              </h3>
              <p className="text-base font-body text-text-secondary dark:text-dark-textSecondary">
                Try selecting a different category
              </p>
            </motion.div>
          )}
        </div>
      </section>
  );
};

export default Projects;