import {useState} from "react"
import {FaUser, FaEnvelope, FaLock, FaCamera} from "react-icons/fa"
import {Link} from "react-router-dom"
import axios from "axios"

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

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
      const dataToSend = {
        ...formData,
        role: "client" // Add a default role here
      }
      const res = await axios.post(
        "https://5001-idx-icape-websitegit-1738576899242.cluster-23wp6v3w4jhzmwncf7crloq3kw.cloudworkstations.dev/api/auth/register",
        dataToSend
      )
      console.log(res.data) // Log the successful response
    } catch (err) {
      console.error("Error", err?.response?.data) // log the specific error sent by the backend.
    }
  }

  return (
    <div className='flex w-[80%] h-[100vh] m-24 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-full'>
      <div
        className='hidden bg-cover lg:block lg:w-5/6'
        style={{
          backgroundImage: "url(../images/image1.jpg)"
        }}
      ></div>

      <div className='w-full max-w-md p-6 rounded-lg shadow-md'>
        <div className='flex justify-center'>
          <img
            className='w-auto h-8'
            src='../images/icape_Logo.png'
            alt='Logo'
          />
        </div>

        <div className='flex items-center justify-center mt-6'>
          <button className='w-1/3 pb-2 text-center text-gray-800 border-b-2 border-blue-500 text-2xl text-semibold'>
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className='mt-6'>
          <div className='relative flex items-center'>
            <FaUser className='absolute left-3 text-gray-400' size={20} />
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              placeholder='Username'
              className='w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none'
            />
          </div>

          {/* <label className='flex items-center px-3 py-3 mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer'>
            <FaCamera className='text-gray-400' size={20} />
            <span className='mx-3 text-gray-400'>Profile Photo</span>
            <input type='file' onChange={handleFileChange} className='hidden' />
          </label> */}

          <div className='relative flex items-center mt-6'>
            <FaEnvelope className='absolute left-3 text-gray-400' size={20} />
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email address'
              className='w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none'
            />
          </div>

          <div className='relative flex items-center mt-4'>
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
          <div className='relative flex items-center mt-4'>
            <FaLock className='absolute left-3 text-gray-400' size={20} />
            <input
              type='Password'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder='Confirm Password'
              className='w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none'
            />
          </div>

          <button
            type='submit'
            className='w-full px-6 py-3 mt-6 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:ring focus:ring-blue-300 focus:outline-none'
          >
            Sign Up
          </button>

          <div className='mt-4 text-center'>
            <p className='text-sm text-black'>
              Already have an account?
              <Link
                to='/login'
                className='text-blue-700 hover:underline ps-1 dark:text-blue-400'
              >
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
