// src/components/Projects/ProjectSearch.js
import React from "react";

const ProjectSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="w-full mb-4">
      <input
        type="text"
        id="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by name, role, or content"
        className="w-full px-4 py-2 rounded-md border border-border bg-light text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
      />
    </div>
  );
};

export default ProjectSearch;
