const mongoose = require("mongoose");

const alluser = new mongoose.Schema({
  fullname: {
    type: String,
  },
  email: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  lastLogin: {
    type: Date,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = alluser;
