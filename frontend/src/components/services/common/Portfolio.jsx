/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Portfolio = ({ projects, title }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="w-full py-20 md:py-32 bg-transparent overflow-hidden">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-dark-text tracking-tight mb-4 text-center md:text-left">
              {title}
            </h2>
            <div className="w-20 h-1 bg-accent mb-6 md:mb-0 mx-auto md:mx-0" />
          </div>
          <Link
            to="/projects"
            className="group flex items-center gap-2 text-primary dark:text-dark-text font-heading font-bold hover:text-accent transition-colors self-center md:self-end"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                to={project.link || "/projects"}
                className="group block relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 dark:border-white/5 bg-white/5 dark:bg-white/5 backdrop-blur-sm"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent dark:from-dark-bg/90 dark:via-dark-bg/20 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-heading font-bold text-accent uppercase tracking-widest mb-2 block">
                    {project.year || "2024"}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-secondary-light dark:text-dark-text line-clamp-2">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
