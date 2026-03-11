// import React from "react";
// import { useState, useEffect } from "react";

// const ProductCarasoule = () => {
//   const [products, setProducts] = useState([]);
//   const [currentIndex, setCurrentindex] = useState(0);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const producturl = await fetch(
//         "http://localhost:5000/api/admin/products",
//         {
//           credentials: "include",
//         },
//       );
//       const productjson = await producturl.json();
//       setProducts(productjson);
//     };
//     fetchProduct();
//   }, []);

//   return (
//     <>
//       <div className="flex justify-center items-center mt-5 rounded-lg">
//         <button onClick={() => setCurrentindex(currentIndex - 1)}>
//           <i className="fa-solid fa-arrow-left text-white"></i>
//         </button>
//         <div>
//           <img
//             src={products[currentIndex]?.pro_url}
//             alt=""
//             className="rounded-lg w-300 h-100"
//           />
//           <h1 className="text-white">{products[currentIndex]?.pro_name}</h1>
//         </div>
//         <button onClick={() => setCurrentindex(currentIndex + 1)}>
//           <i className="fa-solid fa-arrow-right text-white"></i>
//         </button>
//       </div>
//     </>
//   );
// };

// export default ProductCarasoule;
