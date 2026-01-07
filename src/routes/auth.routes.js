const express = require("express");

const router = express.Router();

// importing controllers
const {
  registerController,
  loginController,
} = require("../controllers/auth.controllers");

// route for user register
router.post("/register", registerController);

// route for user login
router.post("/login", loginController);

module.exports = router;
