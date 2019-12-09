const jwt = require('jsonwebtoken')




const logger = (req, res, next) => {
  console.log('Logging Route: ', req.path, new Date().toISOString());
  next()
}

const authenticate = (req, res, next) => {

  let header = req.headers['authorization']
  console.log(header)
  
  let token = header[1]
  
  console.log(token)
  
  jwt.verify(token, 'secret', function(err, decoded){
    if(err){
      console.log('Invalid Token')
    }
    else{
      req.user = decoded
      console.log('success')
    }
  })
  next()
}

module.exports = {
  logger,
  authenticate
}