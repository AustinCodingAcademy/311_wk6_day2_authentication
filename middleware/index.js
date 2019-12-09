const jwt = require('jsonwebtoken')

const logger = (req, res, next) => {
console.log('Logging route:',req.path, new Date().toISOString())
next()
}

const authenticate = (req,res,next) => {
  try{
    const header = req.headers['authorization']
    header = header.split(' ');
    const token = header[1];
    jwt.verify(token, 'secret');
    req.user = decoded
    next();
  
  } catch {
    res.send("Unauthorized");
  }
};
  
    



module.exports = {
  logger,
  authenticate
}