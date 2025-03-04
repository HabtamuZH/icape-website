// src/components/PostCareerForm.jsx
import React, { useState } from "react";
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

const buttonLinks = [
  { value: "", label: "Select Link" },
  { value: "career/career-form", label: "Career Application Form" },
  { value: "career/intern-form", label: "Internship Application Form" },
];

const PostCareerForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    details: [""],
    buttonText: "",
    buttonLink: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0); // Progress state
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
      if (key !== "details" && key !== "buttonLink" && !formData[key]) {
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
    setUploadProgress(0); // Start progress at 0

    try {
      const res = await careerService.create(formData, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      });
      // console.log("Server response:", res.data);
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
    } catch (error) {
      console.error("Error submitting career:", error);
      setErrors({
        submit:
          error.response?.data?.message || "Failed to post career opportunity.",
      });
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0); // Reset progress
    }
  };

  return (
    <div className="bg-light p-4 sm:p-8 rounded-xl w-full shadow-lg border border-border h-[95vh] overflow-y-auto">
      <FormHeader
        title="Post New Career Opportunity"
        description="Fill out the details below to create a new job or internship posting for iCAPE."
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
          <SelectField
            label="Button Link"
            id="buttonLink"
            name="buttonLink"
            value={formData.buttonLink}
            onChange={handleInputChange}
            options={buttonLinks}
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
                Submitting: {uploadProgress}%
              </p>
            </div>
          )}
        </div>
        {errors.submit && (
          <p className="text-red-500 text-sm text-center">{errors.submit}</p>
        )}
        <SubmitButton
          isSubmitting={isSubmitting}
          errors={errors}
          onSubmit={handleSubmit}
          loadingText="Posting..."
          text="Post Opportunity"
        />
      </form>
      <SuccessModal
        isOpen={showSuccessModal}
        text="Your career opportunity has been posted successfully!"
        onClose={() => {
          setShowSuccessModal(false);
          onClose();
        }}
      />
    </div>
  );
};

export default PostCareerForm;
