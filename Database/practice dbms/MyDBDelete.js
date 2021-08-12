var MongoCLient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";
MongoCLient.connect(url, function(err, db){
    if(err)throw err;
    var dbobject = db.db('mydb1');
    
    var query = {city : "Delhi"};
    dbobject.collection("Student").deleteOne(query,function(err,result){
        if(err)throw err;
        console.log(result); 
    });
});