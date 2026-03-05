// const usermodel = require("../models/authModel");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const register = async (req, res) => {
//   try {
//     const { username, email, password, role = "user" } = req.body;
//     const existsuser = await usermodel.findOne({ email });
//     if (existsuser) {
//       console.log("already exists user pls try another");
//       res.status(400).json({ Success: false, message: "User already exists" });
//     }
//     const hashed = await bcrypt.hash(password, 10);
//     const user = await usermodel.create({
//       username,
//       email,
//       password: hashed,
//       role,
//     });
//     res.status(201).json({
//       success: true,
//       role: user.role,
//       message: "user registered successfully",
//       data: {
//         // id: user_id,
//         username: user.username,
//         email: user.email,
//         password: hashed,
//         role,
//       },
//     });
//   } catch (error) {
//     console.log("User not found");
//     res.status(500).json({ err: error.message });
//   }
// };

// // const login = async (req, res) => {
// //   try {
// //     const { identifier, password } = req.body;
// //     const user = await usermodel.findOne({
// //       $or: [{ username: identifier }, { email: identifier }],
// //     });
// //     console.log("User found:", user); // 👈 check full user object
// //     console.log("Role:", user?.role); //
// //     if (!user) {
// //       console.log("Invalid Credentials");
// //       res
// //         .status(400)
// //         .json({ Success: failed, message: "invalid email or passwords" });
// //     }

// //     const ispass = await bcrypt.compare(password, user.password);
// //     if (!ispass) {
// //       console.log("password doesn't match");
// //       res
// //         .status(401)
// //         .json({ Success: failed, message: "password doesn't match" });
// //     }
// //     res.status(201).json({ Success: true, message: "Login Successfully" });
// //   } catch (error) {
// //     console.log("user not found");
// //     res.status(500).json({ err: error.message });
// //   }
// // };

// const login = async (req, res) => {
//   try {
//     const { identifier, password } = req.body;

//     const user = await usermodel.findOne({
//       $or: [{ username: identifier }, { email: identifier }],
//     });

//     console.log("User found:", user);
//     console.log("Role:", user?.role);

//     if (!user) {
//       return res
//         .status(400)
//         .json({ success: false, message: "User not found" }); // ✅ return, false, lowercase
//     }

//     const ispass = await bcrypt.compare(password, user.password);
//     if (!ispass) {
//       return res
//         .status(401)
//         .json({ success: false, message: "Wrong password" }); // ✅ return, false
//     }
//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//     );

//     res.status(200).json({
//       success: true, // ✅ lowercase
//       role: user.role, // ✅ role added
//       token: token,
//       message: "Login successfully",
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, err: error.message });
//   }
// };
// module.exports = {
//   register,
//   login,
// };

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
