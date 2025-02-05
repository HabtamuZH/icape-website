import {useEffect} from "react"
import Glide from "@glidejs/glide"
import ScrollReveal from "scrollreveal"
import {FaArrowLeft, FaArrowRight} from "react-icons/fa"
import "@glidejs/glide/dist/css/glide.core.min.css"
import "@glidejs/glide/dist/css/glide.theme.min.css"
import {Link} from "react-router-dom"

export default function Hero() {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg"
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
    <div className='bg-[#F5EFFF] h-screen text-textColor flex items-center'>
      <div className='max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12'>
        {/* Hero Text Section */}
        <div className='flex-1 space-y-6 hero-text'>
          <span className='bg-white/20 text-primary text-sm font-semibold px-3 py-1 rounded-full shadow-md cursor-pointer'>
            🚀 Exclusive Architectural Designs
          </span>
          <h1 className='text-4xl font-extrabold leading-tight font-heading text-black'>
            Build Your Dream Project with Excellence
          </h1>
          <p className='text-lg opacity-90 font-sans'>
            Discover innovative designs and bring your architectural vision to
            reality with our expert solutions.
          </p>
          <div className='flex gap-4 hero-button'>
            <Link
              to='/signup'
              className='bg-primary hover:bg-[#0e62ff] text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 focus:ring-4 ring-white/40'
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Image Carousel */}
        <div className='w-full md:w-1/2 max-w-lg rounded-3xl overflow-hidden'>
          <div className='glide relative'>
            <div className='glide__track overflow-hidden' data-glide-el='track'>
              <ul className='glide__slides'>
                {images.map((image, index) => (
                  <li key={index} className='glide__slide'>
                    <img
                      src={image}
                      className='w-full h-80 object-cover rounded-2xl shadow-lg'
                      alt={`Slide ${index + 1}`}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation Arrows */}
            <div
              className='glide__arrows absolute inset-0 flex justify-between items-center p-4'
              data-glide-el='controls'
            >
              <button
                className='glide__arrow glide__arrow--left p-3 bg-white/20 hover:bg-white/30 rounded-full shadow-md z-10'
                data-glide-dir='<'
              >
                <FaArrowLeft className='text-white' />
              </button>
              <button
                className='glide__arrow glide__arrow--right p-3 bg-white/20 hover:bg-white/30 rounded-full shadow-md z-10'
                data-glide-dir='>'
              >
                <FaArrowRight className='text-white' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
