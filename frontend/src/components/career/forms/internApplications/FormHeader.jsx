/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const FormHeader = ({ title, description }) => {
  return (
    <div className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary dark:text-dark-text mb-4"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-text-secondary dark:text-dark-textSecondary font-body text-base md:text-lg max-w-2xl mx-auto"
      >
        {description}
      </motion.p>
    </div>
  );
};

export default FormHeader;
