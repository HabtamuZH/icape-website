/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import services from "../../../data/services/services";
import { ArrowRight } from "lucide-react";

const RelatedServices = ({ title }) => {
  const relatedServices = services.filter((service) => service.title !== title);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

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
            Explore More Services
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-6" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {relatedServices.map(({ title, link, description, icon }, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                to={link}
                className="group p-8 bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 dark:border-white/5 hover:border-accent dark:hover:border-accent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col items-center text-center h-full"
              >
                {icon && (
                  <div className="mb-6 p-4 bg-accent/10 dark:bg-accent/20 rounded-xl group-hover:bg-accent transition-colors duration-300">
                    <img
                      src={icon}
                      alt={title}
                      className="w-12 h-12 object-contain group-hover:brightness-0 group-hover:invert transition-all"
                    />
                  </div>
                )}
                <h3 className="text-xl font-heading font-bold text-primary dark:text-dark-text mb-4">
                  {title}
                </h3>
                <p className="text-base font-body text-text-secondary dark:text-dark-textSecondary leading-relaxed mb-6 flex-grow">
                  {description}
                </p>
                <div className="flex items-center gap-2 text-accent font-heading font-bold group-hover:gap-3 transition-all duration-300">
                  Read More
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedServices;
