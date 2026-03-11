
const Login = require("../models/loginModel");

const getlogedinuser = async (req, res) => {
  try {
    const logins = await Login.find({
      isActive: true,
      role: "user",
    }).sort({ lastLogin: -1 });

    res.status(200).json({
      success: true,
      count: logins.length,
      getloginuser: logins,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", err: err.message });
  }
};

module.exports = getlogedinuser;
