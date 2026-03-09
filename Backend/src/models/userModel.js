const mongoose = require("mongoose");

const alluser = new mongoose.Schema({
  fullname: {
    type: String,
  },
  email: {
    type: String,
  },
  password: { type: String },
  isActive: {
    type: Boolean,
    default: true,
  },
  lastLogin: {
    type: Date,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  createdAt: { type: Date, default: Date.now },
});
const User = mongoose.model("User", alluser);

module.exports = User;

// const User = mongoose.model("User", userSchema);
//     ↑           ↑         ↑          ↑
//  variable    method   model name   schema
