const jwt = require("jsonwebtoken");

const logger = (req, res, next) => {
  console.log("Logging route:", req.path, new Date().toISOString());
  next();
};

const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const [bearer, token] = authHeader.split(" ");
    const decoded = jwt.verify(token, "secret");
    if (!decoded) {
      throw new error("Invalid token");
    }
    req.user = decoded;
    next();
  } catch (error) {
    res.sendStatus(401);
  }
};

module.exports = {
  logger,
  authenticate
};
