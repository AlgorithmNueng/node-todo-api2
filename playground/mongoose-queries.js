const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5aa4e4ff1ec2d12d141162f8';
var UserId = '5aa48eee02381d25808be5d4';

// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid.');
// }

// Todo.find({_id: id}, function (err, result) {
//   if (err) return console.log('Unable to find Todos');
//   console.log('Todos ', JSON.stringify(result, undefined, 2));
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', JSON.stringify(todo, undefined, 2));
// });

// Todo.findById(id, function(err, todo) {
//   if (err) return console.log('Id not found');
//
//   if (!todo) return console.log('Id not found.');
//   console.log('Todo By Id', JSON.stringify(todo, undefined, 2));
// });

User.findById(UserId, function(err, user) {
  if (err) return console.log(`Can't find user please try agian later...`);
  if (!user) return console.log('User not found.');
  console.log('User', JSON.stringify(user, undefined, 2));
});
