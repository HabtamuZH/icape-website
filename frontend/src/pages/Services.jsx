import { motion } from "framer-motion";
import { Building2, Map, Cog, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Architectural Design",
      description: "Innovative and sustainable design solutions for modern architecture",
      features: [
        "Residential & Commercial Buildings",
        "Mixed-Use Developments",
        "Educational Facilities",
        "Hospitality & Retail Spaces",
      ],
      path: "/services/architectural-design",
      color: "from-accent to-accent-alt",
    },
    {
      icon: Map,
      title: "Urban Design & Planning",
      description: "Efficient and forward-thinking urban planning services for thriving communities",
      features: [
        "Master Planning",
        "Town & City Planning",
        "Landscape Architecture",
        "Public Space Design",
      ],
      path: "/services/urban-design-and-planning",
      color: "from-gray-400 to-gray-600", // Platinum/Stone
    },
    {
      icon: Cog,
      title: "Engineering Design",
      description: "Delivering projects with precision through expert contract management and engineering",
      features: [
        "Structural Engineering",
        "MEP Design",
        "Contract Administration",
        "Project Management",
      ],
      path: "/services/constract-admin-and-engineering-design",
      color: "from-accent-alt to-accent", // Bronze/Gold
    },
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
              Our Services
            </h1>
            <p className="text-lg md:text-xl font-body text-text-secondary dark:text-dark-textSecondary max-w-3xl mx-auto leading-relaxed">
              Comprehensive architectural and engineering solutions tailored to bring your vision to life
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <Link to={service.path}>
                  <div className="h-full bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 dark:border-white/5 hover:border-accent dark:hover:border-accent transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-heading font-bold text-primary dark:text-dark-text mb-4">
                      {service.title}
                    </h3>
                    <p className="text-base font-body text-text-secondary dark:text-dark-textSecondary mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm font-body text-text-secondary dark:text-dark-textSecondary"
                        >
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-accent font-body font-semibold group-hover:gap-4 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 text-center border border-white/10 dark:border-white/5 shadow-xl hover:shadow-2xl transition-shadow duration-500"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-dark-text mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg font-body text-text-secondary dark:text-dark-textSecondary mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's collaborate to create something extraordinary. Our team is ready to bring your architectural vision to reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contactus"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-accent text-primary rounded-2xl font-heading font-bold hover:bg-white hover:shadow-accent/40 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-secondary-dark dark:bg-dark-bg text-primary dark:text-dark-text border border-border dark:border-dark-border rounded-2xl font-heading font-bold hover:bg-white dark:hover:bg-accent dark:hover:text-primary transition-all duration-300 hover:scale-105 shadow-lg"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default Services;
