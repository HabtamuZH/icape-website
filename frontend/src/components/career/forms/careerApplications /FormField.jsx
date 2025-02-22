import React from "react"

const FormField = ({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  options, // For select fields
  rows, // For textarea
  accept, // For file input
  required = true
}) => {
  return (
    <div className='form-field'>
      <label
        htmlFor={id}
        className='block text-primary font-body font-medium mb-2 text-sm sm:text-base'
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className='w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-border bg-light text-primary font-body text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
          rows={rows}
          required={required}
        />
      ) : type === "select" ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-border bg-light text-primary font-body text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent appearance-none bg-[length:1.5rem_1.5rem] bg-no-repeat bg-right bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5YTg4NjgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSI+PC9wb2x5bGluZT48L3N2Zz4=')] bg-[right_0.75rem_center]"
          required={required}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "file" ? (
        <input
          id={id}
          name={name}
          type='file'
          accept={accept}
          onChange={onChange}
          className='w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-border bg-light text-primary font-body text-sm sm:text-base file:mr-4 file:py-1 sm:file:py-2 file:px-3 sm:file:px-4 file:rounded-md file:border-0 file:text-sm file:font-body file:bg-accent file:text-light hover:file:bg-opacity-80'
          required={required}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className='w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-border bg-light text-primary font-body text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
          required={required}
        />
      )}
    </div>
  )
}

export default FormField
