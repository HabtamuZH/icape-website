import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import projectService from "../../services/project-service";
import ProjectCard from "../common/ProjectCard"; // Using your provided version
import LoadingSpinner from "../common/LoadingSpinner";

const Projects = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [projectType, setProjectType] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("ALL");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch projects from the backend
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const res = await projectService.getAll();
        setProjects(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Determine project type from URL
  useEffect(() => {
    const type = location.pathname.split("/").pop().toUpperCase();
    setProjectType(
      type === "ARCHITECTURE" || type === "URBAN" || type === "INTERIOR"
        ? type
        : "ALL"
    );
    setFilterType(
      type === "ARCHITECTURE" || type === "URBAN" || type === "INTERIOR"
        ? type
        : "ALL"
    );
  }, [location]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter projects based on search and type
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType =
      filterType === "ALL" || project.type.toUpperCase() === filterType;
    return matchesSearch && matchesType;
  });

  const handleProjectClick = (projectId) => {
    const project = filteredProjects.find((p) => p._id === projectId);
    navigate(`/projects/${projectId}`, { state: { project } });
  };

  if (loading) return <LoadingSpinner />;

  return (
    <section className="py-12 bg-secondary sm:py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <h2 className=" pt-8 text-3xl font-heading font-bold text-primary sm:text-4xl lg:text-5xl mb-4 text-center">
          Explore Our <span className="text-accent">{projectType}</span>{" "}
          Projects
        </h2>
        <p className="mb-8 text-lg font-body text-primary text-center max-w-2xl mx-auto">
          Discover the artistry and innovation in our architectural endeavors.
        </p>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between items-center bg-light p-4 rounded-lg border border-border mb-8">
          <input
            type="text"
            placeholder="Search projects by name..."
            className="w-full sm:w-2/3 md:w-1/2 p-2 rounded-md bg-secondary text-primary font-body text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="w-full sm:w-1/3 md:w-1/4 p-2 rounded-md bg-secondary text-primary font-body text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="ALL">All Projects</option>
            <option value="ARCHITECTURE">Architecture</option>
            <option value="URBAN">Urban Planning</option>
            <option value="INTERIOR">Interior Design</option>
          </select>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div key={project._id} className="mb-6">
                {/* Adjust project data to match single image expectation */}
                <ProjectCard
                  project={{
                    ...project,
                    id: project._id, // Map _id to id for routing
                    imageUrl:
                      project.images && project.images.length > 0
                        ? project.images[0].url
                        : "https://via.placeholder.com/150", // Use first image
                    index, // For ScrollReveal stagger
                  }}
                />
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-primary font-body text-lg">
              No projects match your criteria.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
