//regular function
let x = function(s,y){
    return s+y;
}

//Arrow function
let y = (a,b) => x+y;

let greet = () => console.log("Good Morning");
greet();

//With parameter
let Greet = param => console.log(param);
Greet("Good afternoon champions!");

//Arrow function with an expression 
let age = 15;
let welcome = (age<18) ? () => console.log("You are minor,Not eligible to vote") :
() => console.log("You are eligible to vote");
welcome();

//multiple arrow function
function person(){
    this.name = "Pranav",
    this.age = 22,
    this.sayName = function(){
        console.log(this.age);
        //create arrow function
        let nestedfunc = () => {console.log(this.age);
                         () => {console.log(this.name);}}

        nestedfunc();
    }
}

//create  an object
const obj = new person();
obj.sayName();

//Arrow functions with Promises and callback
//Regular representation of callback and promises
asyncfunction().then(function(){
    return asyncfunction1();
}).then (function(){
    return asyncfunction2();
}).then(function(){
    finish; 
});


//Arrow function
asyncFunction()
.then(() => asyncFunction1())
.then(() => asyncfunction2())
.then(() => finish);