import useProfile from "../../hooks/useProfile";
import ProfileHeader from "./ProfileHeader";
import ProfileNav from "./ProfileNav";
import PersonalInfoTab from "./PersonalInfoTab";
import SecurityTab from "./SecurityTab";
import LoadingSpinner from "../../../common/LoadingSpinner";

const Profile = () => {
  const {
    activeTab,
    handleTabClick,
    editMode,
    handleEditClick,
    profile,
    handleLogout,
    handleInputChange,
    handleSaveClick,
    handleCancelClick,
    securityData,
    handleSecurityInputChange,
    handleUpdatePassword,
    errors,
    loading,
    notification,
  } = useProfile();

  return (
    <div className="bg-gray-50 min-h-screen">
      {loading && <LoadingSpinner />}
      {notification && (
        <div
          className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          {notification.message}
        </div>
      )}
      <ProfileHeader profile={profile} />
      <ProfileNav activeTab={activeTab} handleTabClick={handleTabClick} />
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {errors.general && (
            <div className="p-4 bg-red-100 text-red-700 border-b border-red-200">
              {errors.general}
            </div>
          )}
          {activeTab === "personal-info" && (
            <PersonalInfoTab
              profile={profile}
              editMode={editMode}
              errors={errors}
              handleEditClick={handleEditClick}
              handleInputChange={handleInputChange}
              handleSaveClick={handleSaveClick}
              handleCancelClick={handleCancelClick}
            />
          )}
          {activeTab === "security" && (
            <SecurityTab
              securityData={securityData}
              errors={errors}
              handleSecurityInputChange={handleSecurityInputChange}
              handleUpdatePassword={handleUpdatePassword}
            />
          )}
        </div>
      </div>
      <div className="container mx-auto px-4 py-4">
        <button
          className="bg-red-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-700 shadow-md transition duration-300"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;