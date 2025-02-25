import React from "react";
import { motion } from "framer-motion";

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
        Type: {project.type} | Added: {new Date(project.createdAt).toLocaleDateString()}
      </p>
      <div className="flex justify-between gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onUpdate(project)}
          className="px-3 py-1 text-sm font-body text-accent border border-accent rounded-md hover:bg-accent hover:text-light transition-colors duration-200"
        >
          Update
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onDelete(project._id)}
          className="px-3 py-1 text-sm font-body text-red-600 border border-red-600 rounded-md hover:bg-red-600 hover:text-light transition-colors duration-200"
        >
          Delete
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;