import { FaEye, FaEyeSlash } from "react-icons/fa";

const SecurityTab = ({
  securityData,
  errors,
  handleSecurityInputChange,
  handleUpdatePassword,
}) => {
  return (
    <div className="p-6">
      <h5 className="text-3xl font-semibold text-gray-900 mb-8">Security</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Current Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Current Password
          </label>
          <input
            type="password"
            className={`w-full px-4 py-3 bg-white text-gray-800 border ${
              errors.currentPassword ? "border-red-500" : "border-gray-200"
            } rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm transition duration-200`}
            value={securityData.currentPassword}
            onChange={(e) =>
              handleSecurityInputChange("currentPassword", e.target.value)
            }
          />
          {errors.currentPassword && (
            <p className="text-red-500 text-sm mt-2">
              {errors.currentPassword}
            </p>
          )}
        </div>

        {/* New Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            New Password
          </label>
          <input
            type="password"
            className={`w-full px-4 py-3 bg-white text-gray-800 border ${
              errors.newPassword ? "border-red-500" : "border-gray-200"
            } rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm transition duration-200`}
            value={securityData.newPassword}
            onChange={(e) =>
              handleSecurityInputChange("newPassword", e.target.value)
            }
          />
          {errors.newPassword && (
            <p className="text-red-500 text-sm mt-2">{errors.newPassword}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            className={`w-full px-4 py-3 bg-white text-gray-800 border ${
              errors.confirmPassword ? "border-red-500" : "border-gray-200"
            } rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm transition duration-200`}
            value={securityData.confirmPassword}
            onChange={(e) =>
              handleSecurityInputChange("confirmPassword", e.target.value)
            }
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-2">
              {errors.confirmPassword}
            </p>
          )}
        </div>
      </div>

      {/* Update Password Button */}
      <div className="flex justify-end mt-8">
        <button
          className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-2 px-6 rounded-xl font-semibold hover:from-indigo-600 hover:to-indigo-700 shadow-md transition duration-200"
          onClick={handleUpdatePassword}
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default SecurityTab;
