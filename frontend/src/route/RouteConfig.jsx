import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ContactUs from "../pages/Contact";
import Blogs from "../pages/Blogs";
import Services from "./../pages/Services";
import ProjectDetails from "../components/projects/ProjectDetails";
import Projects from "../components/projects/Projects";

import AdminLayout from "../layout/AdminLayout";
import MainLayout from "../layout/MainLayout";
import ProjectsForm from "../admin/components/ProjectsForm";
import Profile from "../admin/components/Profile";
import BlogForm from "../admin/components/Blogpost";
import Feedbacks from "../admin/components/Feedbacks";
import Dashboard from "./../admin/components/dashboard/Index";
import Carrier from "../pages/Carrier";
import ApplicationForm from "../components/career/ApplicationForm"
import CareerPost from "../admin/components/CareerPost"
import ApplicationView from "../admin/components/ApplicationsView";
import Notifications from "../admin/components/Notifications";
import AdminSettings from "../admin/components/AdminSeetting"
import AwardDetails from "../components/about/AwardDetails";

const RouteConfig = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
            <Route path='/awards/:id' element={<AwardDetails />} />

          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/carrier' element={<Carrier />} />
          <Route path='/application-forms' element={<ApplicationForm />} />

          <Route path='/projects/:projectId' element={<ProjectDetails />} />
          <Route path='/projects/completed' element={<Projects />} />
          <Route path='/projects/ongoing' element={<Projects />} />
          <Route path='/projects/upcoming' element={<Projects />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='profile' element={<Profile />} />
          <Route path='projects-form' element={<ProjectsForm />} />
          <Route path='Blogs-post' element={<BlogForm />} />
          <Route path='View-feedbacks' element={<Feedbacks />} />
          <Route path='career-post' element={<CareerPost />} />
          <Route path='application-views' element={<ApplicationView />} />
          <Route path='notifications' element={<Notifications />} />
          <Route path='admin-setting' element={<AdminSettings />} />
        </Route>
      </Routes>
    </>
  )
};

export default RouteConfig;
