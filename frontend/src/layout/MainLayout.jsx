import Navbar from "../components/common/NavBar.jsx";
import Footer from "../components/common/Footer.jsx";
import { Outlet } from "react-router-dom";
import LoadingSpinner from "../components/common/LoadingSpinner.jsx";

const MainLayout = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary">
        <LoadingSpinner />
      </div>
    );
  }
  

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;