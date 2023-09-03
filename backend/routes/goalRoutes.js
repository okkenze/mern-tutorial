const express = require("express");
const {
  getGoal,
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
const goalRouter = express.Router();
const { protect } = require("../middleware/authMiddleWare");

goalRouter.route("/").get(protect, getGoals).post(protect, setGoal);
goalRouter
  .route("/:id")
  .get(protect, getGoal)
  .put(protect, updateGoal)
  .delete(protect, deleteGoal);

//router.get("/:id", getGoal);

//router.get("/", getGoals);

//router.post("/", setGoal);

//router.put("/:id", updateGoal);

//router.delete("/:id", deleteGoal);

module.exports = goalRouter;
