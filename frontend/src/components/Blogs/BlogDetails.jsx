// src/components/Blog/BlogDetails.js
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Bookmark, Calendar, User } from "lucide-react";
import blogService from "../../services/blog-service";
import LoadingSpinner from "../common/LoadingSpinner";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await blogService.getOne(id);
        setBlog(res.data);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError(err.message || "Failed to load blog");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return (
      <p className="text-center text-red-500 py-12 text-xl font-semibold">
        Error: {error}
      </p>
    );
  }
  if (!blog) {
    return (
      <p className="text-center text-gray-600 py-12 text-lg font-body">
        Blog not found
      </p>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Hero Image Section */}
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <img
          src={blog.imageUrl || "https://via.placeholder.com/150"}
          alt={blog.title || "Blog Image"}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
        <Link
          to="/blogs"
          className="absolute top-8 left-6 md:left-12 text-white font-body text-sm md:text-base flex items-center gap-2 transition-all duration-300 hover:bg-blue-600 bg-blue-500 rounded-full px-4 py-2 shadow-md z-10"
        >
          <span className="text-lg md:text-xl">←</span> Back to Blogs
        </Link>
        <div className="absolute bottom-8 left-6 md:left-12 right-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading text-white font-bold drop-shadow-lg leading-tight">
            {blog.title || "Untitled Blog"}
          </h1>
          {blog.subtitle && (
            <p className="text-lg sm:text-xl text-gray-200 mt-2 drop-shadow-md">
              {blog.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            {blog.excerpt && (
              <p className="text-gray-600 italic text-lg mb-6 border-l-4 border-blue-500 pl-4 bg-gray-100 p-4 rounded-r-lg">
                {blog.excerpt}
              </p>
            )}
            <div
              className="prose prose-sm sm:prose-base md:prose-lg prose-gray font-body text-gray-700"
              dangerouslySetInnerHTML={{
                __html:
                  blog.content || blog.description || "No content available",
              }}
            />
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar with Metadata */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 sticky top-24">
              <h2 className="text-xl md:text-2xl font-heading text-gray-800 mb-6">
                Details
              </h2>
              <div className="space-y-6 text-gray-600">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <div>
                    <span className="block text-sm font-semibold text-gray-500">
                      Author
                    </span>
                    <span className="text-base font-body">
                      {blog.author || "Unknown Author"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <div>
                    <span className="block text-sm font-semibold text-gray-500">
                      Date
                    </span>
                    <span className="text-base font-body">
                      {blog.date
                        ? new Date(blog.date).toLocaleDateString()
                        : "No date"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Bookmark className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <div>
                    <span className="block text-sm font-semibold text-gray-500">
                      Category
                    </span>
                    <span className="text-base font-body">
                      {blog.category || "Uncategorized"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 opacity-10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200 opacity-10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </div>
  );
};

export default BlogDetails;
