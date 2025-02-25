import { useRef } from "react";// Adjust path based on your file structure
import ProjectCard from "../common/ProjectCard";

const HeroProject = () => {
  const sectionRef = useRef(null);

  // Updated project members with architectural names and roles
  const projects = [
    {
      id: "modern-villa-1", // Unique IDs to avoid duplication
      name: "Modern Villa",
      role: "Residential Design",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
      description: "A modern villa with sleek design and sustainable features.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      ],
    },
    {
      id: "urban-skyscraper-1",
      name: "Urban Skyscraper",
      role: "Commercial Architecture",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      description: "A towering skyscraper in the heart of the city.",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop",
      ],
    },
    {
      id: "modern-villa-2",
      name: "Modern Villa",
      role: "Residential Design",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
      description: "A modern villa with sleek design and sustainable features.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      ],
    },
    {
      id: "urban-skyscraper-2",
      name: "Urban Skyscraper",
      role: "Commercial Architecture",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      description: "A towering skyscraper in the heart of the city.",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop",
      ],
    },
    {
      id: "modern-villa-3",
      name: "Modern Villa",
      role: "Residential Design",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
      description: "A modern villa with sleek design and sustainable features.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-secondary sm:py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <h2 className="text-3xl font-heading text-primary sm:text-4xl lg:text-5xl mb-4 text-center">
          Explore Ou<span className="text-accent">r Projects</span>
        </h2>
        <p className="mb-12 text-lg font-body text-primary text-center max-w-2xl mx-auto">
          Our work says everything
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={project.id} className="mb-6">
              <ProjectCard project={{ ...project, index }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroProject;