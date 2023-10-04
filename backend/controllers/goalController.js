const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
const User = require("../models/userModel");
const mongoose = require("mongoose");

const getGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: `No such goal with id: ${id}` });
  }

  //const user = await User.findById(req.user.id);

  //Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  const goal = await Goal.findById(id);

  //Make sure the logged in user matches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  res.status(200).json(goal);
});

const getGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.find({ user: req.user.id });
  res.status(200).json(goal);
});

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text");
  }
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(goal);
});

const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  //const user = await User.findById(req.user.id);

  //Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  //Make sure the logged in user matches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  //const user = await User.findById(req.user.id);

  //Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  //Make sure the logged in user matches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await goal.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoal,
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
