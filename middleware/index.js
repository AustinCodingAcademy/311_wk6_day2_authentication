const jwt = require('jsonwebtoken')

// const logger = () => {}

const logger = (req, res, next) => {
  console.log('Logging route:', req.url, new Date().toISOString());
  next()
  }

const authenticate = (req, res, next) => {
  let bearerHeader = req.headers['authorization'];
  //Check if the bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
//Split at the space and get token from array
 let token = bearerHeader.split(' ')[1];
 //Verify token
 jwt.verify(token, 'secret', function(err, decoded) {
  console.log(decoded, 'Decoded goes here') // bar
  //If the token is very then jwt will return decoded
  if(decoded) {
    req.user = decoded
    next();
  }else {
    //Forbidden
    res.sendStatus(401)
  }
});
}
  }
// const authenticate = (req, res, next) => {
//   let header = req.headers['authorization']
//   let token = header.split(' ')[1]
//   jwt.verify(token, 'secret', function(err, decoded) {
//   console.log(decoded) // bar
//   if(decoded){
//   req.user = decoded
//   next()
//   }
//   else {
//   res.sendStatus(401)
//   }
//   });
//   }
module.exports = {
  logger,
  authenticate
}

