import React from "react";

const BlogFilter = ({ categoryFilter, setCategoryFilter }) => {
  const categories = [
    { value: "", label: "All Categories" },
    { value: "arch", label: "Architecture" },
    { value: "tech", label: "Technology" },
    { value: "dev", label: "Development" },
    // Add more categories as needed based on your data
  ];

  return (
    <div className="w-full sm:w-64 mb-4">
      {/* <label
        htmlFor="category-filter"
        className="block text-primary font-body font-medium mb-2 text-sm"
      >
        Filter by Category
      </label> */}
      <select
        id="category-filter"
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        className="w-full px-4 py-2 rounded-md border border-border bg-light text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent appearance-none bg-[length:1.5rem_1.5rem] bg-no-repeat bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5YTg4NjgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSI+PC9wb2x5bGluZT48L3N2Zz4=')] bg-[right_0.75rem_center]"
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