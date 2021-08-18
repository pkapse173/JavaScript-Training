const mongoose =require('mongoose');

var CustSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }

});

var Customer = mongoose.model("Customer",CustSchema);
// Export the module to the book 
module.exports = Customer