// src/components/Blog/UpdateForm.js
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import blogService from "../../../services/blog-service";
import FormHeader from "./FormHeader";
import InputField from "./InputField";
import SelectField from "./SelectField";
import ImageUpload from "./ImageUpload";
import SubmitButton from "./SubmitButton";
import SuccessModal from "./SuccessModal";

const categories = [
  { value: "", label: "Select Category" },
  { value: "architectural design", label: "Architectural Design, Design Department" },
  { value: "urban design", label: "Urban Design And Planning" },
  { value: "engineering design", label: "Contract Administration and Engineering Design" },
];

const UpdateForm = ({ initialData, onClose }) => {
  const [blogData, setBlogData] = useState({
    title: initialData.title || "",
    subtitle: initialData.subtitle || "",
    description: initialData.description || "",
    content: initialData.content || "",
    author: initialData.author || "",
    category: initialData.category || "",
    date: initialData.date
      ? new Date(initialData.date).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0],
    tags: initialData.tags ? initialData.tags.join(", ") : "",
    excerpt: initialData.excerpt || "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(
    initialData.imageUrl || null
  );
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0); // Progress state
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (initialData) {
      setBlogData({
        title: initialData.title || "",
        subtitle: initialData.subtitle || "",
        description: initialData.description || "",
        content: initialData.content || "",
        author: initialData.author || "",
        category: initialData.category || "",
        date: initialData.date
          ? new Date(initialData.date).toISOString().split("T")[0]
          : new Date().toISOString().split("T")[0],
        tags: initialData.tags ? initialData.tags.join(", ") : "",
        excerpt: initialData.excerpt || "",
        image: null,
      });
      setImagePreview(initialData.imageUrl || null);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
    validateField(name, value);
  };

  const handleContentChange = (value) => {
    setBlogData({ ...blogData, content: value });
    validateField("content", value);
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
    if (
      !value &&
      field !== "image" &&
      field !== "subtitle" &&
      field !== "description" &&
      field !== "tags" &&
      field !== "excerpt"
    ) {
      fieldErrors[field] = `${
        field.charAt(0).toUpperCase() + field.slice(1)
      } is required.`;
    } else if (field === "title" && value.length > 100) {
      fieldErrors[field] = "Title must be under 100 characters.";
    } else {
      fieldErrors[field] = "";
    }
    setErrors(fieldErrors);
  };

  const validateForm = () => {
    const finalErrors = {};
    let isValid = true;

    ["title", "content", "author", "category"].forEach((key) => {
      if (!blogData[key]) {
        finalErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
        isValid = false;
      }
    });

    if (blogData.title.length > 100) {
      finalErrors.title = "Title must be under 100 characters.";
      isValid = false;
    }

    setErrors(finalErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setUploadProgress(0); // Start progress at 0

    const formData = new FormData();
    Object.entries(blogData).forEach(([key, value]) => {
      if (key === "tags" && value) {
        formData.append(key, value);
      } else if (value !== null) {
        formData.append(key, value);
      }
    });

    try {
      const res = await blogService.update(initialData._id, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      });
      // console.log("Server response:", res.data);
      setShowSuccessModal(true);
    } catch (err) {
      console.error("Error updating blog:", err);
      setErrors({ submit: "Failed to update blog. Please try again." });
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0); // Reset progress
    }
  };

  if (showSuccessModal) {
    return (
      <SuccessModal
        isOpen={showSuccessModal}
        text="Your blog has been updated successfully!"
        onClose={() => {
          setShowSuccessModal(false);
          onClose();
        }}
      />
    );
  }

  return (
    <div className="bg-white p-4 sm:p-8 rounded-xl shadow-lg border border-gray-200 h-[95vh] overflow-y-auto">
      <FormHeader
        title="Edit Blog Post"
        description="Update your insights and stories with the community."
      />
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="sm:col-span-2">
            <InputField
              label="Blog Title *"
              id="title"
              name="title"
              value={blogData.title}
              onChange={handleChange}
              placeholder="Enter the blog title"
              error={errors.title}
            />
          </div>
          <div className="sm:col-span-2">
            <InputField
              label="Subtitle"
              id="subtitle"
              name="subtitle"
              value={blogData.subtitle}
              onChange={handleChange}
              placeholder="Enter a subtitle (optional)"
              error={errors.subtitle}
            />
          </div>
          <InputField
            label="Author Name *"
            id="author"
            name="author"
            value={blogData.author}
            onChange={handleChange}
            placeholder="Enter author name"
            error={errors.author}
          />
          <SelectField
            label="Category *"
            id="category"
            name="category"
            value={blogData.category}
            options={categories}
            onChange={handleChange}
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
              placeholder="Provide a brief summary (optional)"
              error={errors.description}
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-body font-medium text-gray-700">
              Content *
            </label>
            <ReactQuill
              value={blogData.content}
              onChange={handleContentChange}
              className="bg-white border border-gray-300 rounded-lg"
              placeholder="Write your blog content here..."
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, false] }],
                  ["bold", "italic", "underline", "strike"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["link", "image"],
                  ["clean"],
                ],
              }}
            />
            {errors.content && (
              <span className="text-red-500 text-xs mt-1 block">
                {errors.content}
              </span>
            )}
          </div>
          <div className="sm:col-span-2">
            <InputField
              label="Tags (comma-separated)"
              id="tags"
              name="tags"
              value={blogData.tags}
              onChange={handleChange}
              placeholder="e.g., tech, programming, news"
              error={errors.tags}
            />
          </div>
          <div className="sm:col-span-2">
            <InputField
              label="Excerpt"
              id="excerpt"
              name="excerpt"
              type="textarea"
              rows="3"
              value={blogData.excerpt}
              onChange={handleChange}
              placeholder="A short summary (optional)"
              error={errors.excerpt}
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
          {isSubmitting && (
            <div className="sm:col-span-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-accent h-2.5 rounded-full"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="text-gray-700 text-sm mt-2 text-center">
                Updating: {uploadProgress}%
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
          loadingText="Updating..."
          text="Update Blog"
        />
      </form>
    </div>
  );
};

export default UpdateForm;
