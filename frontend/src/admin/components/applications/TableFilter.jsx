import React, {useState} from "react"

const TableFilter = ({onFilter, filterOptions, filterField}) => {
  const [selectedFilter, setSelectedFilter] = useState("")

  const handleFilterChange = (e) => {
    const value = e.target.value
    setSelectedFilter(value)
    onFilter(value ? {[filterField]: value} : {})
  }

  return (
    <div className='mb-4'>
      <label
        htmlFor='filter'
        className='block text-primary font-body font-medium mb-2'
      >
        Filter by {filterField.replace(/([A-Z])/g, " $1").toLowerCase()}:
      </label>
      <select
        id='filter'
        value={selectedFilter}
        onChange={handleFilterChange}
        className='w-full sm:w-64 px-3 py-2 rounded-md border border-border bg-light text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
      >
        {filterOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default TableFilter
