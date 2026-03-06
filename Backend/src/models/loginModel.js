const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  userId:    { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  fullname:  { type: String },
  email:     { type: String },
  isActive:  { type: Boolean, default: true },
  lastLogin: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Login", loginSchema);