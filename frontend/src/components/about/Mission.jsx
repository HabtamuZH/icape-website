import {
  FaGlobe,
  FaLightbulb,
  FaHandsHelping,
  FaChartLine,
  FaUsers
} from "react-icons/fa"
import ScrollReveal from "scrollreveal"
import {useEffect} from "react"
import SpotlightCard from "./SpotlightCard"
import {Link} from "react-router-dom"
import global from "../../../public/arcDesign.jpeg"
import innovation from "../../../public/workteam.jpg"
import community from "../../../public/teamimages.jpg"

const Mission = () => {
  useEffect(() => {
    ScrollReveal().reveal(".mission-element", {
      opacity: 0,
      duration: 1000,
      distance: "50px",
      interval: 200,
      reset: true
    })
  }, [])

  return (
    <section className='relative py-20 bg-secondary text-light'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Animated Section Title */}
        <div className='mb-20 mission-element'>
          <h2 className='text-4xl font-bold tracking-tight sm:text-6xl text-center text-primary font-heading'>
            Our Missions
          </h2>

          <div className='mt-12 max-w-3xl mx-auto mission-element'>
            <div className='relative overflow-hidden group shadow-2xl rounded-lg bg-secondary'>
              <div className="absolute inset-0 bg-[url('/texture.jpg')] opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className='relative p-2 md:p-8 space-y-2 sm:space-y-4'>
                <p className='text-sm sm:text-xl md:text-2xl text-gray-600 font-light leading-relaxed font-body'>
                  We pioneer{" "}
                  <span className='text-accent font-medium'>
                    sustainable architectural solutions
                  </span>{" "}
                  that harmonize cutting-edge technology with timeless
                  craftsmanship. Our triple focus on{" "}
                  <span className='text-green-400'>
                    environmental stewardship
                  </span>
                  ,
                  <span className='text-yellow-400'>
                    {" "}
                    technological innovation
                  </span>
                  , and
                  <span className='text-purple-400'>
                    {" "}
                    community empowerment
                  </span>{" "}
                  drives every project.
                </p>
                <div className='flex justify-center gap-4 mt-6'>
                  <Link
                    to='/projects'
                    className='flex items-center text-sm px-2 py-1 md:px-6 md:py-3 bg-accent hover:bg-opacity-80 rounded-lg md:rounded-full transition-all font-body'
                  >
                    <FaChartLine className='mr-2' /> Our Projects
                  </Link>
                  <Link
                    to='/about'
                    className='flex items-center px-2 md:px-6 py-1 md:py-3 border text-gray-800 border-primary hover:border-accent rounded-lg md:rounded-full transition-all font-body'
                  >
                    <FaUsers className='mr-2' /> About Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Mission Pillars */}
        <div className='grid gap-16 md:gap-24'>
          {/* Global Impact Section */}
          <div className='grid md:grid-cols-2 gap-8 items-center mission-element'>
            <div className='relative group flex justify-center shadow-2xl rounded-lg bg-secondary'>
              <div className='absolute rounded-3xl blur opacity-30 group-hover:opacity-50 transition-all' />
              <div className='relative p-8 bg-secondary rounded-3xl space-y-6'>
                <FaGlobe className='text-6xl text-orange-800 animate-float' />
                <h3 className='text-4xl font-bold text-primary font-heading'>
                  Global Footprint
                </h3>
                <p className='text-lg text-gray-700 leading-relaxed font-body'>
                  Operating across 3 continents, we've delivered sustainable
                  solutions for
                  <span className='text-accent'>
                    {" "}
                    150+ international projects
                  </span>
                  . Our cross-cultural teams combine local expertise with global
                  best practices.
                </p>
                <div className='flex gap-2 flex-wrap'>
                  <span className='px-3 py-1 bg-accent/20 rounded-full text-orange-700 font-body'>
                    🌍 12 Countries
                  </span>
                  <span className='px-3 py-1 bg-accent/20 rounded-full text-orange-700 font-body'>
                    🏗️ 45M sq.ft Designed
                  </span>
                  <span className='px-3 py-1 bg-accent/20 rounded-full text-orange-700 font-body'>
                    🌱 60% Energy Savings
                  </span>
                </div>
              </div>
            </div>

            <SpotlightCard className='h-full'>
              <img
                src={global}
                alt='Global projects collage'
                className='w-full h-full object-cover rounded-2xl'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent flex items-end p-6'>
                <span className='text-light text-xs md:text-lg font-body'>
                  Shanghai Eco-Tower | Dubai Smart City | Nairobi Innovation Hub
                </span>
              </div>
            </SpotlightCard>
          </div>

          {/* Innovation Section
          <div className='grid md:grid-cols-2 gap-8 items-center mission-element'>
            <SpotlightCard className='h-full order-last md:order-first'>
              <img
                src={innovation}
                alt='Innovation showcase'
                className='w-full h-full object-cover rounded-2xl'
              />
              <div className='absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent flex items-center p-6'>
                <span className='text-light text-xs md:text-lg font-body'>
                  AI-Driven Design Systems | BIM Integration | Smart Building
                  Solutions
                </span>
              </div>
            </SpotlightCard>

            <div className='relative group flex justify-center shadow-2xl rounded-lg bg-secondary'>
              <div className='absolute rounded-3xl blur opacity-30 group-hover:opacity-50 transition-all' />
              <div className='relative p-8 bg-secondary rounded-3xl space-y-6'>
                <FaLightbulb className='text-6xl text-yellow-800 animate-pulse' />
                <h3 className='text-4xl font-bold text-primary font-heading'>
                  Tech Revolution
                </h3>
                <p className='text-lg text-gray-700 leading-relaxed font-body'>
                  Our R&D hub drives industry transformation with:
                </p>
                <ul className='space-y-3 text-gray-500 font-body'>
                  <li className='flex items-center gap-2'>
                    <div className='w-2 h-2 bg-yellow-600 rounded-full' />
                    Parametric design systems reducing planning time by 40%
                  </li>
                  <li className='flex items-center gap-2'>
                    <div className='w-2 h-2 bg-yellow-600 rounded-full' />
                    AI-powered sustainability analysis tools
                  </li>
                  <li className='flex items-center gap-2'>
                    <div className='w-2 h-2 bg-yellow-600 rounded-full' />
                    VR collaboration platforms for global teams
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

          {/* Community Empowerment Section */}
          <div className='grid md:grid-cols-2 gap-8 items-center mission-element '>
            <div className='relative group flex justify-center shadow-2xl rounded-lg bg-secondary'>
              <div className='absolute rounded-3xl blur opacity-30 group-hover:opacity-50 transition-all' />
              <div className='relative p-8  rounded-3xl space-y-6  bg-secondary '>
                <FaHandsHelping className='text-6xl text-green-800 animate-bounce' />
                <h3 className='text-4xl font-bold text-primary font-heading'>
                  Community First
                </h3>
                <p className='text-lg text-gray-700 leading-relaxed font-body'>
                  We've empowered communities through:
                </p>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='p-4 bg-gray-700/30 rounded-xl'>
                    <div className='text-2xl font-bold text-green-800'>
                      15K+
                    </div>
                    <div className='text-sm text-gray-700 font-body'>
                      Training Hours
                    </div>
                  </div>
                  <div className='p-4 bg-gray-700/30 rounded-xl'>
                    <div className='text-2xl font-bold text-green-800'>
                      $2.5M
                    </div>
                    <div className='text-sm text-gray-700 font-body'>
                      Community Investment
                    </div>
                  </div>
                </div>
                <div className='flex gap-2 flex-wrap'>
                  <span className='px-3 py-1 bg-green-500/20 rounded-full text-green-600 font-body'>
                    🏘️ Urban Renewal
                  </span>
                  <span className='px-3 py-1 bg-green-500/20 rounded-full text-green-600 font-body'>
                    📚 Education Programs
                  </span>
                  <span className='px-3 py-1 bg-green-500/20 rounded-full text-green-600 font-body'>
                    ⚕️ Health Initiatives
                  </span>
                </div>
              </div>
            </div>

            <SpotlightCard className='h-full'>
              <img
                src={community}
                alt='Community projects'
                className='w-full h-full object-cover rounded-2xl'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent flex items-end p-6'>
                <span className='text-light text-xs md:text-lg font-body'>
                  Kampala Youth Center | Mumbai Slum Redevelopment | Rio Green
                  Spaces
                </span>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
