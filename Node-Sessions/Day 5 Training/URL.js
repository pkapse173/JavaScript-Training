var weblink = require('url');
//web address into readable parts.
var address = 'http://localhost:3000/example.htm?year=2021&month=august';

var q = weblink.parse(address,true);

//The parse method returns an object conatining url properties
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

//query property returns an object with all the querystring
var querydata = q.query;
console.log(querydata.month);
console.log(querydata.year);
console.log(querydata.date);


