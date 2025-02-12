import { useState, useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import { Bookmark, Calendar, User } from "lucide-react";
import blogs from "../../data/blogdata";
const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const modalRef = useRef();

  useEffect(() => {
    ScrollReveal().reveal(".blog-section", {
      delay: 200,
      duration: 1500,
      easing: "ease-in-out",
      distance: "40px",
      opacity: 0,
      origin: "bottom",
      interval: 200,
    });

    ScrollReveal().reveal(".blog-card", {
      delay: 300,
      duration: 1500,
      easing: "ease-in-out",
      distance: "30px",
      opacity: 0,
      origin: "right",
      interval: 200,
      rotate: { x: 20, y: 20 },
    });
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filteredBlogs = blogs.filter((blog) => {
    return (
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (categoryFilter === "All" || blog.category === categoryFilter)
    );
  });

  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  return (
    <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black min-h-screen text-white py-12 pt-32 px-6">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 blog-section">
        <h2 className="text-5xl font-extrabold text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white">
          Latest Architectural Projects
        </h2>

        {/* Search and Filter Options */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-700 p-4 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Search blog title..."
            className="w-full md:w-1/2 p-2 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="w-full md:w-1/4 mt-3 md:mt-0 p-2 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredBlogs.map((blog, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-2xl shadow-xl blog-card transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => openModal(blog)}
            >
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-3xl font-semibold text-white mb-4 transition-colors duration-300 hover:text-gray-200">
                {blog.title}
              </h3>
              <p className="text-gray-300 mb-6 transition-all duration-300 hover:text-gray-400">
                {blog.description}
              </p>
              <div className="flex items-center justify-between text-gray-400">
                <div className="flex items-center space-x-2">
                  <User className="w-6 h-6" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-6 h-6" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bookmark className="w-6 h-6" />
                  <span>{blog.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
      </div>
      {isModalOpen && selectedBlog && (
        <div className="modal-overlay backdrop-blur-sm inset-0 max-h-screen fixed bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className="bg-gray-900 h-[80vh] p-8 rounded-2xl overflow-y-hidden  shadow-2xl max-w-3xl w-full transform transition-all duration-500"
          >
            <div className="w-full  h-[40vh] object-cover rounded-lg shadow-md ">
              <img
                src={selectedBlog.imageUrl}
                alt="Blog Image"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <h3 className="text-4xl font-semibold text-white">
              {selectedBlog.title}
            </h3>
            <div className=" overflow-y-auto h-[25vh]">
              <p className="text-gray-300 mb-4">{selectedBlog.fullText}</p>
            </div>
            <div className="flex justify-between items-center text-gray-400">
              <div className="flex items-center space-x-2">
                <User className="w-6 h-6" />
                <span>{selectedBlog.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-6 h-6" />
                <span>{selectedBlog.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bookmark className="w-6 h-6" />
                <span>{selectedBlog.category}</span>
              </div>
            </div>
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-400"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
