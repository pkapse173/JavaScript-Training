var Promise = require('promise');
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/EmpDB";
MongoClient.connect(url).then(function(err, data){
    if(err)throw err;
    data.collection('Employee').insertOne({
        EmployeeID : "888181",
        EmployeeName : "Pranav",
        EmployeeDOJ : "21-Nov-2020",
        EmployeeCity: "Pune"
    })
    .then(function(data1){
        data1.collection('Employee').insertOne({
            EmployeeID : "987222",
            EmployeeName : "Neeraj Chopra",
            EmployeeDOJ : "01-Jun-2021",
            EmployeeCity: "Haryana"
    })
    .then(function(data2){
        data2.collection('Employee').insertOne({
            EmployeeID : "777153",
            EmployeeName : "Mirabai Chanu",
            EmployeeDOJ : "11-Aug-2019",
            EmployeeCity: "Imphal"
    })    
    console.log("Multiple records are inserted successfully"); 
});
});
});