import { useState, useEffect } from "react";
// import { FaEdit, FiTrash2 } from "react-icons/fa";

export default function AllUserAdmin() {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);

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
    <div className="p-8 pt-20 px-8 h-150   bg-gray-300 font-sans">
      <h2 className="mb-5 text-2xl font-bold text-gray-800">
        👥 Logged In Users
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <table className="min-w-full border-collapse">
          <thead className="bg-black  text-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Full Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Email
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Last Login
              </th>
              {/* <th className="px-4 py-3 text-left text-sm font-semibold">
                Joined
              </th> */}
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Action
              </th>
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
                  <td className="px-4 py-3"></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
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
