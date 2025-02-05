import React, {useState} from "react"
import {FaEnvelope, FaGoogle, FaLock} from "react-icons/fa"
import {Link} from "react-router-dom"
import axios from "axios"
import {auth, provider} from "../../src/firebase" // Adjust the import path
import { signInWithPopup } from "firebase/auth"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })


const handleGoogleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    console.log("Google Sign-in Success:", user)
    localStorage.setItem("token", user.accessToken)
  } catch (error) {
    console.error("Google Sign-in Error:", error)
  }
}


  // const handleChange = (e) => {
  //   const {name, value} = e.target
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value
  //   }))
  // }

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log("Data being sent:", formData) // Log the data before sending
      const res = await axios.post(
        "https://5001-idx-icape-websitegit-1738576899242.cluster-23wp6v3w4jhzmwncf7crloq3kw.cloudworkstations.dev/api/auth/login",
        formData
      )
      console.log("Success login", res.data) // Log the successful response
      // Store token.
      localStorage.setItem("token", res.data.token)
      // alert("Success login") //show a pop up
    } catch (err) {
      console.error("Error", err?.response?.data) // log the specific error sent by the backend.
      // alert(err?.response?.data.message) //show a pop up
    }
  }

  return (
    <div className='flex w-[80%] h-[100vh] m-24 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-full'>
      <div
        className='hidden bg-cover lg:block lg:w-5/6'
        style={{
          backgroundImage: "url('/images/image1.jpg')"
        }}
      ></div>

      <div className='w-screen px-6 py-8 md:px-8 lg:w-1/2'>
        <div className='flex justify-center mx-auto'>
          <img
            className='w-auto h-7 sm:h-8'
            src='../../images/icape_Logo.png'
            alt='Logo'
          />
        </div>
        <p className='mt-3 text-xl text-center text-gray-600'>Welcome back!</p>
        <button
          onClick={handleGoogleSignIn}
          type='button'
          className='flex items-center justify-center mx-auto mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50'
        >
          <div className='px-4'>
            <FaGoogle className='w-6 h-6 text-[#4285F4]' />
          </div>

          <span className='w-5/6 px-4 py-3 font-bold text-center'>
            Sign in with Google
          </span>
        </button>

        <div className='flex items-center justify-between mt-4'>
          <span className='w-1/5 border-b lg:w-1/4'></span>

          <a
            href='#'
            className='text-xs text-center text-blue-700 uppercase hover:underline'
          >
            or login with email
          </a>

          <span className='w-1/5 border-b lg:w-1/4'></span>
        </div>

        <form className='mt-4' onSubmit={handleSubmit}>
          <div className='mt-4'>
            <label
              className='block mb-2 text-sm font-medium text-gray-600 '
              htmlFor='LoggingEmailAddress'
            >
              Email Address
            </label>
            <div className='relative flex items-center'>
              <FaEnvelope className='absolute left-3 text-gray-400' size={20} />
              <input
                id='LoggingEmailAddress'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Email address'
                className='w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none'
              />
            </div>
          </div>

          <div className='mt-4'>
            <div className='flex justify-between'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='loggingPassword'
              >
                Password
              </label>
              <a href='#' className='text-xs text-blue-700  hover:underline'>
                Forget Password?
              </a>
            </div>
            <div className='relative flex items-center'>
              <FaLock className='absolute left-3 text-gray-400' size={20} />
              <input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                placeholder='Password'
                className='w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none'
              />
            </div>
          </div>

          <div className='mt-6'>
            <button
              type='submit'
              className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white bg-primary hover:bg-[#0e62ff] capitalize transition-colors duration-300 transform rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
            >
              Sign In
            </button>
          </div>
        </form>
        <div className='flex items-center justify-between mt-4'>
          <span className='w-[10%] border-b  md:w-1/4 block'></span>
          <p className='text-sm text-nowrap text-black'>
            Don`t have an account?
            <Link
              to='/signup'
              className='text-blue-700 hover:underline ps-1  dark:text-blue-400'
            >
              Sign Up
            </Link>
          </p>
          <span className='w-[10%] border-b md:w-1/4'></span>
        </div>
      </div>
    </div>
  )
}

export default Login
