const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routers/users");
const authRouter = require("./routers/auth");
const { logger } = require("./middleware/index");

const app = express();
const port = process.env.PORT || 4001;

// app.use(express.static('index.html'))
app.get("/", (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.use(bodyParser.json());
app.use(express.static("index"));
app.use("/users", logger, usersRouter);
app.use("/auth", authRouter);


app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
