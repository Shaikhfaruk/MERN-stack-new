const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`Hello world, I'm home page`);
});
app.get("/about", (req, res) => {
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
