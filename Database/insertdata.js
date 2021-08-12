//We need to import mongo client
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//create DB collection with a call function
MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("mydb");

    //create data object or data-record
    var dataobj = { name : "Techmastaers inc ",
                    address : "Pune, Maharashtra",
                    Known_for : "Good Learner"};

                
    //Inserting the record into employee table
    dbo.collection("employee").insertOne(dataobj,function(err,response){
        if(err)throw err;
        console.log("1 Document is inserted");

        db.close();
    });
}); 