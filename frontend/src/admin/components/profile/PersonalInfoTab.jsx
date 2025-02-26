/* eslint-disable react/prop-types */

import { FaEdit } from "react-icons/fa";

const PersonalInfoTab = ({
  profile,
  editMode,
  errors,
  handleEditClick,
  handleInputChange,
  handleSaveClick,
  handleCancelClick,
}) => {
  return (
    <div>
      <h5 className="text-2xl font-bold text-gray-800 mb-6">
        Personal Information
      </h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            First Name
          </label>
          <div className="relative">
            <input
              type="text"
              className={`w-full px-4 py-2 bg-white text-gray-800 border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              value={profile?.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              disabled={!editMode.firstName}
            />
            <button
              className="absolute right-2 top-2 text-gray-600 hover:text-indigo-600"
              onClick={() => handleEditClick("firstName")}
            >
              <FaEdit />
            </button>
          </div>
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Last Name
          </label>
          <div className="relative">
            <input
              type="text"
              className={`w-full px-4 py-2 bg-white text-gray-800 border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              value={profile?.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              disabled={!editMode.lastName}
            />
            <button
              className="absolute right-2 top-2 text-gray-600 hover:text-indigo-600"
              onClick={() => handleEditClick("lastName")}
            >
              <FaEdit />
            </button>
          </div>
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <div className="relative">
            <input
              type="email"
              className={`w-full px-4 py-2 border bg-white text-gray-800 ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              value={profile?.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              disabled={!editMode.email}
            />
            <button
              className="absolute right-2 top-2 text-gray-600 hover:text-indigo-600"
              onClick={() => handleEditClick("email")}
            >
              <FaEdit />
            </button>
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Phone</label>
          <div className="relative">
            <input
              type="tel"
              className={`w-full px-4 py-2 border bg-white text-gray-800 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              value={profile?.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              disabled={!editMode.phone}
            />
            <button
              className="absolute right-2 top-2 text-gray-600 hover:text-indigo-600"
              onClick={() => handleEditClick("phone")}
            >
              <FaEdit />
            </button>
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
        <button
          className="bg-gray-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-gray-600 transition duration-300 ease-in-out"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
        <button
          className="bg-indigo-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out"
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoTab;
