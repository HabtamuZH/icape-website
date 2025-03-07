import { FaCity, FaMap, FaUsers, FaRecycle } from "react-icons/fa";
import { photo2, photo4, photo3, photo17 } from "../../assets/index";

const ctaContent = [
  {
    headline: "Plan Your Urban Future Today",
    subtext:
      "Partner with us to create sustainable, thriving communities that stand the test of time.",
    buttonText: "Contact Us Now",
    buttonLink: "/contact",
  },
];

const testimonies = [
  {
    quote:
      "Their urban design revitalized our downtown, making it a hub for both residents and visitors.",
    client: "Robert Hayes",
    title: "City Council Member",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    quote:
      "The master plan they created for our city is visionary and practical—a perfect balance.",
    client: "Laura Simmons",
    title: "Urban Planner",
    image:
      "https://images.unsplash.com/photo-1487412723647-3b35ae237e5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    quote:
      "Their sustainable approach transformed our community into a greener, more livable space.",
    client: "Michael Tran",
    title: "Resident, Green City",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
];

const features = [
  {
    title: "Integrated Urban Solutions",
    description:
      "We design cohesive urban environments that blend infrastructure, public spaces, and residential zones for seamless functionality.",
    icon: FaCity,
  },
  {
    title: "Master Planning",
    description:
      "Our strategic plans map out sustainable growth, ensuring cities evolve with purpose and resilience.",
    icon: FaMap,
  },
  {
    title: "Community Engagement",
    description:
      "We involve stakeholders at every step, creating spaces that reflect the needs and identity of the people who use them.",
    icon: FaUsers,
  },
  {
    title: "Sustainable Urbanism",
    description:
      "Eco-conscious designs reduce environmental impact while enhancing urban livability for future generations.",
    icon: FaRecycle,
  },
];

const processSteps = [
  {
    step: "Research & Analysis",
    description:
      "We begin with comprehensive studies of the site, demographics, and infrastructure, identifying opportunities and challenges to inform our planning.",
  },
  {
    step: "Vision & Concept Development",
    description:
      "Collaborating with stakeholders, we craft a bold vision and conceptual framework that balances growth, sustainability, and community needs.",
  },
  {
    step: "Detailed Urban Design",
    description:
      "Our team develops precise plans, integrating zoning, transportation, and green spaces to create a cohesive urban fabric.",
  },
  {
    step: "Implementation & Oversight",
    description:
      "We guide the project through approvals and construction, ensuring the vision is realized with quality and fidelity.",
  },
];

const overviewContent = [
  {
    title: "Urban Design & Planning",
    subtitle: "Building Communities, Shaping Futures",
    description: [
      "Our Urban Design and Planning service transforms cities and towns into thriving, sustainable environments.",
      "We integrate visionary design with strategic planning to create urban spaces that enhance connectivity, promote resilience, and foster community well-being.",
      "From master plans to detailed infrastructure layouts, we collaborate with stakeholders to ensure every project balances aesthetics, functionality, and long-term growth.",
    ],
  },
];

const projects = [
  {
    title: "Fatsi Town Landuse",
    year: "2023",
    image: photo2,
  },
  {
    title: "Fatsi Town Basic Plan",
    year: "2022",
    image: photo4,
  },
  {
    title: "Fatsi Town Basic Plan Road Network",
    year: "2021",
    image: photo3,
  },
  {
    title: "Bizet Basic Plan-Areal View",
    year: "2020",
    image: photo17, // Urban transit
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
