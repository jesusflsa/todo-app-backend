const { Router } = require("express");
const router = Router();
// Routers
const tasksRouter = require("./tasks");
const authRouter = require("./auth");
const userRouter = require("./user");

router.use("/tasks", tasksRouter);
router.use("/auth", authRouter);
router.use('/user', userRouter)


module.exports = router;
