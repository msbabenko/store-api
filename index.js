const express = require("express");
const app = express();
const port = 3005;

const products = require("./routes/productRouter");
const orders = require("./routes/orderRouter");
const users = require("./routes/userRouter");

const roles = require("./routes/roleRouter");
const categories = require("./routes/categoryRouter");

app.use("/products", products);
app.use("/orders", orders);
app.use("/users", users);

app.use("/roles", roles);
app.use("/categories", categories);

app.get("/", (req, res) => {
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Content-Type", "application/json");

  res.send({ message: "hello" });
});

app.listen(port, () => console.log(`API listening on port ${port}!`));
