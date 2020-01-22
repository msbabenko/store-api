const express = require("express");
const orderRouter = express.Router();
const orderController = require("../controllers/orderController");

orderRouter.get("/", orderController.index);
orderRouter.post("/", orderController.create);
orderRouter.get("/:id", orderController.read);
orderRouter.put("/:id", orderController.update);
orderRouter.delete("/:id", orderController.delete);

module.exports = orderRouter;
