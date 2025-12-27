/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = ({ content }) => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-transparent">
      {/* Background Architectural Accent */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full border-l border-primary dark:border-accent/20 transform skew-x-12" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 border-t border-primary dark:border-accent/20 transform -skew-y-6" />
      </div>

      <div className="container-custom relative z-10">
        <div className="bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-12 md:p-20 overflow-hidden relative group border border-white/10 dark:border-white/5 shadow-xl">
          {/* Animated Background Glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent opacity-10 dark:opacity-20 filter blur-[120px] group-hover:opacity-30 transition-opacity duration-700" />
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            {content.map((cta, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary dark:text-dark-text mb-8 leading-tight">
                  {cta.headline}
                </h2>
                <p className="text-xl font-body text-text-secondary dark:text-dark-textSecondary mb-12 max-w-2xl mx-auto leading-relaxed">
                  {cta.subtext}
                </p>
                <Link
                  to={cta.buttonLink}
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-accent text-primary font-heading font-bold text-lg rounded-2xl hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-accent/40"
                >
                  {cta.buttonText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
