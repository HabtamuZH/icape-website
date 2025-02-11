import { SmoothScrollHero } from "./../components/Landing/ImageShow";

const Home = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <>
      <SmoothScrollHero />
    </>
  );
};

export default Home;
