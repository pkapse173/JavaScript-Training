var P = require('p');   

function square(){
     
    var number_one = 10;
    var result = number_one * number_one;
    return result;
}

var result_promise = P.denodeify(square);

var promise = square;
promise.then(console.log("Square of the given number is :"));
