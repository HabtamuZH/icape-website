// src/components/Blog/BlogSearch.js
import React from "react";

const BlogSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="w-full mb-4">
      <input
        type="text"
        id="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by title, author, etc."
        className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-800 font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};

export default BlogSearch;
