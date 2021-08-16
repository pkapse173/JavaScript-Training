var express = require('express');
var routes =express.Router();

router.get('/',function(req,res){
    res.send('Respond with a resource');
});

router.get('/userlist', function(req,res){
    var database = req.database;
    var collection = database.get('userlist');
    collection.find({},{}), function(error,docs){
        res.render(error);
    }      
});
module.exports = app;