const express = require("express");
const router = express.Router();

const protect = require("../Middleware/authMiddleware");
const adminonly = require("../middleware/adminMiddleware");

router.get("/dashboard", protect, adminonly, (req, res) => {
  res.json({ success: true, message: "Welcome Admin 😊" });
});
module.exports = router;
