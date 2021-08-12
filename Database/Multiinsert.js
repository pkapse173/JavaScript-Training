//We need to import mongo client
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
//create DB collection with a call function
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    //create data object or data-record
    var dataobj = [{
            name: "Techmastaers inc ",
            address: "Pune, Maharashtra",
            Known_for: "Good Learner"
        }, { name: "Sachin", age: "27", city: "Kolhapur" },
        { name: "Pranav", age: "22", city: "Pune" }
    ];
    //Inserting the record into employee table
    dbo.collection("employee").insertMany(dataobj, function(err, response) {
        if (err) throw err;
        console.log("Multiple Document is inserted");
        console.log("Number of Count inserted " + response.insertedCount);
        db.close();
    });
});