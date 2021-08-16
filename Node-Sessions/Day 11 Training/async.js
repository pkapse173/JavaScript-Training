async function fun(){
    console.log("This is printing from Async function");
    return Promise.resolve("Pranav");
}
fun().then(function(result){
    console.log(result);
});

async function fun1(){
    console.log("This is printing from Async function");
    return Promise.resolve("Pranav");
}
fun1().then(function(result){
    console.log(result);
});

//await()
//let result1 = await Promise;

let promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Promise resolved')} , 5000);   
    });
    

//Async function
async function asyncfunc(){
    let result1 = await promise;
    console.log(result1);
    console.log("Responding after 5 seconds");
    console.log("Hello to the world from Await func");
}
asyncfunc();

//The async function allows the asyncronous method to be executed in 
//seemingly synchronous way , Thought he operation is asyncronous.
//it seems that the operation is exceuted in syncronous manner.

let promise_one;
let promise_two;
let promise_three;

async function asyncfun(){
    let result_one = await promise_one;
    let result_two = await promise_two;
    let result_three = await promise_three;

    console.log(result_one);
    console.log(result_two);
    console.log(result_three);
}

