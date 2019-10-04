const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();
const { authenticate } = require("../middleware/index");

router.post("/signup", authController.signup);

router.post("/login", authController.login);

module.exports = router;
