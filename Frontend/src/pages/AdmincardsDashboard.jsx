import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
// import ProductCarasoule from "../Component/ProductCarasoule";
import RecentProducts from "./RecentProducts";

const Cards = ({ title, count, table, to, icon }) => {
  return (
    <>
      {/* <div className="w-80 h-40 rounded-lg border border-gray-400 p-2 hover:bg-black text-amber-600 hover:text-white "> */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"> */}
        <div className="flex flex-col justify-center items-center gap-5 border border-amber-500  text-amber-500 rounded-lg p-4 w-full md:hover:bg-black md:hover:text-white  ">
          <h1 className=" text-2xl font-bold flex gap-2">
            <p size={25} className="mt-1">
              {icon}
            </p>
            {title}
          </h1>
          <p className="text-2xl font-bold">{count}</p>
          <NavLink
            to={to}
            className="font-bold text-white bg-amber-500 hover:bg-amber-900 p-2 rounded-lg"
          >
            {table}
          </NavLink>
        </div>
      {/* </div> */}
    </>
  );
};

const AdmincardsDashboard = () => {
  const [totalusers, setTotalusers] = useState(0);
  const [totalproducts, setTotalproducts] = useState(0);

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/users/loginuser",
          {
            credentials: "include",
          },
        );
        const datajson = await response.json();
        setTotalusers(datajson.count);
      } catch (err) {
        console.log("error:", err);
      }
    };

    const fetchproducts = async () => {
      try {
        const productresponse = await fetch(
          "http://localhost:5000/api/admin/products",
          {
            credentials: "include",
          },
        );
        const productjson = await productresponse.json();
        console.log(productjson);
        setTotalproducts(productjson.count);
        setTotalproducts(productjson.length);
      } catch (err) {
        console.log("error:", err);
      }
    };

    // const fetchorders = async ()=>{
    //   try{

    //   }catch{

    //   }
    // }
    fetchuser();
    fetchproducts();
  }, []);

  return (
    <><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {/* <div className=" flex justify-start gap-5"> */}
        <Cards
          icon={<FaUsers size={25} className="text-amber-500 mt-1" />}
          title="Total Users"
          count={totalusers}
          table="See Users"
          to="/admin/allusers"
        />
        <Cards
          icon={<FaBox size={25} className="text-amber-500" />}
          title="Total Products"
          count={totalproducts}
          table="See Products"
          to="/admin/allproducts"
        />
        <Cards
          icon={<FaClipboardList size={25} className="text-amber-500" />}
          title="Total Orders"
          // count={totalproducts}
          // table="See Products"
          // to="/admin/allproducts"
        />
        <Cards
          icon={<FaDollarSign size={25} className="text-amber-500" />}
          title="Total Revenue"
          // count={totalproducts}
          // table="See Products"
          // to="/admin/allproducts"
        />
      {/* </div> */}
      </div>
      <RecentProducts />
    </>
  );
};

export default AdmincardsDashboard;
