import React, { useState, useEffect } from "react";
import teamService from "../../../services/team-service";
import BlogFormModal from "../blogs/BlogFormModal";
import SuccessModal from "../blogs/SuccessModal";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import TeamList from "./TeamList";
import TeamForm from "./TeamForm";

const AdminTeamManagement = () => {
  const [team, setTeam] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search input
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    title: "",
    desc: "",
    socialLinks: [{ platform: "", url: "" }],
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [editId, setEditId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    setLoading(true);
    try {
      const response = await teamService.getAll();
      setTeam(response.data);
    } catch (err) {
      console.error("Error fetching team members:", err);
    } finally {
      setLoading(false);
    }
  };

  // Filter team based on search query
  const filteredTeam = team.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, image: "File size must be less than 5MB." });
        return;
      }
      if (!["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
        setErrors({
          ...errors,
          image: "Only JPG, JPEG, and PNG files are allowed.",
        });
        return;
      }
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
      setErrors({ ...errors, image: "" });
    }
  };

  const handleRemoveImage = () => {
    setFormData({ ...formData, image: null });
    setImagePreview(null);
    setErrors({ ...errors, image: "" });
  };

  const handleSocialLinkChange = (index, field, value) => {
    const updatedLinks = [...formData.socialLinks];
    updatedLinks[index][field] = value;
    setFormData({ ...formData, socialLinks: updatedLinks });
    validateSocialLink(index, updatedLinks[index]);
  };

  const addSocialLink = () => {
    setFormData({
      ...formData,
      socialLinks: [...formData.socialLinks, { platform: "", url: "" }],
    });
  };

  const removeSocialLink = (index) => {
    const updatedLinks = formData.socialLinks.filter((_, i) => i !== index);
    setFormData({ ...formData, socialLinks: updatedLinks });
  };

  const validateField = (field, value) => {
    let fieldErrors = { ...errors };
    if (!value && field !== "image" && field !== "socialLinks") {
      fieldErrors[field] = `${
        field.charAt(0).toUpperCase() + field.slice(1)
      } is required.`;
    } else {
      fieldErrors[field] = "";
    }
    setErrors(fieldErrors);
  };

  const validateSocialLink = (index, link) => {
    let fieldErrors = { ...errors };
    fieldErrors[`socialLinks_${index}_platform`] = !link.platform
      ? "Platform is required."
      : "";
    fieldErrors[`socialLinks_${index}_url`] = !link.url
      ? "URL is required."
      : "";
    setErrors(fieldErrors);
  };

  const validateForm = () => {
    const finalErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      if (key !== "image" && key !== "socialLinks" && !formData[key]) {
        finalErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
        isValid = false;
      }
    });

    if (!editId && !formData.image) {
      finalErrors.image = "Image is required for new team members.";
      isValid = false;
    }

    formData.socialLinks.forEach((link, index) => {
      if (!link.platform) {
        finalErrors[`socialLinks_${index}_platform`] = "Platform is required.";
        isValid = false;
      }
      if (!link.url) {
        finalErrors[`socialLinks_${index}_url`] = "URL is required.";
        isValid = false;
      }
    });

    setErrors(finalErrors);
    return isValid;
  };

  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("title", formData.title);
    formDataToSubmit.append("desc", formData.desc);
    if (formData.image) formDataToSubmit.append("avatar", formData.image);
    formDataToSubmit.append(
      "socialLinks",
      JSON.stringify(formData.socialLinks)
    );

    try {
      if (editId) {
        await teamService.update(editId, formDataToSubmit, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setSuccessMessage("Team member updated successfully!");
      } else {
        await teamService.create(formDataToSubmit, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setSuccessMessage("Team member added successfully!");
      }
      resetForm();
    } catch (err) {
      setErrors({ submit: "Failed to save team member. Please try again." });
      console.error("Error saving team member:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (member) => {
    setEditId(member._id);
    setFormData({
      image: null,
      name: member.name,
      title: member.title,
      desc: member.desc,
      socialLinks: member.socialLinks.length
        ? member.socialLinks
        : [{ platform: "", url: "" }],
    });
    setImagePreview(member.avatar);
    setErrors({});
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this team member?")) {
      try {
        await teamService.delete(id);
        setSuccessMessage("Team member deleted successfully!");
      } catch (err) {
        console.error("Error deleting team member:", err);
      }
    }
  };

  const openAddModal = () => {
    setEditId(null);
    setFormData({
      image: null,
      name: "",
      title: "",
      desc: "",
      socialLinks: [{ platform: "", url: "" }],
    });
    setImagePreview(null);
    setErrors({});
    setIsModalOpen(true);
  };

  const resetForm = () => {
    setFormData({
      image: null,
      name: "",
      title: "",
      desc: "",
      socialLinks: [{ platform: "", url: "" }],
    });
    setImagePreview(null);
    setEditId(null);
    setErrors({});
  };

  if (loading) {
    return (
      <div className="text-center text-primary font-body py-4">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="py-16 bg-secondary min-h-screen px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-heading font-bold text-primary mb-6">
        Manage Team Members
      </h2>
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name, title, or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4  rounded-md border border-border bg-light text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
        <button
          onClick={openAddModal}
          className="px-4 py-2 bg-accent inline text-light rounded-md hover:bg-primary transition-colors font-body font-medium"
        >
          +Add
        </button>
      </div>

      {filteredTeam.length > 0 ? (
        <TeamList
          team={filteredTeam}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ) : 
        <p className="col-span-full text-center text-primary font-body text-lg">
          No Team Member.
        </p>
      }

      {isModalOpen && (
        <BlogFormModal onClose={() => setIsModalOpen(false)}>
          <TeamForm
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            isSubmitting={isSubmitting}
            onSubmit={handleCreateOrUpdate}
            editId={editId}
            handleInputChange={handleInputChange}
            handleSocialLinkChange={handleSocialLinkChange}
            addSocialLink={addSocialLink}
            removeSocialLink={removeSocialLink}
            handleImageChange={handleImageChange}
            handleRemoveImage={handleRemoveImage}
            imagePreview={imagePreview}
          />
        </BlogFormModal>
      )}

      <SuccessModal
        isOpen={successMessage}
        text={successMessage}
        onClose={() => {
          setSuccessMessage(null);
          setIsModalOpen(false);
          setLoading(true);
          fetchTeamMembers();
        }}
      />
    </div>
  );
};

export default AdminTeamManagement;