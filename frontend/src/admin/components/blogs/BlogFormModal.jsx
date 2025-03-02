import React from "react";
import { motion } from "framer-motion";

const BlogFormModal = ({ onClose ,children}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="w-full max-w-4xl mx-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
       {children}
      </motion.div>
    </motion.div>
  );
};

export default BlogFormModal;