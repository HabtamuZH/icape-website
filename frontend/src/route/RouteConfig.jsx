import {Route, Routes} from "react-router-dom"
import Home from "../home/Home"
import Login from "../login-and-signup/Login"
import Navbar from "../common/NavBar.jsx"
import Footer from "../common/Footer"

const RouteConfig = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}

export default RouteConfig
