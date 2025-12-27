/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const ServiceOverview = ({ content, img }) => {
  return (
    <section id="overview" className="relative w-full py-20 md:py-32 bg-transparent overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 dark:bg-accent/10 blur-[120px] -z-0" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {content.map(({ title, subtitle, description }, index) => (
              <div key={index} className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary dark:text-dark-text mb-4 leading-tight">
                    {title}
                  </h2>
                  <h3 className="text-xl md:text-2xl font-body text-accent font-semibold">
                    {subtitle}
                  </h3>
                </div>

                <div className="space-y-4">
                  {description.map((desc, i) => (
                    <p
                      key={i}
                      className="text-lg font-body text-text-secondary dark:text-dark-textSecondary leading-relaxed"
                    >
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-border dark:border-dark-border">
              <img
                src={img}
                alt="Service overview"
                className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            
            {/* Architectural Accent Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent/20 dark:border-accent/40 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
