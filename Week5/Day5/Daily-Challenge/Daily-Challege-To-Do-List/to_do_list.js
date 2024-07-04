const form = document.querySelector("form");
const input = document.querySelector("input");
const tasksList = document.querySelector(".listTasks");

const tasks = [];

let id = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addTask(input.value);
  input.value = "";
});

function addTask(taskText) {
  if (taskText.trim() === "") {
    return;
  }

  const task = { task_id: id++, text: taskText, done: false };

  tasks.push(task);

  createTaskHtml(task);
  //   const liTask = createTaskHtml(taskText, id);
}

function createTaskHtml(task) {
  const t_id = task.task_id;

  const taskHtml = `
    <li class="task" data-task-id="${t_id}">
        <button class="delete-btn">
            <i class="fas fa-times"></i>
        </button>
        <input type="checkbox" class="checkbox" ${task.done ? "checked" : ""}>
        <span>${task.text}</span>
    </li>
        `;

  tasksList.insertAdjacentHTML("beforeend", taskHtml);

  doneTask(task);
  deleteTask(t_id);
}

function doneTask(task) {
  const liTask = document.querySelector(`[data-task-id="${task.task_id}"]`);
  const checkbox = liTask.children[1];
  const span = liTask.children[2];

  checkbox.addEventListener("change", function () {
    task.done = !task.done;
    span.classList.toggle("done", task.done);
  });

  span.addEventListener("click", function () {
    checkbox.click();
  });
}

for (const task of tasks) {
  doneTask(task);
}

function deleteTask(id) {
  const liTask = document.querySelector(`[data-task-id="${id}"]`);
  const button = liTask.children[0];

  button.addEventListener("click", function () {
    liTask.remove();
  });
}

function clearList() {
  const clearListBtn = document.createElement("button");
  clearListBtn.textContent = "Clear";
  clearListBtn.classList.add("clear-tasks-btn");
  tasksList.append(clearListBtn);

  clearListBtn.addEventListener("click", function () {
    const allTasks = document.querySelectorAll(".task");

    for (const task of allTasks) {
      task.remove();
    }
  });
}

clearList();

// Another way of doing this exercise -->

// function createTaskHtml(text, id) {
//   const li = document.createElement("li");
//   li.classList.add("task");
//   li.setAttribute("data-task-id", id);

//   const button = document.createElement("button");
//   button.classList.add("delete-btn");

//   const i = document.createElement("i");
//   i.classList.add("fas", "fa-times");

//   const input = document.createElement("input");
//   input.setAttribute("type", "checkbox");
//   input.classList.add("checkbox");

//   const span = document.createElement("span");
//   span.textContent = text;

//   button.append(i);
//   li.append(button, input, span);
//   tasksList.append(li);

//   doneTask(input, span);
//   deleteTask(button, li);
// }

// function doneTask(checkbox, textSpan) {
//   checkbox.addEventListener("change", function () {
//     textSpan.classList.toggle("done");
//   });
// }

// function deleteTask(button, taskToDelete) {
//   button.addEventListener("click", function () {
//     taskToDelete.remove();
//   });
// }
