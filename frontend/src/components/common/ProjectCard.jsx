/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/projects/${project.id}`}
        state={{ project }}
        className="group block relative overflow-hidden rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-lg hover:shadow-2xl transition-all duration-500"
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.imageUrl}
            alt={`${project.name} project`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent dark:from-dark-bg/90 dark:via-dark-bg/50 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Hover Icon */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary-light/20 dark:bg-dark-surface/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <ArrowUpRight className="w-5 h-5 text-secondary-light dark:text-dark-text" />
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-secondary-light dark:text-dark-text mb-2 line-clamp-2">
            {project.name}
          </h3>
          <p className="text-sm md:text-base font-body text-secondary-light/80 dark:text-dark-textSecondary line-clamp-1">
            {project.role || project.category || 'Architecture'}
          </p>
        </div>

        {/* Bottom Border Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-alt to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </Link>
    </motion.div>
  );
};

export default ProjectCard;