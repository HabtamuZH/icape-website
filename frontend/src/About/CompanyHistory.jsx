import React from "react"

const CompanyHistory = () => {
  return (
    <section className='py-16 bg-white'>
      <div className='max-w-5xl mx-auto px-6 text-center'>
        <h2 className='text-3xl font-bold text-gray-800 sm:text-4xl'>
          Our History
        </h2>
        <p className='text-gray-600 mt-4 text-lg'>
          ICAPE has been at the forefront of architectural innovation and urban
          planning, transforming spaces and communities through cutting-edge
          design and sustainable solutions. Our journey began with a vision to
          redefine architectural excellence, and today, we stand as a leader in
          the industry.
        </p>

        <div className='mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
          <div className='bg-gray-100 shadow-md p-6 rounded-lg hover:shadow-lg transition'>
            <h3 className='text-xl font-semibold text-gray-700'>Founded</h3>
            <p className='text-gray-600 mt-2 text-sm'>
              ICAPE was established with a mission to integrate functionality
              with aesthetics in architecture.
            </p>
          </div>

          <div className='bg-gray-100 shadow-md p-6 rounded-lg hover:shadow-lg transition'>
            <h3 className='text-xl font-semibold text-gray-700'>
              Expanding Services
            </h3>
            <p className='text-gray-600 mt-2 text-sm'>
              We evolved beyond architectural design, pioneering urban planning
              and innovative solutions.
            </p>
          </div>

          <div className='bg-gray-100 shadow-md p-6 rounded-lg hover:shadow-lg transition'>
            <h3 className='text-xl font-semibold text-gray-700'>
              Industry Recognition
            </h3>
            <p className='text-gray-600 mt-2 text-sm'>
              Honored with prestigious awards like the IKKA Award for excellence
              in design and urban impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyHistory
