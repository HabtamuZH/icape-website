import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import LoadingSpinner from "../common/LoadingSpinner";
import BlogCard from "./BlogCard";
import blogService from "../../services/blog-service";
import clsx from "clsx";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await blogService.getAll();
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

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || blog.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "All",
    ...new Set(blogs.map((blog) => blog.category).filter(Boolean)),
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <p className="text-red-500 font-body">{error}</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-20 md:py-32">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary dark:text-dark-text mb-6">
              Our Latest Blogs
            </h1>
            <p className="text-lg md:text-xl font-body text-text-secondary dark:text-dark-textSecondary max-w-3xl mx-auto">
              Explore insights, tips, and stories from our architectural experts
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary dark:text-dark-textSecondary" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-secondary-light dark:bg-dark-surface text-primary dark:text-dark-text border border-border dark:border-dark-border focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all duration-300 font-body"
              />
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 mb-4 rounded-lg bg-secondary-light dark:bg-dark-surface border border-border dark:border-dark-border text-primary dark:text-dark-text"
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm font-body font-medium">Categories</span>
            </button>

            {/* Category Filters */}
            <div
              className={clsx(
                "flex flex-wrap gap-3",
                showFilters ? "flex" : "hidden lg:flex"
              )}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setCategoryFilter(category)}
                  className={clsx(
                    "px-6 py-2.5 rounded-lg font-body font-medium text-sm transition-all duration-300",
                    categoryFilter === category
                      ? "bg-primary dark:bg-accent text-secondary-light dark:text-primary shadow-lg scale-105"
                      : "bg-secondary-light dark:bg-dark-surface text-text-secondary dark:text-dark-textSecondary border border-border dark:border-dark-border hover:border-primary dark:hover:border-accent hover:text-primary dark:hover:text-dark-text"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <p className="text-sm font-body text-text-secondary dark:text-dark-textSecondary">
              Showing {filteredBlogs.length} {filteredBlogs.length === 1 ? 'blog' : 'blogs'}
            </p>
          </motion.div>

          {/* Blog Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogCard blog={blog} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-transparent border border-border dark:border-dark-border flex items-center justify-center">
                <Search className="w-10 h-10 text-text-secondary dark:text-dark-textSecondary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary dark:text-dark-text mb-2">
                No blogs found
              </h3>
              <p className="text-base font-body text-text-secondary dark:text-dark-textSecondary">
                Try adjusting your search or filter
              </p>
            </motion.div>
          )}
        </div>
      </section>
  );
};

export default BlogList;
