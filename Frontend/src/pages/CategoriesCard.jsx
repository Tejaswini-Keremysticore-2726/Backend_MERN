import React from "react";
import { NavLink } from "react-router-dom";

const CategoryCard = ({ bgimg, title, to }) => {
  return (
    <div
      className="relative h-64 rounded-lg overflow-hidden cursor-pointer mt-5 hover:scale-105 transition-transform duration-1000"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40" />

      <div className="absolute bottom-4">
        <h1 className="text-white text-2xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

const CategorySection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
      <CategoryCard
        bgimg="/src/assets/bullet3-removebg-preview.png"
        title="Adventure"
      />
      <CategoryCard
        bgimg="/src/assets/bullet1-removebg-preview.png"
        title="Hunter"
      />
      <CategoryCard
        bgimg="/src/assets/bullet8-removebg-preview.png"
        title="Classic"
      />
      <CategoryCard
        bgimg="/src/assets/bullet1-removebg-preview.png"
        title="Roadster"
      />
    </div>
  );
};

export default CategorySection;
