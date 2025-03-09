/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ContactUs from "../pages/Contact";
import Services from "../pages/Services";
import ProjectDetails from "../components/projects/ProjectDetails";
import Projects from "../components/projects/Projects";
import AdminLayout from "../layout/AdminLayout";
import MainLayout from "../layout/MainLayout";
import Profile from "../admin/components/profile/Profile";
import BlogDashboard from "../admin/components/blogs/Index";
import Dashboard from "../admin/components/dashboard/Index";
import OpportunityForm from "../admin/components/careerOpportunity/Index";
import ApplicationView from "../admin/components/applications/ApplicationsView";
import AwardDetails from "../components/about/AwardDetails";
import FeedbackDashboard from "../admin/components/feedback/Index";
import Login from "../admin/components/login/Login";
import LoadingSpinner from "../components/common/LoadingSpinner";
import InternshipApplicationForm from "../components/career/forms/internApplications/InternshipApplicationForm";
import CareerApplicationForm from "../components/career/forms/careerApplications/CareerApplicationForm";
import Annoucement from "../components/career/Annoucement";
import ProjectDashboard from "../admin/components/projects/Index";
import AdminTeamManagement from "../admin/components/teamMember/AdminTeamManagement";
import BlogDetails from "../components/Blogs/BlogDetails";
import BlogList from "../components/Blogs/BlogList";
import ArchitecturalDesign from "../components/services/arcDesign/Index";
import UrbanDesignAndPlaning from './../components/services/urbanDesignAndPlaning/Index';
import ContractAdminAndEngineeringDesign from './../components/services/conrtactAdminAndEngDesign/Index';

// ProtectedRoute component to secure admin routes
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

const RouteConfig = () => {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
    checkAuth();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<MainLayout isLoading={loading} />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/about" element={<About />} />
        <Route path="/awards/:id" element={<AwardDetails />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/architectural-design"
          element={<ArchitecturalDesign />}
        />
        <Route
          path="/services/urban-design-and-planning"
          element={<UrbanDesignAndPlaning />}
        />
        <Route
          path="/services/constract-admin-and-engineering-design"
          element={<ContractAdminAndEngineeringDesign />}
        />
        <Route path="/career" element={<Annoucement />}>
          <Route index element={<Annoucement />} />{" "}
          {/* Default view for /career */}
          <Route path="intern-form" element={<InternshipApplicationForm />} />
          <Route path="career-form" element={<CareerApplicationForm />} />
        </Route>
        <Route path="/projects/" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Route>

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout onLogout={handleLogout} />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="teams" element={<AdminTeamManagement />} />
        <Route path="projects" element={<ProjectDashboard />} />
        <Route path="Blogs-post" element={<BlogDashboard />} />
        <Route path="View-feedbacks" element={<FeedbackDashboard />} />
        <Route path="opportunity-form" element={<OpportunityForm />} />
        <Route path="application-views" element={<ApplicationView />} />
      </Route>

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RouteConfig;
