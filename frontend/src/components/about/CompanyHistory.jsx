import {useEffect} from "react"
import {
  FaHistory,
  FaBuilding,
  FaProjectDiagram,
  FaAward,
  FaArrowRight
} from "react-icons/fa"
import ScrollReveal from "scrollreveal"
import SpotlightCard from "./SpotlightCard"
import {Link} from "react-router-dom"
import teamImage from "../../../public/teamimages.jpg" // Verify image path
import award1 from "../../../public/award.jpeg"
import award2 from "../../../public/award1.jpeg"
import award3 from "../../../public/award 2.jpeg"
import awardBg from "../../../public/awardbg.jpg"
import office from "../../../public/firstoffice.jpeg"
import project from "../../../public/firstproject.jpg"
import team from "../../../public/workteam.jpg"
import companyBg from "../../../public/companyBg.jpeg"

const CompanyHistory = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 800,
      delay: 100,
      reset: true
    })
    window.scrollTo(0, 0)

    sr.reveal(".reveal", {opacity: 0, interval: 200})
    sr.reveal(".reveal-2", {opacity: 0, interval: 300})
    sr.reveal(".reveal-3", {opacity: 0, interval: 400})
    sr.reveal(".reveal-4", {opacity: 0, interval: 500})
  }, [])

  return (
    <section className='relative py-20 pt-32 bg-secondary text-primary'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Enhanced Header Section */}
        <div className='text-center mb-16 reveal'>
          <h2 className='text-4xl font-bold tracking-wide sm:text-5xl text-primary font-heading'>
            Our Journey
          </h2>
          <p className='text-gray-600 mt-4 max-w-2xl mx-auto text-lg font-body'>
            A story of vision, innovation, and excellence in architectural and
            engineering consulting.
          </p>
        </div>

        {/* Interactive Image Section */}
        <div className='reveal mb-20 group relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:shadow-xl hover:scale-95'>
          <img
            src={teamImage}
            alt='Our Team'
            className='w-full h-96 object-cover transform transition-all duration-500 group-hover:scale-105'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent flex items-end p-8'>
            <div className='text-light'>
              <h3 className='text-2xl font-bold mb-2 font-heading'>
                Meet Our Team
              </h3>
              <p className='text-gray-300 mb-4 font-body'>
                Passionate professionals driving innovation
              </p>
              <Link
                to='/team'
                className='inline-flex items-center px-6 py-2 bg-accent rounded-lg hover:bg-opacity-80 transition-colors font-body'
              >
                View Team <FaArrowRight className='ml-2' />
              </Link>
            </div>
          </div>
        </div>

        {/* Timeline Sections */}
        <div className='space-y-20'>
          {/* Introduction Section */}
          <div className='flex flex-col md:flex-row items-center gap-8 reveal'>
            <div className='flex flex-col items-center text-center md:text-left md:items-start'>
              <FaHistory className='text-accent text-6xl mb-4 hover:rotate-12 transition-transform' />
              <h3 className='text-3xl font-semibold text-primary font-heading'>
                Introduction
              </h3>
            </div>
            {/* <SpotlightCard> */}
            <div className='md:p-6 space-y-1 md:space-y-4 p-1 shadow-2xl rounded-lg bg-secondary'>
              <p className='text-gray-700 xs:text-sm lg:text-lg md:text-xl font-body'>
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
              <div className='grid grid-cols-2 gap-4 mt-4'>
                <div className='p-4 bg-primary rounded-lg text-center'>
                  <span className='xs:text-sm sm:text-2xl font-bold text-light'>
                    10+
                  </span>
                  <p className='text-xs sm:text-2xl text-gray-300 font-body'>
                    Years Experience
                  </p>
                </div>
                <div className='p-4 bg-primary rounded-lg text-center'>
                  <span className='xs:text-sm sm:text-2xl font-bold text-light'>
                    150+
                  </span>
                  <p className='text-xs sm:text-2xl text-gray-300 font-body'>
                    Projects Completed
                  </p>
                </div>
              </div>
            </div>
            {/* </SpotlightCard> */}
          </div>

          {/* Foundation Section with Image Timeline */}
          <div className='flex flex-col md:flex-row-reverse items-center gap-8 reveal-2 group'>
            <div className='flex flex-col items-center text-center md:text-left md:items-start'>
              <FaBuilding className='text-accent text-6xl mb-4 hover:scale-110 transition-transform' />
              <h3 className='text-3xl font-semibold text-primary font-heading'>
                Foundation
              </h3>
            </div>

            <SpotlightCard className='hover:border-accent transition-colors p-0 overflow-hidden relative'>
              {/* Background Image with Overlay */}
              <div className='absolute inset-0'>
                <img
                  src={companyBg}
                  alt='Company founding team'
                  className='w-full h-full object-cover opacity-20'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent' />
              </div>

              <div className='relative z-10 p-6'>
                {/* Main Content */}
                <p className='text-gray-200 text-lg md:text-xl mb-4 font-body'>
                  Established with a vision to seamlessly blend aesthetics and
                  functionality, iCAPE has been at the forefront of
                  architectural evolution in Ethiopia.
                </p>

                {/* Image Timeline */}
                <div className='grid grid-cols-3 gap-4 mt-6'>
                  <div className='relative group cursor-pointer'>
                    <img
                      src={office}
                      alt='First office'
                      className='w-full h-32 object-cover rounded-lg transform transition-all duration-300 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-accent/20 rounded-lg opacity-0 text-white group-hover:opacity-100 transition-opacity'>
                      First Office
                    </div>
                  </div>
                  <div className='relative group cursor-pointer'>
                    <img
                      src={project}
                      alt='First project'
                      className='w-full h-32 object-cover rounded-lg transform transition-all duration-300 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-accent/20 rounded-lg opacity-0 text-white group-hover:opacity-100 transition-opacity'>
                      First Project
                    </div>
                  </div>
                  <div className='relative group cursor-pointer'>
                    <img
                      src={team}
                      alt='Team photo'
                      className='w-full h-32 object-cover rounded-lg transform transition-all duration-300 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-accent/20 rounded-lg opacity-0 text-white group-hover:opacity-100 transition-opacity'>
                      Our Teams
                    </div>
                  </div>
                </div>

                {/* Milestone Badges */}
                <div className='flex gap-3 mt-6 flex-wrap'>
                  <div className='px-3 py-1 bg-accent/20 rounded-full text-sm text-accent flex items-center font-body'>
                    <span className='mr-2'>🏛️</span>2013
                  </div>
                  <div className='px-3 py-1 bg-accent/20 rounded-full text-sm text-accent flex items-center font-body'>
                    <span className='mr-2'>📈</span>25+ Founding Members
                  </div>
                  <div className='px-3 py-1 bg-accent/20 rounded-full text-sm text-accent flex items-center font-body'>
                    <span className='mr-2'>🏆</span>First Award
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Interactive Services Section */}
          <div className='relative flex flex-col md:flex-row items-center gap-8 reveal-2 group'>
            <div className='flex flex-col items-center text-center md:text-left md:items-start'>
              <FaProjectDiagram className='text-accent text-6xl mb-4 hover:animate-pulse' />
              <h3 className='text-3xl font-semibold text-primary font-heading'>
                Our Services
              </h3>
            </div>

            <div className='hover:border-accent transition-colors p-6 shadow-2xl rounded-lg bg-secondary'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {[
                  {
                    title: "Urban Planning",
                    image: "urbanPlan.jpeg",
                    route: "/projects/completed",
                    description: "Master plans shaping sustainable cities"
                  },
                  {
                    title: "Architectural Design",
                    image: "/arcDesign.jpeg",
                    route: "/projects/ongoing",
                    description: "Innovative structures defining skylines"
                  },
                  {
                    title: "Sustainable Solutions",
                    image: "/sustainableDesign.jpeg",
                    route: "/projects/upcoming",
                    description: "Eco-friendly future-forward designs"
                  }
                ].map((service, index) => (
                  <Link
                    key={index}
                    to={service.route}
                    className='group relative block overflow-hidden rounded-xl hover:shadow-xl transition-all'
                  >
                    <div className='relative h-48'>
                      <img
                        src={service.image}
                        alt={service.title}
                        className='w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent' />
                    </div>

                    <div className='absolute bottom-0 left-0 p-4 text-light'>
                      <h4 className='text-xl font-semibold mb-1 font-heading'>
                        {service.title}
                      </h4>
                      <p className='text-sm opacity-90 font-body'>
                        {service.description}
                      </p>
                    </div>

                    <div className='absolute top-2 right-2 bg-accent/80 text-light px-3 py-1 rounded-full text-sm font-body'>
                      <FaArrowRight className='inline-block mr-1' />
                      Explore
                    </div>
                  </Link>
                ))}
              </div>

              {/* View All Button */}
              <div className='mt-6 text-center'>
                <Link
                  to='/services'
                  className='inline-flex items-center px-6 py-2 bg-accent text-light rounded-lg hover:bg-opacity-80 transition-colors font-body'
                >
                  View All Services
                  <FaArrowRight className='ml-2' />
                </Link>
              </div>
            </div>
          </div>

          {/* Awards Section with Image Gallery */}
          <div className='flex flex-col md:flex-row-reverse items-center gap-8 reveal-4'>
            <div className='flex flex-col items-center text-center md:text-left md:items-start'>
              <FaAward className='text-accent text-6xl mb-4 hover:rotate-[30deg] transition-transform' />
              <h3 className='text-3xl font-semibold text-primary font-heading'>
                Recognition
              </h3>
            </div>

            <div className='hover:shadow-accent/20 relative overflow-hidden group shadow-2xl rounded-lg bg-secondary w-full'>
              <div className='p-1 sm:p-6 relative z-10'>
                {/* Single Award Highlight */}
                <div className='relative aspect-video rounded-lg overflow-hidden hover:scale-105 transition-transform'>
                  <img
                    src={award2} // Your IKKA Award image
                    alt='IKKA Award for Architectural Excellence'
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute inset-0 bg-accent/20 hover:bg-transparent transition-colors' />
                </div>

                {/* Text Overlay */}
                <div className='relative bg-dark/90 backdrop-blur-sm p-4 rounded-lg mt-4'>
                  <p className='text-light text-lg md:text-xl font-body'>
                    Honored with the prestigious:
                    <ul className='list-disc list-inside mt-2 space-y-1'>
                      <li className='text-accent'>
                        IKKA Award for Architectural Excellence
                      </li>
                    </ul>
                    <p className='mt-3 mb-3 text-gray-300 text-sm'>
                      Recognizing outstanding innovation in sustainable
                      architectural design
                    </p>
                  </p>
                </div>
              </div>

              {/* Background Pattern */}
              <div className='absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity'>
                <img
                  src={awardBg}
                  alt='Award pattern background'
                  className='w-full h-full object-cover'
                />
              </div>

              {/* View Details Button */}
              <Link
                to='/awards/ikka'
                className='absolute z-50 bottom-2 right-2 md:bottom-12 md:right-8 flex items-center 
      gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-accent/80 hover:bg-accent rounded-full transition-colors font-body'
              >
                <span className='text-xs sm:text-sm font-medium'>
                  View Details
                </span>
                <FaArrowRight className='w-4 h-4' />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='mt-20 text-center reveal'>
          <h3 className='text-2xl font-bold text-primary mb-4 font-heading'>
            Ready to Build the Future With Us?
          </h3>
          <div className='flex justify-center gap-4'>
            <Link
              to='/contactus'
              className='px-4 md:px-8 py-2 md:py-3 bg-accent rounded-lg hover:bg-opacity-80 flex items-center gap-2 transition-colors font-body'
            >
              Get Started <FaArrowRight />
            </Link>
            <Link
              to='/services'
              className='px-4 md:px-8 py-2 md:py-3 border border-primary rounded-lg hover:border-accent hover:text-accent transition-colors font-body'
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyHistory
