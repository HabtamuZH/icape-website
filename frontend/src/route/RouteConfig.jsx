import {Route, Routes} from "react-router-dom"
import Home from "../home/Home.jsx"
import Navbar from "../common/NavBar.jsx"
import Footer from "../common/Footer.jsx"
import Login from "../login-and-signup/Login.jsx"
import SignUp from "../login-and-signup/SignUp.jsx"

const RouteConfig = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  )
}

export default RouteConfig
