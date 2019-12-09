const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routers/users");
const authRouter = require("./routers/auth");
const { logger } = require("./middleware/index");

// inserted to pull from form


const app = express();
const port = process.env.PORT || 4001;

app.use(express.static("./formInput"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

// Inserted to pull from form

app.use(bodyParser.json());
app.use(express.static("index"));
app.use("/users", logger, usersRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
