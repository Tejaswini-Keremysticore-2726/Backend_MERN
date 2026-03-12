import React from "react";
// import Userbikecarousel from "./USerbikecarousel";
import CategorySection from "./CategoriesCard";

function Userhome() {
  return (
    <>
      <div className="w-full overflow-hidden border-2 border-amber-500 mb-2">
        <div className="flex flex-col md:flex-row items-center p-2">
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-amber-800 text-6xl">
              Born to Ride,
              <span className="text-amber-500"> Built to Last</span>
            </h1>
            <p className=" text-amber-500 font-bold p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              cumque eius nam. <br /> Ad, fuga voluptatibus eligendi dolorum
              error
            </p>
            <button className="text-black font-bold bg-amber-500 p-3 rounded-lg w-30 hover:bg-amber-700 hover:text-white">
              More Details
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="../../src/assets/bullet3-removebg-preview.png"
              alt=""
              className="w-180 drop-shadow-2xl "
            />
          </div>
        </div>
      </div>
      <CategorySection />
    </>
  );
}

export default Userhome;
