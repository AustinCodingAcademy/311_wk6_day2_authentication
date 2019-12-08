const jwt = require('jsonwebtoken')

const logger = (req, res, next) => {
  console.log('Logging route: ', req.method, req.path, new Date().toISOString());
  next();
}

const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (typeof authHeader !== 'undefined') {
    const bearer = authHeader.split(' ');
    const bearerToken = bearer[1];
    jwt.verify(bearerToken, 'shhhhh', (err, decoded) => {
      req.user = decoded;
      next();
    });
  } else {
    return res.sendStatus(401);
  }
}

module.exports = {
  logger,
  authenticate
}