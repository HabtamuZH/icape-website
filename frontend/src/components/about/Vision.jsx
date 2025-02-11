import React, {useEffect} from "react"
import {FaLightbulb, FaGlobe, FaChartLine} from "react-icons/fa"
import ScrollReveal from "scrollreveal"
import SpotlightCard from "./SpotlightCard"

const Vision = () => {
  useEffect(() => {
    // ScrollReveal animations
    ScrollReveal().reveal(".vision-card", {
      delay: 200,
      distance: "50px",
      origin: "bottom",
      opacity: 0,
      duration: 1000,
      interval: 200, // Delay between animations for each element
      reset: true // Re-trigger on scroll up
    })
    ScrollReveal().reveal(".sr-global-impact", {
      opacity: 0,
      x: -50,
      duration: 1000,
      delay: 200,
      reset: true
    })
  }, [])

  return (
    <section className='relative py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header Section */}
        <div className='mb-16 sr-global-impact'>
          <h2 className='text-center text-4xl font-extrabold tracking-wide sm:text-5xl text-gray-100 pb-6'>
            Our Vision
          </h2>
          <SpotlightCard>
            <p className='text-gray-300 mt-4 max-w-3xl mx-auto text-lg md:text-xl p-6'>
              To pioneer innovative and sustainable design solutions that
              enhance the quality of life and shape the future of Ethiopian
              cities and communities.
            </p>
          </SpotlightCard>
        </div>

        {/* Vision Cards */}
        <div className='mt-16 grid gap-12 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
          {/* Innovation */}
          <SpotlightCard>
            <div className='vision-card group relative overflow-hidden p-10 transition-transform transform '>
              <FaLightbulb className='text-yellow-400 text-6xl mx-auto transition-all transform group-hover:rotate-12 group-hover:scale-110' />
              <h3 className='text-2xl font-semibold mt-6 text-center text-gray-200'>
                Innovation
              </h3>
              <p className='text-gray-300 mt-3 '>
                Pioneering groundbreaking solutions to tackle modern challenges
                through creativity and technology.
              </p>
              <div className='absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity'></div>
            </div>
          </SpotlightCard>

          {/* Global Impact */}
          <SpotlightCard>
            <div className='vision-card group relative overflow-hidden rounded-lg p-10 transition-transform transform '>
              <FaGlobe className='text-blue-400 text-6xl mx-auto transition-all transform group-hover:rotate-12 group-hover:scale-110' />
              <h3 className='text-2xl font-semibold mt-6 text-center text-gray-200'>
                Global Impact
              </h3>
              <p className='text-gray-300 mt-3'>
                Expanding our reach to create meaningful changes in industries
                and communities worldwide.
              </p>
              <div className='absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity'></div>
            </div>
          </SpotlightCard>
          {/* Sustainable Growth */}
          <SpotlightCard>
            <div className='vision-card group relative overflow-hidden rounded-lg  p-10 transition-transform transform'>
              <FaChartLine className='text-green-400 text-6xl mx-auto transition-all transform group-hover:rotate-12 group-hover:scale-110' />
              <h3 className='text-2xl font-semibold mt-6 text-center text-gray-200'>
                Sustainable Growth
              </h3>
              <p className='text-gray-300 mt-3'>
                Building a future where businesses thrive while maintaining
                environmental and social responsibility.
              </p>
              <div className='absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity'></div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}

export default Vision
