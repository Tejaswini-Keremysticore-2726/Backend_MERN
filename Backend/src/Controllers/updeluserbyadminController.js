// const User = require("../models/userModel");
const Login = require("../models/loginModel");

const update = async (req, res) => {
  try {
    console.log("ID:", req.params.id);
    console.log("Body:", req.body);
    const { id } = req.params;
    const { fullname, email, password, role } = req.body;

    const updateuser = await Login.findByIdAndUpdate(
      id,
      {
        fullname,
        email,
        password,
        role,
      },
      { returnDocument: "after" },
    );
    console.log("Updated:", updateuser);
    if (updateuser) {
      res
        .status(200)
        .json({ status: true, message: "User updated Successfully" });
    } else {
      res
        .status(409)
        .json({ status: false, message: "issue for updating user try agian!" });
    }
  } catch (err) {
    console.log("Error:", err.message); // yahan actual error dikhega
    res.status(500).json({ status: false, message: err.message });
  }
};

const deletefun = async (req, res) => {
  const { id } = req.params;
  const deleteuser = await Login.findByIdAndDelete(id);
  if (deleteuser) {
    res
      .status(200)
      .json({ status: true, message: "User deleted Successfully" });
  } else {
    res
      .status(404)
      .json({ status: false, message: "User not found Try again!" });
  }
};

module.exports = { update, deletefun };
