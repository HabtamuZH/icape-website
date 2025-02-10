import {Route, Routes} from "react-router-dom"
import Navbar from "../common/NavBar.jsx"
import Footer from "../common/Footer.jsx"
import About from "../pages/About.jsx"

const RouteConfig = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<About />} />
      </Routes>

      {/* landing routes */}
      <Routes>
        
      </Routes>
      <Footer />
    </>
  )
}

export default RouteConfig
