import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDash from "./Component/AdminDash";
import UserDash from "./Layout/UserDash";
import Adminlayout from "./Layout/Adminlayout";
import Orders from "./pages/Orders";
import Userhome from "./pages/Userhome";
import BikeCard from "./pages/BikeCard";
import UserAbout from "./pages/UserAbout";

// import Dashboard from "./pages/Dashboard";
import AllUserAdmin from "./pages/AllUserAdmin";
import AdmincardsDashboard from "./pages/AdmincardsDashboard";
import AdminProducts from "./pages/AdminProducts";
import UserContact from "./pages/UserContact";

function App() {
  return (
    <Routes>
      {/* registration,login,useDash */}
      {/* <Route path="/user" element={<UserDash />} /> */}
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />

      {/* main admin routes */}
      <Route path="/admin" element={<AdminDash />}>
        <Route index element={<AdmincardsDashboard />} />
        <Route path="allusers" element={<AllUserAdmin />}></Route>
        <Route path="allorders" element={<Orders />}></Route>
        <Route path="allproducts" element={<AdminProducts />}></Route>
      </Route>
      {/* main user routes */}
      <Route path="/user" element={<UserDash />}>
        <Route index element={<Userhome />} />
        <Route path="categories" element={<BikeCard />} />
        <Route path="about" element={<UserAbout />} />
        <Route path="contact" element={<UserContact />} />
      </Route>
    </Routes>
  );
}

export default App;
