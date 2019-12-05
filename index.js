const express = require("express");
const app = express();
const port = 3005;

const products = require("./routes/products");
const orders = require("./routes/orders");
const users = require("./routes/users");

app.use("/products", products);
app.use("/orders", orders);
app.use("/users", users);

app.get("/", (req, res) => {
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Content-Type", "application/json");

  res.send({ message: "hello" });
});

app.listen(port, () => console.log(`API listening on port ${port}!`));
