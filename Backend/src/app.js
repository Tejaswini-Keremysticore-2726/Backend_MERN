const express = require("express");
const authRoutes = require("../src/Routes/authRoute");
const adminroutes = require("./Routes/adminRoutes");
const userroutes = require("./Routes/userRoutes");
const updeletuser = require("./Routes/updeluserbyadminRoutes");

const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// app.use(cors());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminroutes);
app.use("/api/users", userroutes);
app.use("/api/updateuser/users", updeletuser);
app.use("/api/deleteuser/users", updeletuser);

module.exports = app;
