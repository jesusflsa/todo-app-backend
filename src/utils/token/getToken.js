function getToken(headers) {
  const { authorization } = headers;
  const token = authorization && authorization.split(" ")[1];
  return token;
}

module.exports = { getToken };
