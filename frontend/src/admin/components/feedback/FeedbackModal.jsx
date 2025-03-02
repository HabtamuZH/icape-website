import React from "react";
import { motion } from "framer-motion";
import {
  FaTimes,
  FaCommentDots,
  FaUser,
  FaEnvelope,
  FaComment,
  FaCalendarAlt,
  FaCopy,
} from "react-icons/fa";
import { toast } from "react-toastify";

const FeedbackModal = ({ selectedFeedback, closeDetails }) => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(selectedFeedback.email);
    toast.success("Email copied to clipboard!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-dark bg-opacity-60 flex justify-center items-center p-4 z-50"
      onClick={closeDetails}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-light rounded-2xl shadow-2xl border border-border max-w-2xl w-full mx-4 max-h-[90vh] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Gradient (Fixed) */}
        <div className="bg-gradient-to-r from-accent to-primary p-6 rounded-t-2xl flex justify-between items-center sticky top-0 z-10">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-light flex items-center gap-2">
            <FaCommentDots />
            Feedback Details
          </h2>
          <button
            onClick={closeDetails}
            className="text-light hover:text-opacity-80 transition-colors duration-200"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 text-primary font-body">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-secondary/10 p-4 rounded-lg shadow-sm border-b border-border flex items-start gap-3 sm:gap-4"
            >
              <FaUser className="text-accent text-xl sm:text-2xl mt-1" />
              <div className="flex-1">
                <p className="text-base sm:text-lg font-semibold text-accent">
                  User
                </p>
                <p className="text-primary mt-1 break-words text-sm sm:text-base">
                  {selectedFeedback.name}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-secondary/10 p-4 rounded-lg shadow-sm border-b border-border flex items-start gap-3 sm:gap-4"
            >
              <FaEnvelope className="text-accent text-xl sm:text-2xl mt-1" />
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <p className="text-base sm:text-lg font-semibold text-accent">
                    Email
                  </p>
                  <p className="text-primary mt-1 break-words text-sm sm:text-base">
                    {selectedFeedback.email}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleCopyEmail}
                  className="text-accent hover:text-primary transition-colors duration-200 mt-2 sm:mt-0"
                  title="Copy Email"
                >
                  <FaCopy size={18} />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-secondary/10 p-4 rounded-lg shadow-sm border-b border-border flex items-start gap-3 sm:gap-4 sm:col-span-2"
            >
              <FaComment className="text-accent text-xl sm:text-2xl mt-1" />
              <div className="flex-1">
                <p className="text-base sm:text-lg font-semibold text-accent">
                  Message
                </p>
                <p className="text-primary mt-1 break-words text-sm sm:text-base">
                  {selectedFeedback.message}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-secondary/10 p-4 rounded-lg shadow-sm border-b border-border flex items-start gap-3 sm:gap-4"
            >
              <FaCalendarAlt className="text-accent text-xl sm:text-2xl mt-1" />
              <div className="flex-1">
                <p className="text-base sm:text-lg font-semibold text-accent">
                  Date
                </p>
                <p className="text-primary mt-1 break-words text-sm sm:text-base">
                  {new Date(selectedFeedback.date).toLocaleString()}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FeedbackModal;
