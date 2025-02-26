/* eslint-disable react/prop-types */

const SecurityTab = ({
  securityData,
  errors,
  handleSecurityInputChange,
  handleUpdatePassword,
}) => {
  return (
    <div>
      <h5 className="text-2xl font-bold text-gray-800 mb-6">Security</h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Current Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Current Password
          </label>
          <input
            type="password"
            className={`w-full px-4 py-2 border bg-white text-gray-800 ${
              errors.currentPassword ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            value={securityData.currentPassword}
            onChange={(e) =>
              handleSecurityInputChange("currentPassword", e.target.value)
            }
          />
          {errors.currentPassword && (
            <p className="text-red-500 text-sm mt-1">
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
            className={`w-full px-4 py-2 border bg-white text-gray-800 ${
              errors.newPassword ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            value={securityData.newPassword}
            onChange={(e) =>
              handleSecurityInputChange("newPassword", e.target.value)
            }
          />
          {errors.newPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            className={`w-full px-4 py-2 border bg-white text-gray-800 ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            value={securityData.confirmPassword}
            onChange={(e) =>
              handleSecurityInputChange("confirmPassword", e.target.value)
            }
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>
      </div>

      {/* Update Password Button */}
      <div className="flex justify-end mt-6">
        <button
          className="bg-indigo-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out"
          onClick={handleUpdatePassword}
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default SecurityTab;
