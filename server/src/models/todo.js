const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  title: String,
  desc: String,
  Date: Date,
  time: String,
  edited: { type: Boolean, default: false},
})

module.exports = mongoose.model('TodoList', todoSchema)