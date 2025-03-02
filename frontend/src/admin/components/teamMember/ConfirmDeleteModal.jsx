import React from "react";
import { motion } from "framer-motion";

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, memberName }) => {
  if (!isOpen) return null;

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
        className="bg-light p-6 rounded-xl shadow-lg max-w-sm w-full text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-heading font-bold text-primary mb-4">
          Confirm Deletion
        </h3>
        <p className="text-primary font-body mb-6">
          Are you sure you want to delete{" "}
          <span className="font-semibold">{memberName}</span>?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-light rounded-md font-body font-medium hover:bg-red-600 transition-colors duration-200"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-secondary text-primary rounded-md font-body font-medium hover:bg-border transition-colors duration-200"
          >
            No
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ConfirmDeleteModal;
