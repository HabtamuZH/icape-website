import {Route, Routes} from "react-router-dom"
import Home from "../pages/Home.jsx"
import Navbar from "../common/NavBar.jsx"
import Footer from "../common/Footer.jsx"
import About from "../pages/About.jsx"
import ContactUs from "../pages/Contact.jsx"
import Blogs from "../pages/Blogs.jsx"

const RouteConfig = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/blog' element={<Blogs />} />
      </Routes>

      <Routes>
        
      </Routes>
      <Footer />
    </>
  )
}

export default RouteConfig
