import { useEffect, useState } from "react";
import feedbackService from "../../services/feedback-service";

const useFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notif, setNotif] = useState(null);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setLoading(true);
    feedbackService
      .getAll()
      .then((res) => {
        const allFeedbacks = res.data;
        setFeedbacks(allFeedbacks);
        const unreadCount = allFeedbacks.filter((app) => !app.isRead).length;
        setNotif(unreadCount);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [reload]); // Only trigger when reload is toggled

  const load = () => setReload((prev) => !prev); // Toggle reload

  return {
    feedbacks,
    setFeedbacks,
    loading,
    setLoading,
    error,
    setError,
    notif,
    load,
  };
};

export default useFeedback;
