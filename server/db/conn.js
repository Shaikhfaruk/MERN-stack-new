const mongoose = require("mongoose");

const DB = process.env.DATABASE;
console.log(DB);
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
