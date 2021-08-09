var filesystem = require('fs');

filesystem.appendFile('MyFirstfile.html',
                     'This statement is added!!! It says Hello_World',
function(error){
if(error) throw error;
console.log("The new data added successfully");
});

filesystem.open('Example.html','w',function(Error){
if(Error) throw error;
console.log("File opened successfully"); 
});

filesystem.writeFile('Example.html','This is the new content',function(error){
if(error) throw error;
console.log("New data has been added ")
});


filesystem.rename('MyFirstfile.html','MyNewfile.html',function(error){
if(error) throw error;
console.log("File Renamed");
})

filesystem.unlink('Example.html',function(error){
    if(error) throw error;
    console.log("file deleted");
});