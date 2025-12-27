/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";

const ServiceHero = ({ title, subtitle, image, scrollToId = "overview" }) => {
  return (
    <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Modern Overlay Gradients */}
        <div className="absolute inset-0 bg-primary/40 dark:bg-dark-bg/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/80 dark:to-dark-bg" />
      </motion.div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-accent mx-auto mb-8"
          />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-secondary-light dark:text-dark-text mb-6 tracking-tight leading-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl font-body text-secondary-light/80 dark:text-dark-textSecondary mb-12 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contactus"
              className="group flex items-center gap-3 px-8 py-4 bg-accent text-primary font-heading font-bold rounded-2xl hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-accent/40"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            const element = document.getElementById(scrollToId);
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-xs font-heading font-bold text-secondary-light/60 dark:text-dark-textSecondary/60 uppercase tracking-widest">
            Scroll to Explore
          </span>
          <ChevronDown className="w-6 h-6 text-accent" />
        </motion.div>
      </motion.div>

      {/* Architectural Accents */}
      <div className="absolute top-0 right-0 w-1/4 h-full border-l border-white/5 pointer-events-none hidden xl:block" />
      <div className="absolute bottom-0 left-0 w-full h-1/4 border-t border-white/5 pointer-events-none hidden xl:block" />
    </section>
  );
};

export default ServiceHero;
