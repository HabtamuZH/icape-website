import applicationService from "./../../services/application-service";
import { useEffect, useState } from "react";

const useApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notif, setNotif] = useState(null);

  useEffect(() => {
    applicationService
      .getAll()
      .then((res) => {
        setApplications(res.data);
        setNotif(applications?.filter((app) => app.isRead === false).length);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [applications]);

  const markAsRead = async (id) => {
    applicationService
      .update(id)
      .then(() => {
        setApplications(
          applications.map((app) =>
            app.id === id ? { ...app, isRead: true } : app
          )
        );
      })
      .catch((err) => console.log(err.message));
  };

  if (notif === 0)
    return { applications, loading, error, notif: null, markAsRead };
  
  return { applications, loading, error, notif, markAsRead };
};

export default useApplications;
