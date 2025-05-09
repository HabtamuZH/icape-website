const ProfileHeader = ({ profile }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-2 rounded-b-2xl shadow-lg">
      <div className="container mx-auto px-4 text-center">
        <div className="relative inline-block">
          <div className="w-24 h-24 rounded-full bg-indigo-200 flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl font-bold text-indigo-800">
              {profile?.firstName?.[0]?.toUpperCase() || ""}
              {profile?.lastName?.[0]?.toUpperCase() || ""}
            </span>
          </div>
        </div>
        <h3 className="text-4xl font-bold">
          {profile?.firstName || ""} {profile?.lastName || ""}
        </h3>
        <p className="text-indigo-100 mt-2">{profile?.email || ""}</p>
        <p className="text-indigo-200 mt-1">{profile?.phone || ""}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;