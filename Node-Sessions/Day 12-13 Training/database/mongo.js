const mongoose =require('mongoose')
 
mongoose.connect("mongodb://localhost:27017/ProjectDatabase",{
  
}).then(()=>console.log("DataBase Connected..."))
.catch((e)=>console.log("DB Connection error",e))
