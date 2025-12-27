/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Features = ({ features, title }) => {
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
            {title}
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-6" />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 dark:border-white/5 hover:border-accent dark:hover:border-accent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <feature.icon
                  size={32}
                  className="text-accent group-hover:text-primary transition-colors duration-300"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary dark:text-dark-text mb-4">
                {feature.title}
              </h3>
              <p className="text-base font-body text-text-secondary dark:text-dark-textSecondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
