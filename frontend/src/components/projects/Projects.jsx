import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import image7 from "/images/image7.jpg";
import image8 from "/images/image8.jpg";
import image9 from "/images/image9.jpg";
import image10 from "/images/image10.jpg";
import image11 from "/images/image11.jpg";
import ProjectCard from "../common/ProjectCard";

// Project data with additional details
const projectsData = [
  {
    id: "apartment",
    name: "Apartment",
    role: "Residential Design",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    description: "A modern apartment complex with sustainable features.",
    type: "COMPLETED",
  },
  {
    id: "cbeBank",
    name: "CBE Bank",
    role: "Commercial Architecture",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    description: "A state-of-the-art banking facility.",
    type: "ONGOING",
  },
  {
    id: "jcc",
    name: "JCC",
    role: "Community Center",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    description: "A vibrant community hub.",
    type: "UPCOMING",
  },
  {
    id: "garaMart",
    name: "Gara Mart",
    role: "Retail Design",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    description: "A modern shopping experience.",
    type: "COMPLETED",
  },
  {
    id: "waritZ",
    name: "Warit Z",
    role: "Mixed-Use Development",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    description: "A blend of residential and commercial spaces.",
    type: "ONGOING",
  },
];

const Projects = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [projectType, setProjectType] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("ALL");

  // Determine project type from URL
  useEffect(() => {
    const type = location.pathname.split("/").pop().toUpperCase();
    setProjectType(
      type === "COMPLETED" || type === "ONGOING" || type === "UPCOMING" ? type : "ALL"
    );
    setFilterType(
      type === "COMPLETED" || type === "ONGOING" || type === "UPCOMING" ? type : "ALL"
    );
  }, [location]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter projects based on search and type
  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch = project.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType = filterType === "ALL" || project.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <section className="py-12 bg-secondary sm:py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <h2 className="text-3xl font-heading text-primary sm:text-4xl lg:text-5xl mb-4 text-center">
          Explore Our <span className="text-accent">{projectType}</span> Projects
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
            <option value="COMPLETED">Completed</option>
            <option value="ONGOING">Ongoing</option>
            <option value="UPCOMING">Upcoming</option>
          </select>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div key={project.id} className="mb-6">
                <ProjectCard project={{ ...project, index }} />
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