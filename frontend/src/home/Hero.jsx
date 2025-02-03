import {useEffect} from "react"
import Glide from "@glidejs/glide"
import ScrollReveal from "scrollreveal"
import {FaArrowLeft, FaArrowRight} from "react-icons/fa"
import "@glidejs/glide/dist/css/glide.core.min.css"
import "@glidejs/glide/dist/css/glide.theme.min.css"

export default function Hero() {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    "/images/image7.jpg",
    "/images/image8.jpg",
    "/images/image9.jpg",
    "/images/image10.jpg",
    "/images/image11.jpg",
    "/images/image12.jpg",
    "/images/image13.jpg",
    "/images/image14.jpg",
    "/images/image15.jpg",
    "/images/image16.jpg",
    "/images/image17.jpg",
    "/images/image18.jpg",
    "/images/image19.jpg",
    "/images/image20.jpg",
    "/images/image21.jpg",
    "/images/image22.jpg"
  ]

  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      perView: 1,
      autoplay: 3000,
      animationDuration: 800,
      hoverpause: true
    })
    glide.mount()

    ScrollReveal().reveal(".hero-text", {
      delay: 200,
      distance: "50px",
      origin: "bottom",
      duration: 1000
    })
    ScrollReveal().reveal(".hero-button", {
      delay: 400,
      distance: "50px",
      origin: "bottom",
      duration: 1000
    })
    ScrollReveal().reveal(".glide", {
      delay: 600,
      distance: "50px",
      origin: "bottom",
      duration: 1000
    })

    return () => glide.destroy()
  }, [])

  return (
    <div className='bg-gray-100 h-screen text-black overflow-hidden flex items-center'>
      <div className='max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12'>
        {/* Hero Text Section */}
        <div className='flex-1 space-y-6 hero-text'>
          <span className='bg-gray-200 text-indigo-600 text-sm font-semibold px-3 py-1 rounded-full shadow-md cursor-pointer'>
            🚀 Exclusive Architectural Designs
          </span>
          <h1 className='text-5xl font-extrabold leading-tight'>
            Build Your Dream Project with Excellence
          </h1>
          <p className='text-lg opacity-90'>
            Discover innovative designs and bring your architectural vision to
            reality with our expert solutions.
          </p>
          <div className='flex gap-4 hero-button'>
            <button className='px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold shadow-lg transition-all duration-300 focus:ring-4 ring-indigo-400'>
              Get Started
            </button>
          </div>
        </div>

        {/* Image Carousel */}
        <div className='w-full md:w-1/2 max-w-lg rounded-3xl overflow-hidden'>
          <div className='glide relative'>
            <div className='glide__track overflow-hidden' data-glide-el='track'>
              <ul className='glide__slides h-[80%] object-cover'>
                {images.map((image, index) => (
                  <li key={index} className='glide__slide object-cover'>
                    <img
                      src={image}
                      className='w-full object-cover rounded-2xl shadow-lg'
                      alt={`Slide ${index + 1}`}
                    />
                  </li>
                ))}
              </ul>
              {/* Navigation Arrows */}
              <div
                className='glide__arrows absolute inset-0 flex justify-between items-center p-4'
                data-glide-el='controls'
              >
                <button
                  className='glide__arrow glide__arrow--left p-2 bg-white/50 rounded-full shadow-md'
                  data-glide-dir='<'
                >
                  <FaArrowLeft className='text-gray-800' />
                </button>
                <button
                  className='glide__arrow glide__arrow--right p-2 bg-white/50 rounded-full shadow-md'
                  data-glide-dir='>'
                >
                  <FaArrowRight className='text-gray-800' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
