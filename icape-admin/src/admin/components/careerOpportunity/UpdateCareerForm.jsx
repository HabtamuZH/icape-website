// src/components/UpdateCareerForm.jsx
import React, { useState, useEffect } from "react";
import careerService from "../../../services/careers-service";
import FormHeader from "../blogs/FormHeader";
import InputField from "../blogs/InputField";
import SelectField from "../blogs/SelectField";
import SubmitButton from "../blogs/SubmitButton";
import SuccessModal from "../blogs/SuccessModal";

const types = [
  { value: "", label: "Select Type" },
  {
    value: "Full-time & Part-time Positions",
    label: "Full-time & Part-time Positions",
  },
  {
    value: "Paid Internship (Summer/Fall 2025)",
    label: "Paid Internship (Summer/Fall 2025)",
  },
  { value: "Contract", label: "Contract" },
];

const UpdateCareerForm = ({ initialData, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    details: [""],
    buttonText: "",
    buttonLink: "",
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0); // Progress state
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        description: initialData.description || "",
        type: initialData.type || "",
        details: initialData.details.length > 0 ? initialData.details : [""],
        buttonText: initialData.buttonText || "",
        buttonLink: initialData.buttonLink || "",
      });
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleDetailChange = (index, value) => {
    const newDetails = [...formData.details];
    newDetails[index] = value;
    setFormData((prev) => ({ ...prev, details: newDetails }));
    validateField(`details[${index}]`, value);
  };

  const addDetailField = () => {
    setFormData((prev) => ({ ...prev, details: [...prev.details, ""] }));
  };

  const removeDetailField = (index) => {
    const newDetails = formData.details.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, details: newDetails }));
  };

  const validateField = (field, value) => {
    let fieldErrors = { ...errors };
    if (!value && field !== "buttonLink") {
      fieldErrors[field] = `${
        field.split("[")[0].charAt(0).toUpperCase() +
        field.split("[")[0].slice(1)
      } is required.`;
    } else {
      fieldErrors[field] = "";
    }
    setErrors(fieldErrors);
  };

  const validateForm = () => {
    const finalErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "buttonLink" && key !== "details") {
        finalErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
        isValid = false;
      }
    });

    formData.details.forEach((detail, index) => {
      if (!detail) {
        finalErrors[`details[${index}]`] = "Detail is required.";
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
    setUploadProgress(0); // Start progress at 0

    const updateData = {
      title: formData.title,
      description: formData.description,
      type: formData.type,
      details: formData.details,
      buttonText: formData.buttonText,
      buttonLink: formData.buttonLink || "",
    };

    try {
      const res = await careerService.update(initialData._id, updateData, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      });
      // console.log("Server response:", res.data);
      clearForm();
      setShowSuccessModal(true);
    } catch (err) {
      console.error("Error updating career:", err);
      setServerError(
        err.response?.data?.message || "Failed to update career opportunity."
      );
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0); // Reset progress
    }
  };

  const clearForm = () => {
    setFormData({
      title: "",
      description: "",
      type: "",
      details: [""],
      buttonText: "",
      buttonLink: "",
    });
    setErrors({});
    setShowSuccessModal(true);
  };

  return (
    <div className="bg-light p-4 sm:p-8 rounded-xl shadow-lg border border-border h-[95vh] overflow-y-auto">
      <FormHeader
        title="Update Career Opportunity"
        description="Modify the details below to update this job or internship posting."
      />
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="sm:col-span-2">
            <InputField
              label="Opportunity Title"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., Professional Career Opportunities"
              error={errors.title}
            />
          </div>
          <div className="sm:col-span-2">
            <InputField
              label="Description"
              id="description"
              name="description"
              type="textarea"
              rows="6"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Provide a detailed description of the opportunity..."
              error={errors.description}
            />
          </div>
          <SelectField
            label="Opportunity Type"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            options={types}
            error={errors.type}
          />
          <div className="sm:col-span-2">
            <label className="block text-primary font-body font-medium mb-2">
              Key Details / Benefits
            </label>
            {formData.details.map((detail, index) => (
              <div key={index} className="flex items-center mb-3">
                <InputField
                  id={`detail-${index}`}
                  name={`details[${index}]`}
                  value={detail}
                  onChange={(e) => handleDetailChange(index, e.target.value)}
                  placeholder="e.g., Competitive compensation packages"
                  error={errors[`details[${index}]`]}
                />
                {formData.details.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeDetailField(index)}
                    className="ml-2 px-3 py-1 bg-dark text-light rounded-md font-body hover:bg-opacity-80"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addDetailField}
              className="mt-2 inline-flex items-center px-4 py-2 text-sm font-body text-accent border border-accent rounded-md hover:bg-accent hover:text-light transition-colors duration-200"
            >
              Add Detail
            </button>
          </div>
          <InputField
            label="Button Text"
            id="buttonText"
            name="buttonText"
            value={formData.buttonText}
            onChange={handleInputChange}
            placeholder="e.g., Apply Now"
            error={errors.buttonText}
          />
          <InputField
            label="Button Link"
            id="buttonLink"
            name="buttonLink"
            value={formData.buttonLink}
            onChange={handleInputChange}
            placeholder="e.g., /careers/professional"
            error={errors.buttonLink}
          />
          {isSubmitting && (
            <div className="sm:col-span-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-accent h-2.5 rounded-full"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="text-primary text-sm mt-2 text-center">
                Updating: {uploadProgress}%
              </p>
            </div>
          )}
        </div>
        {serverError && (
          <p className="text-red-500 text-sm text-center">{serverError}</p>
        )}
        <SubmitButton
          isSubmitting={isSubmitting}
          errors={errors}
          onSubmit={handleSubmit}
          loadingText="Updating..."
          text="Update Opportunity"
        />
      </form>
      {showSuccessModal && (
        <SuccessModal
          isOpen={showSuccessModal}
          text="Your career opportunity has been updated successfully!"
          onClose={() => {
            setShowSuccessModal(false);
            onClose();
          }}
        />
      )}
    </div>
  );
};

export default UpdateCareerForm;
