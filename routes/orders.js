const express = require("express");
const router = express();

router.get("/", (req, res) => {
  res.send("Orders get");
});

router.post("/", (req, res) => {
  res.send("Orders post");
});

router.put("/:orderId", (req, res) => {
  res.send("Order put");
});

router.delete("/:orderId", (req, res) => {
  res.send("Order delete");
});

module.exports = router;
