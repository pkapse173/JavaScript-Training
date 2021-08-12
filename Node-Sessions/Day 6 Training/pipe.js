var fs = require('fs');
var zlib = require('zlib');

var readStream = fs.createReadStream('input.txt');

var writeStream = fs.createWriteStream('output.txt');

readerStream.pipe(writeStream);
fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(
    fs.createWriteStream('input.txt.gz')
);

//console.log("File compressed successfully");

fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(
    fs.createWriteStream('input.txt')
);
console.log("File decompressed successfully");

console.log("Program ended");


