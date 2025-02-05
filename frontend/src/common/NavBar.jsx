import {useState, useEffect, useRef} from "react"
import {Link} from "react-router-dom"
import {FaBars, FaUserCircle, FaBell} from "react-icons/fa"

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const notificationCount = 3 // Example notification count

  const navbarRef = useRef(null)
  const notificationsRef = useRef(null)
  const profileRef = useRef(null)

  const toggleProfileDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
    setIsNotificationsOpen(false) // Close notifications when profile opens
  }

  const toggleNotificationsDropdown = () => {
    setIsNotificationsOpen(!isNotificationsOpen)
    setIsDropdownOpen(false) // Close profile when notifications open
  }

  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      !notificationsRef.current.contains(event.target) &&
      !profileRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false)
      setIsNotificationsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav
      ref={navbarRef}
      className='fixed top-0 w-full bg-gradient-to-r from-[#37AFE1] to-[#E5D9F2] text-textColor shadow-md z-50'
    >
      <div className='max-w-screen-xl flex items-center justify-between mx-auto px-6 py-3'>
        {/* Logo */}
        <Link to='/' className='text-2xl font-semibold tracking-wide'>
          iCAPE
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex space-x-6'>
          {["", "About", "Services", "Projects", "Blogs", "Contact"].map(
            (item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className='hover:text-gray-200 transition'
              >
                {item || "Home"}
              </Link>
            )
          )}
        </div>

        {/* Icons & Mobile Menu */}
        <div className='flex items-center space-x-6'>
          {/* Notification Icon */}
          <button
            onClick={toggleNotificationsDropdown}
            className='relative'
            ref={notificationsRef}
          >
            <FaBell size={22} />
            {notificationCount > 0 && (
              <span className='absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full px-1.5'>
                {notificationCount}
              </span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {isNotificationsOpen && (
            <div className='absolute right-16 mt-64 w-60 bg-white text-gray-800 border rounded-lg shadow-md'>
              <ul className='py-2 text-sm'>
                <li className='px-4 py-2 border-b'>New message received!</li>
                <li className='px-4 py-2 border-b'>
                  Project update available.
                </li>
                <li className='px-4 py-2'>New comment on your post.</li>
              </ul>
            </div>
          )}

          {/* Profile Icon */}
          <button onClick={toggleProfileDropdown} ref={profileRef}>
            <FaUserCircle size={26} />
          </button>

          {/* Profile Dropdown */}
          {isDropdownOpen && (
            <div className='absolute right-10 mt-64 w-48 bg-white text-gray-800 border rounded-lg shadow-md'>
              <Link to='/profile' className='block px-4 py-2 hover:bg-gray-100'>
                Profile
              </Link>
              <Link
                to='/settings'
                className='block px-4 py-2 hover:bg-gray-100'
              >
                Settings
              </Link>
              <Link
                to='/messages'
                className='block px-4 py-2 hover:bg-gray-100'
              >
                Messages
              </Link>
              <Link
                to='/download'
                className='block px-4 py-2 hover:bg-gray-100'
              >
                Download
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden'
          >
            <FaBars size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className='md:hidden bg-gray-800 text-white py-3 px-4'>
          {["Home", "About", "Services", "Projects", "Blogs", "Contact"].map(
            (item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className='block py-2 border-b border-gray-600'
              >
                {item}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
