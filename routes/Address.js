const express = require("express");
const router = express.Router();
const addressController = require("../controllers/addressController");

router.post("/post", addressController.store);

module.exports = router;
