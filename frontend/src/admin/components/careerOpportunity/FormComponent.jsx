import React from "react"

const FormComponent = ({
  formData,
  handleInputChange,
  handleDetailChange,
  addDetailField,
  removeDetailField,
  handleSubmit
}) => {
  return (
    <div className='bg-light p-6 sm:p-8 mx-auto my-8 rounded-xl w-full max-w-3xl shadow-lg border border-border'>
      <h2 className='text-3xl font-heading font-extrabold text-primary mb-6 text-center'>
        Post New Career Opportunity
      </h2>
      <p className='text-primary font-body text-center mb-8'>
        Fill out the details below to create a new job or internship posting for
        iCAPE.
      </p>

      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Title */}
        <div>
          <label
            htmlFor='title'
            className='block text-primary font-body font-medium mb-2'
          >
            Opportunity Title
          </label>
          <input
            type='text'
            id='title'
            name='title'
            value={formData.title}
            onChange={handleInputChange}
            placeholder='e.g., Professional Career Opportunities'
            className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
            required
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor='description'
            className='block text-primary font-body font-medium mb-2'
          >
            Description
          </label>
          <textarea
            id='description'
            name='description'
            value={formData.description}
            onChange={handleInputChange}
            placeholder='Provide a detailed description of the opportunity...'
            rows='6'
            className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
            required
          />
        </div>

        {/* Type */}
        <div>
          <label
            htmlFor='type'
            className='block text-primary font-body font-medium mb-2'
          >
            Opportunity Type
          </label>
          <select
            id='type'
            name='type'
            value={formData.type}
            onChange={handleInputChange}
            className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
            required
          >
            <option value=''>Select Type</option>
            <option value='Full-time & Part-time Positions'>
              Full-time & Part-time Positions
            </option>
            <option value='Paid Internship (Summer/Fall 2025)'>
              Paid Internship (Summer/Fall 2025)
            </option>
            <option value='Contract'>Contract</option>
          </select>
        </div>

        {/* Details */}
        <div>
          <label className='block text-primary font-body font-medium mb-2'>
            Key Details / Benefits
          </label>
          {formData.details.map((detail, index) => (
            <div key={index} className='flex items-center mb-3'>
              <input
                type='text'
                value={detail}
                onChange={(e) => handleDetailChange(index, e.target.value)}
                placeholder='e.g., Competitive compensation packages'
                className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
                required
              />
              {formData.details.length > 1 && (
                <button
                  type='button'
                  onClick={() => removeDetailField(index)}
                  className='ml-2 px-3 py-1 bg-dark text-light rounded-md font-body hover:bg-opacity-80'
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type='button'
            onClick={addDetailField}
            className='mt-2 inline-flex items-center px-4 py-2 text-sm font-body text-accent border border-accent rounded-md hover:bg-accent hover:text-light transition-colors duration-200'
          >
            Add Detail
          </button>
        </div>

        {/* Button Text */}
        <div>
          <label
            htmlFor='buttonText'
            className='block text-primary font-body font-medium mb-2'
          >
            Button Text
          </label>
          <input
            type='text'
            id='buttonText'
            name='buttonText'
            value={formData.buttonText}
            onChange={handleInputChange}
            placeholder='e.g., Apply Now'
            className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
            required
          />
        </div>

        {/* Button Link */}
        <div>
          <label
            htmlFor='buttonLink'
            className='block text-primary font-body font-medium mb-2'
          >
            Button Link
          </label>
          <input
            type='text'
            id='buttonLink'
            name='buttonLink'
            value={formData.buttonLink}
            onChange={handleInputChange}
            placeholder='e.g., /careers/professional'
            className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
            required
          />
        </div>

        {/* Submit Button */}
        <div className='text-center'>
          <button
            type='submit'
            className='inline-flex items-center px-6 py-3 border border-transparent text-base font-body font-medium rounded-md text-light bg-accent hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-200'
          >
            Post Opportunity
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormComponent
