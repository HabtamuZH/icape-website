import React, { useState } from "react";

const TableSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="w-full mb-4">
      <label
        htmlFor="search"
        className="block text-primary font-body font-medium mb-2"
      >
        Search Applications:
      </label>
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by name, email, etc."
        className="w-full px-4 py-2 rounded-md border border-border bg-light text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
      />
    </div>
  );
};

export default TableSearch;