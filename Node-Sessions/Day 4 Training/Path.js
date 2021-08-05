const path = require('path');

console.log("Directory of file :"+ path.dirname(__filename));
console.log("Directory of file :"+ path.extname(__filename));

//isAbsolute --> Determines if path is true or false

console.log(path.isAbsolute('C:\\Users\\Node\\Training'));
console.log(path.isAbsolute('\\Server'));

console.log(path.join('file1','file2','file1/file2'));

//path.normalize()  ------->Normalize the given path
console.log(path.normalize('g:/define//machine//time//\linux'));

//path.parse() --------> method returns an object whose properties
//                       represents significant elements of that

console.log(path.parse('C:\\Users\\Node\\Training'));

