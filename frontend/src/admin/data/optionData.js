import {FiHome, FiSettings} from "react-icons/fi" // Feather Icons
import {
  FaPen,
  FaProjectDiagram,
  FaUser,
  FaBriefcase,
  FaEnvelopeOpenText
} from "react-icons/fa" // Font Awesome
import {IoMdNotifications} from "react-icons/io" // Ionicons
import {MdFeedback} from "react-icons/md" // Material Design

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
    title: "Post Projects",
    link: "projects-form"
  },
  {
    Icon: FaPen,
    title: "Post Blogs",
    link: "blogs-post"
  },
  {
    Icon: MdFeedback,
    title: "View Feedbacks",
    link: "view-feedbacks"
  },
  {
    Icon: FaBriefcase, // Changed from MdFeedback to FaBriefcase for career-related context
    title: "Post Career Opportunity",
    link: "career-Post"
  },
  {
    Icon: FaEnvelopeOpenText, // Changed from MdFeedback to FaEnvelopeOpenText for applications
    title: "View Applications Form",
    link: "application-views"
  },
  {
    Icon: IoMdNotifications,
    title: "Notifications",
    link: "notifications",
    notify: 5 // Kept the notification count
  },
  // {
  //   Icon: FiSettings,
  //   title: "Settings",
  //   link: "admin-setting"
  // }
]

export default optionsData
