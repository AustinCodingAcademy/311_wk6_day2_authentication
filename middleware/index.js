const jwt = require('jsonwebtoken')




const logger = (req, res, next) => {
  console.log('Logging Route: ', req.path, new Date().toISOString());
  next()
}

const authenticate = (req, res, next) => {
  try {
    const header = req.headers['authorization']
    const [bearer, token] = header.split(' ')
    const decoded = jwt.verify(token, 'secret')
    if (!decoded){
      throw new Error ('Invalid Token')
    }
      req.user = decoded
      next()
  }
  catch (error) {
    res.sendStatus(401)
  }
  
}

module.exports = {
  logger,
  authenticate
}