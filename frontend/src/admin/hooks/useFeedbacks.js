import { useEffect, useState } from "react";
import feedbackService from "../../services/feedback-service";

const useFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [state, setState] = useState(null);
  const [notif, setNotif] = useState(null);

 const reload = ()=>{
  setState(!state);
 }

  useEffect(() => {
    feedbackService
      .getAll()
      .then((res) => {
        setFeedbacks(res.data);
        setNotif(feedbacks?.filter((feed) => feed.isRead === false).length);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [feedbacks, state]);

  // setNotif(unread);

  if (notif === 0) return { feedbacks, loading, error,setError, notif: null, reload };
  return {
    feedbacks,
    setFeedbacks,
    loading,
    setLoading,
    error,
    setError,
    notif,
    reload,
  };
};

export default useFeedback;
