//create function to check request and reponse
function function_one(request,response){
    return request.get('http://localhost:3000') //Requesting the server
    //handle the errors
    .catch((err) => { console.log('Found Error'); //if no response ---return error
}).then((response) =>{
    console.log("Get request returned");
    console.log("Everything is fine");
});

}