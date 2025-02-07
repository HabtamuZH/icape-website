import {FaQuoteLeft, FaUserCircle} from "react-icons/fa"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Martin Escobar",
      title: "Founder of Meta",
      quote:
        "We had the privilege of working with this incredible team, and their expertise brought our vision to life with precision and creativity. Highly recommend!"
    },
    {
      name: "Simon Andrew",
      title: "Software Engineer",
      quote:
        "Their innovative solutions and commitment to excellence exceeded our expectations. Truly a pleasure to collaborate with such a professional team."
    },
    {
      name: "Michael Worin",
      title: "Product Designer",
      quote:
        "This team helped us transform our ideas into a tangible product. Their attention to detail and creative approach made all the difference!"
    }
  ]

  return (
    <section className='relative py-14 bg-[#F5EFFF]'>
      <div className='relative z-10 max-w-screen-xl mx-auto px-4 md:px-8'>
        <div className='max-w-xl sm:text-center md:mx-auto'>
          <h3 className='text-black text-3xl font-semibold sm:text-4xl'>
            Hear from our customers
          </h3>
          <p className='mt-3 text-gray-700'>
            Our clients trust us with their visions, and we deliver with
            excellence. Here's what they have to say.
          </p>
        </div>
        <div className='mt-12'>
          <ul className='grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {testimonials.map((item, idx) => (
              <li key={idx} className='bg-white rounded-xl border shadow-md'>
                <div className='p-4'>
                  <FaQuoteLeft className='w-9 h-9 text-[#4B2A97]' />
                </div>
                <figure>
                  <blockquote>
                    <p className='text-gray-800 text-lg font-semibold px-4 py-1'>
                      {item.quote}
                    </p>
                  </blockquote>
                  <div className='flex items-center gap-x-4 p-4 mt-6 bg-indigo-50'>
                    <FaUserCircle
                      className='w-16 h-16 text-indigo-500' // Avatar icon
                    />
                    <div>
                      <span className='block text-gray-800 font-semibold'>
                        {item.name}
                      </span>
                      <span className='block text-indigo-600 text-sm mt-0.5'>
                        {item.title}
                      </span>
                    </div>
                  </div>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='absolute top-0 w-full h-full'></div>
    </section>
  )
}

export default Testimonials
