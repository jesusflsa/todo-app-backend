
function genHash() {
  return Math.random().toString(36).split("0.").join("");
}

function genToken() {
  return genHash() + genHash();
}

async function createToken(username) {
  const Token = require('../../schemas/Token')
  const token = new Token({ username });
  await token.save();
  return token.token;
}

module.exports = { genHash, genToken, createToken };
