const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: false },
  date: { type: String, required: true },
  time: { type: String, required: true },
  edited: { type: Boolean, default: false }
});

module.exports = mongoose.model("TodoList", todoSchema);
