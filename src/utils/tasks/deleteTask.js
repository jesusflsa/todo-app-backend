const { getUserByToken } = require("../user/getUser");

async function deleteTask(token, id) {
  const user = await getUserByToken(token);
  user.removeTask(id);
}

module.exports = { deleteTask };
