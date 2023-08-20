const express = require("express");
const {
  getGoal,
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
const goalRouter = express.Router();

goalRouter.route("/").get(getGoals).post(setGoal);
goalRouter.route("/:id").get(getGoal).put(updateGoal).delete(deleteGoal);

//router.get("/:id", getGoal);

//router.get("/", getGoals);

//router.post("/", setGoal);

//router.put("/:id", updateGoal);

//router.delete("/:id", deleteGoal);

module.exports = goalRouter;
