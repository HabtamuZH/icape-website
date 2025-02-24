import { useEffect, useState } from "react";
import feedbackService from "../../services/feedback-service";

const useFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(null);
  const [notif, setNotif] = useState(null);

  useEffect(() => {
    feedbackService
      .getAll()
      .then((res) => {
        setFeedbacks(res.data);
        setNotif(feedbacks?.filter((feed) => feed.isRead === false).length);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [feedbacks, reload]);

  // setNotif(unread);

  if (notif === 0) return { feedbacks, loading, error, notif: null, setReload };
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
