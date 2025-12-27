import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import clsx from "clsx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Navigation links configuration
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Career", path: "/career" },
    { name: "Blogs", path: "/blogs" }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-secondary-light/90 dark:bg-dark-surface/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex flex-col justify-center group"
            >
              <span className="text-xl md:text-2xl font-heading font-bold text-primary dark:text-dark-text tracking-tight">
                iCAPE
              </span>
              <span className="text-[10px] md:text-xs text-text-secondary dark:text-dark-textSecondary font-body tracking-wider uppercase">
                Architecture + Planning
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={clsx(
                    "px-4 py-2 text-sm font-body font-medium rounded-lg transition-all duration-200",
                    location.pathname === link.path
                      ? "text-primary dark:text-dark-text bg-secondary dark:bg-dark-bg"
                      : "text-text-secondary dark:text-dark-textSecondary hover:text-primary dark:hover:text-dark-text hover:bg-secondary/50 dark:hover:bg-dark-bg/50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <ThemeToggle />
              <Link
                to="/contactus"
                className="px-6 py-2.5 text-sm font-body font-medium text-secondary-light dark:text-primary bg-primary dark:bg-accent rounded-lg hover:bg-primary-light dark:hover:bg-accent-alt transition-all duration-200 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-3 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-primary dark:text-dark-text hover:bg-secondary dark:hover:bg-dark-bg rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-primary/50 dark:bg-dark-bg/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={clsx(
          "fixed top-16 md:top-20 right-0 bottom-0 w-full max-w-sm bg-secondary-light dark:bg-dark-surface z-40 lg:hidden transition-transform duration-300 shadow-2xl",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6 overflow-y-auto">
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  "px-4 py-3 text-base font-body font-medium rounded-lg transition-all duration-200",
                  location.pathname === link.path
                    ? "text-primary dark:text-dark-text bg-secondary dark:bg-dark-bg"
                    : "text-text-secondary dark:text-dark-textSecondary hover:text-primary dark:hover:text-dark-text hover:bg-secondary/50 dark:hover:bg-dark-bg/50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Contact Button */}
          <div className="mt-auto pt-6 border-t border-border dark:border-dark-border">
            <Link
              to="/contactus"
              className="block w-full px-6 py-3 text-center text-sm font-body font-medium text-secondary-light dark:text-primary bg-primary dark:bg-accent rounded-lg hover:bg-primary-light dark:hover:bg-accent-alt transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
