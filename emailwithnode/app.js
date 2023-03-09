let nodemailer = require('nodemailer');
let dotenv = require('dotenv');
dotenv.config();

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'ahanda205@gmail.com',
        pass:process.env.PASS
    }
})

let mailOption = {
    from:'ahanda205@gmail.com',
    to:'ahanda206@hotmail.com',
    subject:'Sending Email using NodeJs',
    text:'This is Jan batch'
}

transporter.sendMail(mailOption,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log(`Email Sent: `+info.response);
    }
})