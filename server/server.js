const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID} = require('mongodb');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save(function (e, doc) {
    if (e) res.status(400).send(e)
    res.send(doc);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }).catch((e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id, function(err, todo) {
    if (err) return res.status(400).send();
    if (!todo) return res.status(404).send();

    res.send(todo);
  });
});


app.listen(3000, () => {
  console.log('Start on port 3000');
});

module.exports = { app };

// NOTE: connect mongoose -> create Schema -> Create model -> Action etc.
