import Navbar from "../components/common/NavBar.jsx";
import Footer from "../components/common/Footer.jsx";
import { Outlet } from "react-router-dom";
import { ReactLenis } from "lenis/dist/lenis-react";
// import Navbar from "../components/common/NavBar";
// import Footer from "../components/common/Footer";

import ArchitecturalBackground from "../components/common/ArchitecturalBackground.jsx";

const MainLayout = () => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        duration: 1.5,
        smoothWheel: true,
      }}
    >
      <div className="min-h-screen transition-colors duration-300">
        <Navbar />
        <ArchitecturalBackground variant="master">
          <main className="pt-16 md:pt-20">
            <Outlet />
          </main>
          <Footer />
        </ArchitecturalBackground>
      </div>
    </ReactLenis>
  );
};

export default MainLayout;