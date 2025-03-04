// src/components/Projects/ProjectCard.js
import React from "react";
import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";

const ProjectCard = ({ project, onUpdate, onDelete }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-light rounded-xl shadow-lg border border-border p-4 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex overflow-x-auto gap-2 mb-4">
        {project.images && project.images.length > 0 ? (
          project.images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`${project.name} ${index}`}
              className="w-40 h-40 object-cover rounded-md flex-shrink-0"
            />
          ))
        ) : (
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder"
            className="w-40 h-40 object-cover rounded-md"
          />
        )}
      </div>
      <h3 className="text-lg font-heading font-bold text-primary mb-2 truncate">
        {project.name}
      </h3>
      <p className="text-primary font-body text-sm mb-2 truncate">
        {project.role}
      </p>
      <p className="text-primary font-body text-xs opacity-70 mb-4">
        Type: {project.type} | Added:{" "}
        {new Date(project.createdAt).toLocaleDateString()}
      </p>
      <div className="flex justify-between gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onUpdate(project)}
          className="px-3 py-1 bg-accent text-light rounded-md hover:bg-primary transition-colors font-body flex items-center gap-2"
        >
          <FaEdit /> Edit
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onDelete(project._id,project.tittle)}
          className="px-4 py-2 bg-red-500 text-light rounded-md hover:bg-red-600 transition-colors duration-200 font-body flex items-center gap-2"
        >
          <FaTrash /> Delete
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
