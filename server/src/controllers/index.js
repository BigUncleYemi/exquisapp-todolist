const boom = require("@hapi/boom");

// Get Data Models
const TodoList = require("../models/todo");

// Get all todo
exports.getTodoList = async (req, res) => {
  try {
    const todosList = await TodoList.find();
    return todosList;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single Todo by ID
exports.getSingleTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todosList = await TodoList.findById(id);
    return todosList;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new Todo
exports.addTodo = async (req, res) => {
  try {
    const todosList = new TodoList({ ...req.body });
    return todosList.save();
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
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a Todo
exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await TodoList.findByIdAndRemove(id);
    return todo;
  } catch (err) {
    throw boom.boomify(err);
  }
};
