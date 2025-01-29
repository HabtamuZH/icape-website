import React from "react"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='bg-gray-800 p-4'>
      <div className='container mx-auto flex justify-between'>
        <Link to='/' className='text-white text-xl font-bold'>
          ICAPE
        </Link>
        <div className='space-x-4'>
          <Link to='/projects' className='text-white'>
            Projects
          </Link>
          <Link to='/careers' className='text-white'>
            Careers
          </Link>
          <Link to='/contact' className='text-white'>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
