import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Content Container */}
      <div className="relative z-10 container-custom py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/5 dark:bg-dark-surface/30 backdrop-blur-sm border border-primary/10 dark:border-dark-border/30"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-body font-medium text-primary dark:text-dark-text">
              Award-Winning Architectural Excellence
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary dark:text-dark-text tracking-tight leading-tight"
          >
            Crafting the Future of{" "}
            <span className="block mt-2 bg-gradient-to-r from-accent via-accent-alt to-accent bg-clip-text text-transparent">
              Architecture
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 text-lg md:text-xl font-body text-text-secondary dark:text-dark-textSecondary max-w-3xl mx-auto leading-relaxed"
          >
            Where visionary design meets cutting-edge technology. We create architectural masterpieces that inspire, endure, and harmonize with the environment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-body font-semibold text-secondary-light dark:text-primary bg-primary dark:bg-accent rounded-lg hover:bg-primary/90 dark:hover:bg-accent-alt transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Explore Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-body font-semibold text-primary dark:text-dark-text border-2 border-primary/20 dark:border-dark-border rounded-lg hover:bg-primary/5 dark:hover:bg-dark-surface/50 transition-all duration-300"
            >
              Our Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Awards Won" },
              { number: "20+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-body text-text-secondary dark:text-dark-textSecondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/20 dark:border-dark-border rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
