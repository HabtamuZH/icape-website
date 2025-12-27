import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ArchitecturalBackground from "../common/ArchitecturalBackground";
import LoadingSpinner from "../common/LoadingSpinner";
import teamService from "../../services/team-service";

const TeamMembers = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await teamService.getAll();
        const data = Array.isArray(response) ? response : response.data || [];
        setTeam(data);
      } catch (err) {
        setError("Failed to fetch team members. Please try again later.");
        console.error("Error fetching team:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary dark:bg-dark-bg">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary dark:bg-dark-bg">
        <p className="text-red-500 font-body">{error}</p>
      </div>
    );
  }

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
              Meet Our Team
            </h1>
            <p className="text-lg md:text-xl font-body text-text-secondary dark:text-dark-textSecondary max-w-3xl mx-auto">
              A passionate team of architects, engineers, and designers committed to innovation and excellence
            </p>
          </motion.div>

          {/* Team Grid */}
          {team.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {team.map((member, index) => (
                <motion.div
                  key={member.id || index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 dark:border-white/5 hover:border-accent dark:hover:border-accent transition-all duration-300 hover:scale-105">
                    {/* Avatar */}
                    <div className="aspect-square overflow-hidden bg-secondary dark:bg-dark-bg">
                      {member.avatar ? (
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-accent/10 dark:bg-accent/20">
                          <span className="text-6xl font-heading font-bold text-accent">
                            {member.name?.charAt(0) || "?"}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-bold text-primary dark:text-dark-text mb-2">
                        {member.name}
                      </h3>
                      <p className="text-sm font-body text-accent mb-3">
                        {member.title}
                      </p>
                      {member.desc && (
                        <p className="text-sm font-body text-text-secondary dark:text-dark-textSecondary mb-4 line-clamp-2">
                          {member.desc}
                        </p>
                      )}

                      {/* Social Links */}
                      {member.socialLinks && (
                        <div className="flex gap-3">
                          {member.socialLinks.linkedin && (
                            <a
                              href={member.socialLinks.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-secondary-light dark:hover:text-primary transition-all duration-300"
                            >
                              <Linkedin className="w-5 h-5" />
                            </a>
                          )}
                          {member.socialLinks.email && (
                            <a
                              href={`mailto:${member.socialLinks.email}`}
                              className="w-10 h-10 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-secondary-light dark:hover:text-primary transition-all duration-300"
                            >
                              <Mail className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg font-body text-text-secondary dark:text-dark-textSecondary">
                No team members found
              </p>
            </div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-2xl p-12 border border-white/10 dark:border-white/5"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-dark-text mb-4">
              Shape Spaces That Inspire!
            </h2>
            <p className="text-lg font-body text-text-secondary dark:text-dark-textSecondary mb-8 max-w-2xl mx-auto">
              Join our team of passionate professionals and help us create extraordinary architectural solutions
            </p>
            <Link
              to="/career"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary rounded-lg font-body font-semibold hover:bg-accent-alt transition-all duration-300 hover:scale-105"
            >
              Join Our Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
  );
};

export default TeamMembers;