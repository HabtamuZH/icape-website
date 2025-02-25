import { useState, useEffect } from "react";
import projectService from "../../../services/project-service";
import FormHeader from "../blogs/FormHeader";
import InputField from "../blogs/InputField";
import SelectField from "../blogs/SelectField";
import ImageUpload from "../blogs/ImageUpload";
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
    imageUrl: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    if (initialData) {
      console.log("Initial project data:", initialData); // Debug initial data
      setProjectData({
        name: initialData.name || "",
        role: initialData.role || "",
        description: initialData.description || "",
        type: initialData.type || "",
        imageUrl: null,
      });
      setImagePreview(initialData.imageUrl || null);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
    validateField(name, value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, imageUrl: "File size must be less than 5MB." });
        return;
      }
      if (!["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
        setErrors({
          ...errors,
          imageUrl: "Only JPG, JPEG, and PNG files are allowed.",
        });
        return;
      }
      setProjectData({ ...projectData, imageUrl: file });
      setImagePreview(URL.createObjectURL(file));
      setErrors({ ...errors, imageUrl: "" });
    }
  };

  const handleRemoveImage = () => {
    setProjectData({ ...projectData, imageUrl: null });
    setImagePreview(null);
    setErrors({ ...errors, imageUrl: "" });
  };

  const validateField = (field, value) => {
    let fieldErrors = { ...errors };
    if (!value && field !== "imageUrl") {
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
      if (!projectData[key] && key !== "imageUrl") {
        finalErrors[key] = `${
          key.charAt(0).toUpperCase() + field.slice(1)
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
    if (projectData.imageUrl) {
      formData.append("imageUrl", projectData.imageUrl);
    }

    console.log("Updating project with FormData:", Object.fromEntries(formData));
    console.log("Request URL:", `/api/projects/${initialData._id}`); // Log full URL

    try {
      const res = await projectService.update(initialData._id, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Update response:", res.data);
      clearForm();
      setShowSuccessModal(true);
    } catch (err) {
      console.error("Error updating project:", err);
      setServerError(
        err.response?.data?.message || "Failed to update project. Network error."
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
      imageUrl: null,
    });
    setImagePreview(null);
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
            <ImageUpload
              image={projectData.imageUrl}
              onImageChange={handleImageChange}
              imagePreview={imagePreview}
              onRemoveImage={handleRemoveImage}
              error={errors.imageUrl}
            />
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