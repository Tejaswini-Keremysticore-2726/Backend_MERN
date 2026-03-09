import { useState, useEffect } from "react";

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
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
        background: "#f4f4f4",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#333" }}>
        👥 Logged In Users
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <thead>
          <tr style={{ background: "#4f46e5" }}>
            <th style={th}>Full Name</th>
            <th style={th}>Email</th>
            <th style={th}>Status</th>
            <th style={th}>Last Login</th>
            <th style={th}>Joined</th>
            <th style={th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={5} style={{ textAlign: "center", padding: "20px" }}>
                Loading...
              </td>
            </tr>
          ) : users.length === 0 ? (
            <tr>
              <td colSpan={5} style={{ textAlign: "center", padding: "20px" }}>
                No users found
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr
                key={user._id}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#f9f9f9")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "white")
                }
              >
                <td style={td}>{user.fullname}</td>
                <td style={td}>{user.email}</td>
                <td style={td}>
                  <span
                    style={{
                      color: user.isActive ? "green" : "gray",
                      fontWeight: "bold",
                    }}
                  >
                    {user.isActive ? "🟢 Online" : "⚫ Offline"}
                  </span>
                </td>
                <td style={td}>{new Date(user.lastLogin).toLocaleString()}</td>
                <td style={td}>
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

const th = { color: "white", padding: "12px 16px", textAlign: "left" };
const td = { padding: "12px 16px", borderBottom: "1px solid #eee" };
