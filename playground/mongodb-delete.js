const {MongoClient, ObjectID} = require('mongodb');

// NOTE: -> {field} ของ Obj

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoApp';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log('Unable to connect mongodb server.');
  }
  console.log("Connected successfully to server");
  const db = client.db(dbName);

  // db.collection('Todos').deleteMany({text : 'Walk the dog'}).then((result) => {
  //     console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'Fuck you'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });

  client.close();
});
