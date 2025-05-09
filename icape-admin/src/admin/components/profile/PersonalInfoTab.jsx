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
    <div className="p-8">
      <h5 className="text-2xl font-bold text-gray-900 mb-8 text-center ">PERSONAL INFORMATIONS</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">First Name</label>
          <div className="relative">
            <input
              type="text"
              className={`w-full px-4 py-3 bg-white text-gray-800 border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition duration-300`}
              value={profile?.firstName || ""}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              disabled={!editMode.firstName}
            />
            {!editMode.firstName && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600 transition duration-300"
                onClick={() => handleEditClick("firstName")}
              >
                <FaEdit size={20} />
              </button>
            )}
          </div>
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-2">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Last Name</label>
          <div className="relative">
            <input
              type="text"
              className={`w-full px-4 py-3 bg-white text-gray-800 border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition duration-300`}
              value={profile?.lastName || ""}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              disabled={!editMode.lastName}
            />
            {!editMode.lastName && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600 transition duration-300"
                onClick={() => handleEditClick("lastName")}
              >
                <FaEdit size={20} />
              </button>
            )}
          </div>
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-2">{errors.lastName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <div className="relative">
            <input
              type="email"
              className={`w-full px-4 py-3 bg-white text-gray-800 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition duration-300`}
              value={profile?.email || ""}
              onChange={(e) => handleInputChange("email", e.target.value)}
              disabled={!editMode.email}
            />
            {!editMode.email && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600 transition duration-300"
                onClick={() => handleEditClick("email")}
              >
                <FaEdit size={20} />
              </button>
            )}
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Phone</label>
          <div className="relative">
            <input
              type="tel"
              className={`w-full px-4 py-3 bg-white text-gray-800 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition duration-300`}
              value={profile?.phone || ""}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              disabled={!editMode.phone}
            />
            {!editMode.phone && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600 transition duration-300"
                onClick={() => handleEditClick("phone")}
              >
                <FaEdit size={20} />
              </button>
            )}
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Save and Cancel Buttons */}
      {(editMode.firstName || editMode.lastName || editMode.email || editMode.phone) && (
        <div className="flex justify-end gap-4 mt-8">
          <button
            className="bg-gray-200 text-gray-700 py-2 px-6 rounded-lg font-semibold hover:bg-gray-300 shadow-sm transition duration-300"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
          <button
            className="bg-indigo-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-indigo-700 shadow-md transition duration-300"
            onClick={handleSaveClick}
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default PersonalInfoTab;