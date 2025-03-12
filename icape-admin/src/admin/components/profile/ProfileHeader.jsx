/* eslint-disable react/prop-types */
// import avatar from '/'

const ProfileHeader = ({ profile }) => {
  return (
    <div>
      <div className="text-center mt-16">
        <div className="relative inline-block">
          <img
            src="/adminAvatar.jpg"
            alt="Profile"
            className="rounded-full border-4 border-white w-56 h-56 object-cover shadow-lg"
          />
        </div>
        <h3 className="my-4 text-2xl font-bold text-gray-800">
          {profile?.firstName || ""} {profile?.lastName || ""}
        </h3>
      </div>
    </div>
  );
};

export default ProfileHeader;
