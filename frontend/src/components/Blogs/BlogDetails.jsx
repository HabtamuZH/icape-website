/* eslint-disable react/prop-types */
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Bookmark, Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import blogService from "../../services/blog-service";
import LoadingSpinner from "../common/LoadingSpinner";
import { motion } from "framer-motion";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
      <div className="min-h-screen flex items-center justify-center bg-secondary dark:bg-dark-bg">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-secondary dark:bg-dark-bg p-4 text-center">
        <h2 className="text-2xl font-heading font-bold text-primary dark:text-dark-text mb-4">
          {error || "Blog not found"}
        </h2>
        <Link
          to="/blogs"
          className="px-6 py-2 bg-accent text-primary font-body font-semibold rounded-lg hover:scale-105 transition-transform"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-custom">
        {/* Top Navigation */}
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-text-secondary dark:text-dark-textSecondary hover:text-accent dark:hover:text-accent font-body transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog List</span>
            </Link>
          </motion.div>

          <article>
            {/* Header Section */}
            <div className="max-w-4xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 bg-accent/10 dark:bg-accent/20 text-accent font-body text-sm font-semibold rounded-full border border-accent/20">
                    {blog.category || "General"}
                  </span>
                  <div className="flex items-center gap-2 text-text-secondary dark:text-dark-textSecondary text-sm font-body">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary dark:text-dark-text leading-tight mb-8">
                  {blog.title}
                </h1>

                <div className="flex items-center justify-between border-y border-border dark:border-dark-border py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-secondary-dark dark:bg-dark-surface flex items-center justify-center border border-border dark:border-dark-border">
                      <User className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <span className="block text-sm font-heading font-bold text-primary dark:text-dark-text">
                        {blog.author || "ICAPE Team"}
                      </span>
                      <span className="text-xs text-text-secondary dark:text-dark-textSecondary font-body">
                        Architecture Specialist
                      </span>
                    </div>
                  </div>
                  <button className="p-3 rounded-full bg-secondary-dark dark:bg-dark-surface hover:bg-accent hover:text-primary transition-all duration-300">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-auto object-cover max-h-[70vh]"
              />
            </motion.div>

            {/* Content Layout */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="lg:col-span-3 prose-custom dark:prose-invert"
                >
                  {blog.excerpt && (
                    <div className="text-xl md:text-2xl font-body italic text-primary dark:text-dark-text mb-10 pl-6 border-l-4 border-accent leading-relaxed">
                      {blog.excerpt}
                    </div>
                  )}

                  <div
                    className="prose prose-lg dark:prose-invert max-w-none text-text-secondary dark:text-dark-textSecondary font-body leading-loose"
                    dangerouslySetInnerHTML={{
                      __html: blog.content || blog.description,
                    }}
                  />

                  {/* Tags */}
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="mt-16 pt-8 border-t border-border dark:border-dark-border">
                      <div className="flex items-center gap-3 mb-4">
                        <Bookmark className="w-5 h-5 text-accent" />
                        <span className="font-heading font-bold text-primary dark:text-dark-text">Tags</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {blog.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-4 py-1.5 bg-secondary-dark dark:bg-dark-surface text-text-secondary dark:text-dark-textSecondary rounded-lg text-sm font-body border border-border dark:border-dark-border hover:border-accent transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Sidebar */}
                <aside className="lg:col-span-1">
                  <div className="sticky top-32 space-y-8">
                    <div className="p-6 bg-secondary-dark/50 dark:bg-dark-surface/50 backdrop-blur-sm rounded-2xl border border-border dark:border-dark-border">
                      <h4 className="font-heading font-bold text-primary dark:text-dark-text mb-4">Quick Insight</h4>
                      <p className="text-sm text-text-secondary dark:text-dark-textSecondary leading-relaxed italic">
                        "Great architecture is not about what we see, but what we feel in the spaces between the walls."
                      </p>
                    </div>

                    <div className="group">
                      <Link
                        to="/contactus"
                        className="block p-6 bg-primary dark:bg-accent text-secondary-light dark:text-primary rounded-2xl text-center font-heading font-bold hover:scale-[1.02] transition-all duration-300"
                      >
                        Start Your Project
                      </Link>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </article>
        </div>
      </div>
  );
};

export default BlogDetails;
