import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import axios from "axios";
import { useEffect } from "react";

function AdminDash() {
  const navigate = useNavigate();
  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/admin/dashboard",
          {
            withCredentials: true,
          },
        );

        console.log(res.data);
      } catch (err) {
        console.log(err);
        navigate("/");
      }
    };

    checkAdmin();
  }, []);

  const [logout, setLogout] = useState(false);

  const handleLogout = () => {
    setLogout(true);
    navigate("/");
  };
  return (
    <div className="h-screen flex flex-col gap-3 overflow-hidden min-h-screen bg-[radial-gradient(circle_at_top,rgba(25,17,50,0.14),transparent_45%),linear-gradient(135deg,#070707,#111111,#1a1a1a,#070707)]">
      {/* Navbar */}
      <nav className="h-18 w-full bg-[#323235] flex justify-between items-center px-6 bg-[radial-gradient(circle_at_top,rgba(25,17,50,0.14),transparent_45%),linear-gradient(135deg,#070707,#111111,#1a1a1a,#070707)]">
        <div className="flex gap-2 justify-center items-center">
          <img
            src="https://m.media-amazon.com/images/I/61+gxqqO8LL.jpg"
            alt=""
            className="w-12 h-12"
          />
          <h1 className="text-2xl font-bold border-amber-500 text-amber-500 font-serif ">
            Royal Enfield
          </h1>
        </div>

        <div className="flex gap-6 justify-center items-center">
          <div className="flex justify-center items-center gap-2 relative">
            <i className="fa-solid fa-magnifying-glass mr-2 absolute left-1 text-amber-500"></i>

            <input
              type="text"
              placeholder="Search..."
              className="outline-none w-full bg-transparent border border-amber-500 hover:border-amber-500 rounded-lg p-2 pl-10 placeholder:text-amber-500"
            />
          </div>

          <img
            src="https://img.icons8.com/fluent/1200/user-male-circle.jpg"
            alt=""
            className="w-10 h-10 rounded-full"
          />

          <div>
            {logout && (
              <button
                onClick={handleLogout}
                className="bg-amber-500 text-white font-bold p-2 rounded-lg hover:bg-amber-900 hover:text-white"
              >
                LogOut
              </button>
            )}
          </div>
        </div>
      </nav>
      <hr
        className="text-[#c98c48] 
        border-[#c98c48] border shadow-2xs"
      />

      {/* Main Section */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-72 bg-[#323235] text-[#cf9c70] p-4 flex flex-col gap-10 shadow-2xl  bg-[radial-gradient(circle_at_top,rgba(25,17,50,0.14),transparent_45%),linear-gradient(135deg,#070707,#111111,#1a1a1a,#070707)]">
          {/* <h1 className="text-2xl font-bold">Dashboard</h1> */}
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `mt-10 flex gap-3 ${
                isActive
                  ? "bg-black text-white rounded-lg p-2 text-xl from-gray-800 to-gray-700 font-bold shadow-lg"
                  : " hover:bg-gray-800 text-orange-400"
              }`
            }
          >
            <MdDashboard size={25} className="text-amber-500" />
            Admin Dashboard
          </NavLink>
          <NavLink
            to="/admin/allusers"
            className={({ isActive }) =>
              `text-xl font-bold flex gap-3 p-2 rounded-lg ${
                isActive
                  ? "bg-black text-white"
                  : "text-orange-400 hover:bg-amber-900 hover:text-white"
              }`
            }
          >
            <FaUsers size={25} className="text-amber-500" />
            Users
          </NavLink>

          <h2 className="text-xl font-semibold flex gap-3 p-2 hover:bg-amber-900 hover:text-white hover:rounded-lg ">
            <FaBox size={20} className="text-amber-500" />
            Products
          </h2>
          <h2 className="text-xl font-semibold flex gap-3 p-2 hover:bg-amber-900 hover:text-white hover:rounded-lg ">
            <FaClipboardList size={25} className="text-amber-500" />
            Orders
          </h2>

          <div>
            {setLogout && (
              <button
                onClick={handleLogout}
                className="bg-amber-500 w-65 text-white font-bold p-2 rounded-lg hover:bg-amber-900 hover:text-white"
              >
                Logout
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDash;
