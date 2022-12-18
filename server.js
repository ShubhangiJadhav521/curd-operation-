require('./models/db');
const express=require('express');
const validator=require('validator');
const path=require('path');
//const hbs = require("hbs");
const exphbs = require('express-handlebars');
const bodyparser=require('body-parser');
const employeeController=require('./Controllers/employeeController');
var app=express();
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());
app.set('views',path.join(__dirname,'/views/'));

app.engine('hbs', exphbs.engine({extname:'hbs', defaultLayout:'mainLayout',layoutsDir:__dirname+'/views/layouts'}));
app.set('view engine', 'hbs');
app.listen(8000,()=>{
    console.log('Express server started at port:8000');
});
app.use('/employee', employeeController);