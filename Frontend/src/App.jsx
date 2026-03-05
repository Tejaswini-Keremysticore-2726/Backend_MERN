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

function App() {
  return (
    <Routes>
      {/* <Route path="/admin" element={<AdminDash />} /> */}
      <Route path="/user" element={<UserDash />} />
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="dashboard" element={<AdminDash />} />

      <Route path="/admin" element={<AdminDash />}>
       
      </Route>
    </Routes>
  );
}

export default App;
