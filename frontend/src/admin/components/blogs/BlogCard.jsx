import React from "react";
import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";

const BlogCard = ({ blog, onUpdate, onDelete }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-light rounded-xl shadow-lg border border-border p-4 hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={blog.imageUrl}
        alt={blog.title}
        className="w-full h-40 object-cover rounded-t-md mb-4"
      />
      <h3 className="text-lg font-heading font-bold text-primary mb-2 truncate">
        {blog.title}
      </h3>
      <p className="text-primary font-body text-sm mb-2 truncate">
        {blog.description}
      </p>
      <p className="text-primary font-body text-xs opacity-70 mb-4">
        By {blog.author} | {new Date(blog.date).toLocaleDateString()}
      </p>
      <div className="flex justify-between gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onUpdate(blog)}
          className="px-3 py-1 bg-accent text-light rounded-md hover:bg-primary transition-colors font-body flex items-center gap-2"
        >
          <FaEdit /> Edit
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onDelete(blog._id)}
          className="px-3 py-1 bg-red-500 text-light rounded-md hover:bg-red-600 transition-colors font-body flex items-center gap-2"
        >
          <FaTrash /> Delete
        </motion.button>
      </div>
    </motion.div>
  );
};

export default BlogCard;