import { useState, useEffect } from "react";

const MOCK_USERS = [
  { _id: "1", fullname: "Priya Sharma", email: "priya@gmail.com", isActive: true, lastLogin: new Date(Date.now() - 5 * 60000), createdAt: new Date("2024-01-15") },
  { _id: "2", fullname: "Rahul Verma", email: "rahul@gmail.com", isActive: true, lastLogin: new Date(Date.now() - 20 * 60000), createdAt: new Date("2024-02-10") },
  { _id: "3", fullname: "Sneha Patel", email: "sneha@gmail.com", isActive: true, lastLogin: new Date(Date.now() - 2 * 3600000), createdAt: new Date("2024-03-05") },
  { _id: "4", fullname: "Arjun Mehta", email: "arjun@gmail.com", isActive: false, lastLogin: new Date(Date.now() - 86400000), createdAt: new Date("2024-01-28") },
  { _id: "5", fullname: "Kavya Nair", email: "kavya@gmail.com", isActive: true, lastLogin: new Date(Date.now() - 10 * 60000), createdAt: new Date("2024-04-12") },
];

function timeAgo(date) {
  const diff = Math.floor((Date.now() - new Date(date)) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

function Avatar({ name }) {
  const initials = name?.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
  const colors = ["#6366f1","#8b5cf6","#ec4899","#14b8a6","#f59e0b","#ef4444","#3b82f6"];
  const color = colors[name?.charCodeAt(0) % colors.length];
  return (
    <div style={{
      width: 36, height: 36, borderRadius: "50%", background: color,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 13, fontWeight: 700, color: "#fff", flexShrink: 0,
      fontFamily: "'DM Sans', sans-serif", letterSpacing: 0.5
    }}>{initials}</div>
  );
}

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [tick, setTick] = useState(0);

  useEffect(() => {
    // Replace this with your real API call:
    // const res = await fetch("/api/admin/logged-in-users", { credentials: "include" });
    // const data = await res.json();
    // setUsers(data.users);
    setTimeout(() => { setUsers(MOCK_USERS); setLoading(false); }, 800);
  }, []);

  // Re-render every 30s to update "time ago"
  useEffect(() => {
    const t = setInterval(() => setTick(p => p + 1), 30000);
    return () => clearInterval(t);
  }, []);

  const filtered = users.filter(u => {
    const matchFilter = filter === "all" ? true : filter === "active" ? u.isActive : !u.isActive;
    const matchSearch = u.fullname.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const activeCount = users.filter(u => u.isActive).length;
  const totalCount = users.length;

  const styles = {
    root: {
      minHeight: "100vh",
      background: "#0a0a0f",
      fontFamily: "'DM Sans', sans-serif",
      color: "#e2e8f0",
      padding: "0",
    },
    header: {
      borderBottom: "1px solid #1e1e2e",
      padding: "20px 36px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "#0d0d18",
    },
    logo: {
      display: "flex", alignItems: "center", gap: 10,
    },
    logoIcon: {
      width: 34, height: 34, borderRadius: 8,
      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 16,
    },
    logoText: {
      fontSize: 17, fontWeight: 700, color: "#fff",
      letterSpacing: "-0.3px",
    },
    badge: {
      background: "#1a1a2e", border: "1px solid #2a2a3e",
      borderRadius: 20, padding: "4px 12px",
      fontSize: 12, color: "#94a3b8",
    },
    body: { padding: "32px 36px" },
    pageTitle: {
      fontSize: 26, fontWeight: 700, color: "#fff",
      marginBottom: 4, letterSpacing: "-0.5px",
    },
    pageSubtitle: { fontSize: 14, color: "#64748b", marginBottom: 28 },
    statsRow: {
      display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16, marginBottom: 28,
    },
    statCard: (accent) => ({
      background: "#0d0d18",
      border: `1px solid ${accent}22`,
      borderRadius: 14,
      padding: "20px 24px",
      position: "relative",
      overflow: "hidden",
    }),
    statGlow: (accent) => ({
      position: "absolute", top: -20, right: -20,
      width: 80, height: 80, borderRadius: "50%",
      background: accent, opacity: 0.08, filter: "blur(20px)",
    }),
    statLabel: { fontSize: 12, color: "#64748b", marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 },
    statValue: (accent) => ({ fontSize: 32, fontWeight: 800, color: accent, lineHeight: 1 }),
    statSub: { fontSize: 12, color: "#475569", marginTop: 4 },
    controls: {
      display: "flex", alignItems: "center", gap: 12, marginBottom: 20,
    },
    searchBox: {
      flex: 1, background: "#0d0d18",
      border: "1px solid #1e1e2e", borderRadius: 10,
      padding: "10px 16px", color: "#e2e8f0", fontSize: 14,
      outline: "none",
    },
    filterBtn: (active) => ({
      padding: "9px 18px", borderRadius: 8, fontSize: 13, fontWeight: 600,
      border: active ? "1px solid #6366f1" : "1px solid #1e1e2e",
      background: active ? "#6366f122" : "#0d0d18",
      color: active ? "#818cf8" : "#64748b",
      cursor: "pointer", transition: "all 0.2s",
    }),
    table: {
      width: "100%", background: "#0d0d18",
      border: "1px solid #1e1e2e", borderRadius: 14,
      overflow: "hidden", borderCollapse: "collapse",
    },
    thead: { background: "#111120", borderBottom: "1px solid #1e1e2e" },
    th: {
      padding: "12px 20px", textAlign: "left",
      fontSize: 11, fontWeight: 600, color: "#475569",
      textTransform: "uppercase", letterSpacing: "0.8px",
    },
    tr: (i) => ({
      borderBottom: "1px solid #13131f",
      background: i % 2 === 0 ? "transparent" : "#0b0b15",
      transition: "background 0.15s",
    }),
    td: { padding: "14px 20px", fontSize: 14 },
    userCell: { display: "flex", alignItems: "center", gap: 12 },
    userName: { fontWeight: 600, color: "#e2e8f0", fontSize: 14 },
    userEmail: { fontSize: 12, color: "#475569" },
    activeDot: {
      width: 8, height: 8, borderRadius: "50%",
      background: "#10b981", boxShadow: "0 0 6px #10b98166",
      display: "inline-block", marginRight: 6,
    },
    inactiveDot: {
      width: 8, height: 8, borderRadius: "50%",
      background: "#475569", display: "inline-block", marginRight: 6,
    },
    statusText: (active) => ({
      fontSize: 12, fontWeight: 600,
      color: active ? "#10b981" : "#475569",
    }),
    timeText: { fontSize: 13, color: "#64748b" },
    emptyState: {
      textAlign: "center", padding: "60px 20px", color: "#475569",
    },
    loader: {
      textAlign: "center", padding: "60px 20px",
      color: "#6366f1", fontSize: 14,
    },
    pulse: {
      display: "inline-block",
      animation: "pulse 1.5s ease-in-out infinite",
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input::placeholder { color: #334155; }
        tr:hover td { background: #111120 !important; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        .row-anim { animation: fadeIn 0.3s ease forwards; }
      `}</style>

      <div style={styles.root}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>🛡️</div>
            <span style={styles.logoText}>BulletAdmin</span>
          </div>
          <span style={styles.badge}>Admin Panel</span>
        </div>

        <div style={styles.body}>
          <div style={styles.pageTitle}>User Dashboard</div>
          <div style={styles.pageSubtitle}>Monitor all logged-in users in real time</div>

          {/* Stats */}
          <div style={styles.statsRow}>
            <div style={styles.statCard("#6366f1")}>
              <div style={styles.statGlow("#6366f1")} />
              <div style={styles.statLabel}>Total Users</div>
              <div style={styles.statValue("#818cf8")}>{totalCount}</div>
              <div style={styles.statSub}>Registered accounts</div>
            </div>
            <div style={styles.statCard("#10b981")}>
              <div style={styles.statGlow("#10b981")} />
              <div style={styles.statLabel}>Active Now</div>
              <div style={styles.statValue("#10b981")}>{activeCount}</div>
              <div style={styles.statSub}>Currently logged in</div>
            </div>
            <div style={styles.statCard("#f59e0b")}>
              <div style={styles.statGlow("#f59e0b")} />
              <div style={styles.statLabel}>Offline</div>
              <div style={styles.statValue("#f59e0b")}>{totalCount - activeCount}</div>
              <div style={styles.statSub}>Not logged in</div>
            </div>
          </div>

          {/* Controls */}
          <div style={styles.controls}>
            <input
              style={styles.searchBox}
              placeholder="🔍  Search by name or email..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {["all", "active", "offline"].map(f => (
              <button key={f} style={styles.filterBtn(filter === f)} onClick={() => setFilter(f)}>
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          {/* Table */}
          <table style={styles.table}>
            <thead style={styles.thead}>
              <tr>
                <th style={styles.th}>User</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Last Login</th>
                <th style={styles.th}>Joined</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={4} style={styles.loader}>
                  <span style={styles.pulse}>Loading users...</span>
                </td></tr>
              ) : filtered.length === 0 ? (
                <tr><td colSpan={4} style={styles.emptyState}>No users found</td></tr>
              ) : (
                filtered.map((user, i) => (
                  <tr key={user._id} style={styles.tr(i)} className="row-anim">
                    <td style={styles.td}>
                      <div style={styles.userCell}>
                        <Avatar name={user.fullname} />
                        <div>
                          <div style={styles.userName}>{user.fullname}</div>
                          <div style={styles.userEmail}>{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td style={styles.td}>
                      <span style={user.isActive ? styles.activeDot : styles.inactiveDot} />
                      <span style={styles.statusText(user.isActive)}>
                        {user.isActive ? "Online" : "Offline"}
                      </span>
                    </td>
                    <td style={styles.td}>
                      <span style={styles.timeText}>{timeAgo(user.lastLogin)}</span>
                    </td>
                    <td style={styles.td}>
                      <span style={styles.timeText}>{formatDate(user.createdAt)}</span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div style={{ marginTop: 14, fontSize: 12, color: "#334155", textAlign: "right" }}>
            Showing {filtered.length} of {totalCount} users
          </div>
        </div>
      </div>
    </>
  );
}
