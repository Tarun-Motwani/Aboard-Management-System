const dotenv = require('dotenv')
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const User = require('./model/userSchema');
const jwt = require('jsonwebtoken')
//const cookieParser = require('cookie-parser')
require('dotenv').config({path:'./config.env'})

require('./db/conn');

app.use(express.json());

app.use(require('./router/auth'));

// we link the router files to make our route easy
//app.use(cookieParser());
// app.set('view engine','hbs');
// app.get("/",(req,res)=>{
//  res.render('index')
// })
const PORT = process.env.PORT 

// Middleware



// app.get('/about',(req,res)=>{
//   res.send("Hello World from About me side")
// });

// app.get('/contact',(req,res)=>{
//   res.cookie('test','thapa')
//   res.send("Hello World from Contact side")
// });

// app.get('/signin',(req,res)=>{
//   res.send("Hello World from Login side")
// });

// app.get('/signup',(req,res)=>{
//   res.send("Hello World from Register side")
// });

app.listen(PORT,()=>{
    console.log(`Server is Running at port number ${PORT}`);
})