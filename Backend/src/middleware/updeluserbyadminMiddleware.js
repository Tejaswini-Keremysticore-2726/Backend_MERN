const isAdmin = (req, res, next) => {
  if (req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({
      status: false,
      message: "only admin can update and delete the user",
    });
  }
};

module.exports = isAdmin;
