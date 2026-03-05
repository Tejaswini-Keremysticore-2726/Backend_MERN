const express = require("express");
const authController = require("../Controllers/authController");
const protect = require("../Middleware/authMiddleware");
const router = express.Router();
console.log("✅ authRoute loaded");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/me", protect, (req, res) => {
  return res.status(200).json({
    success: true,
    message: "JWT middleware working",
    decoded: req.user,
  });
});
module.exports = router;
