import React from "react";
import {
  FaTimes,
  FaCommentDots,
  FaUser,
  FaEnvelope,
  FaComment,
  FaCalendarAlt,
  FaReply,
  FaTrash,
} from "react-icons/fa";

const FeedbackModal = ({
  selectedFeedback,
  closeDetails,
  handleDeleteFeedback,
}) => {
  return (
    <div className="fixed inset-0 bg-dark bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-light rounded-xl shadow-xl border border-border p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-heading font-semibold text-primary flex items-center">
            <FaCommentDots className="text-accent mr-2" /> Feedback Details
          </h2>
          <button
            onClick={closeDetails}
            className="text-primary font-body hover:text-accent text-xl"
          >
            <FaTimes />
          </button>
        </div>

        <div className="space-y-6 text-primary font-body">
          <div className="flex items-center space-x-4">
            <FaUser className="text-accent text-2xl" />
            <div>
              <label className="text-sm font-medium">User</label>
              <p className="mt-1 text-sm">{selectedFeedback.name}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-accent text-2xl" />
            <div>
              <label className="text-sm font-medium">Email</label>
              <p className="mt-1 text-sm">{selectedFeedback.email}</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaComment className="text-accent text-2xl" />
            <div>
              <label className="text-sm font-medium">Message</label>
              <p className="mt-1 text-sm">{selectedFeedback.message}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaCalendarAlt className="text-accent text-2xl" />
            <div>
              <label className="text-sm font-medium">Date</label>
              <p className="mt-1 text-sm">{new Date(selectedFeedback.date).toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end items-center">
          {/* <button
            onClick={handleReplyToggle}
            className="px-4 py-2 text-sm font-body text-accent border border-accent rounded-md hover:bg-accent hover:text-light transition-colors duration-200 flex items-center"
          >
            <FaReply className="mr-2" />
            {showReplyForm ? "Cancel Reply" : "Reply"}
          </button> */}
          <button
            onClick={() => {
              handleDeleteFeedback(selectedFeedback._id);
              closeDetails();
            }}
            className="px-4 py-2 text-sm font-body text-red-500 border border-red-500 rounded-md hover:bg-red-500 hover:text-light transition-colors duration-200 flex items-center"
          >
            <FaTrash className="mr-2" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;