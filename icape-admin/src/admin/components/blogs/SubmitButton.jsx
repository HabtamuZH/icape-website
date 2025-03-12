// src/components/Blog/SubmitButton.js
import React from "react";

const SubmitButton = ({
  isSubmitting,
  errors,
  onSubmit,
  loadingText,
  text,
}) => {
  return (
    <div className="text-center">
      <button
        type="submit"
        disabled={isSubmitting || errors.length > 0 }
        onClick={onSubmit}
        className={`w-full sm:w-auto px-6 py-3 border border-transparent text-base font-body font-medium rounded-md text-white bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 ${
          isSubmitting || errors.length > 0
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-opacity-80"
        }`}
      >
        {isSubmitting ? loadingText : text}
      </button>
    </div>
  );
};

export default SubmitButton;
