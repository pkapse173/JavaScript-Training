//To create server http module imported
var http = require('http')
//To deal with files fs module imported
var filesystem = require('fs');
//To work with url contents url module imported
var url = require('url');

//to create server -- createserver method 
http.createServer(function(request,response){

    var query = url.parse(request.url,true);
    var filename = '.'+ query.pathname;

    filesystem.readFile(filename,function(error,data){
        if(error){
            response.writeHead(404,{'Content-Type':'text/html'});
            return response.end("404 not found");

        }
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(data);
        return response.end();
    });
}).listen(3004);
console.log("working");