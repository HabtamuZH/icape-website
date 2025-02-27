import React from "react";
import { motion } from "framer-motion";

const PostNewBlogButton = ({ onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="px-4 py-2 bg-accent text-light font-body rounded-full shadow-md hover:bg-opacity-80 transition-all duration-200"
    >
      + Post New Blog
    </motion.button>
  );
};

export default PostNewBlogButton;