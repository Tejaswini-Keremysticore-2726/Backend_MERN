import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDash from "./Layout/AdminDash";
import UserDash from "./Layout/UserDash";
import Adminlayout from "./Layout/Adminlayout";
import Orders from "./pages/Orders";

// import Dashboard from "./pages/Dashboard";
import AllUserAdmin from "./pages/AllUserAdmin";
import AdmincardsDashboard from "./pages/AdmincardsDashboard";
import AdminProducts from "./pages/AdminProducts";

function App() {
  return (
    <Routes>
      {/* <Route path="/admin" element={<AdminDash />} /> */}
      <Route path="/user" element={<UserDash />} />
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/admin" element={<AdminDash />}>
        <Route path="dashboard" element={<AdmincardsDashboard />} />
        <Route path="allusers" element={<AllUserAdmin />}></Route>
        <Route path="allorders" element={<Orders />}></Route>
        <Route path="allproducts" element={<AdminProducts />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
