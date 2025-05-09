import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const SecurityTab = ({
  securityData,
  errors,
  handleSecurityInputChange,
  handleUpdatePassword,
}) => {
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="p-8">
      <h5 className="text-2xl font-bold text-gray-900 mb-8">Security Settings</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Current Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Current Password
          </label>
          <div className="relative">
            <input
              type={showPasswords.current ? "text" : "password"}
              className={`w-full px-4 py-3 bg-white text-gray-800 border ${
                errors.currentPassword ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition duration-300`}
              value={securityData.currentPassword || ""}
              onChange={(e) =>
                handleSecurityInputChange("currentPassword", e.target.value)
              }
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600"
              onClick={() => togglePasswordVisibility("current")}
            >
              {showPasswords.current ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
          {errors.currentPassword && (
            <p className="text-red-500 text-sm mt-2">{errors.currentPassword}</p>
          )}
        </div>

        {/* New Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            New Password
          </label>
          <div className="relative">
            <input
              type={showPasswords.new ? "text" : "password"}
              className={`w-full px-4 py-3 bg-white text-gray-800 border ${
                errors.newPassword ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition duration-300`}
              value={securityData.newPassword || ""}
              onChange={(e) =>
                handleSecurityInputChange("newPassword", e.target.value)
              }
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600"
              onClick={() => togglePasswordVisibility("new")}
            >
              {showPasswords.new ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
          {errors.newPassword && (
            <p className="text-red-500 text-sm mt-2">{errors.newPassword}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Confirm New Password
          </label>
          <div className="relative">
            <input
              type={showPasswords.confirm ? "text" : "password"}
              className={`w-full px-4 py-3 bg-white text-gray-800 border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition duration-300`}
              value={securityData.confirmPassword || ""}
              onChange={(e) =>
                handleSecurityInputChange("confirmPassword", e.target.value)
              }
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600"
              onClick={() => togglePasswordVisibility("confirm")}
            >
              {showPasswords.confirm ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-2">{errors.confirmPassword}</p>
          )}
        </div>
      </div>

      {/* Update Password Button */}
      <div className="flex justify-end mt-8">
        <button
          className="bg-indigo-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-indigo-700 shadow-md transition duration-300"
          onClick={handleUpdatePassword}
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default SecurityTab;