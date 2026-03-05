import React from "react";
import { Outlet } from "react-router-dom";

function AdminDash() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <nav className="h-18 w-full bg-[#2a2a2d] flex justify-between items-center px-6">
        <h1 className="text-xl font-bold border-amber-500 text-amber-500 font-serif">
          Royal Enfield
        </h1>

        <button className="bg-[#5c2500] text-white px-4 py-1 rounded">
          Users
        </button>
      </nav>
      <hr
        className="text-[#c98c48] 
        border-[#c98c48] border shadow-2xs"
      />

      {/* Main Section */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-72 bg-[#2a2a2d] text-[#cf9c70] p-4 flex flex-col gap-4 shadow-2xl">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <h2 className="text-xl font-semibold">Orders</h2>
          <p className="text-xl font-bold">Users</p>
          <p className="text-xl font-bold">Setting</p>
          <p className="text-xl font-bold">Logout</p>
        </div>

        {/* Content */}
        <div className="flex-1 bg-gray-200 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDash;
