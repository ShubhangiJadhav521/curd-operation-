const mongoose=require('mongoose');
 // mongoose require kara

//creating a database
mongoose.connect("mongodb://localhost:27017/EmployeeDB",{
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
}) 
require('./employee.model');