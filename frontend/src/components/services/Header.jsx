/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import services from "../../data/services/services";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Header = ({ home = false }) => {
  return (
    <section className="relative py-20 md:py-32 bg-transparent overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary dark:text-dark-text mb-6">
            Our Expertise <span className="gradient-text">in Action</span>
          </h2>
          <p className="text-lg md:text-xl font-body text-text-secondary dark:text-dark-textSecondary max-w-3xl mx-auto leading-relaxed">
            Delivering precision-engineered solutions and visionary architectural designs that define the landscape of modern infrastructure.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 dark:border-white/5 hover:border-accent dark:hover:border-accent transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl flex flex-col">
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                  {service.icon ? (
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-10 h-10 object-contain group-hover:invert dark:group-hover:invert-0 transition-all duration-300"
                    />
                  ) : (
                    <div className="w-10 h-10 flex items-center justify-center text-accent group-hover:text-white">
                      {/* Fallback icon if needed */}
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold text-primary dark:text-dark-text mb-4">
                  {service.title}
                </h3>
                <p className="text-base font-body text-text-secondary dark:text-dark-textSecondary mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>

                {/* CTA */}
                <Link
                  to={service.link || "/services"}
                  className="inline-flex items-center gap-2 text-accent font-body font-semibold group-hover:gap-4 transition-all duration-300"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 dark:bg-accent/10 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] -z-10" />
    </section>
  );
};

export default Header;
