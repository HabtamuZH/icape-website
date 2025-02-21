import React, {useEffect} from "react"
import {
  FaLightbulb,
  FaGlobe,
  FaChartLine,
  FaHandshake,
  FaSeedling
} from "react-icons/fa"
import ScrollReveal from "scrollreveal"
import SpotlightCard from "./SpotlightCard"
import {Link} from "react-router-dom"

const Vision = () => {
  useEffect(() => {
    ScrollReveal().reveal(".vision-element", {
      delay: 200,
      distance: "50px",
      origin: "bottom",
      opacity: 0,
      duration: 1000,
      interval: 200,
      reset: true
    })
  }, [])

  return (
    <section className='relative py-20 bg-secondary text-light overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Enhanced Header Section */}
        <div className='mb-16 vision-element'>
          <h2 className='text-center text-4xl font-bold sm:text-6xl text-primary font-heading'>
            Our Visions
          </h2>

          <div className='mt-12 max-w-4xl mx-auto'>
            <div className='relative overflow-hidden group p-8 shadow-2xl rounded-lg bg-secondary border border-gray-300'>
              <div className="absolute inset-0 bg-[url('/texture.jpg')] opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className='relative space-y-4'>
                <p className='text-sm sm:text-xl md:text-2xl text-gray-800 font-light leading-relaxed font-body'>
                  We envision{" "}
                  <span className='text-accent'>Ethiopian cities</span> as
                  global benchmarks of sustainable development, where{" "}
                  <span className='text-green-400'>
                    innovation meets tradition
                  </span>
                  , and communities thrive in{" "}
                  <span className='text-yellow-400'>
                    harmony with their environment
                  </span>
                  .
                </p>
                <div className='flex justify-center gap-4 mt-6 flex-wrap'>
                  <Link
                    to='/projects'
                    className='flex items-center px-6 py-3 bg-accent hover:bg-opacity-80 rounded-full transition-all text-sm sm:text-base font-body'
                  >
                    <FaChartLine className='mr-2' /> Explore Projects
                  </Link>
                  <Link
                    to='/about'
                    className='flex items-center text-gray-700 px-6 py-3 border border-primary hover:border-accent rounded-full transition-all text-sm sm:text-base font-body'
                  >
                    <FaHandshake className='mr-2' /> Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Vision Cards Grid */}
        <div className='grid gap-8 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 vision-element'>
          {/* Innovation Card */}
          <div className='group relative overflow-hidden h-full shadow-2xl rounded-lg bg-secondary'>
            <div className="absolute inset-0 bg-[url('/innovation-bg.jpg')] opacity-30 group-hover:opacity-40 transition-opacity" />
            <div className='relative md:p-8 h-full flex flex-col'>
              <div className='mb-6 flex justify-center'>
                <FaLightbulb className='text-6xl text-yellow-400 animate-pulse' />
              </div>
              <h3 className='text-3xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent text-center mb-4 font-heading'>
                Technological Leap
              </h3>
              <p className='text-gray-600 text-center mb-6 font-body'>
                Driving Ethiopia's digital transformation in urban development
              </p>
              <div className='mt-auto space-y-4'>
                <div className='flex justify-between text-sm text-gray-600 font-body'>
                  <span>AI Integration</span>
                  <span>85%</span>
                </div>
                <div className='h-2 bg-gray-700 rounded-full'>
                  <div className='h-full bg-yellow-400 rounded-full w-4/5' />
                </div>
                <ul className='space-y-2 text-gray-600 text-sm font-body'>
                  <li className='flex items-center gap-2'>
                    <div className='w-2 h-2 bg-yellow-400 rounded-full' />
                    Smart City Solutions
                  </li>
                  <li className='flex items-center gap-2'>
                    <div className='w-2 h-2 bg-yellow-400 rounded-full' />
                    BIM Implementation
                  </li>
                  <li className='flex items-center gap-2'>
                    <div className='w-2 h-2 bg-yellow-400 rounded-full' />
                    VR Planning Tools
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Global Impact Card */}
          <div className='group relative overflow-hidden h-full shadow-2xl rounded-lg bg-secondary'>
            <div className="absolute inset-0 bg-[url('/global-bg.jpg')] opacity-30 group-hover:opacity-40 transition-opacity" />
            <div className='relative md:p-8 h-full flex flex-col'>
              <div className='mb-6 flex justify-center'>
                <FaGlobe className='text-6xl text-accent animate-float' />
              </div>
              <h3 className='text-3xl font-bold bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent text-center mb-4 font-heading'>
                Worldwide Reach
              </h3>
              <p className='text-gray-600 text-center mb-6 font-body'>
                Creating impact across borders through collaborative excellence
              </p>
              <div className='mt-20 grid grid-cols-2 gap-4 text-center'>
                <div className='p-4 bg-gray-800/30 rounded-xl'>
                  <div className='text-2xl font-bold text-accent'>15+</div>
                  <div className='text-sm text-gray-800 font-body'>
                    Countries
                  </div>
                </div>
                <div className='p-4 bg-gray-800/30 rounded-xl'>
                  <div className='text-2xl font-bold text-accent'>200+</div>
                  <div className='text-sm text-gray-800 font-body'>
                    Projects
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sustainable Growth Card
          <div className='group relative overflow-hidden h-full shadow-2xl rounded-lg bg-secondary'>
            <div className="absolute inset-0 bg-[url('/sustainability-bg.jpg')] opacity-30 group-hover:opacity-40 transition-opacity" />
            <div className='relative md:p-8 h-full flex flex-col'>
              <div className='mb-6 flex justify-center'>
                <FaSeedling className='text-6xl text-green-400 animate-bounce' />
              </div>
              <h3 className='text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent text-center mb-4 font-heading'>
                Green Future
              </h3>
              <p className='text-gray-600 text-center mb-6 font-body'>
                Building sustainable ecosystems for generations to come
              </p>
              <div className='mt-20 space-y-4'>
                <div className='flex gap-2 flex-wrap justify-center'>
                  <span className='px-3 py-1 bg-green-500/20 rounded-full text-green-600 text-sm font-body'>
                    ♻️ 90% Recycling
                  </span>
                  <span className='px-3 py-1 bg-green-500/20 rounded-full text-green-600 text-sm font-body'>
                    🌳 50K Trees
                  </span>
                  <span className='px-3 py-1 bg-green-500/20 rounded-full text-green-600 text-sm font-body'>
                    ☀️ Solar Powered
                  </span>
                </div>
                <div className='text-center text-sm text-gray-600 font-body'>
                  40% Reduction in Carbon Footprint
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Progress Section */}
        <div className='mt-20 grid md:grid-cols-2 gap-8 vision-element '>
          <div className='p-8 shadow-2xl rounded-lg bg-secondary'>
            <h4 className='text-2xl font-bold text-primary mb-4 font-heading'>
              Our 2030 Roadmap
            </h4>
            <div className='space-y-6'>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-accent rounded-full flex items-center justify-center'>
                  <span className='text-light'>1</span>
                </div>
                <div>
                  <h5 className='text-primary font-semibold font-heading'>
                    Digital Transformation
                  </h5>
                  <p className='text-gray-600 text-sm font-body'>
                    Full BIM integration across all projects
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-green-500 rounded-full flex items-center justify-center'>
                  <span className='text-light'>2</span>
                </div>
                <div>
                  <h5 className='text-primary font-semibold font-heading'>
                    Net Zero Commitment
                  </h5>
                  <p className='text-gray-600 text-sm font-body'>
                    Carbon neutral operations by 2028
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='p-8  shadow-2xl rounded-lg bg-secondary'>
            <h4 className='text-2xl font-bold text-primary mb-4 font-heading'>
              Community Impact
            </h4>
            <div className='grid grid-cols-3 gap-4 text-center'>
              <div>
                <div className='text-3xl font-bold text-green-400'>15K+</div>
                <div className='text-sm text-gray-600 font-body'>Trained</div>
              </div>
              <div>
                <div className='text-3xl font-bold text-accent'>50+</div>
                <div className='text-sm text-gray-600 font-body'>Partners</div>
              </div>
              <div>
                <div className='text-3xl font-bold text-yellow-400'>1M+</div>
                <div className='text-sm text-gray-600 font-body'>
                  Beneficiaries
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision
