const express = require("express");
const { OrdersModel } = require("../models/OrderModel");
const isLoggedIn = require("../middleware/isLoggedIn");

const router = express.Router();

router.post("/newOrder", isLoggedIn, async (req, res) => {
  const newOrder = new OrdersModel(req.body);
  await newOrder.save();
  res.send("Order saved");
});

module.exports = router;