var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/mydb1';
MongoClient.connect(url,function(err,db){
    if(err)throw err;
    var dbo = db.db('mydb1');
    dbo.collection("Student").findOne({},function(err,res){
        if(err)throw err;
        console.log(res.college);
    });
});