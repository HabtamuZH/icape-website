import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import arcBg from "./../../public/images/image17.jpg";
import DetailSlider from "./DetailSlider";

const detailDescription = [
  "At the core of our architectural design is a deep understanding of aesthetics and functionality.",
  "Our team blends innovative design principles with state-of-the-art technology to create spaces that are both visually stunning and environmentally responsible.",
  "Each project is a unique blend of creativity, technical expertise, and a commitment to sustainability.",
  "We pride ourselves on transforming your ideas into spaces that inspire and endure.",
];

const ArchitecturalDesign = () => {
  // State to control slider visibility
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  // Toggle slider open/close
  const toggleSlider = () => {
    setIsSliderOpen((prev) => !prev);
  };

  // Animation variants for the main content
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  // Animation variants for the slider
  const sliderVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={arcBg}
          alt="Architectural Design Background"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        {/* Overlay to darken the background for readability */}
        <motion.div
          className="absolute inset-0 bg-black opacity-50 sectionHeader"
          onClick={(e) =>
            e.target.classList.contains("sectionHeader") &&
            setIsSliderOpen(false)
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>

      {/* Main Content */}
      <div className="relative bg-[#333c] mt-[10%] z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center h-full">
        <motion.h1
          className="text-white text-4xl md:text-5xl font-bold mb-4"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Architectural Design
        </motion.h1>
        <motion.p
          className="text-white max-w-2xl text-center mb-8"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our architectural design services focus on blending creativity,
          sustainability, and functionality to craft spaces that meet your
          needs. We specialize in designing modern and timeless structures that
          balance aesthetics with practicality.
        </motion.p>
        <motion.button
          className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
          onClick={toggleSlider}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Read More
        </motion.button>
      </div>

      {/* Draggable Slider for Detailed Notes */}
      <AnimatePresence>
        {isSliderOpen && (
          <DetailSlider
            variants={sliderVariants}
            onClose={toggleSlider}
            title="Architectural Design"
            description={detailDescription}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ArchitecturalDesign;
