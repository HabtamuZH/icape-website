import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Briefcase, MapPin, Clock, ArrowRight, Mail } from "lucide-react";
import LoadingSpinner from "../common/LoadingSpinner";
import careerService from "../../services/careers-service";

const Annoucement = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    careerService
      .getAll()
      .then((res) => setOpportunities(res.data))
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  const isBaseRoute = location.pathname === "/career";

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <p className="text-red-500 font-body">{error.message}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className="min-h-screen py-20 md:py-32">
      <div className="container-custom">
        {isBaseRoute ? (
            <>
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary dark:text-dark-text mb-6">
                  Career Opportunities at <span className="gradient-text">iCAPE</span>
                </h1>
                <p className="text-lg md:text-xl font-body text-text-secondary dark:text-dark-textSecondary max-w-3xl mx-auto leading-relaxed">
                  Join our innovative team and contribute to groundbreaking projects that shape the future. We're seeking passionate professionals to grow with us.
                </p>
              </motion.div>

              {/* Opportunities Grid */}
              {opportunities.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                  {opportunities.map((opp, index) => (
                    <motion.div
                      key={opp.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="h-full bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 dark:border-white/5 hover:border-accent dark:hover:border-accent transition-all duration-300 hover:scale-105">
                        {/* Type Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 dark:bg-accent/20 text-accent text-sm font-body font-semibold mb-6">
                          <Briefcase className="w-4 h-4" />
                          {opp.type || "Full-time"}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-heading font-bold text-primary dark:text-dark-text mb-4">
                          {opp.title}
                        </h3>

                        {/* Description */}
                        <p className="text-base font-body text-text-secondary dark:text-dark-textSecondary mb-6 leading-relaxed">
                          {opp.description}
                        </p>

                        {/* Details */}
                        {opp.details && (
                          <div className="space-y-3 mb-6">
                            {opp.details.location && (
                              <div className="flex items-center gap-3 text-sm font-body text-text-secondary dark:text-dark-textSecondary">
                                <MapPin className="w-4 h-4 text-accent" />
                                <span>{opp.details.location}</span>
                              </div>
                            )}
                            {opp.details.duration && (
                              <div className="flex items-center gap-3 text-sm font-body text-text-secondary dark:text-dark-textSecondary">
                                <Clock className="w-4 h-4 text-accent" />
                                <span>{opp.details.duration}</span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* CTA */}
                        <Link
                          to={opp.buttonLink || "#"}
                          className="inline-flex items-center gap-2 text-accent font-body font-semibold group-hover:gap-4 transition-all duration-300"
                        >
                          {opp.buttonText || "Apply Now"}
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-lg font-body text-text-secondary dark:text-dark-textSecondary">
                    No opportunities available at this time
                  </p>
                </div>
              )}

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 text-center border border-white/10 dark:border-white/5 shadow-xl hover:shadow-2xl transition-shadow duration-500"
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-dark-text mb-6">
                  Questions About Our Opportunities?
                </h2>
                <p className="text-lg font-body text-text-secondary dark:text-dark-textSecondary mb-10 max-w-2xl mx-auto leading-relaxed">
                  Reach out to our talent team and let's discuss how you can contribute to our mission
                </p>
                <Link
                  to="/contactus"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-primary rounded-2xl font-heading font-bold hover:bg-white hover:shadow-accent/40 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  Contact Us
                </Link>
              </motion.div>
            </>
          ) : (
            <Outlet />
          )}
        </div>
      </section>
  );
};

export default Annoucement;
