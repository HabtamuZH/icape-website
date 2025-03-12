import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import FeedbackTable from "./FeedbackTable";
import Pagination from "./Pagination";
import FeedbackModal from "./FeedbackModal";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";
import feedbackService from "../../../services/feedback-service";

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

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await feedbackService.getAll();
        console.log("API Response:", response);
        const feedbackArray = Array.isArray(response) ? response : response.data || [];
        setFeedback(feedbackArray);
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
        // Pass handleDeleteFeedback if uncommented and fixed
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
          // Pass handleDeleteFeedback if uncommented and fixed
        />
      )}
    </div>
  );
};

export default FeedbackDashboard;