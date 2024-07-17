export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(taskText) {
    if (!taskText) {
      console.log("You need to input something.");
      return;
    }

    this.tasks.push({
      id: this.tasks.length,
      text: taskText,
      completed: false,
    });
  }

  markAsComplete(taskId) {
    this.tasks.forEach((task) => {
      if (task.id === taskId) {
        if (task.completed) {
          console.log("This task is already done 💪");
          return;
        } else {
          task.completed = true;
        }
      }
    });
  }

  listAllTasks() {
    const tasksToString = this.tasks.map((task) =>
      [task.text, task.completed].join(" - ")
    );
    return tasksToString.join("\n");
  }
}
