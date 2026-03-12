import React from "react";
import { useState, useEffect } from "react";

const Usersideproducts = ({ bikeimg, bikename, bikeprice, moredetails }) => {
  return (
    <>
      <div className="p-2">
        <div className="flex flex-col w-120 p-2  rounded-lg overflow-hidden border border-amber-500">
          {/* <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-120 rounded-lg overflow-hidden border border-amber-500 p-2 "> */}
            <img src={bikeimg} alt="" className="w-full h-80 object-cover" />

            <h1 className="text-white p-2 font-bold">{bikename}</h1>
            <h1 className="text-white p-2 font-bold">{bikeprice}</h1>
            <div className=" flex justify-end p-2">
              <button className="text-white bg-amber-900 p-2 font-bold w-30 rounded-lg hover:bg-amber-700 hover:text-white">
                {moredetails}
              </button>
            </div>
          </div>
        </div>
      
      {/* </div> */}
    </>
  );
};

const Usersidedetails = () => {
  const [allproduct, setAllproducts] = useState([]);

  useEffect(() => {
    const fecthproductsforuser = async () => {
      try {
        const bikes = await fetch("http://localhost:5000/api/admin/products", {
          credentials: "include",
        });
        const bikesjson = await bikes.json();
        setAllproducts(bikesjson);
      } catch (err) {
        console.log("error:", err.message);
      }
    };
    fecthproductsforuser();
  }, []);
  return (
    <>
      <div className="grid grid-cols-3 gap-5 bg-[radial-gradient(circle_at_top,rgba(25,17,50,0.14),transparent_45%),linear-gradient(135deg,#070707,#111111,#1a1a1a,#070707)] ">
        {allproduct.map((bikeid) => (
          <Usersideproducts
            key={bikeid}
            bikeimg={bikeid.pro_url}
            bikename={bikeid.pro_name}
            bikeprice={bikeid.pro_price}
            moredetails="More Details"
          />
        ))}
      </div>
    </>
  );
};
export default Usersidedetails;
