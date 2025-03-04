// src/hooks/useFeedbacks.js
import { useEffect, useState } from "react";
import feedbackService from "../../services/feedback-service";

const useFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notif, setNotif] = useState(null);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    feedbackService
      .getAll()
      .then((res) => {
        setFeedbacks(res.data);
        setNotif(feedbacks?.filter((app) => app.isRead === false).length);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [feedbacks]);

  const load = () => {
    setReload(!reload);
  };

  if (notif === 0)
    return { feedbacks, setFeedbacks, loading, error, notif: null, load };

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
