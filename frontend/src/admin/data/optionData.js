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
    title: "Post Projects",
    link: "projects-form",
  },
  {
    Icon: FaPen,
    title: "Post Blogs",
    link: "blogs-post",
  },
  {
    Icon: MdFeedback,
    title: "View Feedbacks",
    link: "view-feedbacks",
  },
  {
    Icon: MdFeedback,
    title: "Post Career Opportunity",
    link: "career-Post",
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