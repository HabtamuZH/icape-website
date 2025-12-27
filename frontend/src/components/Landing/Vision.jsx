import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Lightbulb, Globe, ArrowRight } from "lucide-react";

const ExpVision = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Expert Articles",
      description: "In-depth insights from industry leaders",
    },
    {
      icon: Lightbulb,
      title: "Innovative Ideas",
      description: "Cutting-edge architectural concepts",
    },
    {
      icon: Globe,
      title: "Global Trends",
      description: "Stay ahead with worldwide perspectives",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-transparent">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary dark:text-dark-text mb-4">
            Explore Our Visionary <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-lg md:text-xl font-body text-text-secondary dark:text-dark-textSecondary max-w-3xl mx-auto leading-relaxed">
            Dive into a wealth of knowledge with our expertly crafted articles. From industry trends to innovative solutions, our blog empowers you to stay informed and inspired.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 dark:border-white/5 hover:border-accent dark:hover:border-accent transition-all duration-300 hover:scale-105 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary dark:text-dark-text mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm font-body text-text-secondary dark:text-dark-textSecondary">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary dark:bg-accent text-secondary-light dark:text-primary rounded-lg font-body font-semibold hover:bg-primary-light dark:hover:bg-accent-alt transition-all duration-300 hover:scale-105"
          >
            Discover Our Blog
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpVision;
