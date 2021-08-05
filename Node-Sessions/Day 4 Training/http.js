//core module http is loaded
var myfirstlocalhost = require('http');
myfirstlocalhost.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('Welcome to this server, you are on Port 3001, have a nice day!!!');
}).listen(3001);
console.log("Localhost is established and listening to the port 3001");
