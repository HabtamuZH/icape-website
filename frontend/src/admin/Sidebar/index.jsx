import Option from "./Option";
import { motion } from "framer-motion";
import TitleSection from "./Title";
import { FiHome, FiSettings } from "react-icons/fi";
import { useState } from "react";
import ToggleClose from "./ToggleClose";
import { FaPen, FaProjectDiagram, FaUser } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdFeedback } from "react-icons/md";

const optionsData = [
  {
    Icon: FiHome,
    title: "Dashboard",
    link: "/admin",
  },
  {
    Icon: FaUser,
    title: "Profile",
    link: "profile",
  },
  {
    Icon: FaProjectDiagram,
    title: "Projects-form",
    link: "projects-form",
  },
  {
    Icon: FaPen,
    title: "Blogs-post",
    link: "blogs-post",
  },
  {
    Icon: MdFeedback,
    title: "View-feedbacks",
    link: "view-feedbacks",
  },
  {
    Icon: IoMdNotifications,
    title: "Notifications",
    link: "notifications",
  },
  {
    Icon: FiSettings,
    title: "Settings",
    link: "settings",
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2"
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      <TitleSection open={open} />

      {optionsData.map(({ Icon, title, link }) => (
        <Option
          key={title}
          Icon={Icon}
          title={title}
          link={link}
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
      ))}

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

export default Sidebar;
