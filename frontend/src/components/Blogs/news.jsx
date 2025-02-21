import { useState, useEffect, useRef, useCallback } from "react";
import ScrollReveal from "scrollreveal";
import { Bookmark, Calendar, User } from "lucide-react";
import blogs from "../../data/blogdata";

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const modalRef = useRef();
  const blogSectionRef = useRef(null);

  // Memoize filtered blogs to prevent unnecessary recalculations
  const filteredBlogs = useCallback(() => {
    return blogs.filter((blog) => {
      return (
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (categoryFilter === "All" || blog.category === categoryFilter)
      );
    });
  }, [searchQuery, categoryFilter]);

  // Single ScrollReveal instance
  useEffect(() => {
    const sr = ScrollReveal({
      reset: false, // Prevents re-animation on scroll
      distance: "30px",
      duration: 800,
      easing: "ease-out",
    });

    sr.reveal(blogSectionRef.current, { origin: "bottom", delay: 300 });
    sr.reveal(".blog-card", { 
      origin: "bottom", 
      interval: 200,
      delay: 200,
    });

    return () => sr.destroy(); // Cleanup
  }, []);

  // Modal click handler with useCallback
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

  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  return (
    <div className="min-h-screen bg-secondary py-12 pt-32 px-6">
      <div ref={blogSectionRef} className="max-w-7xl mx-auto flex flex-col gap-8">
        <h2 className="text-5xl font-heading font-bold text-center text-primary">
          Latest Architectural Projects
        </h2>

        {/* Search and Filter Options */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-light p-4 rounded-lg border border-border">
          <input
            type="text"
            placeholder="Search blog title..."
            className="w-full md:w-1/2 p-2 rounded-md bg-secondary text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="w-full md:w-1/4 mt-3 md:mt-0 p-2 rounded-md bg-secondary text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredBlogs().map((blog, index) => (
            <div
              key={index}
              className="blog-card bg-light p-6 rounded-lg border border-border transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
              onClick={() => openModal(blog)}
            >
              <img
                src={blog.imageUrl}
                alt={blog.title}
                loading="lazy" // Lazy loading images
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-heading text-primary mb-3 hover:text-accent">
                {blog.title}
              </h3>
              <p className="text-primary font-body mb-4 line-clamp-3">
                {blog.description}
              </p>
              <div className="flex items-center justify-between text-primary text-sm font-body">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-accent" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bookmark className="w-5 h-5 text-accent" />
                  <span>{blog.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedBlog && (
        <div className="fixed inset-0 bg-dark bg-opacity-50 flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className="bg-light p-6 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] flex flex-col ">
            <div className="overflow-y-auto">
                <div className="flex-shrink-0">
                  <img
                    src={selectedBlog.imageUrl}
                    alt={selectedBlog.title}
                    loading="lazy"
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                </div>
                <h3 className="text-3xl font-heading text-primary mb-3">
                  {selectedBlog.title}
                </h3>
                <div className=" flex-grow font-body text-primary">
                  <p>{selectedBlog.fullText}</p>
                </div>

            </div>
            <div className="flex justify-between items-center text-primary text-sm mt-4 font-body">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-accent" />
                <span>{selectedBlog.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-accent" />
                <span>{selectedBlog.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bookmark className="w-5 h-5 text-accent" />
                <span>{selectedBlog.category}</span>
              </div>
            </div>
            <button
              className="absolute top-2 right-2 text-primary text-2xl font-bold hover:text-accent"
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