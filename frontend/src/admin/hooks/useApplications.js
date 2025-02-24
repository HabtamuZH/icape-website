import applicationService from "./../../services/application-service";
import { useEffect, useState } from "react";

const useApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    applicationService
      .getAll()
      .then((res) => setApplications(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const notif = applications.filter((app) => app.isRead === false).length;

  const markAsRead = async (id) => {
    applicationService
      .update(id)
      .then(() => {
        setApplications(
          applications.map((app) =>
            app._id === id ? { ...app, isRead: true } : app
          )
        );
      })
      .catch((err) => console.log(err.message));
  };

  return { applications, loading, error, notif, markAsRead };
};

export default useApplications;
