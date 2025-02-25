import { useState } from "react";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";
import FeedbackTable from "./FeedbackTable";
import Pagination from "./Pagination";
import FeedbackModal from "./FeedbackModal";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import ErrorMessage from "./ErrorMessage";
import feedbackService from "../../../services/feedback-service";
import useFeedback from "../../hooks/useFeedbacks";

const FeedbackDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyData, setReplyData] = useState({ subject: "", message: "" });
  const { feedbacks, setFeedbacks, loading, error, setError, reload } = useFeedback();

  const itemsPerPage = 5;

  // Filter feedback based on search query
  const filteredFeedback = feedbacks.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFeedback = filteredFeedback.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredFeedback.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleDeleteFeedback = async (id) => {
    try {
      await feedbackService.delete(id);
      setFeedbacks((prev) => prev.filter((item) => item._id !== id));
      if (selectedFeedback && selectedFeedback._id === id) closeDetails();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      const updatedFeedback = feedbacks.find((item) => item._id === id);
      if (!updatedFeedback.isRead) {
        await feedbackService.update(id, { isRead: true });
        reload();
      }
    } catch (error) {
      console.error("Error marking feedback as read:", error);
      setError(error.message);
    }
  };

  const handleSelectFeedback = (item) => {
    setSelectedFeedback(item);
    handleMarkAsRead(item._id);
  };

  const closeDetails = () => {
    setSelectedFeedback(null);
    setShowReplyForm(false);
    setReplyData({ subject: "", message: "" });
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-8 sm:py-16 bg-secondary min-h-screen w-full px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-primary mb-6 sm:mb-8 text-center">
          User Feedback Dashboard
        </h1>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mb-6">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={reload}
            className="px-4 py-2 bg-accent text-light font-body rounded-md shadow-md hover:bg-opacity-80 transition-all duration-200"
          >
            Refresh
          </motion.button>
        </div>

        <div className="">
          <FeedbackTable
            currentFeedback={currentFeedback}
            indexOfFirstItem={indexOfFirstItem}
            handleRowClick={handleSelectFeedback}
            handleDeleteFeedback={handleDeleteFeedback}
            handleMarkAsRead={handleMarkAsRead}
          />
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
            />
          )}
        </div>

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
    </motion.div>
  );
};

export default FeedbackDashboard;
