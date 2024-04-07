const { genHash } = require("../token/createToken");

function createTask(content, completed) {
  const id = genHash();
  return { content, id, completed };
}

module.exports = { createTask };
