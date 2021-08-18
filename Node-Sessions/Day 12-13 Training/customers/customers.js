const express = require('express');
const app = express();
const db = require('../database/mongo.js');
const bodyParser = require('body-parser'); 
const Customer = require('./customer');
app.use(bodyParser.json());

//This is a response to the Server
app.get('/',(request,response) => {
    response.send("Hello This is Customer Microservice!!!");
});

//Getting the data that fired from POSTMAN
app.get('/customers',(req,res) => {
    Customer.find().then((customer)=>res.status(200).send(customer)
    ).catch((e)=>res.status(404).send(e))
});

app.get("customers", (request,repsonse) => {
    Customer.find().then ((customers) => {
        response.json(customers)
    }).catch( err =>{ 
        if(err){ 
            throw err; 
        }})
})

app.get("/customers/:id", (request, response) => {
    Customer.findById(request.params.id).then((customer) => {
    
        if(customer){
            //Book data
            response.json(customer)
        }else{
            response.sendStatus(404);
        }
    }).catch(err => {
        if(err){
            throw err;
        }
    })
})


// FindOnAndRemove method will remove the instance which 
// is entered first ---> FIFO
app.delete("/customers/:id", (request, response) => {
    Customer.findOneAndRemove(request.params.id).then(() => {
        response.send("Customer Removed successfuly");
    }).catch(err => {
        if(err) throw err;
        })
});
// FindByIDANdDelete method deletes/removes the instance from the user 
// selects,
app.delete("/customers/:id", (request, response) => {
    Customer.findByidAndDelete(request.params.id).then(() => {
        response.send("Customer Removed successfuly");
    }).catch(err => {
        if(err) throw err;
        })
});

// Post method -- to read the data/record.
app.post("/customers", (request, response) => {
    console.log("Response received....!");
    console.log(request.body);
// model object for the customer.
    var customer = new Customer({
        name : request.body.name,
        age : request.body.age,
        city: request.body.city,
        address : request.body.address
    })
    // add new customer
    customer.save().then ((customer) => {
        console.log("New customer added successfully..!");
        return response.status(200).send(customer);
    }).catch((e) => {
        console.log("Error caught and handled too..", e);
        return response.status(404).send(e);
    })
});   

//create server
app.listen("3060", () => {
    console.log("Server is running fine!!! --------Customer Service ");
})