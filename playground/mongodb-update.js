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

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5aa38e7d46c402ccf990424d')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  client.close();
});
