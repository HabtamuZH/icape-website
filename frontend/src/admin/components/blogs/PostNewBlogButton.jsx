import React from "react";
import { motion } from "framer-motion";

const PostNewBlogButton = ({ onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="px-4 py-4 bg-accent text-gray-800 font-body font-bold rounded-3xl shadow-md hover:bg-opacity-95 transition-all duration-200"
    >
      + Post New Blog
    </motion.button>
  );
};

export default PostNewBlogButton;