var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/mydb1';
MongoClient.connect(url,function(err,db){
    if(err)throw err;
    var dbo = db.db('mydb1');

    dbo.collection("Student").find({}).toArray(function(err,res){
        if(err)throw err;
        console.log(res);
        db.close();
    });
});