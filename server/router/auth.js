const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello world, I'm home page from router js`);
});

router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Invalid username or email" });
  }

  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "Email already exists" });
      }
      const user = new User({ name, email, phone, work, password, cpassword });

      user
        .save()
        .then(() => {
          res.status(201).json({ message: "User saved successfully" });
        })
        .catch((err) => res.status(500).json({ error: "Failed to save user" }));
    })
    .catch((err) => {
      console.log(err);
    });

  // console.log(req.body);
  // console.log(name);
  // console.log(email);
  // res.json({ message: req.body });
  // res.send("mera registered ho rha hai");
});

module.exports = router;
