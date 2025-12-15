// src/components/layout/DashboardLayout.jsx

import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 bg-base-200 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;