import React from "react";

const BlogSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="w-full mb-4">
      {/* <label
        htmlFor="search"
        className="block text-primary font-body font-medium mb-2 text-sm"
      >
        Search Blogs
      </label> */}
      <input
        type="text"
        id="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by title, author, etc."
        className="w-full px-4 py-2 rounded-md border border-border bg-light text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
      />
    </div>
  );
};

export default BlogSearch;