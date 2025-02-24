import { useEffect, useState } from "react";
import feedbackService from "../../services/feedback-service";

const useFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(null);

  useEffect(() => {
    feedbackService
      .getAll()
      .then((res) => setFeedbacks(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [reload]);

  const notif = feedbacks?.filter((feed) => feed.isRead === false).length;

  return {
    feedbacks,
    setFeedbacks,
    loading,
    setLoading,
    error,
    setError,
    notif,
    setReload,
  };
};

export default useFeedback;
