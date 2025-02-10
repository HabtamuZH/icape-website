import { useState, useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import { Bookmark, Calendar, User } from "lucide-react";

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const blogs = [
    {
      title: "The Future of Sustainable Architecture",
      description:
        "Exploring the latest trends in green building and eco-friendly designs.",
      date: "Feb 5, 2025",
      author: "Emily Carter",
      category: "Sustainability",
      fullText:
        "Sustainable architecture is revolutionizing the industry with innovative materials, energy-efficient designs, and eco-conscious urban planning...",
      imageUrl:
        "https://via.placeholder.com/600x400?text=Sustainable+Architecture",
    },
    {
      title: "Minimalist Architecture: Less is More",
      description:
        "How minimalist design principles are shaping modern architecture.",
      date: "Jan 28, 2025",
      author: "Michael Johnson",
      category: "Minimalism",
      fullText:
        "Minimalist architecture focuses on simplicity, functionality, and the use of natural light. Architects worldwide are embracing clean lines, open spaces...",
      imageUrl: "https://via.placeholder.com/600x400?text=Minimalist+Design",
    },
    {
      title: "The Role of AI in Architecture",
      description:
        "How artificial intelligence is transforming architectural design and construction.",
      date: "Jan 15, 2025",
      author: "Sophia Nguyen",
      category: "Technology",
      fullText:
        "Artificial intelligence is streamlining design processes, optimizing construction efficiency, and introducing new possibilities in generative design...",
      imageUrl: "https://via.placeholder.com/600x400?text=AI+in+Architecture",
    },
    {
      title: "Biophilic Design: Bringing Nature Indoors",
      description:
        "Understanding the impact of biophilic design on human well-being and productivity.",
      date: "Dec 30, 2024",
      author: "Daniel Ross",
      category: "Nature",
      fullText:
        "Biophilic design incorporates natural elements into buildings, such as living walls, indoor gardens, and water features. Studies show that such spaces...",
      imageUrl: "https://via.placeholder.com/600x400?text=Biophilic+Design",
    },
    {
      title: "Smart Homes: The Intersection of Tech & Design",
      description:
        "The evolution of smart home technology in modern architectural projects.",
      date: "Dec 10, 2024",
      author: "Laura Smith",
      category: "Smart Homes",
      fullText:
        "Smart homes integrate IoT devices, automation, and AI-powered assistants to create seamless, energy-efficient living environments...",
      imageUrl: "https://via.placeholder.com/600x400?text=Smart+Homes",
    },
    {
      title: "Historical Architecture: Preserving the Past",
      description:
        "How architects balance restoration and modernization in historic buildings.",
      date: "Nov 22, 2024",
      author: "James Bennett",
      category: "History",
      fullText:
        "Historical preservation involves careful restoration techniques, ensuring that buildings retain their original charm while incorporating modern upgrades...",
      imageUrl: "https://via.placeholder.com/600x400?text=Historical+Buildings",
    },
    {
      title: "The Impact of 3D Printing in Architecture",
      description:
        "Revolutionizing construction with 3D-printed buildings and structures.",
      date: "Nov 5, 2024",
      author: "Rachel Adams",
      category: "Technology",
      fullText:
        "3D printing in architecture is rapidly growing, allowing for cost-effective, sustainable, and complex structures that traditional methods struggle to achieve...",
      imageUrl: "https://via.placeholder.com/600x400?text=3D+Printed+Buildings",
    },
    {
      title: "Urban Planning: Designing Cities for the Future",
      description:
        "How urban planning is adapting to population growth and climate change.",
      date: "Oct 20, 2024",
      author: "David Wilson",
      category: "Urban Design",
      fullText:
        "Future cities require efficient transportation, green spaces, and resilient infrastructure. Urban planners focus on smart cities and sustainable growth...",
      imageUrl: "https://via.placeholder.com/600x400?text=Urban+Planning",
    },
    {
      title: "The Rise of Modular Architecture",
      description:
        "Why prefabricated and modular buildings are gaining popularity.",
      date: "Oct 3, 2024",
      author: "Lisa Thompson",
      category: "Construction",
      fullText:
        "Modular architecture provides faster construction, reduced costs, and increased sustainability, making it a game-changer in the industry...",
      imageUrl: "https://via.placeholder.com/600x400?text=Modular+Architecture",
    },
    {
      title: "Glass Architecture: Aesthetic & Functional",
      description:
        "The pros and cons of using glass in modern architectural design.",
      date: "Sep 15, 2024",
      author: "Mark Anderson",
      category: "Materials",
      fullText:
        "Glass buildings are striking and energy-efficient, but they require careful planning to balance transparency, privacy, and thermal insulation...",
      imageUrl: "https://via.placeholder.com/600x400?text=Glass+Architecture",
    },
    {
      title: "Skyscrapers: Engineering Marvels of the 21st Century",
      description:
        "The latest advancements in skyscraper construction and design.",
      date: "Sep 1, 2024",
      author: "Nathan Roberts",
      category: "High-Rise",
      fullText:
        "Modern skyscrapers push the boundaries of engineering with sustainable materials, wind-resistant designs, and innovative structural systems...",
      imageUrl: "https://via.placeholder.com/600x400?text=Skyscrapers",
    },
    {
      title: "The Beauty of Brutalist Architecture",
      description: "Exploring the raw concrete aesthetics of Brutalism.",
      date: "Aug 10, 2024",
      author: "Olivia Carter",
      category: "Brutalism",
      fullText:
        "Brutalist architecture is bold, raw, and unapologetically expressive. Despite its divisive nature, it has seen a revival in contemporary design...",
      imageUrl:
        "https://via.placeholder.com/600x400?text=Brutalist+Architecture",
    },
    {
      title: "Floating Cities: The Future of Water-Based Living",
      description:
        "How floating cities could be a solution to rising sea levels.",
      date: "Jul 25, 2024",
      author: "Henry Peterson",
      category: "Innovation",
      fullText:
        "With climate change causing sea levels to rise, architects and engineers are conceptualizing floating cities as sustainable living solutions...",
      imageUrl: "https://via.placeholder.com/600x400?text=Floating+Cities",
    },
    {
      title: "The Role of Lighting in Architectural Design",
      description:
        "How strategic lighting enhances the functionality and beauty of spaces.",
      date: "Jul 5, 2024",
      author: "Sarah Miller",
      category: "Lighting",
      fullText:
        "Lighting in architecture is more than aesthetics; it influences mood, energy efficiency, and spatial perception...",
      imageUrl:
        "https://via.placeholder.com/600x400?text=Architectural+Lighting",
    },
  ];

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
              className="bg-gray-900 p-8 rounded-2xl shadow-2xl max-w-3xl w-full transform transition-all duration-500"
            >
              <div className="w-full h-60 object-cover rounded-lg shadow-md mb-6">
                <img
                  src={selectedBlog.imageUrl}
                  alt="Blog Image"
                  className="w-full h-auto mb-6 rounded-lg"
                />
                <h3 className="text-4xl font-semibold text-white">
                  {selectedBlog.title}
                </h3>
              </div>
              <p className="text-gray-300 mb-4">{selectedBlog.fullText}</p>
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
