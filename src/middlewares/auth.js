const { getToken } = require("../utils/token/getToken");
const { verifyToken } = require("../utils/token/verifyToken");

const auth = async (req, res, next) => {
  const nonSecurePaths = ["/example", "/api/user",];
  if (nonSecurePaths.includes(req.path)) return next();

  const token = getToken(req.headers);

  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }

  const validate = await verifyToken(token);

  if (!validate) {
    return res.status(498).json({ message: "Token expired" });
  }

  next();
};

module.exports = auth;
