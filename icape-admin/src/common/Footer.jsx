import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-secondary p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <nav>
          <h6 className="footer-title text-accent font-heading text-lg font-semibold mb-4">
            Projects
          </h6>
          <Link className="link link-hover text-secondary font-body block mb-2" to="/projects">
          Architectural Design
          </Link>
          <Link className="link link-hover text-secondary font-body block mb-2" to="/projects">
          Urban Design And Planning
          </Link>
          <Link className="link link-hover text-secondary font-body block" to="/projects">
          Engineering Design
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title text-accent font-heading text-lg font-semibold mb-4">
            Services
          </h6>
          <Link className="link link-hover text-secondary font-body block mb-2" to="/services/architectural-design">
          Architectural Design, Design Department
          </Link>
          <Link className="link link-hover text-secondary font-body block mb-2" to="/services/urban-design-and-planning">
          Urban Design And Planning
          </Link>
          <Link className="link link-hover text-secondary font-body block" to="/services/contract-administration-and-engineering-design">
          Contract Administration and Engineering Design
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title text-accent font-heading text-lg font-semibold mb-4">
            About Us
          </h6>
          <Link className="link link-hover text-secondary font-body block mb-2" to="/about/journey">
            Our Journey
          </Link>
          <Link className="link link-hover text-secondary font-body block mb-2" to="/about/mission">
            Our Mission
          </Link>
          <Link className="link link-hover text-secondary font-body block mb-2" to="about/vision">
            Our Vision
          </Link>
          <Link className="link link-hover text-secondary font-body block" to="about/teams">
            Meet Our Team
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
              href="https://www.linkedin.com/in/icape-consulting"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaLinkedin className="w-6 h-6 text-secondary hover:text-accent transition duration-300" />
            </a>
            <a
              href="https://x.com/IcapeConsulting"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="w-6 h-6 text-secondary hover:text-accent transition duration-300" />
            </a>
            <a
              href="https://www.facebook.com/share/15WcUqAadX/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6 text-secondary hover:text-accent transition duration-300" />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;