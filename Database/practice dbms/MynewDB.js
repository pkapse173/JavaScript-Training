var MongoClient = require('mongodb').MongoClient;

//Here creating new database with the name ---- "newDB"
var url = 'mongodb://localhost:27017/newDB';
MongoClient.connect(url,function(err,db){
    if(err)throw err;
    var newdbo = db.db("newDb");

//Here creating new collection with the name ----"Student"
    newdbo.createCollection("Student",function(err,res){
        if(err)throw err;
        console.log("Student collection is created");
        db.close();
    });
});