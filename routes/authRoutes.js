const express = require("express");
const {
  loginController,
  logoutController,
  registerController,
} = require("../controllers/authControllers");

//router object
const router = express.Router();

//routes
// REGISTER
router.post("/register", registerController);

//LOGIN
router.post("/login", loginController);

//LOGOUT
router.post("/logout", logoutController);

module.exports = router;
