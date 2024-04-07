const User = require("../../models/User");

async function loginUser(username, password) {
  const user = await User.findOne({ username });

  if (!user) return null;

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) return null;

  return user;
}

module.exports = loginUser;