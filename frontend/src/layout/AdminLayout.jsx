import { Outlet } from "react-router-dom";
import Sidebar from "../admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex bg-indigo-50">
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
