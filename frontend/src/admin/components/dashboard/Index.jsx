import React from "react";
import Card from "./Card";
import {
  FaBuilding,
  FaCalendarAlt,
  FaPen,
  FaUserPlus,
} from "react-icons/fa";

const statistics = [
  {
    color: "blue",
    icon: FaBuilding,
    title: "Completed Projects",
    value: "150",
    footer: {
      color: "text-green-500",
      value: "+12%",
      label: "growth this year",
    },
  },
  {
    color: "green",
    icon: FaPen,
    title: "Ongoing Projects",
    value: "30",
    footer: {
      color: "text-yellow-500",
      value: "+5%",
      label: "increase this quarter",
    },
  },
  {
    color: "orange",
    icon: FaCalendarAlt,
    title: "Upcoming Projects",
    value: "25",
    footer: {
      color: "text-yellow-500",
      value: "+5%",
      label: "increase this quarter",
    },
  },
  {
    color: "purple",
    icon: FaUserPlus,
    title: "New Subscribers",
    value: "18",
    footer: {
      color: "text-blue-500",
      value: "+8%",
      label: "growth this Month",
    },
  },
];

const Dashboard = () => {
  return (
    <div className="px-2 py-8 w-full">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statistics.map(({ icon, title, footer, ...rest }) => (
          <Card
            key={title}
            title={title}
            {...rest}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <p className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </p>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
