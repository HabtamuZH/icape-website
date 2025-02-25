import React from "react";
import { motion } from "framer-motion";

const CareerCard = ({ career, onUpdate, onDelete }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-light rounded-xl shadow-lg border border-border p-4 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
    >
      <h3 className="text-lg font-heading font-bold text-primary mb-2 truncate">
        {career.title}
      </h3>
      <p className="text-primary font-body text-sm mb-2 truncate">
        {career.description}
      </p>
      <p className="text-primary font-body text-xs opacity-70 mb-2">
        {career.type}
      </p>
      <ul className="text-primary font-body text-sm mb-4 list-disc pl-4 truncate">
        {career.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap justify-between gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onUpdate(career)}
          className="px-3 py-1 font-body text-accent border border-accent rounded-md hover:bg-accent hover:text-light transition-colors duration-200"
        >
          Update
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onDelete(career._id)}
          className="px-3 py-1 text-sm font-body text-red-600 border border-red-600 rounded-md hover:bg-red-600 hover:text-light transition-colors duration-200"
        >
          Delete
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CareerCard;
