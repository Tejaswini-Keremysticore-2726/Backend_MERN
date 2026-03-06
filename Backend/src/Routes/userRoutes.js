const express = require("express");
const getlogedinuser = require("../Controllers/userController");
const router = express.Router();

router.get("/loginuser", getlogedinuser);

module.exports = getlogedinuser;
