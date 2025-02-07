import {Route, Routes} from "react-router-dom"
// import Home from "../home/Home.jsx"
import Navbar from "../common/NavBar.jsx"
import Footer from "../common/Footer.jsx"
import Login from "../login-and-signup/Login.jsx"
import SignUp from "../login-and-signup/SignUp.jsx"
import Contact from "../contact/ContactUs.jsx"
import FAQs from "../Landing/FAQs.jsx"
import HowTo from "../Landing/HowTo.jsx"
import About from "../about/About.jsx"

const RouteConfig = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>

      {/* landing routes */}
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/faqs' element={<FAQs />} />
        <Route path='/howto' element={<HowTo />} />
        <Route path='/about' element={<About />} />

        {/* <Route path='/blogs' element={<Blogs />} /> */}
        {/* <Route path='/services' element={<Services />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default RouteConfig
