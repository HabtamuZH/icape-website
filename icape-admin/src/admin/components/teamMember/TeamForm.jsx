import React from "react";
import FormHeader from "../blogs/FormHeader";
import InputField from "../blogs/InputField";
import SelectField from "../blogs/SelectField";
import ImageUpload from "../blogs/ImageUpload";
import SubmitButton from "../blogs/SubmitButton";

const socialPlatforms = [
  { value: "", label: "Select Platform" },
  { value: "LinkedIn", label: "LinkedIn" },
  { value: "Twitter", label: "Twitter" },
  { value: "GitHub", label: "GitHub" },
  { value: "Instagram", label: "Instagram" },
  { value: "Facebook", label: "Facebook" },
];

const TeamForm = ({
  formData,
  setFormData,
  errors,
  isSubmitting,
  onSubmit,
  editId,
  handleInputChange,
  handleSocialLinkChange,
  addSocialLink,
  removeSocialLink,
  handleImageChange,
  handleRemoveImage,
  imagePreview,
}) => (
  <div className="bg-light p-4 sm:p-8 rounded-xl w-full shadow-lg border border-border h-[95vh] overflow-y-auto">
    <FormHeader
      title={editId ? "Edit Team Member" : "Add New Team Member"}
      description="Manage your team's details."
    />
    <form
      onSubmit={onSubmit}
      className="space-y-6"
      encType="multipart/form-data"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="sm:col-span-2">
          <ImageUpload
            image={formData.image}
            onImageChange={handleImageChange}
            imagePreview={imagePreview}
            onRemoveImage={handleRemoveImage}
            error={errors.image}
          />
        </div>
        <InputField
          label="Name"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter team member name"
          error={errors.name}
        />
        <InputField
          label="Title"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter job title"
          error={errors.title}
        />
        <div className="sm:col-span-2">
          <InputField
            label="Description"
            id="desc"
            name="desc"
            type="textarea"
            rows="3"
            value={formData.desc}
            onChange={handleInputChange}
            placeholder="Enter a brief description..."
            error={errors.desc}
          />
        </div>
        <div className="sm:col-span-2 space-y-2">
          {formData.socialLinks.map((link, index) => (
            <div key={index} className="md:grid md:grid-cols-3 md:gap-6  items-center">
              <SelectField
                label={`Social Platform ${index + 1}`}
                id={`socialLinks_${index}_platform`}
                name="platform"
                value={link.platform}
                options={socialPlatforms}
                onChange={(e) =>
                  handleSocialLinkChange(index, "platform", e.target.value)
                }
                error={errors[`socialLinks_${index}_platform`]}
              />
              <InputField
                label={`URL ${index + 1}`}
                id={`socialLinks_${index}_url`}
                name="url"
                value={link.url}
                onChange={(e) =>
                  handleSocialLinkChange(index, "url", e.target.value)
                }
                placeholder="Enter social URL"
                error={errors[`socialLinks_${index}_url`]}
              />
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeSocialLink(index)}
                  className="px-2 py-1 mt-8 bg-red-500 text-light rounded hover:bg-red-600 transition-colors font-body"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addSocialLink}
            className="px-4 py-2 bg-accent text-light rounded-md hover:bg-primary transition-colors font-body"
          >
            Add Social Link
          </button>
        </div>
      </div>
      {errors.submit && (
        <p className="text-red-500 text-sm text-center">{errors.submit}</p>
      )}
      <SubmitButton
        isSubmitting={isSubmitting}
        errors={errors}
        onSubmit={onSubmit}
        loadingText={editId ? "Updating..." : "Adding..."}
        text={editId ? "Update Team Member" : "Add Team Member"}
      />
    </form>
  </div>
);

export default TeamForm;
