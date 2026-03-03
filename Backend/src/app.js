const express = require("express");
const authRoutes = require("../src/Routes/authRoute");
const cors = require("cors");

const app = express();

// app.use(cors());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use("/api", authRoutes);

module.exports = app;
