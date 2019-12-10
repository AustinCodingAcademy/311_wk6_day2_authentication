const jwt = require('jsonwebtoken')

const logger = (req, res, next) => {
  let loginTime = new Date().toISOString()
  console.log('Logging route:', req.path, loginTime);
  next();
}

const authenticate = (req, res, next) => {
  // Getting auth header value
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;

    jwt.verify(req.token, bearerToken, (err, authData) => {
      if(err) {
        res.sendStatus(403);
      } else {
        res.json({
          message: 'Post created..',
          authData
        })
      }
    })
    next();
  } else {
    res.sendStatus(401);
  }
  
}

module.exports = {
  logger,
  authenticate
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJ0cnlpbmduZXcxMjMiLCJwYXNzd29yZCI6IlJFREFDVEVEIiwiaWF0IjoxNTc1NTExMjUyfQ.m0LZnQiOtfBm7zZPTxGX_-_QiOBmcqD22jE2Djuc6d4