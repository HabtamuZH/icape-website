import React from "react";

const Hero = () => {
  return (
    <section className="bg-[var(--color-bg-color)] dark:bg-gray-900 mt-10">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        {/* Announcement Banner */}
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-[var(--color-text-700)] bg-[var(--color-text-100)] rounded-full dark:bg-gray-800 dark:text-white hover:bg-[var(--color-text-200)] dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="text-xs bg-[var(--color-bg-color-2)] rounded-full text-white px-4 py-1.5 mr-3">
            New
          </span>
          <span className="text-sm font-medium">
            Partnership Management System is live! Explore the features
          </span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>

        {/* Main Heading */}
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[var(--color-text-h1)] md:text-5xl lg:text-6xl dark:text-white">
          Streamline Your Partnerships with Ease
        </h1>

        {/* Subheading */}
        <p className="mb-8 text-lg font-normal text-[var(--color-text-p)] lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Our Partnership Management System helps you manage, track, and grow
          your partnerships efficiently. From onboarding to performance
          evaluation, we’ve got you covered.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[var(--color-btn-default)] hover:bg-[var(--color-btn-hover)] focus:ring-4 focus:ring-[var(--color-btn-active)] dark:focus:ring-primary-900"
          >
            Get Started
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-[var(--color-text-h1)] rounded-lg border border-[var(--color-text-200)] hover:bg-[var(--color-text-100)] focus:ring-4 focus:ring-[var(--color-text-200)] dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              className="mr-2 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Watch Demo
          </a>
        </div>

        {/* Featured Logos */}
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-[var(--color-text-400)] uppercase">
            Trusted by Leading Organizations
          </span>
          <div className="flex flex-wrap justify-center items-center mt-8 text-[var(--color-text-500)] sm:justify-between">
            {/* Add your logos or icons here */}
            <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-[var(--color-text-600)] dark:hover:text-gray-400">
              {/* Logo 1 */}
              <svg
                className="h-8"
                viewBox="0 0 132 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Add your SVG path here */}
              </svg>
            </a>
            <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-[var(--color-text-600)] dark:hover:text-gray-400">
              {/* Logo 2 */}
              <svg
                className="h-11"
                viewBox="0 0 208 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Add your SVG path here */}
              </svg>
            </a>
            <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-[var(--color-text-600)] dark:hover:text-gray-400">
              {/* Logo 3 */}
              <svg
                className="h-11"
                viewBox="0 0 120 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Add your SVG path here */}
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;