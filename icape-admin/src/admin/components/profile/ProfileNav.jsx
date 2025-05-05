import { FaEdit, FaLock } from "react-icons/fa";
const ProfileNav = ({ activeTab, handleTabClick }) => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center py-4">
          <div className="flex flex-wrap gap-3">
            <button
              className={`py-2 px-6 rounded-xl font-semibold flex items-center transition duration-200 ${
                activeTab === "personal-info"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-indigo-50"
              }`}
              onClick={() => handleTabClick("personal-info")}
            >
              <FaEdit className="mr-2" />
              Personal Info
            </button>
            <button
              className={`py-2 px-6 rounded-xl font-semibold flex items-center transition duration-200 ${
                activeTab === "security"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-indigo-50"
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
