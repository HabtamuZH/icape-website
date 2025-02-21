// import { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import ScrollReveal from "scrollreveal";

// // ProjectCard component
// const ProjectCard = ({ name, role, imageUrl, linkTo }) => {
//   const cardRef = useRef(null);

//   return (
//     <Link to={linkTo} className="block">
//       <div 
//         ref={cardRef}
//         className="group relative overflow-hidden rounded-lg shadow-xl shadow-primary/20 reveal-card"
//       >
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

//         {/* Image with lazy loading */}
//         <img
//           src={imageUrl}
//           loading="lazy"
//           className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
//           alt={`${name}'s profile`}
//         />

//         {/* Content */}
//         <div className="absolute bottom-0 left-0 right-0 p-6 text-light transition-transform duration-300 transform translate-y-2 group-hover:-translate-y-2 z-20">
//           <h2 className="text-2xl font-heading font-bold mb-1">{name}</h2>
//           <p className="text-base font-body font-light">{role}</p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// const HeroProject = () => {
//   const sectionRef = useRef(null);

//   // Updated project members with architectural names and roles
//   const projects = [
//     { 
//       name: "Modern Villa", 
//       role: "Residential Design", 
//       imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop", 
//       linkTo: "/modern-villa" 
//     },
//     { 
//       name: "Urban Skyscraper", 
//       role: "Commercial Architecture", 
//       imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop", 
//       linkTo: "/urban-skyscraper" 
//     },
//     { 
//       name: "Minimalist House", 
//       role: "Sustainable Design", 
//       imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop", 
//       linkTo: "/minimalist-house" 
//     },
//     { 
//       name: "Luxury Penthouse", 
//       role: "High-End Residential", 
//       imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop", 
//       linkTo: "/luxury-penthouse" 
//     },
//     { 
//       name: "Cultural Museum", 
//       role: "Public Architecture", 
//       imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop", 
//       linkTo: "/cultural-museum" 
//     },
//     { 
//       name: "Eco-Friendly Office", 
//       role: "Green Building Design", 
//       imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop", 
//       linkTo: "/eco-friendly-office" 
//     },
//   ];

//   useEffect(() => {
//     const sr = ScrollReveal({
//       distance: "40px",
//       duration: 800,
//       easing: "cubic-bezier(0.5, 0, 0, 1)",
//       reset: false,
//     });

//     sr.reveal(".reveal-card", {
//       origin: "bottom",
//       interval: 100,
//       opacity: 0,
//     });

//     // Cleanup
//     return () => sr.destroy();
//   }, []);

//   return (
//     <section 
//       ref={sectionRef}
//       className="py-12 bg-secondary sm:py-16 lg:py-24 relative"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         {/* Header */}
//         <h2 className="text-3xl font-heading text-primary sm:text-4xl lg:text-5xl mb-4 text-center">
//           Explore Ou<span className="text-accent">r Project</span>
//         </h2>
//         <p className="mb-12 text-lg font-body text-primary text-center max-w-2xl mx-auto">
//           Our work says everything
//         </p>

//         {/* Masonry Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <div key={index} className="mb-6">
//               <ProjectCard
//                 name={project.name}
//                 role={project.role}
//                 imageUrl={project.imageUrl}
//                 linkTo={project.linkTo}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroProject;

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";

// ProjectCard component
const ProjectCard = ({ name, role, imageUrl, project }) => {
  const cardRef = useRef(null);

  return (
    <Link
      to={`/projects/${project.id}`} // Dynamic route based on project ID
      state={{ project }} // Pass the entire project object as state
      className="block"
    >
      <div 
        ref={cardRef}
        className="group relative overflow-hidden rounded-lg shadow-xl shadow-primary/20 reveal-card"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

        {/* Image with lazy loading */}
        <img
          src={imageUrl}
          loading="lazy"
          className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
          alt={`${name}'s profile`}
        />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-light transition-transform duration-300 transform translate-y-2 group-hover:-translate-y-2 z-20">
          <h2 className="text-2xl font-heading font-bold mb-1">{name}</h2>
          <p className="text-base font-body font-light">{role}</p>
        </div>
      </div>
    </Link>
  );
};

const HeroProject = () => {
  const sectionRef = useRef(null);

  // Updated project members with architectural names and roles
  const projects = [
    { 
      id: "modern-villa", // Unique ID for each project
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
      id: "urban-skyscraper", 
      name: "Urban Skyscraper", 
      role: "Commercial Architecture", 
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop", 
      description: "A towering skyscraper in the heart of the city.",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop",
      ],
    },
    // Add more projects as needed
  ];

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "40px",
      duration: 800,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: false,
    });

    sr.reveal(".reveal-card", {
      origin: "bottom",
      interval: 100,
      opacity: 0,
    });

    // Cleanup
    return () => sr.destroy();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-12 bg-secondary sm:py-16 lg:py-24 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <h2 className="text-3xl font-heading text-primary sm:text-4xl lg:text-5xl mb-4 text-center">
          Explore Ou<span className="text-accent">r Project</span>
        </h2>
        <p className="mb-12 text-lg font-body text-primary text-center max-w-2xl mx-auto">
          Our work says everything
        </p>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="mb-6">
              <ProjectCard
                name={project.name}
                role={project.role}
                imageUrl={project.imageUrl}
                project={project} // Pass the entire project object
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroProject;