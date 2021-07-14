const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello world, I'm home page from router js`);
});

// using promises above is

// router.post("/register", async (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "Invalid username or email" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "Email already exists" });
//       }
//       const user = new User({ name, email, phone, work, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "User saved successfully" });
//         })
//         .catch((err) => res.status(500).json({ error: "Failed to save user" }));
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   // console.log(req.body);
//   // console.log(name);
//   // console.log(email);
//   // res.json({ message: req.body });
//   // res.send("mera registered ho rha hai");
// });

// using async ka upyog b kr skte hai🙂

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Invalid username or email" });
  }
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password do not match" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      // hashing karana hai yaha

      const userRegister = await user.save();

      if (userRegister) {
        res.status(201).json({ message: "User saved successfully" });
      } else {
        res.status(500).json({ error: "Failed to save user" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

// login route

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please filled the data properly" });
    }
    const userLogin = await User.findOne({ email: email });

    console.log(userLogin);
    if (!userLogin) {
      res.status(400).json({ error: "Please register first" });
    } else {
      res.json({ message: "User signin successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
