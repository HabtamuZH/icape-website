// src/components/Blog/FormHeader.js
import React from "react";

const FormHeader = ({ title, description }) => {
  return (
    <div className="mb-6 text-center">
      <h2 className="mb-4 text-2xl sm:text-3xl font-heading font-extrabold text-gray-800">
        {title}
      </h2>
      <p className="text-gray-600 font-body text-sm sm:text-base">
        {description}
      </p>
    </div>
  );
};

export default FormHeader;
