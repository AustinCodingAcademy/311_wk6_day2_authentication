require('dotenv').config() //Loads environment variables from .env file
const express = require("express");
const bodyParser = require("body-parser");//npm library responsible for parsing the incoming request bodies,
//parsing text, JSON, url-encoded and raw data set through an HTTP request body. 
const { logger } = require('./middleware');
const usersRouter = require('./routers/users');
const authRouter = require('./routers/auth');

const app = express();
// server listening on this port
const port = process.env.PORT || 4001;

app.use(bodyParser.json())
app.use(logger) //console logs routes used and time
app.use('/users', usersRouter)
app.use('/auth', authRouter)

app.get('/', (req, res) => {
  res.send('Welcome to our server!')
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
