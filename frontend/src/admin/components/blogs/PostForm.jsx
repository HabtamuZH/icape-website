import { useState } from "react";
import blogService from "../../../services/blog-service";
import FormHeader from "./FormHeader";
import InputField from "./InputField";
import SelectField from "./SelectField"; // New import
import ImageUpload from "./ImageUpload";
import SubmitButton from "./SubmitButton";
import SuccessModal from "./SuccessModal";

const categories = [
  { value: "", label: "Select Category" },
  { value: "arch", label: "Architecture" },
  { value: "tech", label: "Technology" },
  { value: "dev", label: "Development" },
];

const PostForm = ({ onClose }) => {
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    author: "",
    category: "",
    fullText: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
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
      setBlogData({ ...blogData, image: file });
      setImagePreview(URL.createObjectURL(file));
      setErrors({ ...errors, image: "" });
    }
  };

  const handleRemoveImage = () => {
    setBlogData({ ...blogData, image: null });
    setImagePreview(null);
    setErrors({ ...errors, image: "" });
  };

  const validateField = (field, value) => {
    let fieldErrors = { ...errors };
    if (!value && field !== "image") {
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

    Object.keys(blogData).forEach((key) => {
      if (!blogData[key] && key !== "image") {
        finalErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
        isValid = false;
      }
    });

    if (!blogData.image) {
      finalErrors.image = "Image is required.";
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
    Object.entries(blogData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    blogService
      .create(formData, { headers: { "Content-Type": "multipart/form-data" } })
      .then((res) => setShowSuccessModal(true))
      .then(() => clearForm())
      .catch((err) => console.log(err.message))
      .finally(() => setIsSubmitting(false));
  };

  const clearForm = () => {
    setBlogData({
      title: "",
      description: "",
      author: "",
      category: "",
      fullText: "",
      image: null,
    });
    setImagePreview(null);
    setErrors({});
    setShowSuccessModal(true);
  };

  if (showSuccessModal)
    return (
      <SuccessModal
        isOpen={showSuccessModal}
        text={"Your blog post has been published successfully!"}
        onClose={() => {
          setShowSuccessModal(false);
          onClose();
        }}
      />
    );

  return (
    <section className="flex items-center justify-center">
      <div className="bg-light p-4 sm:p-8 rounded-xl w-full shadow-lg border border-border h-[95vh] overflow-y-auto">
        <FormHeader
          title="Publish a New Blog Post"
          description="Share your insights and stories with the iCAPE community."
        />
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          encType="multipart/form-data"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="sm:col-span-2">
              <InputField
                label="Blog Title"
                id="title"
                name="title"
                value={blogData.title}
                onChange={handleChange}
                placeholder="Enter the blog title"
                error={errors.title}
              />
            </div>
            <InputField
              label="Author Name"
              id="author"
              name="author"
              value={blogData.author}
              onChange={handleChange}
              placeholder="Enter author name"
              error={errors.author}
            />
            <SelectField
              label="Category"
              id="category"
              name="category"
              value={blogData.category}
              onChange={handleChange}
              options={categories}
              error={errors.category}
            />
            <div className="sm:col-span-2">
              <InputField
                label="Short Description"
                id="description"
                name="description"
                type="textarea"
                rows="3"
                value={blogData.description}
                onChange={handleChange}
                placeholder="Provide a brief summary of the blog post..."
                error={errors.description}
              />
            </div>
            <div className="sm:col-span-2">
              <InputField
                label="Full Blog Content"
                id="fullText"
                name="fullText"
                type="textarea"
                rows="6"
                value={blogData.fullText}
                onChange={handleChange}
                placeholder="Write the full blog content here..."
                error={errors.fullText}
              />
            </div>
            <div className="sm:col-span-2">
              <ImageUpload
                image={blogData.image}
                onImageChange={handleImageChange}
                imagePreview={imagePreview}
                onRemoveImage={handleRemoveImage}
                error={errors.image}
              />
            </div>
          </div>

          {errors.submit && (
            <p className="text-red-500 text-sm text-center">{errors.submit}</p>
          )}

          <SubmitButton
            isSubmitting={isSubmitting}
            errors={errors}
            onSubmit={handleSubmit}
            loadingText="Publishing..."
            text="Publish Blog"
          />
        </form>
      </div>
    </section>
  );
};

export default PostForm;
