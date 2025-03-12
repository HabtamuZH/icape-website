// src/components/blogs/SuccessModal.js (example, adjust if different)
import React from "react";

const SuccessModal = ({ isOpen, onClose, text }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-light p-6 rounded-xl shadow-lg max-w-sm w-full text-center">
        <h3 className="text-2xl font-heading font-bold text-primary mb-4">
          Success!
        </h3>
        <p className="text-primary font-body mb-6">{text}</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-accent text-light rounded-md font-body font-medium hover:bg-opacity-80 transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
