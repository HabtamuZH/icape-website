/* eslint-disable react/prop-types */

const dummyUser = {
  email: "user@businessdomain.com",
  fullName: "John Doe",
  jobTitle: "Partnership Manager",
  phone: "+1234567890",
  requestStatus: "Approved",
};

const Profile = ({ user = dummyUser }) => {
  return (
    <div className="max-w-md mx-auto mt-21 mb-12 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">User Profile</h2>
      <div className="space-y-4">
        <p className="text-gray-600">Email: {user.email}</p>
        <p className="text-gray-600">Name: {user.fullName}</p>
        <p className="text-gray-600">Phone: {user.phone}</p>
        <p className="text-gray-600">Request Status: {user.requestStatus}</p>
      </div>
    </div>
  );
};

export default Profile;
