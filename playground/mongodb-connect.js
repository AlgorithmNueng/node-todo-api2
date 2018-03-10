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

  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos count: ', count);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('User').find({name: 'Andrew'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  client.close();
});
