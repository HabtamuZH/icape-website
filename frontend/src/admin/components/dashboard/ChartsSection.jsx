import React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#C19A6B", "#333333", "#D1BFA7"];

const ChartsSection = ({ stats, monthlyApplicants }) => {
  const barChartData = [
    { name: "Projects", value: stats.projects },
    { name: "Blogs", value: stats.blogs },
    { name: "Feedbacks", value: stats.feedbacks },
  ];

  const pieChartData = [
    { name: "Projects", value: stats.projects },
    { name: "Blogs", value: stats.blogs },
    { name: "Feedbacks", value: stats.feedbacks },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
    >
      <div className="bg-light p-6 rounded-xl shadow-md border border-border">
        <h2 className="text-xl font-heading font-semibold text-primary mb-4">
          Activity Breakdown
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barChartData}>
            <XAxis dataKey="name" stroke="#333333" />
            <YAxis stroke="#333333" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#F5F5F5",
                borderColor: "#D1BFA7",
              }}
              labelStyle={{ color: "#333333" }}
            />
            <Legend />
            <Bar dataKey="value" fill="#C19A6B" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-light p-6 rounded-xl shadow-md border border-border">
        <h2 className="text-xl font-heading font-semibold text-primary mb-4">
          Applicant Trends Over Time
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyApplicants}>
            <XAxis
              dataKey="month"
              stroke="#333333"
              angle={-45}
              textAnchor="end"
              height={70}
              interval={0} // Show all labels
              tick={{ fontSize: 12 }}
            />
            <YAxis stroke="#333333" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#F5F5F5",
                borderColor: "#D1BFA7",
              }}
              labelStyle={{ color: "#333333" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="applicants"
              stroke="#C19A6B"
              strokeWidth={2}
              dot={{ r: 4, fill: "#C19A6B" }}
              connectNulls={true} // Ensure continuous line across gaps
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-light p-6 rounded-xl shadow-md border border-border">
        <h2 className="text-xl font-heading font-semibold text-primary mb-4">
          Activity Distribution
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#F5F5F5",
                borderColor: "#D1BFA7",
              }}
              labelStyle={{ color: "#333333" }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ChartsSection;
