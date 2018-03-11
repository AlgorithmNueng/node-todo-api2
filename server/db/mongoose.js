const mongoose = require('mongoose');
const dbName = 'TodoApp';
const mongoURL = `mongodb://localhost:27017/${dbName}`;

mongoose.connect(mongoURL, function(error) {
  if (error) return console.log(error);
  // Check error in initial connection. There is no 2nd param to the callback.

  console.log('Connect Database success');
});

module.exports = { mongoose };
