//creating the needed root server.
var express = require('express');

//Need to start the application
var app = express();

//Needing the port for the server
var port = process.env.PORT || 3000;

//Routing
var routes = require('./api/routes');
//using controller
routes(app);
app.listen(port,function(){
    console.log("Server started on port:" + " " + port);
});