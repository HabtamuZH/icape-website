import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ContactUs from "../pages/Contact";
import Blogs from "../pages/Blogs";
import Services from "./../pages/Services";
import ProjectDetails from "../components/projects/ProjectDetails.jsx";
import Projects from "../components/projects/Projects.jsx";

import AdminLayout from "../layout/AdminLayout";
import MainLayout from "../layout/MainLayout";
import AdminDashbord from "../admin/AdminDashbord";
import ProjectsForm from "../admin/components/ProjectsForm";
import Profile from "../admin/components/Profile.jsx";
import BlogForm from "../admin/components/Blogpost.jsx";

const RouteConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/projects/completed" element={<Projects />} />
          <Route path="/projects/ongoing" element={<Projects />} />
          <Route path="/projects/upcoming" element={<Projects />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Services />} />
          <Route path="dashboard" element={<AdminDashbord />} />
          <Route path="profile" element={<Profile />} />
          <Route path="projects-form" element={<ProjectsForm />} />
          <Route path="Blogs-post" element={<BlogForm />} />

        </Route>
      </Routes>
    </>
  );
};

export default RouteConfig;
