var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb1");
    
    var dataObj = [{
        name : "Pranav Kapse",
        age : 22,
        college : "Sinhgad",
        city : "Pune"
        },
        {
        name : "Rohit Sharma",
        age : 32,
        college : "Fergueson",
        city : "Pune"
        },
        {
        name : "Virat Kohli",
        age : 30,
        college : "DPS",
        city : "Delhi"
        },
    ];
    
//MultiInsert data(insertMany)
    dbo.collection("Student").insertMany(dataObj, function(err, response) {
        if (err) throw err;
        console.log("Multiple Records are inserted");
        console.log("Number of Count inserted " + response.insertedCount);
        db.close();
    });
});