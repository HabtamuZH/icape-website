import {Route, Routes} from "react-router-dom"
import Home from "../pages/Home.jsx"
import Navbar from "../common/NavBar.jsx"
import Footer from "../common/Footer.jsx"
import About from "../pages/About.jsx"
import ContactUs from "../pages/Contact.jsx"
import Blogs from "../pages/Blogs.jsx"
import Services from './../pages/Services';
import ProjectDetails from "../projects/ProjectDetails.jsx"
import Projects from "../projects/Projects.jsx"

import Layout from "../admin/Layout.jsx"

const RouteConfig = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/admin' element={<Layout />} />
        <Route path='/projects/:projectId' element={<ProjectDetails />} />
        <Route path="/projects/completed" element={<Projects />} />
        <Route path="/projects/ongoing" element={<Projects />} />
        <Route path="/projects/upcoming" element={<Projects />} />

        
      </Routes>
      <Footer />
    </>
  )
}

export default RouteConfig
