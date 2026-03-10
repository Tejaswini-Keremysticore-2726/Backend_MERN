const express = require("express");
const router = express.Router();
const adminprodController = require("../Controllers/adminprodController");

router.post("/", adminprodController.createprod);
router.get("/", adminprodController.allprod);
router.get("/:id", adminprodController.singleprod);
router.put("/:id", adminprodController.updateprod);
router.delete("/:id", adminprodController.deleteprod);

module.exports = router;
