import { useEffect } from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import {Link} from "react-router-dom";
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
          <Link className="link link-hover text-secondary" to={"/services"}>Architectural Design</Link>
          <Link className="link link-hover text-secondary"to={"/services"}>Urban Planning</Link>
          <Link className="link link-hover text-secondary" to={"/services"}>Interior Design</Link>
        </nav>
        <nav>
          <h6 className="footer-title text-accent font-semibold">About us</h6>
          <Link className="link link-hover text-secondary "to={"/about"}>Our Journey</Link>
          <Link className="link link-hover text-secondary" to={"/about"}>Our Mission</Link>
          <Link className="link link-hover text-secondary"to={"/about"}>Our Vision</Link>
          <Link className="link link-hover text-secondary"to={"/about"}>Meet Our Team</Link>
        </nav>
        <nav>
          <h6 className="footer-title text-accent font-semibold">Legal</h6>
          <Link className="link link-hover text-secondary" to={""}>Terms of use</Link>
          <Link className="link link-hover text-secondary" to={""}>Privacy policy</Link>
          <Link className="link link-hover text-secondary"to={""}>Cookie policy</Link>
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
