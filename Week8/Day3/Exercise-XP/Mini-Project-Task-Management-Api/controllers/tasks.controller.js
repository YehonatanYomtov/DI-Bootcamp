const { readTasks, writeTasks } = require("../utils/fileUtils.js");

function getAllTasks(req, res) {
  const tasks = readTasks();
  res.json(tasks);
}

function getATask(req, res) {
  const { id } = req.params;

  const tasks = readTasks();
  const task = tasks.find((tsk) => tsk.id === parseInt(id));

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
}

function createATask(req, res) {
  const newTask = req.body;
  const tasks = readTasks();

  newTask.id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
  tasks.push(newTask);

  writeTasks(tasks);
  res.status(201).json(newTask);
}

function updateATask(req, res) {
  const { id } = req.params;
  const updatedTask = req.body;

  const tasks = readTasks();
  const taskIndex = tasks.findIndex((tsk) => tsk.id === parseInt(id));

  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };

    writeTasks(tasks);
    res.json(tasks[taskIndex]);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
}

function deleteATask(req, res) {
  const { id } = req.params;

  const tasks = readTasks();
  const filteredTasks = tasks.filter((tsk) => tsk.id !== parseInt(id));

  if (filteredTasks.length !== tasks.length) {
    writeTasks(filteredTasks);
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Task not found" });
  }
}

module.exports = {
  getAllTasks,
  getATask,
  createATask,
  updateATask,
  deleteATask,
};
