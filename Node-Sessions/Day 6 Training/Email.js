var nodemailer = require('nodemailer'); 

var send_service = nodemailer.createTransport({
    service : 'gmail',
    auth :{
        user : 'pkapse@gmail.com',
        pass : 'pass1234'
    }
});
//Composing the email
var mailOptions ={
    from : "kapsepranav@gmail.com",
    to : "pkapsegmail.com",    
    subject : "Greeting email!",
    text : "Hey friend good morning"
};

//Creating the server 
send_service.sendMail(mailOptions,function(error,info){
    if(error){
        console.log("There is an internal error");
    }else{
        console.log("Email sent" + info.response);
    }
});