const express = require("express");

const router = express.Router();

const userCtrl = require("../controllers/user");

// Sign Up
router.post("/signup", userCtrl.SIGNUP);

// Log In
router.post("/login", userCtrl.LOGIN);

module.exports = router;
