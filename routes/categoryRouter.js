const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/categoryController");

categoryRouter.get("/", categoryController.index);
categoryRouter.post("/", categoryController.create);
categoryRouter.get("/:id", categoryController.read);
categoryRouter.put("/:id", categoryController.update);
categoryRouter.delete("/:id", categoryController.delete);

module.exports = categoryRouter;
