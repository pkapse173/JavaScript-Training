var MongoCLient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";
MongoCLient.connect(url, function(err, db){
    if(err)throw err;
    var dbobject = db.db('mydb1');

// Sort Method  --
console.log("------Sorted data as follows-------");
    var sorted = { age : -1, name : 1};
    dbobject.collection("Student").find().sort(sorted).toArray(function(err,data){
        if(err) throw err;
        console.log(data);
        db.close();
    });
    });