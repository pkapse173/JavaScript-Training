var MongoClient = require ('mongodb').MongoClient;

//create database  names mydb
var url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, function(err,db){
    if(err) throw err;
    var dbobject = db.db("mydb");

    //creating a collection named employee
    dbobject.createCollection("employee", function(err,response){
        if(err) throw err;
        console.log("Collection created");
        db.close();
    });   
});  //Note: Collection in MongoDB is the same as table in MySql
