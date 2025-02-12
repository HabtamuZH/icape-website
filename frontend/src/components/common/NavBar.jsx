import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import ScrollReveal from "scrollreveal";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  // Navigation links configuration
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    {
      name: "Projects",
      dropdown: [
        { name: "Completed", path: "/projects/completed" },
        { name: "Ongoing", path: "/projects/ongoing" },
        { name: "Upcoming", path: "/projects/upcoming" },
        { name: "Admin", path: "/admin" },
      ],
    },
    { name: "Blogs", path: "/blog" },
  ];

  // Close dropdowns when clicking outside
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setActiveDropdown(null);
      setIsMenuOpen(false);
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
      className="navbar bg-white/10 backdrop-blur-[34px] shadow-lg fixed top-4 left-4 right-4 w-[calc(100%-2rem)] z-50 rounded-lg flex justify-between px-6 py-3 items-center border border-white/20"
    >
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-white mix-blend-difference">
        iCAPE
      </Link>

      {/* Hamburger Menu (Mobile) */}
      <button
        className="lg:hidden text-white text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <IoClose /> : <FaBars />}
      </button>

      {/* Navigation (Desktop & Mobile) */}
      <div
        className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none p-5 lg:p-0 flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 rounded-lg transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden lg:flex"
        }`}
      >
        <ul className="lg:flex space-y-4 lg:space-y-0 lg:space-x-6 w-full lg:w-auto">
          {navLinks.map((link, index) =>
            link.dropdown ? (
              <li
                key={index}
                className="relative text-black bg-gray-100 rounded-md px-3 py-2"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
                onClick={() =>
                  setActiveDropdown(activeDropdown === link.name ? null : link.name)
                }
              >
                <button className="w-full flex justify-between items-center">
                  {link.name} ▾
                </button>
                {activeDropdown === link.name && (
                  <ul className="absolute left-0 top-8 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 z-50 border border-gray-200">
                    {link.dropdown.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subLink.path}
                          className="block px-4 py-2 hover:bg-gray-300 active:bg-gray-100 text-gray-700 rounded-md transition-colors duration-300"
                        >
                          {subLink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={index}>
                <Link
                  to={link.path}
                  className="text-black !bg-gray-100 hover:!bg-gray-300 active:bg-gray-200 transition-colors duration-300 px-3 py-2 rounded-md block w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Contact Button (Mobile & Desktop) */}
        { isMenuOpen ? <Link
        to="/contactus"
        className="btn btn-primary px-6 py-2 text-white font-semibold border-none rounded-full bg-accent hover:bg-primary transition duration-300 w-full lg:w-auto"
        >
        Contact Us
        </Link> : <></>}
      </div>
      <div className="hidden lg:block ">
        <Link
          to="/contactus"
          className="btn btn-primary px-6 py-2 text-white font-semibold border-none rounded-full bg-accent hover:bg-primary transition duration-300 "
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
