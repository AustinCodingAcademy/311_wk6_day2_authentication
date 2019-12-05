const jwt = require('jsonwebtoken');
const moment = require('moment');

const logger = (req, res, next) => {
  let now = moment();
  console.log(`Logging route: ${req.originalUrl} -- ${now}`);
  next();
}

const authenticate = (req, res, next) => {
  let header = req.headers['authorization'];
  console.log(header);
  header = header.split(' ');
  const token = header[1];
  jwt.verify(token, 'secret', function(err, decoded) {
    if(err){
      console.log('Not authorized');
    }else {
      req.user = decoded;
      console.log('Henlo');
    }
    console.log(decoded);
  });
  next();
}

module.exports = {
  logger,
  authenticate
}