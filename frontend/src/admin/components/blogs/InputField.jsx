import React from "react";

const InputField = ({ label, id, name, type = "text", value, onChange, placeholder, rows, error }) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-body font-medium text-primary">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          className="w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          className="w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      {error && <span className="text-red-500 text-xs mt-1 block">{error}</span>}
    </div>
  );
};

export default InputField;