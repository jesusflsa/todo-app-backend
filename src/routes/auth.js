const express = require("express");
const authCtrl = require("../controllers/auth");

const router = express.Router();

router.get("/", authCtrl.GET);

module.exports = router;
