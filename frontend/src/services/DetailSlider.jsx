import { motion } from "framer-motion";
import { PropTypes } from "prop-types";

const DetailSlider = ({ sliderVariants, onClose, title, description }) => (
  <motion.div
    className="fixed top-0 right-0 w-3/5 h-full bg-[#000e] shadow-lg z-20 p-6 overflow-y-auto"
    variants={sliderVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    drag="x"
    dragConstraints={{ left: 0, right: 0 }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="mt-32 text-gray-200 flex justify-between items-center mb-4">
      <motion.h2
        className="text-xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h2>
      <motion.button
        onClick={onClose}
        className="text-red-200 hover:text-red-300 focus:outline-none"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        Close
      </motion.button>
    </div>
    <motion.div
      className="text-gray-200 space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {description.map((ds, i) => (
        <p key={i}>{ds}</p>
      ))}
    </motion.div>
  </motion.div>
);

DetailSlider.propTypes = {
  sliderVariants: PropTypes.object,
  onClose: PropTypes.func,
    description: PropTypes.object,
  title: PropTypes.string,
};

export default DetailSlider;
