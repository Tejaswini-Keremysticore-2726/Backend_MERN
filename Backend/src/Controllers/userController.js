// // const User = require("../models/userModel");

// // const User = mongoose.model('User', userSchema);

// // const getloogedin = async (req, res, next) => {
// //   try {
// //     const query = { role: "user", lastLogin: { $ne: null } };
// //     const alluserdata = await alluser
// //       .find(query)
// //       .select("fullname email isActive lastLogin createdAt")
// //       .sort({ lastLogin: -1 });

// //     res
// //       .status(200)
// //       .json({ success: true, count: alluserdata.length, data: alluserdata });
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ success: false, message: "server Error" });
// //   }
// // };
// // module.exports = {
// //   getloogedin,
// // };

// const Login = require("../models/loginModel");
// const getlogedinuser = async (req, res, next) => {
//   try {
//     // const getloginuser = await User.find({ isActive: true })
//     //   .select("fullname email isActive lastLogin createdAt")
//     //   .sort({ lastLogin: -1 });
//     const logins = await Login.find({ isActive: true })
//       .select("fullname email isActive lastLogin createdAt") // ✅ Login model
//       .sort({ lastLogin: -1 });
//     res
//       .status(200)
//       .json({ succes: true, count: getloginuser.length,  getloginuser: logins,  });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ success: false, message: "Server error", err: err.message });
//   }
// };
// module.exports = getlogedinuser;

// const Login = require("../models/loginModel");

// const getlogedinuser = async (req, res) => {
//   try {
//     const logins = await (
//       await Login.find({ isActive: true, role: "user" })
//     ) // ✅ logins
//       .sort({ lastLogin: -1 });

//     res.status(200).json({
//       success: true,
//       count: logins.length,
//       getloginuser: logins, // ✅ logins
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Server error", err: err.message });
//   }
// };

// module.exports = getlogedinuser;

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
