const express = require("express");

const userRouter = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleWare");

userRouter.post("/", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/user", protect, getUser);

module.exports = userRouter;
