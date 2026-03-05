import React from "react";

function AdminNavbar() {
  return (
    <nav className="w-full h-20 bg-gray-200 flex justify-between items-center">
      <h1 className="text-2xl font-bold p-2 text-amber-900">Royal Enfeld</h1>
      <div className="p-3 w-25 text-center">
        <h1 className=" bg-amber-950 font-bold p-2 rounded-lg text-white">
          Users
        </h1>
      </div>
    </nav>
  );
}

export default AdminNavbar;
