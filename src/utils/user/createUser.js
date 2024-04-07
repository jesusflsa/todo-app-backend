const User = require("../../schemas/User");

async function createUser(username, password, tasks) {
  newUser = new User({ username, tasks });
  newUser.password = await newUser.encryptPassword(password);
  await newUser.save();
  return newUser;
}

module.exports = { createUser };
