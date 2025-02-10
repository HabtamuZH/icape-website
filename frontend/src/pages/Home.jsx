import BlurText from "../common/BlurText.jsx";
import GradientText from "../common/GraddientText.jsx"
import { SmoothScrollHero } from "../Landing/ImageShow.jsx";

const Home = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <>
    <SmoothScrollHero/>
      </>
  );
};

export default Home;