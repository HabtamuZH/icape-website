import RouteConfig from "./route/RouteConfig";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
      <BrowserRouter>
        <ScrollToTop />
        <RouteConfig />
      </BrowserRouter>
    </>
  );
}

export default App;
