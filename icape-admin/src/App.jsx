import RouteConfig from "./route/RouteConfig";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./common/ScrollToTop";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
      <BrowserRouter>
        <ScrollToTop />
        <RouteConfig />
      </BrowserRouter>
    </>
  );
}

export default App;
