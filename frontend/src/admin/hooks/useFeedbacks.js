// src/hooks/useFeedbacks.js
import { useEffect, useState } from "react";
import feedbackService from "../../services/feedback-service";

const useFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notif, setNotif] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await feedbackService.getAll();
        setFeedbacks(res.data);
        const unreadCount = res.data.filter((feed) => !feed.isRead).length;
        setNotif(unreadCount > 0 ? unreadCount : null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFeedbacks();
  }, []); // Empty dependency array for initial fetch only

  return {
    feedbacks,
    setFeedbacks,
    loading,
    setLoading,
    error,
    setError,
    notif,
  };
};

export default useFeedback;
