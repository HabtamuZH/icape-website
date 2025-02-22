import { useState } from "react";
import { motion } from "framer-motion";
import Option from "./Option";
import TitleSection from "./Title";
import ToggleClose from "./ToggleClose";
import optionsData from "../../data/optionData";

const Sidebar = ({ unreadCount }) => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  const updatedOptionsData = optionsData.map((option) =>
    option.title === "Notifications" ? { ...option, notifs: unreadCount } : option
  );

  return (
    <motion.nav
      layout
      className={`sticky top-0 h-screen shrink-0 border-r border-border bg-light p-2 text-primary ${open ? "w-56" : "w-fit"}`}
    >
      <TitleSection open={open} />
      <div className="space-y-2">
        {updatedOptionsData.map(({ Icon, title, link, notify }) => (
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
        ))}
      </div>
      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

export default Sidebar;