require('dotenv').config()
const express = require("express");
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser");
const usersRouter = require('./routers/users');
const authRouter = require('./routers/auth');
const pool = require("./sql/connection")

const app = express();
const port = process.env.PORT || 4001;

app.use(bodyParser.json())
app.use('/users', usersRouter)
app.use('/auth', authRouter)

app.get('/', (req, res) => {
  res.send('Welcome to our server!')
})

app.post('/api/posts', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Post created...',
        authData
      })
    }
  })
})

app.post('/api/login', (req, res) => {
  // Mock user
  const user = {
    id: 1,
    username: 'Connor',
    email: 'csundbeck@gmail.com'
  }
  jwt.sign({user}, 'secretkey', {expiresIn: '60s'}, (err, token) => {
    res.json({
      token
    });
  });
});

//Format of token
//Authorization: Bearer <access token>

function verifyToken(req, res, next) {
  // Get the auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if not undefined
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});