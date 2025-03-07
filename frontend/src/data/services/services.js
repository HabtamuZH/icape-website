import DesignIcon from "../../../public/icon/design.png";
import urban from "../../../public/icon/urban.png";
import landscape from "../../../public/icon/landscape.png";

const services = [
  {
    title: "Architectural Design, Design Department",
    link: "/services/architectural-design",
    sectionId: "arch",
    description:
      "Innovative and sustainable design solutions for modern architecture.",
    icon: DesignIcon, // Matches: design icon for architectural design
  },
  {
    title: "Urban Design And Planning",
    link: "/services/urban-design-and-planning",
    sectionId: "urban",
    description:
      "Efficient and forward-thinking urban planning services for thriving communities.",
    icon: urban, // Matches: urban icon for urban design
  },
  {
    title: "Contract Administration and Engineering Design",
    link: "/services/constract-admin-and-engineering-design",
    sectionId: "contract",
    description:
      "Delivering projects with precision through expert contract management and engineering design.",
    icon: landscape,
  },
];

export default services;
