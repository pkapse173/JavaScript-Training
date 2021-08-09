var filesystem = require('fs');

var readfile = filesystem.createReadStream('./file.js');

var writefile = filesystem.createWriteStream('./Example.html');
writefile.on('write', function(){
    console.log('File is writable');
});

readfile.on('open', function(){
    console.log('The file is open');
});