import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    projects: [
      { name: "All Projects", path: "/projects" },
      { name: "Residential", path: "/projects" },
      { name: "Commercial", path: "/projects" },
      { name: "Urban Planning", path: "/projects" },
    ],
    services: [
      { name: "Architectural Design", path: "/services/architectural-design" },
      { name: "Urban Planning", path: "/services/urban-design-and-planning" },
      { name: "Engineering Design", path: "/services/constract-admin-and-engineering-design" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/about/teams" },
      { name: "Careers", path: "/career" },
      { name: "Blog", path: "/blogs" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/15WcUqAadX/", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/IcapeConsulting", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/icape-consulting", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-white/5 dark:bg-white/5 backdrop-blur-xl border-t border-white/10 dark:border-white/5">
      <div className="container-custom py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary dark:text-dark-text">
                iCAPE
              </h3>
              <p className="text-xs text-text-secondary dark:text-dark-textSecondary tracking-wider uppercase">
                Architecture + Planning
              </p>
            </Link>
            <p className="text-sm md:text-base font-body text-text-secondary dark:text-dark-textSecondary mb-6 max-w-sm leading-relaxed">
              Crafting innovative architectural solutions that inspire, endure, and harmonize with the environment.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="tel:+251913263030" 
                className="flex items-center gap-3 text-sm font-body text-text-secondary dark:text-dark-textSecondary hover:text-accent dark:hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+251 913 263 030</span>
              </a>
              <a 
                href="mailto:info@icape.studio" 
                className="flex items-center gap-3 text-sm font-body text-text-secondary dark:text-dark-textSecondary hover:text-accent dark:hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@icape.studio</span>
              </a>
              <div className="flex items-start gap-3 text-sm font-body text-text-secondary dark:text-dark-textSecondary">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Equatorial Guinea St, Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Projects Links */}
          <div>
            <h4 className="text-sm font-heading font-bold text-primary dark:text-dark-text uppercase tracking-wider mb-4">
              Projects
            </h4>
            <ul className="space-y-3">
              {footerLinks.projects.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm font-body text-text-secondary dark:text-dark-textSecondary hover:text-accent dark:hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-heading font-bold text-primary dark:text-dark-text uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm font-body text-text-secondary dark:text-dark-textSecondary hover:text-accent dark:hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-heading font-bold text-primary dark:text-dark-text uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm font-body text-text-secondary dark:text-dark-textSecondary hover:text-accent dark:hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border dark:bg-dark-border mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-sm font-body text-text-secondary dark:text-dark-textSecondary">
            © {currentYear} iCAPE. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-secondary-dark dark:bg-dark-surface flex items-center justify-center text-text-secondary dark:text-dark-textSecondary hover:bg-accent hover:text-primary dark:hover:bg-accent dark:hover:text-primary transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;