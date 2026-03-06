
const express = require("express");
const router = express.Router();

router.get("/me", (req, res) => {
  res.json({
    message: "User profile route working",
  });
});

module.exports = router;
