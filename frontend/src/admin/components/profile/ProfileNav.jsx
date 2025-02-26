/* eslint-disable react/prop-types */
import { FaEdit, FaLock } from "react-icons/fa";

const ProfileNav = ({ activeTab, handleTabClick }) => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center py-4">
          <div className="flex flex-wrap gap-4">
            <button
              className={`py-2 px-4 rounded-lg font-semibold ${
                activeTab === "personal-info"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => handleTabClick("personal-info")}
            >
              <FaEdit className="inline mr-2" />
              Personal Info
            </button>
            <button
              className={`py-2 px-4 rounded-lg font-semibold ${
                activeTab === "security"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => handleTabClick("security")}
            >
              <FaLock className="inline mr-2" />
              Security
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ProfileNav;
