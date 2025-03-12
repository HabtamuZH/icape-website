import useProfile from "../../hooks/useProfile"; // Adjust path as needed
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
    handleInputChange,
    handleSaveClick,
    handleCancelClick,
    securityData,
    handleSecurityInputChange,
    handleUpdatePassword,
    errors,
    loading,
  } = useProfile();

  if (loading) return <LoadingSpinner />;

  return (
    <div className="bg-gray-50 min-h-screen">
      <ProfileHeader profile={profile} />
      <ProfileNav activeTab={activeTab} handleTabClick={handleTabClick} />
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
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
      </div>
    </div>
  );
};

export default Profile;
