const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require('./routers/users');
const authRouter = require('./routers/auth');

const app = express();
const port = process.env.PORT || 4001;

app.use(bodyParser.json())
app.use('/users', usersRouter)
app.use('/auth', authRouter)



// Secure the routes below//
app.get('/', (req, res) => {
  res.send('Welcome to our server!')
})



// however many secure routes there are below // 
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
