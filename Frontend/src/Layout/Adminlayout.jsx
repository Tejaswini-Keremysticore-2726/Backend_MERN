import React from "react";
import Sidebar from "../Component/AdminSidebar";
import Navbar from "../Component/AdminNavbar";
import { Outlet } from "react-router-dom";
function Adminlayout() {
  return (
    <>
      <div className="flex gap-2">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default Adminlayout;
