import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import FeedbackTable from "./FeedbackTable";
import Pagination from "./Pagination";
import FeedbackModal from "./FeedbackModal";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const FeedbackDashboard = () => {
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
      const response = await fetch(`https://cautious-giggle-jx9qv6grqgw35q6q-5001.app.github.dev/api/feedback/${id}`, {
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

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="p-6 bg-secondary min-h-screen w-full">
      <h1 className="text-3xl font-heading font-extrabold text-primary mb-6">
        User Feedback Dashboard
      </h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FeedbackTable
        currentFeedback={currentFeedback}
        indexOfFirstItem={indexOfFirstItem}
        handleRowClick={handleRowClick}
        handleDeleteFeedback={handleDeleteFeedback}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
      {selectedFeedback && (
        <FeedbackModal
          selectedFeedback={selectedFeedback}
          showReplyForm={showReplyForm}
          setShowReplyForm={setShowReplyForm}
          replyData={replyData}
          setReplyData={setReplyData}
          closeDetails={closeDetails}
          handleDeleteFeedback={handleDeleteFeedback}
        />
      )}
    </div>
  );
};

export default FeedbackDashboard;