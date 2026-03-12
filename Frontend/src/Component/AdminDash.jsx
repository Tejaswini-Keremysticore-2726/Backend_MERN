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
import { FiLogOut } from "react-icons/fi";

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
  const [sidebar, setSidebar] = useState(false);

  const handleLogout = () => {
    setLogout(true);
    navigate("/");
  };
  return (
    <div className="flex-1 p-6 overflow-y-auto h-0 min-h-screen bg-[radial-gradient(circle_at_top,rgba(25,17,50,0.14),transparent_45%),linear-gradient(135deg,#070707,#111111,#1a1a1a,#070707)]">
      <nav className="h-18 w-full bg-[#111111] flex justify-between items-center px-6">
        <div className="flex justify-between items-center gap-2">
          {/* <button
            className="sm:hidden md:hidden"
            onClick={() => setSidebar(!sidebar)}
          >
            <i className="fa-solid fa-bars text-white text-2xl"></i>
          </button> */}
          <img
            src="https://m.media-amazon.com/images/I/61+gxqqO8LL.jpg"
            alt=""
            className="w-12 h-12"
          />
          <h1 className="text-[12px] sm:text-[18px] font-bold border-amber-500 text-amber-500 font-serif md:text-2xl ">
            Royal Enfield
          </h1>
        </div>

        <div className="flex gap-6 justify-center items-center">
          {/* <div className="flex justify-center items-center gap-2 relative">
            <i className="fa-solid fa-magnifying-glass mr-2 absolute left-1 text-amber-500"></i>

            <input
              type="text"
              placeholder="Search..."
              className="outline-none w-full bg-transparent border border-amber-500 hover:border-amber-500 rounded-lg p-2 pl-10 placeholder:text-amber-500"
            />
          </div> */}

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

        <div
          className={`top-0 left-0 h-full z-50 
  w-16 md:w-72 
  bg-[#111111] text-[#cf9c70] p-4 flex flex-col gap-10 
  transition-all duration-300`}
        >
          {/* <button
            className="md:hidden text-amber-500 font-bold text-2xl self-end"
            onClick={() => setSidebar(false)}
          >
            ✕
          </button> */}
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `text-xl font-bold flex gap-3 p-2 rounded-lg  ${
                isActive
                  ? "bg-amber-300 text-black"
                  : "text-orange-400 hover:bg-amber-900 hover:text-white"
              }`
            }
          >
            <MdDashboard size={25} className="text-amber-500" />
            <span className="hidden md:inline"> Admin Dashboard</span>
          </NavLink>
          <NavLink
            to="/admin/allusers"
            className={({ isActive }) =>
              `text-xl font-bold flex gap-3 p-2 rounded-lg ${
                isActive
                  ? "bg-amber-300 text-black"
                  : "text-orange-400 hover:bg-amber-900 hover:text-white"
              }`
            }
          >
            <FaUsers size={25} className="text-amber-500" />
            <span className="hidden md:inline">Users</span>
          </NavLink>

          <NavLink
            to="/admin/allproducts"
            className={({ isActive }) =>
              `text-xl font-bold flex gap-3 p-2 rounded-lg ${
                isActive
                  ? "bg-amber-300 text-black"
                  : "text-orange-400 hover:bg-amber-900 hover:text-white"
              }`
            }
          >
            <FaBox size={25} className="text-amber-500" />
            <span className="hidden md:inline">Products</span>
          </NavLink>

          {/* <h2 className="text-xl font-semibold flex gap-3 p-2 hover:bg-amber-900 hover:text-white hover:rounded-lg ">
            <FaClipboardList size={25} className="text-amber-500" />
            Orders
          </h2> */}
          <NavLink
            to="/admin/allorders"
            className={({ isActive }) =>
              `text-xl font-bold flex gap-3 p-2 rounded-lg ${
                isActive
                  ? "bg-amber-300 text-black"
                  : "text-orange-400 hover:bg-amber-900 hover:text-white"
              }`
            }
          >
            <FaClipboardList size={25} className="text-amber-500" />
            <span className="hidden md:inline">Orders</span>
          </NavLink>

          <div>
            {setLogout && (
              <button
                onClick={handleLogout}
                className=" bg-amber-500  text-white font-bold p-2 rounded-lg hover:bg-amber-900 hover:text-white"
              >
                <div className="flex gap-2">
                  <FiLogOut size={25} className="text-amber-100" />

                  <span className="hidden md:inline">Logout</span>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* {sidebar && (
          <div className="fixed  md:hidden" onClick={() => setSidebar(false)} />
        )} */}
        {/* agar sidebar opn h to ye div render hoga */}

        {/* Content */}
        <div className="flex-1 overflow-hidden p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDash;
