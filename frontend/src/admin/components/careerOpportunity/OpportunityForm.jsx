import React, {useState} from "react"
import {toast} from "react-toastify"
import careerService from "../../../services/careers-service"
import FormComponent from "./FormComponent"

const OpportunityForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    details: [""],
    buttonText: "",
    buttonLink: ""
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormData((prev) => ({...prev, [name]: value}))
  }

  const handleDetailChange = (index, value) => {
    const newDetails = [...formData.details]
    newDetails[index] = value
    setFormData((prev) => ({...prev, details: newDetails}))
  }

  const addDetailField = () => {
    setFormData((prev) => ({...prev, details: [...prev.details, ""]}))
  }

  const removeDetailField = (index) => {
    const newDetails = formData.details.filter((_, i) => i !== index)
    setFormData((prev) => ({...prev, details: newDetails}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    careerService
      .create(formData)
      .then((res) => {
        console.log("Success:", res.data)
        toast.success("Career opportunity posted successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        })
        // Reset form after success
        setFormData({
          title: "",
          description: "",
          type: "",
          details: [""],
          buttonText: "",
          buttonLink: ""
        })
      })
      .catch((err) => {
        console.error("Error:", err.message)
        toast.error("Failed to post career opportunity.", {
          position: "top-right",
          autoClose: 3000
        })
      })
  }

  return (
    <section className='py-16 bg-secondary min-h-screen flex items-center justify-center'>
      <FormComponent
        formData={formData}
        handleInputChange={handleInputChange}
        handleDetailChange={handleDetailChange}
        addDetailField={addDetailField}
        removeDetailField={removeDetailField}
        handleSubmit={handleSubmit}
      />
    </section>
  )
}

export default OpportunityForm
