const mongoose=require('mongoose');
var employeeSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:'This field is required'
    },
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    city:{
        type:String
    }
})
//Custom validation for email
employeeSchema.path('email').validate((val)=>{
     emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
     return emailRegex.test(val);
},'Invalid Email');
mongoose.model('Employee',employeeSchema);