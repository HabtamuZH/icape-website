// src/components/Blog/BlogList.js
import { useState, useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import blogService from "../../services/blog-service";
import LoadingSpinner from "../common/LoadingSpinner";
import BlogFilter from "./BlogFilter";
import BlogCard from "./BlogCard";
import Error from "../common/Error";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const blogSectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) return <Error message={error} variant="danger" />;

  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 md:py-32 px-4 sm:px-6 md:px-8">
      <div
        ref={blogSectionRef}
        className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10"
      >
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-2">
            Our Latest Blogs
          </h2>
          <p className="text-gray-600 text-base sm:text-lg font-body">
            Explore insights, tips, and stories from our experts.
          </p>
        </div>

        <BlogFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          categories={categories}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
          ) : (
            <p className="col-span-full text-center text-primary font-body text-lg">
              No blogs available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
