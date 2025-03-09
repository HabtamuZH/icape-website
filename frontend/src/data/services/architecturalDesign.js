import { FaDraftingCompass, FaCube, FaLeaf, FaEye } from "react-icons/fa";
import { photo1, photo9, photo6, photo5 } from "../../assets/index";

const ctaContent = [
  {
    headline: "Ready to Design Your Legacy?",
    subtext:
      "Let’s bring your vision to life with our expert architectural design services.",
    buttonText: "Contact Us Now",
    buttonLink: "/contact",
  },
];

const testimonies = [
  {
    quote:
      "Their architectural design transformed our vision into a stunning reality. The attention to detail and creativity were beyond our expectations.",
    client: "Jane Mitchell",
    title: "Homeowner, Urban Residential Tower",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    quote:
      "Working with their team was seamless. The design process was thorough, and the final office complex is both functional and inspiring.",
    client: "Mark Reynolds",
    title: "CEO, Tech Innovations",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    quote:
      "The coastal villa they designed for us is a masterpiece. It’s sustainable, beautiful, and perfectly suited to our lifestyle.",
    client: "Emily Carter",
    title: "Retiree, Coastal Villa Project",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
];

// Feature data in a JS object
const features = [
  {
    title: "Customized Concepts",
    description:
      "Every project begins with your vision. We tailor our designs to reflect your unique aspirations, ensuring a space that’s distinctly yours.",
    icon: FaDraftingCompass,
  },
  {
    title: "3D Visualization",
    description:
      "See your design come to life with advanced 3D modeling, offering precision and clarity before construction even begins.",
    icon: FaCube,
  },
  {
    title: "Sustainable Design",
    description:
      "We integrate eco-friendly materials and practices, crafting spaces that respect the environment while maintaining elegance.",
    icon: FaLeaf,
  },
  {
    title: "Timeless Aesthetics",
    description:
      "Blending classic and modern styles, our designs create enduring beauty that inspires across generations.",
    icon: FaEye,
  },
];

// Process data in a JS object
const processSteps = [
  {
    step: "Consultation & Vision",
    description:
      "We start by listening to you. Through in-depth discussions, we uncover your goals, preferences, and the essence of your project, laying the foundation for a design that truly reflects your vision.",
  },
  {
    step: "Conceptual Design",
    description:
      "Our team crafts initial sketches and concepts, blending creativity with practicality. This phase explores possibilities, ensuring the design aligns with your aspirations and the site’s potential.",
  },
  {
    step: "Detailed Planning & Modeling",
    description:
      "Using advanced 3D modeling and detailed blueprints, we refine the concept into a precise plan. This step ensures every element is functional, sustainable, and ready for construction.",
  },
  {
    step: "Finalization & Approvals",
    description:
      "We finalize the design, incorporating feedback and securing necessary permits. Our meticulous attention to detail guarantees a seamless transition from vision to reality.",
  },
];

const overviewContent = [
  {
    title: "Architectural Design",
    subtitle: "Crafting Timeless Spaces",
    description: [
      "Our Architectural Design service is the cornerstone of our practice, where creativity meets technical mastery.",
      " We design buildings that tell a story—whether through bold modern lines or classical elegance—tailored to the client’s aspirations and the site’s unique character.",
      "This process involves detailed planning, 3D modeling, and iterative refinement, ensuring that each structure is a harmonious blend of beauty, practicality, and durability, destined to leave a lasting legacy.",
    ],
  },
];

// Project data in a JS object (replace images with your actual project photos)
const projects = [
  {
    title: "Seyum Eye Clinic",
    year: "2023",
    image: photo1,
  },
  {
    title: "Yot Residence",
    year: "2020",
    image: photo5,
  },
  {
    title: "Yot Residence",
    year: "2020",
    image: photo6,
  },
  {
    title: "Competition collaboration between GatMets and iCAPE",
    year: "2020",
    image: photo9,
  },
];

export {
  ctaContent,
  testimonies,
  features,
  processSteps,
  overviewContent,
  projects,
};
