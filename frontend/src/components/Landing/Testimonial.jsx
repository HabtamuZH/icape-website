import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Martin Escobar",
      title: "Founder of Meta",
      quote:
        "We had the privilege of working with this incredible team, and their expertise brought our vision to life with precision and creativity. Highly recommend!",
      rating: 5,
    },
    {
      name: "Michael Worin",
      title: "Product Designer",
      quote:
        "This team helped us transform our ideas into a tangible product. Their attention to detail and creative approach made all the difference!",
      rating: 5,
    },
    {
      name: "Simon Andrew",
      title: "Software Engineer",
      quote:
        "Their innovative solutions and commitment to excellence exceeded our expectations. Truly a pleasure to collaborate with such a professional team.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      title: "CEO, BuildCo",
      quote:
        "Outstanding architectural vision and flawless execution. iCAPE transformed our commercial space into something truly remarkable.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-transparent">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary dark:text-dark-text mb-4">
            Hear from Our <span className="gradient-text">Customers</span>
          </h2>
          <p className="text-lg md:text-xl font-body text-text-secondary dark:text-dark-textSecondary max-w-3xl mx-auto">
            Our clients trust us with their visions, and we deliver with excellence. Here's what they have to say.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active !bg-accent",
            }}
            breakpoints={{
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
            className="!pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="h-full bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 dark:border-white/5 hover:border-accent dark:hover:border-accent transition-all duration-300">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 text-accent" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-6">
                    <p className="text-base font-body text-primary dark:text-dark-text leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>

                  {/* Author */}
                  <div className="pt-6 border-t border-border dark:border-dark-border">
                    <p className="font-heading font-bold text-primary dark:text-dark-text mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-sm font-body text-text-secondary dark:text-dark-textSecondary">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
