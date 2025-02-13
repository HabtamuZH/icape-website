import Header from "../components/services/Header";
import ArchitecturalDesign from "../components/services/ArchitecturalDesign";
import UrbanPlanning from "../components/services/UrbanPlanning";
import InteriorDesign from "../components/services/InteriorDesign";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <ArchitecturalDesign />
      <UrbanPlanning />
      <InteriorDesign />
    </div>
  );
};

export default Services;
