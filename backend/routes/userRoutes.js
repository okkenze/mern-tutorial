const express = require("express");

const userRouter = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");

userRouter.post("/", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/user", getUser);

module.exports = userRouter;
