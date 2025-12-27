import { motion } from "framer-motion";
import ArchitecturalBackground from "../common/ArchitecturalBackground";
import { Target, CheckCircle2 } from "lucide-react";

const Mission = () => {
  const missions = [
    "Deliver innovative architectural solutions that exceed client expectations",
    "Promote sustainable and eco-friendly design practices",
    "Foster a culture of creativity, collaboration, and continuous learning",
    "Contribute to the development of Ethiopia's built environment",
    "Maintain the highest standards of professional excellence and integrity",
  ];

  return (
    <section className="min-h-screen py-20 md:py-32 flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-dark-text">
                  Our Mission
                </h1>
              </div>

              <p className="text-xl md:text-2xl font-body text-primary dark:text-dark-text mb-12 leading-relaxed">
                To create exceptional architectural designs that inspire, endure, and harmonize with the environment while exceeding our clients' expectations.
              </p>

              <div className="space-y-4">
                {missions.map((mission, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center mt-1 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <CheckCircle2 className="w-4 h-4 text-accent group-hover:text-secondary-light dark:group-hover:text-primary" />
                    </div>
                    <p className="text-base md:text-lg font-body text-text-secondary dark:text-dark-textSecondary leading-relaxed">
                      {mission}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md p-12 flex items-center justify-center border border-white/10 dark:border-white/5">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-accent/20 dark:bg-accent/30 flex items-center justify-center">
                    <Target className="w-16 h-16 text-accent" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-dark-text mb-4">
                    Excellence
                  </h3>
                  <p className="text-lg font-body text-text-secondary dark:text-dark-textSecondary">
                    Driven by Purpose
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-xl bg-accent/10 dark:bg-accent/20 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-xl bg-accent-alt/10 dark:bg-accent-alt/20 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default Mission;
