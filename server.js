const express = require('express');
const path = require('path');
const dotEnv = require("dotenv").config();

const App = express();
const database = require('./database');
App.use(express.json());
App.use(express.urlencoded({extended:false}));
App.use(express.static(path.join('public')));



App.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname , 'public' , { root: __dirname } ))
})


App.get('/signup',(req,res)=>{ 
    res.sendFile(path.join(__dirname ,'public' , "signup.html"))
})


App.post('/newUser' ,( req , res)=>{
    console.log(req.body) 
    res.json({si:'si'})
})



let PORT = process.env.PORT || 3000
App.listen(PORT,() => console.log(`app in port ${PORT}`) )

