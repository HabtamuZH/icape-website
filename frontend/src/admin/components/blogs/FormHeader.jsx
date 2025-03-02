import React from "react";

const FormHeader = ({ title, description }) => {
  return (
    <div className="mb-6 text-center">
      <h2 className="mb-4 text-2xl sm:text-3xl font-heading font-extrabold text-primary">
        {title}
      </h2>
      <p className="text-primary font-body text-sm sm:text-base">{description}</p>
    </div>
  );
};

export default FormHeader;