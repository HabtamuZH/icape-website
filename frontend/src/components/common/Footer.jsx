import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-secondary p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <nav>
          <h6 className="footer-title text-accent font-heading text-lg font-semibold mb-4">
            Services
          </h6>
          <Link className="link link-hover text-secondary font-body block mb-2" to="/services">
            Architectural Design
          </Link>
          <Link className="link link-hover text-secondary font-body block mb-2" to="/services">
            Urban Planning
          </Link>
          <Link className="link link-hover text-secondary font-body block" to="/services">
            Interior Design
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title text-accent font-heading text-lg font-semibold mb-4">
            About Us
          </h6>
          <Link className="link link-hover text-secondary font-body block mb-2" to="/about">
            Our Journey
          </Link>
          <Link className="link link-hover text-secondary font-body block mb-2" to="/about">
            Our Mission
          </Link>
          <Link className="link link-hover text-secondary font-body block mb-2" to="/about">
            Our Vision
          </Link>
          <Link className="link link-hover text-secondary font-body block" to="/about">
            Meet Our Team
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title text-accent font-heading text-lg font-semibold mb-4">
            Legal
          </h6>
          <Link className="link link-hover text-secondary font-body block mb-2" to="">
            Terms of Use
          </Link>
          <Link className="link link-hover text-secondary font-body block mb-2" to="">
            Privacy Policy
          </Link>
          <Link className="link link-hover text-secondary font-body block" to="">
            Cookie Policy
          </Link>
        </nav>
      </footer>
      <footer className="bg-primary text-secondary border-t border-border px-10 py-4 flex flex-col md:flex-row justify-between items-center">
        <aside className="flex items-center mb-4 md:mb-0">
          <img src="/images/icape_Logo.png" className="h-20 mr-4" alt="iCAPE Logo" />
          <p className="text-secondary font-body">
            iCAPE Consulting
            <br />
            Architecture + Planning + Engineering
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="w-6 h-6 text-secondary hover:text-accent transition duration-300" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6 text-secondary hover:text-accent transition duration-300" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6 text-secondary hover:text-accent transition duration-300" />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;