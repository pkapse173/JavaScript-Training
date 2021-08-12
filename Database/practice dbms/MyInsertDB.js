var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/';
MongoClient.connect(url,function(err,db){
    if(err)throw err;
    dbo = db.db('newDB1');

    var dataObj = {
        name : "Pranav Kapse",
        age : 22,
        college : "Sinhgad",
        city : "Pune"
    };

    dbo.collection("Student").insertOne(dataObj,function(err,res){
        if(err)throw err;
        console.log("One record is added in Student collection.");
        db.close();
    });
});