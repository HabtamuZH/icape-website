import { useState } from "react";

const BlogForm = ({ onSubmit }) => {
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    date: "",
    author: "",
    category: "",
    fullText: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
    validateField(name, value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrors({ ...errors, image: "File size must be less than 5MB." });
        return;
      }
      if (!file.type.startsWith("image/")) {
        setErrors({ ...errors, image: "Only image files are allowed." });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const finalErrors = {};
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

    if (isValid) {
      onSubmit(blogData);
    } else {
      setErrors(finalErrors);
    }
  };

  return (
    <section className="bg-white min-h-screen flex items-center justify-center">
      <div className="py-8 px-6 mx-auto max-w-6xl w-full lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          Publish Your Blog
        </h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Blog Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Type blog title"
                value={blogData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="author"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Author Name
              </label>
              <input
                type="text"
                name="author"
                id="author"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Author name"
                value={blogData.author}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Category"
                value={blogData.category}
                onChange={handleChange}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Short Description
              </label>
              <textarea
                id="description"
                rows="2"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Short description"
                value={blogData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="fullText"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Full Blog Content
              </label>
              <textarea
                id="fullText"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Full blog content"
                value={blogData.fullText}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                required
              />
              {/* {imagePreview && (
                <div className="mt-4 relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-36 h-36 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-0 right-0 bg-red-500 text-white text-xs p-1 rounded-full"
                  >
                    X
                  </button>
                </div>
              )} */}
              {errors.image && (
                <span className="text-red-500 text-xs mt-2 block">
                  {errors.image}
                </span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Publish Blog
          </button>
        </form>
      </div>
    </section>
  );
};

export default BlogForm;
