const express = require("express");
const app = express();
const User = require("./models/User");
const Product = require("./models/Product");
const CartItem = require("./models/CartItem");
const Order = require("./models/Order");

const port = 5000;
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/Model", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => {
    console.log("Connected to the database.");
    app.listen(port, () => {
      console.log(`Server Running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });
