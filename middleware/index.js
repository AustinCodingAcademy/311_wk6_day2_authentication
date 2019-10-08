const jwt = require('jsonwebtoken')

const logger = (req, res, next) => {
 console.log('Logging route:', req.path, new Date().toISOString())
 next()
}

// Logging route: /auth/signup 2019-10-04T01:08:00.803Z

const authenticate = (req, res, next) => {
  try{
  const authHeader = req.headers['authorization'];
  const [bearer, token] = header.split(' ');
  const decoded = jwt.verify(token, 'secret')
  if (!decoded){
    throw new Error('Invalid token')
  }
  req.user = decoded
  next()
}catch(error){
  res.sendStatus(401)
}
}

module.exports = {
  logger,
  authenticate
}