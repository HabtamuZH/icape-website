import CTA from "../common/CTA";
import Hero from "./Hero";
import Portfolio from "../common/Portfolio";
import ServiceOverview from "../common/ServiceOverview";
import Testimonials from "./../common/Testimonial";
import RelatedServices from "../common/RelatedServices";
import Features from "../common/KeyFeatures";
import Process from "./../common/Process";
import {
  FaFileContract,
  FaCogs,
  FaClipboardCheck,
  FaChartLine,
} from "react-icons/fa";
import img from "../../../assets/photo11.jpg";

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
    description:
      "Our Contract Administration and Engineering Design service ensures your project runs smoothly from start to finish. We oversee contracts with precision, manage timelines and budgets, and provide cutting-edge engineering solutions tailored to your needs. With meticulous supervision and technical expertise, we bridge the gap between design intent and flawless execution, delivering results that stand the test of time.",
  },
];

const contractProjects = [
  {
    title: "Commercial Complex Oversight",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Industrial Facility Design",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1581094282-33a6b996e4a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Residential Development",
    year: "2021",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Infrastructure Upgrade",
    year: "2020",
    image:
      "https://images.unsplash.com/photo-1506703712098-7d3b6f1048c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
];

const ContractAdminAndEngineeringDesign = () => {
  return (
    <>
      <Hero />
      <ServiceOverview content={overviewContent} img={img} />
      <Features
        features={features}
        title={"Why Choose Our Contract Administration & Engineering Design"}
      />
      <Portfolio
        projects={contractProjects}
        title="Our Contract Administration & Engineering Projects"
      />
      <Process
        processSteps={processSteps}
        title={"Our Contract Administration Process"}
      />
      <Testimonials testimonials={testimonies} />
      <CTA content={CtaContent} />
      <RelatedServices
        title={"contract administration and engineering design"}
      />
    </>
  );
};

export default ContractAdminAndEngineeringDesign;
