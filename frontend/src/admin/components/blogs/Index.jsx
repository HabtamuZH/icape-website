import React, { useState, useEffect } from "react";
import blogService from "../../../services/blog-service";
import BlogCard from "./BlogCard";
import BlogSearch from "./Search";
import BlogFilter from "./Filter";
import PostNewBlogButton from "./PostNewBlogButton";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import UpdateForm from "./UpdateForm";
import PostForm from "./PostForm";
import BlogFormModal from "./BlogFormModal";

const BlogDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, [reload]);

  const handleReload = () => {
    setReload(!reload);
  };

  const fetchBlogs = async () => {
    setLoading(true);
    blogService
      .getAll()
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  };

  const handleDeleteBlog = async (id) => {
    try {
      await blogService.delete(id);
      setBlogs((prev) => prev.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleAddNewBlog = () => {
    setSelectedBlog(null); // Clear selected blog for new entry
    setIsModalOpen(true);
  };

  const handleUpdateBlog = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
    fetchBlogs(); // Refresh blogs after add/edit
  };

  // Filter and search logic
  const filteredBlogs = blogs.filter((blog) => {
    const searchLower = searchQuery?.toLowerCase();
    const matchesSearch =
      blog.title.toLowerCase().includes(searchLower) ||
      blog.description.toLowerCase().includes(searchLower) ||
      blog.author.toLowerCase().includes(searchLower) ||
      blog.fullText.toLowerCase().includes(searchLower);

    const matchesCategory = categoryFilter
      ? blog.category.toLowerCase() === categoryFilter.toLowerCase()
      : true;

    return matchesSearch && matchesCategory;
  });

  if (loading) return <LoadingSpinner />;

  return (
    <section className="py-16 bg-secondary min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-primary mb-8 sm:mb-12 text-center">
          Blog Dashboard
        </h1>
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <BlogSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <BlogFilter
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog._id}
              blog={blog}
              onUpdate={handleUpdateBlog}
              onDelete={handleDeleteBlog}
            />
          ))}
        </div>
        <div className="fixed bottom-8 right-8">
          <PostNewBlogButton onClick={handleAddNewBlog} />
        </div>
      </div>
      {isModalOpen && (
        <BlogFormModal onClose={handleCloseModal}>
          {selectedBlog ? (
            <UpdateForm
              initialData={selectedBlog}
              onClose={() => {setIsModalOpen(false); handleReload();}}
            />
          ) : (
            <PostForm
              onClose={() => {
                setIsModalOpen(false);
                handleReload();
              }}
            />
          )}
        </BlogFormModal>
      )}
    </section>
  );
};

export default BlogDashboard;
