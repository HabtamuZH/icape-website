import { useEffect } from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import ScrollReveal from "scrollreveal";

const Footer = () => {
  useEffect(() => {
    // ScrollReveal animation for footer sections
    ScrollReveal().reveal(".footer-nav", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      reset: false,
    });

    ScrollReveal().reveal(".footer-logo", {
      origin: "top",
      distance: "50px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <>
      <footer className="footer bg-primary text-secondary p-10 footer-nav">
        <nav>
          <h6 className="footer-title text-accent font-semibold">Services</h6>
          <a className="link link-hover text-secondary">Architectural Design</a>
          <a className="link link-hover text-secondary">Urban Planning</a>
          <a className="link link-hover text-secondary">Interior Design</a>
        </nav>
        <nav>
          <h6 className="footer-title text-accent font-semibold">About us</h6>
          <a className="link link-hover text-secondary">Our Journey</a>
          <a className="link link-hover text-secondary">Our Mission</a>
          <a className="link link-hover text-secondary">Our Vision</a>
          <a className="link link-hover text-secondary">Meet Our Team</a>
        </nav>
        <nav>
          <h6 className="footer-title text-accent font-semibold">Legal</h6>
          <a className="link link-hover text-secondary">Terms of use</a>
          <a className="link link-hover text-secondary">Privacy policy</a>
          <a className="link link-hover text-secondary">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer bg-primary text-base-content border-base-300 border-t px-10 py-4">
        <aside className="footer-logo grid-flow-col items-center">
          <img src="/images/icape_Logo.png" className="h-20" alt="Logo" />
          <p className="text-secondary">
            iCAPE Consulting
            <br />
            Architecture + Planning + Engineering
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-6 h-6 text-secondary hover:text-accent transition duration-300" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-6 h-6 text-secondary hover:text-accent transition duration-300" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
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
