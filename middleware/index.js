const jwt = require('jsonwebtoken')
const logger = (req, res, next) => {
  console.log('Logging route', req.path, new Date().toISOString())
  next()
}

const authenticate = (req, res, next) => {
  //identify header from authentication
  let header = req.headers['authorization'];
  //verifying if header exist
  // if(typeof bearerHeader != 'undefined'){
  //   //use .split to separate token from bearer 
      header = header.split(' ');
  //   //retrieve the token from new array from .split method
     const token = header[1];
  //   //assign token 
    // req.token = bearerToken;

    //Verifies token
  jwt.verify(token, 'secret', function(err, decoded) {
    if(!err){
      req.user = decoded
      next()
    }
    else{
      res.sendStatus(401)
    }
  });
  }


module.exports = {
  logger,
  authenticate
}