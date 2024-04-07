const { getUserByToken } = require("../user/getUser");

async function saveTask(token, task) {
  const user = await getUserByToken(token);
  user.addTask(task);
}

module.exports = { saveTask };
