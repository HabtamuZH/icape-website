import { useState, useEffect, useRef, useCallback } from "react";
import ScrollReveal from "scrollreveal";
import { Bookmark, Calendar, User } from "lucide-react";
import blogService from "../../services/blog-service";
import LoadingSpinner from "../common/LoadingSpinner";

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const modalRef = useRef();
  const blogSectionRef = useRef(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await blogService.getAll();
        console.log("API Response:", res.data);
        setBlogs(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError(err.message || "Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Memoize filtered blogs
  const filteredBlogs = useCallback(() => {
    return blogs.filter((blog) => {
      const matchesSearch = blog.title
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        categoryFilter === "All" || blog.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, categoryFilter, blogs]);

  // ScrollReveal setup
  useEffect(() => {
    const sr = ScrollReveal({
      reset: false,
      distance: "30px",
      duration: 800,
      easing: "ease-out",
    });

    if (blogSectionRef.current) {
      sr.reveal(blogSectionRef.current, { origin: "bottom", delay: 300 });
      sr.reveal(".blog-card", { origin: "bottom", interval: 200, delay: 200 });
    }

    return () => sr.destroy();
  }, []);

  // Modal handlers
  const handleOutsideClick = useCallback((event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isModalOpen, handleOutsideClick]);

  const openModal = useCallback((blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  }, []);

  const categories = [
    "All",
    ...new Set(blogs.map((blog) => blog.category).filter(Boolean)),
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="text-center text-red-500 py-12">Error: {error}</p>;
  }
  if (!blogs.length) {
    return <p className="text-center text-primary py-12 font-body">No blogs available</p>;
  }

  return (
    <div className="min-h-screen bg-secondary py-8 sm:py-12 md:py-16 pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 md:px-8">
      <div ref={blogSectionRef} className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center text-primary mb-6 sm:mb-8">
          Our Latest Blogs
        </h2>

        {/* Search and Filter Options */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between items-center bg-light p-4 rounded-lg border border-border">
          <input
            type="text"
            placeholder="Search blog title..."
            className="w-full sm:w-2/3 md:w-1/2 p-2 rounded-md bg-secondary text-primary font-body text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="w-full sm:w-1/3 md:w-1/4 p-2 rounded-md bg-secondary text-primary font-body text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredBlogs().map((blog, index) => (
            <div
              key={index}
              className="blog-card bg-light p-4 sm:p-6 rounded-lg border border-border transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
              onClick={() => openModal(blog)}
            >
              <img
                src={blog.imageUrl || "https://via.placeholder.com/150"}
                alt={blog.title || "Blog Image"}
                loading="lazy"
                className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-heading text-primary mb-2 sm:mb-3 hover:text-accent line-clamp-2">
                {blog.title || "Untitled Blog"}
              </h3>
              <p className="text-primary font-body mb-3 sm:mb-4 text-sm sm:text-base line-clamp-3">
                {blog.description || "No description available"}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-primary text-xs sm:text-sm font-body gap-2 sm:gap-0">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  <span className="line-clamp-1">{blog.author || "Unknown Author"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  <span>{blog.date || "No date"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bookmark className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  <span className="line-clamp-1">{blog.category || "Uncategorized"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedBlog && (
        <div className="fixed inset-0 bg-dark bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div
            ref={modalRef}
            className="bg-light p-4 sm:p-6 rounded-lg shadow-xl w-full max-w-lg sm:max-w-2xl md:max-w-3xl max-h-[90vh] flex flex-col relative"
          >
            <div className="overflow-y-auto flex-grow">
              <div className="flex-shrink-0">
                <img
                  src={selectedBlog.imageUrl || "https://via.placeholder.com/150"}
                  alt={selectedBlog.title || "Blog Image"}
                  loading="lazy"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-md mb-4"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading text-primary mb-3 sm:mb-4">
                {selectedBlog.title || "Untitled Blog"}
              </h3>
              <div className="font-body text-primary text-sm sm:text-base">
                <p>
                  {selectedBlog.fullText ||
                    selectedBlog.description ||
                    "No content available"}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-primary text-xs sm:text-sm font-body mt-4 gap-2 sm:gap-0">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span>{selectedBlog.author || "Unknown Author"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span>{selectedBlog.date || "No date"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bookmark className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span>{selectedBlog.category || "Uncategorized"}</span>
              </div>
            </div>
            <button
              className="absolute top-2 right-2 text-primary text-xl sm:text-2xl font-bold hover:text-accent"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;