
const usermodel = require("../models/authModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, email, password, role = "user" } = req.body;

    const existsuser = await usermodel.findOne({ email });
    if (existsuser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await usermodel.create({
      username,
      email,
      password: hashed,
      role,
    });

    return res.status(201).json({
      success: true,
      role: user.role,
      message: "User registered successfully",
      data: {
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, err: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await usermodel.findOne({
      email,
    });

    console.log("User found:", user);
    console.log("Role:", user?.role);

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    const ispass = await bcrypt.compare(password, user.password);
    if (!ispass) {
      return res
        .status(401)
        .json({ success: false, message: "Wrong password" });
    }

    const token = jwt.sign(
      { id: user._id.toString(), role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      role: user.role,
      token,
      message: "Login successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, err: error.message });
  }
};

module.exports = { register, login };
