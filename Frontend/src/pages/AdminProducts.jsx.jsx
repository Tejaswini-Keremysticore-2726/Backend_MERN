// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const AdminProducts = () => {
//   const [prodata, setProdata] = useState([]); //products ka data store karne ke liye
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//      const res = await axios.get("http:localhost:5000/api/admin/products");
//       setProdata(res.data);
//       setLoading(false)
//     };
//     fetchProducts()
//   }, []);
//   if(loading === true){
//     return <div>Loading....</div>
//   }
  
//   return (
//     <>
//       {/* <h1 className="text-2xl font-bold text-amber-500">Products</h1> */}
//       <table>
//         <thead>
//           Products
//         </thead>
//         <tr>
//           <th>id</th>
//           <th>pro_name</th>
//           <th>pro_price</th>
//           <th>pro_url</th>
//           <th>pro_category</th>
//           <th>pro_stock</th>
//           <th>Action</th>
//         </tr>
//       </table>
//     </>
//   );
// };

// export default AdminProducts;
