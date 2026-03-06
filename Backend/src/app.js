const express = require("express");
const authRoutes = require("../src/Routes/authRoute");
const adminroutes = require("./Routes/adminRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

// app.use(cors());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use("/api", authRoutes);
app.use("/api/admin", adminroutes);

module.exports = app;
