const express = require("express");
const token = require("../Middleware/authMiddleware"); // login hai ? token sahi h ?
const isadmin = require("../middleware/updeluserbyadminMiddleware"); // admin h ??
const updateDeletebyadmin = require("../Controllers/updeluserbyadminController"); //sab sahi h to delte kroo
const router = express.Router();

router.put("/update/:id", token, isadmin, updateDeletebyadmin.update);
router.delete("/delete/:id", token, isadmin, updateDeletebyadmin.deletefun);

module.exports = router;
