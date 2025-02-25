import React, { useState, useEffect } from "react";
import projectService from "../../../services/project-service";
import ProjectCard from "./ProjectCard";
import ProjectSearch from "./ProjectSearch";
import ProjectFilter from "./ProjectFilter";
import PostNewProjectButton from "./PostNewProjectButton";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import ProjectFormModal from "./ProjectFormModal";
import PostProjectForm from "./PostProjectForm";
import UpdateProjectForm from "./UpdateProjectForm";

const ProjectDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, [reload]);

  const handleReload = () => {
    setReload(!reload);
  };

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await projectService.getAll();
      
      // Ensure data is an array and handle unexpected formats
      setProjects(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error fetching projects:", err);
      setProjects([]); // Fallback to empty array on error
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await projectService.delete(id);
      setProjects((prev) => prev.filter((project) => project._id !== id));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleAddNewProject = () => {
    setSelectedProject(null);
    setIsModalOpen(true);
  };

  const handleUpdateProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    fetchProjects();
  };

  // Filter and search logic with defensive checks
  const filteredProjects = projects.filter((project) => {
    if (!project) return false; // Skip if project is undefined/null

    const searchLower = searchQuery?.toLowerCase() || "";
    
    // Ensure properties exist and are strings, default to empty string if not
    const name = (project.name || "").toLowerCase();
    const role = (project.role || "").toLowerCase();
    const description = (project.description || "").toLowerCase();
    const type = (project.type || "").toLowerCase();

    const matchesSearch =
      name.includes(searchLower) ||
      role.includes(searchLower) ||
      description.includes(searchLower);

    const matchesType = typeFilter ? type === typeFilter.toLowerCase() : true;

    return matchesSearch && matchesType;
  });

  if (loading) return <LoadingSpinner />;

  return (
    <section className="py-16 bg-secondary min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-primary mb-8 sm:mb-12 text-center">
          Project Dashboard
        </h1>
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <ProjectSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <ProjectFilter
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
                onUpdate={handleUpdateProject}
                onDelete={handleDeleteProject}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-primary font-body text-lg">
              No projects found.
            </p>
          )}
        </div>
        <div className="fixed bottom-4 right-4">
          <PostNewProjectButton onClick={handleAddNewProject} />
        </div>
      </div>
      {isModalOpen && (
        <ProjectFormModal onClose={handleCloseModal}>
          {selectedProject ? (
            <UpdateProjectForm
              initialData={selectedProject}
              onClose={() => {
                setIsModalOpen(false);
                handleReload();
              }}
            />
          ) : (
            <PostProjectForm
              onClose={() => {
                setIsModalOpen(false);
                handleReload();
              }}
            />
          )}
        </ProjectFormModal>
      )}
    </section>
  );
};

export default ProjectDashboard;