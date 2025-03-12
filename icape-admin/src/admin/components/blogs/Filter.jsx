// src/components/Blog/BlogFilter.js
import React from "react";

const BlogFilter = ({ categoryFilter, setCategoryFilter }) => {
  const categories = [
    { value: "", label: "All Categories" },
    { value: "architectural design", label: "Architectural Design" },
    { value: "urban design", label: "Urban Design And Planning" },
    { value: "engineering design", label: "Contract Administration and Engineering Design" },
  ];

  return (
    <div className="w-full sm:w-64 mb-4">
      <select
        id="category-filter"
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-800 font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-[length:1.5rem_1.5rem] bg-no-repeat bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5YTg4NjgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSI+PC9wb2x5bGluZT48L3N2Zz4=')] bg-[right_0.75rem_center]"
      >
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BlogFilter;
