import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

function UserDash() {
  return (
    <>
      <div className="h-screen bg-[radial-gradient(circle_at_top,rgba(25,17,50,0.14),transparent_45%),linear-gradient(135deg,#070707,#111111,#1a1a1a,#070707)]">
        <nav className=" h-25 flex justify-between  border  p-6 shadow-2xl">
          <div className="flex justify-start items-center">
            <img
              src="https://m.media-amazon.com/images/I/61+gxqqO8LL.jpg"
              alt=""
              className="w-15 rounded-lg h-15"
            />
            <h1 className="text-[12px] sm:text-[18px] font-bold border-amber-500 text-amber-500 font-serif md:text-2xl">
              Royal Enfield
            </h1>
          </div>
          <div className="text-white">
            <ul className="flex justify-around text-amber-500 font-bold items-center gap-10 text-[20px] mr-10">
              <NavLink to="" className="hover:text-amber-200">
                Home
              </NavLink>
              <NavLink to="/user/categories" className="hover:text-amber-200">
                Categories
              </NavLink>
              <NavLink to="/user/about" className="hover:text-amber-200">
                About
              </NavLink>
              <NavLink to="/user/contact" className="hover:text-amber-200">
                Contact
              </NavLink>
            </ul>
          </div>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default UserDash;
