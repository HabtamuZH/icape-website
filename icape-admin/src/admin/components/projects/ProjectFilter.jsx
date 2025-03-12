// src/components/Projects/ProjectFilter.js
import React from "react";

const ProjectFilter = ({ typeFilter, setTypeFilter }) => {
  const types = [
    { value: "", label: "All Types" },
    { value: "architectural design", label: "Architectural Design" },
    { value: "urban design", label: "Urban Design And Planning" },
    { value: "engineering design", label: "Contract Administration and Engineering Design" },
  ];

  return (
    <div className="w-full sm:w-64 mb-4">
      <select
        id="type-filter"
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
        className="w-full px-4 py-2 rounded-md border border-border bg-light text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent appearance-none bg-[length:1.5rem_1.5rem] bg-no-repeat bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5YTg4NjgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSI+PC9wb2x5bGluZT48L3N2Zz4=')] bg-[right_0.75rem_center]"
      >
        {types.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProjectFilter;
