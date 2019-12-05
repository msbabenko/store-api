const express = require("express");
const router = express();

router.get("/", (req, res) => {
  res.send("Products get");
});

router.post("/", (req, res) => {
  res.send("Products post");
});

router.put("/:productId", (req, res) => {
  res.send("Product put");
});

router.delete("/:productId", (req, res) => {
  res.send("Product delete");
});

module.exports = router;
