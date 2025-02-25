import { useState } from "react";
import FormHeader from "../blogs/FormHeader"; // Reused from Blog
import InputField from "../blogs/InputField"; // Reused from Blog
import SelectField from "../blogs/SelectField"; // Reused from Blog
import ImageUpload from "../blogs/ImageUpload"; // Reused from Blog
import SubmitButton from "../blogs/SubmitButton"; // Reused from Blog
import SuccessModal from "../blogs/SuccessModal"; // Reused from Blog
import projectService from "../../../services/project-service";

const types = [
  { value: "", label: "Select Type" },
  { value: "completed", label: "Completed" },
  { value: "ongoing", label: "Ongoing" },
  { value: "upcoming", label: "Upcoming" },
];

const PostProjectForm = ({ onClose }) => {
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
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
        isValid = false;
      }
    });

    if (!projectData.imageUrl) {
      finalErrors.imageUrl = "Image is required.";
      isValid = false;
    }

    setErrors(finalErrors);
    return isValid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    setIsSubmitting(true);
    const formData = new FormData();
    Object.entries(projectData).forEach(([key, value]) => {
      formData.append(key, value);
    });
  
    console.log("Sending FormData:", Object.fromEntries(formData)); // Log before sending
  
    try {
      const res = await projectService.create(formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Server response:", res.data); // Log success response
      setShowSuccessModal(true);
      clearForm();
    } catch (err) {
      console.error("Error submitting project:", err.response || err);
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
        text="Your project has been published successfully!"
        onClose={() => {
          setShowSuccessModal(false);
          onClose();
        }}
      />
    );
  }

  return (
    <section className="flex items-center justify-center">
      <div className="bg-light p-4 sm:p-8 rounded-xl w-full shadow-lg border border-border h-[95vh] overflow-y-auto">
        <FormHeader
          title="Publish a New Project"
          description="Showcase your latest architectural achievements."
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
          <SubmitButton
            isSubmitting={isSubmitting}
            errors={errors}
            onSubmit={handleSubmit}
            loadingText="Publishing..."
            text="Publish Project"
          />
        </form>
      </div>
    </section>
  );
};

export default PostProjectForm;