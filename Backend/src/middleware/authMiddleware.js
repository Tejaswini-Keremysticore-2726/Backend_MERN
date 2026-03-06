// // const jwt = require("jsonwebtoken");

// // const protect = (req, res, next) => {
// //   const takeToken = req.headers.authorization; // take    authorization header
// //   if (!takeToken || !takeToken.startsWith("Bearer ")) {
// //     return res
// //       .status(401)
// //       .json({ sucess: false, message: "No Token  Provided" });
// //   }
// //   const splittoken = takeToken.split(" ")[1]; //Bearer abc123xyz ----> after spliting ["Bearer", "abc123xyz"]
// //   //  1 index so  token = "abc123xyz"

// //   try {
// //     const decodedtoken_verify = jwt.verify(splittoken, process.env.JWT_SECRET); // its very imp step}
// //     console.log("✅ Decoded token:", decodedtoken_verify);
// //     req.user = decodedtoken_verify;
// //     next();
// //   } catch (err) {
// //     return res.status(401).json({ sucess: false, message: "Invalid Token" });
// //   }
// // };

// // module.exports = protect;

// const jwt = require("jsonwebtoken");

// const protect = (req, res, next) => {
//   const takeToken = req.headers.authorization;

//   if (!takeToken || !takeToken.startsWith("Bearer ")) {
//     return res.status(401).json({
//       success: false,
//       message: "No Token Provided",
//     });
//   }

//   const splittoken = takeToken.split(" ")[1];

//   try {
//     const decodedtoken_verify = jwt.verify(splittoken, process.env.JWT_SECRET);

//     console.log("✅ Decoded token:", decodedtoken_verify);

//     req.user = decodedtoken_verify;

//     next();
//   } catch (err) {
//     return res.status(401).json({
//       success: false,
//       message: "Invalid Token",
//     });
//   }
// };

// // module.exports = protect;

// const jwt = require("jsonwebtoken");

// const protect = (req, res, next) => {
//   // const takeToken = req.headers.authorization;
//   const tokencokkies = req.cookies.tokencokkies;
//   if (!takeToken || !takeToken.startsWith("Bearer ")) {
//     return res
//       .status(401)
//       .json({ success: false, message: "No Token Provided" });
//   }

//   const token = takeToken.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log("✅ Decoded token:", decoded);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(401).json({ success: false, message: "Invalid Token" });
//   }
// };

// module.exports = protect;

const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const protect = (req, res, next) => {
  const token = req.cookies.token; // cookie se token le rahe hai

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No Token Provided",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("✅ Decoded token:", decoded);

    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};

module.exports = protect;
