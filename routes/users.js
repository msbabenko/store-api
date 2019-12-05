const express = require("express");
const router = express();

router.get("/", (req, res) => {
  res.send("Users get");
});

router.post("/", (req, res) => {
  res.send("Users post");
});

router.put("/:userId", (req, res) => {
  res.send("User put");
});

router.delete("/:userId", (req, res) => {
  res.send("User delete");
});

module.exports = router;
