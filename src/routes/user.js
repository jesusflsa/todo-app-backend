const express = require("express");

const router = express.Router();

const userCtrl = require("../controllers/user");

// Sign Up
router.post("/", userCtrl.POST);

// Log In
router.get("/", userCtrl.GET);

module.exports = router;
