// src/components/Blog/BlogCard.js
import { Link } from "react-router-dom";
import { Bookmark, Calendar, User } from "lucide-react";

const BlogCard = ({ blog }) => {
  return (
    <Link
      to={`/blogs/${blog._id}`}
      className="blog-card bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
    >
      <img
        src={blog.imageUrl || "https://via.placeholder.com/150"}
        alt={blog.title || "Blog Image"}
        loading="lazy"
        className="w-full h-48 sm:h-56 md:h-64 object-cover"
      />
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-heading font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-200 line-clamp-2">
          {blog.title || "Untitled Blog"}
        </h3>
        {blog.subtitle && (
          <p className="text-gray-600 text-sm sm:text-base font-body mb-3 line-clamp-1">
            {blog.subtitle}
          </p>
        )}
        <p className="text-gray-700 font-body text-sm sm:text-base mb-4 line-clamp-3">
          {blog.excerpt || blog.description || "No summary available"}
        </p>
        <div className="grid grid-cols-2 gap-4 text-gray-600 text-xs sm:text-sm font-body">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-blue-500" />
            <span className="line-clamp-1">
              {blog.author || "Unknown Author"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-500" />
            <span>
              {blog.date ? new Date(blog.date).toLocaleDateString() : "No date"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-blue-500" />
            <span className="line-clamp-1">
              {blog.category || "Uncategorized"}
            </span>
          </div>
        </div>
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {blog.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default BlogCard;
