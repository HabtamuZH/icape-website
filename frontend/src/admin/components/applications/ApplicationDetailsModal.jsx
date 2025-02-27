import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaTimes } from "react-icons/fa";

const ApplicationDetailsModal = ({ application, onClose }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyData, setReplyData] = useState({
    subject: "",
    message: "",
  });

  const handleReplyToggle = () => {
    setShowReplyForm(!showReplyForm);
  };

  const handleReplyChange = (e) => {
    const { name, value } = e.target;
    setReplyData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${
      application.email
    }?subject=${encodeURIComponent(
      replyData.subject
    )}&body=${encodeURIComponent(replyData.message)}`;
    window.location.href = mailtoLink;
    setShowReplyForm(false);
    setReplyData({ subject: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-dark bg-opacity-60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-light rounded-2xl shadow-2xl border border-border max-w-2xl w-full mx-4 max-h-[90vh] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Gradient and Close Button (Fixed) */}
        <div className="bg-gradient-to-r from-accent to-primary p-6 rounded-t-2xl flex justify-between items-center sticky top-0 z-10">
          <h3 className="text-2xl font-heading font-bold text-light">
            {application.fullName}
          </h3>
          <button
            onClick={onClose}
            className="text-light hover:text-opacity-80 transition-colors duration-200"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Details Section */}
          <div className="p-6 space-y-6 text-primary font-body">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-secondary/10 p-4 rounded-lg shadow-sm border-b border-border">
                <p className="text-lg font-semibold text-accent">Email</p>
                <p className="text-primary mt-1 break-words">
                  {application.email}
                </p>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg shadow-sm border-b border-border">
                <p className="text-lg font-semibold text-accent">
                  Phone Number
                </p>
                <p className="text-primary mt-1 break-words">
                  {application.phoneNumber}
                </p>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg shadow-sm sm:col-span-2 border-b border-border">
                <p className="text-lg font-semibold text-accent">
                  Opportunity Type
                </p>
                <p className="text-primary mt-1 break-words">
                  {application.opportunityType}
                </p>
              </div>
              {application.department && (
                <div className="bg-secondary/10 p-4 rounded-lg shadow-sm border-b border-border">
                  <p className="text-lg font-semibold text-accent">
                    Department
                  </p>
                  <p className="text-primary mt-1 break-words">
                    {application.department}
                  </p>
                </div>
              )}
              {application.studentStatus && (
                <div className="bg-secondary/10 p-4 rounded-lg shadow-sm border-b border-border">
                  <p className="text-lg font-semibold text-accent">
                    Student Status
                  </p>
                  <p className="text-primary mt-1 break-words">
                    {application.studentStatus}
                  </p>
                </div>
              )}
              <div className="bg-secondary/10 p-4 rounded-lg shadow-sm border-b border-border">
                <p className="text-lg font-semibold text-accent">
                  Availability
                </p>
                <p className="text-primary mt-1 break-words">
                  {application.availability}
                </p>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg shadow-sm sm:col-span-2 border-b border-border">
                <p className="text-lg font-semibold text-accent">
                  Reason for Applying
                </p>
                <p className="text-primary mt-1 break-words">
                  {application.reason}
                </p>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg shadow-sm sm:col-span-2 border-b border-border">
                <p className="text-lg font-semibold text-accent">
                  Skills & Experience
                </p>
                <p className="text-primary mt-1 break-words">
                  {application.skills}
                </p>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg shadow-sm border-b border-border">
                <p className="text-lg font-semibold text-accent">CV</p>
                <a
                  href={application.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline hover:text-opacity-80 transition-colors duration-200 mt-1 inline-block break-words"
                >
                  Download CV
                </a>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg shadow-sm border-b border-border">
                <p className="text-lg font-semibold text-accent">
                  Submitted On
                </p>
                <p className="text-primary mt-1 break-words">
                  {new Date(application.submittedAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Actions Section */}
          <div className="p-6 border-t border-border bg-secondary/5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleReplyToggle}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-accent to-primary text-light rounded-md font-body font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <FaEnvelope />{" "}
              {showReplyForm ? "Cancel Reply" : "Reply to Applicant"}
            </motion.button>

            {/* Reply Form */}
            {showReplyForm && (
              <form onSubmit={handleReplySubmit} className="mt-6 space-y-6">
                <div className="relative">
                  <label
                    htmlFor="subject"
                    className="block text-primary font-body font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={replyData.subject}
                    onChange={handleReplyChange}
                    placeholder="e.g., Regarding Your Application"
                    className="w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent shadow-sm transition-all duration-200"
                    required
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="block text-primary font-body font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={replyData.message}
                    onChange={handleReplyChange}
                    placeholder="Type your response here..."
                    rows="4"
                    className="w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent shadow-sm transition-all duration-200"
                    required
                  />
                </div>
                <div className="flex justify-end gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-accent to-primary text-light rounded-md font-body font-medium shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Send Email
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={handleReplyToggle}
                    className="px-6 py-2 bg-secondary text-primary rounded-md font-body font-medium hover:bg-border transition-all duration-200"
                  >
                    Cancel
                  </motion.button>
                </div>
              </form>
            )}

            {/* Close Button (when reply form is not visible) */}
            {!showReplyForm && (
              <div className="mt-6 flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="px-6 py-2 bg-gradient-to-r from-accent to-primary text-light rounded-md font-body font-medium shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Close
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ApplicationDetailsModal;
