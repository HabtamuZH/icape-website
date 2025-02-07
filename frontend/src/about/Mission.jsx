import {FaGlobe, FaLightbulb, FaHandsHelping} from "react-icons/fa"

const Mission = () => {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-5xl mx-auto px-6 text-center'>
        <h2 className='text-3xl font-bold text-gray-800 sm:text-4xl'>
          Our Mission
        </h2>
        <p className='text-gray-600 mt-4 text-lg'>
          At ICAPE, we are committed to innovation, sustainability, and global
          impact. Our mission is to empower communities, drive technological
          advancements, and create a better future through collaboration and
          cutting-edge solutions.
        </p>

        <div className='mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
          {/* Global Reach */}
          <div className='bg-white shadow-md p-6 rounded-xl text-center hover:shadow-lg transition'>
            <FaGlobe size={40} className='text-indigo-600 mx-auto' />
            <h3 className='text-xl font-semibold text-gray-700 mt-4'>
              Global Impact
            </h3>
            <p className='text-gray-600 mt-2 text-sm'>
              Driving change on an international scale through innovation and
              collaboration.
            </p>
          </div>

          {/* Innovation */}
          <div className='bg-white shadow-md p-6 rounded-xl text-center hover:shadow-lg transition'>
            <FaLightbulb size={40} className='text-indigo-600 mx-auto' />
            <h3 className='text-xl font-semibold text-gray-700 mt-4'>
              Innovation
            </h3>
            <p className='text-gray-600 mt-2 text-sm'>
              Pioneering cutting-edge solutions to address real-world
              challenges.
            </p>
          </div>

          {/* Community & Sustainability */}
          <div className='bg-white shadow-md p-6 rounded-xl text-center hover:shadow-lg transition'>
            <FaHandsHelping size={40} className='text-indigo-600 mx-auto' />
            <h3 className='text-xl font-semibold text-gray-700 mt-4'>
              Empowering Communities
            </h3>
            <p className='text-gray-600 mt-2 text-sm'>
              Supporting sustainable growth and development for a better
              tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
