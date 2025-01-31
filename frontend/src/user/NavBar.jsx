import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Notifications from "./Notifications";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo and Brand Name */}
        <Link
          to="/user"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            PMS
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <button
            onClick={toggleNotifications}
            className=" bg-gray-100 dark:bg-gray-800 p-1 rounded-full text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
          >
            <BellIcon className="h-6 w-6" aria-hidden="true" />
            {isNotificationsOpen && <Notifications />}
          </button>
          <Menu as="div" className="ml-3 relative">
            <div>
              <Menu.Button className="bg-gray-100 dark:bg-gray-800 flex text-sm rounded-full focus:outline-none">
                <span className="sr-only">Open user menu</span>
                <UserCircleIcon
                  className="h-8 w-8 text-gray-900 dark:text-white"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/user/profile"
                      className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 ${
                        active ? "bg-gray-100 dark:bg-gray-700" : ""
                      }`}
                    >
                      profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/user/request"
                      className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 ${
                        active ? "bg-gray-100 dark:bg-gray-700" : ""
                      }`}
                    >
                      Send Request
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="request-status"
                      className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 ${
                        active ? "bg-gray-100 dark:bg-gray-700" : ""
                      }`}
                    >
                      Reauest Status
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/logout"
                      className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 ${
                        active ? "bg-gray-100 dark:bg-gray-700" : ""
                      }`}
                    >
                      Log out
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        {/* Navigation Links */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/user"
                className="block py-2 px-3 text-white bg-[var(--color-btn-default)] rounded-sm md:bg-transparent md:text-[var(--color-btn-default)] md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/user#how-to"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[var(--color-btn-default)] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                How to
              </Link>
            </li>
            <li>
              <Link
                to="/user#faq"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[var(--color-btn-default)] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/user#support"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[var(--color-btn-default)] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
