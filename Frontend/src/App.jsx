// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import AdminDash from "./Layout/AdminDash";
// import UserDash from "./Layout/UserDash";
// import Adminlayout from "./Layout/Adminlayout";

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/admin" element={<AdminDash />} />
//         <Route path="/user" element={<UserDash />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//       <Routes>
//         <Route path="/adminlayout" element={<Adminlayout />} >
//         {/* child */}
//         </Route>

//       </Routes>
//     </>
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDash from "./Layout/AdminDash";
import UserDash from "./Layout/UserDash";
import Adminlayout from "./Layout/Adminlayout";
import Orders from "./pages/Orders";
import Products from "./pages/Products";

// import Dashboard from "./pages/Dashboard";
import AllUserAdmin from "./pages/AllUserAdmin";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Routes>
      {/* <Route path="/admin" element={<AdminDash />} /> */}
      <Route path="/user" element={<UserDash />} />
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/admin" element={<AdminDash />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="allusers" element={<AllUserAdmin />}></Route>
        <Route path="allorders" element={<Orders />}></Route>
        <Route path="allproducts" element={<Products />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
