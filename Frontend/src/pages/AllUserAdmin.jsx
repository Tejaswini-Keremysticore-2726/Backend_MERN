import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { MdPerson } from "react-icons/md";
import axios from "axios";

export default function AllUserAdmin() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editmodal, setEditmodal] = useState(false);
  const [selecteduserupdate, setSelecteduserupdate] = useState([]);
  const [updatedform, setUpdatedform] = useState([]);

  const handleupdate = async () => {
    console.log(selecteduserupdate._id);
    try {
      const updateres = await axios.put(
        `http://localhost:5000/api/updateuser/users/update/${selecteduserupdate._id}`,

        {
          fullname: updatedform.fullname,
          email: updatedform.email,
          password: updatedform.password,
        },
        { withCredentials: true },
      );
      if (updateres.status === 200) {
        setEditmodal(false);
      } else {
        setEditmodal(false);
      }
    } catch (err) {
      console.log("not found", err.message);
    }
  };

  const handledelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (!confirm) return;
    try {
      const deleted = await axios.delete(
        `http://localhost:5000/api/deleteuser/users/delete/${id}`,
        { withCredentials: true },
      );
      if (deleted.status === 200) {
        setUsers(users.filter((u) => u._id !== id));
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch("http://localhost:5000/api/users/loginuser", {
          credentials: "include",
        });
        const data = await res.json();
        setUsers(data.getloginuser);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);

  return (
    <>
      <div className="p-8 pt-20 px-8 h-150 bg-black font-sans">
        <h2 className="mb-5 text-2xl font-bold text-white">
          <div className="flex gap-2">
            <MdPerson size={40} color="#7b3306" />
            Logged In Users
          </div>
        </h2>

        <div className="overflow-auto rounded-lg shadow-lg bg-white">
          <table className="min-w-full border-collapse">
            <thead className="bg-amber-900  text-white border-2 border-b-amber-950 font-bold">
              <tr>
                <th className="px-4 py-3 text-left text-sm">Full Name</th>
                <th className="px-4 py-3 text-left text-sm">Email</th>
                <th className="px-4 py-3 text-left text-sm">Status</th>
                <th className="px-4 py-3 text-left text-sm">Last Login</th>
               
                <th className="px-4 py-3 text-center text-sm">Action</th>
              </tr>
            </thead>
            <tbody className="font-semibold">
              {loading ? (
                <tr>
                  <td colSpan={6} className="text-center py-5">
                    Loading...
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-5">
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr
                    key={user._id}
                    className="hover:bg-gray-100 transition-colors"
                  >
                    <td className="px-4 py-3">{user.fullname}</td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`font-bold ${user.isActive ? "text-green-600" : "text-gray-500"}`}
                      >
                        {user.isActive ? "🟢 Online" : "⚫ Offline"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {new Date(user.lastLogin).toLocaleString()}
                    </td>
                    {/* <td className="px-4 py-3">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td> */}
                    <td className=" py-3 flex gap-5">
                      <button
                        onClick={() => {
                          setUpdatedform({
                            fullname: user.fullname,
                            email: user.email,
                            password: user.password,
                          });
                          setEditmodal(true);
                          setSelecteduserupdate(user);
                        }}
                      >
                        <FaEdit
                          size={25}
                          className="text-amber-700 hover:text-amber-900"
                        />
                      </button>
                      <button
                        onClick={() => {
                          handledelete(user._id);
                        }}
                      >
                        <FiTrash2
                          size={25}
                          className="text-amber-700 hover:text-amber-900"
                        />
                      </button>
                    </td>
                    {/* <td className="px-4 py-3"></td> */}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/* {editmodal && (
          <div className="">
            <div>
              <h1>Edit User</h1>
              <input
                type="text"
                placeholder="Full name"
                defaultValue={selecteduserupdate.fullname}
                onChange={(e) =>
                  setUpdatedform({
                    fullname: e.target.value,
                  })
                }
              />
              <input
                type="email"
                placeholder="email"
                defaultValue={selecteduserupdate.email}
                onChange={(e) => {
                  setUpdatedform({
                    email: e.target.value,
                  });
                }}
              />
              
              <div>
                <button onClick={() => setEditmodal(false)}>Cancel</button>
                <button onClick={handleupdate}>Update</button>
              </div>
            </div>
          </div>
        )} */}

        {editmodal && (
          <div
            className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setEditmodal(false)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <h1 className="text-2xl font-bold text-black mb-6 border-b-2 border-black pb-3">
                ✏️ Edit User
              </h1>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-600 mb-1 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    defaultValue={selecteduserupdate.fullname}
                    onChange={(e) =>
                      setUpdatedform({
                        fullname: e.target.value,
                        email: updatedform.email,
                      })
                    }
                    className="w-full border-2 border-gray-300 rounded-lg p-3 outline-none focus:bg-gray-50 font-medium"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-600 mb-1 block">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    defaultValue={selecteduserupdate.email}
                    onChange={(e) =>
                      setUpdatedform({
                        fullname: updatedform.fullname,
                        email: e.target.value,
                      })
                    }
                    className="w-full border-2 border-gray-300 rounded-lg p-3 outline-none focus:bg-gray-50 font-medium"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-8 justify-end">
                <button
                  onClick={() => setEditmodal(false)}
                  className="px-6 py-2 rounded-lg border-2 border-gray-300 font-semibold hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleupdate}
                  className="px-6 py-2 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// const th = { color: "white", padding: "12px 16px", textAlign: "left" };
// const td = { padding: "12px 16px", borderBottom: "1px solid #eee" };

// import React from "react";

// const AllUserAdmin = () => {
//   return (
//     <>
//       <h1 className="text-2xl font-bold text-amber-500">All users</h1>
//     </>
//   );
// };

// export default AllUserAdmin;
