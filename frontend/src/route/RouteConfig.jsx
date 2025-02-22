import React, {useState, useEffect} from "react"
import {Route, Routes, Navigate} from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import ContactUs from "../pages/Contact"
import Blogs from "../pages/Blogs"
import Services from "../pages/Services"
import ProjectDetails from "../components/projects/ProjectDetails"
import Projects from "../components/projects/Projects"
import AdminLayout from "../layout/AdminLayout"
import MainLayout from "../layout/MainLayout"
import ProjectsForm from "../admin/components/ProjectsForm"
import Profile from "../admin/components/Profile"
import BlogForm from "../admin/components/Blogpost"
import Dashboard from "../admin/components/dashboard/Index"
import Carrier from "../pages/Carrier"
import OpportunityForm from "../admin/components/careerOpportunity/OpportunityForm"
import ApplicationView from "../admin/components/ApplicationsView"
import Notifications from "../admin/components/Notifications"
import AdminSettings from "../admin/components/AdminSeetting"
import AwardDetails from "../components/about/AwardDetails"
import FeedbackDashboard from "../admin/components/feedback/FeedbackDashboard"
import Login from "../admin/components/login/Login"
import LoadingSpinner from "../components/common/LoadingSpinner" // Import your spinner
import InternshipApplicationForm from "../components/career/forms/InternshipApplicationForm"
import CareerApplicationForm from "../components/career/forms/CareerApplicationForm"

// ProtectedRoute component to secure admin routes
const ProtectedRoute = ({children}) => {
  const token = localStorage.getItem("token")
  return token ? children : <Navigate to='/login' />
}

const RouteConfig = () => {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [loading, setLoading] = useState(true) // Add loading state

  // Simulate initial loading (e.g., token check)
  useEffect(() => {
    const checkAuth = async () => {
      // Here you could add a token validation API call if needed
      // For now, just simulate a quick check
      setTimeout(() => {
        setLoading(false)
      }, 500) // Adjust delay as needed or replace with real auth check
    }
    checkAuth()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    setToken(null)
  }

  // Show spinner while loading
  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login setToken={setToken} />} />
        <Route path='/about' element={<About />} />
        <Route path='/awards/:id' element={<AwardDetails />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/carrier' element={<Carrier />} />
        <Route path='/intern-form' element={<InternshipApplicationForm />} />
        <Route path='/career-form' element={<CareerApplicationForm />} />
        <Route path='/projects/:projectId' element={<ProjectDetails />} />
        <Route path='/projects/completed' element={<Projects />} />
        <Route path='/projects/ongoing' element={<Projects />} />
        <Route path='/projects/upcoming' element={<Projects />} />
      </Route>

      {/* Admin Routes */}
      <Route
        path='/admin'
        element={
          <ProtectedRoute>
            <AdminLayout onLogout={handleLogout} />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path='profile' element={<Profile />} />
        <Route path='projects-form' element={<ProjectsForm />} />
        <Route path='Blogs-post' element={<BlogForm />} />
        <Route path='View-feedbacks' element={<FeedbackDashboard />} />
        <Route path='opportunity-form' element={<OpportunityForm />} />
        <Route path='application-views' element={<ApplicationView />} />
        <Route path='notifications' element={<Notifications />} />
        <Route path='admin-setting' element={<AdminSettings />} />
      </Route>

      {/* Catch-all redirect */}
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default RouteConfig
