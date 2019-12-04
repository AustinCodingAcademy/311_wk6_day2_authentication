const jwt = require("jsonwebtoken");

const logger = (req, res, next) => {
  console.log('Logging Route:', '/users', 'at ' + new Date())
  next()
};

const authenticate = () => {};

module.exports = {
  logger,
  authenticate
};
