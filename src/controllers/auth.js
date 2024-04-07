const { getTasks } = require("../utils/tasks/getTasks");
const { getToken } = require("../utils/token/getToken");
const { getUserByToken } = require("../utils/user/getUser");

async function GET(req, res) {
  const token = getToken(req.headers);
  const user = await getUserByToken(token);
  res.status(201).json({
    username: user.username,
    tasks: getTasks(user.tasks),
  });
}

module.exports = { GET };
