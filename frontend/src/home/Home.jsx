import React from "react"
import Hero from "./Hero"
import Testimonials from "./Testimonial"
import HowTo from "../Landing/HowTo"
import FAQs from "../Landing/FAQs"
import LandingNavBar from "../Landing/LandingNavBar"

const Home = () => {
  return (
    <>
      {/* <LandingNavBar /> */}
      <Hero />
      <Testimonials />
      <HowTo />
      <FAQs />
    </>
  )
}

export default Home
