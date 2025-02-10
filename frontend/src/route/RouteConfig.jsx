import {Route, Routes} from "react-router-dom"
import Home from "../pages/Home.jsx"
import Navbar from "../common/NavBar.jsx"
import Footer from "../common/Footer.jsx"
import About from "../pages/About.jsx"

const RouteConfig = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>

      {/* landing routes */}
      <Routes>
        
      </Routes>
      <Footer />
    </>
  )
}

export default RouteConfig
