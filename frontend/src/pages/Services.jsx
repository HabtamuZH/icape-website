import Header from "../components/services/Header";
import ArchitecturalDesign from "../components/services/ArchitecturalDesign";
import UrbanDesignAndPlanning from "../components/services/UrbanDesignAndPlanning";
import ContractAdminAndEngDesign from "../components/services/ContractAdminAndEngDesign";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <ArchitecturalDesign />
      <UrbanDesignAndPlanning />
      <ContractAdminAndEngDesign />
    </div>
  );
};

export default Services;
