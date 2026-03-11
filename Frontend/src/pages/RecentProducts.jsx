import React from "react";
import { useState, useEffect } from "react";

const RecentProducts = () => {
  const [lastproducts, setLastproducts] = useState([]);
  useEffect(() => {
    const recentlyadded = async () => {
      try {
        const threeproducts = await fetch(
          "http://localhost:5000/api/admin/products/recent",
          {
            credentials: "include",
          },
        );

        const jsondata = await threeproducts.json();
        console.log("json", jsondata);
        setLastproducts(jsondata);
      } catch (err) {
        console.log("error:", err);
      }
    };
    recentlyadded();
  }, []);

  return (
    <>
      <div className="p-5">
        <h1 className="text-amber-500 font-bold text-xl mb-3 mt-10">
          Recently Added Products
        </h1>
        <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
          <table className="min-w-[700px] w-full text-white rounded-lg">
            <thead>
              <tr>
                <th className="p-5 bg-amber-900 ">Image</th>
                <th className="p-5 bg-amber-900">Product Name</th>
                <th className="p-5 bg-amber-900">Product Price</th>
                <th className="p-5 bg-amber-900">Product Category</th>
                <th className="p-5 bg-amber-900">Product Stock</th>
              </tr>
            </thead>
            <tbody>
              {lastproducts.map((prod) => (
                <tr key={prod._id} className=" text-center bg-white text-black">
                  <th>
                    <img
                      src={prod.pro_url}
                      alt=""
                      className="w-15 h-15 object-cover rounded-lg m-2"
                    />
                  </th>
                  <th>{prod.pro_name}</th>
                  <th>{prod.pro_price}</th>
                  <th>{prod.pro_category}</th>
                  <th>{prod.pro_stock}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default RecentProducts;
