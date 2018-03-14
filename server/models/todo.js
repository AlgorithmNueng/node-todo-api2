const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// NOTE: 2.create Shema
var TodoShema = new Schema({
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});


// NOTE: 3.Create Mongoose Model
var Todo = mongoose.model('Todo', TodoShema);

module.exports = { Todo };
