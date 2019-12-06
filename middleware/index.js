const jwt = require('jsonwebtoken')

const logger = (req, res, next) => {
  console.log( 'Logging route', req.path ,new Date().toISOString())
  next()
}

const authenticate = (req, res, next) => {
  let header = req.headers['authorization'];
  
  //console.log before the error. insert string before the code to identify
  console.log("header test", req.headers)
  console.log("header", header)
  
  // header = header.split(' ');
  //I commented this out since I received an error in the web browser since header is "undefined"
  console.log(header);
  // const token = header[1]
  //I commented this out as I was receiving an error in the web browser since header is "undefined"
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsInBhc3N3b3JkIjoiUkVEQUNURUQiLCJpYXQiOjE1NjE1ODM3MDR9.oTiDpNWJ3-JZ1k47nG-xQyi1fk_zlNjRgAbxRrYTlJU"
  //token variable was hardcoded to manually authorize. 
  console.log(token)
  jwt.verify(token, 'secret', function(err, decoded) {

  if(err) {
    console.log(err)
    res.sendStatus(401)
    console.log('Unauthorized')
  } else {
    req.user = decoded
    console.log('Authorized')

  next()
}
});
}


module.exports = {
  logger,
  authenticate
}