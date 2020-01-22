const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController");

productRouter.get("/", productController.index);
productRouter.post("/", productController.create);
productRouter.get("/:id", productController.read);
productRouter.put("/:id", productController.update);
productRouter.delete("/:id", productController.delete);

module.exports = productRouter;
