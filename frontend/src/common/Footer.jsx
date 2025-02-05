// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="text-[var(--color-text-p)] rounded-2xl border-t-gray-500 bg-gray-200 body-font font-poppins">
//       <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
//         {/* Logo and Brand Section */}
//         <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
//           <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-[var(--color-text-h1)]">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="w-10 h-10 text-white p-2 bg-[var(--color-btn-default)] rounded-full"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//             </svg>
//             <span className="ml-3 text-xl">PMS</span>
//           </a>
//           <p className="mt-2 text-sm text-[var(--color-text-p)]">
//             Streamline your partnerships with ease.
//           </p>
//         </div>

//         {/* Footer Links Section */}
//         <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
//           {/* Column 1 */}
//           <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//             <h2 className="title-font font-medium text-[var(--color-text-h1)] tracking-widest text-sm mb-3">
//               CATEGORIES
//             </h2>
//             <nav className="list-none mb-10">
//               <li>
//                 <a href="#" className="text-[var(--color-text-p)] hover:text-[var(--color-text-600)]">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-[var(--color-text-p)] hover:text-[var(--color-text-600)]">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-[var(--color-text-p)] hover:text-[var(--color-text-600)]">
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-[var(--color-text-p)] hover:text-[var(--color-text-600)]">
//                   Contact
//                 </a>
//               </li>
//             </nav>
//           </div>

//           {/* Column 2 */}
//           <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//             <h2 className="title-font font-medium text-[var(--color-text-h1)] tracking-widest text-sm mb-3">
//               RESOURCES
//             </h2>
//             <nav className="list-none mb-10">
//               <li>
//                 <a href="#" className="text-[var(--color-text-p)] hover:text-[var(--color-text-600)]">
//                   Documentation
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-[var(--color-text-p)] hover:text-[var(--color-text-600)]">
//                   Guides
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-[var(--color-text-p)] hover:text-[var(--color-text-600)]">
//                   Case Studies
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-[var(--color-text-p)] hover:text-[var(--color-text-600)]">
//                   FAQs
//                 </a>
//               </li>
//             </nav>
//           </div>

//           {/* Column 3 */}
//           <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//             <h2 className="title-font font-medium text-[var(--color-text-h1)] tracking-widest text-sm mb-3">
//               LEGAL
//             </h2>
//             <nav className="list-none mb-10">
//               <li>
//                 <a href="#" className="text-[var(--color-text-p)] hover:text-[var(--color-text-600)]">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-[var(--color-text-p)] hover:text-[var(--color-text-600)]">
//                   Terms of Service
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-[var(--color-text-p)] hover:text-[var(--color-text-600)]">
//                   Cookie Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-[var(--color-text-p)] hover:text-[var(--color-text-600)]">
//                   Licensing
//                 </a>
//               </li>
//             </nav>
//           </div>

//           {/* Column 4 */}
//           <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//             <h2 className="title-font font-medium text-[var(--color-text-h1)] tracking-widest text-sm mb-3">
//               SUPPORT
//             </h2>
//             <nav className="list-none mb-10">
//               <li>
//                 <a href="#" className="text-[var(--color-text-p)] hover:text-[var(--color-text-600)]">
//                   Contact Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-[var(--color-text-p)] hover:text-[var(--color-text-600)]">
//                   Help Center
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-[var(--color-text-p)] hover:text-[var(--color-text-600)]">
//                   Status
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-[var(--color-text-p)] hover:text-[var(--color-text-600)]">
//                   Report an Issue
//                 </a>
//               </li>
//             </nav>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="bg-[var(--color-bg-color)]">
//         <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
//           <p className="text-[var(--color-text-p)] text-sm text-center sm:text-left">
//             © {new Date().getFullYear()} Partnership Management System —
//             <a
//               href="https://example.com"
//               rel="noopener noreferrer"
//               className="text-[var(--color-text-600)] ml-1"
//               target="_blank"
//             >
//               @example
//             </a>
//           </p>
//           <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
//             {/* Social Media Icons */}
//             <a href="#" className="text-[var(--color-text-p)] hover:text-[var(--color-text-600)]">
//               <svg
//                 fill="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//               </svg>
//             </a>
//             <a href="#" className="ml-3 text-[var(--color-text-p)] hover:text-[var(--color-text-600)]">
//               <svg
//                 fill="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//               </svg>
//             </a>
//             <a href="#" className="ml-3 text-[var(--color-text-p)] hover:text-[var(--color-text-600)]">
//               <svg
//                 fill="none"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//               >
//                 <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
//                 <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
//               </svg>
//             </a>
//             <a href="#" className="ml-3 text-[var(--color-text-p)] hover:text-[var(--color-text-600)]">
//               <svg
//                 fill="currentColor"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="0"
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   stroke="none"
//                   d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
//                 ></path>
//                 <circle cx="4" cy="4" r="2" stroke="none"></circle>
//               </svg>
//             </a>
//           </span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-[#37AFE1] to-[#E5D9F2]'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <a href='/' className='flex flex-col items-center justify-center'>
              <img
                src='/images/icape_Logo.png'
                className='h-8 me-3 bg-white'
                alt='iCAPE Logo'
              />
              <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-black'>
                iCAPE Engineer
              </span>
            </a>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black'>
                Resources
              </h2>
              <ul className='text-gray-500 dark:text-gray-500 font-medium'>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    iCAPE Documentation
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    iCAPE Technical Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black'>
                Follow us
              </h2>
              <ul className='text-gray-500 dark:text-gray-500 font-medium'>
                <li className='mb-4'>
                  <a
                    href='https://github.com/icape'
                    className='hover:underline '
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href='https://discord.gg/icape'
                    className='hover:underline'
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black'>
                Legal
              </h2>
              <ul className='text-gray-500 dark:text-gray-500 font-medium'>
                <li className='mb-4'>
                  <a href='/privacy-policy' className='hover:underline'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='/terms-conditions' className='hover:underline'>
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-900 sm:text-center dark:text-gray-900'>
            © 2025{" "}
            <a href='/' className='hover:underline'>
              iCAPE™
            </a>
            . All Rights Reserved.
          </span>
          <div className='flex mt-4 sm:justify-center sm:mt-0'>
            <a
              href='https://www.facebook.com/icape'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-blue-700'
            >
              <svg
                className='w-4 h-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 8 19'
              >
                <path
                  fillRule='evenodd'
                  d='M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='sr-only'>Facebook page</span>
            </a>
            <a
              href='https://www.discord.com/icape'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-blue-700 ms-5'
            >
              <svg
                className='w-4 h-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 21 16'
              >
                <path d='M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z' />
              </svg>
              <span className='sr-only'>Discord community</span>
            </a>
            <a
              href='https://twitter.com/icape'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-blue-700 ms-5'
            >
              <svg
                className='w-4 h-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 17'
              >
                <path
                  fillRule='evenodd'
                  d='M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='sr-only'>Twitter page</span>
            </a>
            <a
              href='https://github.com/icape'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-blue-700 ms-5'
            >
              <svg
                className='w-4 h-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 21 21'
              >
                <path
                  fillRule='evenodd'
                  d='M10.5 0C4.695 0 0 4.695 0 10.5S4.695 21 10.5 21c5.531 0 10.5-4.695 10.5-10.5S16.031 0 10.5 0zM13.5 15h-2.385v-4.218c0-1.017-.393-1.704-1.362-1.704-.734 0-1.163.495-1.362.972-.07.174-.088.416-.088.662v4.25h-2.388v-7h2.388v1.08c.296-.458.81-.972 1.771-.972 1.29 0 2.187.836 2.187 2.327v3.565z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='sr-only'>GitHub page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
