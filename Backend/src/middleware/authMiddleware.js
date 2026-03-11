const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const protect = (req, res, next) => {
  // console.log("Cookies:", req.cookies);
  // console.log("Token:", req.cookies.token);
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
