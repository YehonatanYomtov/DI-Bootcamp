const express = require("express");

const {
  getAllTasks,
  getATask,
  createATask,
  updateATask,
  deleteATask,
} = require("../controllers/tasks.controller.js");
const validateTask = require("../middlewares/validateTask.js");

const router = express.Router();

router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getATask);

router.post("/tasks", validateTask, createATask);

router.put("/tasks/:id", validateTask, updateATask);

router.delete("/tasks/:id", deleteATask);

module.exports = router;
