/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const Process = ({ processSteps, title }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full py-20 md:py-32 bg-transparent overflow-hidden">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-dark-text tracking-tight">
            {title}
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-6" />
        </motion.div>

        {/* Process Steps Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {processSteps.map((step, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white/10 dark:bg-white/5 backdrop-blur-lg border-accent/30 dark:border-accent/30 shadow-xl"
                    : "bg-transparent border-white/10 dark:border-white/5 hover:border-accent/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-2xl md:text-3xl font-heading font-black transition-colors duration-300 ${
                      isOpen ? "text-accent" : "text-text-secondary/20 dark:text-dark-textSecondary/20"
                    }`}>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <h3 className={`text-xl md:text-2xl font-heading font-bold transition-colors duration-300 ${
                      isOpen ? "text-primary dark:text-dark-text" : "text-text-secondary dark:text-dark-textSecondary"
                    }`}>
                      {step.step}
                    </h3>
                  </div>
                  <div className={`p-2 rounded-full transition-colors duration-300 ${
                    isOpen ? "bg-accent text-primary" : "text-text-secondary dark:text-dark-textSecondary"
                  }`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 pt-0 md:pt-0 ml-0 md:ml-16">
                        <div className="h-px bg-border dark:bg-dark-border mb-6 opacity-50" />
                        <p className="text-lg font-body text-text-secondary dark:text-dark-textSecondary leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
