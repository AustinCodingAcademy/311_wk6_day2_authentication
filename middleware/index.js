const jwt = require('jsonwebtoken')

const logger = (req, res, next) => {
  console.log(
    'Logging route:', req.users, new Date().toISOString()
  )
  next();
}

const authenticate = (req, res, next) => {
  //get auth header value
  const bearerHeader = req.headers['authorization']
  //check if bearer is undefined
  if(typeof bearerHeader !== 'undefined'){
    req.user = decoded;
    next();
  }else{
    res.sendStatus(401) && alert("dude, you suck!");
  }
}

module.exports = {
  logger,
  authenticate
}