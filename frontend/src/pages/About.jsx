import { motion } from "framer-motion";
import { Building2, Users, Target, Eye, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "25+", label: "Team Members" },
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge architectural solutions",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together to achieve extraordinary results",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards in every project",
    },
    {
      icon: Building2,
      title: "Sustainability",
      description: "Creating eco-friendly designs for a better tomorrow",
    },
  ];

  const quickLinks = [
    { title: "Our Journey", path: "/about/journey", icon: Building2 },
    { title: "Mission", path: "/about/mission", icon: Target },
    { title: "Vision", path: "/about/vision", icon: Eye },
    { title: "Our Team", path: "/about/teams", icon: Users },
  ];

  return (
    <section className="min-h-screen py-20 md:py-32">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary dark:text-dark-text mb-6">
              About <span className="gradient-text">iCAPE</span>
            </h1>
            <p className="text-lg md:text-xl font-body text-text-secondary dark:text-dark-textSecondary max-w-3xl mx-auto leading-relaxed">
              A leading architectural and engineering consulting firm in Ethiopia with over 10 years of experience in creating innovative, sustainable designs.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10 dark:border-white/5 hover:border-accent dark:hover:border-accent transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-dark-text mb-2">
                  {stat.number}
                </h3>
                <p className="text-sm md:text-base font-body text-text-secondary dark:text-dark-textSecondary">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-dark-text text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 h-full border border-white/10 dark:border-white/5 hover:border-accent dark:hover:border-accent transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-primary dark:text-dark-text mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm font-body text-text-secondary dark:text-dark-textSecondary leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 dark:border-white/5"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary dark:text-dark-text mb-8 text-center">
              Explore More About Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quickLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-4 p-6 rounded-xl bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/5 hover:border-accent dark:hover:border-accent transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-secondary-light dark:group-hover:text-primary transition-all duration-300">
                      <link.icon className="w-6 h-6 text-accent group-hover:text-secondary-light dark:group-hover:text-primary" />
                    </div>
                    <span className="text-lg font-heading font-semibold text-primary dark:text-dark-text flex-1">
                      {link.title}
                    </span>
                    <ArrowRight className="w-5 h-5 text-text-secondary dark:text-dark-textSecondary group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default About;
