var MongoCLient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";
MongoCLient.connect(url, function(err, db){
    if(err)throw err;
    var dbobject = db.db('mydb1');
   
    var query = {city : /^Pune/};
    dbobject.collection("Student").find(query).toArray(function(err,result){
        if(err)throw err;
        console.log(result);
    });
});