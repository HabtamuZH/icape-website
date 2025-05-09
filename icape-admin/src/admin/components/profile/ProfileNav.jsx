import { FaEdit, FaLock } from "react-icons/fa";

const ProfileNav = ({ activeTab, handleTabClick }) => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center py-4">
          <div className="flex flex-wrap gap-4">
            <button
              className={`py-3 px-8 rounded-xl font-semibold flex items-center transition duration-300 ${
                activeTab === "personal-info"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-indigo-100"
              }`}
              onClick={() => handleTabClick("personal-info")}
            >
              <FaEdit className="mr-2" />
              Personal Info
            </button>
            <button
              className={`py-3 px-8 rounded-xl font-semibold flex items-center transition duration-300 ${
                activeTab === "security"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-indigo-100"
              }`}
              onClick={() => handleTabClick("security")}
            >
              <FaLock className="mr-2" />
              Security
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ProfileNav;