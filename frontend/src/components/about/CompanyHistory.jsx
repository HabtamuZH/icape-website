import {useEffect} from "react"
import {FaHistory, FaBuilding, FaProjectDiagram, FaAward} from "react-icons/fa"
import ScrollReveal from "scrollreveal"
import SpotlightCard from "./SpotlightCard"
import {Link} from "react-router-dom"

const CompanyHistory = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
      distance: "50px",
      duration: 800,
      delay: 100,
      reset: true
    })

    // Reveal each section with a different delay
    sr.reveal(".reveal", {opacity: 0, interval: 200})
    sr.reveal(".reveal-2", {opacity: 0, interval: 300})
    sr.reveal(".reveal-3", {opacity: 0, interval: 400})
    sr.reveal(".reveal-4", {opacity: 0, interval: 500})
  }, [])

  return (
    <section className='relative py-20 pt-32 bg-gray-900 text-white'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Section Title */}
        <div className='text-center mb-16 reveal '>
          <h2 className='text-4xl font-bold tracking-wide sm:text-5xl text-gray-100'>
            Our Journey
          </h2>
          <p className='text-gray-400 mt-4 max-w-2xl mx-auto text-lg'>
            A story of vision, innovation, and excellence in architectural and
            engineering consulting.
          </p>
        </div>

        {/* Timeline Sections */}
        <div className='space-y-20'>
          {/* Introduction */}
          <div className='flex flex-col md:flex-row items-center gap-8 reveal'>
            <div className='flex flex-col items-center text-center md:text-left md:items-start'>
              <FaHistory className='text-blue-400 text-6xl' />
              <h3 className='text-3xl font-semibold text-gray-200 mt-4'>
                Introduction
              </h3>
            </div>
            <SpotlightCard>
              <p className='text-gray-300 text-lg md:text-xl'>
                iCAPE Consulting Architects and Engineers PLC (iCAPE Consulting
                or simply iCAPE) is a Category I, leading architectural and
                engineering consulting firm in Ethiopia with over 10 years of
                experience. We have a proven track record of successfully
                completing diverse architectural projects, ranging from hotels
                and mixed-use offices to shopping malls and educational
                facilities (high schools and kindergartens). Our urban planning
                expertise includes the preparation of basic plans for numerous
                towns across the nation. Furthermore, our commitment to design
                excellence has been recognized through numerous architectural
                competition wins.
              </p>
            </SpotlightCard>
          </div>

          {/* Foundation */}
          <div className='flex flex-col md:flex-row-reverse items-center gap-8 reveal-2'>
            <div className='flex flex-col items-center text-center md:text-left md:items-start'>
              <FaBuilding className='text-green-400 text-6xl' />
              <h3 className='text-3xl font-semibold text-gray-200 mt-4'>
                Founded
              </h3>
            </div>
            <SpotlightCard>
              <p className='text-gray-300 text-lg md:text-xl p-6'>
                Established with a vision to seamlessly blend aesthetics and
                functionality, iCAPE has been at the forefront of architectural
                evolution in Ethiopia.
              </p>
            </SpotlightCard>
          </div>

          {/* Expanding Services */}
          <div className='relative flex flex-col md:flex-row items-center gap-8 reveal-3'>
            <div className='flex flex-col items-center text-center md:text-left md:items-start'>
              <FaProjectDiagram className='text-purple-400 text-6xl' />
              <h3 className='text-3xl font-semibold text-gray-200 mt-4'>
                Expanding Services
              </h3>
            </div>
            <SpotlightCard>
              <p className='text-gray-300 text-lg md:text-xl p-6'>
                Our expertise has expanded beyond architecture into urban
                planning, contributing to innovative solutions for sustainable
                cities.
              </p>
            </SpotlightCard>

            {/* See More Button */}
            <Link
              to='/services' // Link to the section or page
              className='absolute bottom-4 right-4 bg-gray-700 text-white py-2 px-6 rounded-xl shadow-lg hover:bg-gray-500 transition-all'
            >
              See More
            </Link>
          </div>

          {/* Recognition */}
          <div className='flex flex-col md:flex-row-reverse items-center gap-8 reveal-4'>
            <div className='flex flex-col items-center text-center md:text-left md:items-start'>
              <FaAward className='text-yellow-400 text-6xl' />
              <h3 className='text-3xl font-semibold text-gray-200 mt-4'>
                Industry Recognition
              </h3>
            </div>

            <SpotlightCard>
              <p className="text-gray-300 text-lg md:text-xl p-6 bg-[url('/award.jpg')] bg-cover bg-center bg-no-repeat rounded-lg">
                Our work has been honored with awards such as the prestigious
                IKKA Award for excellence in architectural design and urban
                impact.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyHistory
