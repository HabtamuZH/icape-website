import React, { useState, useEffect } from "react";
import careerService from "../../../services/careers-service";
import CareerCard from "./CareerCard";
import CareerSearch from "./CareerSearch";
import CareerFilter from "./CareerFilter";
import PostNewCareerButton from "./PostNewCareerButton";
import LoadingSpinner from "../../../common/LoadingSpinner";
import CareerFormModal from "./CareerFormModal";
import UpdateCareerForm from "./UpdateCareerForm";
import PostCareerForm from "./PostCareerForm";
import ConfirmDeleteCareerModal from "./ConfirmDeleteCareerModal"; // New import
import SuccessModal from "../blogs/SuccessModal";

const CareerDashboard = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteTitle, setDeleteTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [isDeleteSuccessModalOpen, setIsDeleteSuccessModalOpen] = useState(false);

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

  const handleDeleteCareer = (id, title) => {
    setDeleteId(id);
    setDeleteTitle(title);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteCareer = async () => {
    try {
      await careerService.delete(deleteId);
      setCareers((prev) => prev.filter((career) => career._id !== deleteId));
      setIsDeleteModalOpen(false);
      setIsDeleteSuccessModalOpen(true)
    } catch (error) {
      console.error("Error deleting career:", error);
    } finally {
      setDeleteId(null);
      setDeleteTitle("");
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
          {filteredCareers.length > 0 ? (
            filteredCareers.map((career) => (
              <CareerCard
                key={career._id}
                career={career}
                onUpdate={handleUpdateCareer}
                onDelete={handleDeleteCareer} // Pass id and title
              />
            ))
          ) : (
            <p className="col-span-full text-center text-primary font-body text-lg">
              No Careers found.
            </p>
          )}
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
      <ConfirmDeleteCareerModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDeleteCareer}
        careerTitle={deleteTitle}
      />
      <SuccessModal
      isOpen={isDeleteSuccessModalOpen}
      text={`Career has been deleted successfully!`}
      onClose={() => setIsDeleteSuccessModalOpen(false)}
      />
    </section>
  );
};

export default CareerDashboard;
