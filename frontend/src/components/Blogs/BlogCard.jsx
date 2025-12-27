import { Link } from "react-router-dom";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog.id}`} className="group block h-full">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="h-full bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 dark:border-white/5 hover:border-accent dark:hover:border-accent transition-all duration-300 shadow-lg hover:shadow-2xl"
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-secondary dark:bg-dark-bg">
          {blog.imageUrl ? (
            <img
              src={blog.imageUrl}
              alt={blog.title || "Blog Image"}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-accent/10 dark:bg-accent/20">
              <Tag className="w-16 h-16 text-accent" />
            </div>
          )}
          
          {/* Category Badge */}
          {blog.category && (
            <div className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-accent/90 backdrop-blur-sm text-primary text-xs font-body font-semibold">
              {blog.category}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-heading font-bold text-primary dark:text-dark-text mb-3 line-clamp-2 group-hover:text-accent dark:group-hover:text-accent transition-colors duration-300">
            {blog.title || "Untitled Blog"}
          </h3>

          {/* Subtitle */}
          {blog.subtitle && (
            <p className="text-sm font-body text-text-secondary dark:text-dark-textSecondary mb-3 line-clamp-1">
              {blog.subtitle}
            </p>
          )}

          {/* Excerpt */}
          <p className="text-sm font-body text-text-secondary dark:text-dark-textSecondary mb-4 line-clamp-3 leading-relaxed">
            {blog.excerpt || blog.description || "No summary available"}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-xs font-body text-text-secondary dark:text-dark-textSecondary mb-4">
            {blog.author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-accent" />
                <span className="line-clamp-1">{blog.author}</span>
              </div>
            )}
            {blog.date && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                <span>{new Date(blog.date).toLocaleDateString()}</span>
              </div>
            )}
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-accent/10 dark:bg-accent/20 text-accent text-xs font-body"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Read More */}
          <div className="flex items-center gap-2 text-accent font-body font-semibold text-sm group-hover:gap-4 transition-all duration-300">
            <span>Read More</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default BlogCard;
