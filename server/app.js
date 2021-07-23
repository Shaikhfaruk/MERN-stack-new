const dotenv = require("dotenv");
const express = require("express");
const app = express();

// create a data base... when you get a link from mongodb you need to change myNewProject name and password
// dotenv.config({ path: "./config.env" });
dotenv.config();

// conn from conn.js start
require("./db/conn");
// const User = require("./model/userSchema");
app.use(express.json());

// we link the router files to make our route easy to use
app.use(require("./router/auth"));

const PORT = process.env.PORT;

// Middelware for secure your useNewConnection

const middleware = (req, res, next) => {
  console.log("middleware okk");
  next();
};

app.get("/about", middleware, (req, res) => {
  res.send(`Hello world, I'm about page`);
});
app.get("/contact", (req, res) => {
  // res.cookie("Test", "faruk");
  res.send(`Hello world, I'm contact page`);
});
app.get("/signin", (req, res) => {
  res.send(`Hello world, I'm Login page`);
});
app.get("/register", (req, res) => {
  res.send(`Hello world, I'm Register page`);
});

app.listen(PORT, (err, res) => {
  console.log(`server listening on port no ${PORT}`);
});
