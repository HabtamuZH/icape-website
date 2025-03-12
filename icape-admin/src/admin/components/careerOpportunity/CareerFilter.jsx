import React from "react";

const CareerFilter = ({ typeFilter, setTypeFilter }) => {
  const types = [
    { value: "", label: "All Types" },
    {
      value: "Full-time & Part-time Positions",
      label: "Full-time & Part-time Positions",
    },
    {
      value: "Paid Internship (Summer/Fall 2025)",
      label: "Paid Internship (Summer/Fall 2025)",
    },
    { value: "Contract", label: "Contract" },
  ];

  return (
    <div className="w-full sm:w-64 mb-4">
      <label
        htmlFor="type-filter"
        className="block text-primary font-body font-medium mb-2 text-sm"
      >
        Filter by Type
      </label>
      <select
        id="type-filter"
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
        className="w-full px-4 py-2 rounded-md border border-border bg-light text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent appearance-none bg-[length:1.5rem_1.5rem] bg-no-repeat bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSI2IDkgMTIgMTUgMTggOSI+PC9wb2x5bGluZT48L3N2Zz4=')] bg-[right_0.75rem_center]"
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

export default CareerFilter;
