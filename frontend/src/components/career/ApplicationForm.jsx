import {useState} from "react"

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    opportunityType: "",
    department: "", // For Professional Career Opportunities
    studentStatus: "", // For Internship Program
    reason: "",
    skills: "",
    availability: "",
    cv: null
  })

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
      alert("Please upload a valid PDF file (Max 5MB)")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted:", formData)
    // Replace with your submission logic (e.g., API call)
  }

  return (
    <section className='py-16 bg-secondary min-h-screen'>
      <div className='max-w-lg mx-auto bg-light p-6 shadow-lg rounded-xl border border-border mt-10'>
        <h2 className='text-3xl font-heading font-extrabold text-primary mb-6 text-center'>
          Apply to iCAPE Opportunities
        </h2>
        <p className='text-primary font-body text-center mb-8'>
          Submit your application for our Professional Career Opportunities or
          Internship Program 2025.
        </p>

        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Full Name */}
          <div>
            <label
              htmlFor='fullName'
              className='block text-primary font-body font-medium mb-2'
            >
              Full Name
            </label>
            <input
              type='text'
              name='fullName'
              placeholder='Full Name'
              value={formData.fullName}
              onChange={handleChange}
              className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor='email'
              className='block text-primary font-body font-medium mb-2'
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor='phoneNumber'
              className='block text-primary font-body font-medium mb-2'
            >
              Phone Number
            </label>
            <input
              type='tel'
              name='phoneNumber'
              placeholder='Phone Number'
              value={formData.phoneNumber}
              onChange={handleChange}
              className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
              required
            />
          </div>

          {/* Opportunity Type */}
          <div>
            <label
              htmlFor='opportunityType'
              className='block text-primary font-body font-medium mb-2'
            >
              Opportunity Type
            </label>
            <select
              name='opportunityType'
              value={formData.opportunityType}
              onChange={handleChange}
              className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
              required
            >
              <option value=''>Select Opportunity</option>
              <option value='Professional Career Opportunities'>
                Professional Career Opportunities
              </option>
              <option value='Internship Program 2025'>
                Internship Program 2025
              </option>
            </select>
          </div>

          {/* Conditional Field: Department (for Professional Career Opportunities) */}
          {formData.opportunityType === "Professional Career Opportunities" && (
            <div>
              <label
                htmlFor='department'
                className='block text-primary font-body font-medium mb-2'
              >
                Department
              </label>
              <select
                name='department'
                value={formData.department}
                onChange={handleChange}
                className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
                required
              >
                <option value=''>Select Department</option>
                <option value='Engineering'>Engineering</option>
                <option value='Product Development'>Product Development</option>
                <option value='Business Operations'>Business Operations</option>
              </select>
            </div>
          )}

          {/* Conditional Field: Student Status (for Internship Program) */}
          {formData.opportunityType === "Internship Program 2025" && (
            <div>
              <label
                htmlFor='studentStatus'
                className='block text-primary font-body font-medium mb-2'
              >
                Student Status
              </label>
              <select
                name='studentStatus'
                value={formData.studentStatus}
                onChange={handleChange}
                className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
                required
              >
                <option value=''>Select Status</option>
                <option value='Current Student'>Current Student</option>
                <option value='Recent Graduate'>Recent Graduate</option>
              </select>
            </div>
          )}

          {/* Reason */}
          <div>
            <label
              htmlFor='reason'
              className='block text-primary font-body font-medium mb-2'
            >
              Why do you want to join iCAPE?
            </label>
            <textarea
              name='reason'
              placeholder='Tell us why you’re excited to contribute to our team...'
              value={formData.reason}
              onChange={handleChange}
              className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
              rows='4'
              required
            />
          </div>

          {/* Skills */}
          <div>
            <label
              htmlFor='skills'
              className='block text-primary font-body font-medium mb-2'
            >
              Relevant Skills & Experience
            </label>
            <textarea
              name='skills'
              placeholder='List your skills and experience relevant to the opportunity...'
              value={formData.skills}
              onChange={handleChange}
              className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
              rows='4'
              required
            />
          </div>

          {/* Availability */}
          <div>
            <label
              htmlFor='availability'
              className='block text-primary font-body font-medium mb-2'
            >
              Availability
            </label>
            <select
              name='availability'
              value={formData.availability}
              onChange={handleChange}
              className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
              required
            >
              <option value=''>Select Availability</option>
              <option value='Full-time'>Full-time</option>
              <option value='Part-time'>Part-time</option>
              {formData.opportunityType === "Internship Program 2025" && (
                <option value='Summer 2025'>Summer 2025</option>
              )}
              {formData.opportunityType === "Internship Program 2025" && (
                <option value='Fall 2025'>Fall 2025</option>
              )}
            </select>
          </div>

          {/* CV Upload */}
          <div>
            <label
              htmlFor='cv'
              className='block text-primary font-body font-medium mb-2'
            >
              Upload CV (PDF, Max 5MB)
            </label>
            <input
              type='file'
              accept='application/pdf'
              onChange={handleFileChange}
              className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-body file:bg-accent file:text-light hover:file:bg-opacity-80'
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type='submit'
              className='w-full px-6 py-3 border border-transparent text-base font-body font-medium rounded-md text-light bg-accent hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-200'
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ApplicationForm
