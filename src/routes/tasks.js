const express = require("express");

const router = express.Router();
const TasksCtrl = require("../controllers/tasks");

router.post("/", TasksCtrl.POST);
router.delete("/:id", TasksCtrl.DELETE);

module.exports = router;
