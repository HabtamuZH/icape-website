import React from "react";
import { motion } from "framer-motion";

const DashboardHeader = ({ onRefresh, statsData }) => {
  const handleExport = () => {
    // Prepare data for export
    const exportData = {
      projects: statsData.projects,
      blogs: statsData.blogs,
      feedbacks: statsData.feedbacks,
      applicants: statsData.applicants,
      timestamp: new Date().toISOString(),
    };

    // Convert data to JSON string with indentation
    const jsonString = JSON.stringify(exportData, null, 2);

    // Create a Blob with the JSON data
    const blob = new Blob([jsonString], { type: "application/json" });

    // Create a temporary URL and trigger download
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `dashboard-stats-${new Date().toLocaleDateString()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-light shadow-md rounded-lg p-6 mb-8 flex flex-col sm:flex-row items-center justify-between border border-border"
    >
      <h1 className="text-3xl font-heading font-bold text-primary mb-4 sm:mb-0">
        iCAPE Management Dashboard
      </h1>
      <div className="space-x-4">
        <button
          onClick={onRefresh}
          className="px-4 py-2 bg-accent text-light rounded-md hover:bg-primary transition-colors font-body focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Refresh
        </button>
        <button
          onClick={handleExport}
          className="px-4 py-2 bg-secondary text-primary rounded-md hover:bg-border transition-colors font-body focus:outline-none focus:ring-2 focus:ring-border"
        >
          Export
        </button>
      </div>
    </motion.header>
  );
};

export default DashboardHeader;
