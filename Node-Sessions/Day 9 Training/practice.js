// requiring the promise module
var Promise = require('promise');
var MongoClient =  require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB'
//Database Connection
MongoClient.connect(url).then(function(err, db){
    var db = db.db("EmployeeDB");
    db.createCollection("Employee", function(err, response){
        if(err)throw err;
        console.log("Collection Created");
    });
    var data = {
        EmployeeID   : "888181",
        EmployeeName : "Pranav Kapse",
        EmplpoyeeDOJ : "21-Nov-2020",
        EmployeeCity : "Pune"        
    };
    db.collection("Employee").insertOne(data, function(err, data){
        if(err) throw err;
        console.log("Record Inserted Successfully");
    });

    db.collection("Employee").updateOne(
        {EmployeeID : "888181"},
        {$set : {
            EmployeeID : "888888"
        }
    });
});