import { useEffect } from 'react';
import { FaQuoteLeft, FaUserCircle } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination , Autoplay } from 'swiper/modules'; // Import modules from 'swiper/modules'
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/effect-coverflow'; // Import Swiper coverflow styles
import 'swiper/css/pagination'; // Import Swiper pagination styles

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Martin Escobar',
      title: 'Founder of Meta',
      quote:
        'We had the privilege of working with this incredible team, and their expertise brought our vision to life with precision and creativity. Highly recommend!',
    },
    {
      name: 'Michael Worin',
      title: 'Product Designer',
      quote:
        'This team helped us transform our ideas into a tangible product. Their attention to detail and creative approach made all the difference!',
    },
    {
      name: 'Michael Worin',
      title: 'Product Designer',
      quote:
        'This team helped us transform our ideas into a tangible product. Their attention to detail and creative approach made all the difference!',
    },
    {
      name: 'Simon Andrew',
      title: 'Software Engineer',
      quote:
        'Their innovative solutions and commitment to excellence exceeded our expectations. Truly a pleasure to collaborate with such a professional team.',
    },
    {
      name: 'Michael Worin',
      title: 'Product Designer',
      quote:
        'This team helped us transform our ideas into a tangible product. Their attention to detail and creative approach made all the difference!',
    },
  ];

  return (
    <section className="relative py-14 bg-primary/10">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="testimonial-heading text-secondary text-3xl font-bold sm:text-4xl">
            Hear from our customers
          </h3>
          <p className="mt-3 text-secondary text-lg">
            Our clients trust us with their visions, and we deliver with
            excellence. Here's what they have to say.
          </p>
        </div>

        {/* Swiper Testimonials Slider */}
        <div className="mt-12">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop= {true}
            coverflowEffect={{
              rotate: 50, // Rotate the slides
              stretch: 0, // Stretch space between slides (in pixels)
              depth: 100, // Depth offset for slides (in pixels)
              modifier: 1, // Effect multiplier
              slideShadows: true, // Enable slide shadows
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]} // Pass modules here
            className="swiper-container"
            breakpoints={{
              // Responsive breakpoints
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx} className="testimonial-card bg-white rounded-xl border shadow-lg transition-all hover:shadow-2xl">
                <div className="p-6">
                  <FaQuoteLeft className="w-10 h-10 text-accent" />
                  <blockquote>
                    <p className="text-gray-800 text-lg font-medium mt-4">
                      {item.quote}
                    </p>
                  </blockquote>
                </div>
                <div className="flex items-center gap-x-4 p-4 mt-6 bg-secondary/10 rounded-b-xl">
                  <FaUserCircle className="w-14 h-14 text-secondary" />
                  <div>
                    <span className="block text-gray-900 font-semibold">
                      {item.name}
                    </span>
                    <span className="block text-secondary text-sm mt-0.5">
                      {item.title}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="absolute top-0 w-full h-full"></div>
    </section>
  );
};

export default Testimonials;