import CTA from "../common/CTA";
import Hero from "./Hero";
import Portfolio from "../common/Portfolio";
import ServiceOverview from "../common/ServiceOverview";
import Testimonials from "./../common/Testimonial";
import RelatedServices from "../common/RelatedServices";
import Features from "../common/KeyFeatures";
import Process from "./../common/Process";
import {photo1 as photo16} from "../../../assets/index";
import {
  overviewContent,
  features,
  processSteps,
  testimonies,
  CtaContent,
  contractProjects,
} from "../../../data/services/contractAdministrationAndEngineeringDesign";

const ContractAdminAndEngineeringDesign = () => {
  return (
    <>
      <Hero />
      <ServiceOverview content={overviewContent} img={photo16} />
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
