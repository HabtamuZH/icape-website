import React from "react"

const SearchBar = ({searchQuery, setSearchQuery}) => {
  return (
    <div className=' sm:w-64 w-[90vw]'>
      <input
        type='text'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='Search feedback...'
        className='w-full sm:w-[70vw] px-3 py-2 rounded-md border border-border bg-light text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
      />
    </div>
  )
}

export default SearchBar
