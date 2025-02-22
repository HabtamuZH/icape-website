import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaStar,
  FaReply,
  FaTrash,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaCommentDots,
  FaUser,
  FaEnvelope,
  FaComment,
  FaInfoCircle,
  FaCalendarAlt,
} from "react-icons/fa";

const Feedbacks = () => {
  const [feedback, setFeedback] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyData, setReplyData] = useState({ subject: "", message: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 5;

  // Fetch feedback from backend
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch("https://cautious-giggle-jx9qv6grqgw35q6q-5001.app.github.dev/api/feedback");
        if (!response.ok) throw new Error("Failed to fetch feedback");
        const data = await response.json();
        setFeedback(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchFeedback();
  }, []);

  const filteredFeedback = feedback.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFeedback = filteredFeedback.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredFeedback.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleDeleteFeedback = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/feedback/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete feedback");
      setFeedback((prev) => prev.filter((item) => item._id !== id));
      if (selectedFeedback && selectedFeedback._id === id) closeDetails();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRowClick = (item) => setSelectedFeedback(item);
  const closeDetails = () => {
    setSelectedFeedback(null);
    setShowReplyForm(false);
    setReplyData({ subject: "", message: "" });
  };

  const handleReplyToggle = () => setShowReplyForm(!showReplyForm);
  const handleReplyChange = (e) => {
    const { name, value } = e.target;
    setReplyData((prev) => ({ ...prev, [name]: value }));
  };
  const handleReplySubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${selectedFeedback.email}?subject=${encodeURIComponent(
      replyData.subject
    )}&body=${encodeURIComponent(replyData.message)}`;
    window.location.href = mailtoLink;
    setShowReplyForm(false);
    setReplyData({ subject: "", message: "" });
  };

  if (loading) return <div className="p-6 text-primary font-body">Loading...</div>;
  if (error) return <div className="p-6 text-red-500 font-body">{error}</div>;

  return (
    <div className="p-6 bg-secondary min-h-screen w-full">
      <h1 className="text-3xl font-heading font-extrabold text-primary mb-6">
        User Feedback Dashboard
      </h1>

      {/* Search Bar */}
      <div className="relative mb-6 max-w-md">
        <input
          type="text"
          placeholder="Search feedback by user, email, or message..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 pl-10 border border-border bg-light rounded-md text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary opacity-70" />
      </div>

      {/* Feedback Table */}
      <div className="bg-light rounded-xl shadow-lg border border-border overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-secondary">
            <tr>
              <th className="px-4 py-3 text-sm font-body font-medium text-primary">No.</th>
              <th className="px-4 py-3 text-sm font-body font-medium text-primary">User</th>
              <th className="px-4 py-3 text-sm font-body font-medium text-primary">Email</th>
              <th className="px-4 py-3 text-sm font-body font-medium text-primary">Message</th>
              <th className="px-4 py-3 text-sm font-body font-medium text-primary">Date</th>
              <th className="px-4 py-3 text-sm font-body font-medium text-primary">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {currentFeedback.map((item, index) => (
              <tr
                key={item._id}
                className="hover:bg-accent hover:bg-opacity-10 cursor-pointer transition-colors"
                onClick={() => handleRowClick(item)}
              >
                <td className="px-4 py-4 text-sm text-primary font-body">
                  {indexOfFirstItem + index + 1}
                </td>
                <td className="px-4 py-4 text-sm text-primary font-body">{item.name}</td>
                <td className="px-4 py-4 text-sm text-primary font-body">{item.email}</td>
                <td className="px-4 py-4 text-sm text-primary font-body">{item.message}</td>
                <td className="px-4 py-4 text-sm text-primary font-body">
                  {new Date(item.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-4 text-sm text-primary font-body">
                  <button
                    className="text-red-500 hover:text-red-700 mr-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteFeedback(item._id);
                    }}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 bg-light border border-border rounded-md text-primary font-body hover:bg-accent hover:text-light disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaChevronLeft />
        </button>
        <span className="text-sm text-primary font-body">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 bg-light border border-border rounded-md text-primary font-body hover:bg-accent hover:text-light disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Feedback Details Modal */}
      {selectedFeedback && (
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

            <div className="mt-6 flex justify-between items-center">
              <button
                onClick={handleReplyToggle}
                className="px-4 py-2 text-sm font-body text-accent border border-accent rounded-md hover:bg-accent hover:text-light transition-colors duration-200 flex items-center"
              >
                <FaReply className="mr-2" />
                {showReplyForm ? "Cancel Reply" : "Reply"}
              </button>
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

            {showReplyForm && (
              <form onSubmit={handleReplySubmit} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-body font-medium text-primary mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={replyData.subject}
                    onChange={handleReplyChange}
                    placeholder="e.g., Thank You for Your Feedback"
                    className="w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-body font-medium text-primary mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={replyData.message}
                    onChange={handleReplyChange}
                    placeholder="Type your reply here..."
                    rows="4"
                    className="w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="submit"
                    className="px-6 py-2 border border-transparent text-base font-body font-medium rounded-md text-light bg-accent hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-200"
                  >
                    Send Reply
                  </button>
                  <button
                    type="button"
                    onClick={handleReplyToggle}
                    className="px-6 py-2 border border-accent text-base font-body font-medium rounded-md text-accent hover:bg-accent hover:text-light transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedbacks;