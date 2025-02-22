import {useState, useEffect} from "react"
import ScrollReveal from "scrollreveal"
import applicationService from "../../../services/application-service"
import {toast} from "react-toastify"

const CareerApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    opportunityType: "Professional Career Opportunities",
    department: "",
    reason: "",
    skills: "",
    availability: "",
    cv: null
  })

  useEffect(() => {
    const sr = ScrollReveal({
      reset: false,
      duration: 800,
      easing: "ease-out"
    })

    sr.reveal(".form-header", {origin: "top", distance: "40px", delay: 200})
    sr.reveal(".form-field", {
      origin: "bottom",
      distance: "30px",
      delay: 300,
      interval: 100
    })

    return () => sr.destroy()
  }, [])

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (
      file &&
      file.type === "application/pdf" &&
      file.size <= 5 * 1024 * 1024
    ) {
      setFormData({...formData, cv: file})
    } else {
      toast.error("Please upload a valid PDF file (Max 5MB)")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formDataToSend = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value)
    })

    try {
      const res = await applicationService.create(formDataToSend)
      console.log("Success:", res.data)
      toast.success("Career application submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      })
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        opportunityType: "Professional Career Opportunities",
        department: "",
        reason: "",
        skills: "",
        availability: "",
        cv: null
      })
    } catch (error) {
      toast.error("Failed to submit application")
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      )
    }
  }

  return (
    <section className='py-8 sm:py-12 md:py-16 bg-secondary min-h-screen flex items-center justify-center'>
      <div className='w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto bg-light p-4 sm:p-6 md:p-8 shadow-lg rounded-xl border border-border mt-6 sm:mt-10'>
        {/* Header */}
        <div className='form-header text-center mb-6 sm:mb-8'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-primary mb-4 sm:mb-6'>
            Career Application - iCAPE
          </h2>
          <p className='text-primary font-body text-sm sm:text-base md:text-lg'>
            Apply for our Professional Career Opportunities and join our
            innovative team.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
          {/* Full Name */}
          <div className='form-field'>
            <label
              htmlFor='fullName'
              className='block text-primary font-body font-medium mb-2 text-sm sm:text-base'
            >
              Full Name
            </label>
            <input
              type='text'
              name='fullName'
              placeholder='Full Name'
              value={formData.fullName}
              onChange={handleChange}
              className='w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-border bg-light text-primary font-body text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
              required
            />
          </div>

          {/* Email */}
          <div className='form-field'>
            <label
              htmlFor='email'
              className='block text-primary font-body font-medium mb-2 text-sm sm:text-base'
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-border bg-light text-primary font-body text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
              required
            />
          </div>

          {/* Phone Number */}
          <div className='form-field'>
            <label
              htmlFor='phoneNumber'
              className='block text-primary font-body font-medium mb-2 text-sm sm:text-base'
            >
              Phone Number
            </label>
            <input
              type='tel'
              name='phoneNumber'
              placeholder='Phone Number'
              value={formData.phoneNumber}
              onChange={handleChange}
              className='w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-border bg-light text-primary font-body text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
              required
            />
          </div>

          {/* Department */}
          <div className='form-field'>
            <label
              htmlFor='department'
              className='block text-primary font-body font-medium mb-2 text-sm sm:text-base'
            >
              Department
            </label>
            <select
              name='department'
              value={formData.department}
              onChange={handleChange}
              className='w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-border bg-light text-primary font-body text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
              required
            >
              <option value=''>Select Department</option>
              <option value='Engineering'>Engineering</option>
              <option value='Product Development'>Product Development</option>
              <option value='Business Operations'>Business Operations</option>
            </select>
          </div>

          {/* Reason */}
          <div className='form-field'>
            <label
              htmlFor='reason'
              className='block text-primary font-body font-medium mb-2 text-sm sm:text-base'
            >
              Why do you want to join iCAPE?
            </label>
            <textarea
              name='reason'
              placeholder='Tell us why you’re excited to contribute...'
              value={formData.reason}
              onChange={handleChange}
              className='w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-border bg-light text-primary font-body text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
              rows='3 sm:rows-4'
              required
            />
          </div>

          {/* Skills */}
          <div className='form-field'>
            <label
              htmlFor='skills'
              className='block text-primary font-body font-medium mb-2 text-sm sm:text-base'
            >
              Relevant Skills & Experience
            </label>
            <textarea
              name='skills'
              placeholder='List your skills and experience...'
              value={formData.skills}
              onChange={handleChange}
              className='w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-border bg-light text-primary font-body text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
              rows='3 sm:rows-4'
              required
            />
          </div>

          {/* Availability */}
          <div className='form-field'>
            <label
              htmlFor='availability'
              className='block text-primary font-body font-medium mb-2 text-sm sm:text-base'
            >
              Availability
            </label>
            <select
              name='availability'
              value={formData.availability}
              onChange={handleChange}
              className='w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-border bg-light text-primary font-body text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
              required
            >
              <option value=''>Select Availability</option>
              <option value='Full-time'>Full-time</option>
              <option value='Part-time'>Part-time</option>
            </select>
          </div>

          {/* CV Upload */}
          <div className='form-field'>
            <label
              htmlFor='cv'
              className='block text-primary font-body font-medium mb-2 text-sm sm:text-base'
            >
              Upload CV (PDF, Max 5MB)
            </label>
            <input
              type='file'
              accept='application/pdf'
              onChange={handleFileChange}
              className='w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-border bg-light text-primary font-body text-sm sm:text-base file:mr-4 file:py-1 sm:file:py-2 file:px-3 sm:file:px-4 file:rounded-md file:border-0 file:text-sm file:font-body file:bg-accent file:text-light hover:file:bg-opacity-80'
              required
            />
          </div>

          {/* Submit Button */}
          <div className='form-field'>
            <button
              type='submit'
              className='w-full px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg font-body font-medium text-light bg-accent rounded-md shadow-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all duration-200'
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default CareerApplicationForm
