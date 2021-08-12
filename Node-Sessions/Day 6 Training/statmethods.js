var fs = require('fs');

console.log("This gives me file information");

fs.stat('input.txt',function(err,stats){
    if(err){
        return cosole.log(err);

    }
    console.log(stats);
    console.log("File information gathered successfully");

    //check the file
    console.log("isFile ?" + stats.isFile());
    console.log("IS directory ?" + stats.isDirectory());
});