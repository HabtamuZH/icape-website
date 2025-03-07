import {
  FaFileContract,
  FaCogs,
  FaClipboardCheck,
  FaChartLine,
} from "react-icons/fa";
import { photo12, photo1, photo5, photo13 } from "../../assets/index";

const CtaContent = [
  {
    headline: "Ready to Build with Confidence?",
    subtext:
      "Let us manage and design your project with precision and expertise.",
    buttonText: "Contact Us Now",
    buttonLink: "/contact",
  },
];
const testimonies = [
  {
    quote:
      "Their oversight turned a complex project into a streamlined success—on time and on budget.",
    client: "David Patel",
    title: "Project Developer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    quote:
      "The engineering design was flawless, and their supervision ensured every detail was perfect.",
    client: "Sarah Nguyen",
    title: "Construction Manager",
    image:
      "https://images.unsplash.com/photo-1487412723647-3b35ae237e5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    quote:
      "They managed our contracts with expertise, making the process stress-free and efficient.",
    client: "James Carter",
    title: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
];

const features = [
  {
    title: "Expert Contract Management",
    description:
      "We handle negotiations, timelines, and budgets with precision, ensuring every detail aligns with your project goals.",
    icon: FaFileContract,
  },
  {
    title: "Advanced Engineering Solutions",
    description:
      "Our designs integrate cutting-edge engineering, delivering robust and innovative structures.",
    icon: FaCogs,
  },
  {
    title: "On-Site Supervision",
    description:
      "Meticulous oversight ensures construction adheres to plans, maintaining quality and safety standards.",
    icon: FaClipboardCheck,
  },
  {
    title: "Performance Optimization",
    description:
      "We enhance project efficiency, reducing costs and timelines without compromising excellence.",
    icon: FaChartLine,
  },
];

const processSteps = [
  {
    step: "Project Setup & Contracting",
    description:
      "We establish clear contracts, aligning all parties on scope, budget, and timelines to kick off the project smoothly.",
  },
  {
    step: "Engineering Design Development",
    description:
      "Our engineers craft detailed, innovative designs, ensuring structural integrity and operational efficiency.",
  },
  {
    step: "Construction Supervision",
    description:
      "We oversee every phase on-site, ensuring compliance with designs, safety standards, and schedules.",
  },
  {
    step: "Completion & Handover",
    description:
      "We finalize the project, conduct quality checks, and deliver a fully realized outcome ready for use.",
  },
];
const overviewContent = [
  {
    title: "Contract Administration & Engineering Design",
    subtitle: "From Vision to Victory",
    description: [
      "Our Contract Administration and Engineering Design service ensures your project runs smoothly from start to finish.",
      " We oversee contracts with precision, manage timelines and budgets, and provide cutting-edge engineering solutions tailored to your needs.",
      " With meticulous supervision and technical expertise, we bridge the gap between design intent and flawless execution, delivering results that stand the test of time.",
    ],
  },
];

const contractProjects = [
  {
    title: "Interior Design-Ato Seid Residence-1",
    year: "2023",
    image: photo12,
  },
  {
    title: "These are interior designs for Seyum Eye Clinic",
    year: "2022",
    image: photo1,
  },
  {
    title: "Yot Residence",
    year: "2020",
    image: photo5,
  },
  {
    title: "Interior Design-Ato Seid Residence -2",
    year: "2020",
    image: photo13,
  },
];

export {
  CtaContent,
  testimonies,
  features,
  processSteps,
  overviewContent,
  contractProjects,
};
