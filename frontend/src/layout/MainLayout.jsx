import Navbar from "../components/common/NavBar.jsx";
import Footer from "../components/common/Footer.jsx";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
