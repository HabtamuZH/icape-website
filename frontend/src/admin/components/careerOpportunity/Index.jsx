import React, { useState, useEffect } from "react";
import careerService from "../../../services/careers-service";
import CareerCard from "./CareerCard";
import CareerSearch from "./CareerSearch";
import CareerFilter from "./CareerFilter";
import PostNewCareerButton from "./PostNewCareerButton";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import CareerFormModal from "./CareerFormModal";
import UpdateCareerForm from "./UpdateCareerForm";
import PostCareerForm from "./PostCareerForm";

const CareerDashboard = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    setLoading(true);
    try {
      const res = await careerService.getAll();
      setCareers(res.data);
    } catch (error) {
      console.error("Error fetching careers:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCareer = async (id) => {
    try {
      await careerService.delete(id);
      setCareers((prev) => prev.filter((career) => career._id !== id));
    } catch (error) {
      console.error("Error deleting career:", error);
    }
  };

  const handleUpdateCareer = (career) => {
    setSelectedCareer(career);
    setIsModalOpen(true);
  };

  const handleAddNewCareer = () => {
    setSelectedCareer(null);
    setIsModalOpen(true);
  };

  // const handleToggleActive = async (id, currentStatus) => {
  //   try {
  //     const updatedCareer = await careerService.update(id, {
  //       isActive: !currentStatus,
  //     });
  //     setCareers((prev) =>
  //       prev.map((career) => (career._id === id ? updatedCareer.data : career))
  //     );
  //   } catch (error) {
  //     console.error("Error toggling career status:", error);
  //   }
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCareer(null);
    fetchCareers();
  };

  const filteredCareers = careers.filter((career) => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      career.title.toLowerCase().includes(searchLower) ||
      career.description.toLowerCase().includes(searchLower) ||
      career.details.some((detail) =>
        detail.toLowerCase().includes(searchLower)
      );

    const matchesType = typeFilter ? career.type === typeFilter : true;

    return matchesSearch && matchesType;
  });

  if (loading) return <LoadingSpinner />;

  return (
    <section className="py-16 bg-secondary min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-primary mb-8 sm:mb-12 text-center">
          Career Opportunities Dashboard
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <CareerSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <CareerFilter typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map((career) => (
            <CareerCard
              key={career._id}
              career={career}
              onUpdate={handleUpdateCareer}
              onDelete={handleDeleteCareer}
            />
          ))}
        </div>
        <div className="fixed bottom-4 right-4">
          <PostNewCareerButton onClick={handleAddNewCareer} />
        </div>
      </div>
      {isModalOpen && (
        <CareerFormModal onClose={handleCloseModal}>
          {selectedCareer ? (
            <UpdateCareerForm
              initialData={selectedCareer}
              onClose={handleCloseModal}
            />
          ) : (
            <PostCareerForm onClose={handleCloseModal} />
          )}
        </CareerFormModal>
      )}
    </section>
  );
};

export default CareerDashboard;
