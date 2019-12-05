const jwt = require('jsonwebtoken')


const logger = (req, res, next) => {
  console.log('Logging route:, req.path, newDate().toISOString()')
  next();
}

const authenticate = (req, res, next) => {
  let header = req.headers['authorization']
  console.log(header)
  header = header.split(' ')
  console.log(header)

  const token = header[1]

  jwt.verify(token, 'secret', function(err, decoded){
    if (err) {
      console.log("Not Authorized")
    } else {
      req.user = decoded
    }
    console.log(decoded)
  })
  next(); 
}

  
module.exports = {
  logger,
  authenticate
}