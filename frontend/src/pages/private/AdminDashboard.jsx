import React from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import Topbar from "../../components/dashboard/Topbar";

const AdminDashboard = () => {
  return (
    <div className="w-full min-h-screen flex">
      <Sidebar />

      <main className="flex-1">
        <Topbar />
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;