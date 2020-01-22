const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

userRouter.get("/", userController.index);
userRouter.post("/", userController.create);
userRouter.get("/:id", userController.read);
userRouter.put("/:id", userController.update);
userRouter.delete("/:id", userController.delete);

module.exports = userRouter;
