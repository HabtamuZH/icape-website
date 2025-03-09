import CTA from "../common/CTA";
import Testimonials from "../common/Testimonial";
import KeyFeatures from "../common/KeyFeatures";
import Hero from "./Hero";
import Process from "../common/Process";
import ServiceOverview from "../common/ServiceOverview";
import img from "../../../assets/photo8.jpg";
import RelatedServices from "../common/RelatedServices";
import Portfolio from "./../common/Portfolio";
import {
  overviewContent,
  features,
  projects,
  processSteps,
  testimonies,
  ctaContent,
} from "../../../data/services/urbanDesignAndPlaning";

const UrbanDesignAndPlaning = () => {
  return (
    <>
      <Hero />
      <ServiceOverview content={overviewContent} img={img} />
      <KeyFeatures
        features={features}
        title={"Why Choose Our Urban Design & Planning"}
      />
      <Portfolio
        projects={projects}
        title="Our Urban Design & Planning Projects"
      />
      <Process processSteps={processSteps} title={"Our Urban Design Process"} />
      <Testimonials testimonials={testimonies} />
      <CTA content={ctaContent} />
      <RelatedServices title={"urban planing and desigh"} />
    </>
  );
};

export default UrbanDesignAndPlaning;
