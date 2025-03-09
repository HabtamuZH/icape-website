import PropTypes from "prop-types";

const Error = ({ message = "Something went wrong!", variant = "default" }) => {
  // Define styles based on variant
  const variantStyles = {
    default: "bg-secondary text-primary border-l-4 border-accent",
    danger: "bg-red-100 text-red-800 border-l-4 border-red-500",
    subtle: "bg-light text-dark border border-border",
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-gray-900 z-50"
      role="alert"
    >
      <div
        className={`p-6 rounded-lg shadow-xl w-full max-w-lg ${
          variantStyles[variant] || variantStyles.default
        }`}
      >
        <div className="flex items-center">
          <svg
            className="w-8 h-8 mr-3 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="font-body text-base md:text-lg">{message}</p>
        </div>
      </div>
    </div>
  );
};

// PropTypes for type checking
Error.propTypes = {
  message: PropTypes.string,
  variant: PropTypes.oneOf(["default", "danger", "subtle"]),
};

// Default export
export default Error;
