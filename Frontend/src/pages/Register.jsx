import React from "react";
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("Data fetch successfully");
    fetchdata();
  };
  const fetchdata = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        fullname,
        email,
        password,
      });

      console.log(res.data);
      setMsg();

      setTimeout(() => {
        return navigate("/login");
      }, 1000);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <form
          className="flex flex-col gap-2 shadow-2xl p-8"
          onSubmit={handlesubmit}
        >
          <h1 className="font-bold text-2xl">REGISTER</h1>
          {error && <p className="bg-red-100">{error}</p>}
          {msg && <p className="bg-red-100">{msg}</p>}
          <input
            type="text"
            placeholder="Fullname"
            className="border border-gray-300 rounded-lg w-100 p-2 mt-5"
            name="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg w-100 p-2"
            name="email"
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
          <button
            type="submit"
            className="bg-blue-700 p-2 rounded-lg text-white font-bold"
          >
            Register User
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
