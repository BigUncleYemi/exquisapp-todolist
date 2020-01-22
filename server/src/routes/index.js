// Import our Controllers
const todoController = require("../controllers/index.js");

const routes = [
  {
    method: "GET",
    url: "/list",
    handler: todoController.getTodoList
  },
  {
    method: "GET",
    url: "/list/:id",
    handler: todoController.getSingleTodo
  },
  {
    method: "POST",
    url: "/list/new",
    handler: todoController.addTodo
  },
  {
    method: "PUT",
    url: "/list/:id",
    handler: todoController.updateTodo
  },
  {
    method: "DELETE",
    url: "/list/:id",
    handler: todoController.deleteTodo
  }
];

module.exports = routes;
