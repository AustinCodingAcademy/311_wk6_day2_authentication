const jwt = require('jsonwebtoken')


const logger = (req, res, next) => {
  let dateTime = new Date().toISOString();
  console.log('Logging route:', req.path);
  console.log('Time:', dateTime);
  next();
}

const authenticate = (req, res, next) => {
  let header = req.headers[ 'authorization' ];
  header = header.split(' ');
  const token = header[1];

  jwt.verify(token, 'secret', function(err, decoded) {
    if(err) {
      res.send('not authorized');
    } else {
      next();
    }
    console.log(decoded)
  });
};

module.exports = {
  logger,
  authenticate
}