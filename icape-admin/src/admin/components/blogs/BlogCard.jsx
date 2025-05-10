// src/components/Blog/BlogCard.js
import React from "react";
import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";

const BlogCard = ({ blog, onUpdate, onDelete }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={blog.imageUrl || "https://via.placeholder.com/150"}
        alt={blog.title}
        className="w-full h-40 object-cover rounded-t-md mb-4"
      />
      <h3 className="text-lg font-heading font-bold text-gray-800 mb-1 truncate">
        {blog.title}
      </h3>
      {blog.subtitle && (
        <p className="text-gray-600 font-body text-sm mb-2 truncate">
          {blog.subtitle}
        </p>
      )}
      <p className="text-gray-700 font-body text-sm mb-2 line-clamp-2">
        {blog.description || blog.excerpt || "No summary available"}
      </p>
      <p className="text-gray-500 font-body text-xs mb-4">
        By {blog.author} | {new Date(blog.date).toLocaleDateString()}
      </p>
      {blog.tags && blog.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="flex justify-between gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onUpdate(blog)}
          className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors font-body flex items-center gap-2"
        >
          <FaEdit /> Edit
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onDelete(blog.id, blog.title)}
          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors font-body flex items-center gap-2"
        >
          <FaTrash /> Delete
        </motion.button>
      </div>
    </motion.div>
  );
};

export default BlogCard;
