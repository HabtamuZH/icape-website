import RouteConfig from "./route/RouteConfig"
import {BrowserRouter} from "react-router"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css" // Import styles


function App() {
  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
      />
      <BrowserRouter>
        <RouteConfig />
      </BrowserRouter>
    </>
  )
}

export default App
