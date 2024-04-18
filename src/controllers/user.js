const { createUser } = require("../utils/user/createUser");
const { createToken } = require("../utils/token/createToken");
const { getUserByName } = require("../utils/user/getUser");
const { createTaskList } = require("../utils/tasks/createTaskList");
const { getTasks } = require("../utils/tasks/getTasks");

// Log in a user
const LOGIN = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  const user = await getUserByName(username);

  if (!user) {
    return res.status(401).json({ message: "Invalid username" });
  }

  if (!(await user.matchPassword(password))) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = await createToken(username);
  res.status(200).json({
    username: user.username,
    tasks: getTasks(user.tasks),
    token,
  });
};

// Register a new user
const SIGNUP = async (req, res) => {
  const { username, password, tasks } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  if (await getUserByName(username)) {
    return res.status(400).json({ message: "Username already exists" });
  }

  const taskList = createTaskList(tasks);
  const user = await createUser(username, password, taskList);
  const token = await createToken(username);
  res.status(201).json({
    username: user.username,
    tasks,
    token,
  });
};

module.exports = { SIGNUP, LOGIN };
