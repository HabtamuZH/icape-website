import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import ScrollReveal from "scrollreveal";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navbarRef = useRef(null);

  // Close dropdowns when clicking outside
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Initialize ScrollReveal animation
  useEffect(() => {
    ScrollReveal().reveal(".navbar", {
      origin: "top",
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="navbar bg-base-100 shadow-md fixed top-4 left-4 right-4 w-[calc(100%-2rem)] z-50 rounded-lg flex justify-between px-6 py-3 items-center"
    >
      <div className="navbar-start flex items-center">
        {/* Mobile Menu Button */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <FaBars size={22} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
          >
            {["Home", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase()}`} className="hover:text-accent">
                  {item}
                </Link>
              </li>
            ))}
            {/* Services Dropdown (Mobile) */}
            <li>
              <details>
                <summary className="hover:text-accent">Services</summary>
                <ul className="p-2 bg-base-100 shadow-md rounded-box">
                  <li><Link to="/services/web-development" className="hover:text-accent">Web Development</Link></li>
                  <li><Link to="/services/ui-ux" className="hover:text-accent">UI/UX Design</Link></li>
                  <li><Link to="/services/mobile-apps" className="hover:text-accent">Mobile App Development</Link></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-xl font-bold text-primary dark:text-white">
          iCAPE
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex navbar-center">
        <ul className="menu menu-horizontal px-1 space-x-6">
          <li><Link to="/" className="hover:text-accent">Home</Link></li>
          <li><Link to="/about" className="hover:text-accent">About</Link></li>

          {/* Services Dropdown (Fixed) */}
          <li
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="hover:text-accent">Services ▾</button>
            {activeDropdown === "services" && (
              <ul className="absolute left-0 top-5 mt-2 w-48 bg-white shadow-lg rounded-box p-2 z-50">
                <li><Link to="/services/web-development" className="block px-4 py-2 hover:bg-gray-100">Web Development</Link></li>
                <li><Link to="/services/ui-ux" className="block px-4 py-2 hover:bg-gray-100">UI/UX Design</Link></li>
                <li><Link to="/services/mobile-apps" className="block px-4 py-2 hover:bg-gray-100">Mobile App Development</Link></li>
              </ul>
            )}
          </li>

          {/* Projects Dropdown (Fixed) */}
          <li
            className="relative"
            onMouseEnter={() => setActiveDropdown("projects")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="hover:text-accent">Projects ▾</button>
            {activeDropdown === "projects" && (
              <ul className="absolute left-0 top-5 mt-2 w-48 bg-white shadow-lg rounded-box p-2 z-50">
                <li><Link to="/projects/completed" className="block px-4 py-2 hover:bg-gray-100">Completed</Link></li>
                <li><Link to="/projects/ongoing" className="block px-4 py-2 hover:bg-gray-100">Ongoing</Link></li>
                <li><Link to="/projects/upcoming" className="block px-4 py-2 hover:bg-gray-100">Upcoming</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/blog" className="hover:text-accent">Blogs</Link></li>
          <li><Link to="/contactus" className="hover:text-accent">Contact</Link></li>
        </ul>
      </div>

      {/* Right Side (CTA Button) */}
      <div className="navbar-end flex items-center">
        <Link
          to="/contactus"
          className="btn btn-primary px-6 py-2 text-white font-semibold rounded-full bg-accent hover:bg-primary transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
