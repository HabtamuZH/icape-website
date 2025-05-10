import { useState, useEffect } from "react";
import ApplicationsTable from "./ApplicationsTable";
import ApplicationDetailsModal from "./ApplicationDetailsModal";
import TableFilter from "./TableFilter";
import TableSearch from "./TableSearch";
import LoadingSpinner from "../../../common/LoadingSpinner";
import useApplications from "../../hooks/useApplications";

const ApplicationsView = () => {
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [filter, setFilter] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const { applications, loading, error, markAsRead } = useApplications();

  useEffect(() => {
    // Apply filter and search logic
    let result = applications;

    // Apply filter
    if (Object.keys(filter).length > 0) {
      result = result.filter((app) =>
        Object.entries(filter).every(([key, value]) => app[key] === value)
      );
    }

    // Apply search
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(
        (app) =>
          app.fullName.toLowerCase().includes(searchLower) ||
          app.email.toLowerCase().includes(searchLower) ||
          app.opportunityType.toLowerCase().includes(searchLower) ||
          new Date(app.submittedAt)
            .toLocaleDateString()
            .toLowerCase()
            .includes(searchLower)
      );
    }

    setFilteredApplications(result);
  }, [filter, searchTerm, applications]);

  if (loading) return <LoadingSpinner />;
  if (error)
    return (
      <div className="h-screen w-full bg-secondary flex justify-center item-center">
        <p className="text-red-500">
          Error: {error || "😮Oops.. Something went wrong."}
        </p>
      </div>
    );

  const handleViewDetails = (application) => {
    setSelectedApplication(application);
    markAsRead(application.id);
  };

  const handleCloseDetails = () => {
    setSelectedApplication(null);
  };

  const handleFilter = (filterObj) => {
    setFilter(filterObj);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const opportunityOptions = [
    { value: "", label: "All" },
    {
      value: "Professional Career Opportunities",
      label: "Professional Career Opportunities",
    },
    { value: "Internship Program 2025", label: "Internship Program 2025" },
  ];

  return (
    <section className="py-16 bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-heading font-extrabold text-primary mb-8 text-center">
          Career Applications Dashboard
        </h2>
        <p className="text-primary font-body text-center mb-12 max-w-3xl mx-auto">
          Review and manage applications submitted for iCAPE’s Professional
          Career Opportunities and Internship Program 2025.
        </p>

        <div className="flex flex-col justify-between sm:flex-row gap-4 mb-6">
          <TableSearch onSearch={handleSearch} />
          <TableFilter
            onFilter={handleFilter}
            filterOptions={opportunityOptions}
            filterField="opportunityType"
          />
        </div>

        <ApplicationsTable
          applications={filteredApplications}
          onViewDetails={handleViewDetails}
        />

        {selectedApplication && (
          <ApplicationDetailsModal
            application={selectedApplication}
            onClose={handleCloseDetails}
          />
        )}
      </div>
    </section>
  );
};

export default ApplicationsView;
