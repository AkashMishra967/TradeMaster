const express = require("express");
const { HoldingsModel } = require("../models/HoldingsModel");
const { PositionsModel } = require("../models/PositionsModel");

const router = express.Router();

router.get("/allHoldings", async (req, res) => {
  const data = await HoldingsModel.find({});
  res.json(data);
});

router.get("/allPositions", async (req, res) => {
  const data = await PositionsModel.find({});
  res.json(data);
});

module.exports = router;