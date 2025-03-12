import React from "react";
import Card from "./Card";
import { FaFolderOpen, FaPen, FaComments, FaUserPlus } from "react-icons/fa";
import { motion } from "framer-motion";

const StatsCards = ({ stats }) => {
  const statistics = [
    {
      color: "blue",
      icon: FaFolderOpen,
      title: "Projects",
      value: stats.projects.toString(),
      footer: {
        color: "text-accent",
        value: "+10%",
        label: "growth this year",
      },
    },
    {
      color: "green",
      icon: FaPen,
      title: "Blogs",
      value: stats.blogs.toString(),
      footer: {
        color: "text-accent",
        value: "+8%",
        label: "increase this quarter",
      },
    },
    {
      color: "orange",
      icon: FaComments,
      title: "Feedbacks",
      value: stats.feedbacks.toString(),
      footer: {
        color: "text-accent",
        value: "+15%",
        label: "growth this year",
      },
    },
    {
      color: "purple",
      icon: FaUserPlus,
      title: "Applicants",
      value: stats.applicants.toString(),
      footer: {
        color: "text-accent",
        value: "+20%",
        label: "increase this month",
      },
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {statistics.map(({ icon, title, footer, ...rest }) => (
        <Card
          key={title}
          title={title}
          {...rest}
          icon={React.createElement(icon, { className: "w-6 h-6 text-light" })}
          footer={
            <p className="font-body text-primary">
              <strong className={footer.color}>{footer.value}</strong>{" "}
              {footer.label}
            </p>
          }
        />
      ))}
    </motion.div>
  );
};

export default StatsCards;
