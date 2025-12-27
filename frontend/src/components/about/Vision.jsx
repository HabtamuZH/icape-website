import { motion } from "framer-motion";
import ArchitecturalBackground from "../common/ArchitecturalBackground";
import { Eye, Sparkles } from "lucide-react";

const Vision = () => {
  const visionPoints = [
    {
      title: "Industry Leadership",
      description: "To be recognized as Ethiopia's premier architectural and engineering consulting firm",
    },
    {
      title: "Innovation Hub",
      description: "To pioneer cutting-edge design solutions that set new standards in the industry",
    },
    {
      title: "Sustainable Future",
      description: "To lead the transformation towards environmentally conscious architecture",
    },
    {
      title: "Global Recognition",
      description: "To establish iCAPE as a world-class architectural firm with international acclaim",
    },
  ];

  return (
    <section className="min-h-screen py-20 md:py-32 flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Side - Left on desktop */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-square rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md p-12 flex items-center justify-center border border-white/10 dark:border-white/5">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 dark:from-blue-500/20 dark:to-purple-500/20 flex items-center justify-center">
                    <Eye className="w-16 h-16 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-dark-text mb-4">
                    Visionary
                  </h3>
                  <p className="text-lg font-body text-text-secondary dark:text-dark-textSecondary">
                    Shaping Tomorrow
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 -z-10" />
            </motion.div>

            {/* Content Side - Right on desktop */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-dark-text">
                  Our Vision
                </h1>
              </div>

              <p className="text-xl md:text-2xl font-body text-primary dark:text-dark-text mb-12 leading-relaxed">
                To be the leading architectural and engineering consulting firm in Ethiopia, renowned for innovation, sustainability, and excellence in design.
              </p>

              <div className="space-y-6">
                {visionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 dark:border-white/5 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-heading font-bold text-primary dark:text-dark-text mb-2">
                          {point.title}
                        </h3>
                        <p className="text-sm md:text-base font-body text-text-secondary dark:text-dark-textSecondary leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default Vision;
