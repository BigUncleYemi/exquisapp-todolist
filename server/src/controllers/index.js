const boom = require("@hapi/boom");

// Get Data Models
const TodoList = require("../models/todo");

// Get all todo
exports.getTodoList = async (req, res) => {
  try {
    const todosList = await TodoList.find();
    const data = { data: todosList };
    return data;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single Todo by ID
exports.getSingleTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todoItem = await TodoList.findById(id);
    const data = { data: todoItem };
    return data;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new Todo
exports.addTodo = async (req, res) => {
  try {
    const todoItem = new TodoList({ ...req.body });
    const newTodo = await todoItem.save();
    const data = { data: newTodo };
    return data;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing Todo
exports.updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = req.body;
    const { ...updateData } = todo;
    const update = await TodoList.findByIdAndUpdate(id, updateData, {
      new: true
    });
    return { data: update };
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a Todo
exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await TodoList.findByIdAndRemove(id);
    return { data: todo };
  } catch (err) {
    throw boom.boomify(err);
  }
};
