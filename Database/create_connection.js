var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";
MongoClient.connect(url,function(error,db){
    if(error) throw error;
    console.log('Connection established successfully');
    console.log('Database created');
    db.close();
});