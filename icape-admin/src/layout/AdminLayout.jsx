import { Outlet } from "react-router-dom";
import Sidebar from "../admin/components/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex bg-indigo-50">
      <Sidebar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
