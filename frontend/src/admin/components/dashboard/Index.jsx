import React, { useState, useEffect } from "react";
import DashboardHeader from "./DashboardHeader";
import StatsCards from "./StatsCards";
import ChartsSection from "./ChartsSection";
import projectService from "../../../services/project-service";
import blogService from "../../../services/blog-service";
import feedbackService from "../../../services/feedback-service";
import applicationService from "../../../services/application-service";
import { CanceledError } from "axios";
import LoadingSpinner from "../../../components/common/LoadingSpinner";

const Dashboard = () => {
  const [statsData, setStatsData] = useState({
    projects: 0,
    blogs: 0,
    feedbacks: 0,
    applicants: 0,
  });
  const [monthlyApplicants, setMonthlyApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStats = async () => {
    setLoading(true);
    setError(null);
    try {
      const [projectsRes, blogsRes, feedbacksRes, applicationsRes] =
        await Promise.all([
          projectService.getAll(),
          blogService.getAll(),
          feedbackService.getAll(),
          applicationService.getAll(),
        ]);

      // Basic stats
      const stats = {
        projects: projectsRes.data.length,
        blogs: blogsRes.data.length,
        feedbacks: feedbacksRes.data.length,
        applicants: applicationsRes.data.length,
      };
      setStatsData(stats);

      // Process monthly applicants for all months
      const monthlyData = processMonthlyApplicants(applicationsRes.data);
      setMonthlyApplicants(monthlyData);
    } catch (err) {
      if (err instanceof CanceledError) {
        setError("Request was canceled.");
      } else {
        setError("Failed to fetch dashboard data. Please try again later.");
        console.error(
          "Error fetching stats:",
          err.response?.data || err.message
        );
      }
    } finally {
      setLoading(false);
    }
  };

  // Function to process applicants and generate all months with 0s where no data exists
  const processMonthlyApplicants = (applications) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Group applicants by month/year
    const applicantCounts = applications.reduce((acc, app) => {
      const date = new Date(app.submittedAt);
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear();
      const monthYear = `${month} ${year}`;
      acc[monthYear] = (acc[monthYear] || 0) + 1;
      return acc;
    }, {});

    // Determine earliest and latest dates (default to last 2 years if no data)
    const dates = applications.map((app) => new Date(app.submittedAt));
    const earliest = dates.length
      ? new Date(Math.min(...dates))
      : new Date(new Date().setFullYear(new Date().getFullYear() - 2));
    const latest = dates.length ? new Date(Math.max(...dates)) : new Date();

    // Generate all months from earliest to latest
    const allMonths = [];
    let current = new Date(earliest.getFullYear(), earliest.getMonth(), 1);
    const end = new Date(latest.getFullYear(), latest.getMonth() + 1, 0);

    while (current <= end) {
      const monthYear = `${
        monthNames[current.getMonth()]
      } ${current.getFullYear()}`;
      allMonths.push({
        month: monthYear,
        applicants: applicantCounts[monthYear] || 0,
      });
      current.setMonth(current.getMonth() + 1);
    }

    return allMonths;
  };

  useEffect(() => {
    fetchStats();
  }, []);

  if (loading)
    return (
      <div className="text-center text-primary font-body py-4">
        <LoadingSpinner />
      </div>
    );
  if (error)
    return (
      <div className="text-center text-red-500 font-body py-4">{error}</div>
    );

  return (
    <div className="px-4 py-8 w-full bg-secondary min-h-screen">
      <DashboardHeader onRefresh={fetchStats} statsData={statsData} />
      <StatsCards stats={statsData} />
      <ChartsSection stats={statsData} monthlyApplicants={monthlyApplicants} />
    </div>
  );
};

export default Dashboard;
