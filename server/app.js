const dotenv = require("dotenv");

const mongoose = require("mongoose");
const express = require("express");
const app = express();

// create a data base... when you get a link from mongodb you need to change myNewProject name and password
const DB =
  "mongodb+srv://faruk:farukshaikh@cluster0.8zamo.mongodb.net/mern-learn?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connection successfully");
  })
  .catch((err) => console.log("connection error"));

// Middelware for secure your useNewConnection

const middleware = (req, res, next) => {
  console.log("middleware okk");
  next();
};

app.get("/", (req, res) => {
  res.send(`Hello world, I'm home page`);
});
app.get("/about", middleware, (req, res) => {
  res.send(`Hello world, I'm about page`);
});
app.get("/contact", (req, res) => {
  res.send(`Hello world, I'm contact page`);
});
app.get("/login", (req, res) => {
  res.send(`Hello world, I'm Login page`);
});
app.get("/register", (req, res) => {
  res.send(`Hello world, I'm Register page`);
});

app.listen(3000, (err, res) => {
  console.log("server listening on port 3000");
});
