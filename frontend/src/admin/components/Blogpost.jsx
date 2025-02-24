import { useState } from "react";
import blogService from "../../services/blog-service";

const BlogForm = () => {
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
  const [showSuccessModal, setShowSuccessModal] = useState(false); // New state for modal

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
    formData.append("title", blogData.title);
    formData.append("description", blogData.description);
    formData.append("fullText", blogData.fullText);
    formData.append("author", blogData.author);
    formData.append("category", blogData.category);
    formData.append("image", blogData.image);

    try {
      await blogService.create(formData);
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
      setShowSuccessModal(true); // Show the modal instead of alert
    } catch (error) {
      setErrors({
        submit: error.response?.data?.message || "Failed to publish blog post.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false); // Close the modal
  };

  return (
    <section className="py-16 bg-secondary min-h-screen flex items-center justify-center">
      <div className="bg-light p-6 sm:p-8 mx-auto my-8 rounded-xl w-full max-w-3xl shadow-lg border border-border">
        <h2 className="mb-6 text-3xl font-heading font-extrabold text-primary text-center">
          Publish a New Blog Post
        </h2>
        <p className="text-primary font-body text-center mb-8">
          Share your insights and stories with the iCAPE community.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          encType="multipart/form-data"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Blog Title */}
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-body font-medium text-primary"
              >
                Blog Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Enter the blog title"
                value={blogData.title}
                onChange={handleChange}
              />
              {errors.title && (
                <span className="text-red-500 text-xs mt-1 block">
                  {errors.title}
                </span>
              )}
            </div>

            {/* Author Name */}
            <div>
              <label
                htmlFor="author"
                className="block mb-2 text-sm font-body font-medium text-primary"
              >
                Author Name
              </label>
              <input
                type="text"
                name="author"
                id="author"
                className="w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Enter author name"
                value={blogData.author}
                onChange={handleChange}
              />
              {errors.author && (
                <span className="text-red-500 text-xs mt-1 block">
                  {errors.author}
                </span>
              )}
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-body font-medium text-primary"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                className="w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="e.g., Architecture, Technology"
                value={blogData.category}
                onChange={handleChange}
              />
              {errors.category && (
                <span className="text-red-500 text-xs mt-1 block">
                  {errors.category}
                </span>
              )}
            </div>

            {/* Short Description */}
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-body font-medium text-primary"
              >
                Short Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="3"
                className="w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Provide a brief summary of the blog post..."
                value={blogData.description}
                onChange={handleChange}
              />
              {errors.description && (
                <span className="text-red-500 text-xs mt-1 block">
                  {errors.description}
                </span>
              )}
            </div>

            {/* Full Blog Content */}
            <div className="sm:col-span-2">
              <label
                htmlFor="fullText"
                className="block mb-2 text-sm font-body font-medium text-primary"
              >
                Full Blog Content
              </label>
              <textarea
                id="fullText"
                name="fullText"
                rows="6"
                className="w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Write the full blog content here..."
                value={blogData.fullText}
                onChange={handleChange}
              />
              {errors.fullText && (
                <span className="text-red-500 text-xs mt-1 block">
                  {errors.fullText}
                </span>
              )}
            </div>

            {/* Image Upload */}
            <div className="sm:col-span-2">
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-body font-medium text-primary"
              >
                Upload Blog Image (Max 5MB, JPG/PNG)
              </label>
              <input
                type="file"
                id="image"
                accept="image/jpeg,image/jpg,image/png"
                onChange={handleImageChange}
                className="w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-body file:bg-accent file:text-light hover:file:bg-opacity-80"
              />
              {imagePreview && (
                <div className="mt-4 relative inline-block">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-40 h-40 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-0 right-0 bg-red-500 text-light text-xs p-1 rounded-full transform translate-x-1/2 -translate-y-1/2"
                  >
                    ✕
                  </button>
                </div>
              )}
              {errors.image && (
                <span className="text-red-500 text-xs mt-2 block">
                  {errors.image}
                </span>
              )}
            </div>
          </div>

          {/* Submission Error */}
          {errors.submit && (
            <p className="text-red-500 text-sm text-center">{errors.submit}</p>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={
                isSubmitting || Object.values(errors).some((error) => error)
              }
              className={`w-full sm:w-auto px-6 py-3 border border-transparent text-base font-body font-medium rounded-md text-light bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-200 ${
                isSubmitting || Object.values(errors).some((error) => error)
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-opacity-80"
              }`}
            >
              {isSubmitting ? "Publishing..." : "Publish Blog"}
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-light p-6 rounded-xl shadow-lg max-w-sm w-full text-center">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Success!
            </h3>
            <p className="text-primary font-body mb-6">
              Your blog post has been published successfully!
            </p>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-accent text-light rounded-md font-body font-medium hover:bg-opacity-80 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogForm;
