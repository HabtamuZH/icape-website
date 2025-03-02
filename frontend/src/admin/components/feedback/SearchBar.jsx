import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative mb-6 max-w-md">
      <input
        type="text"
        placeholder="Search feedback by user, email, or message..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-3 pl-10 border border-border bg-light rounded-md text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary opacity-70" />
    </div>
  );
};

export default SearchBar;