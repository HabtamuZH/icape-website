import React, { useState, useEffect } from "react";
import projectService from "../../../services/project-service";
import FormHeader from "../blogs/FormHeader";
import InputField from "../blogs/InputField";
import SelectField from "../blogs/SelectField";
import SubmitButton from "../blogs/SubmitButton";
import SuccessModal from "../blogs/SuccessModal";

const types = [
  { value: "", label: "Select Type" },
  { value: "completed", label: "Completed" },
  { value: "ongoing", label: "Ongoing" },
  { value: "upcoming", label: "Upcoming" },
];

const UpdateProjectForm = ({ initialData, onClose }) => {
  const [projectData, setProjectData] = useState({
    name: "",
    role: "",
    description: "",
    type: "",
    images: [], // New images to upload
  });
  const [imagePreviews, setImagePreviews] = useState([]);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (initialData) {
      setProjectData({
        name: initialData.name || "",
        role: initialData.role || "",
        description: initialData.description || "",
        type: initialData.type || "",
        images: [], // Keep empty to allow replacing images
      });
      setImagePreviews(
        initialData.images ? initialData.images.map((img) => img.url) : []
      );
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
    validateField(name, value);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 40) {
      setErrors({ ...errors, images: "Maximum 20 images allowed." });
      return;
    }

    const validFiles = files.filter((file) => {
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, images: "Each file must be less than 5MB." });
        return false;
      }
      if (!["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
        setErrors({
          ...errors,
          images: "Only JPG, JPEG, and PNG files are allowed.",
        });
        return false;
      }
      return true;
    });

    setProjectData({ ...projectData, images: validFiles });
    setImagePreviews(validFiles.map((file) => URL.createObjectURL(file)));
    setErrors({ ...errors, images: "" });
  };

  const handleRemoveImage = (index) => {
    const newImages = projectData.images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    setProjectData({ ...projectData, images: newImages });
    setImagePreviews(newPreviews);
  };

  const validateField = (field, value) => {
    let fieldErrors = { ...errors };
    if (!value && field !== "images") {
      fieldErrors[field] = `${
        field.charAt(0).toUpperCase() + field.slice(1)
      } is required.`;
    } else {
      fieldErrors[field] = "";
    }
    setErrors(fieldErrors);
  };

  const validateForm = () => {
    const finalErrors = {};
    let isValid = true;

    Object.keys(projectData).forEach((key) => {
      if (!projectData[key] && key !== "images") {
        finalErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
        isValid = false;
      }
    });

    setErrors(finalErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setServerError("");

    const formData = new FormData();
    formData.append("name", projectData.name);
    formData.append("role", projectData.role);
    formData.append("description", projectData.description);
    formData.append("type", projectData.type);
    // Only append new images if they exist
    if (projectData.images.length > 0) {
      projectData.images.forEach((image) => {
        formData.append("images", image);
      });
    }

    try {
      const res = await projectService.update(initialData._id, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      clearForm();
      setShowSuccessModal(true);
    } catch (err) {
      console.error("Error updating project:", err);
      setServerError(
        err.response?.data?.message ||
          "Failed to update project. Network error."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearForm = () => {
    setProjectData({
      name: "",
      role: "",
      description: "",
      type: "",
      images: [],
    });
    setImagePreviews([]);
    setErrors({});
  };

  if (showSuccessModal) {
    return (
      <SuccessModal
        isOpen={showSuccessModal}
        text="Your project has been updated successfully!"
        onClose={() => {
          setShowSuccessModal(false);
          onClose();
        }}
      />
    );
  }

  return (
    <div className="bg-light p-4 sm:p-8 rounded-xl shadow-lg border border-border h-[95vh] overflow-y-auto">
      <FormHeader
        title="Edit Project"
        description="Update your project's details."
      />
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
        encType="multipart/form-data"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="sm:col-span-2">
            <InputField
              label="Project Name"
              id="name"
              name="name"
              value={projectData.name}
              onChange={handleChange}
              placeholder="Enter project name"
              error={errors.name}
            />
          </div>
          <InputField
            label="Role"
            id="role"
            name="role"
            value={projectData.role}
            onChange={handleChange}
            placeholder="e.g., Residential Design"
            error={errors.role}
          />
          <SelectField
            label="Type"
            id="type"
            name="type"
            value={projectData.type}
            onChange={handleChange}
            options={types}
            error={errors.type}
          />
          <div className="sm:col-span-2">
            <InputField
              label="Description"
              id="description"
              name="description"
              type="textarea"
              rows="6"
              value={projectData.description}
              onChange={handleChange}
              placeholder="Describe the project..."
              error={errors.description}
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-body font-medium text-primary">
              Upload New Project Images (Max 20, 5MB each, JPG/PNG; replaces
              existing images)
            </label>
            <input
              type="file"
              multiple
              accept="image/jpeg,image/jpg,image/png"
              onChange={handleImageChange}
              className="w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-body file:bg-accent file:text-light hover:file:bg-opacity-80"
            />
            {imagePreviews.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-4">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="relative inline-block">
                    <img
                      src={preview}
                      alt={`Preview ${index}`}
                      className="w-40 h-40 object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-0 right-0 bg-red-500 text-light text-xs p-1 rounded-full transform translate-x-1/2 -translate-y-1/2"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
            {errors.images && (
              <span className="text-red-500 text-xs mt-2 block">
                {errors.images}
              </span>
            )}
          </div>
        </div>
        {serverError && (
          <p className="text-red-500 text-sm text-center">{serverError}</p>
        )}
        <SubmitButton
          isSubmitting={isSubmitting}
          errors={errors}
          onSubmit={handleSubmit}
          loadingText="Updating..."
          text="Update Project"
        />
      </form>
    </div>
  );
};

export default UpdateProjectForm;
