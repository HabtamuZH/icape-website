const ProfileHeader = ({ profile }) => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white  pb-8">
      <div className="text-center">
        <div className="relative inline-block">
          {/* <img
            src="/adminAvatar.jpg"
            alt="Profile"
            className="rounded-full border-4 border-white w-32 h-32 object-cover shadow-xl transition-transform duration-300 hover:scale-105"
          /> */}
        </div>
        <h3 className="mt-4 text-3xl font-bold text-gray-900">
          {profile?.firstName?.toUpperCase() || ""}{" "}
          {profile?.lastName?.toUpperCase() || ""}
        </h3>
        <p className="text-gray-500 mt-2">{profile?.email}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
