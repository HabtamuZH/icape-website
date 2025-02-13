import Mission from "./../components/about/Mission";
import Vision from "./../components/about/Vision";
import Team from "./../components/about/TeamMembers";
import CompanyHistory from "./../components/about/CompanyHistory";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    
      <CompanyHistory />
      <Mission />
      <Vision />
      <Team />
    </>
  );
};

export default About;
