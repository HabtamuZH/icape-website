import React from "react"
import {Link} from "react-scroll"

const Page = () => {
  return (
    <div className='min-h-screen bg-secondary  '>
      {/* Navigation */}
      <nav className='fixed top-44 w-full bg-light p-4 shadow-md'>
        <ul className='flex space-x-6 justify-center text-primary font-body'>
          <li>
            <Link
              to='home'
              smooth={true}
              duration={500}
              className='hover:text-accent transition-colors cursor-pointer'
              activeClass='text-accent'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='about'
              smooth={true}
              duration={500}
              className='hover:text-accent transition-colors cursor-pointer'
              activeClass='text-accent'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='services'
              smooth={true}
              duration={500}
              className='hover:text-accent transition-colors cursor-pointer'
              activeClass='text-accent'
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              smooth={true}
              duration={500}
              className='hover:text-accent transition-colors cursor-pointer'
              activeClass='text-accent'
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Sections */}
      <div className='pt-20'>
        <div name='home' className='h-screen flex items-center justify-center'>
          <h1 className='text-4xl font-heading text-primary'>Home Section</h1>
        </div>
        <div
          name='about'
          className='h-screen flex items-center justify-center bg-light'
        >
          <h1 className='text-4xl font-heading text-primary'>About Section</h1>
        </div>
        <div
          name='services'
          className='h-screen flex items-center justify-center'
        >
          <h1 className='text-4xl font-heading text-primary'>
            Services Section
          </h1>
        </div>
        <div
          name='contact'
          className='h-screen flex items-center justify-center bg-light'
        >
          <h1 className='text-4xl font-heading text-primary'>
            Contact Section
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Page
