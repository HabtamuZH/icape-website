/* eslint-disable react/prop-types */

const Card = ({ color, icon: Icon, title, value, footer }) => {
  // Define color mappings for the gradient background
  const colorClasses = {
    blue: "from-blue-500 to-blue-700",
    green: "from-green-500 to-green-700",
    orange: "from-orange-500 to-orange-700",
    purple: "from-purple-500 to-purple-700",
    red: "from-red-500 to-red-700",
  };

  return (
    <div className="border border-blue-gray-100 shadow-xl rounded-lg overflow-hidden relative">
      <div className="bg-green-100">
          {/* Icon Container */}
          <div
            className={`absolute top-4 left-4 h-12 w-12 grid place-items-center bg-gradient-to-r ${colorClasses[color]} text-white rounded-lg shadow-lg`}
          >
            {/* Pass className as a prop for flexibility */}
            {Icon}
          </div>
          {/* Content */}
          <div className="p-4 text-right pt-16">
            <p className="text-lg font-[400]  text-gray-600">{title}</p>
            <h4 className="text-2xl font-bold text-blue-900">{value}</h4>
          </div>
      </div>

      {/* Footer (if provided) */}
      {footer && (
        <div className="p-4 border-t border-blue-gray-100">{footer}</div>
      )}
    </div>
  );
};

export default Card;
