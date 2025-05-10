
import React from "react"

const SearchBar = ({searchQuery, setSearchQuery}) => {
  return (
    <div className="w-full mb-">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search feedback..."
        className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-800 font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}

export default SearchBar
