const express = require("express");
const roleRouter = express.Router();
const roleController = require("../controllers/roleController");

roleRouter.get("/", roleController.index);
roleRouter.post("/", roleController.create);
roleRouter.get("/:id", roleController.read);
roleRouter.put("/:id", roleController.update);
roleRouter.delete("/:id", roleController.delete);

module.exports = roleRouter;
