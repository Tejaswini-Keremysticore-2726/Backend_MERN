const express = require("express");
const authRoutes = require("../src/Routes/authRoute");
const cors = require("cros");

const app = express();

app.use(express.json());
app.use(cors({ origin: "http//localhost:5173" }));
app.use("/api", authRoutes);

module.exports = app;
