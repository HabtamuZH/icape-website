import React from "react";
import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";

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
          className="px-4 py-2 bg-accent text-light rounded-md hover:bg-primary transition-colors duration-200 font-body flex items-center gap-2"
        >
          <FaEdit /> Edit
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onDelete(career._id)}
          className="px-4 py-2 bg-red-500 text-light rounded-md hover:bg-red-600 transition-colors duration-200 font-body flex items-center gap-2"
        >
          <FaTrash /> Delete
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CareerCard;
