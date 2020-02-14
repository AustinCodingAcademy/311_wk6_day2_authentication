var request = require("request");

var options = { method: 'POST',
  url: 'https://bwdurst.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"iEccoxcUDIfkbZKuAsGwk61e4FC0VL6E","client_secret":"4tm33ZqvsCpQHQdGCZv8h6ubQSPfVSVrwcHujt1B63UFhaJrlSFrlG2T4pbySC3Q","audience":"my-express-auth","grant_type":"client_credentials"}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});