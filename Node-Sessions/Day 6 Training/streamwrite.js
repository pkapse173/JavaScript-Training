var fs = require('fs');

var data = "We are learning something new today";

var writerStream =fs.createWriteStream('output.txt');


writerStream.on('data',function(info){
    data = data + info;
});

writerStream.on('finish',function(){
    console.log("Write complete");
    console.log(data);
});

writerStream.on('error',function(err){
    console.log(err.stack);

});
writerStream.end();
console.log("ended");