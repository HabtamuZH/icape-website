// src/components/Blog/BlogDashboard.js
import React, { useState, useEffect } from "react";
import blogService from "../../../services/blog-service";
import BlogCard from "./BlogCard";
import BlogSearch from "./Search";
import BlogFilter from "./Filter";
import PostNewBlogButton from "./PostNewBlogButton";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import BlogFormModal from "./BlogFormModal";
import ConfirmDeleteBlogModal from "./ConfirmDeleteBlogModal";
import PostForm from "./PostForm";
import UpdateForm from "./UpdateForm";
import SuccessModal from "./SuccessModal";

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
  const [isDeleteSuccessModalOpen, setIsDeleteSuccessModalOpen] =
    useState(false);

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
      setBlogs((prev) => prev.filter((blog) => blog.id !== deleteId));
      setIsDeleteModalOpen(false);
      setIsDeleteSuccessModalOpen(true);
    } catch (error) {
      console.error("Error deleting blog:", error);
    } finally {
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
      blog.title?.toLowerCase().includes(searchLower) ||
      "" ||
      blog.description?.toLowerCase().includes(searchLower) ||
      "" ||
      blog.author?.toLowerCase().includes(searchLower) ||
      "" ||
      blog.content?.toLowerCase().includes(searchLower) ||
      "";

    const matchesCategory = categoryFilter
      ? blog.category.toLowerCase() === categoryFilter.toLowerCase()
      : true;

    return matchesSearch && matchesCategory;
  });

  if (loading) return <LoadingSpinner />;

  return (
    <section className="py-16 bg-gray-100 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-gray-800 mb-8 sm:mb-12 text-center">
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
                key={blog.id}
                blog={blog}
                onUpdate={handleUpdateBlog}
                onDelete={handleDeleteBlog}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-700 font-body text-lg">
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
            <UpdateForm initialData={selectedBlog} onClose={handleCloseModal} />
          ) : (
            <PostForm onClose={handleCloseModal} />
          )}
        </BlogFormModal>
      )}
      <ConfirmDeleteBlogModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDeleteBlog}
        blogTitle={deleteTitle}
      />
      <SuccessModal
        isOpen={isDeleteSuccessModalOpen}
        text={`Blog has been deleted successfully!`}
        onClose={() => setIsDeleteSuccessModalOpen(false)}
      />
    </section>
  );
};

export default BlogDashboard;
