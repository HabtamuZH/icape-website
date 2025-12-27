/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = ({ testimonials }) => {
  return (
    <section className="w-full py-20 md:py-32 bg-transparent overflow-hidden">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-dark-text tracking-tight">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-6" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 dark:border-white/5 hover:border-accent dark:hover:border-accent transition-all duration-300 group"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-accent/10 dark:text-accent/5 group-hover:text-accent/20 transition-colors" />
              
              <div className="relative z-10">
                <p className="text-lg font-body text-text-secondary dark:text-dark-textSecondary italic mb-8 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-heading font-bold text-accent">
                    {testimonial.client.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-primary dark:text-dark-text">
                      {testimonial.client}
                    </h3>
                    <p className="text-sm font-body text-accent">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
