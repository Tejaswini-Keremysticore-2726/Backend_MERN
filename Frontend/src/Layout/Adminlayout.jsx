import React from "react";
import Sidebar from "../Component/AdminSidebar";
import Navbar from "../Component/AdminNavbar";
import { Outlet } from "react-router-dom";
function Adminlayout() {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <Sidebar />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default Adminlayout;
