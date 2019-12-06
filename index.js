const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require('./routers/users');
const authRouter = require('./routers/auth');

const app = express();
const port = process.env.PORT || 4001;
const { logger } = require('./middleware')

app.use(bodyParser.json())
app.use(logger)
app.use('/users', usersRouter)
app.use('/auth', authRouter)
//extra credit
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send('Welcome to our server!')
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
