import {FiHome} from "react-icons/fi" // Feather Icons
import {
  FaPen,
  FaProjectDiagram,
  FaUser,
  FaBriefcase,
  FaEnvelopeOpenText
} from "react-icons/fa" 
import {MdFeedback} from "react-icons/md" 

const optionsData = [
  {
    Icon: FiHome,
    title: "Dashboard",
    link: "/admin"
  },
  {
    Icon: FaUser,
    title: "Profile",
    link: "profile"
  },
  {
    Icon: FaProjectDiagram,
    title: "Projects",
    link: "projects"
  },
  {
    Icon: FaPen,
    title: "Blogs",
    link: "blogs-post"
  },
  {
    Icon: MdFeedback,
    title: "Feedbacks",
    link: "view-feedbacks",
    notify: ""
  },
  {
    Icon: FaBriefcase, // Changed from MdFeedback to FaBriefcase for career-related context
    title: "Career Opportunity",
    link: "opportunity-form"
  },
  {
    Icon: FaEnvelopeOpenText, // Changed from MdFeedback to FaEnvelopeOpenText for applications
    title: "Applicants",
    link: "application-views",
    notify: ""
  }
  // {
  //   Icon: IoMdNotifications,
  //   title: "Notifications",
  //   link: "notifications",
  //   notify: 5 // Kept the notification count
  // }
  // {
  //   Icon: FiSettings,
  //   title: "Settings",
  //   link: "admin-setting"
  // }
]

export default optionsData
