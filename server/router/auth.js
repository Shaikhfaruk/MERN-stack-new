const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`Hello world, I'm home page from router js`);
});

router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  console.log(req.body);
  console.log(name);
  console.log(email);
  // res.json({ message: req.body });
  // res.send("mera registered ho rha hai");
});

module.exports = router;
