require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require('./routers/users');
const authRouter = require('./routers/auth');
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4001;

app.use(cors())
app.use(bodyParser.json())
// app.use(function(req, res, next) {
// res.header("Access-Control-Allow-Origin", "*");
// res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use('/users', usersRouter)
app.use('/auth', authRouter)

app.get('/', (req, res) => {
  res.send('Welcome to our server!')
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
