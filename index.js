require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require('./routers/users');
const authRouter = require('./routers/auth');
const { logger } = require('./middleware');

const app = express();
const port = process.env.PORT || 4001;

app.use(bodyParser.json())
app.use('/users', logger)
app.use('/users', usersRouter)
app.use('/auth', authRouter)

app.get('/', (req, res) => {
  res.send('Welcome to our server!')
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});


// headers: { 'content-type': 'application/json' },
// body: '{"client_id":"dzankE5r47NVwj2tgQ7Nwty9LROL3EpK","client_secret":"eQ_0BM5MJaJQ-4x2ubq7lvSLzMZ-N9ei0L02YO8uxxfj8eitoHbcOrvTf5J6OYDM","audience":"my-express-app","grant_type":"client_credentials"}' };

