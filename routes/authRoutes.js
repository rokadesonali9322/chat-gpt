const express = require("express");
const { registerContoller, loginController, logoutController } = require("../controllers/authControllers");

// router object
const router =express.Router();

// routes
// register
router.post("/register",registerContoller)
// login
router.post("/login",loginController)

router.post("/logout",logoutController)

module.exports= router
