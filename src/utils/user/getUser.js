const User = require("../../schemas/User");
const Token = require("../../schemas/Token");

async function getUserByName(username) {
  return await User.findOne({ username });
}

async function getUserByToken(token) {
  if (!token) return null
  const { username } = await Token.findOne({ token });
  return await getUserByName(username);
}

module.exports = { getUserByName, getUserByToken };
