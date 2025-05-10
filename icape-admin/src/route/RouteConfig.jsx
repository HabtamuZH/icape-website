/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Profile from "../admin/components/profile/Profile";
import BlogDashboard from "../admin/components/blogs/Index";
import Dashboard from "../admin/components/dashboard/Index";
import OpportunityForm from "../admin/components/careerOpportunity/Index";
import ApplicationView from "../admin/components/applications/ApplicationsView";
import FeedbackDashboard from "../admin/components/feedback/Index";
import Login from "../admin/components/login/Login";
import LoadingSpinner from "../common/LoadingSpinner";
import AdminTeamManagement from "../admin/components/teamMember/AdminTeamManagement";
import ProjectDashboard from "../admin/components/projects/Index";
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
        <Route path="/login"  element={<Login setToken={setToken} />} />

      {/* Admin Routes */}
      <Route
        path="/"
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
