const jwksRsa = require('jwks-rsa');
const jwt = require('express-jwt');





//  This is the Auth0 version of authorization
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  // Validate the audience and the issuer.
  audience: process.env.AUTH0_IDENTITY,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});









// This is a manual verification of authorization token
// Format of a bearer Token is a two index array...  Bearer <access_token>

// Funcrion to Verify Token
function verifyToken(req, res, next) {

  // Get the Auth header value
  const bearerHeader = req.headers['authorization'];

  // Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {

      // Split at the space
      const bearer = bearerHeader.split(' ');

      // Get the token from the Array
      const bearerToken = bearer[1];

      // Set the token
      req.token = bearerToken;

      // Next Middleware
      next();

  } else {
      // Forbidden
      console.log('something went wrong with your token verification')
      res.sendStatus(403);
  }

}







// Bonus
// Create a function called `logger` in the `middleware/index.js` file. It's purpose will be to log the route and date/time that each request happened. 
// Inside of this function we will put a `console.log` statement with three arguments separated by a comma:

// 1. The string, 'Logging route:'
// 2. The request path ex. /users
// 3. The date/time in ISO format. Ex. new Date().toISOString()

// This is an example of application specific middleware. 
// Every route will now pass through our logger function and log the path and the date/time that the request was made. 
// This would be useful for determining our most popular routes.

const logger = (req, res, next) => {
  console.log('Logging route:', req.path, new Date().toISOString())
}







// Export middleware functions bact to the rest of the application

module.exports = {
  logger,
  checkJwt,
  verifyToken,
}