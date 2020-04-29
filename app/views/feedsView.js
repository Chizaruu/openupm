const express = require("express");
const router = express.Router();
const PackageFeed = require("../models/packageFeed");

router.get("/rss", async function(req, res) {
  const data = await PackageFeed.getFeedRecentUpdate("rss2");
  res.set("Content-Type", "application/rss+xml");
  res.send(data);
});

router.get("/atom", async function(req, res) {
  const data = await PackageFeed.getFeedRecentUpdate("atom1");
  res.set("Content-Type", "application/atom+xml");
  res.send(data);
});

router.get("/json", async function(req, res) {
  const data = await PackageFeed.getFeedRecentUpdate("json1");
  res.set("Content-Type", "application/json");
  res.send(data);
});

module.exports = router;
