import {useState, useEffect, useRef} from "react"
import ScrollReveal from "scrollreveal"
import applicationService from "../../../../services/application-service"
import {toast} from "react-toastify"
import FormHeader from "./FormHeader" // Adjust path
import FormField from "./FormField" // Adjust path

const InternshipApplicationForm = () => {
  const cvRef = useRef()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    opportunityType: "Internship Program 2025",
    studentStatus: "",
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

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      const submitData = new FormData()
      submitData.append("fullName", formData.fullName)
      submitData.append("email", formData.email)
      submitData.append("phoneNumber", formData.phoneNumber)
      submitData.append("opportunityType", formData.opportunityType)
      submitData.append("studentStatus", formData.studentStatus)
      submitData.append("reason", formData.reason)
      submitData.append("skills", formData.skills)
      submitData.append("availability", formData.availability)
      submitData.append("cv", formData.cv)

      applicationService
        .create(submitData)
        .then((res) => {
          console.log("New internship application created:", res.data)
          toast.success("Internship application submitted successfully!", {
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
            opportunityType: "Internship Program 2025",
            studentStatus: "",
            reason: "",
            skills: "",
            availability: "",
            cv: null
          })
          if (cvRef.current) {
            cvRef.current.value = "" // Reset the file input
          }
        })
        .catch((err) => {
          console.error("Error submitting application:", err)
          toast.error("Failed to submit application")
        })
    } catch (error) {
      console.error("Error submitting application:", error)
      toast.error("Failed to submit application")
    }
  }

  const studentStatusOptions = [
    {value: "", label: "Select Status"},
    {value: "Current Student", label: "Current Student"},
    {value: "Recent Graduate", label: "Recent Graduate"}
  ]

  const availabilityOptions = [
    {value: "", label: "Select Availability"},
    {value: "Summer 2025", label: "Summer 2025"},
    {value: "Fall 2025", label: "Fall 2025"}
  ]

  return (
    <section className='py-8 sm:py-12 md:py-16 bg-secondary min-h-screen flex items-center justify-center'>
      <div className='w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto bg-light p-4 sm:p-6 md:p-8 shadow-lg rounded-xl border border-border mt-6 sm:mt-10'>
        <FormHeader
          title='Internship Application - iCAPE 2025'
          description='Apply for our Internship Program 2025 and gain hands-on experience.'
        />

        <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
          <FormField
            label='Full Name'
            id='fullName'
            name='fullName'
            value={formData.fullName}
            onChange={handleChange}
            placeholder='Full Name'
          />
          <FormField
            label='Email'
            id='email'
            name='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
          />
          <FormField
            label='Phone Number'
            id='phoneNumber'
            name='phoneNumber'
            type='tel'
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder='Phone Number'
          />
          <FormField
            label='Student Status'
            id='studentStatus'
            name='studentStatus'
            type='select'
            value={formData.studentStatus}
            onChange={handleChange}
            options={studentStatusOptions}
          />
          <FormField
            label='Why do you want to join iCAPE?'
            id='reason'
            name='reason'
            type='textarea'
            value={formData.reason}
            onChange={handleChange}
            placeholder='Tell us why you’re excited to contribute...'
            rows='3 sm:rows-4'
          />
          <FormField
            label='Relevant Skills & Experience'
            id='skills'
            name='skills'
            type='textarea'
            value={formData.skills}
            onChange={handleChange}
            placeholder='List your skills and experience...'
            rows='3 sm:rows-4'
          />
          <FormField
            label='Availability'
            id='availability'
            name='availability'
            type='select'
            value={formData.availability}
            onChange={handleChange}
            options={availabilityOptions}
          />
          <FormField
            label='Upload CV (PDF, Max 5MB)'
            id='cv'
            name='cv'
            type='file'
            onChange={handleFileChange}
            accept='application/pdf'
            ref={cvRef} // Add ref here for resetting
          />
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

export default InternshipApplicationForm