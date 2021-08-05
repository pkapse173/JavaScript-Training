//Require is the node.js keyword which is used  to call the node.js library.
var http = require('http'); 

//created server using the http library
var server = http.createServer(function(request,response){
response.writeHead(200,{"Content-Type":"text/plain"}); //set the connect header

//send the string to the response
response.end("Hello User from the server!!!! \n"); //This res is important.
});

server.listen(9090);
console.log("Server is active in the port number 9090");