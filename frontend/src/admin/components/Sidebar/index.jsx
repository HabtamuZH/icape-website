/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Option from "./Option";
import TitleSection from "./Title";
import ToggleClose from "./ToggleClose";
import optionsData from "../../data/optionData";
import useApplications from "../../hooks/useApplications";
import useFeedback from "../../hooks/useFeedbacks";
import { useLocation } from "react-router-dom";

const Sidebar = ({ unreadCount }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(path || "/admin");

  const { notif: appNotif } = useApplications();
  const { notif: feedbackNotif } = useFeedback();

  useEffect(() => {
    if (window.innerWidth <= 768) setOpen(false);
  }, [appNotif, feedbackNotif]);

  const updatedOptionsData = optionsData.map((option) =>
    option.title === "Notifications"
      ? { ...option, notifs: unreadCount }
      : option
  );

  return (
    <motion.nav
      layout
      className={`sticky top-0 h-screen shrink-0 border-r border-border bg-light p-2 text-primary ${
        open ? "w-56" : "w-fit"
      }`}
    >
      <TitleSection open={open} />
      <div className="space-y-2">
        {updatedOptionsData.map(({ Icon, title, link, notify }) => {
          if (title === "View Applications") notify = appNotif;
          if (title === "View Feedbacks") notify = feedbackNotif;
          return (
            <Option
              key={title}
              Icon={Icon}
              title={title}
              link={link}
              selected={selected}
              setSelected={setSelected}
              open={open}
              notify={notify}
            />
          );
        })}
      </div>
      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

export default Sidebar;
