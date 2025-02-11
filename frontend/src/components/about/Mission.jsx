import {FaGlobe, FaLightbulb, FaHandsHelping} from "react-icons/fa"
import ScrollReveal from "scrollreveal"
import {useEffect} from "react"
import SpotlightCard from "./SpotlightCard"

const Mission = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal(".sr-global-impact", {
      opacity: 0,
      x: -50,
      duration: 1000,
      delay: 200,
      reset: true
    })

    ScrollReveal().reveal(".sr-innovation", {
      opacity: 0,
      x: 50,
      duration: 1000,
      delay: 400,
      reset: true
    })

    ScrollReveal().reveal(".sr-community-empowerment", {
      opacity: 0,
      x: -50,
      duration: 1000,
      delay: 600,
      reset: true
    })
  }, [])

  return (
    <section className='relative py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Section Title */}
        <div className='mb-16 sr-global-impact'>
          <h2 className='text-4xl font-bold tracking-wide sm:text-5xl text-gray-100 pb-6 text-center'>
            Our Mission
          </h2>
          <SpotlightCard>
            <p className='text-gray-300 mt-4 max-w-3xl mx-auto text-lg md:text-xl p-6'>
              We provide innovative architectural, engineering, and urban
              planning services that combine cutting-edge technology with expert
              craftsmanship. Our commitment to sustainability and client
              satisfaction drives us to create responsible and visionary
              environments.
            </p>
          </SpotlightCard>
        </div>

        {/* Mission Sections */}
        <div className='space-y-16'>
          {/* Global Impact */}
          <div className='flex flex-col md:flex-row items-center gap-8 sr-global-impact'>
            <div className='flex flex-col justify-center items-center gap-4'>
              <FaGlobe className='text-blue-400 text-6xl md:text-7xl' />
              <h3 className='text-3xl font-semibold text-gray-200 text-center md:text-left'>
                Global Impact
              </h3>
            </div>
            <SpotlightCard>
              <p className='text-gray-300 text-lg p-6 md:text-xl text-center md:text-left'>
                We aim to drive global change by fostering innovation and
                collaboration. Together, we can solve critical challenges and
                shape a better future for communities worldwide.
              </p>
            </SpotlightCard>
          </div>

          {/* Innovation */}
          <div className='flex flex-col md:flex-row-reverse items-center gap-8 sr-innovation'>
            <div className='flex flex-col justify-center items-center gap-4'>
              <FaLightbulb className='text-yellow-400 text-6xl md:text-7xl' />
              <h3 className='text-3xl font-semibold text-gray-200 text-center md:text-left'>
                Innovation
              </h3>
            </div>
            <SpotlightCard>
              <p className='text-gray-300 p-6 text-lg md:text-xl text-center md:text-left'>
                We embrace the latest technologies and creative solutions to
                tackle modern challenges and drive forward-thinking initiatives.
                Our vision is to transform industries and build a brighter
                future.
              </p>
            </SpotlightCard>
          </div>

          {/* Community Empowerment */}
          <div className='flex flex-col md:flex-row items-center gap-8 sr-community-empowerment'>
            <div className='flex flex-col justify-center items-center gap-4'>
              <FaHandsHelping className='text-green-400 text-6xl md:text-7xl' />
              <h3 className='text-3xl font-semibold text-gray-200 text-center md:text-left'>
                Empowering Communities
              </h3>
            </div>
            <SpotlightCard>
              <p className='text-gray-300 p-6 text-lg md:text-xl text-center md:text-left'>
                Our goal is to foster sustainable growth and empower communities
                by providing the resources and knowledge needed to create
                lasting change and promote social equity.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
