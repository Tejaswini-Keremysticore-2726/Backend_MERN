import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("Data fetch successfully");
    fetchdata();
  };

  // const fetchdata = async () => {
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:5000/api/auth/login",
  //       {
  //         email: email,

  //         password: password,
  //       },
  //       { withCredentials: true },
  //     );
  //     console.log(res.data.role);
  //     if (res.data.success) {
  //       alert("User Login Successfully ✅"); // ✅ alert before navigate
  //       navigate(res.data.role?.toLowerCase() === "admin" ? "/admin" : "/user");
  //     }
  //     console.log(res.data);
  //     alert("User Login Successfully ✅");
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };
  const fetchdata = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true },
      );

      console.log("FULL RESPONSE:", res.data);
      console.log("ROLE:", res.data.role);

      if (res.data.success) {
        alert("User Login Successfully ✅");

        const role = res.data.role?.toLowerCase();

        if (role === "admin") {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      }
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    }
  };
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <form
          className="flex flex-col gap-2 shadow-2xl p-8"
          onSubmit={handlesubmit}
        >
          <h1 className="font-bold text-2xl">LOGIN</h1>
          {error && <p className="bg-red-100">{error}</p>}
          <input
            type="text"
            placeholder="Eamil"
            className="border border-gray-300 rounded-lg w-100 p-2 mt-5"
            name="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg w-100 p-2"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
          <button
            type="submit"
            className="bg-blue-700 p-2 rounded-lg text-white font-bold"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
