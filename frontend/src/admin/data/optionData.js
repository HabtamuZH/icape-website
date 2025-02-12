import { FiHome, FiSettings } from "react-icons/fi";
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


export default optionsData;