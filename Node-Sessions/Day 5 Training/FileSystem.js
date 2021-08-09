var filesystem = require('fs');
var http = require('http');
http.createServer(function(request,respond){

    //Read the files
    //open a file on the server and return its content
    filesystem.readFile('Example.html',function(error,data){
        respond.writeHead(200,{'Content-Type':'text/html'});
        respond.write("Reading the data of the file" + data);
        return respond.end();
    });

}).listen(3002);
console.log("Localhost is listening to port 3002");