const mongoose = require("mongoose");

const DB = process.env.DATABASE;
// const DB = "mongodb://127.0.0.1:27017";

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
  .catch((err) => console.log("connection error", err));
