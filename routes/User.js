const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/post", userController.store);
router.post("/login", userController.login);
router.get("/verifEmail", userController.verifEmail);
//router.get("/getUser/:userId", userController.show);
module.exports = router;
