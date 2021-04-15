const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  id: String,
  title: String,
  completed: Boolean,
})

const todoModel = mongoose.model('todo', TodoSchema);

module.exports = todoModel;
