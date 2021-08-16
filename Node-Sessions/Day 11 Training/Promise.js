var Promise=require("promise");
var promise=new Promise(function(resolve,reject)
{
console.log("custom promise");
});
console.log(promise);
////////////
let count=true;
var countVal=new Promise(function(resolve,reject)
{
resolve('resolved');
});
countVal.then(function successValue(result){
    console.log(result);
}).then (function successValue1 (result1){
    console.log("multiple times");
});
////////
let count1=true;
var countVal1=new Promise(function(resolve,reject)
{
reject('rejected');
});
countVal1.then(function successValue(result){
    console.log(result);
}).catch (function successValue1 (result1){
    console.log("catched");
});
countVal1.finally(function successValue(result1){
    console.log("finally");
});