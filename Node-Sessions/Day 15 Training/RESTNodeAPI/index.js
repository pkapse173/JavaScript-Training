//Importing the modules from libraries
const express = require('express');
const app = express();
app.use(express.json());

const courses = [
    {id:1, name:'Coursera course'},
    {id:2, name:'Udemy course'},
    {id:3, name:'Offline course'}
];

//PUT mrthod to update the data
app.put('/api/courses/:id',(req,res)=>
{ 
    var v=req.params.id;
    var course=courses.find(c=>c.id==parseInt(v));
    
    if(!course)
    {res.send("not found")
    return;
     }
     course.name=req.body.name;
    res.send(course);
})

//GET method to send the response to the server
app.get('/',(req,res) => {
    res.send("Hello World from RESTful API");
})

//GET method to retrieve all the data
app.get('/api/courses',(req,res) =>{
    res.send(courses);
})

//GET method to retrieve data by ID parameter
app.get('/api/courses/:id',(req,res) => {
    var course = courses.find(c => c.id = parseInt(req.params.id));
    if(!course) res.status(404).send("The course with the given ID is not found");
    res.send(course);
})

//POST method to add data 
app.post('/api/courses',(req,res) =>{
    if(!req.body.name || req.body.name.length < 3){
        res.status(404).send('Name is required and should be min 3 characters');
        return;
    }
    const course ={
        id : courses.length+1,
        name : req.body.name
    };
    courses.push(course);
    res.send(course);
})


//create server
const port = process.env.PORT || 4500
app.listen(port,() => console.log("Listening on the port ${port}..."));