import { TodoList } from "./todo.js";

const todoList1 = new TodoList();

todoList1.addTask("Buy Apples");
todoList1.addTask("Buy Grapes");
todoList1.addTask("Clean Car");
todoList1.addTask("Call shoe store");
todoList1.markAsComplete(1);
console.log(todoList1.listAllTasks());
