import {Route, Routes} from "react-router"
import Login from "../login-and-signup/Login"


const RouteConfig = () => {
  return (
    <Routes>
      <Route>
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  )
}

export default RouteConfig
