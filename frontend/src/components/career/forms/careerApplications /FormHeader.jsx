import React from "react"

const FormHeader = ({title, description}) => {
  return (
    <div className='form-header text-center mb-6 sm:mb-8'>
      <h2 className='text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-primary mb-4 sm:mb-6'>
        {title}
      </h2>
      <p className='text-primary font-body text-sm sm:text-base md:text-lg'>
        {description}
      </p>
    </div>
  )
}

export default FormHeader
