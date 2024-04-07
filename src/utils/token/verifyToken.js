const Token = require("../../schemas/Token");

async function verifyToken(token) {
  const isToken = await Token.findOne({ token });
  if (!isToken) return false;
  if (isToken.limitTime < Date.now()) {
    await Token.findByIdAndDelete(isToken._id);
    return false;
  }
  return true;
}

module.exports = { verifyToken };
