require("dotenv").config();
const mongoose = require("mongoose");


const connectDB = (url) => {
  return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected to Db");
  });
};

module.exports = connectDB;