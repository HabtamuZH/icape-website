import {useState} from "react"

export default function ProjectsForm() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    status: "",
    description: ""
  })
  const [images, setImages] = useState([])
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
    validateField(name, value)
  }

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files)
    const validFiles = files.filter((file) => {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        setErrors((prev) => ({
          ...prev,
          images: "Each image must be less than 5MB."
        }))
        return false
      }
      if (!file.type.startsWith("image/")) {
        setErrors((prev) => ({
          ...prev,
          images: "Only image files are allowed."
        }))
        return false
      }
      return true
    })
    const newImages = validFiles.map((file) => URL.createObjectURL(file))
    setImages((prevImages) => [...prevImages, ...newImages])
    if (validFiles.length === files.length) {
      setErrors((prev) => ({...prev, images: ""}))
    }
  }

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index))
  }

  const validateField = (field, value) => {
    let fieldErrors = {...errors}
    if (!value && field !== "images") {
      fieldErrors[field] = `${
        field.charAt(0).toUpperCase() + field.slice(1)
      } is required.`
    } else {
      fieldErrors[field] = ""
    }
    setErrors(fieldErrors)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let isValid = true
    const finalErrors = {}
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        finalErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`
        isValid = false
      }
    })
    if (images.length === 0) {
      finalErrors.images = "At least one image is required."
      isValid = false
    }

    if (isValid) {
      console.log("Project submitted:", {...formData, images})
      // Add your submission logic here (e.g., API call)
    } else {
      setErrors(finalErrors)
    }
  }

  return (
    <section className='py-16 bg-secondary min-h-screen flex items-center justify-center'>
      <div className='bg-light p-6 sm:p-8 mx-auto my-8 rounded-xl w-full max-w-4xl shadow-lg border border-border'>
        <h2 className='mb-6 text-3xl font-heading font-extrabold text-primary text-center'>
          Add a New Project
        </h2>
        <p className='text-primary font-body text-center mb-8'>
          Showcase your latest project with detailed information and vibrant
          images.
        </p>

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {/* Project Name */}
            <div className='sm:col-span-2'>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-body font-medium text-primary'
              >
                Project Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
                placeholder='Enter project name'
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && (
                <span className='text-red-500 text-xs mt-1 block'>
                  {errors.name}
                </span>
              )}
            </div>

            {/* Project Type */}
            <div>
              <label
                htmlFor='type'
                className='block mb-2 text-sm font-body font-medium text-primary'
              >
                Project Type
              </label>
              <input
                type='text'
                name='type'
                id='type'
                className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
                placeholder='e.g., Residential, Commercial'
                value={formData.type}
                onChange={handleChange}
                required
              />
              {errors.type && (
                <span className='text-red-500 text-xs mt-1 block'>
                  {errors.type}
                </span>
              )}
            </div>

            {/* Status */}
            <div>
              <label
                htmlFor='status'
                className='block mb-2 text-sm font-body font-medium text-primary'
              >
                Project Status
              </label>
              <select
                name='status'
                id='status'
                className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value=''>Select status</option>
                <option value='Ongoing'>Ongoing</option>
                <option value='Completed'>Completed</option>
                <option value='Upcoming'>Upcoming</option>
              </select>
              {errors.status && (
                <span className='text-red-500 text-xs mt-1 block'>
                  {errors.status}
                </span>
              )}
            </div>

            {/* Description */}
            <div className='sm:col-span-2'>
              <label
                htmlFor='description'
                className='block mb-2 text-sm font-body font-medium text-primary'
              >
                Project Description
              </label>
              <textarea
                id='description'
                name='description'
                rows='4'
                className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
                placeholder='Describe the project details, goals, and achievements...'
                value={formData.description}
                onChange={handleChange}
                required
              />
              {errors.description && (
                <span className='text-red-500 text-xs mt-1 block'>
                  {errors.description}
                </span>
              )}
            </div>

            {/* Multiple Image Upload */}
            <div className='sm:col-span-2'>
              <label
                htmlFor='images'
                className='block mb-2 text-sm font-body font-medium text-primary'
              >
                Upload Project Images (Max 5MB each)
              </label>
              <input
                type='file'
                id='images'
                multiple
                accept='image/*'
                onChange={handleImageChange}
                className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-body file:bg-accent file:text-light hover:file:bg-opacity-80'
              />
              <div className='mt-4 flex flex-wrap gap-4'>
                {images.map((image, index) => (
                  <div key={index} className='relative'>
                    <img
                      src={image}
                      alt={`Preview ${index}`}
                      className='w-24 h-24 object-cover rounded-md'
                    />
                    <button
                      type='button'
                      onClick={() => removeImage(index)}
                      className='absolute top-0 right-0 bg-red-500 text-light text-xs p-1 rounded-full transform translate-x-1/2 -translate-y-1/2'
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
              {errors.images && (
                <span className='text-red-500 text-xs mt-2 block'>
                  {errors.images}
                </span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className='text-center'>
            <button
              type='submit'
              className='w-full sm:w-auto px-6 py-3 border border-transparent text-base font-body font-medium rounded-md text-light bg-accent hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-200'
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
