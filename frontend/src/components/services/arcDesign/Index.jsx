import Hero from "./Hero";
import Process from "../common/Process";
import ServiceOverview from "../common/ServiceOverview";
import KeyFeatures from "../common/KeyFeatures";
import Testimonials from "../common/Testimonial";
import CTA from "../common/CTA";
import RelatedServices from "./../common/RelatedServices";
import {  photo11 } from "../../../assets/index";
import Portfolio from "./../common/Portfolio";
import {
  ctaContent,
  testimonies,
  features,
  processSteps,
  overviewContent,
  projects,
} from "../../../data/services/architecturalDesign";

const ArchitecturalDesign = () => {
  return (
    <>
      <Hero />
      <ServiceOverview content={overviewContent} img={photo11} />
      <KeyFeatures
        features={features}
        title="Why Choose Our Architectural Design & Design Department"
      />
      <Portfolio
        projects={projects}
        title="Our Architectural Design Projects"
      />
      <Process processSteps={processSteps} title={"Our Design Process"} />
      <Testimonials testimonials={testimonies} />
      <CTA content={ctaContent} />
      <RelatedServices title={"architectural design, design department"} />
    </>
  );
};

export default ArchitecturalDesign;
