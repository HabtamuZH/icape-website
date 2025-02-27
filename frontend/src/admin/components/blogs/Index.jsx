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
import ConfirmDeleteBlogModal from "./ConfirmDeleteBlogModal"; // New import

const BlogDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteTitle, setDeleteTitle] = useState("");
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

  const handleDeleteBlog = (id, title) => {
    setDeleteId(id);
    setDeleteTitle(title);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteBlog = async () => {
    try {
      await blogService.delete(deleteId);
      setBlogs((prev) => prev.filter((blog) => blog._id !== deleteId));
    } catch (error) {
      console.error("Error deleting blog:", error);
    } finally {
      setIsDeleteModalOpen(false);
      setDeleteId(null);
      setDeleteTitle("");
    }
  };

  const handleAddNewBlog = () => {
    setSelectedBlog(null);
    setIsModalOpen(true);
  };

  const handleUpdateBlog = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
    fetchBlogs();
  };

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
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <BlogCard
                key={blog._id}
                blog={blog}
                onUpdate={handleUpdateBlog}
                onDelete={handleDeleteBlog} // Pass id and title
              />
            ))
          ) : (
            <p className="col-span-full text-center text-primary font-body text-lg">
              No Blogs found.
            </p>
          )}
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
              onClose={() => {
                setIsModalOpen(false);
                handleReload();
              }}
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
      <ConfirmDeleteBlogModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDeleteBlog}
        blogTitle={deleteTitle}
      />
    </section>
  );
};

export default BlogDashboard;
