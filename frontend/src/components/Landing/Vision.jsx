import React, {useEffect} from "react"
import ScrollReveal from "scrollreveal"
import SpotlightCard from "../about/SpotlightCard" // Verify path
import {Link} from "react-router-dom"
import {FaArrowRight, FaBookOpen, FaLightbulb, FaGlobe} from "react-icons/fa"
import backgroundImage from "./../../../public/bg.jpg" // Add a relevant image to your public folder

const ExpVision = () => {
  useEffect(() => {
    ScrollReveal().reveal(".vision-card", {
      delay: 200,
      distance: "50px",
      origin: "bottom",
      opacity: 0,
      duration: 1000,
      interval: 200,
      reset: true
    })
    ScrollReveal().reveal(".sr-global-impact", {
      opacity: 0,
      x: -50,
      duration: 1000,
      delay: 200,
      reset: true
    })
    ScrollReveal().reveal(".icon-feature", {
      delay: 300,
      distance: "30px",
      origin: "bottom",
      opacity: 0,
      duration: 800,
      interval: 150,
      reset: true
    })
  }, [])

  return (
    <section className='relative py-32 bg-secondary text-primary overflow-hidden'>
      {/* Background Image */}
      {/* <div className='absolute inset-0 z-0'>
        <img
          src={backgroundImage}
          alt='Insights Background'
          className='w-full h-full object-cover opacity-20'
          loading='lazy'
        />
        <div className='absolute inset-0 bg-primary/70'></div>
      </div> */}

      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center'>
        {/* Header Section */}
        <div className='vision-card mb-16 text-center'>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-primary mb-16 tracking-tight '>
            Explore Our Visionary Insights
          </h2>
          <div className='bg-light/95 shadow-lg border border-border rounded-xl'>
            <div className='px-6 py-8'>
              <p className='text-primary/80 text-lg md:text-xl font-body leading-relaxed max-w-3xl mx-auto'>
                Dive into a wealth of knowledge with our expertly crafted
                articles. From industry trends to innovative solutions, our blog
                empowers you to stay informed and inspired for the future.
              </p>
              {/* Icon Features */}
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8'>
                <div className='icon-feature flex flex-col items-center'>
                  <FaBookOpen className='text-accent text-3xl mb-2' />
                  <p className='text-primary/70 text-sm font-body'>
                    Expert Articles
                  </p>
                </div>
                <div className='icon-feature flex flex-col items-center'>
                  <FaLightbulb className='text-accent text-3xl mb-2' />
                  <p className='text-primary/70 text-sm font-body'>
                    Innovative Ideas
                  </p>
                </div>
                <div className='icon-feature flex flex-col items-center'>
                  <FaGlobe className='text-accent text-3xl mb-2' />
                  <p className='text-primary/70 text-sm font-body'>
                    Global Trends
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className='sr-global-impact'>
          <Link
            to='/blog'
            className='inline-flex items-center px-8 py-4 text-base md:text-lg font-body font-medium text-light bg-accent rounded-lg shadow-md hover:bg-opacity-80 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all duration-300'
          >
            Discover Our Blog
            <FaArrowRight className='ml-3 w-5 h-5 transform transition-transform group-hover:translate-x-1' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ExpVision
