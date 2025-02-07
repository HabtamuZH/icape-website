import React from "react"
import {FaLightbulb, FaGlobe, FaChartLine} from "react-icons/fa"

const Vision = () => {
  return (
    <section className='py-14 bg-gray-100'>
      <div className='max-w-6xl mx-auto px-6 text-center'>
        <h2 className='text-4xl font-bold text-gray-800'>Our Vision</h2>
        <p className='text-gray-600 mt-4 max-w-2xl mx-auto'>
          At ICAPE, we envision a future where innovation and technology drive
          sustainable development, creating opportunities for businesses and
          communities worldwide.
        </p>
        <div className='mt-10 grid gap-8 md:grid-cols-3'>
          <div className='p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition'>
            <FaLightbulb className='text-indigo-600 text-5xl mx-auto' />
            <h3 className='text-xl font-semibold text-gray-700 mt-4'>
              Innovation
            </h3>
            <p className='text-gray-600 mt-2'>
              Pioneering groundbreaking solutions to tackle modern challenges
              through creativity and technology.
            </p>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition'>
            <FaGlobe className='text-indigo-600 text-5xl mx-auto' />
            <h3 className='text-xl font-semibold text-gray-700 mt-4'>
              Global Impact
            </h3>
            <p className='text-gray-600 mt-2'>
              Expanding our reach to create meaningful changes in industries and
              communities worldwide.
            </p>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition'>
            <FaChartLine className='text-indigo-600 text-5xl mx-auto' />
            <h3 className='text-xl font-semibold text-gray-700 mt-4'>
              Sustainable Growth
            </h3>
            <p className='text-gray-600 mt-2'>
              Building a future where businesses thrive while maintaining
              environmental and social responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision
