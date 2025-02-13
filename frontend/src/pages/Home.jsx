import { SmoothScrollHero } from "./../components/Landing/ImageShow";
import { useEffect } from "react";

const Home = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SmoothScrollHero />
    </>
  );
};

export default Home;
