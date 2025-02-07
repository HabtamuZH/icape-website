import React, {useState} from "react"
import {Link} from "react-router-dom"
import {Menu, Transition} from "@headlessui/react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline"
import {MdArrowDropDown} from "react-icons/md" // React Icons for the dropdown

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='fixed top-0 w-full bg-gradient-to-r from-[#37AFE1] to-[#E5D9F2] text-textColor shadow-md z-50 py-1'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1'>
        {/* Logo */}
        <Link to='/' className='flex items-center space-x-3'>
          <span className='text-2xl font-semibold text-gray-900 dark:text-white'>
            iCAPE
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-8 border-2 border-zinc-900 rounded-lg py-1 px-2'>
          <Link to='/about' className='text-gray-900 hover:text-blue-500'>
            About
          </Link>
          {/* Resources Dropdown */}
          <Menu as='div' className='relative'>
            <Menu.Button className='text-gray-900 hover:text-blue-500 flex items-center'>
              Resources <MdArrowDropDown className='ml-1' />
            </Menu.Button>
            <Transition
              as={React.Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <Menu.Item>
                  {({active}) => (
                    <Link
                      to='/faqs'
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100 dark:bg-gray-200" : ""
                      }`}
                    >
                      FAQs
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({active}) => (
                    <Link
                      to='/howto'
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100 dark:bg-gray-200" : ""
                      }`}
                    >
                      How To
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({active}) => (
                    <Link
                      to='/blogs'
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100 dark:bg-gray-200" : ""
                      }`}
                    >
                      Blogs
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({active}) => (
                    <Link
                      to='/services'
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100 dark:bg-gray-200" : ""
                      }`}
                    >
                      Services
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          <Link to='/projects' className='text-gray-900 hover:text-blue-500'>
            Projects
          </Link>
          <Link to='/contact' className='text-gray-900 hover:text-blue-500'>
            Contact
          </Link>
        </div>

        {/* Signup Button */}
        <div className='flex items-center space-x-2'>
          <Link
            to='/signup'
            className='bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 transition duration-200'
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='md:hidden p-2 rounded-md focus:outline-none'
        >
          {isMenuOpen ? (
            <XMarkIcon className='h-6 w-6' />
          ) : (
            <Bars3Icon className='h-6 w-6' />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden flex flex-col space-y-4 p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-600'>
          <Link to='/about' className='text-gray-700 dark:text-gray-300'>
            About
          </Link>
          <Link to='/services' className='text-gray-700 dark:text-gray-300'>
            Services
          </Link>
          <Link to='/projects' className='text-gray-700 dark:text-gray-300'>
            Projects
          </Link>
          <Link to='/contact' className='text-gray-700 dark:text-gray-300'>
            Contact
          </Link>
          {/* Mobile Resources Dropdown */}
          <div className='flex items-center justify-between'>
            <button className='text-gray-700 dark:text-gray-300'>
              Resources <MdArrowDropDown />
            </button>
            <div className='flex flex-col space-y-2'>
              <Link to='/faqs' className='text-gray-700 dark:text-gray-300'>
                FAQs
              </Link>
              <Link to='/howto' className='text-gray-700 dark:text-gray-300'>
                How To
              </Link>
              <Link to='/blogs' className='text-gray-700 dark:text-gray-300'>
                Blogs
              </Link>
              <Link to='/services' className='text-gray-700 dark:text-gray-300'>
                Services
              </Link>
            </div>
          </div>

          <Link
            to='/signup'
            className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200'
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  )
}

export default NavBar
